var typeRegistry = require('../../../common/models/TypeRegistry');
var LiveStatus = typeRegistry.item('LiveStatus');
var CommissionType = typeRegistry.item('CommissionType');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('Bespeak')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withRank()
        .withProperties({
            product:               {type: String, ref: 'Course'},
            media:                 {type: String, ref: 'WechatMedia', required: true},
            telephone:             {type: String, required: true},
            user:                  {type: String, ref: 'TenantUser', required: true}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;