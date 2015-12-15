var Ar = require('../../src/framework/allready');
var ar = null;
var assert = require('chai').assert;
//var redisClient = ;
var mongooseClient = require('../../src/app/mongoose');

var redisUtil = null;
var mongooseUtil = null;
var amqpUtil = null;

var rabbitmq = require('base-settings').rabbitmq;
var url = 'amqp://' +rabbitmq.username + ':' + rabbitmq.password + '@' + rabbitmq.host + ':' + rabbitmq.port + '/' + rabbitmq.vhost;
var open = require('amqplib').connect(url);

describe('all ready', function(){
    beforeEach(function(done){
        ar = new Ar();
        redisUtil = ar.redis;
        mongooseUtil = ar.mongoose;
        amqpUtil = ar.amqp;
        done();
    });

    it('specific util', function(done){
        ar.add('redis', ar.redis(require('../../src/app/redis-client')()));
        ar.add('mongoose', ar.mongoose(mongooseClient));
        ar.add('amqp', ar.amqp(open));
        ar.ready(function(){
            assert.equal(ar.getReadyCount(), 3);
            done();
        });
    });

    it('custom service', function(done){
        ar.add('test', null, function onUp(){
            ar.up('test');
        }, function onDown(){
            setTimeout(function(){
                ar.down('test');
            }, 2000)
        });
        ar.ready(function(){
            assert.equal(ar.getReadyCount(), 1);
        }).disconnect(function(id){
            assert.equal(id, 'test');
            done();
        })
    });
});