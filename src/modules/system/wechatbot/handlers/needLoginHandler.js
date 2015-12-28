var context = require('../../../../context/context');
var wechatApi = require('../../../wechat/common/api').api;
var co = require('co');
var fs = require('fs');
var os = require('os');
var request = require('request');
var wsConns = require('../../../../app/wsConns');

module.exports = function(msg){
    co(function*(){
        console.log('need-login msg: ' + msg);
        console.log(msg);
        var botId = msg.AgentId;
        var mediaUrl = msg.MediaUrl;
        var kv = context.kvs.tenantWechatBot;
        if(wsConns['/bot']){
            wsConns['/bot'].write(JSON.stringify({
                channel: '/bot/need_login',
                data:{
                    agentId: msg.AgentId,
                    mediaUrl: msg.MediaUrl
                }
            }));
        }
        var operator = yield kv.getOperatorOpenidAsync(botId);
        var loginQrCodePath = os.tmpdir() + operator + '.png';
        request(mediaUrl).pipe(fs.createWriteStream(loginQrCodePath)).on('close', function () {
            wechatApi.uploadMedia(loginQrCodePath, 'image', function (err, data) {
                if (err) {
                    logger.error('Fail to update login qr code: ' + err);
                    return;
                }
                var mediaId = data.media_id;
                wechatApi.sendText(operator, "请用助手号微信扫描下方的二维码登陆:", function (err) {
                    console.log(err);
                    //TODO
                });
                wechatApi.sendImage(operator, mediaId, function (err) {
                    console.log(err);
                    //TODO
                });
            });
        });
    })
}
