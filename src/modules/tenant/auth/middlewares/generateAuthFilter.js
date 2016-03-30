var logger = require('../../../../app/logging').logger;
var authentication = require('../authentication');
var AuthMicroMessenger = require('../AuthMicroMessenger');
var AuthPc = require('../AuthPc');
var authMicroMessenger = new AuthMicroMessenger();
var authPc = new AuthPc();
var authMobile = authPc;

var generate = function(level){
    return function* (next) {
        var wechatId = this.wechatId;
        var auth = authentication.getAuthentication(this, wechatId);
        var authLevel = authentication.getAuthLevel(auth);
        if (authLevel>=level) {
            yield next;
            return;
        }

        authentication.saveReturnUrl(this, wechatId);
        var browser = this.basics.browser;
        if (browser.MicroMessenger) {
            logger.debug('Using micro messenger browser');
            yield authMicroMessenger.auth(this, next, level);
        }
        else if (browser.Mobile) {
            logger.debug('Using mobile browser');
            yield authMobile.auth(this, next, level);
            return;
        }
        else {
            logger.debug('Using PC browser');
            yield authPc.auth(this, next, level);
            return;
        }
    };
};

module.exports = generate;