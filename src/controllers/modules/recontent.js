var util = require('../../app/util');
var Router = require('koa-router');
var context = require('../../context/context');
var recontentService = context.services.recontentService;
var adlinkService = context.services.adlinkService;
module.exports = function(){
    var router = new Router();
    require('../../app/routes-spa')(router);

    router.get('/tenant-recontent-:id', function *(){
        var tenant = {name: '包三哥', type: 'p'};
        yield this.render('tenant-recontent', {tenant: tenant});
    });

    router.get('/recontent-set', function *(){
        var url = this.query.url;
        var feedback = this.query.feedback;
        var tenantId = 'MTAxM';
        var adlinks = yield adlinkService.findTenantAdlinksAsync(tenantId);
        console.error(adlinks);
        yield this.render('recontent-set', {adlinks: adlinks, url: url, feedback: feedback});
    });

    router.get('/recontent-gen', function *(){
        var url = this.query.url;
        var adlink = this.query.adlink;
        if(!url){
            this.redirect('/recontent-set');
            return;
        }
        else if(url.indexOf('mp.weixin.qq.com')==-1){
            this.redirect('/recontent-set?feedback=not_weixin&url=' + url);
            return;
        }

        var recontent = yield recontentService.generateAsync({originalUrl: url, adlink: adlink});
        var contentUri = recontent.newUrl;
        var me = this;
        yield new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve();
            }, 1000);
        });
        me.redirect(contentUri);
    });

    return router.routes();
};