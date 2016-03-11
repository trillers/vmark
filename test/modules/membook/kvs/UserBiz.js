var assert = require('chai').assert;
var contextLoader = require('../../../../src/context');
var context = contextLoader.context;
before(function(done){
    contextLoader.check(function(){
        console.warn('done');
        done();
    });
});

describe('UserBiz', function(){
    var userid = '001';
    describe('saveById', function(){
        it('Succeed to save user biz by id', function(done){
            var kv = context.kvs.userBiz;
            var biz = {
                latest: '001'
            };
            kv.saveById(userid, biz, function(err, data){
                assert.ok(!err);
                console.info(data);
                done();
            })
        });
    });

    describe('loadById', function(){
        it('Succeed to load user biz by id', function(done){
            var kv = context.kvs.userBiz;
            kv.loadById(userid, function(err, data){
                assert.ok(!err);
                console.info(data);
                done();
            })
        });
    });

    describe('deleteById', function(){
        it('Succeed to delete user biz by id', function(done){
            var kv = context.kvs.userBiz;
            kv.deleteById(userid, function(err, data){
                assert.ok(!err);
                console.info(data);
                done();
            })
        });
    });
});