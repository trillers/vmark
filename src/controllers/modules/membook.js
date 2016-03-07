"use strict";
var co = require('co');
var settings = require('@private/vmark-settings');
var Router = require('koa-router');
var util = require('../../app/util');
var context = require('../../context/context');
var TypeRegistry = require('../../modules/common/models/TypeRegistry');
var generateAuthFilter = require('../../modules/membook/middlewares/generateAuthFilter');
var NoteType = TypeRegistry.item('NoteType');
var needBaseInfoFilter = generateAuthFilter(1);
var needUserInfoFilter = generateAuthFilter(2);
var needSubscriptionFilter = generateAuthFilter(3);
var authentication = require('../../modules/auth/authentication');
var qrRegistry = require('../../modules/wechatsite/qr');
var returnOnSubscriptionType = qrRegistry.getQrType('ret');
var rankAction = context.kvs.rankAction;
var noteService = context.services.noteService;
var notebookService = context.services.notebookService;
var authenticationService = context.services.authenticationService;
var invitationService = context.services.invitationService;

module.exports = function(){
    var router = new Router();
    router.prefix('/note');
    require('../../app/routes-spa')(router);

    var wechatId = settings.wechat.siteId;
    var env = settings.env.name;
    router.get('/welcome', needBaseInfoFilter, function *(){
        var auth = authentication.getAuthentication(this);
        var openid = auth.wechatSiteUser.openid;
        console.log(openid);
        console.log(authentication.getInterruptUrl(this));
        //returnOnSubscriptionType.createQr()
        yield this.render('/welcome', {wechatId: wechatId, env: env});
    });

    router.get('/notebook/invite/_:id', needSubscriptionFilter, function*(){
        try{
            let invitationId = this.params.id;
            let invitation = yield invitationService.loadByIdAsync(invitationId);
            if(!invitation.valid){
                return yield this.render('/error', {error: '邀请已被他们认领.'});
            }
            let notebook = yield notebookService.loadNotebookByIdAndUserIdAsync({
                user: this.session.auth.user._id,
                notebook: invitation.notebook._id
            });
            if(notebook) {
                yield notebookService.participateAsync({
                    user: this.session.auth.user._id,
                    notebook: notebook._id
                });
                yield invitationService.updateByIdAsync(invitationId, {valid: false});
                this.session.auth.userBiz.latest = notebook._id;
            }
            yield this.render('note', {id: notebook._id});
        } catch (e){
            context.logger.error(e);
            yield this.render('/error', {error: '邀请已被他们认领.'});
        }
    });

    router.get('/mock-subscribe', function*(){
        try{
            var openid = this.query.openid;
            var auth = yield authenticationService.signupOnSubscriptionAsync(openid);
            authentication.setAuthentication(this, auth);
            authentication.redirectInterruptUrl(this);
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.get('/', needSubscriptionFilter, function*(){
        try{
            var auth = this.session.auth;
            yield this.render('note');
        }catch (e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.get('/new', needSubscriptionFilter, function *(){
        try{
            var id = this.session['draftId'];
            if(!id){
                var pageNote = {};
                if(this.session.auth && this.session.auth.user){
                    pageNote['initiator'] = this.session.auth.user._id;
                }
                var refinedPageNote = yield noteService.createAsync(pageNote);
                id = this.session['draftId'] = refinedPageNote._id;
            }
            this.redirect('/note/_' + id);
        }catch(e){
            console.error(e);
        }

    });

    router.get('/_:id', needBaseInfoFilter, function *(){
        var id = this.params.id;
        rankAction.view(id);
        yield this.render('note', {id: id});
    });

    router.get('/mine', needSubscriptionFilter, function *(){
        var auth = authentication.getAuthentication(this);
        var userId = auth.user.id;
        var noteList = yield noteService.loadByUserIdAsync(userId);
        if(noteList.length){
            for(var i=0, len=noteList.length; i<len; i++){
                var pageNote = noteList[i];
                var sectionNotes = yield noteService.loadMatesByIdAsync(pageNote._id);
                if(sectionNotes.length){
                    for(var j=0, lenS=sectionNotes.length; j<lenS; j++){
                        var sectionNote = sectionNotes[j];
                        var notes = yield noteService.loadMatesByIdAsync(sectionNote._id);
                        if(notes.length){
                            notes.forEach(function(note){
                                if(note.url){
                                    !pageNote.cover && (pageNote.cover = note.url);
                                }
                            })
                        }
                    }
                }
            }
        }
        yield this.render('note-list', {noteList: noteList});
    });

    router.get('/discover', needSubscriptionFilter, function *(){
        var params = {
            conditions:{
                lFlg: 'a',
                type: 'pg'
            },
            sort: {rank: -1},
            page: {
                no: 1,
                size: 10
            },
            populate:[
                {path: 'initiator'}
            ]
        };
        var noteList = yield noteService.filterAsync(params);
        if(noteList.length){
            for(var i=0, len=noteList.length; i<len; i++){
                var pageNote = noteList[i];
                var sectionNotes = yield noteService.loadMatesByIdAsync(pageNote._id);
                if(sectionNotes.length){
                    for(var j=0, lenS=sectionNotes.length; j<lenS; j++){
                        var sectionNote = sectionNotes[j];
                        var notes = yield noteService.loadMatesByIdAsync(sectionNote._id);
                        if(notes.length){
                            notes.forEach(function(note){
                                if(note.url){
                                    !pageNote.cover && (pageNote.cover = note.url);
                                }
                            })
                        }
                    }
                }
            }
        }
        yield this.render('note-plaza', {noteList: noteList});
    });
    router.get('/boss', function *(){
        yield this.render('boss/index');
    });
    return router.routes();
};