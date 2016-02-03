var Router = require('koa-router');
var util = require('../../app/util');
var context = require('../../context/context');
var recontentService = context.services.recontentService;
var adlinkService = context.services.adlinkService;
var authChecker = require('../../modules/auth/middlewares/check-auth');
var wechatApi = require('../../modules/wechat/common/api').api;
module.exports = function(){
    var router = new Router();
    require('../../app/routes-spa')(router);
    router.use(authChecker); //add auth checker

    router.get('/tenant-recontent-:id', function *(){
        var tenantId = this.params.id;
        yield this.render('tenant-recontent', {tenantId: tenantId});
    });

    router.get('/recontent-set', function *(){
        var tenantId = null;
        if(this.query.tenantId){
            tenantId = this.query.tenantId;
        }
        else{
            tenantId = this.session.auth.tenantId;
        }
        var url = this.query.url;
        var feedback = this.query.feedback;
        var adlinks = yield adlinkService.findTenantAdlinksAsync(tenantId);
        yield this.render('recontent-set', {tenantId: tenantId, adlinks: adlinks, url: url, feedback: feedback});
    });

    router.post('/recontent-set', function *(){
        var tenantId = this.request.body && this.request.body.tenantId;
        var adlinks = yield adlinkService.findTenantAdlinksAsync(tenantId);
        yield this.render('recontent-set', {tenantId: tenantId, adlinks: adlinks});
    });

    router.post('/recontent-gen', function *(){
        var body = this.request.body;
        var url = body.url;
        var adlink = body.adlink;
        var tenantId = body.tenantId;
        var openid = null;

        if(this.session.auth){
            openid = this.session.auth.wechatSiteUser && this.session.auth.wechatSiteUser.openid;
        }
        if(!url){
            this.redirect('/recontent-set?tenantId=' + tenantId);
        }
        else if(url.indexOf('mp.weixin.qq.com')==-1){
            this.redirect('/recontent-set?tenantId=' + tenantId + '&feedback=not_weixin&url=' + url);
        }
        else{
            var recontent = null;
            try{
                recontent = yield recontentService.generateAsync({tenantId: tenantId, originalUrl: url, adlink: adlink});
                var contentUri = recontent.newUrl;
                var ctx = this;
                if(openid){
                    var articles = [{
                            "title": recontent.originalTitle,
                            "description": recontent.originalTitle,
                            "url": ctx.request.origin + recontent.newUrl,
                            "picurl": ctx.request.origin + "/public/images/bjb.jpg"
                    }];
                    wechatApi.sendNews(openid, articles, function(){
                        context.logger.debug('Recontent newly generated is sent');
                    });
                }
                yield new Promise(function(resolve, reject){
                    setTimeout(function(){
                        resolve();
                    }, 2000);
                });
                ctx.redirect(contentUri);
            }
            catch(err){
                context.logger.error(err);
                this.redirect('/recontent-set?tenantId=' + tenantId + '&feedback=error&url=' + url);
            }
        }
    });

    return router.routes();
};