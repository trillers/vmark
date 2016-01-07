var Ar = require('../../../../src/framework/allready');
var ar = new Ar();
var assert = require('chai').assert;
var QrTypeRegistry = require('../../../../src/modules/wechatsite/qr/QrTypeRegistry');

describe('qr', function(){
    var registry = new QrTypeRegistry();
    beforeEach(function(done){
        ar.add('redis', ar.redis(require('../../../../src/app/redis-client')()));
        ar.add('mongoose', ar.mongoose(require('../../../../src/app/mongoose')));
        ar.ready(function(){
            var testType = registry.newType('test', {temp: true});
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
        })
    });

    it('create tmp qr', function(done){
        var testType = registry.getQrType('test');
        testType.createQr(function(err, qr){
            assert.ok(qr.temp);
            assert.ok(qr.sceneId.toString().length>5);
            assert.ok(qr.ticket);
            assert.ok(qr.type);
            setTimeout(function(){
                done()
            }, 2000);
        });
    });

    it('access qr', function(done){
        var testType = registry.getQrType('test');
        testType.createQr(function(err, qr){
            registry.handle(qr.sceneId);
            assert.ok(qr.temp);
            assert.ok(qr.sceneId.toString().length>5);
            assert.ok(qr.ticket);
            assert.ok(qr.type);
            setTimeout(function(){
                done();
            }, 2000)
        });
    });

    it('invalid qr', function(done){
        var testType = registry.getQrType('test');
        testType.createQr(function(err, qr){
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
});