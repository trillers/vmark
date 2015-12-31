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
            , org:          {type: String}
            , operator:     {type: String, ref: 'OrgMember'}

            /*
             * 标签数组,包括自定义标签和类型标签两种:
             *  自定义标签类似 ['小资', '女'],
             *  类型标签类似: ['性别:男', '年级:初一']
             *  自定义标签和类型标签可以混用: ['小资', '性别:男']
             */
            , tags:         [String]
            , desc:         {type: String}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;