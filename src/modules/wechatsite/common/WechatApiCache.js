var EventEmitter = require('events').EventEmitter;
var WechatApi = require('./WechatApi');
var co = require('co');

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
    var api = this.cache[wechatId];
    if(!api){
        var info = loadedInfo || (yield this.infoCache.get(wechatId));
        var store = this.storeCreator.create(wechatId);
        this.cache[wechatId] = new WechatApi(info.appKey, info.appSecret);
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