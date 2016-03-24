"use strict";
var settings = require('@private/vmark-settings');
var Router = require('koa-router');
var context = require('../../context/context');
var generateAuthFilter = require('../../modules/auth/middlewares/generateAuthFilter');
var needBaseInfoFilter = generateAuthFilter(1);
var needUserInfoFilter = generateAuthFilter(2);
var typeRegistry = require('../../modules/common/models/TypeRegistry');
var _ = require('underscore');

module.exports = function(){
    var router = new Router();
    router.prefix('/sd');
    require('../../app/routes-spa')(router);

    router.get('/catalog', function *(){
        let catalogId = this.request.query.id;
        if(!catalogId){
            return yield this.render('404');
        }
        yield this.render('marketing/sd/catalog', {id: catalogId});
    });

    return router.routes();
};