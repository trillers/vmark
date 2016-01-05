var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('Tag')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            uses:           {type: Number, required: true, default: 1},
            name:           {type: String, required: true},
            tenant:         {type: String, ref: 'Org', required: true}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;