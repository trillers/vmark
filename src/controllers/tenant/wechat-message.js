var settings = require('@private/vmark-settings');
var Router = require('koa-router');
var tenantFilter = require('../../modules/tenant/common/middlewares/tenantFilter');
var wechatCenter = require('../../modules/tenant/wechat/middlewares/wechatCenter');

module.exports = function() {
    var router = new Router();

    router.all('/wechat/:wechatId/message', tenantFilter, wechatCenter);

    return router.routes();
}