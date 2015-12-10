var Promise = require('bluebird');
var co = require('co');
var cbUtil = require('../../../framework/callback');
var OrgType = require('../../common/models/TypeRegistry').item('OrgType');

var Service = function(context){
    this.context = context;
};

Service.prototype.registerOrg = function(openid, callback){
    co(function* (){
        try {
            var orgMemberService = this.context.services.orgMemberService;
            var orgAdmin = yield orgMemberService.createOrgAdminAsync(openid);
            var orgJson = {
                name: orgAdmin.nickname,
                type: OrgType.Personal.value(),
                administrative: false
            }
            var org = yield this.createAsync(orgJson);
            cbUtil.handleSingleValue(callback, null, org);
            console.log('success register org by openid: ' + openid);
        }catch(e){
            console.error('registerOrg err: ' + e);
            cbUtil.handleSingleValue(callback, e, null);
        }
    });
};

Service.prototype.create = function(orgJson, callback){
    var orgKv = this.context.kvs.org;
    var Org = this.context.models.Org;
    var org = new Org(orgJson);

    org.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save org: ' + err,
            'Succeed to save org');

        cbUtil.handleAffected(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            orgKv.saveById(obj, function(err, obj){
                if(callback) callback(err, obj);
            });
        }, err, result, affected);
    });
};

Service.prototype = Promise.promisifyAll(Service.prototype);

module.exports = Service;