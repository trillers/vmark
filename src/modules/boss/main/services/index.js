var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var BossTenantService = require('./BossTenantService');

module.exports.bossTenantService = Promise.promisifyAll(new BossTenantService(context));

u.extend(context.services, module.exports);