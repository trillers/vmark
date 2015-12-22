var co = require('co');
var cbUtil = require('../../../framework/callback');
var OrgType = require('../../common/models/TypeRegistry').item('OrgType');

var Service = function(context){
    this.context = context;
};

Service.prototype.listMyGroups = function(tenantId, operatorId, callback){
    //var orgKv = this.context.kvs.org;
    //var Group = this.context.models.Group;
    //var org = new Org(orgJson);

    co(function*(){


    });

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