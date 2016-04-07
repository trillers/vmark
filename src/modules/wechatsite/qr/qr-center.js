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
        var membership = yield context.services.membershipSerivce.findAsync({wechatId: wechatId, openid: openid});

        if(!membership){
            var poster = yield context.services.posterService.loadByQrCodeIdAsync(qr._id);
            var product = yield context.services.courseService.loadByIdAsync(poster.product);
            var tenantWechatSite = yield context.services.courseService.loadByIdAsync(wechatId);


            membership = {
                upLine:    {type: String, ref: 'TenantUser'},
                org: tenantWechatSite.host,
                media: tenantWechatSite._id,
                type: MembershipType.Distributor.value()
            };

            //downLine:  [{type: String, ref: 'TennatUser'}],
            yield context.services.membershipSerivce.createAsync(membership);
            return;
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