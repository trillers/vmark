var RepeaterCache = require('./../../wechatsite/common/WechatRepeaterCache');
var infoCache = require('./info-cache');
var handler = require('./repeater-handler');
var cache = new RepeaterCache(infoCache, handler);

module.exports = cache;