var typeRegistry = require('../../../common/models/TypeRegistry');
var LiveStatus = typeRegistry.item('LiveStatus');
var CommissionType = typeRegistry.item('CommissionType');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('Order')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withRank()
        .withProperties({
            distributors: {type: String, ref: 'Membership'},
            bespeak:      {type: String, ref: 'Bespeak'},
            finalPrice:   {type: Number, required: true}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;