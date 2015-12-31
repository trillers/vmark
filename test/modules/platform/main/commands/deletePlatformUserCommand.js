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
    var openid = 'okvXqsw1VG76eVVJrKivWDgps_gA';//包三哥的错题本openid
    //var openid = 'oO9zswxhJsRd_9f8DlpzfZrWnjRk';//包三哥的跟谁学西安openid

    it('success to delete current user', function (done) {
        var platform = new Wechat.Platform();
        var client = wxutil.newSignedInClient(platform);
        var site = wxutil.newRegisteredSite(platform);
        wechatemitter.bindSite(site);
        var siteClient = client.subscribeSite(site.getId(), openid);

        siteClient.sendText({
            Content: '删除当前用户'
        });

        setTimeout(function(){
            done();
        }, 4000);
    })
})

