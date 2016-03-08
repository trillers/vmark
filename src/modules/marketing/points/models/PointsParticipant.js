var Model = function(DomainBuilder) {
        var schema = DomainBuilder
            .i('PointsParticipant')
            .withBasis()
            .withLifeFlag()
            .withCreatedOn()
            .withProperties({
                    points: {type: String, ref: 'ActivityPoints'}
                    , user: {type: String, ref: 'PlatformUser'}
                    , phone: {type: String}
                    , total_points: {type: Number}
                    , help_friends: [{type: String}] //openid array
            })
            .build();
        return schema.model(true);
}


module.exports = Model;