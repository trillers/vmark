var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var TenantWechatBot = require('./TenantWechatBot');
module.exports.tenantWechatBot = Promise.promisifyAll(new TenantWechatBot(context));

u.extend(context.kvs, module.exports);