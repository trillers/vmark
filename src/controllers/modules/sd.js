"use strict";
var Router = require('koa-router');
var context = require('../../context/context');
var tenantFilter = require('../../modules/tenant/common/middlewares/tenantFilter');
var authentication = require('../../modules/tenant/auth/authentication');
var generateAuthFilter = require('../../modules/tenant/auth/middlewares/generateAuthFilter');
var needBaseInfoFilter = generateAuthFilter(1);

module.exports = function(){
    var router = new Router();
    router.prefix('/sd');
    require('../../app/routes-spa')(router);
    router.get('/:wechatId/catalog', tenantFilter, needBaseInfoFilter, function *(){
        var auth = authentication.getAuthentication(this, this.wechatId)
        var user = auth && auth.user || {};
        this.state.__page.user = user;
        let catalogId = this.request.query.id;
        if(!catalogId){
            return yield this.render('404');
        }
        yield this.render('marketing/sd/catalog', {id: catalogId});
    });

    router.get('/:wechatId/product',  tenantFilter, needBaseInfoFilter, function *(){
        var auth = authentication.getAuthentication(this, this.wechatId);
        var user = auth && auth.user || {};
        this.state.__page.user = user;
        let productId = this.request.query.id;
        let mediaId = this.request.query.media;
        let catalogId = this.request.query.catalog;
        if(!productId){
            return yield this.render('404');
        }
        yield this.render('marketing/sd/product', {id: productId, media: mediaId, catalog: catalogId});
    });

    return router.routes();
};