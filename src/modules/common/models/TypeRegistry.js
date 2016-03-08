var TypeRegistry = require('../../../framework/model/TypeRegistry');
var registry = new TypeRegistry('TypeRegistry', 'TypeRegistry', 'TypeRegistry');

registry
    .item('LifeFlag', 'LifeFlag', '状态')
    .addChild('Active','a', '已激活')
    .addChild('Inactive','i', '已锁定')
    .addChild('Deleted','d', '已删除')

    .up().item('PartyType', 'PartyType', '租户类型')
    .addChild('Personal','p', '个人')
    .addChild('Organizational','o', '组织')

    .up().item('IntegrationType', 'IntegrationType', '租户集成类型')
    .addChild('Internal','i', '内部')
    .addChild('External','e', '外部')

    .up().item('OrgMemberRole', 'OrgMemberRole', '组织成员角色')
    .addChild('TenantAdmin','ta', '租户管理员')
    .addChild('TenantOperation','to', '租户运营')
    .addChild('TenantWechatBot','twb', '微信助手号')
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

    .up().item('WechatMediaUserContactType', 'WechatMediaUserContactType', '微信联系人类型')
    .addChild('Contact','contact', '微信公众号粉丝')
    .addChild('Group','group', '微信助手号联系人')

    .up().item('IntentionStatus', 'IntentionStatus', '启动状态') //服务号或助手号启动状态
    .addChild('Logged','logged', '已启动')
    .addChild('Exited','exited', '已停止')

    .up().item('WechatBotStatus', 'WechatBotStatus', '状态') //助手号状态
    .addChild('Starting','starting', '启动中')
    .addChild('Logging','logging', '登录中')
    .addChild('Mislogged','mislogged', '错误登录')
    .addChild('Logged','logged', '已登录')
    .addChild('Exceptional','exceptional', '异常中')
    .addChild('Aborted','aborted', '已崩溃')
    .addChild('Exited','exited', '已停止')

    .up().item('MsgType', 'MsgType', '消息类型')
    .addChild('text','text', '文本')
    .addChild('voice','voice', '语音')
    .addChild('image','image', '图片')
    .addChild('video','video', '视频')
    .addChild('shortvideo','shortvideo', '小视频')

    .up().item('BroadcastType', 'BroadcastType', '群发类型')
    .addChild('single','single', '个人')
    .addChild('group','group', '群组')

    .up().item('GroupType', 'GroupType', '分组类型')
    .addChild('Selected','selected', '自选分组')
    .addChild('Tagged','tagged', '标签分组')

    .up().item('GroupScope', 'GroupScope', '分组范围')
    .addChild('Tenant','t', '租户')
    .addChild('Operator','o', '运营者')

    .up().item('AdlinkLayout', 'AdlinkLayout', '广告布局')
    .addChild('Bottom','bottom', '底部')
    .addChild('Top','top', '顶部')

    .up().item('AdlinkTheme', 'AdlinkTheme', '广告条主题')
    .addChild('Dark','dark', '深色')
    .addChild('Light','light', '浅色')

    .up().item('UserStatus', 'UserStatus', '用户状态')
    .addChild('Anonymous','a', '匿名')
    .addChild('Registered','r', '已注册')
    .addChild('Verified','v', '已验证')

    .up().item('UserType', 'UserType', '用户类型')
    .addChild('Admin','a', '系统管理员')
    .addChild('Tenant','t', '租户')
    .addChild('Customer','c', '终端用户') /*参与活动用户等*/

    .up().item('PosterType', 'PosterType', '海报类型')
    .addChild('activity','ac', '活动')
    .addChild('participant','pa', '参与者')

module.exports = registry;