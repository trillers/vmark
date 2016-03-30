var kvs = require('./kvs/QrCode');
var service = require('./services/QrCodeService');
var util = require('util');
var co = require('co');
var Promise = require('bluebird');

/**
 * abstract class
 * @constructor
 */
function Persistence(){
}

Persistence.prototype.loadQr = function(){
    throw new Error('loadQr is a abstract method, expected to implement');
};

Persistence.prototype.genSceneId = function(){
    throw new Error('genSceneId is a abstract method, expected to implement');
};

PlatformPersistence.prototype.update = function(me){
    throw new Error('update is a abstract method, expected to implement');
};

function TenantPersistence(){
    Persistence.call(this);
}
util.inherits(TenantPersistence, Persistence);

TenantPersistence.prototype.loadQr = function(sceneId, wechatId, callback){
    co(function*(){
        try{
            var qrDoc = yield service.loadBySceneIdAndWechatIdAsync(sceneId, wechatId);
            callback(null, qrDoc);
        }catch(e){
            callback(e);
        }
    })
};

TenantPersistence.prototype.loadQrAsync = Promise.promisify(TenantPersistence.prototype.loadQr);

TenantPersistence.prototype.genSceneId = function(qr){
    return qr.temp ? kvs.nextTenantTmpSceneIdAsync : kvs.nextTenantSceneIdAsync;
};

TenantPersistence.prototype.update = function(me, callback){
    service.updateBySceneIdAndWechatIdAsync(me.sceneId, me.wechatId, me)
        .then(function(){
            callback(null);
        })
        .catch(function(e){
            callback(e)
        })
};

TenantPersistence.prototype.updateAsync = Promise.promisify(TenantPersistence.prototype.update);

function PlatformPersistence(){
    Persistence.call(this);
}
util.inherits(PlatformPersistence, Persistence);

PlatformPersistence.prototype.loadQr = function(sceneId, wechatId, callback){
    var me = this;
    co(function*(){
        try{
            var qrDoc = yield service.loadBySceneIdAsync(sceneId);
            callback(null, qrDoc);
        }catch(e){
            callback(e);
        }
    })
};

PlatformPersistence.prototype.loadQrAsync = Promise.promisify(PlatformPersistence.prototype.loadQr);

PlatformPersistence.prototype.genSceneId = function(qr){
    return qr.temp ? kvs.nextTempSceneIdAsync : kvs.nextSceneIdAsync;
};

PlatformPersistence.prototype.update = function(me){
    service.updateBySceneIdAsync(me.sceneId, me)
        .then(function(){
            callback(null);
        })
        .catch(function(e){
            callback(e)
        })
};

PlatformPersistence.prototype.updateAsync = Promise.promisify(PlatformPersistence.prototype.update);

module.exports = {
    Persistence,
    TenantPersistence,
    PlatformPersistence
};


