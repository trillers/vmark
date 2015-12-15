var context = require('../../../../index');
var wechatApi = require('../../../wechat/common/api').api;
var co = require('co');

module.exports = function(msg){
    co(function*(){
        var botId = msg.AgentId;
        var wechatMediaService = content.services.wechatMediaService;
        var media = yield wechatMediaService.findBotByOpenidAsync(botId);
        var orgMedia
    })
}
