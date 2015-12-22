var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('GroupMember')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            group:            {type: String, ref: 'Group', required: true}
            , media:         {type: String, ref: 'WechatMedia', required: true}
            , member:         {type: String, ref: 'WechatMediaUser', required: true}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;
