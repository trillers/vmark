var domain = require('../domain');
var apiFactory = domain.restApi();

domain.action('findNotes').onExecute(function(data){
    apiFactory.post('/membook/note/find').drive(this).send(data);
});

domain.action('deleteNote').onExecute(function(id){
    apiFactory.get('/membook/note/delete?id=' + id).drive(this).send();
});
