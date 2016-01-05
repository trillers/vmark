var AdlinkLayoutType = require('../../common/models/TypeRegistry').item('AdlinkLayoutType');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('Adlink')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            org:                {type: String, ref: 'Org', required: true}
            , name:             {type: String, required: true}
            , adwords:          {type: String, required: true}
            , url:              {type: String, required: true}
            , phone:            {type: String, required: false}
            , layout:           {type: String, enum: AdlinkLayoutType.valueList(), default: AdlinkLayoutType.Bottom.value(), required: true}
            , theme:            {type: String, required: false}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;