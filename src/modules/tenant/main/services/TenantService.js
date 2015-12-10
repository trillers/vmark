var co = require('co');
var cbUtil = require('../../../../framework/callback');
var OrgMemberRole = require('../../../common/models/TypeRegistry').item('OrgMemberRole');

var Service = function(context){
    this.context = context;
};

Service.prototype.registerPersonalTenant = function(openid, callback) {
    /*
    1. Register platform user by openid
    2. Register platform tenant and member by openid
    3. Bind user to tenant member



    user = kv.loadByOpenid(openid);
    if(user){
        var hasOperationRole = if user.posts has OrgMemberRole.PlatformOperation.value() or OrgMemberRole.PlatformAdmin.value
        if( !hasOperationRole ){
            add platform member
            add user an operation role

        }
        return user;
    }
    else{
        var userInfo = wechatApi.getUser(openid);
        var userJson <-- userInfo;
        var user = platformUserService.create(userJson);
        var platformWechatSite = getPlatformWechatSite();

        userInfo.user = user.id;
        var wechatSiteUser = PlatformWechatSiteService.addUser(platformWechatSite.id, userInfo);

        var platformOperation = {
            nickname: userInfo.nickname,
            headimgurl: userInfo.headimgurl,
            role: OrgMemberRole.PlatformOperation.value()
        };
        platformMemberService.createMember(platformOperation);
        add a post to user.posts

        return user;
    }

    */
    var self = this;
    var logger = this.context.logger;
    var platformOrgService = this.context.services.platformOrgService;
    var platformUserService = this.context.services.platformUserService;
    var platformUserKv = this.context.kvs.platformUser;
    co(function*() {
        var id = yield platformUserKv.loadIdByOpenidAsync(openid);
        var user = yield platformUserKv.loadByIdAsync(id);
        var updateOrAdd = 'add';
        var platform = yield platformOrgService.ensurePlatformAsync();
        if (user) {
            if (user.posts && user.posts.length > 0) {
                var hasOperationRole = false;
                var platformPost = null;
                user.posts.forEach(function (item) {
                    if (item.org == platform.id) {
                        platformPost = item;
                        return;
                    }
                })
                if (platformPost) {
                    if (platformPost.role == role) {
                        hasOperationRole = true;
                    }
                    else if (platformPost.role == OrgMemberRole.PlatformOperation.value() && role == OrgMemberRole.PlatformAdmin.value()) {
                        hasOperationRole = false;
                        updateOrAdd = 'update';
                    }
                    else {
                        hasOperationRole = true;
                    }
                }
                else {
                    hasOperationRole = true;
                }
                if (hasOperationRole) {
                    if (callback) callback(null, user);
                    return;
                }
            }
            user = yield self.updatePlatformUserPostsAsync(user, role, updateOrAdd);
            if (callback) callback(null, user);
        } else {
            user = yield platformUserService.createPlatformUserAsync(openid);
            user = yield self.updatePlatformUserPostsAsync(user, role, updateOrAdd);
            if (callback) callback(null, user);
        }
    }).catch(Error, function (err) {
        logger.error('Fail to register platform user for openid ' + openid + ': ' + err);
        if (callback) callback(err);
    });
};


module.exports = Service;