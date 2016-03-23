var typeRegistry = require('../../../common/models/TypeRegistry');
var LiveStatus = typeRegistry.item('LiveStatus');
var CommissionType = typeRegistry.item('CommissionType');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('Catalog')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withRank()
        .withProperties({
            name:                  {type: String, required: true},
            products:              [{type: String, ref: 'Course'}],
            tenant:                {type: String, ref: 'Org', required: true},
            media:                 {type: String, ref: 'WechatMedia', required: true},
            desc:                  {type: String},
            operator:              {type: String, ref: 'OrgMember'},
            updOn:                 {type: Date}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;