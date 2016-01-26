var typeRegistry = require('../../common/models/TypeRegistry');
var UserStatus = typeRegistry.item('UserStatus');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('WechatSiteUser')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            user:           {type: String, ref: 'User', required: true}
            , status:       {type: String, enum: UserStatus.valueList(), default: UserStatus.Anonymous.value(), required: true}
            , openid:       {type: String, required: true}
            , unionid:       {type: String, required: false}
            , nickname:     {type: String, required: true}
            , headimgurl:   {type: String}
            , sex:          {type: Number, default: 0} //0: unknown, 1: male, 2: female

            , country:      {type: String}
            , province:     {type: String}
            , city:         {type: String}
            , district:     {type: String}

            //公众号特有
            , subscribe:        {type: Number, default: 0}          //公众号 - 用户是否关注
            , subscribe_time:   {type: Date}                        //公众号 - 用户最近一次关注时间
            , language:         {type: String, default: 'zh_CN'}    //公众号 - 使用语言
            , remark:           {type: String}                      //公众号 - 使用语言
            , groupid:          {type: String}                      //公众号 - 使用语言

            //agent token for 公众号 - 微站, 参见 agentToken.generate()
            , at:     {type: String}

            /*
             * open token for 公众号 - 微站, 参见 openToken.generate()
             * one openid can generate one open token which is public and visible
             */
            , ot:     {type: String}

        })
        .build();
    return schema.model(true);
};

module.exports = Model;
