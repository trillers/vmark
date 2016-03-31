var scopes = require('../../wechat/common/oauth').scopes;
var authentication = require('../auth/authentication');
var context = require('../../../context/context');
var authenticationService = context.services.tenantAuthenticationService;
//var authResults = authenticationService.authResults;

var handler = function*(ctx, next, wechatId){
    var oauthBasicInfo = ctx.oauth.data;
    var openid = oauthBasicInfo.openid;

    /*
     * sign up with base info by openid
     */
    var auth = yield authenticationService.signupWithBaseInfoAsync(wechatId, openid);

    authentication.setAuthentication(ctx, auth, wechatId);
    authentication.redirectReturnUrl(ctx, wechatId);
};

var errorHandler = function*(ctx, next, wechatId){
    var err = ctx.oauth.error;
    context.logger.error('Fail to sign up with base info: ' + err);
    yield ctx.render('error', {error: err});
};

module.exports = function(hub){
    hub.GET_BASE_INFO = 'get_base_info';
    hub.route(hub.GET_BASE_INFO, {
        state: hub.GET_BASE_INFO,
        scope: scopes.base,
        handler: handler,
        errorHandler: errorHandler
    });
};