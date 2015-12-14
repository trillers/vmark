var assert = require('chai').assert;
var context = require('../../../../../src/index');
var logger = context.logger;
var PartyType = require('../../../../../src/modules/common/models/TypeRegistry').item('PartyType');

before(function(done){
    setTimeout(function () {
        done();
    }, 2000);
});
describe('TenantService', function(){
    describe('registerPersonalTenant', function(){
        var openid = 'okvXqs_VftHruzwFV9rx4Pbd_fno'; //小小星星妹
        //var openid = 'okvXqsw1VG76eVVJrKivWDgps_gA';
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
        var operatorOpenid = 'okvXqs_VftHruzwFV9rx4Pbd_fno'; //小小星星妹
        var botOpenid = 'okvXqs4vtB5JDwtb8Gd6Rj26W6mE';

        it('Fail to bind a personal bot because no operator user', function(done){
            var service = context.services.tenantService;
            var bindBotResults = service.bindBotResults;
            service.bindPersonalBot('fake openid', botOpenid, function(err, result){
                logger.debug(err);
                logger.debug(result);
                assert.equal(result.result, bindBotResults.NO_OPERATOR);
                done();
            });
        });

        it('Fail to bind a personal bot because operator is not admin user', function(done){
            var service = context.services.tenantService;
            var bindBotResults = service.bindBotResults;
            service.bindPersonalBot(botOpenid, botOpenid, function(err, result){
                logger.debug(err);
                logger.debug(result);
                assert.equal(result.result, bindBotResults.NOT_ADMIN);
                done();
            });
        });

        it('Succeed to bind a personal bot', function(done){
            var service = context.services.tenantService;
            service.bindPersonalBot(operatorOpenid, botOpenid, function(err, result){
                logger.debug(err);
                logger.debug(result);
                done();
            });
        });
    });

});