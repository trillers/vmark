var assert = require('chai').assert;
var contextLoader = require('../../../../../src/context');
var context = contextLoader.context;
before(function(done){
    contextLoader.check(function(){
        done();
    });
});

describe('PlatformUser', function(){
    var openid = 'okvXqsw1VG76eVVJrKivWDgps_gA';
    var at = '';
    before(function(done){
        var agentToken = require('../../../../../src/modules/membook/common/agentToken');
        at = agentToken.generate(openid);
        done();
    });

    describe('linkAtToOpenid', function(){
        it('Succeed to link at to openid', function(done){
            var kv = context.kvs.platformUser;
            kv.linkAtToOpenid(at, openid, function(err, result){
                err && console.error(err);
                assert.notOk(err);
                done();
            });
        });
    });

    describe('loadOpenidByAt', function(){
        it('Succeed to load openid by agent token', function(done){
            var kv = context.kvs.platformUser;
            kv.loadOpenidByAt(at, function(err, result){
                err && console.error(err);
                console.log(result);
                assert.equal(result, openid);
                done();
            });
        });
    });

    describe('unlinkAtToOpenid', function(){
        it('Succeed to unlink at to openid', function(done){
            var kv = context.kvs.platformUser;
            kv.unlinkAtToOpenid(at, function(err, result){
                err && console.error(err);
                assert.equal(result, 1);
                done();
            });
        });
    });

});