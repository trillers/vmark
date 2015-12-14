var co = require('co');
var cbUtil = require('../../../../framework/callback');
var OrgMemberRole = require('../../../common/models/TypeRegistry').item('OrgMemberRole');

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
        if (callback) callback(err);
    });
};


module.exports = Service;