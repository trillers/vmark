var settings = require('@private/vmark-settings');
var WebHelper = require('../../../app/web');
var Bus = require('../../wechatsite/oauth/TenantWechatOAuthBus');
var clientCache = require('./oauth-client-cache');

var bus = new Bus({
    clientCache: clientCache,
    redirectUrl: WebHelper.getBaseUrl(settings.app) + '/wechat/%s/auth/callback'
});

bus.errorHandler = function*(ctx, next){
    yield ctx.render('error', {error: req.oauth.error});
};

module.exports = bus;