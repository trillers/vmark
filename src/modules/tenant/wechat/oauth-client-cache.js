var ClientCache = require('./../../wechatsite/common/WechatOAuthClientCache');
var infoCache = require('./info-cache');
var atStore = require('./oauth-at-store');
var clientCache = new ClientCache(infoCache, atStore);

module.exports = clientCache;