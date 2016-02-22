var assert = require('chai').assert;
var contextLoader = require('../../../../src/context');
var context = contextLoader.context;
before(function(done){
    contextLoader.check(function(){
        console.warn('done');
        done();
    });
});

describe('MembookService', function(){
    var openid = 'oqSpUuDlnKxHxwZa4xylKuyxaXNM';
    describe('saveById', function(){
        it('Succeed to save user biz by id', function(done){
            var membookService = context.services.membookService;
            membookService.handleOnSubscription(openid, function(err, auth){
                assert.ok(!err);
                console.info(auth);
                done();
            })
        });
    });
});
