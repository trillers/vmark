var WechatOAuth = require('co-wechat-oauth');
var u = require('../../app/util');
var errorUtil = require('../wechat/common/error');

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
var Hub = function (options) {
    this.routes = {};
    this.options = options;
    if(options.getAccessToken && options.saveAccessToken){
        this.client = new WechatOAuth(options.appKey, options.appSecret, options.getAccessToken, options.saveAccessToken);
    }
    else{
        throw new Error('Require getAccessToken and saveAccessToken options');
    }
};

Hub.prototype.route = function (name, route) {
    if(!this.routes[name] && route){
        this.routes[name] = new Route(this, route);
    }
    return this.routes[name];
};

Hub.prototype.exchange = function* (ctx, next){
    var state = ctx.query.state;
    var code = ctx.query.code;
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
    }
    catch(err){
        ctx.oauth.error = err;
    }

    if(ctx.oauth.error){
        yield route.errorHandler(ctx, next);
    }
    else{
        yield route.handler(ctx, next);
    }
};

Hub.prototype.getAuthorizeUrl = function(state, scope) {
    return this.client.getAuthorizeURL(this.options.redirectUrl, state, scope);
};

module.exports = Hub;
