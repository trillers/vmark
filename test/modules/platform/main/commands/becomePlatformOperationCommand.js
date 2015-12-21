var assert = require('chai').assert;
var wxutil = require('../../../../framework/wechat/util');
var Wechat = require('../../../../../src/framework/wechat/index');
var contextLoader = require('../../../../../src/context');
var wechatemitter = null;

before(function(done){
    contextLoader.check(function(){
        wechatemitter = require('../../../../../src/modules/system/wechatsite/wechatemitter');
        done();
    });
});

describe('becomePlatformOperationCommand', function() {
    var openid = 'okvXqsw1VG76eVVJrKivWDgps_gA';//包三哥的错题本openid
    it('to become a platform operation', function (done) {
        var platform = new Wechat.Platform();
        var client = wxutil.newSignedInClient(platform);
        var site = wxutil.newRegisteredSite(platform);
        wechatemitter.bindSite(site);
        var siteClient = client.subscribeSite(site.getId(), openid);

        siteClient.sendText({
            Content: '成为平台运营专员'
        });

        setTimeout(function(){
            done();
        }, 4000);
    })
})

