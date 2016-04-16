var Router = require('koa-router');
//var context = require('../../context/context');
//var recontentService = context.services.recontentService;
var checkauth = require('../../middlewares/checkauth');
var permissionFilter = require('../../middlewares/permission-filter');

module.exports = function(){
    var router = new Router();
    require('../../app/routes-spa')(router);
    router.use(checkauth);
    router.get('/boss', permissionFilter.needAdminPermission, function *(){
        yield this.render('boss/index', {});
    });

    router.get('/boss/tenant/_:id', permissionFilter.tenantPermissionCheck, function *(){
        var tenantId = this.params.id;
        yield this.render('boss/tenant-index', {tenantId: tenantId});
    });
    return router.routes();
};