/**
 * Created by henryleu on 3/28/16.
 */
var context = require('../../../context/context');

var store = {};
store.load = function*(wechatId){
    var kv = context.kvs.tenantWechatSite;
    console.log("begin to load wechat site by wechat_id [" + wechatId + "]");
    var wechatMedia = yield kv.getTenantWechatSiteByOriginalIdAsync(wechatId);
    console.log(wechatMedia);
    return wechatMedia;
};

module.exports = store;
