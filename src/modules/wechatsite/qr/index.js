var co = require('co');
var QrTypeRegistry = require('./QrTypeRegistry');
var qrRegistry = new QrTypeRegistry();
var context = require('../../../context/context');
var wsConns = require('../../../app/wsConns');
var tenantService = context.services.tenantService;
var platformUserService = context.services.platformUserService;
var bindBotResults = tenantService.bindBotResults;
var securityService = context.services.securityService;
var authResults = securityService.authResults;
var wechatApi = require('../../wechat/common/api').api;
var defaultType =     qrRegistry.getQrType('default');
var tenantAdminType = qrRegistry.newType('ta', {temp: true});
var tenantBotType =   qrRegistry.newType('tb', {temp: true});
var loginType =       qrRegistry.newType('lg', {temp: true});
var activityType =    qrRegistry.newType('ac', {temp: true});
var activityPosterType =    qrRegistry.newType('acp', {temp: true});
var participantPosterType =    qrRegistry.newType('pap', {temp: true});

var recontentTenantType = qrRegistry.newType('rec-ta', {temp: true}); //创建文章采集租户

recontentTenantType.onAccess(function(qr, openid){
    co(function*(){
        try{
            var reply = '[系统]: 广告个人账户注册成功！';
            yield tenantService.registerPersonalRecontentTenantAsync(openid);
            wechatApi.sendText(openid, reply, function (err) {
                if(err) console.error(err);
            });
            qr.invalid();
        }
        catch(e){
            console.error(e);
        }
    });
});
recontentTenantType.onExpire(function(){});

tenantAdminType.onAccess(function(qr, openid){
    co(function*(){
        try{
            var reply = '';
            console.log('qr handler: register a personal tenant');
            reply = '[系统]: 个人账户注册成功！';
            yield tenantService.registerPersonalTenantAsync(openid);
            wechatApi.sendText(openid, reply, function (err) {
                if(err) console.error(err);
            });
            qr.invalid();
        }
        catch(e){
            console.error(e);
        }
    });
});
tenantAdminType.onExpire(function(){

});

tenantBotType.onAccess(function(qr, openid){
    co(function*(){
        try{
            var reply = '';
            console.info('qr handler: bind a personal bot');
            console.error('**************');
            console.error(qr);
            console.error(openid);
            var result = '';
            if(qr.data === openid){
                result = yield tenantService.bindMyPersonalBotAsync(qr.data);
            }else{
                result = yield tenantService.bindPersonalBotAsync(qr.data, openid);
            }
            console.error(result);
            if(result.result == bindBotResults.NO_OPERATOR){
                reply = '[系统]: 微信号绑定失败：没有可绑定的管理员用户！';
            }
            else if(result.result == bindBotResults.NOT_ADMIN){
                reply = '[系统]: 微信号绑定失败：请绑定到管理员用户上！';
            }
            //else if(result.result == bindBotResults.OTHER_ROLE){
            //    reply = '[系统]: 微信号绑定失败：待绑定微信号已经有其他身份！';
            //}
            else if(result.result == bindBotResults.BOUND){
                reply = '[系统]: 微信号绑定失败：待绑定微信号已经绑定过！';
            }
            else{
                reply = '[系统]: 微信号绑定成功！';
            }
            wechatApi.sendText(openid, reply, function (err) {
                if(err) console.error(err);
            });
        }catch(e){
            console.error(e)
        }

    });
});
tenantBotType.onExpire(function(qr, openid){

});

loginType.onAccess(function(qr, openid){
    co(function*(){
        try{
            console.log("***************")
            console.log(qr);
            console.log(qr.sceneId);
            console.log(wsConns);
            var sceneId = qr.sceneId;
            var conn = wsConns[sceneId];
            if(conn){
                var result = {};
                var reply = {};
                console.error(securityService.authenticate);
                var auth = yield securityService.authenticateAsync(openid);
                console.info(auth);
                if(!auth){
                    result.auth = 'failed';
                    result.msg = '登陆失败';
                    conn.write(JSON.stringify(result));
                    reply = '[系统]: 登陆后台系统失败！';
                }
                else if(auth.result != authResults.OK && auth.result != authResults.NO_BOUND_BOT){
                    result.auth = 'failed';
                    result.msg = '登陆失败';
                    conn.write(JSON.stringify(result));
                    reply = '[系统]: 登陆后台系统失败！';
                }else{
                    result.auth = 'success';
                    result.msg = '登陆成功';
                    result.openid = auth.user.openid;
                    result.sceneId = sceneId;
                    conn.write(JSON.stringify(result));
                    reply = '[系统]: 登陆后台系统成功！';
                }
            }else{
                reply = '[系统]: 登陆后台系统失败！';
            }
            wechatApi.sendText(openid, reply, function (err) {
                if(err) console.error(err);
            });
        }catch(e){
            console.error(e);
        }
    });
});
loginType.onExpire(function(){
    console.warn('Login qr code is expired!');
});

defaultType.onAccess(function(qr, openid){
    var reply = '[系统]: 该二维码已失效';
    wechatApi.sendText(openid, reply, function (err) {
        console.log(err);
        //TODO
    });
});

activityType.onAccess(function(qr, openid){
    var logger = context.logger;
    var powerActivityService = context.services.powerActivityService;
    co(function*(){
        try{
            yield platformUserService.ensurePlatformUserAsync(openid);
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

activityPosterType.onAccess(function(qr, openid){
    var logger = context.logger;
    co(function*(){
        try{
            yield platformUserService.ensurePlatformUserAsync(openid);
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

participantPosterType.onAccess(function(qr, openid){
    var logger = context.logger;
    co(function*(){
        try{
            yield platformUserService.ensurePlatformUserAsync(openid);
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

module.exports = qrRegistry;