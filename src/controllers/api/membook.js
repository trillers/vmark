"use strict";
var co = require('co');
var _ = require('underscore');
var context = require('../../context/context');
var typeRegistry = require('../../modules/common/models/TypeRegistry');
var NoteType = typeRegistry.item('NoteType');
var NoteStatus = typeRegistry.item('NoteStatus');
var InteractType = typeRegistry.item('InteractType');
var noteService = context.services.noteService;
var notebookService = context.services.notebookService;
var interactService = context.services.interactService;
var invitationService = context.services.invitationService;

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

    /**
     * add a note page for share
     */
    router.post('/share', function* (){
        try{
            let page = this.request.body;
            page.initiaor = _.pick(page.initiaor, '_id', 'headimgurl', 'nickname');
            let pageNote = yield noteService.createAsync({
                title: '默认',
                type: NoteType.Page.value(),
                initiator: page.initiator._id
            });
            pageNote.initiator = page.initiator;
            let sectionNote = yield noteService.createAsync({
                parentNote: pageNote._id,
                type: NoteType.Section.value(),
                initiator: page.initiator._id
            });
            sectionNote.initiator = page.initiator;
            pageNote.mates = [sectionNote];
            sectionNote.mates = [];
            for(var i=0, len=page.notes.length; i<len; i++){
                let note = {
                    content: page.notes[i].content,
                    type: page.notes[i].type,
                    parentNote: sectionNote._id,
                    initiator: page.initiator._id
                };
                let notePersisted = yield noteService.createAsync(note);
                notePersisted.initiator = page.initiator;
                sectionNote.mates.push(notePersisted);
            }
            console.log(pageNote);
            this.body = {error: null, pageNote: pageNote};
        } catch(e) {
            context.logger.error(e);
            this.body = {error :e};
        }
    });

    /**
     * in used
     */
    router.put('/notebook/_:id', function* (){
        try{
            let id = this.params.id;
            let title = this.request.body.title;
            yield notebookService.updateByIdAsync(id,
                {title: title}
            );
            this.body = {error: null, notebook: {
                id: id,
                title: title
            }};
        } catch(e) {
            context.logger.error(e);
            this.body = {error :e};
        }
    });

    /**
     * in used
     * @param: pageNum
     * @param: perPage
     * @param: notebookId
     */
    router.post('/note/p/:num', function* (){
        try{
            let pageNum = this.params.num;
            let perPage = this.request.body.perPage;
            let notebookId = this.request.body.notebook;
            let notes = yield noteService.filterAsync({
                conditions:{
                    notebook: notebookId,
                    type: {
                        $not: {$eq: 'sc'}
                    }
                },
                page: {
                    no: pageNum,
                    size: perPage
                }
            });
            this.body = {notes: notes, error: null};
        } catch (e){
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
            this.body = {error: null, note: note};
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    /**
     * in used, for app startup
     */
    router.get('/notebooks/user/_:userId', function*(){
        try{
            let latestNotebookId = this.session.auth.userBiz.latest;
            let latestNotebook = null;
            let result = yield notebookService.loadNotebooksByUserIdAsync(this.params.userId);
            let notebooks = result.map(function(r){ return r.notebook});
            for(let i=0, len=notebooks.length; i<len; i++){
                let notebook = notebooks[i];
                let participatesTemp = yield notebookService.loadUsersByNotebookIdAsync(notebook._id);
                notebook['participates'] = participatesTemp.map(function(participate){ return participate.user });
                if(notebook._id === latestNotebookId) {
                    latestNotebook = notebook;
                }
            }
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

    /**
     * wanted {total count, a week count, participates}
     * params: notebook_ids<Array>
     * in used, for notebooks index
     */
    router.post('/notebooks/summary', function*(){
        try{
            var notebookIds = this.request.body.notebooks;
            var notebooks = [];
            for(let i=0, len=notebookIds.length; i<len; i++){
                let id = notebookIds[i];
                let notes = yield noteService.loadNotesByNotebookIdAsync(id);
                let participatesTemp = yield notebookService.loadUsersByNotebookIdAsync(id);
                let participates = participatesTemp.map(function(participate){ return participate.user });
                let total = notes && notes.length || 0;
                let now = (new Date()).getTime();
                let countForWeek = notes.filter(function(note){ return ((now - note.crtOn.getTime()) <= 7*24*3600*1000)}).length || 0;
                notebooks.push({
                    id: id,
                    total: total,
                    countForWeek: countForWeek,
                    participates: participates
                })
            }
            this.body = {data: notebooks, error: null};
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    /**
     * @params: notebook_id as id<string>
     * in used
     */
    router.put('/notebook/latest/_:id', function*(){
        try{
            this.session.auth.userBiz.latest = this.params.id;
            this.body = {data: true, error: null};
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    /**
     * load notebook detail for notebook-detail page
     * @param notebook_id
     * @return {total count, a week count, participates}
     * in used
     */
    router.post('/notebook/detail/_:id', function* (){
        try{
            let notebookId = this.params.id;
            let notebook = yield notebookService.loadByIdAsync(notebookId);
            let notes = yield noteService.loadNotesByNotebookIdAsync(notebookId);
            let participatesTemp = yield notebookService.loadUsersByNotebookIdAsync(notebookId);
            let participates = participatesTemp.map(function(participate){ return participate.user });
            let total = notes && notes.length || 0;
            let now = (new Date()).getTime();
            let countForWeek = notes.filter(function(note){ return ((now - note.crtOn.getTime()) <= 7*24*3600*1000)}).length || 0;
            notebook['total'] = total;
            notebook['countForWeek'] = countForWeek;
            notebook['participates'] = participates;
            let refinedNotes = [];
            if(notes && notes.length){
                refinedNotes = notes.splice(0, 2)
            }
            this.body = {
                error: null,
                notebook:notebook,
                notes: refinedNotes
            };
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    /**
     * @params initiator notebook
     * invite participate
     * in used
     */
    router.post('/notebook/invite', function* (){
        try{
            let initiator = this.request.body.initiator;
            let notebook = this.request.body.notebook;
            let invitation = yield invitationService.createAsync({notebook: notebook, initiator: initiator});
            this.body = {
                error: null,
                invitation: invitation.id
            }
        } catch(e) {
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