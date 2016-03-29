/**
 * Created by henryleu on 3/28/16.
 */
var EventEmitter = require('events').EventEmitter;

var Cache = function(store){
    this.store = store;
    this.cache = {};
    this.emitter = new EventEmitter();
};

Cache.prototype.get = function*(wechatId){
    var info = this.cache[wechatId];
    if(!info){
        info = this.cache[wechatId] = yield this.store.load(wechatId);
    }
    return info;
};

Cache.prototype.validate = function*(wechatId){
    this.cache[wechatId] = null;
    var info = yield this.get(wechatId);
    this.emitter.emit('refresh', wechatId, info);
    return info;
};

Cache.prototype.onRefresh = function(handler){
    this.emitter.on('refresh', handler);
};

module.exports = Cache;