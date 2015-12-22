var assert = require('chai').assert;
var contextLoader = require('../../../../src/context');
var context = contextLoader.context;
var logger = context.logger;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});
describe('OrgMediaService', function(){
    describe.only('listMediasByOperatorId', function(){
        it('Succeed to list medias', function(done){
            var orgMediaService = context.services.orgMediaService;
            var tenantId = 'JgEnA';
            var operatorId = 'JgErI';
            orgMediaService.listMediasByOperatorId(tenantId, operatorId, function(err, mediaIds){
                console.info(mediaIds);
                done();
            });
        });

    });
});