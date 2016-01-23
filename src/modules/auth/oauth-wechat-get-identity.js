var settings = require('vmark-settings');
var scopes = require('../wechat/common/oauth').scopes;
var authentication = require('./authentication');
var context = require('../../context/context');
var securityService = context.services.securityService;
var authResults = securityService.authResults;

var handler = function*(ctx, next){
    var oauthBasicInfo = ctx.oauth.data;
    var openid = oauthBasicInfo.openid;

    /*
     * authenticate user by openid
     */
    var auth = yield securityService.authenticateAsync(openid);
    context.logger.debug(auth);
    if(!auth){
        yield ctx.render('/login-feedback', {result: authResults.NO_USER});
        return;
    }
    else if(auth.result != authResults.OK){
        yield ctx.render('/login-feedback', {result: auth.result});
        return;
    }
    authentication.setAuthentication(ctx, auth);
    authentication.redirectReturnUrl(ctx);
};

var errorHandler = function*(ctx, next){
    var err = ctx.oauth.error;
    context.logger.error('Fail to authenticate: ' + err);
    yield ctx.render('error', {error: err});
};

module.exports = function(hub){
    hub.GET_IDENTITY = 'get_identity';
    hub.route(hub.GET_IDENTITY, {
        state: hub.GET_IDENTITY,
        scope: scopes.base,
        handler: handler,
        errorHandler: errorHandler
    });
};