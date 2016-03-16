var domain = require('../domain');
var apiFactory = domain.restApi();

domain.action('findTenants').onExecute(function(data){
    apiFactory.post('/tenant/filter').drive(this).send(data);
});

domain.action('loadTenantById').onExecute(function(data){
    apiFactory.get('/tenant/_' + data.id).drive(this).send();
});

domain.action('loadRedpackets').onExecute(function(data){
    apiFactory.get('/marketing/redpacket/load').drive(this).send();
});

module.exports = null;