/**
 * Created by henryleu on 3/28/16.
 */
var Cache = require('./../../wechatsite/common/WechatInfoCache');
var store = require('./info-store');
var cache = new Cache(store);

module.exports = cache;