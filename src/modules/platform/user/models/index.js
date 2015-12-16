var u = require('../../../../app/util');
var context = require('../../../../context/context');

var PlatformUser = require('./PlatformUser');

module.exports.PlatformUser = PlatformUser(context.domainBuilder.main);

u.extend(context.models, module.exports);