var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context');

var PlatformOrgService = require('./PlatformOrgService');

module.exports.platformOrgService = Promise.promisifyAll(new PlatformOrgService(context));

u.extend(context.services, module.exports);