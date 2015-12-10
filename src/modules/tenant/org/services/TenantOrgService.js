var util = require('util');
var cbUtil = require('../../../../framework/callback');
var PartyType = require('../../../common/models/TypeRegistry').item('PartyType');
var OrgService = require('./../../../org/services/OrgService');

var Service = function(context){
    this.context = context;
};

util.inherits(Service, OrgService);

Service.prototype.createPersonalTenant = function(orgJson, callback){
    orgJson.type = PartyType.Personal.value();
    this.createTenant(orgJson, callback);
};

Service.prototype.createOrganizationalTenant = function(orgJson, callback){
    orgJson.type = PartyType.Organizational.value();
    this.createTenant(orgJson, callback);
};

Service.prototype.createTenant = function(orgJson, callback){
    orgJson.administrative = false;
    this.create(orgJson, callback);
};

module.exports = Service;