var context = require('../context/context');
var logger = context.logger;
var path = require('path');
var request = require('request');
var fs = require('fs');
var kv = context.kvs.PlatformUser;
var wechatApi = require('../modules/wechat/common/api').api;
var qrRegistry = require('../modules/wechatsite/qr');
//var QrHandler = require('../modules/qrchannel/common/QrHandler');
//var handler = new QrHandler(false, 'lg', null);
//var QrChannelService = require('../modules/qrchannel/services/QrChannelService');

var filterFn = function*(next){
    try{
        var qr = null;
        var sceneId = this.cookies.get('sceneId');
        var loginQrType = qrRegistry.getQrType('lg');

        if(sceneId){
            qr = yield loginQrType.getQrAsync(sceneId);
            if(qr.isInvalid()){
                qr = yield loginQrType.createQrAsync();
            }
            //qr = yield QrChannelService.loadBySceneIdAsync(sceneId);
            //if(new Date(qr.expireDate) < new Date()){
            //    qr = yield handler.autoCreateAsync(null);
            //}
        }else{
            //qr = yield handler.autoCreateAsync(null);
            qr = yield loginQrType.createQrAsync();
        }
        this.qrCodeUrl = wechatApi.showQRCodeURL(qr.ticket);
        console.log("*******************")
        console.error(qr)
        this.connId = qr.sceneId || qr.scene_id;
        yield next;
    }
    catch(err){
        console.error(err)
        logger.error('Fail to create qr code in login filter: ' + err);
    }
}

module.exports = filterFn;