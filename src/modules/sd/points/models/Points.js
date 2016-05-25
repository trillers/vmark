var typeRegistry = require('../../../common/models/TypeRegistry');
var LiveStatus = typeRegistry.item('LiveStatus');
var CommissionType = typeRegistry.item('CommissionType');
var OrderStatus = typeRegistry.item('OrderStatus');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('Points')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            membership: {type: String, ref: 'Membership', required: true},
            rest: {type: String, default: 0},
            num: {type: Number, default: 0},
            desc: {type: String}
        })
        .build();

    return schema.model(true);
};

module.exports = Model;