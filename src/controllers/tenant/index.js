var Router = require('koa-router');
module.exports = function(app){
    //wechat
    app.use(require('./wechat-message')());

    app.use(require('./wechat-oauth')());

    app.use(require('./test')());

    app.use(require('./power')());

    //marketing tenant power activity
    var router = new Router();
    router.prefix('/api/marketing/tenant/power');
    require('./power-api')(router);
    app.use(router.routes());
    router = new Router();
    router.prefix('/api/tenant/wechatsite');
    require('./wechatsite-api')(router);
    app.use(router.routes());
}