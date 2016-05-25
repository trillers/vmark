var co = require('co');
var logger = require('../../../../app/logging').logger;
var context = require('../../../../context/context');
var qrTypeRegistry = require('../../../wechatsite/qr/QrTypeRegistries').tenantQrTypeRegistry;

module.exports = function (emitter) {
    emitter.qr(function (event, ctx) {
        co(function*() {
            var sceneId = ctx.weixin.SceneId;
            var openid = ctx.weixin.FromUserName;
            var wechatId = ctx.weixin.ToUserName;
            qrTypeRegistry.handle(sceneId, openid, wechatId);
        });
    });
    emitter.subscribe(function (event, ctx){
        co(function*(){
            var openid = ctx.weixin.FromUserName;
            var wechatId = ctx.weixin.ToUserName;
            yield context.services.tenantAuthenticationService.signupOnSubscriptionAsync(wechatId, openid);
        })
    });
};