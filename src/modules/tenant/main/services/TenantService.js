var co = require('co');
var cbUtil = require('../../../../framework/callback');
var typeRegistry = require('../../../common/models/TypeRegistry');
var OrgMemberRole = typeRegistry.item('OrgMemberRole');
var WechatMediaType = typeRegistry.item('WechatMediaType');
var IntentionStatus = typeRegistry.item('IntentionStatus');

var Service = function(context){
    this.context = context;
};

Service.prototype.registerPersonalTenant = function(openid, callback) {
    var logger = this.context.logger;
    var tenantOrgService = this.context.services.tenantOrgService;
    var tenantOrgMemberService = this.context.services.tenantOrgMemberService;
    var platformUserService = this.context.services.platformUserService;
    co(function*() {
        var user = yield platformUserService.loadPlatformUserByOpenidAsync(openid);
        var tenant = null;
        var tenantAdmin = null;
        if (user) {
            if (user.posts && user.posts.length > 0) {
                //user exists and has posts already, just skip registration
                if (callback) callback(null, user);
                return;
            }
            else{
                //has user and has no posts, no need to create user, just to register it.
            }
        } else {
            user = yield platformUserService.createPlatformUserAsync(openid);
            if(!user){
                if (callback) callback(new Error('Fail to create platform wechat site user openid ' + openid));
                return;
            }
        }

        /*
         * Create tenant from wechat site user
         */
        var tenantJson = {
            name: user.nickname,
            desc: user.nickname
        };
        tenant = yield tenantOrgService.createPersonalTenantAsync(tenantJson);
        if(!tenant){
            if (callback) callback(new Error('Fail to create tenant from wechat site user'));
            return;
        }

        /*
         * Create tenant admin from wechat site user
         */
        var tenantAdminJson = {
            org: tenant.id
            , nickname: user.nickname
            , headimgurl: user.headimgurl
            , remark: user.nickname
        };

        tenantAdmin = yield tenantOrgMemberService.createTenantAdminAsync(tenantAdminJson);
        if(!tenantAdmin){
            if (callback) callback(new Error('Fail to create tenant admin from wechat site user'));
            return;
        }

        var postJson = {
            org: tenantAdmin.org
            , member: tenantAdmin._id //TODO use id
            , role: tenantAdmin.role
        };
        var conditions = {
            _id: user._id
        };
        var update = {
            $push: {
                posts: postJson
            }
        };
        user = yield platformUserService.updateAsync(conditions, update);
        if (callback) callback(null, user);
    }).catch(Error, function (err) {
        logger.error('Fail to register personal tenant for openid ' + openid + ': ' + err);
        logger.error(err.stack);
        if (callback) callback(err);
    });
};

var bindBotResults = {
    NO_OPERATOR: 'NO_OPERATOR',
    NOT_ADMIN: 'NOT_ADMIN',
    BOUND: 'BOUND',
    BIND: 'BIND'
};

Service.prototype.bindBotResults = bindBotResults;

Service.prototype.bindPersonalBot = function(operatorOpenid, botOpenid, callback) {
    var logger = this.context.logger;
    var platformUserService = this.context.services.platformUserService;
    var wechatMediaService = this.context.services.wechatMediaService;
    var orgMediaService = this.context.services.orgMediaService;

    co(function*() {
        var tenantId = null;
        var adminMemberId = null;
        var adminUser = yield platformUserService.loadPlatformUserByOpenidAsync(operatorOpenid);

        //Check if tenant admin user exists
        if(!adminUser){
            if (callback) callback(null, {
                user: null,
                result: bindBotResults.NO_OPERATOR
            });
            return;
        }

        //Check if tenant admin user user has tenant admin role
        if ( !adminUser.posts ||
            !adminUser.posts.length ||
            adminUser.posts[0].role != OrgMemberRole.TenantAdmin.value()) {
            if (callback) callback(null, {
                user: null,
                result: bindBotResults.NOT_ADMIN
            });
            return;
        }
        else{
            var post = adminUser.posts[0];
            tenantId = post.org;
            adminMemberId = post.member;
        }

        var botUser = yield platformUserService.loadPlatformUserByOpenidAsync(botOpenid);

        //Check if bot user exists
        if(botUser){
            if(botUser.posts && botUser.posts.length){
                if (callback) callback(null, {
                    user: botUser,
                    result: bindBotResults.BOUND
                });
                return;
            }
        }
        else{
            botUser = yield platformUserService.createPlatformUserAsync(botOpenid);
        }

        /*
         * Create to-be-binded wechat bot
         */
        var wechatBotJson = {
            org:            tenantId
            , type:         WechatMediaType.WechatBot.value()
            , originalId:   null
            , customId:     botOpenid
            , name:         botUser.nickname
            , headimgurl:   botUser.headimgurl
            , qrcodeurl:    null
        };
        var wechatBot = yield wechatMediaService.createAsync(wechatBotJson);

        var orgMediaJson = {
            org:            tenantId
            , type:         WechatMediaType.WechatBot.value()
            , media:        wechatBot.id
            , user:         botUser.id
            , operator:         adminMemberId
            , intentionStatus:   IntentionStatus.On.value()
            , desc:    ''
        };

        var orgWechatBot = yield orgMediaService.createAsync(orgMediaJson);

        var postJson = {
            org: tenantId
            , member: orgWechatBot._id
            , role: OrgMemberRole.TenantWechatBot.value()
        };
        var conditions = {
            _id: botUser._id
        };
        var update = {
            $push: {
                posts: postJson
            }
        };
        botUser = yield platformUserService.updateAsync(conditions, update);
        //TODO: start bot
        if (callback) callback(null, {
            user: botUser,
            result: bindBotResults.BIND
        });
    }).catch(Error, function (err) {
        logger.error('Fail to bind personal bot ' + botOpenid + 'for operator ' + operatorOpenid + ': ' + err);
        logger.error(err.stack);
        if (callback) callback(err);
    });
};

Service.prototype.loadBotOperator = function(botOpenid, callback) {

};

module.exports = Service;