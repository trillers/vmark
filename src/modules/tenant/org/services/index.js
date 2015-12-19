var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var TenantOrgService = require('./TenantOrgService');
module.exports.tenantOrgService = Promise.promisifyAll(new TenantOrgService(context));

var TenantOrgMemberService = require('./TenantOrgMemberService');
module.exports.tenantOrgMemberService = Promise.promisifyAll(new TenantOrgMemberService(context));

var TenantOrgMediaService = require('./TenantOrgMediaService');
module.exports.tenantOrgMediaService = Promise.promisifyAll(new TenantOrgMediaService(context));

u.extend(context.services, module.exports);