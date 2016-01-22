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
     * sign up with base info by openid
     */
    var auth = yield authenticationService.signupWithBaseInfoAsync(openid);

    authentication.setAuthentication(ctx, auth);
    authentication.redirectReturnUrl(ctx);
};

var errorHandler = function*(ctx, next){
    var err = ctx.oauth.error;
    context.logger.error('Fail to sign up with base info: ' + err);
    yield ctx.render('error', {error: err});
};

module.exports = function(hub){
    hub.MEMBOOK_GET_BASE_INFO = 'get_base_info';
    hub.route(hub.MEMBOOK_GET_BASE_INFO, {
        state: hub.MEMBOOK_GET_BASE_INFO,
        scope: scopes.base,
        handler: handler,
        errorHandler: errorHandler
    });
};