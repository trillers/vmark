var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var TenantWechatSite = require('./TenantWechatSite');
var TenantWechatSiteUser = require('./TenantWechatSiteUser');

module.exports.tenantWechatSite = Promise.promisifyAll(new TenantWechatSite(context));
module.exports.tenantWechatSiteUser = Promise.promisifyAll(new TenantWechatSiteUser(context));

u.extend(context.kvs, module.exports);