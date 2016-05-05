var contextLoader = require('../../../../src/context');
var context = contextLoader.context;
var assert = require('chai').assert;
var co = require('co');
var apiCache = null;

before(function(done){
    contextLoader.check(function(){
        setTimeout(function(){
            var tenantWechatSite = {
                org: '111',
                appId: 'wxa51b0be8694ba7b5',
                appSecret: '23c92d23482f991426894c40dcf07452',
                token: 'trillers',
                encodingAESKey: '9zYRktc6N1WPyqH6hXq38tJC2CVDaLjHIkxRpihzmx3',
                originalId: 'gh_efb5d7c9539e',
                name: '错题本测试号',
                wechatSiteType: 'oa'
            };
            context.services.tenantWechatSiteService.createTenantWechatSite(tenantWechatSite, function(err, doc){
                apiCache = require('../../../../src/modules/tenant/wechat/api-cache');
                done();
            });
        }, 2000);


    });
});

describe('wechatApiCache', function(){
    it('get available cache', function(done){
        co(function*(){
            var openid = 'oqSpUuHK2Vj9DaL93eYqzLo4e6Ow'; //独自等待的错题本测试号openid
            var wechatApi = yield apiCache.get('gh_efb5d7c9539e');
            yield wechatApi.api.sendTextAsync(openid, 'hello world');
            done();
        }).catch(function(e){
            console.error(e.stack);
        })
    });
    it('get repeat, will obtain same obj', function(done){
        co(function*(){
            var cache1 = yield apiCache.get('gh_efb5d7c9539e');
            var cache2 = yield apiCache.get('gh_efb5d7c9539e');
            assert.ok(cache1 === cache2);
            done();
        })
    });
});