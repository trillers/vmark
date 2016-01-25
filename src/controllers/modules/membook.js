var Router = require('koa-router');
var util = require('../../app/util');
var context = require('../../context/context');
var idGen = require('../../app/id');
var noteServcie = context.services.noteService;
var TypeRegistry = require('../../modules/common/models/TypeRegistry');
var NoteType = TypeRegistry.item('NoteType');
var authFilter = require('../../modules/membook/middlewares/authFilter');
var generateAuthFilter = require('../../modules/membook/middlewares/generateAuthFilter');
var needBaseInfoFilter = generateAuthFilter(1);
//var needUserInfoFilter = generateAuthFilter(2);
var needSubscriptionFilter = generateAuthFilter(3);

module.exports = function(){
    var router = new Router();
    router.prefix('/note');
    require('../../app/routes-spa')(router);
    //router.use(authFilter); //add auth Filter

    router.get('/welcome', function *(){
        yield this.render('/welcome', {});
    });

    router.get('/new', needSubscriptionFilter, function *(){
        try{
            //TODO oauth
            var id = this.session['draftId'];
            if(!id){
                var pageNote = yield noteServcie.createAsync({});
                id = this.session['draftId'] = pageNote._id;
            }
            this.redirect('/note/_' + id);
        }catch(e){
            console.error(e);
        }

    });

    router.get('/_:id', needBaseInfoFilter, function *(){
        var id = this.params.id;
        yield this.render('note', {id: id});
    });

    router.get('/list', function *(){
        var auth = this.session && this.session['auth'];
        if(auth && auth.user && auth.user.id){
            var noteList = yield noteServcie.loadByUserIdAsync(auth.user.id)
            yield this.render('note-list', {noteList: noteList});
        }else{
            //TODO
        }
    });

    return router.routes();
};