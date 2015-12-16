var context = require('../../../../context/context');
var logger = context.logger;
var co = require('co');

module.exports = function(msg){
    co(function*(){
        var wechatMediaService = context.services.wechatMediaService;
        var media = yield wechatMediaService.findBotByOpenidAsync(msg.AgentId);
        if(media){
            yield wechatMediaService.updateStatusById(media._id, msg.NewStatus);
            logger.info('success update wechat bot status, changeInfo: ' + msg);
        }else{
            logger.error('agent status change handler err: no such media, changeInfo: ' + msg);
        }

    })
}