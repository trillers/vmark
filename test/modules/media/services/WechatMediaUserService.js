var assert = require('chai').assert;
var context = require('../../../../src/context').context;
var WechatMediaUserType = require('../../../../src/modules/common/models/TypeRegistry').item('WechatMediaUserType');

before(function(done){
    setTimeout(function () {
        done();
    }, 2000);
})

describe('WechatMediaUserService', function(){
    describe('crud', function(){
        var wechatSiteId = null;
        var wechatSiteUser = null;
        var wechatSiteUserId = null;
        before(function(done){
            var service = context.services.platformWechatSiteService;
            service.ensurePlatformWechatSite(function(err, wechatSite){
                assert.ok(wechatSite);
                wechatSiteId = wechatSite.id;
                done();
            })
        });

        it('create: create a wechat site user', function(done){
            var service = context.services.wechatMediaUserService;
            var wechatSiteUserJson = {
                host: wechatSiteId,
                type: WechatMediaUserType.WechatSiteUser.value(),
                nickname: '包三哥',
                openid: 'xxx'
            };
            service.create(wechatSiteUserJson, function(err, result){
                context.logger.debug(result);
                assert.ok(result);
                wechatSiteUser = result;
                wechatSiteUserId = wechatSiteUser.id;
                done();
            });
        });

        it('loadById: load the created user', function(done){
            var service = context.services.wechatMediaUserService;
            service.loadById(wechatSiteUserId, function(err, doc){
                context.logger.debug(doc);
                assert.notOk(err);
                assert.ok(doc);
                assert.equal(doc._id, wechatSiteUserId);
                assert.equal(doc.host, wechatSiteId);
                assert.equal(doc.nickname, '包三哥');
                done();
            });
        });

        it('updateById: update a wechat site user', function(done){
            var service = context.services.wechatMediaUserService;
            var update = {
                type: WechatMediaUserType.WechatSiteUser.value(),
                nickname: '包三哥-updated'
            };
            service.updateById(wechatSiteUserId, update, function(err, result){
                context.logger.debug(result);
                assert.ok(result);
                assert.equal(result.nickname, update.nickname);
                done();
            });
        });

        it('deleteById: delete a wechat site user', function(done){
            var service = context.services.wechatMediaUserService;
            service.deleteById(wechatSiteUser, function(err){
                assert.notOk(err);
                done();
            });
        });

        it('loadById: load null', function(done){
            var service = context.services.wechatMediaUserService;
            service.loadById(wechatSiteUserId, function(err, doc){
                assert.notOk(err);
                assert.notOk(doc);
                done();
            });
        });

    });
});