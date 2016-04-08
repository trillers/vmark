var contextLoader = require('../../../../src/context');
var context = contextLoader.context;
var assert = require('chai').assert;
var typeRegistry = require('../../../../src/modules/common/models/TypeRegistry');
var MembershipType = typeRegistry.item('MembershipType');

before(function(done){
    contextLoader.check(function(){
        setTimeout(function(){
            done();
        }, 2000)
    });
});

describe('MembershipService', function(){
    var membershipId = null;
    var downLineId = null;

    it('#create', function(done){
        var service = context.services.membershipService;
        var distributor = {
            user:      'srplQ',
            org:       'kvsCe',
            media:     'td5ua',
            type:      MembershipType.Distributor.value()
        };
        service.create(distributor, function(err, doc){
            console.log(err)
            console.log(doc);
            assert.ok(!err);
            assert.ok(doc._id);
            membershipId = doc._id;
            done();
        });
    });

    //it('#loadById', function(done){
    //    var service = context.services.membershipService;
    //    service.loadById(membershipId, function(err, doc){
    //        console.log(membershipId);
    //        console.log(doc);
    //        assert.ok(!err);
    //        assert.ok(doc._id === membershipId);
    //        done();
    //    })
    //});
    //
    it('#addDownLine', function(done){
        var service = context.services.membershipService;
        var downLine = {
            upLine: membershipId,
            user:  'srplQ',
            org:   'kvsCe',
            media: 'td5ua',
            type:  MembershipType.Distributor.value()
        };
        service.create(downLine, function(err, newDoc){
            assert.ok(!err);
            service.addDownLine(membershipId, newDoc._id, function(err, doc){
                console.log(doc);
                assert.ok(!err);
                downLineId = newDoc._id;
                done();
            });
        })
    });

    it('#loadDistributorsChainById', function(done){
        var service = context.services.membershipService;
        service.loadDistributorsChainById(downLineId, function(err, doc){
            console.warn(doc);
            assert.ok(!err);
            done();
        });
    });
});