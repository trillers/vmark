var co = require('co');
var cbUtil = require('../../../framework/callback');
var OrgType = require('../../common/models/TypeRegistry').item('OrgType');

var Service = function(context){
    this.context = context;
};

Service.prototype.loadById = function(id, callback){
    var Group = this.context.models.Group;
    Group.findById(id, null, {lean: true}).populate({path: 'operator'}).exec(callback);
};

Service.prototype.create = function(groupJson, callback){
    var groupKv = this.context.kvs.group;
    var Group = this.context.models.Group;
    var group = new Group(groupJson);
    group.save(function (err, result, affected) {
        cbUtil.logCallback(
            err,
            'Fail to save group: ' + err,
            'Succeed to save group');

        cbUtil.handleAffected(function(err, doc){
            var obj = doc.toObject({virtuals: true});
            groupKv.saveById(obj, function(err, obj){
                if(callback) callback(err, obj);
            });
        }, err, result, affected);
    });
};

Service.prototype.listMyGroups = function(tenantId, operatorId, callback){
    var Group = this.context.models.Group;
    var conditions = {org: tenantId, lFlg: 'a', operator: operatorId};
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