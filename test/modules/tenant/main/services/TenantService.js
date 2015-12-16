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

describe('TenantService', function(){
    describe('registerPersonalTenant', function(){
        //var openid = 'okvXqs_VftHruzwFV9rx4Pbd_fno'; //小小星星妹
        var openid = 'okvXqsw1VG76eVVJrKivWDgps_gA';
        it('Succeed to register a personal tenant', function(done){
            var service = context.services.tenantService;
            service.registerPersonalTenant(openid, function(err, user){
                logger.debug(user);
                //assert.equal(result.type, PartyType.Personal.value());
                //assert.equal(result.administrative, false);
                done();
            });
        });
    });

    describe('bindPersonalBot', function(){
        //var openid = 'okvXqs4vtB5JDwtb8Gd6Rj26W6mE';
        var platformAdminOpenid = 'okvXqs4vtB5JDwtb8Gd6Rj26W6mE';
        var operatorOpenid = 'okvXqsw1VG76eVVJrKivWDgps_gA'; //小小星星妹
        var botOpenid = 'okvXqs_VftHruzwFV9rx4Pbd_fno';
        var service = context.services.tenantService;
        var bindBotResults = service.bindBotResults;
        it('Fail to bind a personal bot because no operator user', function(done){
            service.bindPersonalBot('fake openid', botOpenid, function(err, result){
                logger.debug(err);
                logger.debug(result);
                assert.equal(result.result, bindBotResults.NO_OPERATOR);
                done();
            });
        });

        it('Fail to bind a personal bot because operator is not admin user', function(done){
            service.bindPersonalBot(botOpenid, botOpenid, function(err, result){
                logger.debug(err);
                logger.debug(result);
                //assert.equal(result.result, bindBotResults.NOT_ADMIN);
                done();
            });
        });

        it.only('Succeed to bind a personal bot', function(done){
            service.bindPersonalBot(operatorOpenid, botOpenid, function(err, result){
                logger.debug(err);
                logger.debug(result);
                setTimeout(function(){done();}, 2000);
                //done();
            });
        });

        it('Fail to bind a personal bot because operator has other role', function(done){
            service.bindPersonalBot(operatorOpenid, platformAdminOpenid, function(err, result){
                logger.debug(err);
                logger.debug(result);
                //assert.equal(result.result, bindBotResults.OTHER_ROLE);
                done();
            });
        });

    });

});