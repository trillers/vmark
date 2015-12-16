var context= require('../../../../');
var wechatMediaService = context.services.wechatMediaService;
var wechatApi = require('../../../wechat/common/api').api;
var botMananger = context.botMananger;
var inspect = require(util).inspect;
var co = require('co');
module.exports = function(context){
    var openid = context.weixin.FromUserName;
    co(function*(){
        try{
            var media = yield wechatMediaService.findBotByOpenid(openid);
            
            if(bot){
                var bot = botMananger.getBot(media.custom_id);
                bot.start();
                var text = '[系统]: 助手号正在启动';
                yield wechatApi.sendText(openid, text);
            }else{
                var errTxt = '[系统]: 没有相关助手号';
                yield wechatApi.sendText(openid, errTxt);
            }
        }catch (err) {
            logger.error('Fail to view bot\'s status ,' + inspect(err));
        }
    })
};