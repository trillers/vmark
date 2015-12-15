var WechatMediaType = require('../../common/models/TypeRegistry').item('WechatMediaType');
var WechatBotStatus = require('../../common/models/TypeRegistry').item('WechatBotStatus');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('WechatMedia')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            org:       {type: String, ref: 'Org', required: true}
            , type:         {type: String, enum: WechatMediaType.valueList(), default: WechatMediaType.WechatSite.value(), required: true}
            , originalId: {type: String} //原始微信号ID，
            , customId:   {type: String} //自定义ID
            , status: {type: String,  enum: WechatBotStatus.valueList(), default: WechatBotStatus.Off.value(), require: true} //wechat bot status
            , name:           {type: String, required: true}
            , headimgurl:   {type: String}
            , qrcodeurl:   {type: String} //服务号或者助手号的微信二维码

            , appId:   {type: String}   //as openid when it is wechat bot
            , appSecret:   {type: String}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;
/**
 * 服务号：
 id
 原始ID
 自定义ID
 名称
 appId
 appSecret

 id
 原始ID
 自定义ID
 名称/昵称
 botId
 qrCodeUrl

 */
