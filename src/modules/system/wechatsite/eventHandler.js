var co = require('co');
var logger = require('../../../app/logging').logger;
var QrChannelService = require('../../qrchannel/services/QrChannelService');
var wechatApi = require('../../wechat/common/api').api;
var tenantService = require('../../../../src').services.tenantService;
var bindBotResults = tenantService.bindBotResults;

module.exports = function (emitter) {
    emitter.qr(function (event, context) {
        co(function*() {
            var sceneId = context.weixin.SceneId;
            var userOpenid = context.weixin.FromUserName;
            try {
                var user = null, reply = '[系统]: 系统繁忙，请稍后重试！';
                var qr = yield QrChannelService.loadBySceneIdAsync(sceneId);
                console.log(qr);
                if (qr) {
                    switch (qr.type) {
                        case 'ta':
                            logger.debug('qr handler: register a personal tenant');
                            reply = '[系统]: 个人账户注册成功！';
                            yield tenantService.registerPersonalTenantAsync(userOpenid);
                            break;
                        case 'tb':
                            logger.debug('qr handler: bind a personal bot');
                            var result = yield tenantService.bindPersonalBotAsync(qr.custom_id, userOpenid);
                            if(result.result == bindBotResults.NO_OPERATOR){
                                reply = '[系统]: 微信号绑定失败：没有可绑定的管理员用户！';
                            }
                            else if(result.result == bindBotResults.NOT_ADMIN){
                                reply = '[系统]: 微信号绑定失败：请绑定到管理员用户上！';
                            }
                            else if(result.result == bindBotResults.BOUND){
                                reply = '[系统]: 微信号绑定失败:待绑定微信号已经有其他身份！';
                            }
                            else{
                                reply = '[系统]: 微信号绑定成功！';
                            }
                            break;
                        //TODO another qr type
                    }
                    wechatApi.sendText(userOpenid, reply, function (err) {
                        if(err) logger.error(err);
                    });
                }
                else {
                    reply = '[系统]: 该二维码已失效';
                    wechatApi.sendText(userOpenid, reply, function (err) {
                        console.log(err);
                        //TODO
                    });
                }
            } catch (err) {
                logger.err('qr event handler err: ' + err);
                return;
            }
        });
    });
};