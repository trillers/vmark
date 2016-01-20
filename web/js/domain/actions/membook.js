var domain = require('../domain');
var apiFactory = domain.restApi();

domain.action('loadNote').onExecute(function(data){
    apiFactory.get('/membook/note/_' + data.noteId).drive(this).send();
});
domain.action('saveNote').onExecute(function(data){
    apiFactory.post('/membook/note').drive(this).send(data);
});