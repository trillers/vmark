var co = require('co');
var helper = require('../../../wechat/common/helper');
var languages = require('../../../wechat/common/oauth').languages;
var wechatApi = require('../../../wechat/common/api');

var typeRegistry = require('../../../common/models/TypeRegistry')
var UserStatus = typeRegistry.item('UserStatus');
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

Service.prototype.signupWithBaseInfo = function(openid, callback){
    var logger = this.context.logger;
    var wechatMediaUserKv = this.context.kvs.wechatMediaUser;
    var userKv = this.context.kvs.platformUser;
    var wechatMediaUserService = this.context.services.wechatMediaUserService;
    var platformUserService = this.context.services.platformUserService;
    var openidToIdKv = this.context.kvs.openidToId;
    var atToOpenidKv = this.context.kvs.atToOpenid;
    var otToOpenidKv = this.context.kvs.otToOpenid;

    co(function*(){
        var wechatMediaUser = null;
        var user = null;
        var userId = null;
        var status = UserStatus.Anonymous.value();
        var type = UserType.Customer.value();
        try{
            wechatMediaUser = yield wechatMediaUserKv.loadByOpenidAsync(openid);
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
                type: type
            };
            user = yield platformUserService.createAsync(createUserJson);
            userId = user.id;

            /*
             * Create wechat site user
             */
            var createWechatMediaUserJson = {
                user: userId,
                status: status,
                host: 'unknown',
                openid: openid,
                nickname: '匿名'
            };

            wechatMediaUser = yield wechatMediaUserService.createAsync(createWechatMediaUserJson);

            /*
             * Link wechat site user openid to user id
             * Link wechat web agent token to openid
             * Link wechat web open token to openid
             */
            yield openidToIdKv.setAsync(openid, userId);
            yield atToOpenidKv.setAsync(wechatMediaUser.at, openid);
            yield otToOpenidKv.setAsync(wechatMediaUser.ot, openid);

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

Service.prototype.signupWithUserInfo = function(userInfo, callback){
    var logger = this.context.logger;
    var wechatMediaUserKv = this.context.kvs.wechatMediaUser;
    var userKv = this.context.kvs.platformUser;
    var wechatMediaUserService = this.context.services.wechatMediaUserService;
    var platformUserService = this.context.services.platformUserService;
    var openidToIdKv = this.context.kvs.openidToId;
    var atToOpenidKv = this.context.kvs.atToOpenid;
    var otToOpenidKv = this.context.kvs.otToOpenid;

    co(function*(){
        var openid = userInfo.openid;
        var wechatMediaUser = null;
        var user = null;
        var userId = null;
        var status = UserStatus.Registered.value();
        var type = UserType.Customer.value();
        var statusVerfied = UserStatus.Verified.value();

        try{
            wechatMediaUser = yield wechatMediaUserKv.loadByOpenidAsync(openid);
            user = wechatMediaUser && (yield userKv.loadByIdAsync(wechatMediaUser.user));

            /*
             * Ensure user created or updated
             */
            if(user){
                statusVerfied!=user.status && (user.status = status);
                user.type = type;
                user.openid = userInfo.openid;
                user.nickname = userInfo.nickname;
                user.headimgurl = userInfo.headimgurl;
                user.sex = userInfo.sex;
                helper.copyLocation(user, userInfo);
                userId = user.id;
                user._id && (delete user._id);
                user = yield platformUserService.updateAsync({_id: userId}, user);
            }
            else{
                var createUserJson = {};
                createUserJson.status = status;
                createUserJson.type = type;
                createUserJson.openid = userInfo.openid;
                createUserJson.nickname = userInfo.nickname;
                createUserJson.headimgurl = userInfo.headimgurl;
                createUserJson.sex = userInfo.sex;
                helper.copyLocation(createUserJson, userInfo);
                user = yield platformUserService.createAsync(createUserJson);
                userId = user.id;
            }

            /*
             * Ensure wechat site user created or updated
             */
            if(wechatMediaUser){
                wechatMediaUser.user = userId;
                statusVerfied!=wechatMediaUser.status && (wechatMediaUser.status = status);
                helper.copyUserInfo(wechatMediaUser, userInfo);
                wechatMediaUser._id && (delete wechatMediaUser._id);
                wechatMediaUser = yield wechatMediaUserService.updateByOpenidAsync(openid, wechatMediaUser);
            }
            else{
                var createWechatMediaUserJson = {};
                createWechatMediaUserJson.user = userId;
                createWechatMediaUserJson.status = status;
                createWechatMediaUserJson.host = 'unknown';
                helper.copyUserInfo(createWechatMediaUserJson, userInfo);
                wechatMediaUser = yield wechatMediaUserService.createAsync(createWechatMediaUserJson);
            }

            /*
             * Link wechat site user openid to user id
             * Link wechat web agent token to openid
             * Link wechat web open token to openid
             */
            yield openidToIdKv.setAsync(openid, userId);
            yield atToOpenidKv.setAsync(wechatMediaUser.at, openid);
            yield otToOpenidKv.setAsync(wechatMediaUser.ot, openid);

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

Service.prototype.signupOnSubscription = function(openid, callback){
    var logger = this.context.logger;
    var wechatMediaUserKv = this.context.kvs.wechatMediaUser;
    var userKv = this.context.kvs.platformUser;
    var wechatMediaUserService = this.context.services.wechatMediaUserService;
    var platformUserService = this.context.services.platformUserService;
    var openidToIdKv = this.context.kvs.openidToId;
    var atToOpenidKv = this.context.kvs.atToOpenid;
    var otToOpenidKv = this.context.kvs.otToOpenid;

    co(function*(){
        var userInfo = null;
        var wechatMediaUser = null;
        var user = null;
        var userId = null;
        var status = UserStatus.Verified.value();
        var type = UserType.Customer.value();

        try{
            wechatMediaUser = yield wechatMediaUserKv.loadByOpenidAsync(openid);
            user = wechatMediaUser && (yield userKv.loadByIdAsync(wechatMediaUser.user));

            //get user info from subscription
            userInfo = yield helper.getUserInfoAsync(wechatApi, openid, languages.zh_CN);

            /*
             * Ensure user created or updated
             */
            if(user){
                user.status = status;
                user.type = type;
                user.openid = userInfo.openid;
                user.nickname = userInfo.nickname;
                user.headimgurl = userInfo.headimgurl;
                user.sex = userInfo.sex;
                helper.copyLocation(user, userInfo);

                userId = user.id;
                user._id && (delete user._id);
                user = yield platformUserService.updateByIdAsync(userId, user);
            }
            else{
                var createUserJson = {};
                createUserJson.status = status;
                createUserJson.type = type;
                createUserJson.openid = userInfo.openid;
                createUserJson.nickname = userInfo.nickname;
                createUserJson.headimgurl = userInfo.headimgurl;
                createUserJson.sex = userInfo.sex;
                helper.copyLocation(createUserJson, userInfo);
                user = yield platformUserService.createAsync(createUserJson);
                userId = user.id;
            }

            /*
             * Ensure wechat site user created or updated
             */
            if(wechatMediaUser){
                helper.copySubscription(wechatMediaUser, userInfo);
                wechatMediaUser.user = userId;
                wechatMediaUser.status = status;
                wechatMediaUser._id && (delete wechatMediaUser._id);
                wechatMediaUser = yield wechatMediaUserService.updateByOpenidAsync(openid, wechatMediaUser);
            }
            else{
                var createWechatMediaUserJson = {};
                helper.copySubscription(createWechatMediaUserJson, userInfo);
                createWechatMediaUserJson.user = userId;
                createWechatMediaUserJson.host = 'unknown';
                createWechatMediaUserJson.status = status;
                wechatMediaUser = yield wechatMediaUserService.createAsync(createWechatMediaUserJson);
            }

            /*
             * Link wechat site user openid to user id
             * Link wechat web agent token to openid
             * Link wechat web open token to openid
             */
            yield openidToIdKv.setAsync(openid, userId);
            yield atToOpenidKv.setAsync(wechatMediaUser.at, openid);
            yield otToOpenidKv.setAsync(wechatMediaUser.ot, openid);

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

Service.prototype.signinWithOpenid = function(openid, callback){
    var logger = this.context.logger;
    var wechatMediaUserKv = this.context.kvs.wechatMediaUser;
    var userKv = this.context.kvs.platformUser;
    co(function*(){
        var wechatMediaUser = null;
        var user = null
        try{
            wechatMediaUser = yield wechatMediaUserKv.loadByOpenidAsync(openid);
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