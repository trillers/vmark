var Ar = require('../../../../../src/framework/allready');
var ar = new Ar();
var assert = require('chai').assert;
var QrTypeRegistry = require('../../../../../src/modules/wechat/wechat-site/qr/QrManager');

describe('qr', function(){
    var registry = null;
    beforeEach(function(done){
        ar.add('redis', ar.redis(require('../../../../../src/app/redis-client')()));
        ar.add('mongoose', ar.mongoose(require('../../../../../src/app/mongoose')));
        ar.ready(function(){
            registry = new QrTypeRegistry();
            var testType = registry.newType('test');
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

    it('create a tmp qr', function(done){
        var testType = registry.getQrType('test');
        testType.createQr(function(err, qr){
            var sceneId = qr.sceneId;
            assert.ok(qr.temp);
            assert.ok(qr.sceneId.toString().length<5);
            assert.ok(qr.ticket);
            assert.ok(qr.type);
            setTimeout(function(){
                done()
            }, 2000);
            //qr.invalidQr(function(err){
            //    if(err){
            //        console.error(err);
            //        done();
            //    }
            //    setTimeout(function(){
            //        done()
            //    }, 2000)
            //})
        });
    });

    it('create a forever qr', function(done){
        registry.createQr({type: 'test'}, function(err, qr){
            registry.handle(qr.sceneId);
            assert.ok(!qr.temp);
            assert.ok(qr.sceneId.toString().length<100);
            assert.ok(qr.ticket);
            assert.ok(qr.type);
            setTimeout(function(){
                done();
            }, 2000)
        });
    });
});