var settings = require('vmark-settings');
var scopes = require('../wechat/common/oauth').scopes;
var authentication = require('./authentication');
var context = require('../../context/context');
var authenticationService = context.services.authenticationService;
var authResults = authenticationService.authResults;

var handler = function*(ctx, next){
    var oauthBasicInfo = ctx.oauth.data;
    var openid = oauthBasicInfo.openid;

    /*
     * sign up with full user info by openid
     */
    var auth = yield authenticationService.signupWithUserInfoAsync(openid);

    authentication.setAuthentication(ctx, auth);
    authentication.redirectReturnUrl(ctx);
};

var errorHandler = function*(ctx, next){
    var err = ctx.oauth.error;
    context.logger.error('Fail to sign up with user info: ' + err);
    yield ctx.render('error', {error: err});
};

module.exports = function(hub){
    hub.MEMBOOK_GET_USER_INFO = 'get_user_info';
    hub.route(hub.MEMBOOK_GET_USER_INFO, {
        state: hub.MEMBOOK_GET_USER_INFO,
        scope: scopes.userinfo,
        handler: handler,
        errorHandler: errorHandler
    });
};