var assert = require('chai').assert;
var context = require('../../../../../src/context').context;
var botId = 'testbot';
var operator = 'op';

describe('tenant org kvs test', function(){
    it('success set value', function(done){
        var kv = context.kvs.TenantWechatBot;
        kv.setOperatorOpenid(botId, operator, function(err, data){
            assert.ok(!err);
            assert.equal(operator, data);
            done();
        })
    })

    it('success get value', function(done){
        var kv = context.kvs.TenantWechatBot;
        kv.getOperatorOpenid(botId, function(err, data){
            assert.ok(!err);
            assert.equal(operator, data);
            done();
        })
    })
})
