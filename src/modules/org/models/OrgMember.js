var OrgMemberRole = require('../../common/models/TypeRegistry').item('OrgMemberRole');
var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('OrgMember')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            org:         {type: String, ref: 'Org', required: true}
            , nickname:     {type: String, required: true}
            , headimgurl:   {type: String}
            , role:         {type: String, enum: OrgMemberRole.valueList(), default: OrgMemberRole.TenantAdmin.value(), required: true}
            , remark:       {type: String}
            , desc:         {type: String}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;
