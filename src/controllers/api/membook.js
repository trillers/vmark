"use strict";
var context = require('../../context/context');
var typeRegistry = require('../../modules/common/models/TypeRegistry');
var NoteType = typeRegistry.item('NoteType');
var noteService = context.services.noteService;

module.exports = function (router) {

    router.get('/note/_:id', function*(){
        try{
            var id = this.params.id;
            console.error(id)
            var note = yield noteService.loadByIdAsync(id);
            if(note){
                note.mates = yield noteService.loadMatesByIdAsync(id);
                var arr = [];
                note.mates.forEach(function(n){
                    arr.push(noteService.loadMatesByIdAsync(n._id));
                });
                yield Promise.all(arr).then(function(results){
                    console.warn(results);
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
    function* getChildren(node){
        var children = yield noteService.loadMatesByIdAsync(node._id);
        node.mates = children;
        for(let i=0, len=children.length; i<len; i++){
            yield getChildren(children[i]);
        }
    }
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

    router.post('/section/note', function*(){
        try{
            var json = this.request.body;
            if(!json.parent){
                if(!json.pageNoteId){
                    throw new Error('Fail to save section note, page note id lose.');
                }
                var sectionNote = yield noteService.createAsync({
                    parent: json.pageNoteId,
                    type: NoteType.Section.value()
                });
                json.parent = sectionNote._id;
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