var co = require('co');
var wechatApi = require('../../../wechat/common/api').api;
var context = require('../../../../context/context');
var tenantService = context.services.tenantService;
var bindBotResults = tenantService.bindBotResults;

module.exports = function (context) {
    var openid = context.weixin.FromUserName;
    co(function*(){
        try{
            var result = yield tenantService.bindMyPersonalBotAsync(openid);
            var reply = null;
            if(result.result == bindBotResults.NO_OPERATOR){
                reply = '[系统]: 微信号绑定失败：没有可绑定的管理员用户！';
            }
            else if(result.result == bindBotResults.NOT_ADMIN){
                reply = '[系统]: 微信号绑定失败：请绑定到管理员用户上！';
            }
            else if(result.result == bindBotResults.BOUND){
                reply = '[系统]: 微信号绑定失败：待绑定微信号已经绑定过！';
            }
            //else if(result.result == bindBotResults.OTHER_ROLE){
            //    reply = '[系统]: 微信号绑定失败：待绑定微信号已经有其他身份！';
            //}
            else{
                reply = '[系统]: 微信号绑定成功！';
            }
            yield wechatApi.sendTextAsync(openid, reply);
        }catch (err) {
            logger.error('Fail to bind my bot ,' + inspect(err));
        }
    });
};