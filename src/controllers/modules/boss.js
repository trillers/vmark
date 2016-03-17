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
        var id = this.params.id;
        yield this.render('boss/tenant-index', {id: id});
    });
    return router.routes();
};