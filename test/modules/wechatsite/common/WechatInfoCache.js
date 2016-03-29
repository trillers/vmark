var settings = require('@private/vmark-settings');
var assert = require('chai').assert;
var co = require('co');
var contextLoader = require('../../../../src/context');
var WechatInfoCache = require('../../../../src/modules/wechatsite/common/WechatInfoCache');

before(function(done){
    contextLoader.check(function(){
        done();
    });
});

describe('WechatInfoCache', function(){
    describe('get', function(){
        it('load from store', function(done){
            var wechat = settings.wechat;
            var loader = require('../../../../src/modules/wechatsite/common/wechatinfo-loader');
            co(function*(){
                var cache = new WechatInfoCache(loader);
                var wechatInfo = yield cache.get(wechat.siteId);
                console.info(wechatInfo);
                //assert.ok(wechatInfo);
                wechatInfo = yield cache.get(wechat.siteId);
                console.info(wechatInfo);
                //assert.ok(wechatInfo);
                done();
            });
        });
    });

});