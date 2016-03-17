var domain = require('../domain');
var apiFactory = domain.restApi();

domain.action('findTenants').onExecute(function(data){
    apiFactory.post('/tenant/filter').drive(this).send(data);
});

domain.action('loadTenantById').onExecute(function(data){
    apiFactory.get('/tenant/_' + data.id).drive(this).send();
});

domain.action('updateTenantById').onExecute(function(data){
    apiFactory.put('/tenant/_' + data.id).drive(this).send(data);
});

domain.action('addTenantWechatSite').onExecute(function(data){
    apiFactory.post('/tenant/add-wechatsite').drive(this).send(data);
});

module.exports = null;