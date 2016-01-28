var logger = require('../../app/logging').logger;
var agentToken = require('./../membook/common/agentToken');
var openToken = require('./../membook/common/openToken');

var AUTH_KEY = 'auth'; //session key of auth info
var RETURN_URL_KEY = 'returnUrl'; //session key of return url in session
var INTERRUPT_URL_KEY = 'interruptUrl'; //session key of interrupt url in session

var DEFAULT_RETURN_URL = '/';

var Authentication = function(){};

Authentication.prototype.authenticated = function(ctx){
    return ctx.session && ctx.session[AUTH_KEY];
};

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

Authentication.prototype.deleteAuthentication = function(ctx){
    ctx.session && (ctx.session[AUTH_KEY] = null);
};

Authentication.prototype.getReturnUrl = function(ctx){
    return ctx.session && ctx.session[RETURN_URL_KEY];
};

Authentication.prototype.saveReturnUrl = function(ctx, force){
    var url = ctx.request.href;
    var storedUrl = ctx.session && ctx.session[RETURN_URL_KEY];
    if(force || !storedUrl){
        ctx.session && (ctx.session[RETURN_URL_KEY] = url);
        logger.debug('Save return url: ' + url);
    }
};

Authentication.prototype.deleteReturnUrl = function(ctx){
    ctx.session && (ctx.session[RETURN_URL_KEY] = null);
};

Authentication.prototype.redirectReturnUrl = function(ctx){
    var url = ctx.session && ctx.session[RETURN_URL_KEY];
    if(url){
        ctx.session[RETURN_URL_KEY] = null;
    }
    else{
        url = DEFAULT_RETURN_URL; //TODO
    }

    ctx.redirect(url);
    logger.debug('Redirect to return url after authentication: ' + url);
};

Authentication.prototype.getInterruptUrl = function(ctx){
    return ctx.session && ctx.session[INTERRUPT_URL_KEY];
};

Authentication.prototype.saveInterruptUrl = function(ctx, force){
    var url = ctx.request.href;
    var storedUrl = ctx.session && ctx.session[INTERRUPT_URL_KEY];
    if(force || !storedUrl){
        ctx.session && (ctx.session[INTERRUPT_URL_KEY] = url);
        logger.debug('Save interrupt url: ' + url);
    }
};

Authentication.prototype.deleteInterruptUrl = function(ctx){
    ctx.session && (ctx.session[INTERRUPT_URL_KEY] = null);
};

Authentication.prototype.redirectInterruptUrl = function(ctx){
    var url = ctx.session && ctx.session[INTERRUPT_URL_KEY];
    if(url){
        ctx.session[INTERRUPT_URL_KEY] = null;
    }
    else{
        url = DEFAULT_RETURN_URL; //TODO
    }

    ctx.redirect(url);
    logger.debug('Redirect to interrupt url after authentication: ' + url);
};

module.exports = new Authentication();