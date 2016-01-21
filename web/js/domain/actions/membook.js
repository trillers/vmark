var domain = require('../domain');
var apiFactory = domain.restApi();

domain.action('loadNote').onExecute(function(data){
    apiFactory.get('/membook/note/_' + data.noteId).drive(this).send();
});
domain.action('saveNote').onExecute(function(data){
    apiFactory.post('/membook/note').drive(this).send(data);
});
domain.action('saveSectionNote').onExecute(function(data){
    apiFactory.post('/membook/section/note').drive(this).send(data);
});
domain.action('updateNode').onExecute(function(data){
    apiFactory.put('/membook/note/_' + data.id).drive(this).send(data);
});
domain.action('saveNotesInSection').onExecute(function(data){
    apiFactory.post('/membook/notes').drive(this).send(data);
});
