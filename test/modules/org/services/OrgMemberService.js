var context = require('../../../../src');
var assert = require('chai').assert;
var logger = context.logger;
var co = require('co');

before(function(done){
    setTimeout(function () {
        done();
    }, 2000);
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