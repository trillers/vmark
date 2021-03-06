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

domain.action('findDistributorsCountByTenantId').onExecute(function(data){
    apiFactory.get('/tenant/sd/distributors/count?tenant=' + data.tenant).drive(this).send();
});

domain.action('findCustomersCountByTenantId').onExecute(function(data){
    apiFactory.get('/tenant/sd/customers/count?tenant=' + data.tenant).drive(this).send();
});

domain.action('findCustomersByTenantId').onExecute(function(data){
    var querystring = Object.keys(data.filter).map(function(k){
        return k + "=" + data.filter[k]
    }).join("&");
    apiFactory.get('/tenant/sd/customers?' + querystring).drive(this).send();
});

domain.action('checkout').onExecute(function(data){
    apiFactory.post('/tenant/sd/distributors/checkout').drive(this).send(data);
});

domain.action('findDistributorsWithPendingPaymentByTenantId').onExecute(function(data){
    var querystring = Object.keys(data.filter).map(function(k){
        return k + "=" + data.filter[k]
    }).join("&");
    apiFactory.get('/tenant/sd/distributors/payment?' + querystring).drive(this).send();
});

domain.action('findDistributorsCountWithPendingPaymentByTenantId').onExecute(function(data){
    apiFactory.get('/tenant/sd/distributors/payment/count?tenant=' + data.tenant).drive(this).send();
});

domain.action('findOrderRelatedDistributor').onExecute(function(data){
    apiFactory.get('/tenant/sd/orders/distributor?distributor=' + data.distributor + '&status=' + data.status).drive(this).send();
});

domain.action('findDistributorsByTenantId').onExecute(function(data){
    var querystring = Object.keys(data.filter).map(function(k){
        return k + "=" + data.filter[k]
    }).join("&");
    apiFactory.get('/tenant/sd/distributors?' + querystring).drive(this).send();
});

domain.action('createOrder').onExecute(function(data){
    apiFactory.post('/tenant/sd/order').drive(this).send(data);
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

domain.action('fetchSdQrByProductAndWechatSite').onExecute(function(data) {
    apiFactory.post('/tenant/sd/catalog/poster').drive(this).send(data);
});

domain.action('findBespeaks').onExecute(function(data){
    var querystring = Object.keys(data.filter).map(function(k){
        return k + "=" + data.filter[k]
    }).join("&");
    apiFactory.get('/tenant/sd/bespeak?' + querystring).drive(this).send();
});

domain.action('updateBespeakById').onExecute(function(data){
    apiFactory.put('/tenant/sd/bespeaks/_' + data.id).drive(this).send(data);
});

domain.action('findCatalogs').onExecute(function(data){
    var querystring = Object.keys(data.filter).map(function(k){
        return k + "=" + data.filter[k]
    }).join("&");
    apiFactory.get('/tenant/sd/catalog?' + querystring).drive(this).send();
});

domain.action('loadPowerActivities').onExecute(function(data){
    apiFactory.get('/marketing/tenant/power/load?tenantId=' + data.tenantId).drive(this).send();
});

domain.action('loadPowerActivity').onExecute(function(data){
    apiFactory.get('/marketing/tenant/power/loadById?id=' + data.id).drive(this).send();
});

domain.action('updatePowerActivity').onExecute(function(data){
    apiFactory.post('/marketing/tenant/power/update').drive(this).send(data);
});

domain.action('addPowerActivity').onExecute(function(data){
    apiFactory.post('/marketing/tenant/power/add').drive(this).send(data);
});

domain.action('findOrders').onExecute(function(data){
    var querystring = Object.keys(data.filter).map(function(k){
        return k + "=" + data.filter[k]
    }).join("&");
    apiFactory.get('/tenant/sd/orders?' + querystring).drive(this).send();
});
module.exports = null;