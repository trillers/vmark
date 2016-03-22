var typeRegistry = require('../../../common/models/TypeRegistry');
var LiveStatus = typeRegistry.item('LiveStatus');
var CommissionType = typeRegistry.item('CommissionType');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('Course')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withRank()
        .withProperties({
            user:                  {type: String, ref: 'TenantUser', required: true},
            upLine:                {type: String, ref: 'TenantUser'},
            desc:                  {type: String}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;