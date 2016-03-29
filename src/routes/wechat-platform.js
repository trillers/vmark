var Router = require('koa-router');
var oauth = require('../modules/auth/oauth-wechat');
var bus = require('../modules/wechatsite/oauth/bus-registry');

module.exports = function(app){
    var router = new Router();

    router.get('/auth/callback', function*(next){
        yield oauth.exchange(this, next);
    });

    router.get('/wechat/auth//callback', function*(next){
        yield oauth.exchange(this, next);
    });

    app.use(router.routes());
};