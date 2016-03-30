/**
 * Created by henryleu on 3/28/16.
 */
var context = require('../../../context/context');

var store = {};
store.load = function*(wechatId){
    var kv = context.kvs.tenantWechatSite;
    var wechatMedia = yield kv.getTenantWechatSiteByOriginalIdAsync(wechatId);
    return wechatMedia;
};

module.exports = store;
