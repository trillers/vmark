var co = require('co');
var inspect = require('util').inspect;
var WechatBotStatus = require('../../../common/models/TypeRegistry').item('WechatBotStatus');
var wechatApi = require('../../../wechat/common/api').api;
var serviceContext = require('../../../../context/context');
var wechatMediaService = serviceContext.services.wechatMediaService;
var tenantWechatBotKv = serviceContext.kvs.tenantWechatBot;
module.exports = function(context){
    var openid = context.weixin.FromUserName;
    co(function*(){
        try{
            var botOpenid = yield tenantWechatBotKv.getBotOpenidAsync(openid);
            var bot = yield wechatMediaService.findBotByOpenidAsync(botOpenid);
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