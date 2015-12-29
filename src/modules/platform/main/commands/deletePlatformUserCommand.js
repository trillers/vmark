var context = require('../../../../context/context');
var wechatApi = require('../../../wechat/common/api').api;
var logger = context.logger;
var service = context.services.platformUserService;

module.exports = function (context) {
    var openid = context.weixin.FromUserName;
    console.error(openid);
    service.deletePlatformUserByOpenid(openid, function(err){
        if(err){
            var errMsg = '平台用户删除失败！' + err;
            wechatApi.sendText(openid, errMsg, function(err){
                if(err) logger.error('Fail to sent text to wechat site: ' + err);
            });
        }
        else{
            var msg = '平台用户[' + openid + ']删除成功！';
            wechatApi.sendText(openid, msg, function(err){
                if(err) logger.error('Fail to sent text to wechat site: ' + err);
            });
        }
    });

};