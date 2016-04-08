var qrTypeRegistry = require('./QrTypeRegistries').tenantQrTypeRegistry;
var context = require('../../../context/context');
var typeRegistry = require('../../common/models/TypeRegistry');
var MembershipType = typeRegistry.item('MembershipType');
var tenantUserService = context.services.tenantUserService;
var wechatApiCache = require('../../tenant/wechat/api-cache');

var distributorCreateType = qrTypeRegistry.newType('distributorCreate');
var activityType =    qrTypeRegistry.newType('ac', {temp: true});
var activityPosterType =    qrTypeRegistry.newType('acp', {temp: true});
var participantPosterType =    qrTypeRegistry.newType('pap', {temp: true});

distributorCreateType.onAccess(function(qr, openid, wechatId){
    co(function*(){
        var poster = null;
        var myPoster = null;
        var wechatApi = yield wechatApiCache.get(wechatId);
        var auth = yield context.services.tenantAuthenticationService.signupOnSubscriptionAsync(wechatId, openid);
        var user = auth.user;
        var media = yield context.services.tenantWechatSiteService.loadTenantWechatSiteByOriginalIdAsync(wechatId);
        var tenantUser = yield context.services.tenantUserService.loadByWechatIdAndOpenidAsync(wechatId, openid);
        var memberships = yield context.services.membershipService.findAsync({media: media._id, user: tenantUser._id});
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
            yield context.services.membershipService.createAsync(membership);

            yield context.services.membershipService.addDownLineAsync(poster.user, user._id);

            myPoster = {
                user: user._id,
                product: product._id
            };
            yield createAndSendPoster(myPoster);

        }
        else if(membership.type !== MembershipType.Distributor.value()){
            var distributor = {
                upLine: poster.user,
                org: media.org,
                media: media._id,
                type: MembershipType.Distributor.value()
            };
            yield context.services.membershipService.updateByIdAsync(membership._id, distributor);

            yield context.services.membershipService.addDownLineAsync(poster.user, user._id);

            myPoster = {
                user: user._id,
                product: product._id
            };
            yield createAndSendPoster(myPoster);
        }
        else{
            console.log('has been distributor already');
        }
        function* createAndSendPoster(poster){
            //poster.url = drawImg();
            var persistedPoster = yield context.services.posterService.createAsync(poster);
            yield wechatApi.sendImageAsync(persistedPoster.url);
        }
    })

});

distributorCreateType.onExpire(function(qr, openid, wechatId){});

activityType.onAccess(function(qr, openid, wechatId){
    var logger = context.logger;
    var powerActivityService = context.services.powerActivityService;
    co(function*(){
        try{
            var wechatApi = yield wechatApiCache.get(wechatId);
            yield tenantUserService.ensureTenantUserAsync(wechatId, openid);
            var res = yield powerActivityService.getActivityPoster(qr, openid);
            wechatApi.sendText(openid, res.reply, function (err) {
                if(err) logger.error(err);
            });
            if(res.success) {
                wechatApi.sendImage(openid, res.mediaId, function (err) {
                    if (err) logger.error(err);
                });
            }
        }
        catch(e){
            logger.error(e);
            logger.error('获取活动海报失败,活动二维码ID:' + qr._id);
        }
    });
});
activityType.onExpire(function(){});

activityPosterType.onAccess(function(qr, openid, wechatId){
    var logger = context.logger;
    co(function*(){
        try{
            yield tenantUserService.ensureTenantUserAsync(wechatId, openid);
            var powerActivityService = context.services.powerActivityService;
            yield powerActivityService.scanActivityPoster(qr, openid);
        }
        catch(e){
            logger.error(e);
            logger.error('扫描活动海报参与活动失败,活动海报二维码ID:' + qr._id);
        }
    });
});
activityPosterType.onExpire(function(){});

participantPosterType.onAccess(function(qr, openid, wechatId){
    var logger = context.logger;
    co(function*(){
        try{
            yield tenantUserService.ensureTenantUserAsync(wechatId, openid);
            var powerParticipantService = context.services.powerParticipantService;
            yield powerParticipantService.scanParticipantPoster(qr, openid);
        }
        catch(e){
            logger.error(e);
            logger.error('扫描参与者海报参失败,活动海报二维码ID:' + qr._id);
        }


    });
});
participantPosterType.onExpire(function(){});