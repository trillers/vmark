var co = require('co');
var logger = require('../../../app/logging').logger;
var context = require('../../../context/context');
var qrTypeRegistry = require('../../wechatsite/qr');
var authenticationService = context.services.authenticationService;

module.exports = function (emitter) {
    emitter.qr(function (event, context) {
        co(function*() {
            var sceneId = context.weixin.SceneId;
            var userOpenid = context.weixin.FromUserName;
            qrTypeRegistry.handle(sceneId, userOpenid);
        });
    });

    emitter.subscribe(function(event, context){
        co(function*() {
            var openid = context.weixin.FromUserName;
            var auth = null;
            try{
                auth = yield authenticationService.signupWithSubscriptionAsync(openid);
console.warn(auth);
                logger.info('Sign up with subscription for openid ' + openid);
            }catch(err){
                logger.error('Fail to sign up with subscription: ' + err);
            }
        });

    });
};