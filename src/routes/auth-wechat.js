var Router = require('koa-router');
var oauth = require('../modules/auth/oauth-wechat');

module.exports = function(app){
    var router = new Router();

    router.get('/auth/callback', function*(next){
        yield oauth.exchange(this, next);
    });

    router.get('/auth/authorize', function*(next){
        yield oauth.authorize(this);
    });

    app.use(router.routes());
};