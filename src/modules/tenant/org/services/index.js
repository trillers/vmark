var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context');

var TenantOrgService = require('./TenantOrgService');

module.exports.tenantOrgService = Promise.promisifyAll(new TenantOrgService(context));

u.extend(context.services, module.exports);