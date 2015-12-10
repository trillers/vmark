var util = require('util');
var cbUtil = require('../../../../framework/callback');
var PartyType = require('../../../common/models/TypeRegistry').item('PartyType');
var IntegrationType = require('../../../common/models/TypeRegistry').item('IntegrationType');
var OrgService = require('./../../../tenant/services/OrgService');

var Service = function(context){
    this.context = context;
};

util.inherits(Service, OrgService);

Service.prototype.loadIntegratedTenant = function(externalId, callback){
    //TODO
};

Service.prototype.createIntegratedTenant = function(externalId, callback){
    //TODO
};

module.exports = Service;