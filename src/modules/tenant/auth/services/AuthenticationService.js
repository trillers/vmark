var co = require('co');
var helper = require('../../../wechat/common/helper');
var languages = require('../../../wechat/common/oauth').languages;
var wechatApiCache = require('../../wechat/api-cache');

var typeRegistry = require('../../../common/models/TypeRegistry');
var WechatMediaType = typeRegistry.item('WechatMediaType');
var TenantUserStatus = typeRegistry.item('TenantUserStatus');
var UserType = typeRegistry.item('UserType');

var Service = function(context){
    this.context = context;
};

var authResults = {
    ok: 'ok',
    none: 'none',
    stateError: 'stateError',
    systemError: 'systemError'
};
Service.prototype.authResults = authResults;

Service.prototype.signupWithBaseInfo = function(wechatId, openid, callback){
    var logger = this.context.logger;
    var wechatMediaService = this.context.services.tenantWechatSiteService;
    var wechatMediaUserKv = this.context.kvs.tenantWechatSiteUser;
    var wechatMediaUserService = this.context.services.tenantWechatSiteUserService;
    var userKv = this.context.kvs.tenantUser;
    var tenantUserService = this.context.services.tenantUserService;
    var openidToIdKv = this.context.kvs.teOpenidToId;
    var atToOpenidKv = this.context.kvs.teAtToOpenid;
    var otToOpenidKv = this.context.kvs.teOtToOpenid;

    co(function*(){
        var wechatMediaUser = null;
        var user = null;
        var userId = null;
        var status = TenantUserStatus.BaseInfo.value();
        var type = UserType.Customer.value();
        try{
            wechatMediaUser = yield wechatMediaUserKv.loadByWechatIdAndOpenidAsync(wechatId, openid);
            if(wechatMediaUser){
                user = yield userKv.loadByIdAsync(wechatMediaUser.user);
                if(callback) callback(null, {
                    user: user,
                    wechatMediaUser: wechatMediaUser,
                    result: authResults.ok
                });
                return;
            }

            /*
             * Create user
             */
            var createUserJson = {
                status: status,
                nickname: '匿名',
                openid: openid,
                wechatId: wechatId,
                type: type
            };
            user = yield tenantUserService.createAsync(createUserJson);
            userId = user.id;

            /*
             * Create wechat site user
             */
            var media = yield wechatMediaService.loadTenantWechatSiteByOriginalIdAsync(wechatId);
            var createWechatMediaUserJson = {
                user: userId,
                status: status,
                host: media._id,
                openid: openid,
                nickname: '匿名'
            };

            wechatMediaUser = yield wechatMediaUserService.createAsync(createWechatMediaUserJson);

            /*
             * Link wechat site user openid to user id
             * Link wechat web agent token to openid
             * Link wechat web open token to openid
             */
            yield openidToIdKv.setAsync(wechatId, openid, userId);
            yield atToOpenidKv.setAsync(wechatId, wechatMediaUser.at, openid);
            yield otToOpenidKv.setAsync(wechatId, wechatMediaUser.ot, openid);

            logger.info('Succeed to sign up with base info: ' + JSON.stringify(wechatMediaUser));
            if(callback) callback(null, {
                user: user,
                wechatMediaUser: wechatMediaUser,
                result: authResults.ok
            });
        }catch(err){
            logger.error('Fail to sign up with base info: ' + err);
            if(callback) callback(err);
        }
    }).catch(Error, function(err){
        logger.error('Fail to sign up with base info: ' + err);
        if(callback) callback(err);
    });
};

Service.prototype.signupWithUserInfo = function(wechatId, userInfo, callback){
    var logger = this.context.logger;
    var wechatMediaUserKv = this.context.kvs.tenantWechatSiteUser;
    var userKv = this.context.kvs.tenantUser;
    var wechatMediaUserService = this.context.services.tenantWechatSiteUserService;
    var wechatMediaService = this.context.services.tenantWechatSiteService;
    var tenantUserService = this.context.services.tenantUserService;
    var openidToIdKv = this.context.kvs.teOpenidToId;
    var atToOpenidKv = this.context.kvs.teAtToOpenid;
    var otToOpenidKv = this.context.kvs.teOtToOpenid;

    co(function*(){
        var openid = userInfo.openid;
        var wechatMediaUser = null;
        var user = null;
        var userId = null;
        var status = TenantUserStatus.UserInfo.value();
        var type = UserType.Customer.value();
        var statusSubscribed = TenantUserStatus.Subscribed.value();

        try{
            wechatMediaUser = yield wechatMediaUserKv.loadByWechatIdAndOpenidAsync(wechatId, openid);
            user = wechatMediaUser && (yield userKv.loadByIdAsync(wechatMediaUser.user));

            /*
             * Ensure user created or updated
             */
            if(user){
                statusSubscribed != user.status && (user.status = status);
                user.type = type;
                user.openid = userInfo.openid;
                user.wechatId = wechatId;
                user.nickname = userInfo.nickname;
                user.headimgurl = userInfo.headimgurl;
                user.sex = userInfo.sex;
                helper.copyLocation(user, userInfo);
                userId = user.id;
                user._id && (delete user._id);
                user = yield tenantUserService.updateAsync({_id: userId}, user);
            }
            else{
                var createUserJson = {};
                createUserJson.status = status;
                createUserJson.type = type;
                createUserJson.wechatId = wechatId;
                createUserJson.openid = userInfo.openid;
                createUserJson.nickname = userInfo.nickname;
                createUserJson.headimgurl = userInfo.headimgurl;
                createUserJson.sex = userInfo.sex;
                helper.copyLocation(createUserJson, userInfo);
                user = yield tenantUserService.createAsync(createUserJson);
                userId = user.id;
            }

            /*
             * Ensure wechat site user created or updated
             */
            if(wechatMediaUser){
                var wechatMediaUserId = wechatMediaUser._id;
                wechatMediaUser.user = userId;
                statusSubscribed != wechatMediaUser.status && (wechatMediaUser.status = status);
                helper.copyUserInfo(wechatMediaUser, userInfo);
                wechatMediaUser._id && (delete wechatMediaUser._id);

                wechatMediaUser = yield wechatMediaUserService.updateTenantWechatSiteUserByIdAsync(wechatMediaUserId, wechatMediaUser);
            }
            else{
                var media = yield wechatMediaService.loadTenantWechatSiteByOriginalIdAsync(wechatId);
                var createWechatMediaUserJson = {};
                createWechatMediaUserJson.user = userId;
                createWechatMediaUserJson.status = status;
                createWechatMediaUserJson.host = media._id;
                createWechatMediaUserJson.wechatId = wechatId;
                helper.copyUserInfo(createWechatMediaUserJson, userInfo);
                wechatMediaUser = yield wechatMediaUserService.createAsync(createWechatMediaUserJson);
            }

            /*
             * Link wechat site user openid to user id
             * Link wechat web agent token to openid
             * Link wechat web open token to openid
             */
            yield openidToIdKv.setAsync(wechatId, openid, userId);
            yield atToOpenidKv.setAsync(wechatId, wechatMediaUser.at, openid);
            yield otToOpenidKv.setAsync(wechatId, wechatMediaUser.ot, openid);

            if(callback) callback(null, {
                user: user,
                wechatMediaUser: wechatMediaUser,
                result: authResults.ok
            });
        }catch(err){
            logger.error('Fail to sign up with user info: ' + err);
            if(callback) callback(err);
        }
    }).catch(Error, function(err){
        logger.error('Fail to sign up with user info: ' + err);
        if(callback) callback(err);
    });
};

Service.prototype.signupOnSubscription = function(wechatId, openid, callback){
    var logger = this.context.logger;
    var wechatMediaUserKv = this.context.kvs.tenantWechatSiteUser;
    var userKv = this.context.kvs.tenantUser;
    var wechatMediaUserService = this.context.services.tenantWechatSiteUserService;
    var wechatMediaService = this.context.services.tenantWechatSiteService;
    var tenantUserService = this.context.services.tenantUserService;
    var openidToIdKv = this.context.kvs.teOpenidToId;
    var atToOpenidKv = this.context.kvs.teAtToOpenid;
    var otToOpenidKv = this.context.kvs.teOtToOpenid;

    co(function*(){
        var userInfo = null;
        var wechatMediaUser = null;
        var user = null;
        var userId = null;
        var status = TenantUserStatus.Subscribed.value();
        var type = UserType.Customer.value();

        try{
            wechatMediaUser = yield wechatMediaUserKv.loadByWechatIdAndOpenidAsync(wechatId, openid);
            user = wechatMediaUser && (yield userKv.loadByIdAsync(wechatMediaUser.user));

            //get user info from subscription

            var wechatApi = yield wechatApiCache.get('wechatId');
            userInfo = yield helper.getUserInfoAsync(wechatApi, openid, languages.zh_CN);

            /*
             * Ensure user created or updated
             */
            if(user){
                user.status = status;
                user.type = type;
                user.openid = userInfo.openid;
                user.wechatId = wechatId;
                user.nickname = userInfo.nickname;
                user.headimgurl = userInfo.headimgurl;
                user.sex = userInfo.sex;
                helper.copyLocation(user, userInfo);

                userId = user.id;
                user._id && (delete user._id);
                user = yield tenantUserService.updateByIdAsync(userId, user);
            }
            else{
                var createUserJson = {};
                createUserJson.status = status;
                createUserJson.type = type;
                createUserJson.openid = userInfo.openid;
                createUserJson.wechatId = wechatId;
                createUserJson.nickname = userInfo.nickname;
                createUserJson.headimgurl = userInfo.headimgurl;
                createUserJson.sex = userInfo.sex;
                helper.copyLocation(createUserJson, userInfo);
                user = yield tenantUserService.createAsync(createUserJson);
                userId = user.id;
            }

            /*
             * Ensure wechat site user created or updated
             */
            if(wechatMediaUser){
                var wechatMediaUserId = wechatMediaUser._id;
                helper.copySubscription(wechatMediaUser, userInfo);
                wechatMediaUser.user = userId;
                wechatMediaUser.status = status;
                wechatMediaUser._id && (delete wechatMediaUser._id);
                wechatMediaUser.wechatId = wechatId;
                wechatMediaUser = yield wechatMediaUserService.updateTenantWechatSiteUserByIdAsync(wechatMediaUserId, wechatMediaUser);
            }
            else{
                var createWechatMediaUserJson = {};
                var media = yield wechatMediaService.loadTenantWechatSiteByOriginalIdAsync(wechatId);
                helper.copySubscription(createWechatMediaUserJson, userInfo);
                createWechatMediaUserJson.user = userId;
                createWechatMediaUserJson.wechatId = wechatId;
                createWechatMediaUserJson.host = media._id;
                createWechatMediaUserJson.status = status;
                wechatMediaUser = yield wechatMediaUserService.createAsync(createWechatMediaUserJson);
            }

            /*
             * Link wechat site user openid to user id
             * Link wechat web agent token to openid
             * Link wechat web open token to openid
             */
            yield openidToIdKv.setAsync(wechatId, openid, userId);
            yield atToOpenidKv.setAsync(wechatId, wechatMediaUser.at, openid);
            yield otToOpenidKv.setAsync(wechatId, wechatMediaUser.ot, openid);

            if(callback) callback(null, {
                user: user,
                wechatMediaUser: wechatMediaUser,
                result: authResults.ok
            });
        }catch(err){
            logger.error('Fail to sign up on subscription: ' + err);
            if(callback) callback(err);
        }
    }).catch(Error, function(err){
        logger.error('Fail to sign up on subscription: ' + err);
        if(callback) callback(err);
    });
};

Service.prototype.signinWithWechatIdAndOpenid = function(wechatId, openid, callback){
    var logger = this.context.logger;
    var wechatMediaUserKv = this.context.kvs.tenantWechatSiteUser;
    var userKv = this.context.kvs.tenantUser;
    co(function*(){
        var wechatMediaUser = null;
        var user = null;
        try{
            wechatMediaUser = yield wechatMediaUserKv.loadByWechatIdAndOpenidAsync(wechatId, openid);
            user = wechatMediaUser && (yield userKv.loadByIdAsync(wechatMediaUser.user));
            if(wechatMediaUser && user){
                if(callback) callback(null, {
                    user: user,
                    wechatMediaUser: wechatMediaUser,
                    result: authResults.ok
                });
            }
            else if(!wechatMediaUser && !user){
                if(callback) callback(null, {
                    user: null,
                    wechatMediaUser: null,
                    result: authResults.none
                });
            }
            else{
                if(callback) callback(null, {
                    user: user,
                    wechatMediaUser: wechatMediaUser,
                    result: authResults.stateError
                });
            }
        }catch(err){
            logger.error('Fail to sign in with openid : ' + err);
            if(callback) callback(err);
        }
    }).catch(Error, function(err){
        logger.error('Fail to sign in with openid: ' + err);
        if(callback) callback(err);
    });
};

module.exports = Service;