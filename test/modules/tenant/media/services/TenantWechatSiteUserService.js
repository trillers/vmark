var contextLoader = require('../../../../../src/context');
var context = contextLoader.context;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});

describe('PlatformWechatSiteUserService', function(){
    describe('createPlatformWechatSiteUser', function(){
        it('create a platform wechat site user', function(done){
            var service = context.services.tenantWechatSiteUserService;
            var wechatSiteUser = {
                nickname: '包三哥',
                openid: 'xxx',
                user: ''
            };

            service.createTenantWechatSiteUser(wechatSiteUser, function(err, result){
                context.logger.debug(result);
                done();
            });
        });
    });

});