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
    var wechatSiteUserKv = this.context.kvs.tenantWechatSiteUser;
    var wechatSiteUserService = this.context.services.tenantWechatSiteUserService;
    var userKv = this.context.kvs.tenantUser;
    var tenantUserService = this.context.services.tenantUserService;
    var openidToIdKv = this.context.kvs.teOpenidToId;
    var atToOpenidKv = this.context.kvs.teAtToOpenid;
    var otToOpenidKv = this.context.kvs.teOtToOpenid;

    co(function*(){
        var wechatSiteUser = null;
        var user = null;
        var userId = null;
        var status = TenantUserStatus.BaseInfo.value();
        var type = UserType.Customer.value();
        try{
            wechatSiteUser = yield wechatSiteUserKv.loadByWechatIdAndOpenidAsync(wechatId, openid);
            if(wechatSiteUser){
                user = yield userKv.loadByIdAsync(wechatId, wechatSiteUser.user);
                if(callback) callback(null, {
                    user: user,
                    wechatSiteUser: wechatSiteUser,
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
            var createWechatSiteUserJson = {
                user: userId,
                status: status,
                host: media._id,
                openid: openid,
                nickname: '匿名'
            };

            wechatSiteUser = yield wechatSiteUserService.createTenantWechatSiteUserAsync(wechatId, createWechatSiteUserJson);

            /*
             * Link wechat site user openid to user id
             * Link wechat web agent token to openid
             * Link wechat web open token to openid
             */
            yield openidToIdKv.setAsync(wechatId, openid, userId);
            yield atToOpenidKv.setAsync(wechatId, wechatSiteUser.at, openid);
            yield otToOpenidKv.setAsync(wechatId, wechatSiteUser.ot, openid);

            logger.info('Succeed to sign up with base info: ' + JSON.stringify(wechatSiteUser));
            if(callback) callback(null, {
                user: user,
                wechatSiteUser: wechatSiteUser,
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
    var wechatSiteUserKv = this.context.kvs.tenantWechatSiteUser;
    var userKv = this.context.kvs.tenantUser;
    var wechatSiteUserService = this.context.services.tenantWechatSiteUserService;
    var wechatMediaService = this.context.services.tenantWechatSiteService;
    var tenantUserService = this.context.services.tenantUserService;
    var openidToIdKv = this.context.kvs.teOpenidToId;
    var atToOpenidKv = this.context.kvs.teAtToOpenid;
    var otToOpenidKv = this.context.kvs.teOtToOpenid;

    co(function*(){
        var openid = userInfo.openid;
        var wechatSiteUser = null;
        var user = null;
        var userId = null;
        var status = TenantUserStatus.UserInfo.value();
        var type = UserType.Customer.value();
        var statusSubscribed = TenantUserStatus.Subscribed.value();

        try{
            wechatSiteUser = yield wechatSiteUserKv.loadByWechatIdAndOpenidAsync(wechatId, openid);
            user = wechatSiteUser && (yield userKv.loadByIdAsync(wechatId, wechatSiteUser.user));

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
            if(wechatSiteUser){
                var wechatSiteUserId = wechatSiteUser._id;
                wechatSiteUser.user = userId;
                statusSubscribed != wechatSiteUser.status && (wechatSiteUser.status = status);
                helper.copyUserInfo(wechatSiteUser, userInfo);
                wechatSiteUser._id && (delete wechatSiteUser._id);
                wechatSiteUser = yield wechatSiteUserService.updateTenantWechatSiteUserByIdAsync(wechatSiteUserId, wechatSiteUser);
            }
            else{
                var media = yield wechatMediaService.loadTenantWechatSiteByOriginalIdAsync(wechatId);
                var createWechatSiteUserJson = {};
                createWechatSiteUserJson.user = userId;
                createWechatSiteUserJson.status = status;
                createWechatSiteUserJson.host = media._id;
                //createWechatSiteUserJson.wechatId = wechatId;
                helper.copyUserInfo(createWechatSiteUserJson, userInfo);
                wechatSiteUser = yield wechatSiteUserService.createTenantWechatSiteUserAsync(wechatId, createWechatSiteUserJson);
            }

            /*
             * Link wechat site user openid to user id
             * Link wechat web agent token to openid
             * Link wechat web open token to openid
             */
            yield openidToIdKv.setAsync(wechatId, openid, userId);
            yield atToOpenidKv.setAsync(wechatId, wechatSiteUser.at, openid);
            yield otToOpenidKv.setAsync(wechatId, wechatSiteUser.ot, openid);

            var res = {
                user: user,
                wechatSiteUser: wechatSiteUser,
                result: authResults.ok
            };
            console.warn(res);
            if(callback) callback(null, res);
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
    var wechatSiteUserKv = this.context.kvs.tenantWechatSiteUser;
    var userKv = this.context.kvs.tenantUser;
    var wechatSiteUserService = this.context.services.tenantWechatSiteUserService;
    var wechatMediaService = this.context.services.tenantWechatSiteService;
    var tenantUserService = this.context.services.tenantUserService;
    var openidToIdKv = this.context.kvs.teOpenidToId;
    var atToOpenidKv = this.context.kvs.teAtToOpenid;
    var otToOpenidKv = this.context.kvs.teOtToOpenid;

    co(function*(){
        console.error('start auth******');
        var userInfo = null;
        var wechatSiteUser = null;
        var user = null;
        var userId = null;
        var status = TenantUserStatus.Subscribed.value();
        var type = UserType.Customer.value();

        try{
            wechatSiteUser = yield wechatSiteUserKv.loadByWechatIdAndOpenidAsync(wechatId, openid);
            user = wechatSiteUser && (yield userKv.loadByIdAsync(wechatId, wechatSiteUser.user));

            //get user info from subscription

            var wechatApi = yield wechatApiCache.get(wechatId);
            userInfo = yield helper.getUserInfoAsync(wechatApi.api, openid, languages.zh_CN);

            console.error(wechatSiteUser);
            console.error(user);
            console.error(userInfo);
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
                user = yield tenantUserService.updateAsync({_id: userId}, user);
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
            if(wechatSiteUser){
                var wechatSiteUserId = wechatSiteUser._id;
                helper.copyUserInfo(wechatSiteUser, userInfo);
                wechatSiteUser.user = userId;
                wechatSiteUser.status = status;
                wechatSiteUser._id && (delete wechatSiteUser._id);
                wechatSiteUser.wechatId = wechatId;
                wechatSiteUser = yield wechatSiteUserService.updateTenantWechatSiteUserByIdAsync(wechatSiteUserId, wechatSiteUser);
            }
            else{
                var createWechatSiteUserJson = {};
                var media = yield wechatMediaService.loadTenantWechatSiteByOriginalIdAsync(wechatId);
                helper.copyUserInfo(createWechatSiteUserJson, userInfo);
                createWechatSiteUserJson.user = userId;
                createWechatSiteUserJson.wechatId = wechatId;
                createWechatSiteUserJson.host = media._id;
                createWechatSiteUserJson.status = status;
                wechatSiteUser = yield wechatSiteUserService.createTenantWechatSiteUserAsync(wechatId, createWechatSiteUserJson);
            }

            /*
             * Link wechat site user openid to user id
             * Link wechat web agent token to openid
             * Link wechat web open token to openid
             */
            yield openidToIdKv.setAsync(wechatId, openid, userId);
            yield atToOpenidKv.setAsync(wechatId, wechatSiteUser.at, openid);
            yield otToOpenidKv.setAsync(wechatId, wechatSiteUser.ot, openid);
            console.error('#########################');
            console.log(callback.toString());
            if(callback) callback(null, {
                user: user,
                wechatSiteUser: wechatSiteUser,
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
    var wechatSiteUserKv = this.context.kvs.tenantWechatSiteUser;
    var userKv = this.context.kvs.tenantUser;
    co(function*(){
        var wechatSiteUser = null;
        var user = null;
        try{
            wechatSiteUser = yield wechatSiteUserKv.loadByWechatIdAndOpenidAsync(wechatId, openid);
            user = wechatSiteUser && (yield userKv.loadByIdAsync(wechatId, wechatSiteUser.user));
            if(wechatSiteUser && user){
                if(callback) callback(null, {
                    user: user,
                    wechatSiteUser: wechatSiteUser,
                    result: authResults.ok
                });
            }
            else if(!wechatSiteUser && !user){
                if(callback) callback(null, {
                    user: null,
                    wechatSiteUser: null,
                    result: authResults.none
                });
            }
            else{
                if(callback) callback(null, {
                    user: user,
                    wechatSiteUser: wechatSiteUser,
                    result: authResults.stateError
                });
            }
        }catch(err){
            logger.error(err.stack);
            logger.error('Fail to sign in with openid : ' + err);
            if(callback) callback(err);
        }
    }).catch(Error, function(err){
        logger.error('Fail to sign in with openid: ' + err);
        if(callback) callback(err);
    });
};

module.exports = Service;