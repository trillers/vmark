var assert = require('chai').assert;
var contextLoader = require('../../../../../src/context');
var context = contextLoader.context;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});

describe('SecurityService', function(){
    describe.only('authenticate', function(){
        it('authenticate with operator', function(done){
            var service = context.services.securityService;
            var openid = 'okvXqsw1VG76eVVJrKivWDgps_gA';//包三哥的错题本openid

            service.authenticate(openid, function(err, auth){
                console.info(auth);
                done();
            });
        });

        it('authenticate with bot', function(done){
            var service = context.services.securityService;
            var openid = 'okvXqs_VftHruzwFV9rx4Pbd_fno';//小小星星妹的错题本openid

            service.authenticate(openid, function(err, auth){
                console.info(auth);
                done();
            });
        });

    });
});