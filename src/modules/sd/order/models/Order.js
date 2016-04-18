var typeRegistry = require('../../../common/models/TypeRegistry');
var LiveStatus = typeRegistry.item('LiveStatus');
var CommissionType = typeRegistry.item('CommissionType');
var OrderStatus = typeRegistry.item('OrderStatus');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('Order')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            distributors: [{type: String, ref: 'Membership'}],
            closingDistributors: [{type: String, ref: 'Membership'}],
            org: {type: String, ref: 'Org'},
            bespeak:      {type: String, ref: 'Bespeak'},
            finalPrice:   {type: Number, required: true},
            status: {type: String, enum: OrderStatus.valueList(), default: OrderStatus.unFinish.value(), required: true}
        })
        .build();

    schema.virtual('status').get(function() {
            if(this.closingDistributors.length === this.distributors.length) {
                return OrderStatus.unFinish.value();
            }
            return OrderStatus.finish.value();
        })
        .set(function(status) {
            this.status = status;
        });


    return schema.model(true);
};

module.exports = Model;