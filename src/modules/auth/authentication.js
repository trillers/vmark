var logger = require('../../app/logging').logger;
var agentToken = require('./../membook/common/agentToken');
var openToken = require('./../membook/common/openToken');

var AUTH_KEY = 'auth'; //session key of auth info
var RETURN_URL_KEY = 'returnUrl'; //session key of return url in session
var DEFAULT_RETURN_URL = '/';

var Authentication = function(){};

Authentication.prototype.setAuthentication = function(ctx, auth){
    if(auth.wechatSiteUser){
        agentToken.set(ctx, auth.wechatSiteUser.at);
        openToken.set(ctx, auth.wechatSiteUser.ot);
    }
    return ctx.session[AUTH_KEY] = auth;
};

Authentication.prototype.getAuthentication = function(ctx){
    return ctx.session && ctx.session[AUTH_KEY];
};

Authentication.prototype.authenticated = function(ctx){
    var auth = ctx.session && ctx.session[AUTH_KEY];
    //TODO need more check
    return auth;
};

Authentication.prototype.clear = function(ctx){
    ctx.session = null;
};

Authentication.prototype.saveReturnUrl = function(ctx){
    var returnUrl = ctx.request.href;
    logger.debug('Save return url: ' + returnUrl);
    ctx.session && (ctx.session[RETURN_URL_KEY] = returnUrl);
}

Authentication.prototype.deleteReturnUrl = function(ctx){
    ctx.session && (ctx.session[RETURN_URL_KEY] = null);
}

Authentication.prototype.redirectReturnUrl = function(ctx){
    var returnUrl = ctx.session[RETURN_URL_KEY];
    if(returnUrl){
        ctx.session[RETURN_URL_KEY] = null;
    }
    else{
        returnUrl = DEFAULT_RETURN_URL; //TODO
    }

    logger.debug('Redirect to return url after authentication: ' + returnUrl);
    ctx.redirect(returnUrl);
};

module.exports = new Authentication();