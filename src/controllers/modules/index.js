var router = require('koa-router');
module.exports = function(app){
    //spa module
    var spa_router = new router();
    require('./spa')(spa_router);
    app.use(spa_router.routes());

    //wechat
    app.use(require('./wechat')());

    app.use(require('./recontent')());

    app.use(require('./boss')());

    app.use(require('./redpacket')());

}