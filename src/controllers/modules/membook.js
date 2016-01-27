var settings = require('vmark-settings');
var Router = require('koa-router');
var util = require('../../app/util');
var context = require('../../context/context');
var TypeRegistry = require('../../modules/common/models/TypeRegistry');
var noteServcie = context.services.noteService;
var authenticationService = context.services.authenticationService;
var generateAuthFilter = require('../../modules/membook/middlewares/generateAuthFilter');
var NoteType = TypeRegistry.item('NoteType');
var needBaseInfoFilter = generateAuthFilter(1);
var needUserInfoFilter = generateAuthFilter(2);
var needSubscriptionFilter = generateAuthFilter(3);
var authentication = require('../../modules/auth/authentication');

module.exports = function(){
    var router = new Router();
    router.prefix('/note');
    require('../../app/routes-spa')(router);

    var wechatId = settings.wechat.siteId;
    var env = settings.env.name;
    router.get('/welcome', function *(){
        yield this.render('/welcome', {wechatId: wechatId, env: env});
    });

    router.get('/mock-subscribe', function*(){
        try{
            var openid = this.query.openid;
            var auth = yield authenticationService.signupOnSubscriptionAsync(openid);
            authentication.setAuthentication(this, auth);
            authentication.redirectReturnUrl(this);
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.get('/new', needSubscriptionFilter, needBaseInfoFilter, function *(){
        try{
            var id = this.session['draftId'];
            if(!id){
                var pageNote = {};
                if(this.session.auth && this.session.auth.user){
                    pageNote['initiator'] = this.session.auth.user._id;
                }
                var refinedPageNote = yield noteServcie.createAsync(pageNote);
                id = this.session['draftId'] = refinedPageNote._id;
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

    router.get('/mine', needSubscriptionFilter, needBaseInfoFilter, function *(){
        var auth = authentication.getAuthentication(this);
        var userId = auth.user.id;
        var noteList = yield noteServcie.loadByUserIdAsync(userId)
        yield this.render('note-list', {noteList: noteList});
    });

    return router.routes();
};