var util = require('util');
var cbUtil = require('../../../../framework/callback');
var PartyType = require('../../../common/models/TypeRegistry').item('PartyType');
var IntegrationType = require('../../../common/models/TypeRegistry').item('IntegrationType');
var OrgService = require('./../../../org/services/OrgService');

var Service = function(context){
    this.context = context;
};

util.inherits(Service, OrgService);

Service.prototype.loadIntegratedOrg = function(externalId, callback){
    //TODO
};

Service.prototype.createIntegratedOrg = function(externalId, callback){
    //TODO
};

module.exports = Service;