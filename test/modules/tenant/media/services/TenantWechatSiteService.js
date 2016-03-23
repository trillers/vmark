var assert = require('chai').assert;
var contextLoader = require('../../../../../src/context');
var WechatMediaType = require('../../../../../src/modules/common/models/TypeRegistry').item('WechatMediaType');
var context = contextLoader.context;
var logger = context.logger;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});

describe('TenantWechatSiteService', function(){
    describe('create tenant wechat site', function(){
        it('Succeed to create tenant wechat site', function(done){
            var service = context.services.tenantWechatSiteService;
            var wechatSite = {
                org: 'org1'
                , type: WechatMediaType.WechatSite.value()
                , originalId: 'gh_45site'
                , name: '跟谁学'
                , qrcodeurl:  'url'
                , appId: 'abc'
                , appSecret: 'abc'
            };
            service.createTenantWechatSite(wechatSite, function(err, result){
                logger.debug(result);
                assert.equal(result.type, WechatMediaType.WechatSite.value());
                done();
            });
        });
    });

    describe('load tenant wechat site by original id', function(){
        it('Succeed to load tenant wechat site by original id', function(done){
            var service = context.services.tenantWechatSiteService;
            var originalId = 'gh_45site';
            service.loadTenantWechatSiteByOriginalId(originalId, function(err, result){
                logger.debug(result);
                assert.equal(result.type, WechatMediaType.WechatSite.value());
                done();
            });
        });
    });
});