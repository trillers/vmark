var contextLoader = require('../../../../../src/context');
var context = contextLoader.context;
var assert = require('chai').assert;
before(function(done){
    contextLoader.check(function(){
        done();
    });
});

describe('TenantUserService', function(){
    var userObj = {};
    describe('create TenantUserService', function(){
        it('create a tenant user', function(done){
            var service = context.services.tenantUserService;
            var mediaUserService = context.services.tenantWechatSiteUserService;
            var mediaUser = {
                host: 'media1'
                , openid:       'xxx'
                , nickname:     '包三哥'
                , headimgurl:   '222'
                , sex:          1

                , country: 'zh'
                , province: 'tj'
                , city: 'xx'
                , district: 'dd'
            };
            var user = {
                wechatId: 'wh1'
                , openid:       'xxx'
                , nickname:     '包三哥'
                , headimgurl:   '222'
                , sex:          1

                , country: 'zh'
                , province: 'tj'
                , city: 'xx'
                , district: 'dd'
            };

            service.create(user, function(err, result){
                context.logger.debug(result);
                assert.ok(!err);
                assert.equal(result.openid, user.openid);
                userObj = result;
                mediaUser.user = userObj.id;
                mediaUserService.createTenantWechatSiteUser(user.wechatId, mediaUser, function(err, res){
                    context.logger.debug(result);
                    assert.ok(!err);
                    assert.equal(res.openid, mediaUser.openid);
                    done();
                })
            });
        });
    });
    describe('update TenantUserService', function(){
        it('success update a tenant user', function(done){
            var service = context.services.tenantUserService;

            service.update({_id: userObj._id}, {nickname: 'allen'}, function(err, result){
                context.logger.debug(result);
                assert.ok(!err);
                assert.equal(result.nickname, 'allen');
                userObj = result;
                done();
            });
        });
    });
    describe('loadByWechatIdAndId', function(){
        it('success load tenant user by wechatId and id', function(done){
            var service = context.services.tenantUserService;

            service.loadByWechatIdAndId(userObj.wechatId, userObj.id, function(err, result){
                context.logger.debug(result);
                assert.ok(!err);
                assert.equal(result.nickname, userObj.nickname);
                done();
            });
        });
    });
    describe('loadUserByWechatIdAndOpenid', function(){
        it('success load tenant user by wechaid and openid', function(done){
            var service = context.services.tenantUserService;

            service.loadUserByWechatIdAndOpenid(userObj.wechatId, userObj.openid, function(err, result){
                context.logger.debug(result);
                assert.ok(!err);
                assert.equal(result.nickname, userObj.nickname);
                done();
            });
        });
    });

    describe('deleteUserByWechatIdAndOpenid', function(){
        it('success delete tenant user by wechaid and openid', function(done){
            var service = context.services.tenantUserService;

            service.deleteUserByWechatIdAndOpenid(userObj.wechatId, userObj.openid, function(err, result){
                context.logger.debug(result);
                assert.ok(!err);
                done();
            });
        });
    });

});