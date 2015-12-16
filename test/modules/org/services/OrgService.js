var contextLoader = require('../../../../src/context');
var context = contextLoader.context;
var logger = context.logger;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});
describe('OrgService', function(){
    describe('create', function(){
        it('Succeed to create a personal org', function(done){
            var service = context.services.orgService;
            var org = {
                name: '包三哥'
            };
            service.create(org, function(err, result){
                logger.debug(result);
                done();
            });
        });

    });

    //describe('registerTenant by openid', function(){
    //    it('registry a personal tenant by openid', function(done){
    //        var service = context.services.orgService;
    //        var openid = 'okvXqs4vtB5JDwtb8Gd6Rj26W6mE';//独自等待的错题本openid
    //        service.registerTenant(openid, function(err, result){
    //            context.logger.debug(result);
    //            done();
    //        });
    //    });
    //
    //});
});