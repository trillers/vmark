//var PartyType = require('../../common/models/TypeRegistry').item('PartyType');
//var IntegrationType = require('../../common/models/TypeRegistry').item('IntegrationType');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('Recontent')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            org:                {type: String, ref: 'Org', required: false}
            , originalUrl:      {type: String, required: true}
            , newUrl:           {type: String, required: false}
            //, adLayout:         {type: String, enum: AdLayout.valueList(), default: AdLayout.Bottom.value(), required: true}
            //, adLink:       {type: String, ref: 'AdLink', required: true}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;