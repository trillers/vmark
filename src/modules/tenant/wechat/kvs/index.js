var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var TenantWechatToken = require('./TenantWechatToken');
module.exports.tenantWechatToken = Promise.promisifyAll(new TenantWechatToken(context));

var TenantWechatOAuthToken = require('./TenantWechatOAuthToken');
module.exports.tenantWechatOAuthToken = Promise.promisifyAll(new TenantWechatOAuthToken(context));

u.extend(context.kvs, module.exports);