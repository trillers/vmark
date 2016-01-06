var Router = require('koa-router');

module.exports = function(app){
    var router = null;

    //user module
    router = new Router();
    router.prefix('/api/user');
    require('./user')(router);
    app.use(router.routes());

    //wechat
    router = new Router();
    router.prefix('/api');
    require('./wechat')(router);
    app.use(router.routes());

    //qrCode
    router = new Router();
    router.prefix('/api/qr');
    require('./qr')(router);
    app.use(router.routes());

    //file
    router = new Router();
    router.prefix('/api/file');
    require('./file')(router);
    app.use(router.routes());

    //bot
    router = new Router();
    router.prefix('/api/bot');
    require('./bot')(router);
    app.use(router.routes());

    //tenant
    router = new Router();
    router.prefix('/api/tenant');
    require('./tenant')(router);
    app.use(router.routes());

    //adlink
    router = new Router();
    router.prefix('/api/adlink');
    require('./adlink')(router);
    app.use(router.routes());

}