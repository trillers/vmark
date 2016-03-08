var PosterType = require('../../../common/models/TypeRegistry').item('PosterType');

var Model = function(DomainBuilder) {
    var schema = DomainBuilder
        .i('RepacketPoster')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            user: {type: String, ref: 'PlatformUser'}
            , redpacket: {type: String, ref: 'ActivityRedpacket', require: true}
            , participant: {type: String, ref: 'RedpacketParticipant'}
            , mediaId: {type: String, require: true}
            , sceneId: {type: String, require: true}
            , expire:{type: Number, default: 259200} //temp media will expire after 3 days
            , type: {type: String, enum: PosterType.valueList(), required: true}
        })
        .build();
    return schema.model(true);
}


module.exports = Model;