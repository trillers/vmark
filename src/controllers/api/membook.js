"use strict";
var context = require('../../context/context');
var typeRegistry = require('../../modules/common/models/TypeRegistry');
var NoteType = typeRegistry.item('NoteType');
var NoteStatus = typeRegistry.item('NoteStatus');
var noteService = context.services.noteService;

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
            this.session['draftId'] = null;
            var note = yield noteService.createAsync(json);
            console.warn(note);
            this.body = note;
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.put('/note/publish/_:id', function* (){
        try{
            var note = this.request.body;
            if(!note.status || note.status === NoteStatus.Draft.value()){
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
            this.body = note;
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.post('/notes', function*(){
        try{
            var notes = this.request.body.notes;
            this.session['draftId'] && (this.session['draftId'] = null);
            var asyncArr = [];
            if(!notes[0].parentNote){
                var sectionNote = yield noteService.createAsync({
                    parentNote: notes[0].pageNoteId,
                    type: NoteType.Section.value()
                });
            }
            notes.forEach(function(note){
                note.parentNote = note.parentNote || sectionNote._id;
                asyncArr.push(noteService.createAsync(note));
            });
            this.body = yield Promise.all(asyncArr);
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
};