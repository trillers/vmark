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
            , originalTitle:    {type: String, required: false}
            , newUrl:           {type: String, required: false}
            , adLink:           {type: String, ref: 'Adlink', required: false}
            , adName:           {type: String, required: false}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;