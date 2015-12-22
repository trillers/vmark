var co = require('co');
var cbUtil = require('../../../framework/callback');
var OrgType = require('../../common/models/TypeRegistry').item('OrgType');

var Service = function(context){
    this.context = context;
};

Service.prototype.listMyGroups = function(tenantId, operatorId, callback){
    var Group = this.context.models.Group;
    //var orgMediaService = this.context.services.orgMediaService;
        //var medias = yield orgMediaService.listMyGroupsAsync(tenantId, operatorId);
    var conditions = {tenantId: tenantId, lFlg: 'a', operator: operatorId};
    Group.find(conditions, null, {lean: true}).exec(callback);
};

//Service.prototype.create = function(orgJson, callback){
//    var orgKv = this.context.kvs.org;
//    var Org = this.context.models.Org;
//    var org = new Org(orgJson);
//
//    org.save(function (err, result, affected) {
//        cbUtil.logCallback(
//            err,
//            'Fail to save org: ' + err,
//            'Succeed to save org');
//
//        cbUtil.handleAffected(function(err, doc){
//            var obj = doc.toObject({virtuals: true});
//            orgKv.saveById(obj, function(err, obj){
//                if(callback) callback(err, obj);
//            });
//        }, err, result, affected);
//    });
//};

module.exports = Service;