var assert = require('chai').assert;
var contextLoader = require('../../../../src/context');
var context = contextLoader.context;
before(function(done){
    contextLoader.check(function(){
        console.warn('done');
        done();
    });
});

describe('test', function(){
    it('success', function(done){
        console.info('it');
        console.log(context.kvs.note);
        done();
    })
})
//describe('RankAction', function(){
//
//    var kv = context.kvs.user;
//    console.error(kv);
//    var noteId = '4ab1';
//    afterEach(function() {
//        kv.delNoteRank(noteId, function(err, data){
//            assert.ok(!err);
//            assert.equal(data, 1);
//        })
//        kv.delRankChangedSet(function(err, data){
//            assert.ok(!err);
//            assert.equal(data, 1);
//        })
//    });
//    describe('view action', function(){
//        it('Succeed to change note rank throw view', function(done){
//            kv.view(noteId, function(err, data){
//                assert.ok(!err);
//                assert.equal(data, 1);
//                done();
//            })
//        });
//    });
//
//    describe('like action', function(){
//        it('Succeed to change note rank throw like', function(done){
//            kv.like(noteId, function(err, data){
//                assert.ok(!err);
//                assert.equal(data, 1);
//                done();
//            })
//        });
//    });
//
//    describe('comment action', function(){
//        after(function(){
//            kv.delNoteRank(noteId, function(err, data){
//                assert.ok(!err);
//                assert.equal(data, 1);
//            })
//        })
//        it('Succeed to change note rank throw comment', function(done){
//            kv.comment(noteId, function(err, data){
//                assert.ok(!err);
//                assert.equal(data, 1);
//                done();
//            })
//        });
//    });
//
//    describe('addSectionNote action', function(){
//        it('Succeed to change note rank throw addSectionNote', function(done){
//            kv.addSectionNote(noteId, function(err, data){
//                assert.ok(!err);
//                assert.equal(data, 2);
//                done();
//            })
//        });
//    });
//
//    describe('share action', function(){
//        it('Succeed to change note rank throw share', function(done){
//            kv.like(noteId, function(err, data){
//                assert.ok(!err);
//                assert.equal(data, 1);
//                done();
//            })
//        });
//    });
//
//    describe('share action', function(){
//        it('Succeed to change note rank throw share', function(done){
//            kv.like(noteId, function(err, data){
//                assert.ok(!err);
//                assert.equal(data, 1);
//                done();
//            })
//        });
//    });
//});
//
//describe('async rank', function(){
//    var kv = context.kvs.rankAction;
//    var noteId1 = '4ab2', noteId2 = '4ab3';
//    after(function() {
//        kv.delNoteRank(noteId1, function(err, data){
//            assert.ok(!err);
//            assert.equal(data, 1);
//        })
//        kv.delNoteRank(noteId2, function(err, data){
//            assert.ok(!err);
//            assert.equal(data, 1);
//        })
//        kv.delRankChangedSet(function(err, data){
//            assert.ok(!err);
//            assert.equal(data, 1);
//        })
//    });
//
//    describe('get rank changed set', function(){
//        it('Succeed to change note rank throw like', function(done){
//            kv.like(noteId1, function(err, data){
//                assert.ok(!err);
//                assert.equal(data, 1);
//                done();
//            })
//        });
//        it('Succeed to change note rank throw like', function(done){
//            kv.like(noteId2, function(err, data){
//                assert.ok(!err);
//                assert.equal(data, 1);
//                done();
//            })
//        });
//        it('Succeed to get rank changed note set', function(done){
//            kv.getRankChangedSet(function(err, data){
//                assert.ok(!err);
//                assert.equal(data.length, 2);
//                done();
//            })
//        });
//    })
//})