var settings = require('@private/vmark-settings');
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
    var auth = null;
    try{
        auth = yield securityService.authenticateAsync(openid);
    }
    catch(err){
        yield ctx.render('/error', {error: err});
    }

    if(!auth){
        yield ctx.render('/login-feedback', {result: authResults.NO_USER});
        return;
    }

    if(auth.privileges && auth.privileges['recontent']){
        authentication.setAuthentication(ctx, auth);
        authentication.redirectReturnUrl(ctx);
    }
    else{
        yield ctx.render('/login-feedback', {result: authResults.NO_PRIVILEGE});
    }
};

var errorHandler = function*(ctx, next){
    var err = ctx.oauth.error;
    context.logger.error('Fail to authenticate: ' + err);
    yield ctx.render('/error', {error: err});
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