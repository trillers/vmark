"use strict";
var co = require('co');
var qrTypeRegistry = require('./QrTypeRegistries').tenantQrTypeRegistry;
var context = require('../../../context/context');
var typeRegistry = require('../../common/models/TypeRegistry');
var MembershipType = typeRegistry.item('MembershipType');
var settings = require('@private/vmark-settings');
var wechatApiCache = require('../../tenant/wechat/api-cache');
var path = require('path');

var sdParticipantPosterType = qrTypeRegistry.newType('sdpp');
var sdProductType = qrTypeRegistry.newType('sdp');
var activityType =    qrTypeRegistry.newType('ac', {temp: true});
var activityPosterType =    qrTypeRegistry.newType('acp', {temp: true});
var participantPosterType =    qrTypeRegistry.newType('pap', {temp: true});

sdProductType.onAccess(function(qr, openid, wechatId){
    co(function*(){
        try {
            var wechatApi = (yield wechatApiCache.get(wechatId)).api;
            var auth = yield context.services.tenantAuthenticationService.signupOnSubscriptionAsync(wechatId, openid);
            var user = auth.user;
            var media = yield context.services.tenantWechatSiteService.loadTenantWechatSiteByOriginalIdAsync(wechatId);
            var memberships = yield context.services.membershipService.findAsync({conditions:{media: media._id, user: user._id}});
            var membership = memberships && memberships[0] || null;
            var product = yield context.services.courseService.loadByQrCodeIdAsync(qr._id);
            var responseText = '';

            if(!membership){
                membership = {
                    org: media.org,
                    media: media._id,
                    type: MembershipType.Distributor.value(),
                    user: user._id
                };
                yield context.services.membershipService.createAsync(membership);
                responseText = '恭喜您成为经纪人,分享图片到朋友圈,获取丰厚回报';
            }

            else if(membership.type !== MembershipType.Distributor.value()){
                let distributor = {
                    type: MembershipType.Distributor.value()
                };

                yield context.services.membershipService.updateByIdAsync(membership._id, distributor);
                responseText = '恭喜您成为经纪人,分享图片到朋友圈,获取丰厚回报';
            }

            else{
                responseText = '您已经成为分销商';
            }

            let myPoster = {
                product: product
            };
            var fetchedPoster = yield context.services.posterService.fetchAsync(myPoster, wechatId, user);
            yield wechatApi.sendImageAsync(user.openid, fetchedPoster.mediaId);
            yield wechatApi.sendTextAsync(user.openid, responseText);
            let newsImg = null;
            if(product.banners){
                newsImg = product.banners[0];
            }
            var picUrl = settings.api.url + '/file?media_id=' + newsImg;

            let articles = [{
                picurl: picUrl,
                description: product.slogan,
                title: product.name,
                url: 'http://' + path.join(settings.app.domain, '/sd/' + wechatId + '/product?id=' + product._id + '&media=' + media._id)
            }];
            yield wechatApi.sendNewsAsync(user.openid, articles);
        }catch (e){
            console.error(e.message);
            console.error(e.stack);
        }
    })
});

sdParticipantPosterType.onAccess(function(qr, openid, wechatId){
    co(function*(){
        try{
            var wechatApi = (yield wechatApiCache.get(wechatId)).api;
            var auth = yield context.services.tenantAuthenticationService.signupOnSubscriptionAsync(wechatId, openid);
            var user = auth.user;
            var media = yield context.services.tenantWechatSiteService.loadTenantWechatSiteByOriginalIdAsync(wechatId);
            var memberships = yield context.services.membershipService.findAsync({conditions:{media: media._id, user: user._id}});
            var membership = memberships && memberships[0] || null;
            var poster = yield context.services.posterService.loadByQrCodeIdAsync(qr._id);
            var product = yield context.services.courseService.loadByIdAsync(poster.product);
            var responseText = null;

            if(!membership){
                membership = {
                    org: media.org,
                    media: media._id,
                    type: MembershipType.Distributor.value(),
                    user: user._id
                };
                let upLineMembership = null;
                if(poster && poster.user && poster.user != user._id){
                    upLineMembership = yield context.services.membershipService.loadByUserIdAndWechatIdAsync(poster.user, wechatId);
                    membership['upLine'] = upLineMembership._id;
                }
                let membershipPersisted = yield context.services.membershipService.createAsync(membership);
                if(membership['upLine']){
                    yield context.services.membershipService.addDownLineAsync(upLineMembership._id, membershipPersisted._id);
                }
                responseText = '恭喜您成为经纪人,分享图片到朋友圈,获取丰厚回报';
            }

            else if(membership.type !== MembershipType.Distributor.value()){
                let distributor = {
                    type: MembershipType.Distributor.value()
                };
                poster && poster.user && poster.user != user._id && (distributor['upLine'] = poster.user);

                yield context.services.membershipService.updateByIdAsync(membership._id, distributor);
                if(distributor['upLine']){
                    yield context.services.membershipService.addDownLineAsync(poster.user, membership._id);
                }
                responseText = '恭喜您成为经纪人,分享图片到朋友圈,获取丰厚回报';
            }

            else{
                responseText = '您已经成为分销商';
            }

            let myPoster = {
                product: product
            };
            let fetchedPoster = yield context.services.posterService.fetchAsync(myPoster, wechatId, user);
            yield wechatApi.sendImageAsync(user.openid, fetchedPoster.mediaId);
            yield wechatApi.sendTextAsync(user.openid, responseText);

            let newsImg = null;
            if(product.banners){
                newsImg = product.banners[0];
            }
            var picUrl = settings.api.url + '/file?media_id=' + newsImg;

            let articles = [{
                picurl: picUrl,
                description: product.slogan,
                title: product.name,
                url: 'http://' + path.join(settings.app.domain, '/sd/' + wechatId + '/product?id=' + product._id + '&media=' + media._id)
            }];
            yield wechatApi.sendNewsAsync(user.openid, articles);

        }catch (e){
            context.logger.error('Failed to');
            context.logger.error(e);
        }
    })
});

sdParticipantPosterType.onExpire(function(qr, openid, wechatId){});

activityType.onAccess(function(qr, openid, wechatId){
    var logger = context.logger;
    var tenantUserService = context.services.tenantUserService;
    var powerActivityService = context.services.powerActivityService;
    co(function*(){
        try{
            var wechatApi = (yield wechatApiCache.get(wechatId)).api;
            var auth = yield context.services.tenantAuthenticationService.signupOnSubscriptionAsync(wechatId, openid);
            var user = auth.user;
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
            var auth = yield context.services.tenantAuthenticationService.signupOnSubscriptionAsync(wechatId, openid);
            var user = auth.user;
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
            var auth = yield context.services.tenantAuthenticationService.signupOnSubscriptionAsync(wechatId, openid);
            var user = auth.user;
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