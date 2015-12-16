var assert = require('chai').assert;
var PartyType = require('../../../../../src/modules/common/models/TypeRegistry').item('PartyType');
var contextLoader = require('../../../../../src/context');
var context = contextLoader.context;
var logger = context.logger;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});

describe('PlatformOrgService', function(){
    describe('ensurePlatform', function(){
        it('Succeed to ensure the platform org', function(done){
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
        it('Succeed to create a platform org', function(done){
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
        it('Succeed to load the platform org', function(done){
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