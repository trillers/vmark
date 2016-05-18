var MsgType = require('../../common/models/TypeRegistry').item('MsgType');

var Model = function (domainBuilder) {
    var schema = domainBuilder
        .i('WechatMediaSetting')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            originalId: {type: String} //原始微信号ID
            , subscribeReply: {
                type: {type: String, enum: MsgType.valueList(), default: MsgType.text.value(), required: true}
                , content: {type: String}
                , mediaId: {type: String}
            }
            , menu: {type: String}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;
