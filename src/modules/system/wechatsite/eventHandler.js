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

    var signup = function signup(event, context){
        co(function*() {
            var openid = context.weixin.FromUserName;
            var auth = null;
            try{
                auth = yield authenticationService.signupOnSubscriptionAsync(openid);
                context.wxsession = auth;
                logger.info('Sign up with subscription for openid ' + openid);
                logger.debug(auth);
            }catch(err){
                logger.error('Fail to sign up with subscription: ' + err);
            }
        });
    };
    emitter.subscribe(signup);
    emitter.qr(signup);
    emitter.SCAN(signup);

    console.log(emitter);
};