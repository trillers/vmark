"use strict";
var co = require('co');
var context = require('../../context/context');
var typeRegistry = require('../../modules/common/models/TypeRegistry');
var NoteType = typeRegistry.item('NoteType');
var NoteStatus = typeRegistry.item('NoteStatus');
var InteractType = typeRegistry.item('InteractType');
var noteService = context.services.noteService;
var notebookService = context.services.notebookService;
var interactService = context.services.interactService;
var rankAction = context.kvs.rankAction;

module.exports = function (router) {

    router.get('/notebook/latest', function*(){
        try{
            var auth = this.session.auth;
            var latestNotebook = yield notebookService.fetchByIdAsync(auth.userBiz.latest, auth.user);
            var sectionNotes = yield noteService.loadSectionNotesByNotebookIdAsync(latestNotebook._id);
            if(!sectionNotes || !sectionNotes.length){
                sectionNotes = yield noteService.createAsync({
                    initiator: this.session.auth.user,
                    notebook: latestNotebook._id,
                    type: NoteType.Section.value()
                });
                sectionNotes.initiator = auth.user;
            }
            latestNotebook.mates = Array.isArray(sectionNotes) ? sectionNotes: [sectionNotes];
            var promiseArr = latestNotebook.mates.map(function(sectionNote){
                return noteService.loadMatesByIdAsync(sectionNote._id);
            });
            var results = yield Promise.all(promiseArr);
            results.forEach(function(notes, i){
                latestNotebook.mates[i].mates = notes;
            });
            this.body = {latestNotebook: latestNotebook};
        }catch (e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.get('/note/_:id', function*(){
        try{
            var id = this.params.id;
            var note = yield noteService.loadByIdAsync(id);
            if(note){
                note.mates = yield noteService.loadMatesByIdAsync(id);
                var arr = [];
                if(note.mates && note.mates.length){
                    for(var i=0, len=note.mates.length; i<len; i++){
                        arr.push(noteService.loadMatesByIdAsync(note.mates[i]._id));
                    }
                    yield Promise.all(arr).then(function(results){
                        if(results.length){
                            for(var j=0, len=note.mates.length; j<len; j++){
                                var n = note.mates[j];
                                !n.mates && (n.mates=[]);
                                n.mates = results[j];
                            }
                        }
                    })
                }
            }
            console.error(note);
            this.body = note;
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.get('/notebooks/user/_:userId', function*(){
        try{
            let latestNotebookId = this.session.auth.userBiz.latest;
            let latestNotebook = null;
            let res = yield notebookService.loadNotebooksByUserIdAsync(this.params.userId);
            let notebooks = res.map(res => {
                if(res.notebook._id === latestNotebookId) {
                    latestNotebook = res.notebook;
                }
                return res.notebook;
            });
            this.body = {notebooks: notebooks, latestNotebook: latestNotebook};
        }catch(e){
            console.log(e);
        }
    });

    router.get('/notebook/note', function*(){
        try{
            let notebookId = this.query.notebookId;
            let sections = yield noteService.loadSectionNotesByNotebookIdAsync(notebookId);
            let sectionsMateInPromiseArr = sections.map(section=>{
                return noteService.loadMatesByIdAsync(section._id);
            });
            yield Promise.all(sectionsMateInPromiseArr).then(arr=>{
                sections.forEach((section, i)=>section.mates = arr[i])
            });
            this.body = {sections: sections}
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
                var arr = yield Promise.all(asyncArr);
                arr.map(function(newMate){
                    note.mates.map(function(mate, index){
                        if(newMate._id === mate._id){
                            note.mates.splice(index, 1, newMate);
                        }
                    })
                })
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
            console.error(note);
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
                var sectionNote = yield noteService.createAsync({
                    initiator: this.session.auth.user._id,
                    type: NoteType.Section.value(),
                    notebook: json.notebook
                });
                json.parentNote = sectionNote._id;
                json.new = true;
            }
            var note = yield noteService.createAsync(json);
            this.body = {note: note, section: sectionNote}
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

    router.post('/note/uploadimgs', function* (){
        try{
            var notes = this.request.body.notes;
            for(let i=0, len=notes.length; i<len; i++){
                var note = notes[i];
                note.url = yield context.services.mediaService.uploadImgAsync(note.url);
                yield context.services.noteService.createAsync(note);
            }
            this.body = {notes: notes};
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

    router.post('/note/find', function*(){
        var params = {};
        //params.page = this.request.body.page;
        var lFlg = this.request.body.status == 'active' ? 'a' : 'd';
        params.conditions = {
            lFlg: lFlg,
            type: 'pg'
        };
        params.sort = {
            crtOn: -1
        };
        params.populate = [
            {
                path: 'initiator'
            }
        ]
        this.body = yield noteService.filterAsync(params);
    });

    router.get('/note/delete', function*(){
        var noteId = this.query.id;
        yield noteService.updateByIdAsync(noteId, {lFlg: 'd'});
        this.body = {success: true};
    });
};