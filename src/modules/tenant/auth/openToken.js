var crypto = require('crypto');
var settings = require('@private/vmark-settings');
var CookieField = require('./../../../framework/web/CookieField');
var logger = require('../../../app/logging').logger;
var salt = settings.security.salt;

/**
 * open token is a kind of visible and public token which identify a wechat site user
 */
var field = new CookieField({
    field: 'wechat open token'
    , key: function(wechatId){
        return 'wxot-' + wechatId;
    }
    , options: {
        maxAge: 3600000*24*366
    }
});

field.generate = function(openid){
    var token = crypto.createHash('sha1').update(openid).update(salt).digest('hex');
    logger.debug('Generate wechat open token ' + token + ' for openid ' + openid);
    return token;
};

module.exports = field;