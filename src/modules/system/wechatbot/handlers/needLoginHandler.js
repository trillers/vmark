var context = require('../../../../index');
var wechatApi = require('../../../wechat/common/api').api;
var co = require('co');

module.exports = function(msg){
    co(function*(){
        var botId = msg.AgentId;
        var mediaId = msg.MediaId;
        var kv = context.kvs.TenantWechatBot;
        var operator = yield kv.getOperatorOpenidAsync(botId);
        wechatApi.sendText(operator, "请用助手号微信扫描下方的二维码登陆:", function (err) {
            console.log(err);
            //TODO
        });
        wechatApi.sendImage(operator, mediaId, function (err) {
            console.log(err);
            //TODO
        });
    })
}
