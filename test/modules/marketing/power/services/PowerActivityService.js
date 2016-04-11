var co = require('co');
var contextLoader = require('../../../../../src/context');
var PowerType = require('../../../../../src/modules/common/models/TypeRegistry').item('PowerType');
var co = require('co');
var context = contextLoader.context;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});

describe('PowerActivityService', function(){
    var wechatSite = {};
    var originalId = 'gh_74570a11f763';//独自等待测试号

    before(function(done){
        co(function*(){
            var tenantWechatSiteService = context.services.tenantWechatSiteService;
            wechatSite = yield tenantWechatSiteService
                .loadTenantWechatSiteByOriginalIdAsync(originalId);
            if(!wechatSite){
                var wechatSiteData = {
                    org: 'org1'
                    , type: 'ws'
                    , originalId: 'gh_74570a11f763'
                    , name: '独自等待测试号'
                    , appId: 'wxe6127a840e1c8c9f'
                    , appSecret: 'd4624c36b6795d1d99dcf0547af5443d'
                    , wechatSiteType: 'voa'
                    , token: 'nFMXmXa0CDtWefLOF6LZ'
                }
                wechatSite = yield tenantWechatSiteService.createTenantWechatSiteAsync(wechatSiteData);
            }
            done();
        }).catch(function(e){
            console.error(e);
        })
    });

    describe('create power activity', function(){
        it('success create power activity', function(done){
            var activity = {
                org: 'org1',
                wechatId: 'wechatId',
                name: '测试活动',
                startTime: '2016-04-23',
                endTime: '2016-05-23',
                type: PowerType.Points.value()
            }
            var service = context.services.powerActivityService;
            co(function*(){
                var doc = yield service.create(activity);
                console.info(doc);
                done();
            }).catch(function(e){
                console.error(e);
            })
        })
    })

    describe.only('create poster power activity', function(){
        it('success create poster power activity', function(done){
            var activity = {
                org: 'org1',
                wechatId: wechatSite.originalId,
                name: '测试活动',
                startTime: '2016-04-23',
                endTime: '2016-05-23',
                type: PowerType.Points.value(),
                withPic: true,
                posterBgImg: 'http://up.qqjia.com/z/19/tu22346_2.jpg'
            }
            var service = context.services.powerActivityService;
            co(function*(){
                var doc = yield service.create(activity);
                console.info(doc);
                done();
            }).catch(function(e){
                console.error(e);
            })
        })
    })

    describe('putParticipantToMapString', function(){
        var id = 'A01';

        before(function(done){
            var service = context.services.powerActivityService;
            var userId = 'U001';
            var userBrief = {
                id: userId,
                nickname: '包三哥_' + userId,
                headimgurl: 'http://wx.qlogo.cn/mmopen/CJ35Z2cnZA2r9iaUDwhRq0ic5oHTgXLallotFS8O5yEvdOglsSCe6icKk5ZlCmSM0JiarWme9yW0esKiaPRGLMABIAg/0'
            };
            co(function*() {
                try{
                    var userMap = yield service.putParticipantToMapString(id, userBrief);
                    console.info(userMap);
                    done();
                }
                catch(e){
                    console.error(e);
                    done();
                }
            });
        });

        it('put to a blank map', function(done){
            var service = context.services.powerActivityService;
            var id = '' + new Date().getTime();
            var userId = 'U001';
            var userBrief = {
                id: userId,
                nickname: '包三哥_' + userId,
                headimgurl: 'http://wx.qlogo.cn/mmopen/CJ35Z2cnZA2r9iaUDwhRq0ic5oHTgXLallotFS8O5yEvdOglsSCe6icKk5ZlCmSM0JiarWme9yW0esKiaPRGLMABIAg/0'
            };
            co(function*() {
                try{
                    var userMap = yield service.putParticipantToMapString(id, userBrief);
                    console.info(userMap);
                    done();
                }
                catch(e){
                    console.error(e);
                    done();
                }
            });
        });


        it('put to a not blank map', function(done){
            var service = context.services.powerActivityService;
            var kv = context.kvs.power;
            var userId = 'U001';
            var userBrief001 = {
                id: userId,
                nickname: '包三哥_' + userId,
                headimgurl: 'http://wx.qlogo.cn/mmopen/CJ35Z2cnZA2r9iaUDwhRq0ic5oHTgXLallotFS8O5yEvdOglsSCe6icKk5ZlCmSM0JiarWme9yW0esKiaPRGLMABIAg/0'
            };

            userId = 'U002';
            var userBrief002 = {
                id: userId,
                nickname: '包三哥_' + userId,
                headimgurl: 'http://wx.qlogo.cn/mmopen/CJ35Z2cnZA2r9iaUDwhRq0ic5oHTgXLallotFS8O5yEvdOglsSCe6icKk5ZlCmSM0JiarWme9yW0esKiaPRGLMABIAg/0'
            };

            userId = 'U003';
            var userBrief003 = {
                id: userId,
                nickname: '包三哥_' + userId,
                headimgurl: 'http://wx.qlogo.cn/mmopen/CJ35Z2cnZA2r9iaUDwhRq0ic5oHTgXLallotFS8O5yEvdOglsSCe6icKk5ZlCmSM0JiarWme9yW0esKiaPRGLMABIAg/0'
            };
            co(function*() {
                try{
                    var userMap = {};
                    userMap = yield service.putParticipantToMapString(id, userBrief001);
                    console.info(userMap);

                    userMap = yield service.putParticipantToMapString(id, userBrief002);
                    console.info(userMap);

                    userMap = yield service.putParticipantToMapString(id, userBrief003);
                    console.info(userMap);

                    var userMapString = yield kv.getParticipantMapStringAsync(id);
                    console.info(userMapString);
                    console.info(JSON.stringify(JSON.parse(userMapString), null, 4));
                    done();
                }
                catch(e){
                    console.error(e);
                    done();
                }

            });
        });
    });


    describe('getParticipantRankingList', function(){
        var id = 'A01';

        it('succeed to get assembled ranking list', function(done){
            var service = context.services.powerActivityService;
            co(function*() {
                try{
                    var rankList = yield service.getParticipantRankingList(id);
                    console.info(rankList);
                    done();
                }
                catch(e){
                    console.error(e);
                    done();
                }
            });
        });

    });

});