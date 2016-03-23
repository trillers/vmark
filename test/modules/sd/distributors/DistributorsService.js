var contextLoader = require('../../../../src/context');
var context = contextLoader.context;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});

describe('PlatformWechatSiteUserService', function(){
    describe('createPlatformWechatSiteUser', function(){
        it('create a platform wechat site user', function(done){
            var service = context.services.distributorService;
            service.findAllByTenantId('kvsCe', function(err, result){
                context.logger.debug(result);
                done();
            });
        });
    });

});