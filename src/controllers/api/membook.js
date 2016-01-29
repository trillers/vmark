"use strict";
var context = require('../../context/context');
var typeRegistry = require('../../modules/common/models/TypeRegistry');
var NoteType = typeRegistry.item('NoteType');
var NoteStatus = typeRegistry.item('NoteStatus');
var InteractType = typeRegistry.item('InteractType');
var noteService = context.services.noteService;
var interactService = context.services.interactService;
var rankAction = context.kvs.rankAction;

module.exports = function (router) {

    router.get('/note/_:id', function*(){
        try{
            var id = this.params.id;
            var note = yield noteService.loadByIdAsync(id);
            if(note){
                note.mates = yield noteService.loadMatesByIdAsync(id);
                var arr = [];
                note.mates.forEach(function(n){
                    arr.push(noteService.loadMatesByIdAsync(n._id));
                });
                yield Promise.all(arr).then(function(results){
                    if(note.mates.length){
                        note.mates.forEach(function(n, index){
                            !n.mates && (n.mates=[]);
                            return n.mates = results[index];
                        })
                    }
                })
            }
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
            json.initiator = this.session.auth.user._id;
            this.session['draftId'] = null;
            this.body = yield noteService.createAsync(json);
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.put('/note/publish/_:id', function* (){
        try{
            var note = this.request.body;
            console.log(note);
            if(!note.status || note.status === NoteStatus.Draft.value()){
                rankAction.addSectionNote(note.parentNote);
                note.status = NoteStatus.Publish.value();
                yield noteService.updateByIdAsync(note._id, note);
            }
            if(note.mates && note.mates.length){
                var asyncArr = [];
                note.mates.forEach(function(mate){
                    if(!mate.status || (mate.status === NoteStatus.Draft.value())){
                        mate.status = NoteStatus.Publish.value();
                        asyncArr.push(noteService.updateByIdAsync(mate._id, mate))
                    }
                });
                yield Promise.all(asyncArr).then(function(arr){
                    arr.map(function(newMate){
                        note.mates.forEach(function(mate, index){
                            if(newMate._id === mate._id){
                                note.mates.splice(index, 1, newMate);
                            }
                        })
                    })
                });
            }
            if(typeof note.initiator === 'string'){
                note.initiator = this.session.auth.user;
            }
            this.body = note;
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.post('/note/like', function*(){
        try{
            var noteId = this.request.body.note;
            var originalInteraction = this.request.body.interaction;
            originalInteraction.type = InteractType.Like.value();
            var interaction = yield interactService.createAsync(originalInteraction);
            var note = yield noteService.likeAsync(noteId, interaction);
            rankAction.like(note.parentNote);
            this.body = {like: interaction};
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.post('/note/comment', function*(){
        try{
            var noteId = this.request.body.note;
            var originalInteraction = this.request.body.interaction;
            originalInteraction.type = InteractType.Comment.value();
            var interaction = yield interactService.createAsync(originalInteraction);
            var note = yield noteService.addCommentAsync(noteId, interaction);
            rankAction.comment(note.parentNote);
            this.body = {comment: interaction};
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.delete('/note/comment/_:id', function*(){
        try{
            var id = this.params.id;
            yield interactService.deleteByIdAsync(id);
            this.body = {success: true};
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.post('/note/unlike', function*(){
        try{
            var noteId = this.request.body.note;
            var userId = this.session.auth.user._id;
            var interactId = this.request.body.interaction;
            yield interactService.deleteByIdAsync(interactId);
            yield noteService.unlikeAsync(noteId, userId);
            this.body = {success: true};
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.post('/notes', function*(){
        try{
            var notes = this.request.body.notes;
            var sectionNote = null;
            var me = this;
            this.session['draftId'] && (this.session['draftId'] = null);
            var asyncArr = [];
            if(!notes[0].parentNote){
                sectionNote = yield noteService.createAsync({
                    initiator: this.session.auth.user._id,
                    parentNote: notes[0].pageNoteId,
                    type: NoteType.Section.value()
                });
            }
            notes.forEach(function(note){
                note.initiator = me.session.auth.user._id;
                note.parentNote = note.parentNote || sectionNote._id;
                asyncArr.push(noteService.createAsync(note));
            });
            var mates = yield Promise.all(asyncArr);
            this.body = {mates: mates, parentNote: sectionNote};
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.put('/notes', function*(){
        try{
            var noteIds = this.request.body.notes;
            yield noteService.deleteNotesByIdAsync(noteIds);
            this.body = {success: true};
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.post('/section/note', function*(){
        try{
            var json = this.request.body;
            this.session['draftId'] && (this.session['draftId'] = null);
            if(!json.parentNote){
                if(!json.pageNoteId){
                    throw new Error('Fail to save section note, page note id lose.');
                }
                var sectionNote = yield noteService.createAsync({
                    initiator: this.session.auth.user._id,
                    parentNote: json.pageNoteId,
                    type: NoteType.Section.value()
                });
                json.parentNote = sectionNote._id;
                json.new = true;
            }
            var note = yield noteService.createAsync(json);
            this.body = {note: note, sectionNote: sectionNote}
        }catch (e){
            context.logger.error(e);
        }

    });

    router.put('/note/_:id', function*(){
        try{
            var id = this.params.id;
            var json = this.request.body;
            this.body = yield noteService.updateByIdAsync(id, json);
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.get('/note/onShare', function*(){
        var noteId = this.query.id;
        if(noteId) {
            rankAction.share(noteId);
        }
        this.body = {success: true};
    });
};