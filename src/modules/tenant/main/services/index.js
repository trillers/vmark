var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var TenantService = require('./TenantService');

module.exports.tenantService = Promise.promisifyAll(new TenantService(context));

u.extend(context.services, module.exports);