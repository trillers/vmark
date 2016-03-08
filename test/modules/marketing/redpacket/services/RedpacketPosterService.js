var assert = require('chai').assert;
var co = require('co');
var contextLoader = require('../../../../../src/context');
var context = contextLoader.context;
var wechatApi = require('../../../../../src/modules/wechat/common/api').api;


describe('Redpacket poster service', function(){
    before(function(done){
        setTimeout(function(){
            done();
        }, 2000);
    });

    var openid = 'oqSpUuHK2Vj9DaL93eYqzLo4e6Ow'; //独自等待的错题本测试号openid
    var acJson = {
        redpacket: 'ddd',
        user: 'CuEz2',
        type: 'ac'
    }

    var paJson = {
        redpacket: 'ddd',
        participant: 'ppp',
        user: 'CuEz2',
        type: 'pa'
    }

    describe('create', function(){
        it('succeed to create activity post', function(done){
            co(function*(){
                try{
                    var service = context.services.redpacketPosterService;
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

        it('succeed to create participant post', function(done){
            co(function*(){
                try{
                    var service = context.services.redpacketPosterService;
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
    });

});
