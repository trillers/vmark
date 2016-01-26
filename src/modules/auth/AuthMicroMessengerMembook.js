var co = require('co');
var context = require('../../context/context');
var logger = context.logger;
var agentToken = require('./../membook/common/agentToken');
var authentication = require('./authentication');
var oauthHub = require('./oauth-wechat');
var oauthSignupWithBaseInfo = oauthHub.route(oauthHub.MEMBOOK_GET_BASE_INFO);
var oauthSignupWithUserInfo = oauthHub.route(oauthHub.MEMBOOK_GET_USER_INFO);

var authenticationService = context.services.authenticationService;
var authResults = authenticationService.authResults;
var atToOpenidKv = context.kvs.atToOpenid;
var AuthLevel = require('../membook/services/AuthLevel');

var Authenticator = function(options){};

Authenticator.prototype = {
    auth: function* (ctx, next, level){
        var at = agentToken.get(ctx);
        if(!at){//signup firstly when user access wechat web page
            level==1 && oauthSignupWithBaseInfo.authorize(ctx);
            level==2 && oauthSignupWithUserInfo.authorize(ctx);
            level==3 && oauthSignupWithBaseInfo.authorize(ctx);
            return;
        }
        else{ //not signed up yet
            try{
                var openid = yield atToOpenidKv.getAsync(at);
                if(!openid){
                    agentToken.delete(ctx);
                    level==1 && oauthSignupWithBaseInfo.authorize(ctx);
                    level==2 && oauthSignupWithUserInfo.authorize(ctx);
                    level==3 && oauthSignupWithBaseInfo.authorize(ctx);
                    return;
                }

                var auth = yield authenticationService.signinWithOpenidAsync(openid);
                logger.debug(auth);
                if(!auth){
                    agentToken.delete(ctx);
                    yield this.render('/login-feedback', auth);
                    return;
                }
                else if(auth.result != authResults.ok){
                    yield this.render('/login-feedback', auth);
                    return;
                }

                var authLevel = AuthLevel.get(auth);
                if(authLevel>=level){
                    authentication.setAuthentication(ctx, auth);
                    authentication.deleteReturnUrl(ctx);
                    yield next;
                }
                else if(level==3){
                    //TODO  generate qr and link url and mark open token
                    ctx.redirect('/note/welcome');
                }
                else if(level==2){
                    oauthSignupWithUserInfo.authorize(ctx);
                }
                else{
                    oauthSignupWithBaseInfo.authorize(ctx);
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