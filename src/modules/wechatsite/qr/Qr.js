var kvs = require('./kvs/QrCode');
var service = require('./services/QrCodeService');
var u = require('util');
var EventEmitter = require('events').EventEmitter;
var Promise = require('bluebird');

function Qr(qr){
    this.registry = null;
    this._id = qr && qr._id || null;
    this.temp = qr && qr.temp || false;
    this.type = qr && qr.type || null;
    this.ticket = qr && qr.ticket || null;
    this.sceneId = qr && qr.sceneId || qr.scene_id || null;
    this.expire = qr && qr.expire || null;
    this.data = qr && qr.data || null;
    this.views = 0;
    this._events = qr && qr._events || null;
    this.crtOn = qr && qr.crtOn || null;
    this.typeObj = qr && qr.typeObj || null;
    this.wechatId = qr && qr.wechatId || null;
}
u.inherits(Qr, EventEmitter);


/**
 * set Registry
 * @param registry
 */
Qr.prototype.setRegistry = function(registry){
    this.registry = registry;
};

/**
 * Check the current qr is invalid or not
 * @returns {boolean}
 */
Qr.prototype.isInvalid = function(){
    if(!this.temp){
        return false;
    }
    var oldTimestamp = (new Date(this.crtOn)).getTime();
    var nowTimestamp = (new Date()).getTime();
    return nowTimestamp >= oldTimestamp + this.expire * 1000;
};

/**
 * Allow the qr code expired
 * @param callback Function<Error, *>
 */
Qr.prototype.invalid = function(callback){
    var me = this;
    callback = callback ? callback : function noop(){};
    if(me.expire <=0){
        return callback(null);
    }
    me.expire = 0;
    var registry = me.registry || me.typeObj.registry;
    if(!registry){
        throw new Error('qr invalid expect a registry');
    }
    registry.persistence.updateAsync(me)
        .then(function(){
            me.typeObj.emit('expire', me);
            callback(null);
        })
        .catch(function(e){
            callback(e);
        })
};
Qr.prototype.invalidAsync = Promise.promisify(Qr.prototype.invalid);

module.exports = Qr;