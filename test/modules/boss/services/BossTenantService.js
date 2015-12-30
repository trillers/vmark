var contextLoader = require('../../../../src/context');
var context = contextLoader.context;
var logger = context.logger;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});
describe('BossTenantService', function(){
    describe.only('findTenants', function(){
        it('Succeed to find all tenants', function(done){
            var service = context.services.bossTenantService;
            service.findTenants({}, function(err, result){
                logger.debug(result);
                done();
            });
        });

    });

});