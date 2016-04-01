var AuthenticationService = require('../../../../src/modules/tenant/auth/services/AuthenticationService');
var assert = require('chai').assert;
var contextLoader = require('../../../../src/context');
var context = contextLoader.context;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});

describe('AuthenticationService', function(){

    it('#signupWithBaseInfo', function(done){
        var authenticationService = new AuthenticationService(context);
        var mock = {
            wechatId: 'gh_efb5d7c9539e',
            openid: 'oqSpUuHK2Vj9DaL93eYqzLo4e6Ow'
        };

        authenticationService.signupWithBaseInfo(mock.wechatId, mock.openid, function(err, re){
            assert.ok(re.result === 'ok');
            done();
        })
    });

    it('#signupWithUserInfo', function(done){
        var authenticationService = new AuthenticationService(context);
        var mock = {
            wechatId: 'gh_efb5d7c9539e',
            userInfo: {
                openid: 'oqSpUuHK2Vj9DaL93eYqzLo4e6Ow',
                wechatId: 'gh_efb5d7c9539e',
                nickname: '独自等待',
                headimgurl: 'xxxx',
                sex: 1
            }
        };

        authenticationService.signupWithUserInfo(mock.wechatId, mock.userInfo, function(err, re){
            assert.ok(re.result === 'ok');
            done();
        })
    });

    it('#signupOnSubscription', function(done){
        var authenticationService = new AuthenticationService(context);
        var mock = {
            wechatId: 'gh_efb5d7c9539e',
            openid: 'oqSpUuHK2Vj9DaL93eYqzLo4e6Ow'
        };

        authenticationService.signupOnSubscription(mock.wechatId, mock.openid, function(err, re){
            assert.ok(re.result === 'ok');
            done();
        })
    });

    it('#signinWithWechatIdAndOpenid', function(done){
        var authenticationService = new AuthenticationService(context);
        var mock = {
            wechatId: 'gh_efb5d7c9539e',
            openid: 'oqSpUuHK2Vj9DaL93eYqzLo4e6Ow'
        };

        authenticationService.signinWithWechatIdAndOpenid(mock.wechatId, mock.openid, function(err, re){
            assert.ok(re.result === 'ok');
            done();
        })
    });
});