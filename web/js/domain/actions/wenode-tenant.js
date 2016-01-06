var domain = require('../domain');
var apiFactory = domain.restApi();

domain.action('loadAdlink').onExecute(function(data){
    apiFactory.get('/adlink/_' + data).drive(this).send();
});

domain.action('saveAdlink').onExecute(function(data){
    apiFactory.post('/adlink/').drive(this).send(data);
});



module.exports = null;