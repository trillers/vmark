var EventEmitter = require('events').EventEmitter;
var WechatApi = require('../../wechat/common/WechatApi');
var co = require('co');
var util = require('util');

function WechatApiCache(infoCache, storeCreator){
    var me = this;
    this.infoCache = infoCache;
    this.cache = {};
    this.storeCreator = storeCreator;
    EventEmitter.call(this);
    this.infoCache.onRefresh(function(wechatId, info){
        co(function*(){
            yield me.refresh(wechatId, info);
        });
    });
}
util.inherits(WechatApiCache, EventEmitter);

WechatApiCache.prototype.get = function*(wechatId, loadedInfo){
    var me = this;
    var api = this.cache[wechatId];
    if(!api){
        var info = loadedInfo || (yield me.infoCache.get(wechatId));
        this.cache[wechatId] = new WechatApi(info.appId, info.appSecret, me.storeCreator(wechatId));
    }
    return this.cache[wechatId];
};

WechatApiCache.prototype.refresh = function*(wechatId, loadedInfo){
    this.cache[wechatId] = null;
    var cache = yield this.get(wechatId, loadedInfo);
    this.emit('refresh', wechatId, cache);
    return cache;
};

WechatApiCache.prototype.onRefresh = function(handler){
    this.on('refresh', handler)
};

module.exports = WechatApiCache;