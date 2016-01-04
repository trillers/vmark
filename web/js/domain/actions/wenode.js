var domain = require('../domain');
var apiFactory = domain.restApi();

/**
 * operate bot actions
 */
domain.action('startBot').onExecute(function(data){
    apiFactory.post('/bot/start').drive(this).send(data);
});
domain.action('stopBot').onExecute(function(data){
    apiFactory.get('/bot/stop/' + data.openid).drive(this).send();
});


/**
 * status actions
 */
domain.action('loadBotByMediaId').onExecute(function(data){
    apiFactory.get('/bot/' + data.botId).drive(this).send();
});

/**
 * tags actions
 */
domain.action('saveTagsById').onExecute(function(data){
    apiFactory.post('/bot/tags/user/' + data.id).drive(this).send(data);
});

/**
 * multiSend actions
 */
domain.action('broadcastTxt').onExecute(function(data){
    apiFactory.post('/bot/broadcastTxt').drive(this).send(data);
});

domain.action('broadcastImg').onExecute(function(data){
    apiFactory.post('/bot/broadcastImg').drive(this).send(data);
});

domain.action('loadBroadcastHistory').onExecute(function(id){
    apiFactory.get('/bot/broadcastHistory?botId=' + id).drive(this).send();
});

/**
 * Contacts actions
 */
domain.action('loadContacts').onExecute(function(id){
    apiFactory.get('/bot/contacts?botId=' + id).drive(this).send();
});

/**
 * Group actions
 */
domain.action('loadGroup').onExecute(function(data){
    apiFactory.get('/bot/group?id=' + data.id).drive(this).send();
});

domain.action('delGroup').onExecute(function(data){
    apiFactory.delete('/bot/group?id=' + data.groupId).drive(this).send(data);
});

domain.action('addGroup').onExecute(function(data){
    apiFactory.post('/bot/group').drive(this).send(data);
});

domain.action('loadGroups').onExecute(function(data){
    apiFactory.get('/bot/groups?tenantId=' + data.tenantId + '&operatorId=' + data.operatorId).drive(this).send();
});

domain.action('loadAllMyManageMedia').onExecute(function(data){
    apiFactory.get('/bot/allMyMedia?tenantId=' + data.tenantId + '&operatorId=' + data.operatorId).drive(this).send();
});

domain.action('loadAllGroupMediaUsers').onExecute(function(data){
    apiFactory.post('/bot/group/mediaUser').drive(this).send(data);
});

domain.action('addGroupMembers').onExecute(function(data){
    apiFactory.post('/bot/group/members').drive(this).send(data);
});

domain.action('delGroupMember').onExecute(function(data){
    apiFactory.delete('/bot/group/members?ids='+data.mids + '&groupId=' + data.groupId).drive(this).send();
});

module.exports = null;