var domain = require('../domain');
var apiFactory = domain.restApi();

domain.action('broadcastTxt').onExecute(function(data){
    apiFactory.post('/bot/broadcastTxt').drive(this).send(data);
});

domain.action('broadcastImg').onExecute(function(data){
    apiFactory.post('/bot/broadcastImg').drive(this).send(data);
});

domain.action('loadBroadcastHistory').onExecute(function(id){
    apiFactory.get('/bot/broadcastHistory?botId=' + id).drive(this).send();
});
domain.action('loadContacts').onExecute(function(id){
    apiFactory.get('/bot/contacts?botId=' + id).drive(this).send();
});

domain.action('addGroup').onExecute(function(data){
    apiFactory.post('/bot/group').drive(this).send(data);
});

domain.action('loadGroups').onExecute(function(data){

});

module.exports = null;