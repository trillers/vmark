var co = require('co');
var helper = require('../../wechat/common/helper');
var typeRegistry = require('../../common/models/TypeRegistry')
var UserStatus = typeRegistry.item('UserStatus');
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
    var wechatSiteUserService = this.context.services.wechatSiteUserService;
    var userService = this.context.services.userService;
    var openidToIdKv = this.context.kvs.openidToId;
    var atToOpenidKv = this.context.kvs.atToOpenid;

    co(function*(){
        var wechatSiteUser = null;
        var user = null;
        var userId = null;
        var status = UserStatus.Anonymous.value();
        try{

            /*
             * Create user
             */
            var createUserJson = {
                status: status,
                nickname: '匿名',
            };
            user = yield userService.createAsync(createUserJson);
            userId = user.id;

            /*
             * Create wechat site user
             */
            var createWechatSiteUserJson = {
                user: userId,
                status: status,
                openid: openid,
                nickname: '匿名'
            };

            wechatSiteUser = yield wechatSiteUserService.createAsync(createWechatSiteUserJson);

            /*
             * Link wechat site user openid to user id
             * Link wechat web agent token to openid
             */
            var at = wechatSiteUser.at;
            yield openidToIdKv.setAsync(openid, userId);
            yield atToOpenidKv.setAsync(at, openid);

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

Service.prototype.signupWithUserInfo = function(userInfo, callback){
    var logger = this.context.logger;
    var wechatSiteUserKv = this.context.kvs.wechatSiteUser;
    var userKv = this.context.kvs.user;
    var wechatSiteUserService = this.context.services.wechatSiteUserService;
    var userService = this.context.services.userService;
    var openidToIdKv = this.context.services.openidToId;
    var atToOpenidKv = this.context.services.atToOpenid;

    co(function*(){
        var wechatSiteUser = null;
        var user = null;
        var userId = null;
        var status = UserStatus.Registered.value();
        try{
            wechatSiteUser = yield wechatSiteUserKv.loadByOpenidAsync(openid);
            user = wechatSiteUser && (yield userKv.loadByIdAsync(wechatSiteUser.user));

            /*
             * Ensure user created or updated
             */
            if(user){
                user.status = status;
                user.nickname = userInfo.nickname;
                user.headimgurl = userInfo.headimgurl;
                user.sex = userInfo.sex;
                helper.copyLocation(user, userInfo);
                user = yield userService.updateByIdAsync(user.id, user);
            }
            else{
                var createUserJson = {};
                createUserJson.status = status;
                createUserJson.nickname = userInfo.nickname;
                createUserJson.headimgurl = userInfo.headimgurl;
                createUserJson.sex = userInfo.sex;
                helper.copyLocation(createUserJson, userInfo);
                user = yield userService.createAsync(createUserJson);
            }
            userId = user.id;

            /*
             * Ensure wechat site user created or updated
             */
            if(wechatSiteUser){
                helper.copyUserInfo(wechatSiteUser, userInfo);
                wechatSiteUser.user = userId;
                wechatSiteUser.status = status;
                wechatSiteUser = yield wechatSiteUserService.updateByIdAsync(wechatSiteUser.id, wechatSiteUser);
            }
            else{
                var createWechatSiteUserJson = {};
                helper.copyUserInfo(createWechatSiteUserJson, userInfo);
                createWechatSiteUserJson.user = userId;
                createWechatSiteUserJson.status = status;
                wechatSiteUser = yield wechatSiteUserService.createAsync(createWechatSiteUserJson);

            }

            /*
             * Link wechat site user openid to user id
             * Link wechat web agent token to openid
             */
            var at = wechatSiteUser.at;
            yield openidToIdKv.setAsync(openid, userId);
            yield atToOpenidKv.setAsync(at, openid);

            if(callback) callback(null, {
                user: user,
                wechatSiteUser: wechatSiteUser,
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

Service.prototype.signinWithOpenid = function(openid, callback){
    var logger = this.context.logger;
    var wechatSiteUserKv = this.context.kvs.wechatSiteUser;
    var userKv = this.context.kvs.user;
    co(function*(){
        var wechatSiteUser = null;
        var user = null;
        try{
            wechatSiteUser = yield wechatSiteUserKv.loadByOpenidAsync(openid);
            user = wechatSiteUser && (yield userKv.loadByIdAsync(wechatSiteUser.user));
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
            logger.error('Fail to sign in with openid : ' + err);
            if(callback) callback(err);
        }
    }).catch(Error, function(err){
        logger.error('Fail to sign in with openid: ' + err);
        if(callback) callback(err);
    });
};

module.exports = Service;