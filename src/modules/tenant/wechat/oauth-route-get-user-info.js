var scopes = require('../../wechat/common/oauth').scopes;
var authentication = require('../auth/authentication');
var context = require('../../../context/context');
var authenticationService = context.services.tenantAuthenticationService;
//var authResults = authenticationService.authResults;

var handler = function*(ctx, next, wechatId){
    var oauthUserInfo = ctx.oauth.data;

    /*
     * sign up with full user info
     */
    var auth = yield authenticationService.signupWithUserInfoAsync(wechatId, oauthUserInfo);
    authentication.setAuthentication(ctx, auth, wechatId);
    authentication.redirectReturnUrl(ctx, wechatId);
};

var errorHandler = function*(ctx, next, wechatId){
    var err = ctx.oauth.error;
    context.logger.error('Fail to sign up with user info: ' + err);
    yield ctx.render('error', {error: err});
};

module.exports = function(hub){
    hub.GET_USER_INFO = 'get_user_info';
    hub.route(hub.GET_USER_INFO, {
        state: hub.GET_USER_INFO,
        scope: scopes.userinfo,
        handler: handler,
        errorHandler: errorHandler
    });
};