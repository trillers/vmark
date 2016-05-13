var co = require('co');
var cbUtil = require('../../../../framework/callback');
var OrgMemberRole = require('../../../common/models/TypeRegistry').item('OrgMemberRole');

var Service = function(context){
    this.context = context;
};

/**
 * Register a platform operation
 * @param openid openid wechat site user's openid
 * @param callback
 */
Service.prototype.registerPlatformOperation = function (openid, callback) {
    this.registerPlatformPost(openid, OrgMemberRole.PlatformOperation.value(), callback);
};

/**
 * Register a platform administrator
 * @param openid wechat site user's openid
 * @param callback
 */
Service.prototype.registerPlatformAdmin = function (openid, callback) {
    this.registerPlatformPost(openid, OrgMemberRole.PlatformAdmin.value(), callback);
};

/**
 * register platform user post
 * @param openid
 * @param role
 * @param callback
 */
Service.prototype.registerPlatformPost = function (openid, role, callback) {
    var self = this;
    var logger = this.context.logger;
    var platformOrgService = this.context.services.platformOrgService;
    var platformUserService = this.context.services.platformUserService;
    co(function*() {
        var user = yield platformUserService.loadPlatformUserByOpenidAsync(openid);
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
                    else {
                        hasOperationRole = false;
                        updateOrAdd = 'update';
                    }
                }
                else {
                    hasOperationRole = false;
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
    }).catch(function (err) {
        logger.error('Fail to register platform user for openid ' + openid + ': ' + err);
        if (callback) callback(err);
    });
};

/**
 * update platform user posts
 * @param user
 * @param role
 * @param updateOrAdd update existed post or add a new post value: 'update' or 'add'
 * @param callback
 */
Service.prototype.updatePlatformUserPosts = function(user, role, updateOrAdd, callback){
    var platformOrgService = this.context.services.platformOrgService;
    var orgMemberService = this.context.services.orgMemberService;
    var platformUserService = this.context.services.platformUserService;

    co(function*(){
        var platform = yield platformOrgService.ensurePlatformAsync();
        var update = {};
        var conditions = {}
        if(updateOrAdd === 'add'){
            var orgMemberJson = {
                org: platform.id
                , nickname: user.nickname
                , headimgurl: user.headimgurl
                , role: role
                , remark: user.nickname
            }
            var orgMember = yield orgMemberService.createAsync(orgMemberJson);
            var postJson = {
                org: platform.id
                , member: orgMember._id
                , role: role
            }
            conditions = {
                _id: user._id
            }
            update = {
                $push: {
                    posts: postJson
                }
            }
        } else if(updateOrAdd === 'update'){
            conditions = {
                _id: user._id,
                "posts.org": platform.id
            }
            update = {
                $set: { "posts.$.role" : role }
            }
            var memberId = null;
            user.posts.forEach(function (item) {
                if (item.org == platform.id) {
                    memberId = item.member;
                    return;
                }
            });
            yield orgMemberService.updateByIdAsync(memberId, {role: role});
        }

        user = yield platformUserService.updateAsync(conditions, update);
        if(callback) callback(null, user);
    }).catch(Error, function (err) {
        logger.error('Fail to update platform user posts: ' + err);
        if (callback) callback(err);
    });
}

module.exports = Service;