var assert = require('chai').assert;
var contextLoader = require('../../../../../src/context');
var context = contextLoader.context;
var logger = context.logger;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});

describe('PlatformUserService', function(){
    //var openid = 'okvXqs_VftHruzwFV9rx4Pbd_fno'; //小小星星妹
    var openid = 'okvXqsw1VG76eVVJrKivWDgps_gA';
    describe('createPlatformUser', function(){
        it('Succeed to create a platform user', function(done){
            var service = context.services.platformUserService;
            service.createPlatformUser(openid, function(err, user){
                logger.debug(user);
                assert.ok(user);
                done();
            });
        });
    });
    describe('loadPlatformUserByOpenid', function(){
        it('Succeed to load a platform user', function(done){
            var service = context.services.platformUserService;
            service.loadPlatformUserByOpenid(openid, function(err, user){
                logger.debug(user);
                assert.equal(user.openid, openid);
                assert.equal(user.nickname, '包三哥');
                done();
            });
        });
    });

    describe('deletePlatformUserByOpenid', function(){
        it('Succeed to delete a platform user', function(done){
            var service = context.services.platformUserService;
            service.deletePlatformUserByOpenid(openid, function(err){
                assert.notOk(err);
                done();
            });
        });
    });

    var userId = null;
    describe('create', function(){
        it('Succeed to create a user', function(done){
            var service = context.services.platformUserService;
            var user = {
                posts: [{org: '001', member: '001', role: 'to'}]
                , openid: openid
                , nickname: '包三哥'
                , headimgurl: 'https://www.baidu.com'
                , sex: 1

                , country: '中国'
                , province: '北京'
                , city: '北京'
                , district: '海淀'
            };

            service.create(user, function(err, user){
                userId = user.id;
                logger.debug(user);
                done();
            });
        });
    });

    describe('update', function(){
        it('Succeed to update a user', function(done){
            var service = context.services.platformUserService;
            service.update({_id: userId}, {nickname: '包三哥-updated'}, function(err, user){
                logger.debug(user);
                assert.equal(user.openid, openid);
                assert.equal(user.nickname, '包三哥-updated');
                done();
            });
        });
    });

    describe('deleteById', function(){
        it('Succeed to delete a user', function(done){
            var service = context.services.platformUserService;
            service.deleteById(userId, function(err){
                assert.notOk(err);
                done();
            });
        });
    });

});