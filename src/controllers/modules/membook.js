var Router = require('koa-router');
var util = require('../../app/util');
var context = require('../../context/context');
var idGen = require('../../app/id');
//var recontentService = context.services.recontentService;
//var authChecker = require('../../modules/auth/middlewares/check-auth');
module.exports = function(){
    var router = new Router();
    router.prefix('/note');
    require('../../app/routes-spa')(router);
    //router.use(authChecker); //add auth checker

    router.get('/new', function *(){
        var id = this.session['draftId'];
        if(!id){
            id = this.session['draftId'] = idGen.next('NoteId').toId();
        }
        this.redirect('/note/_' + id);
    });

    router.get('/_:id', function *(){
        var id = this.params.id;
        yield this.render('note', {id: id});
    });

    return router.routes();
};