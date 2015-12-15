var assert = require('chai').assert;
var wxutil = require('../../../../framework/wechat/util');
var Wechat = require('../../../../../src/framework/wechat/index');
var wechatemitter = require('../../../../../src/modules/system/wechatsite/wechatemitter');
var contextLoader = require('../../../../../src/context');

before(function(done){
    contextLoader.check(function(){
        done();
    });
});

describe('becomePlatformAdminCommand', function() {
    var openid = 'okvXqsw1VG76eVVJrKivWDgps_gA';//包三哥的错题本openid
    it('success to become a platform admin', function (done) {
        var platform = new Wechat.Platform();
        var client = wxutil.newSignedInClient(platform);
        var site = wxutil.newRegisteredSite(platform);
        wechatemitter.bindSite(site);
        var siteClient = client.subscribeSite(site.getId(), openid);

        siteClient.sendText({
            Content: '成为平台管理员'
        });

        setTimeout(function(){
            done();
        }, 4000);
    })
})

