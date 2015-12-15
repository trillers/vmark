var EventEmitter = require('events').EventEmitter;
var util = {};
var u = require('util');
var Ar = function(){
    EventEmitter.call(this);
    this.s = {
        /**
         * Contains all components to prepare
         * @type {Object<*>}
         */
        allPrepare: {},
        /**
         * Contains all components to start
         * @type {Object<*>}
         */
        allReady: {},
        /**
         * user for gen unique ids for components
         */
        uid: 0
    };
    this.MAIN = []
};

u.inherits(Ar, EventEmitter);

/**
 * Registry main method as application's entry point
 */
Ar.prototype.ready = function(main){
    this.MAIN.push(main);
    return this;
};

var C = function(nameId, service, onMemberUp, onMemberDown){
    this.id = nameId;
    this.service = service;
    this.onMemberUp = onMemberUp;
    this.onMemberDown = onMemberDown;
};

/**
 * Register service
 * @param name  string
 * @param service Object<*>
 * @param opt_onMemberUp      function(ar, service)
 * @param opt_onMemberDown    function(ar, service)
 * @returns {ar}
 */
Ar.prototype.add = function(name, service, opt_onMemberUp, opt_onMemberDown){
    var argLen = [].slice.apply(arguments).length;
    var c = null;
    if(name && typeof name != 'string'){
        throw new Error('register service failed, when invoke ar.add');
    }
    if(argLen === 2){
        if(!(service instanceof C)){
            throw new Error('register service failed, when invoke ar.add');
        }
        c = arguments[1];
        c.id = name;
    }else{
        c = new C(name, service, opt_onMemberUp, opt_onMemberDown);
    }
    this._prepare(c);
    return this;
};

/**
 * member up
 * @param uid string
 * @param service Object<*>
 * @private
 */
Ar.prototype.up = function(uid, service){
    var r = this;
    r.s.allReady[uid] = service;
    if(r._allComplete()){
        var fns = r.MAIN;
        fns.forEach(function(fn){
            fn.apply(null);
        })
    }
};

/**
 * member down
 * @param id string
 */
Ar.prototype.down = function(id){
    delete this.s.allReady[id];
    this.emit('disconnect', {id: id})
};

/**
 *
 * @param fn function(*)
 */
Ar.prototype.disconnect = function(fn){
    var me = this;
    this.once('disconnect', function(data){
        fn.apply(null, [data.id]);
    });
    return this;
};

/**
 * Returns the ready instances's count
 * @return number
 */
Ar.prototype.getReadyCount = function() {
    return Object.keys(this.s.allReady).length;
};

/**
 * Returns the ready instance for the nameId provided
 *
 * @param {string} nameId
 * @return {C}
 */
Ar.prototype.getInstance = function(nameId) {
    if (this.s.allReady[nameId]) {
        return this.s.allReady[nameId];
    }
};

/**
 *
 * @param c C
 */
Ar.prototype._prepare = function(c){
    var r = this;
    r.s.allPrepare[c.id] = c;
    if(util.typeof(c.onMemberUp) != 'function' && util.typeof(c.onMemberDown) != 'function'){
        throw new Error('component\'s up and down must be a function');
    }
    c.onMemberUp.apply(null, [c.service, c.id]);
    c.onMemberDown.apply(null, [c.service, c.id]);
};

/**
 * check for all services ready or not
 * @returns {boolean}
 * @private
 */
Ar.prototype._allComplete = function(){
    return Object.keys(this.s.allPrepare).length === Object.keys(this.s.allReady).length
};

/**
 * Static method, use for specific client
 * @param client
 * @returns {C}
 */
Ar.prototype.redis = function(client){
    var r = this;
    if(!isRedisClientObj(client)){
        throw new Error('ar.redis invoke failed, input type illegal')
    }
    return new C(null, client, function(service, nameId){
        service.on('ready', function(){
            r.up(nameId, service)
        })
    }, function(service, nameId){
        service.on('error', function(){
            r.down(nameId);
        })
    })
};

Ar.prototype.mongoose = function(client){
    var r = this;
    if(!isMongooseClientObj(client.connection)){
        throw new Error('ar.mongoose invoke failed, input type illegal')
    }
    return new C(null, client, function(service, nameId){
        service.connection.on('open', function(){
            r.up(nameId, service)
        })
    }, function(service, nameId){
        service.connection.on('error', function(){
            r.down(nameId);
        })
    })
};

Ar.prototype.amqp = function(client){
    var r = this;
    if(!util.isPromise(client)){
        throw new Error('ar.amqp invoke failed, input type illegal')
    }
    return new C(null, client, function(service, nameId){
        service.then(function(conn){
            r.up(nameId, service)
        })
    }, function noop(){})
};
util.isObject = function(a){
    return util.typeof(a) === 'object'
};
util.typeof = function(a){
    var b = typeof a;
    if(typeof a === 'object'){
        if (a) {
            if (a instanceof Array) {
                return "array";
            }
            if (a instanceof Object) {
                return b;
            }
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) {
                return "object";
            }
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
                return "array";
            }
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
                return "function";
            }
        } else {
            return "null";
        }
    } else {
        if ("function" == b && "undefined" == typeof a.call) {
            return "object";
        }
    }
    return b;
};
util.isPromise = function(v){
    return !!v && util.isObject(v) && (util.typeof(v['then']) === 'function' )
};
function isRedisClientObj(v){
    return !!v && util.isObject(v) && (v instanceof EventEmitter) && !!v.listeners('ready')
}
function isMongooseClientObj(v){
    return !!v && util.isObject(v) && (v instanceof EventEmitter) && !!v.listeners('open')
}
module.exports = Ar;