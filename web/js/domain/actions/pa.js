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

domain.action('loadAllMyManageMedia').onExecute(function(data){
    apiFactory.get('/bot/allMyMedia?tenantId=' + data.tenantId + '&operatorId=' + data.operatorId).drive(this).send();
});

domain.action('loadGroups').onExecute(function(data){
    apiFactory.get('/bot/groups?tenantId=' + data.tenantId + '&operatorId=' + data.operatorId).drive(this).send();
});



module.exports = null;