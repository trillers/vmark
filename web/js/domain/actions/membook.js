var domain = require('../domain');
var apiFactory = domain.restApi();

domain.action('loadLatestNotebook').onExecute(function(data){
    apiFactory.get('/membook/notebook/latest').drive(this).send();
});
domain.action('loadNote').onExecute(function(data){
    apiFactory.get('/membook/note/_' + data.noteId).drive(this).send();
});
domain.action('saveNote').onExecute(function(data){
    apiFactory.post('/membook/note').drive(this).send(data);
});
domain.action('saveNoteInSection').onExecute(function(data){
    apiFactory.post('/membook/section/note').drive(this).send(data);
});
domain.action('deleteNotes').onExecute(function(data){
    apiFactory.put('/membook/notes').drive(this).send(data);
});
domain.action('updateNote').onExecute(function(data){
    apiFactory.put('/membook/note/_' + data.id).drive(this).send(data);
});
domain.action('saveNotesInSection').onExecute(function(data){
    apiFactory.post('/membook/notes').drive(this).send(data);
});
domain.action('publishNote').onExecute(function(data){
    apiFactory.put('/membook/note/publish/_' + data._id).drive(this).send(data);
});
domain.action('saveComment').onExecute(function(data){
    apiFactory.post('/membook/note/comment').drive(this).send(data);
});
domain.action('deleteComment').onExecute(function(data){
    apiFactory.delete('/membook/note/comment/_' + data.id).drive(this).send();
});
domain.action('likeNote').onExecute(function(data){
    apiFactory.post('/membook/note/like').drive(this).send(data);
});
domain.action('unlikeNote').onExecute(function(data){
    apiFactory.post('/membook/note/unlike').drive(this).send(data);
});
domain.action('uploadImage').onExecute(function(data){
    apiFactory.post('/qn/image').drive(this).send(data);
});
domain.action('uploadVoice').onExecute(function(data){
    apiFactory.post('/qn/voice').drive(this).send(data);
});
domain.action('shareAction').onExecute(function(data){
    apiFactory.get('/membook/note/onShare').drive(this).send(data);
});
