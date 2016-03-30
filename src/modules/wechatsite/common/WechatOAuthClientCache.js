/**
 * Created by henryleu on 3/28/16.
 */
var EventEmitter = require('events').EventEmitter;
var WechatOAuth = require('co-wechat-oauth');
var co = require('co');

var Cache = function(wechatInfoCache, atStore){
    this.wechatInfoCache = wechatInfoCache;
    this.getAccessTokenGenerator = atStore.getAccessTokenGenerator;
    this.saveAccessTokenGenerator = atStore.saveAccessTokenGenerator;
    this.cache = {};
    this.emitter = new EventEmitter();

    var me = this;
    this.wechatInfoCache.onRefresh(function(id, info){
        co(function*(){
            var client = yield me.get(id, info);
            me.refresh(id, client);
        });
    });

};

Cache.prototype.get = function* (wechatId, loadedInfo){
    var client = this.cache[wechatId];
    if(!client){
        var info = loadedInfo || (yield this.wechatInfoCache.get(wechatId));
        if(info){
            client = this.cache[wechatId] = new WechatOAuth(
                info.appId,
                info.appSecret,
                this.getAccessTokenGenerator(wechatId),
                this.saveAccessTokenGenerator(wechatId)
            );
        }
    }
    return client;
};

Cache.prototype.refresh = function(id, client){
    this.emitter.emit('refresh', id, client);
};

Cache.prototype.onRefresh = function(handler){
    this.emitter.on('refresh', handler);
};

module.exports = Cache;