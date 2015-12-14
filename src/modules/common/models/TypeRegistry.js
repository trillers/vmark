var TypeRegistry = require('../../../framework/model/TypeRegistry');
var registry = new TypeRegistry('TypeRegistry', 'TypeRegistry', 'TypeRegistry');

registry
    .item('PartyType', 'PartyType', '租户类型')
    .addChild('Personal','p', '个人')
    .addChild('Organizational','o', '组织')

    .up().item('IntegrationType', 'IntegrationType', '租户集成类型')
    .addChild('Internal','i', '内部')
    .addChild('External','e', '外部')

    .up().item('OrgMemberRole', 'OrgMemberRole', '组织成员角色')
    .addChild('TenantAdmin','ta', '租户管理员')
    .addChild('TenantOperation','to', '租户运营')
    .addChild('PlatformAdmin','pa', '平台管理员')
    .addChild('PlatformOperation','po', '平台运营')

    .up().item('WechatMediaType', 'WechatMediaType', '微信媒介类型')
    .addChild('WechatSite','ws', '微信公众号')
    .addChild('WechatBot','wb', '微信助手号')
    .addChild('WechatWeb','ww', '微信微站')

    .up().item('WechatMediaUserType', 'WechatMediaUserType', '微信媒介用户类型')
    .addChild('WechatSiteUser','wsu', '微信公众号粉丝')
    .addChild('WechatBotContact','wbc', '微信助手号联系人')
    .addChild('WechatWebUser','wwu', '微信微站用户')

    .up().item('MsgType', 'MsgType', '消息类型')
    .addChild('text','text', '文本')
    .addChild('voice','voice', '语音')
    .addChild('image','image', '图片')
    .addChild('video','video', '视频')
    .addChild('shortvideo','shortvideo', '小视频')

    .up().item('BatchType', 'BatchType', '群发类型')
    .addChild('single','single', '个人')
    .addChild('group','group', '群组')


module.exports = registry;