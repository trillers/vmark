var assert = require('chai').assert;
var co = require('co');
var contextLoader = require('../../../../../src/context');
var context = contextLoader.context;

describe('Redpacket Kvs', function(){
    before(function(done){
        setTimeout(function(){
            done();
        }, 2000);
    });

    var activity = {
        id: 'A01',
        views: 0,
        participants_count: 0
    }
    var participant = {
        id: 'P001',
        activity: 'A01',
        user: 'U001',
        total_money: 50
    }

    var activityId = "A01";
    var participants = [
        {user: 'U001', score: 10},
        {user: 'U002', score: 20},
        {user: 'U003', score: 30}
    ];
    var powers = [
        {user: 'U001', score: 3},
        {user: 'U002', score: 2},
        {user: 'U003', score: 1}
    ];

    before(function(done){
        co(function*(){
            var affected = 0;
            var score = 0;
            var len = participants.length;
            try{
                var kv = context.kvs.redpacket;

                for(var i=0; i<len; i++){
                    affected = yield kv.addParticipantInRankingListAsync(activityId, participants[i].user, participants[i].score);
                    console.info(affected);
                }

                for(var i=0; i<len; i++){
                    score = yield kv.increaseParticipantScoreInRankingListAsync(activityId, powers[i].user, powers[i].score);
                    console.info(score);
                }
                done();
            }
            catch(e){
                console.error(e);
                done();
            }
        });
    });
    describe('getRankingList', function(){
        it('succeed to get ranking list', function(done){
            co(function*(){
                try{
                    var kv = context.kvs.redpacket;
                    var list = yield kv.getRankingListAsync(activityId);
                    console.info(list);
                    done();
                }
                catch(e){
                    console.error(e);
                    done();
                }
            })
        });
    });

    describe('getParticipantRank', function(){
        it('succeed to get participant rank', function(done){
            co(function*(){
                try{
                    var kv = context.kvs.redpacket;
                    var rank1 = yield kv.getParticipantRankAsync(activityId, 'U001');
                    var rank2 = yield kv.getParticipantRankAsync(activityId, 'U007');

                    console.info(rank1);
                    console.info(rank2);

                    done();
                }
                catch(e){
                    console.error(e);
                    done();
                }
            })
        });
    });

    describe('getRankingListWithScore', function(){
        it('succeed to get ranking list with score', function(done){
            co(function*(){
                try{
                    var kv = context.kvs.redpacket;
                    var list = yield kv.getRankingListWithScoreAsync('A01');
                    console.info(list);
                    var list = yield kv.getRankingListWithScoreAsync('A01', 1);
                    console.info(list);
                    done();
                }
                catch(e){
                    console.error(e);
                    done();
                }
            })
        });
    });

    describe('saveRedpacketActivity', function(){
        it('succeed to save redpacket activity', function(done){
            co(function*(){
                try{
                    var kv = context.kvs.redpacket;
                    var res = yield kv.saveActivityAsync(activity);
                    assert.equal(res.id, activity.id);
                    done();
                }
                catch(e){
                    console.error(e);
                    done();
                }
            })
        });
    });

    describe('saveParticipant', function(){
        it('succeed to save participant', function(done){
            co(function*(){
                try{
                    var kv = context.kvs.redpacket;
                    var res = yield kv.saveParticipantAsync(participant);
                    assert.equal(res.id, participant.id);
                    done();
                }
                catch(e){
                    console.error(e);
                    done();
                }
            })
        });
    });

    describe('linkUserToParticipantId', function(){
        it('succeed to link User To ParticipantId', function(done){
            co(function*(){
                try{
                    var kv = context.kvs.redpacket;
                    var res = yield kv.linkUserToParticipantIdAsync(activityId, 'A001', 'P001');
                    console.info(res);
                    done();
                }
                catch(e){
                    console.error(e);
                    done();
                }
            })
        });
    });

    describe('getParticipantIdByUserIdAndActivityId', function(){
        it('succeed to link User To ParticipantId', function(done){
            co(function*(){
                try{
                    var kv = context.kvs.redpacket;
                    var res = yield kv.getParticipantIdByUserIdAndActivityIdAsync(activityId, 'A001');
                    console.info(res);
                    done();
                }
                catch(e){
                    console.error(e);
                    done();
                }
            })
        });
    });

    describe('loadRedpacketActivity', function(){
        it('succeed to load redpacket activity', function(done){
            co(function*(){
                try{
                    var kv = context.kvs.redpacket;
                    var res = yield kv.loadActivityByIdAsync(activity.id);
                    assert.equal(res.id, activity.id);
                    done();
                }
                catch(e){
                    console.error(e);
                    done();
                }
            })
        });
    });

    describe('loadParticipant', function(){
        it('succeed to load participant', function(done){
            co(function*(){
                try{
                    var kv = context.kvs.redpacket;
                    var res = yield kv.loadParticipantByIdAsync(participant.id);
                    assert.equal(res.id, participant.id);
                    done();
                }
                catch(e){
                    console.error(e);
                    done();
                }
            })
        });
    });

    describe('incActivityViewsById', function(){
        it('succeed to increase activity views', function(done){
            co(function*(){
                try{
                    var kv = context.kvs.redpacket;
                    var res = yield kv.incActivityViewsByIdAsync(activity.id);
                    console.info(res);
                    done();
                }
                catch(e){
                    console.error(e);
                    done();
                }
            })
        });
    });

    describe('incActivityParticipantsCountById', function(){
        it('succeed to increase activity participants count', function(done){
            co(function*(){
                try{
                    var kv = context.kvs.redpacket;
                    var res = yield kv.incActivityParticipantsCountByIdAsync(activity.id);
                    console.info(res);
                    done();
                }
                catch(e){
                    console.error(e);
                    done();
                }
            })
        });
    });

    describe.only('incParticipantMoneyById', function(){
        it('succeed to increase activity participant money', function(done){
            co(function*(){
                try{
                    var kv = context.kvs.redpacket;
                    var res = yield kv.incParticipantMoneyByIdAsync(participant.id, 4);
                    console.info(res);
                    done();
                }
                catch(e){
                    console.error(e);
                    done();
                }
            })
        });
    });

    describe('addHelpFriendToSet', function(){
        it('succeed to add help friend to set', function(done){
            co(function*(){
                try{
                    var kv = context.kvs.redpacket;
                    var res = yield kv.addHelpFriendToSetAsync(participant.id, 'openid:100');
                    console.info(res);
                    done();
                }
                catch(e){
                    console.error(e);
                    done();
                }
            })
        });
    });

    describe('getHelpFriendsSet', function(){
        it('succeed to get help friend set', function(done){
            co(function*(){
                try{
                    var kv = context.kvs.redpacket;
                    var res = yield kv.getHelpFriendsSetAsync(participant.id);
                    console.info(res);
                    done();
                }
                catch(e){
                    console.error(e);
                    done();
                }
            })
        });
    });

});
