var router = require('koa-router');

module.exports = function(app){
    //user module
    var user_router = new router();
    user_router.prefix('/api/user');
    require('./user')(user_router);
    app.use(user_router.routes());

    //wechat
    var wc_router = new router();
    wc_router.prefix('/api');
    require('./wechat')(wc_router);
    app.use(wc_router.routes());

    //qrCode
    var qr_router = new router();
    qr_router.prefix('/api/qr');
    require('./qr')(qr_router);
    app.use(qr_router.routes());

    //file
    var file_router = new router();
    file_router.prefix('/api/file');
    require('./file')(file_router);
    app.use(file_router.routes());

    //bot
    var bot_router = new router();
    bot_router.prefix('/api/bot');
    require('./bot')(bot_router);
    app.use(bot_router.routes());

    //tenant
    var bot_router = new router();
    bot_router.prefix('/api/tenant');
    require('./tenant')(bot_router);
    app.use(bot_router.routes());


}