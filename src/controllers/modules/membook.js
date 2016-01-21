var Router = require('koa-router');
var util = require('../../app/util');
var context = require('../../context/context');
var idGen = require('../../app/id');
var noteServcie = context.services.noteService;
var TypeRegistry = require('../../modules/common/models/TypeRegistry');
var NoteType = TypeRegistry.item('NoteType');
//var recontentService = context.services.recontentService;
//var authChecker = require('../../modules/auth/middlewares/check-auth');
module.exports = function(){
    var router = new Router();
    router.prefix('/note');
    require('../../app/routes-spa')(router);
    //router.use(authChecker); //add auth checker

    router.get('/new', function *(){
        try{
            var id = this.session['draftId'];
            if(!id){
                var pageNote = yield noteServcie.createAsync({
                    type: NoteType.Page.value()
                });
                id = this.session['draftId'] = pageNote._id;
            }
            this.redirect('/note/_' + id);
        }catch(e){
            console.error(e);
        }

    });

    router.get('/_:id', function *(){
        var id = this.params.id;
        yield this.render('note', {id: id});
    });

    return router.routes();
};