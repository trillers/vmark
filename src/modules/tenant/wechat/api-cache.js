var WechatApiCache = require('../../wechatsite/common/WechatApiCache');
var infoCache = require('./info-cache');
var context = require('../../../context/context');

var storeCreator = require('./api-store')(context);
var apiCache = new WechatApiCache(infoCache, storeCreator);

module.exports = apiCache;