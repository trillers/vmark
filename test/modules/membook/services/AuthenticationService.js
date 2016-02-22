var assert = require('chai').assert;
var contextLoader = require('../../../../src/context');
var context = contextLoader.context;
before(function(done){
    contextLoader.check(function(){
        console.warn('done');
        done();
    });
});

describe.only('AuthenticationService', function(){
    var openid = 'oqSpUuDlnKxHxwZa4xylKuyxaXNM';
    describe('signupOnSubscription', function(){
        it('Succeed to sign up on Subscription', function(done){
            var authenticationService = context.services.authenticationService;
            authenticationService.signupOnSubscription(openid, function(err, auth){
                assert.ok(!err);
                console.info(auth);
                done();
            })
        });
    });

    describe('signinWithOpenid', function(){
        it('Succeed to sign in with openid', function(done){
            var authenticationService = context.services.authenticationService;
            authenticationService.signinWithOpenid(openid, function(err, auth){
                assert.ok(!err);
                console.info(auth);
                done();
            })
        });
    });

});
