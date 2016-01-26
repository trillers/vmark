var TypeRegistry = require('../../common/models/TypeRegistry');
var InteractType = TypeRegistry.item('InteractType');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('Interaction')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            content: {type: String},
            initiator: {type: String, ref: 'User'},
            type: {type: String, enum: InteractType.valueList(), required: true, default: InteractType.Like.value()},
        })
        .build();
    return schema.model(true);
};

module.exports = Model;
