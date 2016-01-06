var u = require('util');
var Promise = require('bluebird');
var EventEmitter = require('events').EventEmitter;
var wechatApi = require('../../../wechat/common/api').api;
var kvs = require('./kvs/QrCode');
var service = require('./services/QrCodeService');
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
    this.typeHm = {}
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
 * @param listeners Object<function...>
 * @returns {QrType}
 */
QrTypeRegistry.prototype.newType = function(type, listeners){
    var json = {};
    if(typeof type === 'string'){
        json.type = type;
    }else{
        throw new Error('Failed to register qr to qr manager input error, first argument must be string or Qr')
    }
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
 * handle the qr that own given sceneId, load it from db,
 * get the corresponding qr type, trigger corresponding events
 * @param sceneId string
 * @return null
 */
QrTypeRegistry.prototype.handle = function(sceneId){
    var me = this;
    co(function*(){
        try{
            var qrDoc = yield service.loadBySceneIdAsync(sceneId);
            var qrType = qrDoc.type;
            var qr = new Qr(qrDoc);
            qr.setRegistry(me);
            if(qr.temp && qr.isInvalid()){
                return me.getQrType(qrType).emit('expire', qr);
            }
            me.getQrType(qrType).emit('access', qr);
        }catch(e){
            console.error(e)
        }
    })
};

/**
 * Responsible for binding events and generate qr code
 * @param qrtype Object
 * @constructor
 */
function QrType(qrtype){
    this.type = qrtype.type;
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
    this.on('access', handler);
};

/**
 * Generate qr
 * @param qrData
 * @param callback
 */
QrType.prototype.createQr = function(qrData, callback){
    var me = this;
    co(function*(){
        try{
            if(typeof qrData === 'function'){
                callback = qrData
                qrData = {};
            }
            var qr = qrData;
            var defaultExpire = 30*24*3600;
            qr.type = me.type;
            qr.temp = (qr && qr.temp)? true : false;
            if(qr.temp){
                qr.expire = qr && qr.expire || defaultExpire;
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
            yield service.createAsync(qr);
            callback(null, new Qr(qr));
        }
        catch(e){
            console.error(e);
            callback(e)
        }
    })
};

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
    this.views = 0;
    this._events = qr._events || null;
    this.crtOn = qr && qr.crtOn || null;
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
Qr.prototype.invalidQr = function(callback){
    var me = this;
    co(function*(){
        try{
            me.expire = 0;
            yield service.updateBySceneIdAsync(me.sceneId, me);
            if(!me.registry){
                return callback(new Error('has no such registry in current qr'));
            }
            var qrType = me.registry.getQrType(me.type);
            qrType.emit('expire', me);
            callback(null);
        }catch(e){
            callback(e);
        }
    })
};

module.exports = QrTypeRegistry;