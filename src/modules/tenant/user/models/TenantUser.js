var OrgMemberRole = require('../../../common/models/TypeRegistry').item('OrgMemberRole');
var typeRegistry = require('../../../common/models/TypeRegistry');
var UserStatus = typeRegistry.item('TenantUserStatus');
var UserType = typeRegistry.item('UserType');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('TenantUser')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            status: {type: String, enum: UserStatus.valueList(), default: UserStatus.BaseInfo.value(), required: true}
            , wechatId:       {type: String} //服务号原始id
            , openid:       {type: String} //服务号粉丝openid 或者 助手号联系人buid (bot's contact id)
            , nickname:     {type: String, required: true}
            , headimgurl:   {type: String}
            , sex:          {type: Number, default: 0} //0: unknown, 1: male, 2: female

            , country: {type: String}
            , province: {type: String}
            , city: {type: String}
            , district: {type: String}
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
