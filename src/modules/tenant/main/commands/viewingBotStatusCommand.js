var context= require('../../../../context/context');
var wechatMediaService = context.services.wechatMediaService;
var wechatApi = require('../../../wechat/common/api').api;
var WechatBotStatus = require('../../../common/models/TypeRegistry').item('WechatBotStatus');
var inspect = require('util').inspect;
var co = require('co');
module.exports = function(context){
    var openid = context.weixin.FromUserName;
    co(function*(){
        try{
            var bot = yield wechatMediaService.findBotByOpenidAsync(openid);
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