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

before(function(done){
    co(function*(){
        try{

            done();
        }
        catch (e){
            console.error(e)
        }
    })

});

describe('OrderService', function(){

    it('#finishByDistributorIdAndTenantIdAndMediaId', function(done){
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