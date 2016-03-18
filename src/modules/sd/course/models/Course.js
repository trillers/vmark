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
            name:                  {type: String, required: true},
            slogan:                {type: String, required: true},
            listPrice:             {type: String, required: true},
            upLine1CommissionType: {type: String, enum: CommissionType.valueList(), default: CommissionType.Cash.value()},
            upLine2CommissionType: {type: String, enum: CommissionType.valueList(), default: CommissionType.Cash.value()},
            upLine3CommissionType: {type: String, enum: CommissionType.valueList(), default: CommissionType.Cash.value()},
            upLine1CommissionValue:{type: String},
            upLine2CommissionValue:{type: String},
            upLine3CommissionValue:{type: String},
            liveStatus:            {type: String, enum: LiveStatus.valueList(), default: LiveStatus.Idle.value(), required: true},
            actionTime:            {type: String},
            memberDiscounts:       {type: String},
            desc:                  {type: String},
            details:               {type: String},
            tenant:                {type: String, ref: 'Org', required: true},
            operator:              {type: String, ref: 'OrgMember'}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;