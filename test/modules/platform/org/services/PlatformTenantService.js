var assert = require('chai').assert;
var context = require('../../../../../src/index');
var logger = context.logger;
var PartyType = require('../../../../../src/modules/common/models/TypeRegistry').item('PartyType');

before(function(done){
    setTimeout(function () {
        done();
    }, 2000);
});
describe('PlatformTenantService', function(){
    describe('ensurePlatform', function(){
        it('Succeed to ensure the platfrom tenant', function(done){
            var service = context.services.platformOrgService;
            service.ensurePlatform(function(err, platform){
                logger.debug(platform);
                assert.equal(platform.type, PartyType.Organizational.value());
                assert.equal(platform.administrative, true);
                done();
            });
        });
    });

    describe('createPlatform', function(){
        it('Succeed to create a platfrom tenant', function(done){
            var service = context.services.platformOrgService;
            service.createPlatform(function(err, platform){
                logger.debug(platform);
                assert.equal(platform.type, PartyType.Organizational.value());
                assert.equal(platform.administrative, true);

                done();
            });
        });
    });

    describe('loadPlatform', function(){
        it('Succeed to load the platfrom tenant', function(done){
            var service = context.services.platformOrgService;
            service.loadPlatform(function(err, platform){
                logger.debug(platform);
                assert.equal(platform.type, PartyType.Organizational.value());
                assert.equal(platform.administrative, true);
                done();
            });
        });
    });

});