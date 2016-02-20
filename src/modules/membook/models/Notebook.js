var TypeRegistry = require('../../common/models/TypeRegistry');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('Notebook')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withRank()
        .withProperties({
            title: {type: String},
            initiator: {type: String, ref: 'User'}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;
