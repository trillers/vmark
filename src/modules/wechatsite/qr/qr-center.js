var qrTypeRegistry = require('./QrTypeRegistries').tenantQrTypeRegistry;
var context = require('../../../context/context');
var typeRegistry = require('../../common/models/TypeRegistry');
var MembershipType = typeRegistry.item('MembershipType');
var wechatApiCache = require('../../tenant/wechat/api-cache');

var distributorCreateType = qrTypeRegistry.newType('distributorCreate');

distributorCreateType.onAccess(function(qr, openid, wechatId){
    co(function*(){
        var poster = null;
        var myPoster = null;
        var wechatApi = yield wechatApiCache.get(wechatId);
        var auth = yield context.services.tenantAuthenticationService.signupOnSubscriptionAsync(wechatId, openid);
        var user = auth.user;
        var media = yield context.services.tenantWechatSiteService.loadTenantWechatSiteByOriginalIdAsync(wechatId);
        var tenantUser = yield context.services.tenantUserService.loadByWechatIdAndOpenidAsync(wechatId, openid);
        var memberships = yield context.services.membershipSerivce.findAsync({media: media._id, user: tenantUser._id});
        var membership = memberships && memberships[0] || null;
        var product = yield context.services.courseService.loadByIdAsync(poster.product);

        if(!membership){
            poster = yield context.services.posterService.loadByQrCodeIdAsync(qr._id);

            membership = {
                upLine: poster.user,
                org: media.org,
                media: media._id,
                type: MembershipType.Distributor.value()
            };
            yield context.services.membershipSerivce.createAsync(membership);

            yield context.services.membershipSerivce.addDownLineAsync(poster.user, user._id);

            myPoster = {
                user: user._id,
                product: product._id
            };
            createAndSendPoster(myPoster);

        }
        else if(membership.type !== MembershipType.Distributor.value()){
            var distributor = {
                upLine: poster.user,
                org: media.org,
                media: media._id,
                type: MembershipType.Distributor.value()
            };
            yield context.services.membershipSerivce.updateByIdAsync(membership._id, distributor);

            yield context.services.membershipSerivce.addDownLineAsync(poster.user, user._id);

            myPoster = {
                user: user._id,
                product: product._id
            };
            createAndSendPoster(myPoster);
        }
        else{
            console.log('has been distributor already');
        }
        function createAndSendPoster(poster){

            var persistedPoster = yield context.services.posterService.createAsync(poster);
            yield wechatApi.sendImageAsync(persistedPoster.url);
        }
    })

});

distributorCreateType.onExpire(function(qr, openid, wechatId){});