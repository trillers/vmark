var u = require('util');
var Promise = require('bluebird');
var EventEmitter = require('events').EventEmitter;
var wechatApi = require('../../wechat/common/api').api;
var kvs = require('./kvs/QrCode');
var service = require('./services/QrCodeService');
var _ = require('underscore');
var co = require('co');

/**
 * Responsible for generate and registry qr type
 * @param option Object<appId: string, appSecret: string>
 * @constructor
 */
function QrTypeRegistry(option){
    var option = option || {};
    this.appId = option.appId || null;
    this.appSecret = option.appSecret || null;
    this.typeHm = {
        default:new QrType('default')
    }
}

/**
 * Generate a Qr code
 * @param qrData
 * @param callback
 * @returns {*}
 */
QrTypeRegistry.prototype.createQr = function(qrData, callback){
    if(!qrData.type){
        return callback(new Error('create Qr must have qr [type] in input'));
    }
    this.getQrType(qrData.type).createQr(qrData, callback);
};
QrTypeRegistry.prototype.createQrAsync = Promise.promisify(QrTypeRegistry.prototype.createQr);

/**
 * helper for generate scene_id
 * @param qr
 * @returns {*}
 * @static
 */
QrTypeRegistry.genSceneId = function(qr){
    return qr.temp ? kvs.nextTempSceneIdAsync : kvs.nextSceneIdAsync;
};

/**
 * Generate a qr type
 * @param type string
 * @param options
 * @param listeners Object<function...>
 * @returns {QrType}
 */
QrTypeRegistry.prototype.newType = function(type, options, listeners){
    var json = {};
    if(typeof type === 'string'){
        json.type = type;
    }else{
        throw new Error('Failed to register qr to qr manager input error, first argument must be string or Qr')
    }
    _.extend(json, options);
    if(listeners && typeof listeners != 'object'){
        throw new Error('Failed to register qr to qr manager input error, second arguments must be object')
    }
    var qrtype = new QrType(json);
    listeners && listeners.onScan      && qrtype.on('scan', listeners.onScan.bind(qrtype));
    listeners && listeners.onAccess    && qrtype.on('access', listeners.onAccess.bind(qrtype));
    listeners && listeners.onExpire    && qrtype.on('expire', listeners.onExpire.bind(qrtype));
    listeners && listeners.onSubscribe && qrtype.on('subscribe', listeners.onSubscribe.bind(qrtype));
    this.typeHm[qrtype.type] = qrtype;
    return qrtype;
};

/**
 * get qr type in hmset
 * @param type string
 * @returns {QrType|null}
 */
QrTypeRegistry.prototype.getQrType = function(type){
    return this.typeHm[type] || null;
};

/**
 * get qr from db
 * @param sceneId string
 * @param callback function
 * @returns {Qr|null}
 */
QrTypeRegistry.prototype.getQr = function(sceneId, callback){
    var me = this;
    co(function*(){
        try{
            var qrDoc = yield service.loadBySceneIdAsync(sceneId);
            var qr = new Qr(qrDoc);
            qr.setRegistry(me);
            qr.typeObj = me.getQrType(qrDoc.type);
            callback(null, qr);
        }catch(e){
            callback(e);
        }
    })
};
QrTypeRegistry.prototype.getQrAsync = Promise.promisify(QrTypeRegistry.prototype.createQr);

/**
 * handle the qr that own given sceneId, load it from db,
 * get the corresponding qr type, trigger corresponding events
 * @param sceneId string
 * @param openid string
 * @return null
 */
QrTypeRegistry.prototype.handle = function(sceneId, openid){
    var me = this;
    co(function*(){
        try{
            var qrDoc = yield service.loadBySceneIdAsync(sceneId);
            if(!qrDoc){
                return me.getQrType('default').emit('access', {sceneId: sceneId}, openid);
            }
            var qrType = qrDoc.type;
            var qr = new Qr(qrDoc);
            qr.setRegistry(me);
            qr.typeObj = me.getQrType(qrType);
            if(qr.temp && qr.isInvalid()){
                return qr.typeObj.emit('expire', qr, openid);
            }
            me.getQrType(qrType).emit('access', qr, openid);
        }catch(e){
            console.error(e)
        }
    })
};

/**
 * Responsible for binding events and generate qr code
 * @param qr Object
 * @constructor
 */
function QrType(qr){
    this.registry = null;
    this.data = qr && qr.data || null;
    this.temp = qr && qr.temp || false;
    this.type = qr && qr.type || null;
    this.expire = qr && qr.expire || null;
}
u.inherits(QrType, EventEmitter);

/**
 * bind access event handler
 * @param handler
 */
QrType.prototype.onAccess = function(handler){
    this.on('access', handler);
};

/**
 * bind expire event handler
 * @param handler
 */
QrType.prototype.onExpire = function(handler){
    this.on('expire', handler);
};

/**
 * Generate qr
 * @param qrData
 * @param cb
 */
QrType.prototype.createQr = function(qrData, cb){
    var me = this;
    var callback = cb ? cb.bind(me) : null;
    co(function*(){
        try{
            if(typeof qrData === 'function'){
                callback = qrData.bind(me);
                qrData = {};
            }
            var qr = qrData;
            var defaultExpire = 30*24*3600;
            qr.type = me.type;
            qr.temp = (qr && qr.temp)? true : me.temp;

            if(qr.temp){
                qr.expire = qr && qr.expire || me.expire || defaultExpire;
            }
            qr._events = me._events;
            var createQrMethod = qr.temp ? 'createTmpQRCode' : 'createLimitQRCode';
            var sceneId = null;
            if(qr.sceneId){
                sceneId = qr.sceneId
            }else{
                sceneId = yield QrTypeRegistry.genSceneId(qr)();
                qr.sceneId = sceneId;
            }
            var createQrArgs = [sceneId];
            qr.temp && createQrArgs.push(defaultExpire);
            var genFn = function (){
                function wechatApiNodeStyleWrapper(){
                    var args = [].slice.apply(arguments);
                    var callback = args[args.length-1];
                    var cb = function(err, result){
                        return callback(err, result);
                    };
                    return wechatApi[createQrMethod].apply(wechatApi, createQrArgs.concat([cb]));
                }
                return Promise.promisify(wechatApiNodeStyleWrapper)
            };
            var fn = genFn();
            var result = yield fn.apply(null, createQrArgs);
            qr.ticket = result.ticket;
            qr.scene_id = sceneId;
            qr.typeObj = me;
            yield service.createAsync(qr);
            callback && callback(null, new Qr(qr));
        }
        catch(e){
            console.error(e);
            callback && callback(e)
        }
    })
};
QrType.prototype.createQrAsync = Promise.promisify(QrType.prototype.createQr);

/**
 * get qr from db
 * @param sceneId string
 * @param callback function
 * @returns {Qr|null}
 */
QrType.prototype.getQr = function(sceneId, callback){
    var me = this;
    co(function*(){
        try{
            var qrDoc = yield service.loadBySceneIdAsync(sceneId);
            var qr = new Qr(qrDoc);
            qr.typeObj = me;
            callback(null, qr);
        }catch(e){
            callback(e);
        }
    })
};
QrType.prototype.getQrAsync = Promise.promisify(QrType.prototype.getQr);

/**
 * Qr
 * @param qr
 * @constructor
 */
function Qr(qr){
    this.registry = null;
    this._id = qr && qr._id || null;
    this.temp = qr && qr.temp || false;
    this.type = qr && qr.type || null;
    this.ticket = qr && qr.ticket || null;
    this.sceneId = qr && qr.sceneId || null;
    this.expire = qr && qr.expire || null;
    this.data = qr && qr.data || null;
    this.views = 0;
    this._events = qr._events || null;
    this.crtOn = qr && qr.crtOn || null;
    this.typeObj = qr && qr.typeObj || null
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
    service.updateBySceneIdAsync(me.sceneId, me)
        .then(function(){
            me.typeObj.emit('expire', me);
            callback(null);
        })
        .catch(function(e){
            console.error(e);
            callback(e)
        })
};
Qr.prototype.invalidAsync = Promise.promisify(Qr.prototype.invalid);

module.exports = QrTypeRegistry;