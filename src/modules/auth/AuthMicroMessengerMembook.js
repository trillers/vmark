var co = require('co');
var context = require('../../context/context');
var logger = context.logger;
var agentToken = require('./agentToken');
var authentication = require('./authentication');
var oauthHub = require('./oauth-wechat');
var oauthSignupWithBaseInfo = oauthHub.route(oauthHub.MEMBOOK_GET_BASE_INFO);
var authenticationService = context.services.authenticationService;
var authResults = authenticationService.authResults;
var atToOpenidKv = context.kvs.atToOpenid;

var Authenticator = function(options){};

Authenticator.prototype = {
    auth: function* (ctx, next){
        var at = agentToken.get(ctx);
        if(!at){//signup firstly when user access wechat web page
            oauthSignupWithBaseInfo.authorize(ctx);
            return;
        }
        else{ //not signed up yet
            try{
                var openid = yield atToOpenidKv.getAsync(at);
                if(!openid){
                    agentToken.delete(ctx);
                    oauthSignupWithBaseInfo.authorize(ctx); //TODO
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

                authentication.setAuthentication(ctx, auth);
                authentication.deleteReturnUrl(ctx);
                yield next;
            }catch(err){
                logger.error('Fail to sign in with openid: ' + err);
                logger.error(err.stack);
                yield this.render('/error', {error: err}); //TODO
            }

        }
    }
}

module.exports = Authenticator;