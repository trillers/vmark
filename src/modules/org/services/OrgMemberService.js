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

Service.prototype = Promise.promisifyAll(Service.prototype);
module.exports = Service;