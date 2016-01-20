var settings = require('vmark-settings');
var WebHelper = require('../../app/web');
var Hub = require('./WechatOAuthHub');
var context = require('../../context/context');
var wechatOAuthKv = context.kvs.wechatOAuth;

var hub = new Hub({
    appKey: settings.wechat.appKey,
    appSecret: settings.wechat.appSecret,
    getAccessToken: function*(openid){
        var at = yield wechatOAuthKv.getAccessTokenAsync(openid);
console.error(at);
        return at;
    },
    saveAccessToken: function*(openid, token){
        yield wechatOAuthKv.saveAccessTokenAsync(openid, token);
    },
    redirectUrl: WebHelper.getBaseUrl(settings.app) + '/auth/callback'
});

hub.errorHandler = function*(ctx, next){
    yield ctx.render('error', {error: req.oauth.error});
};

module.exports = hub;