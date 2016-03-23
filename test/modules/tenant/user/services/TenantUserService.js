var contextLoader = require('../../../../../src/context');
var context = contextLoader.context;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});

describe('TenantUserService', function(){
    describe('create TenantUserService', function(){
        it('create a tenant user', function(done){
            var service = context.services.tenantUserService;
            var user = {
                openid:       'xxx'
                , nickname:     '包三哥'
                , headimgurl:   '222'
                , sex:          1

                , country: 'zh'
                , province: 'tj'
                , city: 'xx'
                , district: 'dd'
            };

            service.create(user, function(err, result){
                context.logger.debug(result);
                done();
            });
        });
    });

});