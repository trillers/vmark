var cbUtil = require('../../../framework/callback');
var Promise = require('bluebird');

var Service = function(context){
    this.context = context;
};

Service.prototype.create = function(OrgMemberJson, callback){
    var OrgMember = this.context.models.OrgMember;
    var member = new OrgMember(OrgMemberJson);
    member.save(function (err, result, affected) {
        //TODO: need logging
        cbUtil.handleAffected(callback, err, result, affected);
    });

};

Service.prototype.updateById = function(id, update, callback){
    var OrgMember = this.context.models.OrgMember;
    OrgMember.findByIdAndUpdate(id, update, {new: true}, function (err, result) {
        //TODO: need logging
        cbUtil.handleSingleValue(callback, err, result);
    });

};

Service.prototype = Promise.promisifyAll(Service.prototype);
module.exports = Service;