var domain = require('../domain');
var apiFactory = domain.restApi();


domain.action('findTenantAdlinks').onExecute(function(data){
    apiFactory.get('/adlink/filter').drive(this).send();
});

module.exports = null;