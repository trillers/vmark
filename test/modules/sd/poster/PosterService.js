var contextLoader = require('../../../../src/context');
var context = contextLoader.context;
var assert = require('chai').assert;
var typeRegistry = require('../../../../src/modules/common/models/TypeRegistry');
var MembershipType = typeRegistry.item('MembershipType');
var co  = require('co');
var wechatApiCache = require('../../../../src/modules/tenant/wechat/api-cache');

before(function(done){
    contextLoader.check(done);
});
var wechatSite = {};
var openid = 'ozkyAs978ji5BJgJiz6Y6CTM8gSQ'; //独自等待的测试号openid
var user = {};
var originalId = 'gh_8a7c01eaf6ee';//独自等待测试号

var wechatApi = null;
before(function(done){
    co(function*(){
        try{
            var tenantWechatSiteService = context.services.tenantWechatSiteService;
            var tenantUserService = context.services.tenantUserService;
            wechatSite = yield tenantWechatSiteService.loadTenantWechatSiteByOriginalIdAsync(originalId);
            if(!wechatSite){
                var wechatSiteData = {
                    org: 'org1'
                    , type: 'ws'
                    , originalId: 'gh_8a7c01eaf6ee'
                    , name: '独自等待测试号'
                    , appId: 'wxf93b94a5d4c9beb0'
                    , appSecret: '108547cde3d34b636d590185a8345a58'
                    , wechatSiteType: 'voa'
                    , token: 'Lar1phi0x11EfWewANHz'
                }
                wechatSite = yield tenantWechatSiteService.createTenantWechatSiteAsync(wechatSiteData);
            }
            wechatApi = (yield wechatApiCache.get(originalId)).api;
            user = yield tenantUserService.ensureTenantUserAsync(wechatSite.originalId, openid);
            console.info(user);
            done();
        }
        catch (e){
            console.error(e)
        }
    })

})

describe('PosterService', function(){

    it('#fetch', function(done){
        var posterService = context.services.posterService;
        var courseService = context.services.courseService;
        var tenantUserService = context.services.tenantUserService;
        co(function*(){
            try{
                var product = yield courseService.loadByIdAsync('mPAuG');
                var poster = yield posterService.fetchAsync({product: product}, wechatSite.originalId, user);
                console.log(poster);
                assert.ok(poster);
                yield wechatApi.sendImageAsync(openid, poster.mediaId);
                done();
            }catch(e){
                console.error(e)
            }
        })
    });
});