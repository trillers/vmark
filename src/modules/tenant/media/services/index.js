var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var TenantWechatSiteService = require('./TenantWechatSiteService');
var TenantWechatSiteUserService = require('./TenantWechatSiteUserService');

module.exports.tenantWechatSiteService = Promise.promisifyAll(new TenantWechatSiteService(context));
module.exports.tenantWechatSiteUserService = Promise.promisifyAll(new TenantWechatSiteUserService(context));

u.extend(context.services, module.exports);