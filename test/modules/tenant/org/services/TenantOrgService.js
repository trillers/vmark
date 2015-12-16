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

describe('TenantOrgService', function(){
    describe('createPersonalTenant', function(){
        it('Succeed to create a personal tenant', function(done){
            var service = context.services.tenantOrgService;
            var org = {
                name: '包三哥',
                desc: '包三哥'
            };
            service.createPersonalTenant(org, function(err, result){
                logger.debug(result);
                assert.equal(result.type, PartyType.Personal.value());
                assert.equal(result.administrative, false);
                done();
            });
        });
    });

    describe('createOrganizationalTenant', function(){
        it('Succeed to create a organizational tenant', function(done){
            var service = context.services.tenantOrgService;
            var org = {
                name: '跟谁学',
                desc: '跟谁学'
            };
            service.createOrganizationalTenant(org, function(err, result){
                logger.debug(result);
                assert.equal(result.type, PartyType.Organizational.value());
                assert.equal(result.administrative, false);
                done();
            });
        });
    });

    //describe('loadPlatform', function(){
    //    it('Succeed to load the platfrom tenant', function(done){
    //        var service = context.services.platformOrgService;
    //        service.loadPlatform(function(err, platform){
    //            logger.debug(platform);
    //            assert.equal(platform.type, PartyType.Organizational.value());
    //            assert.equal(platform.administrative, true);
    //            done();
    //        });
    //    });
    //});

});