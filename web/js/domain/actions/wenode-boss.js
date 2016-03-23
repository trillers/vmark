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

domain.action('findDistributorsByTenantId').onExecute(function(data){
    apiFactory.get('/tenant/sd/distributors?tenant=' + data.tenant).drive(this).send();
});

domain.action('createCourse').onExecute(function(data){
    apiFactory.post('/tenant/sd/course').drive(this).send(data);
});

domain.action('findCourses').onExecute(function(data){
    apiFactory.post('/tenant/sd/courses').drive(this).send(data);
});

domain.action('loadCourseById').onExecute(function(data){
    apiFactory.get('/tenant/sd/course/_' + data.id).drive(this).send(data);
});

domain.action('updateCourseById').onExecute(function(data){
    apiFactory.put('/tenant/sd/course/_' + data.id).drive(this).send(data);
});

domain.action('createCatalog').onExecute(function(data){
    apiFactory.post('/tenant/sd/catalog').drive(this).send(data);
});

domain.action('loadCatalogById').onExecute(function(data){
    apiFactory.get('/tenant/sd/catalog/_' + data.id).drive(this).send();
});

domain.action('updateCatalogById').onExecute(function(data){
    apiFactory.put('/tenant/sd/catalog/_' + data.id).drive(this).send(data);
});

domain.action('findCatalogs').onExecute(function(data){
    var querystring = Object.keys(data.filter).map(function(k){
        return k + "=" + data.filter[k]
    }).join("&");
    console.log(querystring);
    apiFactory.get('/tenant/sd/catalog?' + querystring).drive(this).send();
});




module.exports = null;