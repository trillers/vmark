var u = require('../../../../app/util');
var context = require('../../../../context/context');

var PowerActivity = require('./PowerActivity');
var PowerParticipant = require('./PowerParticipant');

module.exports.PowerActivity = PowerActivity(context.domainBuilder.main);
module.exports.PowerParticipant = PowerParticipant(context.domainBuilder.main);

u.extend(context.models, module.exports);