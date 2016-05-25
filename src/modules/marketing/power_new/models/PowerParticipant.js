var Model = function(DomainBuilder) {
        var schema = DomainBuilder
            .i('PowerParticipant')
            .withBasis()
            .withLifeFlag()
            .withCreatedOn()
            .withProperties({
                    activity: {type: String, ref: 'PowerActivity'}
                    , user: {type: String}
                    , phone: {type: String}
                    , total_power: {type: Number}
                    , help_friends: [{type: String}] //openid array
                    , poster: {type: String, ref: 'PowerPoster'} //participant poster
                    , prize_level: {type: Number, default: 0}
            })
            .build();
        return schema.model(true);
}


module.exports = Model;