var domain = require('../domain');
var apiFactory = domain.restApi();

domain.action('findNotes').onExecute(function(data){
    apiFactory.get('/membook/note/find').drive(this).send(data);
});
