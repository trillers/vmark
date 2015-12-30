var context = require('../../../../context/context');
var logger = context.logger;
var ws = require('../../../../app/ws')();
var co = require('co');

module.exports = function(msg){
    co(function*(){
        try{
            var wechatMediaService = context.services.wechatMediaService;
            var media = yield wechatMediaService.findBotByOpenidAsync(msg.AgentId);
            if(media){
                yield wechatMediaService.updateStatusByIdAsync(media._id, msg.NewStatus);
                ws.of('/bot/st_change').in(media.org).clients().emit({
                    agentId: msg.AgentId,
                    newStatus: msg.NewStatus
                });
                logger.info('success update wechat bot status, changeInfo: ' + msg);
            }else{
                logger.error('agent status change handler err: no such media, changeInfo: ' + msg);
            }
        }catch(e){
            console.error(e);
        }
    })
}
