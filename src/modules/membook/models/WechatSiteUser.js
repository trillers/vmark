var typeRegistry = require('../../common/models/TypeRegistry');
var UserType = typeRegistry.item('UserType');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('WechatSiteUser')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            user:           {type: String, ref: 'User', required: true}
            , type:         {type: String, enum: UserType.valueList(), default: UserType.Anonymous.value(), required: true}
            , openid:       {type: String, required: true}
            , nickname:     {type: String, required: true}
            , remark:       {type: String}
            , headimgurl:   {type: String}
            , sex:          {type: Number, default: 0} //0: unknown, 1: male, 2: female

            , country:      {type: String}
            , province:     {type: String}
            , city:         {type: String}
            , district:     {type: String}

            //公众号特有
            , language:         {type: String, default: 'zh_CN'}    //公众号 - 使用语言
            , subscribe:        {type: Number, default: 0}          //公众号 - 用户是否关注
            , subscribe_time:   {type: Date}                        //公众号 - 用户最近一次关注时间

            //agent token for 公众号 - 微站, 参见 agentToken.generate()
            , at:     {type: String}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;
/**
 服务号粉丝
 id
 openid
 nickname
 headimgurl
 sex

 *language

 country
 province
 city

 *remark


 助手号联系人
 id
 openid / bcid
 nickname
 headimgurl
 sex

 country
 province
 city
 district

 */
