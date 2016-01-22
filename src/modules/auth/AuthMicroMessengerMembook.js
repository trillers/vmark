var co = require('co');
var agentToken = require('./agentToken');
var context = require('../../context/context');
var logger = context.logger;
var authentication = require('./authentication');
var oauthHub = require('./oauth-wechat');
var oauthGetIdentity = oauthHub.route(oauthHub.GET_IDENTITY);
//var oauthUpdateUser = oauthHub.route(oauthHub.UPDATE_USER);

//var platformUserKv = context.kvs.platformUser;
//var securityService = context.services.securityService;
//var authResults = securityService.authResults;
var authenticationService = context.services.authenticationService;
var authResults = authenticationService.authResults;
var atToOpenidKv = context.kvs.atToOpenid;

var Authenticator = function(options){};

Authenticator.prototype = {
    auth: function(ctx, next){
        var at = agentToken.get(ctx);
        if(!at){ //signed up
            oauthGetIdentity.authorize(ctx); //TODO
            return;
        }
        else{ //not signed up yet
            co(function*(){
                var openid = yield atToOpenidKv.getAsync(at);

                if(!openid){
                    agentToken.delete(ctx);
                    oauthGetIdentity.authorize(ctx); //TODO
                    return;
                }

                var auth = yield authenticationService.signupWithBaseInfo(openid);
                logger.debug(auth);
                if(!auth){
                    agentToken.delete(ctx);
                    this.render('/login-feedback', auth);
                    return;
                }
                else if(auth.result != authResults.ok){
                    this.render('/login-feedback', auth);
                    return;
                }

                authentication.setAuthentication(ctx, auth);
                authentication.redirectReturnUrl(ctx);
            });

        }
    }
}

module.exports = Authenticator;