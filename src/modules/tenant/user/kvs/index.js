var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var TenantUser = require('./TenantUser');
var AtToOpenid = require('./AtToOpenid');
var OpenidToId = require('./OpenidToId');
var OtToOpenid = require('./OtToOpenid');

module.exports.tenantUser = Promise.promisifyAll(new TenantUser(context));
module.exports.atToOpenid = Promise.promisifyAll(new AtToOpenid(context));
module.exports.openidToId = Promise.promisifyAll(new OpenidToId(context));
module.exports.otToOpenid = Promise.promisifyAll(new OtToOpenid(context));

u.extend(context.kvs, module.exports);