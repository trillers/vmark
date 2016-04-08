"use strict";
var co = require('co');
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
        try{
            var poster = null;
            var wechatApi = yield wechatApiCache.get(wechatId).api;
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
            }

            else if(membership.type !== MembershipType.Distributor.value()){
                let distributor = {
                    upLine: poster.user,
                    type: MembershipType.Distributor.value()
                };
                yield context.services.membershipService.updateByIdAsync(membership._id, distributor);
                yield context.services.membershipService.addDownLineAsync(poster.user, user._id);
            }

            let myPoster = {
                user: user._id,
                product: product._id
            };
            let fetchedPoster = yield fetchPoster(myPoster);
            yield wechatApi.sendImageAsync(fetchedPoster.url);
            console.log('has been distributor already');

        }catch (e){
            context.logger.error('Failed to');
            context.logger.error(e);
        }

        function* fetchPoster(posterMeta){
            var poster = yield context.services.posterService.loadByProductId(posterMeta.product);
            if(poster){
                return poster;
            }
            //poster.url = drawImg();
            return yield context.services.posterService.createAsync(posterMeta);
        }
    })

});

distributorCreateType.onExpire(function(qr, openid, wechatId){});

activityType.onAccess(function(qr, openid, wechatId){
    var logger = context.logger;
    var powerActivityService = context.services.powerActivityService;
    co(function*(){
        try{
            var wechatApi = (yield wechatApiCache.get(wechatId)).api;
            yield tenantUserService.ensureTenantUserAsync(wechatId, openid);
            var res = yield powerActivityService.getActivityPoster(qr, wechatId, openid);
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
            yield powerActivityService.scanActivityPoster(qr, wechatId, openid);
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
            yield powerParticipantService.scanParticipantPoster(qr, wechatId, openid);
        }
        catch(e){
            logger.error(e);
            logger.error('扫描参与者海报参失败,活动海报二维码ID:' + qr._id);
        }


    });
});
participantPosterType.onExpire(function(){});