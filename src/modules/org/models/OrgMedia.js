var typeRegistry = require('../../common/models/TypeRegistry');
var OrgMemberRole = typeRegistry.item('OrgMemberRole');
var WechatMediaType = typeRegistry.item('WechatMediaType');
var IntentionStatus = typeRegistry.item('IntentionStatus');

var Model = function(domainBuilder){
    var schema = domainBuilder
        .i('OrgMedia')
        .withBasis()
        .withLifeFlag()
        .withCreatedOn()
        .withProperties({
            org:            {type: String, ref: 'Org', required: true}
            , type:         {type: String, enum: WechatMediaType.valueList(), default: WechatMediaType.WechatSite.value(), required: true}
            , media:        {type: String, ref: 'WechatMedia', required: true}
            , user:         {type: String, ref: 'PlatformUser', required: true}
            , operator:     {type: String, ref: 'OrgMember', required: false}
            , intentionStatus:     {type: String, enum: IntentionStatus.valueList(), default: IntentionStatus.Logged.value(), required: false}
            , desc:         {type: String}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;
