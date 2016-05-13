var logger = require('../../../app/logging').logger;
var authentication = require('../../auth/authentication');
var AuthMicroMessenger = require('../../auth/AuthMicroMessengerMarketing');
var AuthPc = require('../../auth/AuthPc');
var authMicroMessenger = new AuthMicroMessenger();
var authPc = new AuthPc();
var authMobile = authPc;
var AuthLevel = require('../services/AuthLevel');

var generate = function(level){
    return function* (next) {
        var auth = authentication.getAuthentication(this);
        console.error('auth**************');
        var authLevel = AuthLevel.get(auth);
        if (authLevel>=level) {
            yield next;
            return;
        }

        authentication.saveReturnUrl(this);
        var browser = this.basics.browser;
        if (browser.MicroMessenger) {
            logger.debug('Using micro messenger browser');
            yield authMicroMessenger.auth(this, next, level);
        }
        else if (browser.Mobile) {
            logger.debug('Using mobile browser');
            yield authMobile.auth(this, next, level);
            //yield next;
            return;
        }
        else {
            logger.debug('Using PC browser');
            yield authPc.auth(this, next, level);
            //yield next;
            return;
        }
    };
};

module.exports = generate;