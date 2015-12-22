var typeRegistry = require('../../common/models/TypeRegistry');
var GroupType = typeRegistry.item('GroupType');
var GroupScope = typeRegistry.item('GroupScope');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('Group')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withRank()
        .withProperties({
            name:           {type: String, required: true}
            , type:         {type: String, enum: GroupType.valueList(), default: GroupType.Selected.value(), required: true}
            , scope:        {type: String, enum: GroupScope.valueList(), default: GroupScope.Operator.value(), required: true}
            , medias:       [{type: String}]
            , operator:     {type: String, ref: 'OrgMember'}
            , desc:         {type: String}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;