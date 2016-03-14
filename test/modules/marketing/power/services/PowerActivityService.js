var co = require('co');
var contextLoader = require('../../../../../src/context');
var context = contextLoader.context;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});

describe('PowerActivityService', function(){
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