var util = require('util');
var OrgMemberRole = require('../../../common/models/TypeRegistry').item('OrgMemberRole');
var OrgMemberService = require('./../../../org/services/OrgMemberService');

var Service = function(context){
    this.context = context;
};

util.inherits(Service, OrgMemberService);

Service.prototype.createTenantOperation = function(memberJson, callback){
    memberJson.role = OrgMemberRole.TenantOperation.value();
    this.create(memberJson, callback);
};

Service.prototype.createTenantAdmin = function(memberJson, callback){
    memberJson.role = OrgMemberRole.TenantAdmin.value();
    this.create(memberJson, callback);
};


module.exports = Service;