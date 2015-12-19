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
        it('success register platform operation for no subscribe user', function(done){
            var service = context.services.securityService;
            var openid = 'okvXqsw1VG76eVVJrKivWDgps_gA';//包三哥的错题本openid
            service.authenticate(openid, function(err, auth){
                console.info(auth);
                done();
            });
        });

    });
});