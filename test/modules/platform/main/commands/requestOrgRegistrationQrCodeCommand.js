var assert = require('chai').assert;
var wxutil = require('../../../../framework/wechat/util');
var Wechat = require('../../../../../src/framework/wechat/index');
var wechatemitter = require('../../../../../src/modules/system/wechatsite/wechatemitter');
var OrgMemberRole = require('../../../../../src/modules/common/models/TypeRegistry').item('OrgMemberRole');
var contextLoader = require('../../../../../src/context');
var context = contextLoader.context;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});

describe('requestOrgRegistrationQrCodeCommand', function() {
    var openid = 'okvXqsw1VG76eVVJrKivWDgps_gA';//独自等待的错题本openid
    before(function(done){
        var service = context.services.platformService;
        service.registerPlatformOperation(openid, function(err, user){
            assert.ok(
                user.posts[0].role == OrgMemberRole.PlatformOperation.value() ||
                user.posts[0].role == OrgMemberRole.PlatformAdmin.value()
            );
            done();
        });
    });
    describe('request org registration qr code', function(){
        it('succeed to request', function (done) {
            var platform = new Wechat.Platform();
            var client = wxutil.newSignedInClient(platform);
            var site = wxutil.newRegisteredSite(platform);
            wechatemitter.bindSite(site);
            var siteClient = client.subscribeSite(site.getId(), openid);

            siteClient.sendText({
                Content: '账户邀请二维码'
            });

            setTimeout(function(){
                done();
            }, 4000);
        });
    });
});

