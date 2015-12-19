var context = require('../../../../context/context');
var co = require('co');
var WechatMediaUserType = require('../../../common/models/TypeRegistry').item('WechatMediaUserType');

module.exports = function(msg){
    co(function* (){
        //msg.Data<headimgid, remark, nickname, sex, place, botid>
        var contact = msg.Data;
        var botId = msg.AgentId;
        var wechatMediaService = context.services.wechatMediaService;
        var wechatMediaUserService = context.services.wechatMediaUserService;

        //org:       {type: String, ref: 'Org', required: true}
        //, type:         {type: String, enum: WechatMediaType.valueList(), default: WechatMediaType.WechatSite.value(), required: true}
        //, originalId: {type: String} //原始微信号ID，
        //, customId:   {type: String} //自定义ID
        //, status: {type: String,  enum: WechatBotStatus.valueList(), default: WechatBotStatus.Exited.value(), require: true} //wechat bot status
        //, name:           {type: String, required: true}
        //, headimgurl:   {type: String}
        //, sex:          {type: Number, default: 0} //0: unknown, 1: male, 2: female
        //, qrcodeurl:   {type: String} //服务号或者助手号的微信二维码
        //
        //, appId:   {type: String}   //as openid when it is wechat bot
        //, appSecret:   {type: String}
        var media = yield wechatMediaService.loadByIdAsync(botId);
        //var json = {
        //    org:
        //    type:
        //    originalId:,
        //    customId:,
        //    status:,
        //    name:,
        //    headimgurl:,
        //    sex:,
        //    qrcodeurl:
        //
        //};
        //yield wechatMediaUserService.createAsync(json);
    })
};