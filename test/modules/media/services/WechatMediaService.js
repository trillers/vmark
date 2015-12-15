var context = require('../../../../src/context').context;

before(function(done){
    setTimeout(function () {
        done();
    }, 2000);
})
describe('WechatMediaService', function(){
    describe('create', function(){
        var platformId = null;
        before(function(done){
            var service = context.services.platformOrgService;
            service.ensurePlatform(function(err, platform){
                platformId = platform.id;
                done();
            })
        });

        it('create a wechat bot', function(done){
            var service = context.services.wechatMediaService;
            var wechatSite = {
                name: '包三哥',
                org: platformId
            };
            service.create(wechatSite, function(err, result){
                context.logger.debug(result);
                done();
            });
        });

    });

});