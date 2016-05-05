var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var TenantUserService = require('./TenantUserService');

module.exports.tenantUserService = Promise.promisifyAll(new TenantUserService(context));

u.extend(context.services, module.exports);