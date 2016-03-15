var u = require('../../../../app/util');
var context = require('../../../../context/context');

var TenantUser = require('./TenantUser');

module.exports.TenantUser = TenantUser(context.domainBuilder.main);

u.extend(context.models, module.exports);