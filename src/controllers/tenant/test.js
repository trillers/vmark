var Router = require('koa-router');
var context = require('../../context/context');
//var adlinkService = context.services.adlinkService;
var tenantFilter = require('../../modules/tenant/common/middlewares/tenantFilter');
var authentication = require('../../modules/tenant/auth/authentication');
var generateAuthFilter = require('../../modules/tenant/auth/middlewares/generateAuthFilter');
var authUserInfoFilter = generateAuthFilter(2);

module.exports = function(){
    var router = new Router();
    require('../../app/routes-spa')(router);

    router.get('/wechat/:wechatId/user-info', tenantFilter, authUserInfoFilter, function *(){
        console.info(this.wechatId);
        console.info(authentication.getAuthentication(this,this.wechatId));
        this.body = 'a page which needs to signing up and signing in with user info';
    });

    router.get('/wechat/:wechatId/welcome', tenantFilter, function *(){
        console.info(this.wechatId);
        this.body = 'welcome';
    });

    router.get('/wechat/auth-error', function *(){
        console.info(this.wechatId);
        this.body = 'auth error';
    });

    return router.routes();
};