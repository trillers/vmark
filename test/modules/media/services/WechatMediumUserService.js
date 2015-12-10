var context = require('../../../../../src');
var WechatMediaUserType = require('../../../../../src/modules/common/models/TypeRegistry').item('WechatMediaUserType');

before(function(done){
    setTimeout(function () {
        done();
    }, 2000);
})
describe('WechatMediaUserService', function(){
    describe('create', function(){
        var wechatSiteId = null;
        before(function(done){
            var service = context.services.platformWechatSiteService;
            service.loadPlatformWechatSite(function(err, wechatSite){
                wechatSiteId = wechatSite.id;
                done();
            })
        });

        it('create a wechat site user', function(done){
            var service = context.services.wechatMediaUserService;
            var wechatSiteUser = {
                host: wechatSiteId,
                type: WechatMediaUserType.WechatSiteUser.value(),
                nickname: '包三哥',
                openid: 'xxx'
            };
            service.create(wechatSiteUser, function(err, result){
                context.logger.debug(result);
                done();
            });
        });

    });

});