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

domain.action('loadAllTenantWechatSite').onExecute(function(id){
    apiFactory.get('/tenant/wechatsite/loadAll?tenant=' + id).drive(this).send();
});
domain.action('loadTenantWechatSite').onExecute(function(id){
    apiFactory.get('/tenant/wechatsite/load?id=' + id).drive(this).send();
});

domain.action('updateTenantWechatSiteById').onExecute(function(data){
    apiFactory.put('/tenant/wechatsite/_' + data.id).drive(this).send(data);
});

domain.action('createCourse').onExecute(function(data){
    apiFactory.post('/tenant/sd/course').drive(this).send(data);
});

domain.action('findCourses').onExecute(function(data){
    apiFactory.post('/tenant/sd/courses').drive(this).send(data);
});

module.exports = null;