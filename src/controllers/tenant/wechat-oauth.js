var settings = require('@private/vmark-settings');
var Router = require('koa-router');
var tenantFilter = require('../../modules/tenant/common/middlewares/tenantFilter');
var oauthBus = require('../../modules/tenant/wechat/oauth-bus-config');

module.exports = function() {
    var router = new Router();

    router.all('/wechat/:wechatId/auth/callback', tenantFilter, function*(next){
        yield oauthBus.exchange(this, next);
    });

    router.all('/wechat/:wechatId/auth/authorize', tenantFilter, function*(next){
        yield oauthBus.authorize(this, next);
    });

    return router.routes();
}