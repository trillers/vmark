var co = require('co');
var logger = require('../../../../app/logging').logger;
var context = require('../../../../context/context');
var qrTypeRegistry = require('../../../wechatsite/qr');

module.exports = function (emitter) {
    emitter.qr(function (event, ctx) {
        co(function*() {
            var sceneId = ctx.weixin.SceneId;
            var userOpenid = ctx.weixin.FromUserName;
            var wechatId = ctx.weixin.ToUserName;
            //qrTypeRegistry.handle(sceneId, userOpenid, wechatId);
            console.log(ctx);
        });
    });
};