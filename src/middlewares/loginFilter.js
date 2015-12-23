var context = require('../context/context');
var logger = context.logger;
var path = require('path');
var request = require('request');
var fs = require('fs');
var kv = context.kvs.PlatformUser;
var wechatApi = require('../modules/wechat/common/api').api;
var QrHandler = require('../modules/qrchannel/common/QrHandler');
var handler = new QrHandler(false, 'lg', null);
var QrChannelService = require('../modules/qrchannel/services/QrChannelService');

var filterFn = function*(next){
    try{
        var sceneId = this.cookies.get('sceneId');
        var qr = {};
        if(sceneId){
            qr = yield QrChannelService.loadBySceneIdAsync(sceneId);
            if(new Date(qr.expireDate) < new Data()){
                qr = yield handler.autoCreateAsync(null);
            }
        }else{
            qr = yield handler.autoCreateAsync(null);
        }
        this.qrCodeUrl = wechatApi.showQRCodeURL(qr.ticket);
        this.connId = qr.scene_id;
        yield next;
    }
    catch(err){
        logger.error('Fail to create qr code in login filter: ' + err);
    }
}

module.exports = filterFn;