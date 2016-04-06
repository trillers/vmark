var assert = require('chai').assert;
var co = require('co');
var contextLoader = require('../../../../../src/context');
var context = contextLoader.context;
var wechatApi = require('../../../../../src/modules/wechat/common/api').api;


describe('Power poster service', function(){
    before(function(done){
        setTimeout(function(){
            done();
        }, 2000);
    });

    var openid = 'oqSpUuHK2Vj9DaL93eYqzLo4e6Ow'; //独自等待的错题本测试号openid
    var acJson = {
        activity: 'ddd',
        user: 'CuEz2',
        type: 'ac'
    }

    var paJson = {
        activity: 'ddd',
        participant: 'ppp',
        user: 'CuEz2',
        type: 'pa'
    }

    describe('create poster', function(){
        describe('create activity post', function(){
            it('succeed to create activity post', function(done){
                co(function*(){
                    try{
                        var service = context.services.powerPosterService;
                        var data = yield service.create(acJson)
                        console.info(data);
                        yield wechatApi.sendImageAsync(openid, data.mediaId);
                        setTimeout(function(){done()}, 2000);
                    }
                    catch(e){
                        console.error(e);
                        done();
                    }
                })
            });

        })

        describe('create participant post', function(){
            it('succeed to create participant post', function(done){
                co(function*(){
                    try{
                        var service = context.services.powerPosterService;
                        var data = yield service.create(paJson)
                        yield wechatApi.sendImageAsync(openid, data.mediaId);
                        console.info(data);
                        setTimeout(function(){done()}, 2000);
                    }
                    catch(e){
                        console.error(e);
                        done();
                    }
                })
            });

        })

    });

});
