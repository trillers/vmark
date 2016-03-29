var WechatOAuth = require('co-wechat-oauth');
var logger = require('../../../app/logging').logger;
var u = require('../../../app/util');
var errorUtil = require('../../wechat/common/error');
var scopes = require('../../wechat/common/oauth').scopes;
var languages = require('../../wechat/common/oauth').languages;

var defaultConfig = {
    appKey: '', //the client id in oauth2, which needs to be applied from service provider
    appSecret: '', //the client secret in oauth2, which needs to be applied from service provider
    getAccessToken: null, //
    saveAccessToken: null,//
    redirectUrl: ''//the client side url which is used to return after logout from service provider side
};

/**
 *
 * @param hub Hub
 * @param options
 *      state: //
 *      scope: //
 *      handler: //handler after authorization succeeds
 *      errorHandler: //handler after authorization fails
 * @constructor
 */
var Route = function(hub, options) {
    this.hub = hub;
    u.extend(this, options);
};

Route.prototype.authorize = function(ctx){
    var url = this.getAuthorizeUrl();
    ctx.response.status = 303;
    ctx.response.redirect(url);
};

Route.prototype.getAuthorizeUrl = function() {
    if(!this.authorizeUrl){
        this.authorizeUrl = this.hub.getAuthorizeUrl(this.state, this.scope);
    }
    return this.authorizeUrl;
};



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
var Bus = function (options) {
    this.routes = {};
    this.options = options;
    if(options.getAccessToken && options.saveAccessToken){
        this.client = new WechatOAuth(options.appKey, options.appSecret, options.getAccessToken, options.saveAccessToken);
    }
    else{
        throw new Error('Require getAccessToken and saveAccessToken options');
    }
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
        var result = yield this.client.getAccessToken(code);
        ctx.oauth.data = result.data;
        ctx.oauth.error = errorUtil.getResultError(result, 'getAccessToken');

        if(route.scope==scopes.userinfo){
            var options = {
                openid: result.data.openid,
                lang: languages.zh_CN
            };
            result = yield this.client.getUser(options, result.data.access_token);
            ctx.oauth.data = result;
            ctx.oauth.error = errorUtil.getResultError(result, 'getUser');
        }
    }
    catch(err){
        var errmsg = errorUtil.getErrorMessage(err, 'getUser');
        logger.error('Fail to wechat oauth: ' + errmsg);
        ctx.oauth.error = new Error(errmsg);
    }

    if(ctx.oauth.error){
        yield route.errorHandler(ctx, next);
    }
    else{
        yield route.handler(ctx, next);
    }
};

Bus.prototype.getAuthorizeUrl = function(state, scope) {
    var stateWithTimestamp = state + '+' + (new Date().getTime());
    return this.client.getAuthorizeURL(this.options.redirectUrl, stateWithTimestamp, scope);
};

module.exports = Bus;
