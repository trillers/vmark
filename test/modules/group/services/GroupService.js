var contextLoader = require('../../../../src/context');
var context = contextLoader.context;
var logger = context.logger;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});
describe('GroupService', function(){
    describe.only('listMyGroups', function(){
        var tenantId = 'JgEnA';
        var operatorId = 'JgErI';
        it('Succeed to list my groups', function(done){
            var service = context.services.groupService;
            service.listMyGroups(tenantId, operatorId, function(err, result){
                logger.debug(result);
                done();
            });
        });

    });

});