var settings = require('@private/vmark-settings');
var Frankon = require('../../framework/frankon');
var Router = require('koa-router');
var wechat = require('co-wechat');
var productionMode = settings.env.mode == 'production';
var logger = require('../../app/logging').logger;
var request = require('request');
var tokenConfig = productionMode ? {
    token: settings.wechat.token,
    appid: settings.wechat.appKey,
    encodingAESKey: settings.wechat.encodingAESKey
} : settings.wechat.token;
var frankon = new Frankon();

module.exports = function() {
    var router = new Router();
    var emitter = require('../../modules/system/wechatsite/wechatEmitter');

    frankon.use(require('../../modules/wechat/middlewares/user-heartbeat'));
    frankon.use(function* (next) {
        emitter.relay(this);
        this.body = '';
    });
    var wechatMiddleware = wechat(tokenConfig).middleware(frankon.generateHandler());
    router.all('/wechat', wechatMiddleware);

    return router.routes();
}