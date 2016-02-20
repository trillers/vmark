var crypto = require('crypto');
var settings = require('@private/vmark-settings');
var salt = settings.security.salt;
var CookieField = require('./../../common/web/CookieField');
var logger = require('../../../app/logging').logger;

var field = new CookieField({
    field: 'wechat open token'
    , key: 'wxot'
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