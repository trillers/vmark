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
                appId: 'wxe6127a840e1c8c9f',
                appSecret: 'd4624c36b6795d1d99dcf0547af5443d',
                token: 'nFMXmXa0CDtWefLOF6LZ',
                encodingAESKey: '9zYRktc6N1WPyqH6hXq38tJC2CVDaLjHIkxRpihzmx3',
                originalId: 'gh_74570a11f763',
                name: '读独自等待测试号',
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
            var openid = 'oalYKs73YP_eknJDGUmKdLCjitbM'; //独自等待的测试号openid
            var wechatApi = yield apiCache.get('gh_74570a11f763');
            var url='http://www.baidu.com'
            yield wechatApi.api.sendTemplateAsync(openid, 'GU7AHX1WQcWpNoGjlhrtHPVG2dwFksDEhr3-uZnOeNc', url, {money: 100});
            done();
        }).catch(function(e){
            console.error(e.stack);
        })
    });
});