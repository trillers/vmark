var typeRegistry = require('../../common/models/TypeRegistry');
var UserType = typeRegistry.item('UserType');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('User')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            type:         {type: String, enum: UserType.valueList(), default: UserType.Anonymous.value(), required: true}
            , nickname:     {type: String, required: true}
            , headimgurl:   {type: String}
            , sex:          {type: Number, default: 0} //0: unknown, 1: male, 2: female

            , country: {type: String}
            , province: {type: String}
            , city: {type: String}
            , district: {type: String}

            /*
             * 标签数组,包括自定义标签和类型标签两种:
             *  自定义标签类似 ['小资', '女'],
             *  类型标签类似: ['性别:男', '年级:初一']
             *  自定义标签和类型标签可以混用: ['小资', '性别:男']
             */
            , tags: [String]

        })
        .build();
    return schema.model(true);
};

module.exports = Model;