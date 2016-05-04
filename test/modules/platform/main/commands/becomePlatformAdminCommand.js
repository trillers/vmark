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

describe('becomePlatformAdminCommand', function() {
    //var openid = 'okvXqsw1VG76eVVJrKivWDgps_gA';//包三哥的错题本openid
    //var openid = 'oO9zswxhJsRd_9f8DlpzfZrWnjRk';//包三哥的跟谁学西安openid
    //var openid = 'oO9zsww3I9LWFN9AWf0RP9myCjsQ';//Rupert的跟谁学西安openid
    var openid = 'okvXqs4vtB5JDwtb8Gd6Rj26W6mE'; //独自等待错题本 openid

    it.only('success to become a platform admin', function (done) {
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

