/**
 * Created by henryleu on 3/28/16.
 */
var EventEmitter = require('events').EventEmitter;

var WechatInfoCache = function(loader){
    this.loader = loader;
    this.cache = {};
    this.emitter = new EventEmitter();
};

WechatInfoCache.prototype.get = function*(wechatId){
    var info = this.cache[wechatId];
    if(!info){
        info = this.cache[wechatId] = yield this.loader(wechatId);
    }
    return info;
};

WechatInfoCache.prototype.validate = function*(wechatId){
    this.cache[wechatId] = null;
    var info = yield this.get(wechatId);
    this.emitter.emit('refresh', wechatId, info);
    return info;
};

WechatInfoCache.prototype.onRefresh = function(handler){
    this.emitter.on('refresh', handler);
};

module.exports = WechatInfoCache;