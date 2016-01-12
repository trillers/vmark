var context = require('../../../../context/context');
//var qrRegistry = require('../modules/wechatsite/qr');
var logger = context.logger;
var checker = function*(next){
    logger.debug('checking authentication on web accessing');
    logger.debug(this.session);

    //check if session there
    if(!this.session){
        throw new Error('no session middleware used');
    }

    var auth = this.session.auth;
    if(auth){
        yield next;
        return;
    }

    logger.debug(this.browser);
    logger.debug(this.state);
    logger.debug(this.cookies.get('koss:test_sid'));
    yield next;
}

module.exports = checker;