var contextLoader = require('../../../../../src/context');
var context = contextLoader.context;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});

describe('PlatformWechatSiteService', function(){
    describe('ensurePlatformWechatSite', function(){
        it('ensure the platform wechat site', function(done){
            var service = context.services.platformWechatSiteService;
            service.ensurePlatformWechatSite(function(err, wechatSite){
                context.logger.debug(wechatSite);
                done();
            });
        });
    });

    describe('createPlatformWechatSite', function(){
        it('create a platform wechat site', function(done){
            var service = context.services.platformWechatSiteService;
            service.createPlatformWechatSite(function(err, wechatSite){
                context.logger.debug(wechatSite);
                done();
            });
        });
    });

    describe('loadPlatformWechatSite', function(){
        it('load the platform wechat site', function(done){
            var service = context.services.platformWechatSiteService;
            service.loadPlatformWechatSite(function(err, wechatSite){
                context.logger.debug(wechatSite);
                done();
            });
        });
    });

});