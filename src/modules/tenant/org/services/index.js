var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var TenantOrgService = require('./TenantOrgService');
var TenantOrgMemberService = require('./TenantOrgMemberService');

module.exports.tenantOrgService = Promise.promisifyAll(new TenantOrgService(context));
module.exports.tenantOrgMemberService = Promise.promisifyAll(new TenantOrgMemberService(context));

u.extend(context.services, module.exports);