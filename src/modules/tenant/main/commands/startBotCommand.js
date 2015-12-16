var co = require('co');
var inspect = require('util').inspect;
var context = require('../../../../context/context');
var wechatMediaService = context.services.wechatMediaService;
var wechatBotStatus = require('../../../common/models/TypeRegistry').item('WechatBotStatus');
var intentionStatus = require('../../../common/models/TypeRegistry').item('IntentionStatus');
var orgMediaService = context.services.orgMediaService;
var wechatApi = require('../../../wechat/common/api').api;
var botMananger = context.wechatBotManager;
var tenantWechatBotKv = context.kvs.tenantWechatBot;

module.exports = function(context){
    var openid = context.weixin.FromUserName;
    co(function*(){
        try{
            var botOpenid = yield tenantWechatBotKv.getBotOpenid(openid);
            var media = yield wechatMediaService.findBotByOpenidAsync(botOpenid);
            if(media){
                yield wechatMediaService.updateStatusByIdAsync(media._id, wechatBotStatus.Starting.value());
                var orgMedia = yield orgMediaService.loadByMediaIdAsync(media._id);
                yield orgMediaService.updateByIdAsync(orgMedia._id, {intentionStatus: intentionStatus.Logged.value()});
                var bot = botMananger.getWechatBot(media.custom_id);
                bot.start({intention: 'login', mode: 'trusted'});
                var text = '[系统]: 助手号正在启动, 请稍后';
                yield wechatApi.sendTextAsync(openid, text);
            }else{
                var errTxt = '[系统]: 没有相关助手号';
                yield wechatApi.sendTextAsync(openid, errTxt);
            }
        }catch (err) {
            logger.error('Fail to view bot\'s status ,' + inspect(err));
        }
    })
};