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
            upLine:                {type: String, ref: 'WechatMediaUser'},
            desc:                  {type: String},
            user:                  {type: String, ref: 'WechatMediaUser', required: true}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;