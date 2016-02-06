var contextLoader = require('../../src/context');
var context = contextLoader.context;
contextLoader.check(function(){
    var qrTypeRegistry = require('../../src/modules/wechatsite/qr');
    var wechatApi = require('../../src/modules/wechat/common/api').api;
    var channelQrType = qrTypeRegistry.getQrType('ch');
    channelQrType.createQr({data: ''}, function(err, qr) {
        var url = wechatApi.showQRCodeURL(qr.ticket);
        console.info(url);
    });
});


