var crypto = require('crypto');
var settings = require('@private/vmark-settings');
var CookieField = require('./../../../framework/web/CookieField');
var logger = require('../../../app/logging').logger;
var salt = settings.security.salt;

var agentToken = new CookieField({
    field: 'wechat agent token'
    , key: function(wechatId){
        return 'wxat-' + wechatId;
    }
    , options: {
        maxAge: 3600000*24*366
    }
});

agentToken.generate = function(openid){
    var token = crypto.createHash('sha1').update(openid).update(salt).digest('hex');
    logger.debug('Generate wechat agent token ' + token + ' for openid ' + openid);
    return token;
};

module.exports = agentToken;