var logger = require('../../../app/logging').logger;
var authentication = require('../../auth/authentication');
var AuthMicroMessenger = require('../../auth/AuthMicroMessengerMembook');
var AuthPc = require('../../auth/AuthPc');
var authMicroMessenger = new AuthMicroMessenger();
var authPc = new AuthPc();
var authMobile = authPc;

var checkAuthentication = function* (next) {
    if(authentication.authenticated(this)){
        yield next;
        return;
    }
    authentication.saveReturnUrl(this);

    var browser = this.basics.browser;
    if(browser.MicroMessenger){
        logger.debug('Using micro messenger browser');
        authMicroMessenger.auth(this, next);
    }
    else if(browser.Mobile){
        logger.debug('Using mobile browser');
        authMobile.auth(this, next);
    }
    else{
        logger.debug('Using PC browser');
        authPc.auth(this, next);
    }
};

module.exports = checkAuthentication;