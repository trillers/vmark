var context = require('../../../../context/context');
var co = require('co');
var WechatMediaUserType = require('../../../common/models/TypeRegistry').item('WechatMediaUserType');
var copyPlace = require('../../../wechat/common/helper').copyPlace;

module.exports = function (msg){
    co(function* (){
        var logger = context.logger;
        try{
            //msg.Contact<headimgid, bid, nickname, sex, place, botid>
            var contact = msg.Contact;
            var botId = msg.AgentId;
            var wechatMediaService = context.services.wechatMediaService;
            var wechatMediaUserService = context.services.wechatMediaUserService;
            var media = yield wechatMediaService.findBotByOpenidAsync(botId);
            var json = {
                host: media._id,
                type: WechatMediaUserType.WechatBotContact.value(),
                remark: contact.bid,
                nickname: contact.nickname,
                headimgurl: contact.headimgid,
                sex: contact.sex
            };
            copyPlace(json, contact.place);
            yield wechatMediaUserService.createAsync(json);
        }
        catch(e){
            logger.error(e)
        }
    })
};