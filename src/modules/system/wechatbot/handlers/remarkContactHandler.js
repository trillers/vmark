var context = require('../../../../context/context');
var co = require('co');
var WechatMediaUserType = require('../../../common/models/TypeRegistry').item('WechatMediaUserType');
var copyPlace = require('../../../wechat/common/helper').copyPlace;

module.exports = function (msg){
    co(function* (){
        var logger = context.logger;
        try{
            //msg.Contact<headimgid, remark, nickname, sex, place, botid>
            var contact = msg.Contact;
            var botId = msg.AgentId;
            var wechatMediaService = context.services.wechatMediaService;
            var wechatMediaUserService = context.services.wechatMediaUserService;
            var media = yield wechatMediaService.findBotByOpenidAsync(botId);
            if(media){
                var meidaUser = yield wechatMediaUserService.loadByRemarkAsync(contact.remark);
                /**
                 * mediaUser that own remark provided, update user info
                 */
                if(meidaUser){
                    //update user's info
                    var jsonForUpdate = {
                        nickname: contact.nickname,
                        headimgurl: contact.headimgid,
                        sex: contact.sex
                    };
                    yield wechatMediaUserService.updateByRemarkAsync(contact.remark, jsonForUpdate);
                    return;
                }
                /**
                 * no such mediaUser that own remark provided
                 * create a new mediaUser
                 * TODO: wait for scale
                 * first, matching remark, make a marker on the remain user when matching complete
                 * then throw the remain users with the new user together to the group of to-do
                 * allow the owner to resolve
                 */
                var jsonForCreate = {
                    host: media._id,
                    type: WechatMediaUserType.WechatBotContact.value(),
                    remark: contact.remark,
                    nickname: contact.nickname,
                    headimgurl: contact.headimgid,
                    sex: contact.sex
                };
                console.error(jsonForCreate);
                copyPlace(jsonForCreate, contact.place);
                yield wechatMediaUserService.createAsync(jsonForCreate);
            }
            logger.error('Failed to sync the contact, no such media');
        }
        catch(e){
            logger.error(e)
        }
    })
};