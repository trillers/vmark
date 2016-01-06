var typeRegistry = require('../../common/models/TypeRegistry');
var AdlinkLayout = typeRegistry.item('AdlinkLayout');
var AdlinkTheme = typeRegistry.item('AdlinkTheme');

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
            , layout:           {type: String, enum: AdlinkLayout.valueList(), default: AdlinkLayout.Bottom.value(), required: true}
            , theme:           {type: String, enum: AdlinkTheme.valueList(), default: AdlinkTheme.Dark.value(), required: true}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;