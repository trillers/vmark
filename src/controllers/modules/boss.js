var Router = require('koa-router');
//var context = require('../../context/context');
//var recontentService = context.services.recontentService;
module.exports = function(){
    var router = new Router();
    require('../../app/routes-spa')(router);

    router.get('/boss', function *(){
        yield this.render('boss/index', {});
    });

    router.get('/boss/tenant/_:id', function *(){
        yield this.render('boss/tenant-index');
    });
    return router.routes();
};