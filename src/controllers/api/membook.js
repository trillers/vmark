"use strict";
var context = require('../../context/context');
var typeRegistry = require('../../modules/common/models/TypeRegistry');
//var GroupType = typeRegistry.item('GroupType');
var noteService = context.services.noteService;

module.exports = function (router) {

    router.get('/note/_:id', function*(){
        try{
            var id = this.params.id;
            console.error(id)
            var note = yield noteService.loadByIdAsync(id);
            if(note){
                note.mates = yield noteService.loadMatesByIdAsync(id);
            }
            console.warn(note);
            this.body = note;
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.post('/note', function*(){
        try{
            var json = this.request.body;
            json._id = this.session['draftId'];
            this.session['draftId'] = null;
            var note = yield noteService.createAsync(json);
            console.warn(note);
            this.body = note;
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.put('/note/_:id', function*(){
        try{
            var id = this.params.id;
            var json = this.request.body;

            var adlink = yield recontentService.updateByIdAsync(id, json);
            this.body = adlink;
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

};