var fs = require('fs');
var os = require('os');
var request = require('request');
var logger = require('../../../../app/logging').logger;
var wechatApi = require('../../../wechat/common/api').api;
var qrRegistry = require('../../../wechatsite/qr');
var recontentTenantType = qrRegistry.getQrType('rec-ta');
var path = require('path');

module.exports = function (context) {
    var openid = context.weixin.FromUserName;
    try{
        recontentTenantType.createQr(function(err, qr){
            var url = wechatApi.showQRCodeURL(qr.ticket);

            var qrCodePath = path.join(os.tmpdir(), 'recontent_' + openid + '.png');
            request(url).pipe(fs.createWriteStream(qrCodePath)).on('close', function () {
                wechatApi.uploadMedia(qrCodePath, 'image', function (err, data) {
                    if (err) {
                        logger.error('Fail to request org registration qr code: ' + err);
                        return;
                    }
                    var mediaId = data.media_id;
                    wechatApi.sendImage(openid, mediaId, function (err, data) {
                        if (err) {
                            logger.error('Fail to request org registration qr code: ' + err);
                        }
                    });
                });
            });
        });
    }
    catch(err){
        logger.error('Fail to request org registration qr code: ' + err);
    }
};