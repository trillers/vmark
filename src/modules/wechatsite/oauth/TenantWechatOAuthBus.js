var WechatOAuth = require('co-wechat-oauth');
var logger = require('../../../app/logging').logger;
var util = require('util');
var errorUtil = require('../../wechat/common/error');
var scopes = require('../../wechat/common/oauth').scopes;
var languages = require('../../wechat/common/oauth').languages;

/**
 *
 * @param options
 *  appKey
 *  appSecret
 *  getAccessToken
 *  saveAccessToken
 *  redirectUrl
 *  errorHandler
 * @constructor
 */
var Bus = function (options, wechatId) {
    this.routes = {};
    this.options = options;
    this.redirectUrl = options.redirectUrl;
    this.clientCache = options.clientCache;
    //this.wechatAtGetter = options.wechatAtGetter;
    //this.wechatAtSetter = options.wechatAtSetter;
    //this.wechatId = wechatId;
    //this.wechatInfo = null;
    //this.wechatOAuthClient = null;

    //if(options.getAccessToken && options.saveAccessToken){
    //    this.client = new WechatOAuth(options.appKey, options.appSecret, options.getAccessToken, options.saveAccessToken);
    //}
    //else{
    //    throw new Error('Require getAccessToken and saveAccessToken options');
    //}
};

Bus.prototype.getWechatOAuthClient = function* () {
    if(!this.wechatOAuthClient){
        try{
            this.wechatInfo = yield this.wechatLoader(this.wechatId);
            if(this.wechatInfo){
                this.wechatOAuthClient = new WechatOAuth(
                    this.wechatInfo.appKey,
                    this.wechatInfo.appSecret,
                    this.wechatAtGetter,
                    this.wechatAtSetter);
            }
            else{
                //logger.error();
            }
        }

    }
    return this.wechatInfo;
};

Bus.prototype.route = function (name, route) {
    if(!this.routes[name] && route){
        this.routes[name] = new Route(this, route);
    }
    return this.routes[name];
};

var RETURN_URL_KEY = 'returnUrl';

Bus.prototype.authorize = function* (ctx){
    var routeName = ctx.query.route;
    var returnUrl = ctx.query.returnUrl;

    //save return url
    ctx.session && (ctx.session[RETURN_URL_KEY] = returnUrl);

    //TODO check routeName correctness and existence
    var route = this.routes[routeName];
    if(route){
        route.authorize(ctx);
    }
    else{
        ctx.response.body = 'no route: ' + routeName;
    }
};

Bus.prototype.exchange = function* (ctx, next){
    var code = ctx.query.code;
    var rawState = ctx.query.state;
    var parts = rawState && rawState.split('+');
    var state = parts && parts[0] || '';
    var route = this.routes[state];
    var wechatId = ctx.wechatId; //TODO
    ctx.oauth = {};


    if(!route){
        ctx.oauth.error = new Error('Fail to exchange access token: echo state is different');
        if(this.errorHandler){
            yield this.errorHandler(ctx, next);
        }
        else{
            throw new Error('WechatOAuthHub needs error handler');
        }
        return;
    }
    try{
        var client = yield this.clientCache.get(wechatId);
        if(!client){
            logger.error('Fail to get oauth client for wechat ' + wechatId);
            next();
        }
        var result = yield client.getAccessToken(code);
        ctx.oauth.data = result.data;
        ctx.oauth.error = errorUtil.getResultError(result, 'getAccessToken');

        if(route.scope==scopes.userinfo){
            var options = {
                openid: result.data.openid,
                lang: languages.zh_CN
            };
            result = yield client.getUser(options, result.data.access_token);
            ctx.oauth.data = result;
            ctx.oauth.error = errorUtil.getResultError(result, 'getUser');
        }
    }
    catch(err){
        var errmsg = errorUtil.getErrorMessage(err, 'getUser');
        logger.error('Fail to exchange wechat oauth access token and get user: ' + errmsg);
        ctx.oauth.error = new Error(errmsg);
    }

    if(ctx.oauth.error){
        yield route.errorHandler(ctx, next);
    }
    else{
        yield route.handler(ctx, next);
    }
};

Bus.prototype.getAuthorizeUrl = function*(state, scope, wechatId) {
    var stateWithTimestamp = state + '+' + (new Date().getTime());
    //TODO: track oauth time spent.

    var client = yield this.clientCache.get(wechatId);
    if(!client){
        var msg = 'Fail to get oauth client for wechat ' + wechatId;
        logger.error(msg);
        new Error(msg);
        return;
    }

    var redirectUrl = util.format(this.options.redirectUrl, wechatId);
    return client.getAuthorizeURL(redirectUrl, stateWithTimestamp, scope);
};

module.exports = Bus;
