var settings = require('hawaii-settings');
var scopes = require('../wechat/constants').scopes;
var WechatService = require('../wechat/services/WechatService');
var WechatUserService = require('../user/services/WechatUserService');
var authentication = require('./authentication');
var logger = require('../../app/logging').logger;

var handler = function(req, res, next){
    var oauthBasicInfo = req.oauth.data;
    var openid = oauthBasicInfo.openid;
    var user = authentication.getUser(req);
    var id = user && user._id;

    var promise = WechatService.getSnsUserInfoAsync(openid);
    if(id){
        promise = promise
            .then(function(userInfo){
                console.error('update user ');
                console.log(userInfo);
                return WechatUserService.updateSnsUserAsync(id, userInfo, oauthBasicInfo);
            })
    }
    else{
        promise = promise
            .then(function(userInfo){
                console.error('create user ');
                console.log(userInfo);
                return WechatUserService.createSnsUserAsync(userInfo, oauthBasicInfo);
            })
    }

    promise
        .then(function(userInfo){
            console.error('before authentication and set token')
            console.error(userInfo);
            authentication.auth(req, res, userInfo);
            authentication.redirectReturnUrl(req, res);
        })
        .catch(Error, function(err){
            console.error(err);
            logger.error('Fail to authenticate: ' + err);
            res.render('error', {error: err});
        });
};

var errorHandler = function(req, res, next){
    var err = req.oauth.error;
    logger.error('Fail to authenticate: ' + err);
    res.render('error', {error: err});
};

module.exports = function(hub){
    hub.UPDATE_USER = 'update_user';
    hub.route(hub.UPDATE_USER, {
        state: hub.UPDATE_USER,
        scope: scopes.userinfo,
        handler: handler,
        errorHandler: errorHandler
    });
};