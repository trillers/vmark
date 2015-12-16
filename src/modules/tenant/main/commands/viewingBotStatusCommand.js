var inspect = require('util').inspect;
var co = require('co');
var context= require('../../../../context/context');
var wechatMediaService = context.services.wechatMediaService;
var wechatApi = require('../../../wechat/common/api').api;
var WechatBotStatus = require('../../../common/models/TypeRegistry').item('WechatBotStatus');
var tenantWechatBotKv = context.kvs.tenantWechatBot;
module.exports = function(ctx){
    var openid = ctx.weixin.FromUserName;
    co(function*(){
        try{
            var botOpenId = yield tenantWechatBotKv.getBotOpenidAsync(openid);
            var bot = yield wechatMediaService.findBotByOpenidAsync(botOpenId);
            if(bot){
                var text = '[系统]: 微信助手号当前状态为 ' + WechatBotStatus.valueNames(bot.status);
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