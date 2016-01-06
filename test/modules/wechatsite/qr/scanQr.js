var assert = require('chai').assert;
var wxutil = require('../../../framework/wechat/util');
var Wechat = require('../../../../src/framework/wechat/index');
var contextLoader = require('../../../../src/context');
var wechatemitter = null;
var QrTypeRegistry = require('../../../../src/modules/wechatsite/qr/QrTypeRegistry');
var qrTypeRegistry = new QrTypeRegistry();

before(function(done){
    contextLoader.check(function(){
        wechatemitter = require('../../../../src/modules/system/wechatsite/wechatemitter');
        done();
    });
});

describe('scanQr', function() {
    var sceneId = null;
    var openid = 'okvXqsw1VG76eVVJrKivWDgps_gA';//包三哥的错题本openid
    before(function(done){
        //create qr
        var loginQrType = qrTypeRegistry.newType('login', {temp:true});
        loginQrType.onAccess(function(qr){
            console.log('qr access successful');
            console.log('qr id is ' + qr._id);
            console.log('do some business...');
        });
        loginQrType.onExpire(function(qr){

        });
        loginQrType.createQr(function(err, qr){
            sceneId = qr.sceneId;
            done();
        });
    });

    it('scan a newly created qrcode to trigger events', function (done) {
        var platform = new Wechat.Platform();
        var client = wxutil.newSignedInClient(platform);
        var site = wxutil.newRegisteredSite(platform);
        wechatemitter.bindSite(site);

        site.on('qrsubscribe', function(message){
            console.log('===subscribe===');
            qrTypeRegistry.handle(message.SceneId);
            console.log('\r\n');
        });
        var api = site.getApi();
        var ticket = '';
        api.createLimitQRCode(sceneId, function(err, result){
            ticket = result.ticket;
        });

        var siteClient = client.scanSite(site.getId(), sceneId, openid);

        setTimeout(function(){
            done();
        }, 4000);
    })
})

