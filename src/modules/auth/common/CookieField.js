var crypto = require('crypto');
var settings = require('vmark-settings');
var logger = require('../../app/logging').logger;
var salt = settings.security.salt;
var TOKEN_KEY = 'token'; //key of agent token for auto-login

var AgentTokenizer = function(options){
    this.options
};
var AgentTokenizer = {
    get: function(ctx){
        logger.debug('Get agent token: ' + ctx.cookies.get(TOKEN_KEY));
        return ctx.cookies.get(TOKEN_KEY);
    },
    set: function(ctx, token){
        logger.debug('Set agent token: ' + token);
        ctx.cookies.set(TOKEN_KEY, token, {maxAge: 3600000*24*366}); //TODO
    },
    generate: function(openid){
        var token = crypto.createHash('sha1').update(openid).update(salt).digest('hex');
        logger.debug('Generate agent token: ' + token + ' for openid: ' + openid);
        return token;
    }
};

module.exports = AgentTokenizer;