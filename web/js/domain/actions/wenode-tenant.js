var domain = require('../domain');
var apiFactory = domain.restApi();

domain.action('loadAdlink').onExecute(function(data){
    apiFactory.get('/adlink/_' + data).drive(this).send();
});

domain.action('loadAndEditAdlink').onExecute(function(data){
    apiFactory.get('/adlink/_' + data).drive(this).send();
});

domain.action('createAdlink').onExecute(function(data){
    apiFactory.post('/adlink/').drive(this).send(data);
});

domain.action('updateAdlink').onExecute(function(data){
    apiFactory.put('/adlink/_' + data._id).drive(this).send(data);
});


module.exports = null;