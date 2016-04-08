var EventEmitter = require('events').EventEmitter;
var Promise = require('bluebird');
var service = require('./services/QrCodeService');
var u = require('util');
var co = require('co');
var wechatApiCache = require('../../tenant/wechat/api-cache');
var wechatApiStandalone = require('../../wechat/common/api').api;
var Qr = require('./Qr');
var TenantPersistence = require('./Persistence').TenantPersistence;

function QrType(qr){
    this.registry = qr && qr.registry || null;
    this.data = qr && qr.data || null;
    this.temp = qr && qr.temp || false;
    this.type = qr && qr.type || null;
    this.expire = qr && qr.expire || null;
}
u.inherits(QrType, EventEmitter);

var typeProto = QrType.prototype;

typeProto.onAccess = function(handler){
    this.on('access', handler);
};
typeProto.onExpire = function(handler){
    this.on('expire', handler);
};
typeProto.createQr = function(qrData, cb){
    var me = this;
    var callback = cb ? cb.bind(me) : null;
    co(function*(){
        try{
            if(me.registry.persistence instanceof TenantPersistence){
                if(!qrData || !qrData.wechatId){
                    throw new Error('tenant qr registry expected wechatId');
                }
            }
            if(typeof qrData === 'function'){
                callback = qrData.bind(me);
                qrData = {};
            }
            var qr = qrData;
            var defaultExpire = 30*24*3600;
            qr.type = me.type;
            if(!qr.hasOwnProperty('temp')){
                qr.temp = me.temp;
            }
            if(qr.temp){
                qr.expire = qr && qr.expire || me.expire || defaultExpire;
            }
            qr._events = me._events;
            var createQrMethod = qr.temp ? 'createTmpQRCode' : 'createLimitQRCode';
            var sceneId = null;
            if(qr.sceneId){
                sceneId = qr.sceneId
            }else{
                var args = [];
                if(qr && qr.wechatId){
                    args.push(qr.wechatId);
                }
                sceneId = yield me.registry.persistence.genSceneId(qr).apply(null, args);
                qr.sceneId = sceneId;
            }
            var createQrArgs = [sceneId];
            qr.temp && createQrArgs.push(defaultExpire);

            var wechatApi = wechatApiStandalone;

            if(qr.wechatId){
                wechatApi = yield wechatApiCache.get(qr.wechatId).api;
            }

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
            qr = yield service.createAsync(qr);
            qr.typeObj = me;
            callback && callback(null, new Qr(qr));
        }
        catch(e){
            console.error(e);
            callback && callback(e)
        }
    })
};
typeProto.getQrById = function(id, callback){
    var me = this;
    co(function*(){
        try{
            var qrDoc = yield service.loadByIdAsync(id);
            qrDoc.sceneId = qrDoc.scene_id;
            var qr = new Qr(qrDoc);
            qr.typeObj = me;
            callback(null, qr);
        }catch(e){
            callback(e);
        }
    })
};

module.exports = QrType;

