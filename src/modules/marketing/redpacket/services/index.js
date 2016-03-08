var u = require('../../../../app/util');
var context = require('../../../../context/context');

var ActivityRedpacketService = require('./ActivityRedpacketService');
var RedpacketParticipantService = require('./RedpacketParticipantService');
var RedpacketPosterService = require('./RedpacketPosterService');

module.exports.activityRedpacketService = new ActivityRedpacketService(context);
module.exports.redpacketParticipantService = new RedpacketParticipantService(context);
module.exports.redpacketPosterService = new RedpacketPosterService(context);

u.extend(context.services, module.exports);