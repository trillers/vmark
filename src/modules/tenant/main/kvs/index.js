var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var TenantPrivilege = require('./TenantPrivilege');
module.exports.tenantPrivilege = Promise.promisifyAll(new TenantPrivilege(context));

u.extend(context.kvs, module.exports);