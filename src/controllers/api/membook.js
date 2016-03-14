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
var userNotebookService = context.services.userNotebookService;
var interactService = context.services.interactService;
var invitationService = context.services.invitationService;

var rankAction = context.kvs.rankAction;

module.exports = function (router) {

    router.get('/notebook/latest', function*(){
        try{
            let auth = this.session.auth;
            let latestNotebook = yield notebookService.fetchByIdAsync(auth.userBiz.latest, auth.user);
            let sectionNotes = yield noteService.loadSectionNotesByNotebookIdAsync(latestNotebook._id);
            if(!sectionNotes || !sectionNotes.length){
                sectionNotes = yield noteService.createAsync({
                    initiator: this.session.auth.user,
                    notebook: latestNotebook._id,
                    type: NoteType.Section.value()
                });
                sectionNotes.initiator = auth.user;
            }
            latestNotebook.mates = Array.isArray(sectionNotes) ? sectionNotes: [sectionNotes];
            let promiseArr = latestNotebook.mates.map(function(sectionNote){
                return noteService.loadMatesByIdAsync(sectionNote._id);
            });
            let results = yield Promise.all(promiseArr);
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
     * load all notes for share
     * in used
     * @params id initiator_id
     * @return notes Array<Object>
     */
    router.get('/note/share/user/_:id', function* (){
        try{
            let initiatorId = this.params.id;
            let notes = yield noteService.filterAsync({
                conditions: {
                    notebook: {$exists: false},
                    initiator: initiatorId,
                    type: NoteType.Page.value()
                },
                sort:{
                    crtOn: -1
                }
            });
            this.body = {error: null, notes: notes};
        } catch(e) {
            context.logger.error(e);
            this.body = {error :e};
        }
    });

    /**
     * add a note page for share
     * in used
     * @params note Object
     * @return note Object
     */
    router.post('/share', function* (){
        try{
            let page = this.request.body;
            page.initiator = _.pick(page.initiator, '_id', 'headimgurl', 'nickname');
            let pageNoteJson = {
                title: '默认',
                type: NoteType.Page.value(),
                initiator: page.initiator._id,
                status: NoteStatus.Publish.value()
            };
            //filter out the cover img from notes
            let imgs = page.notes.filter(function(note){
                return note.type === 'img'
            });
            if(imgs.length){
                pageNoteJson.meta = imgs[0].url;
            }
            let pageNote = yield noteService.createAsync(pageNoteJson);
            pageNote.initiator = page.initiator;
            let sectionNote = yield noteService.createAsync({
                parentNote: pageNote._id,
                type: NoteType.Section.value(),
                initiator: page.initiator._id,
                status: NoteStatus.Publish.value()
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
            if(!note){
                return this.body = {note: {}};
            }
            note.mates = yield noteService.loadMatesDeepByIdAsync(id);
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
                });
            }
            this.body = {note: note, error: null};
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
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    /**
     * in used
     * @params notebook Object<{title: String}>
     * @return notebook Object
     */
    router.post('/notebooks', function* (){
        try {
            let notebook = this.request.body;
            let userId = this.session.auth.user._id;
            notebook.initiator = this.session.auth.user._id;
            let notebookPersisted = yield notebookService.createAsync(notebook);
            yield userNotebookService.createAsync({
                notebook: notebookPersisted._id,
                user: userId
            });
            yield notebookService.updateLatestAsync(userId, notebookPersisted._id);
            this.session.auth.userBiz.latest = notebookPersisted._id;
            this.body = {notebook: notebookPersisted};
        } catch (e) {
            context.logger.error(e);
            this.body = {error: e};
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
            let json = this.request.body;
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
            var noteUpdated = null;
            if(!note.status || note.status === NoteStatus.Draft.value()){
                rankAction.addSectionNote(note.parentNote);
                note.status = NoteStatus.Publish.value();
                noteUpdated = yield noteService.updateByIdAsync(note._id, note);
            }
            if(note.mates && note.mates.length){
                var asyncArr = [];
                var coverImg = null;
                note.mates.forEach(function(mate){
                    if(mate.url && !coverImg){
                        coverImg = mate.url
                    }
                    if(!mate.status || (mate.status === NoteStatus.Draft.value())){
                        mate.status = NoteStatus.Publish.value();
                        asyncArr.push(noteService.updateByIdAsync(mate._id, mate))
                    }
                });
                if(!noteUpdated.meta && coverImg){
                    yield noteService.updateByIdAsync(note._id, {meta: coverImg});
                }
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
            let noteId = this.request.body.note;
            let originalInteraction = this.request.body.interaction;
            originalInteraction.type = InteractType.Like.value();
            let interaction = yield interactService.createAsync(originalInteraction);
            let note = yield noteService.likeAsync(noteId, interaction);
            rankAction.like(note.parentNote);
            this.body = {like: interaction};
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.post('/note/comment', function*(){
        try{
            let noteId = this.request.body.note;
            let originalInteraction = this.request.body.interaction;
            originalInteraction.type = InteractType.Comment.value();
            let interaction = yield interactService.createAsync(originalInteraction);
            let note = yield noteService.addCommentAsync(noteId, interaction);
            rankAction.comment(note.parentNote);
            this.body = {comment: interaction};
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.delete('/note/comment/_:id', function*(){
        try{
            let id = this.params.id;
            yield interactService.deleteByIdAsync(id);
            this.body = {success: true};
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.post('/note/unlike', function*(){
        try{
            let noteId = this.request.body.note;
            let userId = this.session.auth.user._id;
            let interactId = this.request.body.interaction;
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
            yield notebookService.updateLatestAsync(this.session.auth.user._id, this.params.id);
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
            let notes = this.request.body.notes;
            let sectionNote = null;
            let me = this;
            this.session['draftId'] && (this.session['draftId'] = null);
            let asyncArr = [];
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
            let mates = yield Promise.all(asyncArr);
            this.body = {mates: mates, parentNote: sectionNote};
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.put('/notes', function*(){
        try{
            let noteIds = this.request.body.notes;
            yield noteService.deleteNotesByIdAsync(noteIds);
            this.body = {success: true};
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.post('/section/note', function*(){
        try{
            let json = this.request.body;
            this.session['draftId'] && (this.session['draftId'] = null);
            if(!json.parentNote){
                let sectionNote = {
                    initiator: this.session.auth.user._id,
                        type: NoteType.Section.value(),
                    notebook: json.notebook
                };
                if(json.pageNoteId){
                    sectionNote['parentNote'] = json.pageNoteId;
                }
                var sectionNotePersisted = yield noteService.createAsync(sectionNote);
                json.parentNote = sectionNotePersisted._id;
                json.new = true;
            }
            var note = yield noteService.createAsync(json);
            this.body = {note: note, section: sectionNotePersisted}
        }catch (e){
            context.logger.error(e);
        }

    });

    router.put('/note/_:id', function*(){
        try{
            let id = this.params.id;
            let json = this.request.body;
            this.body = yield noteService.updateByIdAsync(id, json);
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.post('/note/uploadimgs', function* (){
        try{
            let notes = this.request.body.notes;
            let sectionNote = null;
            for(let i=0, len=notes.length; i<len; i++){
                let note = notes[i];
                try{
                    note.url = yield context.services.mediaService.uploadImgAsync(note.url);
                }catch(e){
                    context.logger.error('......');
                }
                if(note.notebook){
                    let notebook = yield notebookService.loadByIdAsync(note.notebook);
                    if(!notebook.coverImg){
                        yield notebookService.updateByIdAsync(notebook._id, {coverImg: note.url});
                    }
                }
                if(!note.parentNote && note.notebook && !sectionNote){
                    sectionNote = yield noteService.createAsync({
                        notebook: note.notebook,
                        type: NoteType.Section.value()
                    });
                    note.parentNote = sectionNote._id;
                }
                yield noteService.createAsync(note);
            }
            this.body = {notes: notes};
        }catch(e){
            context.logger.error(e);
            this.body = {error: e};
        }
    });

    router.get('/note/onShare', function*(){
        let noteId = this.query.id;
        if(noteId) {
            rankAction.share(noteId);
        }
        this.body = {success: true};
    });

    router.post('/note/find', function*(){
        let params = {};
        //params.page = this.request.body.page;
        let lFlg = this.request.body.status == 'active' ? 'a' : 'd';
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
        let noteId = this.query.id;
        yield noteService.updateByIdAsync(noteId, {lFlg: 'd'});
        this.body = {success: true};
    });
};