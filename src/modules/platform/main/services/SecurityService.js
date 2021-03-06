var co = require('co');
var cbUtil = require('../../../../framework/callback');
var OrgMemberRole = require('../../../common/models/TypeRegistry').item('OrgMemberRole');

var Service = function(context){
    this.context = context;
};

var authResults = {
    OK: 'OK',
    NO_USER: 'NO_USER',
    UNREGISTERED_USER: 'UNREGISTERED_USER',
    NO_RIGHTS: 'NO_RIGHTS',
    NO_BOUND_BOT: 'NO_BOUND_BOT',
    NO_PRIVILEGE: 'NO_PRIVILEGE'
};
Service.prototype.authResults = authResults;

var authSupportRoles = {};
authSupportRoles[OrgMemberRole.PlatformAdmin.value()] = true;
authSupportRoles[OrgMemberRole.PlatformOperation.value()] = true;
authSupportRoles[OrgMemberRole.TenantAdmin.value()] = true;
authSupportRoles[OrgMemberRole.TenantOperation.value()] = true;
authSupportRoles[OrgMemberRole.TenantWechatBot.value()] = true;

var hasRole = function(posts, role) {
    var len = posts.length;
    var has = false, post = null;
    for(var i=0; i<len; i++){
        post = posts[i];
        if(post.role==role){
            has = true;
            break;
        }
        else{
            post = null;
        }
    }
    return post;
};

/**
 * Authenticate user when logining
 *
 * @param openid openid wechat site user's openid
 * @param callback
 * Callback:
 *  - `err`,  Error object
 *  - `auth`, {
 *      user:  {
 *          id:           {type: String} platform user
 *          openid:       {type: String} platform wechat site user's openid
 *          nickname:     {type: String} platform wechat site user's nickname
 *          headimgurl:   {type: String} platform wechat site user's head img url
 *      },
 *      post: {
 *          org:          {type: String}
 *          role:         {type: String}
 *          member:       {type: String}
 *      },
 *      bot: {
 *          id:
 *          customId:     {type: String} //the only identifier of bot, which is the openid of
 *                                       //the hosted wechat account under the platform wechat site
 *          name:         {type: String}// the nickname of the hosted wechat account
 *          headimgurl:   {type: String}// the headimgurl of the hosted wechat account
 *      },
 *      tenantId: tenant id,
 *      result: {type: String} result enum string for authentication, reference Service.prototype.authResults
 *  }
 */
Service.prototype.authenticate = function (openid, callback) {
    var logger = this.context.logger;
    var platformUserService = this.context.services.platformUserService;
    var tenantOrgMediaService = this.context.services.tenantOrgMediaService;
    var tenantPrivilegeKv = this.context.kvs.tenantPrivilege;
    co(function*() {
        var user = yield platformUserService.loadPlatformUserByOpenidAsync(openid);

        /*
         *  no user found, so authentication fails
         */
        if(!user){
            if (callback) callback(null, {
                result: authResults.NO_USER
            });
            return;
        }
        var post = null;
        var taPost = null;
        var toPost = null;
        var botPost = null;
        var tenantId = null;
        var wechatBot = null;
        if(user.posts && user.posts.length>0){
            var taPost = hasRole(user.posts, OrgMemberRole.TenantAdmin.value());
            var toPost = hasRole(user.posts, OrgMemberRole.TenantOperation.value());
            var botPost = hasRole(user.posts, OrgMemberRole.TenantWechatBot.value());
            var paPost = hasRole(user.posts, OrgMemberRole.PlatformAdmin.value());
            var poPost = hasRole(user.posts, OrgMemberRole.PlatformOperation.value());

            post = taPost || toPost || botPost || paPost || poPost;
            tenantId = post.org;

            /*
             *  no legal roles found, so authentication fails
             */
            if(!post || !authSupportRoles[post.role]){
                if (callback) callback(null, {
                    user: user,
                    wechatSiteUser: user.wechatSiteUser,
                    post: post,
                    result: authResults.NO_RIGHTS
                });
                return;
            }
        }
        else{
            /*
             *  found un-registered user, so authentication fails
             */
            if (callback) callback(null, {
                user: user,
                wechatSiteUser: user.wechatSiteUser,
                result: authResults.UNREGISTERED_USER
            });
            return;
        }

        //Get and convert privileges
        var privileges = {};
        var privilegeList = yield tenantPrivilegeKv.getAllPrivilegesAsync(tenantId);
        privilegeList.forEach(function(item){privileges[item] = true;});

        if(post.role == OrgMemberRole.PlatformAdmin.value() || post.role == OrgMemberRole.PlatformOperation.value()){
            if (callback) callback(null, {
                platform: true,
                user: user,
                wechatSiteUser: user.wechatSiteUser,
                post: post,
                tenantId: tenantId,
                result: authResults.OK
            });
            return;
        }
        else if(post.role == OrgMemberRole.TenantAdmin.value()) {
            if(privileges['recontent']){

            }
            else{
                var wechatBots = yield tenantOrgMediaService.loadAllMyManagedMediasAsync(tenantId, post.member);
                wechatBot = wechatBots.length > 0 ? wechatBots[0] : null;
                wechatBot && (wechatBot.id=wechatBot._id);
            }
        }
        else if(post.role == OrgMemberRole.TenantWechatBot.value()){
            wechatBot = yield tenantOrgMediaService.loadBoundMediaByIdAsync(post.member);
        }

        /*
         * no bound bot found, so authentication fails
         */
        if(!wechatBot){
            if (callback) callback(null, {
                user: user,
                wechatSiteUser: user.wechatSiteUser,
                post: post,
                bot: wechatBot,
                tenantId: tenantId,
                privileges: privileges,
                result: authResults.NO_BOUND_BOT
            });
            return;
        }

        if (callback) callback(null, {
            user: user,
            wechatSiteUser: user.wechatSiteUser,
            post: post,
            bot: wechatBot,
            tenantId: tenantId,
            privileges: privileges,
            result: authResults.OK
        });
    }).catch(Error, function (err) {
        logger.error('Fail to authenticate platform user for openid ' + openid + ': ' + err);
        if (callback) callback(err);
    });
};

module.exports = Service;