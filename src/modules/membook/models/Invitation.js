var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('Invitation')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withRank()
        .withProperties({
            initiator: {type: String, ref: 'User'},
            notebook: {type: String, ref: 'Notebook'},
            valid: {type: Boolean, required: true, default: true}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;
