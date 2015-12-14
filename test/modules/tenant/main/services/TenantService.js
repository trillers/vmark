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

});