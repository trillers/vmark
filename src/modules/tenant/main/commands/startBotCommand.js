var context = require('../../../../context/context');
var wechatMediaService = context.services.wechatMediaService;
var wechatBotStatus = require('../../../common/models/TypeRegistry').item('WechatBotStatus');
var intentionStatus = require('../../../common/models/TypeRegistry').item('IntentionStatus');
var orgMediaService = context.services.orgMediaService;
var wechatApi = require('../../../wechat/common/api').api;
var botMananger = context.botMananger;
var inspect = require('util').inspect;
var co = require('co');
module.exports = function(context){
    var openid = context.weixin.FromUserName;
    co(function*(){
        try{
            var media = yield wechatMediaService.findBotByOpenid(openid);
            if(media){
                yield wechatMediaService.updateStatusById(media._id, wechatBotStatus.Starting.value());
                var orgMedia = yield orgMediaService.loadByMediaId(media._id);
                yield orgMediaService.updateById(orgMedia._id, {intentionStatus: intentionStatus.Logged.value()});
                var bot = botMananger.getBot(media.custom_id);
                bot.start({intention: 'login', mode: 'trusted'});
                var text = '[系统]: 助手号正在启动, 请稍后';
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