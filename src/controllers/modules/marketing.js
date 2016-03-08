var settings = require('@private/vmark-settings');
var Router = require('koa-router');
var util = require('../../app/util');
var context = require('../../context/context');
var authChecker = require('../../modules/auth/middlewares/check-auth');

module.exports = function(){
    var router = new Router();
    router.prefix('/marketing/boss');
    require('../../app/routes-spa')(router);
    router.use(authChecker); //add auth checker

    router.get('/', function*(){
        yield this.render('media-list');
    })

    router.get('/activity-list', function*(){
        yield this.render('/activity-list');
    })

    router.get('/power', function*(){
        yield this.render('/marketing/power/boss', {api: settings.api.url});
    })

    router.get('/points', function*(){
        yield this.render('/marketing/points/boss', {api: settings.api.url});
    })
    return router.routes();
};