var assert = require('chai').assert;
var context = require('../../../../../src');
var logger = context.logger;

before(function(done){
    setTimeout(function () {
        done();
    }, 2000);
});
describe('PlatformUserService', function(){
    describe('loadPlatformUserByOpenid', function(){
        it('Succeed to load a platform user', function(done){
            var service = context.services.platformUserService;
            var openid = 'okvXqsw1VG76eVVJrKivWDgps_gA';
            service.loadPlatformUserByOpenid(openid, function(err, user){
                logger.debug(user);
                assert.equal(user.openid, openid);
                done();
            });
        });

    });
    describe('createPlatformUser', function(){
        it('Succeed to create a platform user', function(done){
            var service = context.services.platformUserService;
            var openid = 'okvXqs_VftHruzwFV9rx4Pbd_fno';
            service.createPlatformUser(openid, function(err, user){
                logger.debug(user);
                done();
            });
        });
    });

    describe('create', function(){
        it('Succeed to create a user', function(done){
            var service = context.services.platformUserService;
            var openid = 'okvXqsw1VG76eVVJrKivWDgps_gA';
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
                logger.debug(user);
                done();
            });
        });

    });

});