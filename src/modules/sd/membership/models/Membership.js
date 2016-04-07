var typeRegistry = require('../../../common/models/TypeRegistry');
var MembershipType = typeRegistry.item('MembershipType');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('Membership')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withRank()
        .withProperties({
            upLine:    {type: String, ref: 'TenantUser'},
            downLine:  [{type: String, ref: 'TennatUser'}],
            user:      {type: String, ref: 'TenantUser'},
            org:       {type: String, ref: 'Org'},
            media:     {type: String, ref: 'WechatMedia'},
            type:      {type: String, enum: MembershipType.valueList(), default: MembershipType.Customer.value()},
            desc:      {type: String}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;