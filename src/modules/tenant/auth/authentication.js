var logger = require('../../../app/logging').logger;
var agentToken = require('./agentToken');
var AUTH_KEY = 'auth';                  //session key of auth info
var RETURN_URL_KEY = 'returnUrl';       //session key of return url in session
var INTERRUPT_URL_KEY = 'interruptUrl'; //session key of interrupt url in session
var DEFAULT_RETURN_URL = '/';
var DEFAULT_INTERRUPT_URL = '/';

var Authentication = function(){};

var statusLevels = {'none': 0, 'a': 1, 'r': 2, 'v': 3};

Authentication.prototype.setAuthentication = function(ctx, auth, wechatId){
    if(auth.wechatSiteUser){
        agentToken.set(ctx, wechatId, auth.wechatSiteUser.at);
    }
    return ctx.session[wechatId + '.' + AUTH_KEY] = auth;
};

Authentication.prototype.getAuthentication = function(ctx, wechatId){
    return ctx.session && ctx.session[wechatId + '.' + AUTH_KEY];
};

Authentication.prototype.deleteAuthentication = function(ctx, wechatId){
    ctx.session && (ctx.session[wechatId + '.' + AUTH_KEY] = null);
};

Authentication.prototype.getAuthLevel = function(auth){
    var status = auth && auth.user ? auth.user.status : 'none';
    return statusLevels[status];
};

Authentication.prototype.authenticated = function(ctx, wechatId){
    var auth = ctx.session && ctx.session[wechatId + '.' + AUTH_KEY];
    //TODO need more check
    return auth;
};

Authentication.prototype.clear = function(ctx){
    ctx.session = null;
};

Authentication.prototype.saveReturnUrl = function(ctx, wechatId){
    var returnUrl = ctx.request.href;
    logger.debug('Save return url: ' + returnUrl);
    ctx.session && (ctx.session[wechatId + '.' + RETURN_URL_KEY] = returnUrl);
}

Authentication.prototype.deleteReturnUrl = function(ctx, wechatId){
    ctx.session && (ctx.session[wechatId + '.' + RETURN_URL_KEY] = null);
}

Authentication.prototype.redirectReturnUrl = function(ctx, wechatId){
    var returnUrl = ctx.session[wechatId + '.' + RETURN_URL_KEY];
    if(returnUrl){
        ctx.session[wechatId + '.' + RETURN_URL_KEY] = null;
    }
    else{
        returnUrl = DEFAULT_RETURN_URL; //TODO
    }

    logger.debug('Redirect to return url after authentication: ' + returnUrl);
    ctx.redirect(returnUrl);
};

Authentication.prototype.getInterruptUrl = function(ctx, wechatId){
    return ctx.session && ctx.session[wechatId + '.' + INTERRUPT_URL_KEY];
};

Authentication.prototype.saveInterruptUrl = function(ctx, wechatId, force){
    var url = ctx.request.href;
    var storedUrl = ctx.session && ctx.session[wechatId + '.' + INTERRUPT_URL_KEY];
    if(force || !storedUrl){
        ctx.session && (ctx.session[wechatId + '.' + INTERRUPT_URL_KEY] = url);
        logger.debug('Save interrupt url: ' + url);
    }
};

Authentication.prototype.deleteInterruptUrl = function(ctx, wechatId){
    ctx.session && (ctx.session[wechatId + '.' + INTERRUPT_URL_KEY] = null);
};

Authentication.prototype.redirectInterruptUrl = function(ctx, wechatId){
    var url = ctx.session && ctx.session[wechatId + '.' + INTERRUPT_URL_KEY];
    if(url){
        ctx.session[wechatId + '.' + INTERRUPT_URL_KEY] = null;
    }
    else{
        url = DEFAULT_INTERRUPT_URL; //TODO
    }

    ctx.redirect(url);
    logger.debug('Redirect to interrupt url after authentication: ' + url);
};

module.exports = new Authentication();