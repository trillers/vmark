var assert = require('chai').assert;
var wxutil = require('../../../../framework/wechat/util');
var Wechat = require('../../../../../src/framework/wechat/index');
var OrgMemberRole = require('../../../../../src/modules/common/models/TypeRegistry').item('OrgMemberRole');
var wechatemitter =  require('../../../../../src/modules/system/wechatsite/wechatemitter');

var contextLoader = require('../../../../../src/context');
var context = contextLoader.context;
var logger = context.logger;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});

describe('platform operation handler', function() {
    var openid = 'okvXqs4vtB5JDwtb8Gd6Rj26W6mE';//独自等待的错题本openid
    before(function(done){
        var platformUserService = context.services.platformUserService;
        platformUserService.createPlatformUser(openid, function(err, user){
            logger.debug(user);
            assert.ok(user);
            var tenantService = context.services.tenantService;
            tenantService.registerPersonalTenant(openid, function(err, user){
                assert.ok(user);
                assert(user.posts[0].role, OrgMemberRole.TenantAdmin.value());
                done();
            });
        });
    });
    it('success send tenant registry qr code', function (done) {
        var platform = new Wechat.Platform();
        var client = wxutil.newSignedInClient(platform);
        var site = wxutil.newRegisteredSite(platform);
        wechatemitter.bindSite(site);
        var siteClient = client.subscribeSite(site.getId(), openid);

        site.on('text', function(message){
            console.log('=== text message ===');
            console.log(message);
            console.log('\r\n');
        });

        siteClient.sendText({
            Content: '绑定微信号二维码'
        });

        siteClient.sendText({
            Content: '状态'
        });

        setTimeout(function(){
            done();
        }, 4000);
    })
})