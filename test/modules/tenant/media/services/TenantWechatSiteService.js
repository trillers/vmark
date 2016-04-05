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
                org: 'kvsCe'
                , type: WechatMediaType.WechatSite.value()
                , originalId: 'gh_efb5d7c9539e'
                , name: '错题本测试号'
                , qrcodeurl:  'url'
                , appId: 'wxa51b0be8694ba7b5'
                , appSecret: '23c92d23482f991426894c40dcf07452'
                , token: 'trillers'
                , encodingAESKey: '9zYRktc6N1WPyqH6hXq38tJC2CVDaLjHIkxRpihzmx3'
                , wechatSiteType: 'voa'
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
            var originalId = 'gh_efb5d7c9539e';
            service.loadTenantWechatSiteByOriginalId(originalId, function(err, result){
                logger.debug(result);
                assert.equal(result.type, WechatMediaType.WechatSite.value());
                done();
            });
        });
    });
});