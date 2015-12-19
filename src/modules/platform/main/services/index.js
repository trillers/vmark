var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var PlatformService = require('./PlatformService');
module.exports.platformService = Promise.promisifyAll(new PlatformService(context));

var SecurityService = require('./SecurityService');
module.exports.securityService = Promise.promisifyAll(new SecurityService(context));

u.extend(context.services, module.exports);