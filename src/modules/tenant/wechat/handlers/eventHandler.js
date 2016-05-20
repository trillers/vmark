var co = require('co');
var logger = require('../../../../app/logging').logger;
var context = require('../../../../context/context');
var qrTypeRegistry = require('../../../wechatsite/qr/QrTypeRegistries').tenantQrTypeRegistry;
var wechatMediaSettingService = context.services.wechatMediaSettingService;
var wechatApiCache = require('../api-cache');


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
            var wechatApi = (yield wechatApiCache.get(wechatId)).api;
            var settings = yield wechatMediaSettingService.loadByWechatIdAsync(wechatId);
            //subscribe reply
            if(settings.subscribeReply){
                if(settings.subscribeReply.type === 'text'){
                    wechatApi.sendText(openid, settings.subscribeReply.content, function(){
                        //TODO
                    })
                }
            }
        })
    })

    emitter.CLICK(function (event, ctx){
        co(function*(){
            var openid = ctx.weixin.FromUserName;
            var wechatId = ctx.weixin.ToUserName;
            var key = ctx.weixin.EventKey;
            yield context.services.tenantAuthenticationService.signupOnSubscriptionAsync(wechatId, openid);
            var wechatApi = (yield wechatApiCache.get(wechatId)).api;
            var settings = yield wechatMediaSettingService.loadByWechatIdAsync(wechatId);
            //subscribe reply
            if(settings.menu){
                var menu = JSON.parse(settings.menu);
                menu.button.map(function(item){
                    if(item.key === key){
                        wechatApi.sendText(openid, item.con, function(){
                            //TODO
                        })
                    }else if(item.sub_button){
                        item.sub_button.map(function(data){
                            if(data.key === key){
                                wechatApi.sendText(openid, data.con, function(){
                                    //TODO
                                })
                            }
                        })
                    }
                })

            }
        })
    })

};