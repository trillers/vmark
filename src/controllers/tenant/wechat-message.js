var settings = require('@private/vmark-settings');
var Router = require('koa-router');
var tenantFilter = require('../../modules/tenant/common/middlewares/tenantFilter');
var wechatCenter = require('../../modules/tenant/wechat/middlewares/wechatCenter');
var oauthBus = require('../../modules/tenant/wechat/oauth-bus-config');

module.exports = function() {
    var router = new Router();

    router.all('/wechat/:wechatId/message', tenantFilter, wechatCenter);

    router.all('/wechat/:wechatId/auth/callback', tenantFilter, function*(next){
        yield oauthBus.exchange(this, next);
    });

    return router.routes();
}