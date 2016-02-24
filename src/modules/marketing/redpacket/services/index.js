var u = require('../../../../app/util');
var context = require('../../../../context/context');

var ActivityRedpacketService = require('./ActivityRedpacketService');
var RedpacketParticipantService = require('./RedpacketParticipantService');

module.exports.activityRedpacketService = new ActivityRedpacketService(context);
module.exports.redpacketParticipantService = new RedpacketParticipantService(context);

u.extend(context.services, module.exports);