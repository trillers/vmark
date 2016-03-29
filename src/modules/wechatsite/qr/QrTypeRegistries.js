var co = require('co');
var QrType = require('./QrType');
var Qr = require('./Qr');
var Persistence = require('./Persistence');
var tenantPersistence = new Persistence.TenantPersistence();
var platformPersistence = new Persistence.PlatformPersistence();

function QrTypeRegistry(persistence){
    this.persistence = persistence;
    this.typeHm = {
        default:new QrType('default')
    }
}

var regProto = QrTypeRegistry.prototype;


regProto.newType = function(type, options, listeners){
    var json = {};
    if(typeof type === 'string'){
        json.type = type;
    }else{
        throw new Error('Failed to register qr to qr manager input error, first argument must be string or Qr')
    }
    json.registry = this;
    Object.assign(json, options);
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

regProto.getQrType = function(type){
    return this.typeHm[type] || null;
};

regProto.getQr = function(sceneId, callback){
    var me = this;
    co(function*(){
        try{
            var qrDoc = yield me.persistence.loadQr(sceneId, me);
            var qr = new Qr(qrDoc);
            qr.setRegistry(me);
            qr.typeObj = me.getQrType(qrDoc.type);
            callback(null, qr);
        }catch(e){
            callback(e);
        }
    })
};

regProto.handle = function(sceneId, openid, wechatId){
    var me = this;
    co(function*(){
        try{
            var qrDoc = yield me.persistence.loadQrAsync(sceneId, wechatId);
            if(!qrDoc){
                return me.getQrType('default').emit('access', {sceneId: sceneId}, openid, wechatId);
            }
            var qrType = qrDoc.type;
            qrDoc.sceneId = qrDoc.scene_id;
            var qr = new Qr(qrDoc);
            qr.setRegistry(me);
            qr.typeObj = me.getQrType(qrType);
            if(qr.temp && qr.isInvalid()){
                return qr.typeObj.emit('expire', qr, openid, wechatId);
            }
            me.getQrType(qrType).emit('access', qr, openid, wechatId);
        }catch(e){
            console.error(e)
        }
    })
};

module.exports = {
    platformQrTypeRegistry: new QrTypeRegistry(platformPersistence),
    tenantQrTypeRegistry: new QrTypeRegistry(tenantPersistence)
};


