var assert = require('chai').assert;
var contextLoader = require('../../../../../src/context');
var context = contextLoader.context;
var logger = context.logger;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});

describe('TenantUserService', function(){
    //var openid = 'okvXqs_VftHruzwFV9rx4Pbd_fno'; //小小星星妹
    var openid = 'oqSpUuDlnKxHxwZa4xylKuyxaXNM'; //包三哥
    describe.only('ensureTenantUser', function(){
        it('Succeed to ensure a tenant user created', function(done){
            var service = context.services.tenantUserService;
            service.ensureTenantUser(openid, function(err, user){
                logger.debug(user);
                assert.ok(user);
                done();
            });
        });
    });

    describe('createTenantUser', function(){
        it('Succeed to create a tenant user', function(done){
            var service = context.services.tenantUserService;
            service.createTenantUser(openid, function(err, user){
                logger.debug(user);
                assert.ok(user);
                done();
            });
        });
    });
    describe('loadTenantUserByOpenid', function(){
        it('Succeed to load a tenant user', function(done){
            var service = context.services.tenantUserService;
            service.loadTenantUserByOpenid(openid, function(err, user){
                logger.debug(user);
                assert.equal(user.openid, openid);
                assert.equal(user.nickname, '包三哥');
                done();
            });
        });
    });

    describe('deleteTenantUserByOpenid', function(){
        it('Succeed to delete a tenant user', function(done){
            var service = context.services.tenantUserService;
            service.deleteTenantUserByOpenid(openid, function(err){
                assert.notOk(err);
                done();
            });
        });
    });

    var userId = null;
    describe('create', function(){
        it('Succeed to create a user', function(done){
            var service = context.services.tenantUserService;
            var user = {
                openid: openid
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
            var service = context.services.tenantUserService;
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
            var service = context.services.tenantUserService;
            service.deleteById(userId, function(err){
                assert.notOk(err);
                done();
            });
        });
    });

});