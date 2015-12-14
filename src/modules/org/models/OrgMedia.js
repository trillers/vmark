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
            type:           {type: String, enum: WechatMediaType.valueList(), default: WechatMediaType.WechatSite.value(), required: true}
            , org:          {type: String, ref: 'Org', required: true}
            , media:        {type: String, ref: 'WechatMedia', required: true}
            , user:         {type: String, ref: 'PlatformUser', required: true}
            , admin:        {type: String, ref: 'OrgMember', required: false}
            , intentionStatus:     {type: String, enum: IntentionStatus.valueList(), default: IntentionStatus.On.value(), required: true}
            , desc:         {type: String}
        })
        .build();
    return schema.model(true);
};

module.exports = Model;
