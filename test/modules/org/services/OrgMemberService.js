var co = require('co');
var assert = require('chai').assert;
var contextLoader = require('../../../../src/context');
var context = contextLoader.context;
var logger = context.logger;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});
describe('OrgMemberService', function(){
    describe('update', function(){
        it('Succeed to update a org member', function(done){
            co(function*() {
                var service = context.services.orgMemberService;
                var orgMember = {
                    org: 'test'
                    , nickname: 'nick'
                    , headimgurl: 'imgurl'
                    , role: 'po'
                    , remark: 'mark'
                };
                var mem = yield service.createAsync(orgMember);
                var update = {
                    role: 'pa'
                }
                mem = yield service.updateByIdAsync(mem._id, update);
                assert.equal('pa', mem.role);
                done();
            });
        });

    });
});