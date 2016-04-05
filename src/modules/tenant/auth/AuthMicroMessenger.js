var util = require('util');
var context = require('../../../context/context');
var logger = context.logger;
var agentToken = require('./agentToken');
var authentication = require('./authentication');
var bus = require('../wechat/oauth-bus-config');
var oauthSignupWithBaseInfo = bus.route(bus.GET_BASE_INFO);
var oauthSignupWithUserInfo = bus.route(bus.GET_USER_INFO);

var authenticationService = context.services.tenantAuthenticationService;
var authResults = authenticationService.authResults;
var atToOpenidKv = context.kvs.teAtToOpenid;

var Authenticator = function(options){
    this.subscriptionUrl = options.subscriptionUrl;
};

Authenticator.prototype = {
    auth: function* (ctx, next, level){
        var wechatId = ctx.wechatId;
        console.log('wechat id: ' + wechatId)
        var at = agentToken.get(ctx, wechatId);
        if(!at){//signup firstly when user access wechat web page
            level==1 && (yield oauthSignupWithBaseInfo.authorize(ctx, wechatId));
            level==2 && (yield oauthSignupWithUserInfo.authorize(ctx, wechatId));
            level==3 && (yield oauthSignupWithBaseInfo.authorize(ctx, wechatId));
            return;
        }
        else{ //not signed up yet
            try{
                var openid = yield atToOpenidKv.getAsync(wechatId, at);
                if(!openid){
                    agentToken.delete(ctx, wechatId);
                    level==1 && (yield oauthSignupWithBaseInfo.authorize(ctx, wechatId));
                    level==2 && (yield oauthSignupWithUserInfo.authorize(ctx, wechatId));
                    level==3 && (yield oauthSignupWithBaseInfo.authorize(ctx, wechatId));
                    return;
                }

                var auth = yield authenticationService.signinWithWechatIdAndOpenidAsync(wechatId, openid);
                if(!auth){
                    agentToken.delete(ctx, wechatId);
                    yield this.render('/login-feedback', auth);
                    return;
                }
                else if(auth.result != authResults.ok){
                    yield this.render('/login-feedback', auth);
                    return;
                }

                var authLevel = authentication.getAuthLevel(auth);
                if(authLevel>=level){
                    authentication.setAuthentication(ctx, auth, wechatId);
                    authentication.deleteReturnUrl(ctx, wechatId);
                    yield next;
                }
                else if(level==3){
                    //TODO  generate qr and link url and mark open token
                    authentication.deleteAuthentication(ctx, wechatId);
                    authentication.saveInterruptUrl(ctx, wechatId, true);
                    console.error(authentication.getInterruptUrl(ctx, wechatId));
                    var subUrl = util.format(this.subscriptionUrl, wechatId);
                    ctx.redirect(subUrl);
                }
                else if(level==2){
                    yield oauthSignupWithUserInfo.authorize(ctx, wechatId);
                }
                else{
                    yield oauthSignupWithBaseInfo.authorize(ctx, wechatId);
                }
            }catch(err){
                logger.error('Fail to sign in with openid: ' + err);
                logger.error(err.stack);
                yield ctx.render('/error', {error: err}); //TODO
            }
        }
    }
}

module.exports = Authenticator;