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

    describe('signupWithBaseInfo', function(){
        it('Succeed to sign up with base info', function(done){
            var authenticationService = context.services.authenticationService;
            authenticationService.signupWithBaseInfo(openid, function(err, auth){
                assert.ok(!err);
                console.info(auth);
                done();
            })
        });
    });

    describe('signupWithUserInfo', function(){
        it('Succeed to sign up with user info', function(done){
            var authenticationService = context.services.authenticationService;
            var userinfo = {
                "openid": "oqSpUuDlnKxHxwZa4xylKuyxaXNM",
                "unionid": "otofQt93CLoszCRPNbkcEgZ2Av7Q",
                "nickname": "包三哥",
                "headimgurl": "http://wx.qlogo.cn/mmopen/daI4dovUUh5o4vRrNlEeIIvmXohhDYXaQUCCYyibvq6YbcPenD1wO5arW9iabib37nu2uwATCH6CefMwkehTfzce5sP1E7MfnQc/0",
                "country": "中国",
                "province": "北京",
                "city": "海淀",
                "remark": "",
                "groupid": 0,
                "language": "zh_CN",
                "subscribe": 1,
                "sex": 1,
            };
            authenticationService.signupWithUserInfo(userinfo, function(err, auth){
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
