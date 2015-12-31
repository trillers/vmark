var WechatMediaUserType = require('../../common/models/TypeRegistry').item('WechatMediaUserType');
var WechatMediaUserContactType = require('../../common/models/TypeRegistry').item('WechatMediaUserContactType');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('WechatMediaUser')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            host:           {type: String, ref: 'WechatMedia', required: true}
            , type:         {type: String, enum: WechatMediaUserType.valueList(), default: WechatMediaUserType.WechatSiteUser.value(), required: true}
            , contacttype:  {type: String, enum: WechatMediaUserContactType.valueList(), default: WechatMediaUserContactType.Contact.value(), required: true}

            , user:         {type: String} //平台用户id
            , openid:       {type: String} //服务号粉丝openid 或者 助手号联系人buid (bot's contact id)
            , nickname:     {type: String, required: true}
            , remark:       {type: String}
            , headimgurl:   {type: String}
            , sex:          {type: Number, default: 0} //0: unknown, 1: male, 2: female

            , country:      {type: String}
            , province:     {type: String}
            , city:         {type: String}
            , district:     {type: String}

            //微信公众号与助手号差异部分
            , language:     {type: String, default: 'zh_CN'} //公众号

            /*
             * 标签数组,包括自定义标签和类型标签两种:
             *  自定义标签类似 ['小资', '女'],
             *  类型标签类似: ['性别:男', '年级:初一']
             *  自定义标签和类型标签可以混用: ['小资', '性别:男']
             */
            , tags: [String]
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
