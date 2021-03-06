var Model = function(DomainBuilder) {
        var schema = DomainBuilder
            .i('PowerParticipant')
            .withBasis()
            .withLifeFlag()
            .withCreatedOn()
            .withProperties({
                    activity: {type: String, ref: 'PowerActivity'}
                    , user: {type: String, ref: 'PlatformUser'}
                    , phone: {type: String}
                    , total_power: {type: Number}
                    , help_friends: [{type: String}] //openid array
            })
            .build();
        return schema.model(true);
}


module.exports = Model;