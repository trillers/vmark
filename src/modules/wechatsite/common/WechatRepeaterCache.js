/**
 * Created by henryleu on 3/30/16.
 */
var EventEmitter = require('events').EventEmitter;
var wechat = require('co-wechat');
var co = require('co');

var Cache = function(infoCache, handler){
    this.emitter = new EventEmitter();
    this.cache = {};
    this.infoCache = infoCache;
    this.handler = handler;

    var me = this;
    this.infoCache.onRefresh(function(id, info){
        co(function*(){
            var repeater = yield me.get(id, info);
            me.refresh(id, repeater);
        });
    });

};

Cache.prototype.get = function* (wechatId, loadedInfo){
    var repeater = this.cache[wechatId];
    var handler = this.handler;
    if(!repeater){
        var info = loadedInfo || (yield this.infoCache.get(wechatId));
        if(info){
            var config = {
                token: info.token,
                appid: info.appId,
                encodingAESKey: info.encodingAESKey
            };
            var handle = wechat(config).middleware(function*(next){
                handler(this, next);
            });
            console.log('**************');
            console.log(handle);
            repeater = this.cache[wechatId] = function*(ctx, next){
                yield handle.call(ctx, next);
            };
        }
    }
    return repeater;
};

Cache.prototype.refresh = function(id, repeater){
    this.emitter.emit('refresh', id, repeater);
};

Cache.prototype.onRefresh = function(handler){
    this.emitter.on('refresh', handler);
};

module.exports = Cache;