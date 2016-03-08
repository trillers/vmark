var Model = function(DomainBuilder) {
        var schema = DomainBuilder
            .i('RedpacketParticipant')
            .withBasis()
            .withLifeFlag()
            .withCreatedOn()
            .withProperties({
                    redpacket: {type: String, ref: 'ActivityRedpacket'}
                    , user: {type: String, ref: 'PlatformUser'}
                    , phone: {type: String}
                    , total_money: {type: Number}
                    , help_friends: [{type: String}] //openid array
            })
            .build();
        return schema.model(true);
}


module.exports = Model;