var Router = require('koa-router');
//var context = require('../../context/context');
//var recontentService = context.services.recontentService;
module.exports = function(){
    var router = new Router();
    require('../../app/routes-spa')(router);

    router.get('/boss', function *(){
        yield this.render('boss/index', {});
    });
    return router.routes();
};