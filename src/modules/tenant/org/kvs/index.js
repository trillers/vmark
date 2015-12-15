var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context');

var TenantWechatBot = require('./TenantWechatBot');
module.exports.TenantWechatBot = Promise.promisifyAll(new TenantWechatBot(context));

u.extend(context.kvs, module.exports);