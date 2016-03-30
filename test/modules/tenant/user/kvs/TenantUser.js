var contextLoader = require('../../../../../src/context');
var context = contextLoader.context;
var assert = require('chai').assert;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});

describe('TenantUser kvs', function(){
    var user = {
        _id: 'id123'
        , id: 'id123'
        , wechatId: 'w123'
        , openid:       'xxx'
        , nickname:     '包三哥'
        , headimgurl:   '222'
        , sex:          1

        , country: 'zh'
        , province: 'tj'
        , city: 'xx'
        , district: 'dd'
        , at: 'at123'
        , ot: 'ot123'
    };

    describe('save tenant user', function(){
        it('success save tenant user', function(done){
            var kv = context.kvs.tenantUser;
            kv.saveById(user.wechatId, user.id, user, function(err, result){
                context.logger.debug(result);
                assert.ok(!err);
                done();
            });
        });
    });

    describe('load tenant user', function(){
        it('success load tenant user', function(done){
            var kv = context.kvs.tenantUser;
            kv.loadById(user.wechatId, user.id, function(err, result){
                context.logger.debug(result);
                assert.ok(!err);
                assert.equal(user.id, result.id);
                done();
            });
        });
    });

    describe('delete tenant user', function(){
        it('success delete tenant user', function(done){
            var kv = context.kvs.tenantUser;
            kv.deleteById(user.wechatId, user.id, function(err, result){
                context.logger.debug(result);
                assert.ok(!err);
                assert.equal(result, 1);
                done();
            });
        });
    });

    describe('link tenant user openid to id', function(){
        it('success link tenant user openid to id', function(done){
            var kv = context.kvs.teOpenidToId;
            kv.set(user.wechatId, user.openid, user.id, function(err, result){
                context.logger.debug(result);
                assert.ok(!err);
                done();
            });
        });
    });

    describe('get tenant user id by openid', function(){
        it('success get tenant user id by openid', function(done){
            var kv = context.kvs.teOpenidToId;
            kv.get(user.wechatId, user.openid, function(err, result){
                context.logger.debug(result);
                assert.ok(!err);
                assert.equal(result, user.id);
                done();
            });
        });
    });

    describe('unLink tenant user openid to id', function(){
        it('success unLink tenant user openid to id', function(done){
            var kv = context.kvs.teOpenidToId;
            kv.delete(user.wechatId, user.openid, function(err, result){
                context.logger.debug(result);
                assert.ok(!err);
                assert.equal(result, 1);
                done();
            });
        });
    });

    describe('link tenant user agent token to openid', function(){
        it('success link tenant user agent token to openid', function(done){
            var kv = context.kvs.teAtToOpenid;
            kv.set(user.wechatId, user.at, user.openid, function(err, result){
                context.logger.debug(result);
                assert.ok(!err);
                done();
            });
        });
    });

    describe('get tenant user openid by agent token', function(){
        it('success get tenant user openid by agent token', function(done){
            var kv = context.kvs.teAtToOpenid;
            kv.get(user.wechatId, user.at, function(err, result){
                context.logger.debug(result);
                assert.ok(!err);
                assert.equal(result, user.openid);
                done();
            });
        });
    });

    describe('unLink tenant user agent token to openid', function(){
        it('success unLink tenant user agent token to openid', function(done){
            var kv = context.kvs.teAtToOpenid;
            kv.delete(user.wechatId, user.at, function(err, result){
                context.logger.debug(result);
                assert.ok(!err);
                assert.equal(result, 1);
                done();
            });
        });
    });

    describe('link tenant user open token to openid', function(){
        it('success link tenant user open token to openid', function(done){
            var kv = context.kvs.teOtToOpenid;
            kv.set(user.wechatId, user.ot, user.openid, function(err, result){
                context.logger.debug(result);
                assert.ok(!err);
                done();
            });
        });
    });

    describe('get tenant user openid by open token', function(){
        it('success get tenant user openid by open token', function(done){
            var kv = context.kvs.teOtToOpenid;
            kv.get(user.wechatId, user.ot, function(err, result){
                context.logger.debug(result);
                assert.ok(!err);
                assert.equal(result, user.openid);
                done();
            });
        });
    });

    describe('unLink tenant user open token to openid', function(){
        it('success unLink tenant user open token to openid', function(done){
            var kv = context.kvs.teOtToOpenid;
            kv.delete(user.wechatId, user.ot, function(err, result){
                context.logger.debug(result);
                assert.ok(!err);
                assert.equal(result, 1);
                done();
            });
        });
    });
});