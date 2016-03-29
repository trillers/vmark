var ClientCache = require('./../../wechatsite/common/WechatOAuthClientCache');
var infoCache = require('./wechatinfo-cache');
var atStore = require('./wechat-oauth-at-store');
var clientCache = new ClientCache(infoCache, atStore);

module.exports = clientCache;