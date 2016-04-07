var contextLoader = require('../../../../src/context');
var context = contextLoader.context;
var assert = require('assert');

var tenantQrTypeRegistry = require('../../../../src/modules/wechatsite/qr/QrTypeRegistries').tenantQrTypeRegistry;
var platformQrTypeRegistry = require('../../../../src/modules/wechatsite/qr/QrTypeRegistries').platformQrTypeRegistry;

describe('qrTypeRegistryFactory', function(){
    beforeEach(function(done){
        try{
            contextLoader.check(function(){
                console.log('begin test.........');
                var testType = tenantQrTypeRegistry.newType('test', {temp: true});
                var testType2 = platformQrTypeRegistry.newType('test', {temp: true});

                testType2.onAccess(function(qr){
                    console.log("a qr 2 is accessed");
                    console.log(qr);
                    assert.equal(false, qr.isInvalid());
                });
                testType.onAccess(function(qr){
                    console.log("a qr is accessed");
                    console.log(qr);
                    assert.equal(false, qr.isInvalid());
                });
                testType.onExpire(function(qr){
                    console.log('a qr is expired');
                    console.log(qr);
                    assert.ok(qr);
                });
                done();
            });
        }catch (e){
            console.error(e)
        }

    });

    it('create tenant tmp qr', function(done){
        var testType = tenantQrTypeRegistry.getQrType('test');
        testType.createQr({wechatId: '111', temp: false}, function(err, qr){
            tenantQrTypeRegistry.handle(qr.sceneId, null, '111');
            assert.ok(!qr.temp);
            assert.ok(qr.sceneId.toString().length<5);
            assert.ok(qr.ticket);
            assert.ok(qr.type);
            setTimeout(function(){
                done()
            }, 2000);
        });
    });

    it('invalid tenant qr', function(done){
        var testType = tenantQrTypeRegistry.getQrType('test');
        testType.createQr({wechatId: '222'}, function(err, qr){
            assert.ok(qr.temp);
            assert.ok(qr.sceneId.toString().length>5);
            assert.ok(qr.ticket);
            assert.ok(qr.type);
            qr.invalid();
            setTimeout(function(){
                done();
            }, 2000)
        });
    });

    it('platform qr', function(done){
        var testType2 = platformQrTypeRegistry.getQrType('test');
        testType2.createQr(function(err, qr){
            platformQrTypeRegistry.handle(qr.sceneId);
            assert.ok(qr.temp);
            assert.ok(qr.sceneId.toString().length>5);
            assert.ok(qr.ticket);
            assert.ok(qr.type);
            setTimeout(function(){
                done();
            }, 2000)
        });
    });
});