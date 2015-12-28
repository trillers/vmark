var context = require('../../../../context/context');
var logger = context.logger;
var wsConns = require('../../../../app/wsConns');
var co = require('co');

module.exports = function(msg){
    co(function*(){
        var wechatMediaService = context.services.wechatMediaService;
        var media = yield wechatMediaService.findBotByOpenidAsync(msg.AgentId);
        if(media){
            yield wechatMediaService.updateStatusById(media._id, msg.NewStatus);
            wsConns['/bot'].write(JSON.stringify({channel: '/bot/status', data:{mediaId: media._id, newStatus: msg.NewStatus}}));
            logger.info('success update wechat bot status, changeInfo: ' + msg);
        }else{
            logger.error('agent status change handler err: no such media, changeInfo: ' + msg);
        }

    })
}
