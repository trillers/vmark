var context = require('../../../../context/context');
var wechatMediaService = context.services.wechatMediaService;
var wechatBotStatus = require('../../../common/models/TypeRegistry').item('WechatBotStatus');
var intentionStatus = require('../../../common/models/TypeRegistry').item('IntentionStatus');
var orgMediaService = context.services.orgMediaService;
var wechatApi = require('../../../wechat/common/api').api;
var botMananger = context.wechatBotManager;
var tenantWechatBotKv = context.kvs.tenantWechatBot;
var logger = require('../../../../app/logging').logger;
var inspect = require('util').inspect;
var co = require('co');
module.exports = function(context){
    var openid = context.weixin.FromUserName;
    co(function*(){
        try{
            var botOpenid = yield tenantWechatBotKv.getBotOpenidAsync(openid);
            if(botOpenid){
                var media = yield wechatMediaService.findBotByOpenidAsync(botOpenid);
                yield wechatMediaService.updateStatusByIdAsync(media._id, wechatBotStatus.Starting.value());
                var orgMedia = yield orgMediaService.loadByMediaIdAsync(media._id);
                yield orgMediaService.updateByIdAsync(orgMedia._id, {intentionStatus: intentionStatus.Logged.value()});
                var bot = botMananger.getWechatBot(media.customId);
                bot.restart();
                var text = '[系统]: 助手号重启成功';
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