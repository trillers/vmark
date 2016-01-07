var co = require('co');
var QrTypeRegistry = require('./QrTypeRegistry');
var qrRegistry = new QrTypeRegistry();
var context = require('../../../context/context');
var wsConns = require('../../../app/wsConns');
var tenantService = context.services.tenantService;
var bindBotResults = tenantService.bindBotResults;
var securityService = context.services.securityService;
var authResults = securityService.authResults;
var wechatApi = require('../../wechat/common/api').api;
var tenantAdminType = qrRegistry.newType('ta', {temp: true});
var tenantBotType =   qrRegistry.newType('tb', {temp: true});
var loginType =       qrRegistry.newType('lg', {temp: true});
var defaultType =     qrRegistry.getQrType('default');

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
            var result = yield tenantService.bindPersonalBotAsync(qr.data, openid);
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
            console.log(conn);
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
                }
                result.auth = 'success';
                result.msg = '登陆成功';
                result.openid = auth.user.openid;
                result.sceneId = sceneId;

                conn.write(JSON.stringify(result));
                reply = '[系统]: 登陆后台系统成功！';
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

});

defaultType.onAccess(function(qr, openid){
    var reply = '[系统]: 该二维码已失效';
    wechatApi.sendText(openid, reply, function (err) {
        console.log(err);
        //TODO
    });
});




module.exports = qrRegistry;