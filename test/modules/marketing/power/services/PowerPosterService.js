var assert = require('chai').assert;
var co = require('co');
var contextLoader = require('../../../../../src/context');
var context = contextLoader.context;
var wechatApiCache = require('../../../../../src/modules/tenant/wechat/api-cache');

before(function(done){
    contextLoader.check(function(){
        done();
    });
});


describe('Power poster service', function(){
    var wechatSite = {};
    var openid = 'oalYKs73YP_eknJDGUmKdLCjitbM'; //独自等待的测试号openid
    var user = {};
    var originalId = 'gh_74570a11f763';//独自等待测试号

    var wechatApi = null;
    before(function(done){
        co(function*(){
            var tenantWechatSiteService = context.services.tenantWechatSiteService;
            var tenantUserService = context.services.tenantUserService;
            wechatSite = yield tenantWechatSiteService
                .loadTenantWechatSiteByOriginalIdAsync(originalId);
            if(!wechatSite){
                var wechatSiteData = {
                    org: 'org1'
                    , type: 'ws'
                    , originalId: 'gh_74570a11f763'
                    , name: '独自等待测试号'
                    , appId: 'wxe6127a840e1c8c9f'
                    , appSecret: 'd4624c36b6795d1d99dcf0547af5443d'
                    , wechatSiteType: 'voa'
                    , token: 'nFMXmXa0CDtWefLOF6LZ'
                }
                wechatSite = yield tenantWechatSiteService.createTenantWechatSiteAsync(wechatSiteData);
            }
            wechatApi = (yield wechatApiCache.get(originalId)).api;
            user = yield tenantUserService.ensureTenantUserAsync(wechatSite.originalId, openid);
            console.info(user);
            done();
        }).catch(function(e){
            console.error(e);
        })
    });

    describe('create poster', function(){
        describe('create activity post', function(){
            it('succeed to create activity post', function(done){
                co(function*(){
                    try{
                        var service = context.services.powerPosterService;
                        var acJson = {
                            activity: 'ddd',
                            user: user.id,
                            type: 'ac',
                            wechatId: originalId,
                            posterBgImg: 'http://up.qqjia.com/z/19/tu22346_2.jpg'
                        }
                        var data = yield service.create(acJson)
                        console.info(data);
                        var wechatApi = (yield wechatApiCache.get(originalId)).api;
                        yield wechatApi.sendImageAsync(openid, data.mediaId);
                        setTimeout(function(){done()}, 2000);
                    }
                    catch(e){
                        console.error(e);
                        done();
                    }
                })
            });

        })

        describe('create participant post', function(){
            it('succeed to create participant post', function(done){
                co(function*(){
                    try{
                        var service = context.services.powerPosterService;
                        var paJson = {
                            activity: 'ddd',
                            participant: 'ppp',
                            user: user.id,
                            wechatId: originalId,
                            type: 'pa',
                            posterBgImg: 'http://up.qqjia.com/z/19/tu22346_2.jpg'
                        }
                        var data = yield service.create(paJson);
                        var wechatApi = (yield wechatApiCache.get(originalId)).api;
                        yield wechatApi.sendImageAsync(openid, data.mediaId);
                        console.info(data);
                        setTimeout(function(){done()}, 2000);
                    }
                    catch(e){
                        console.error(e);
                        done();
                    }
                })
            });

        })

    });

});
