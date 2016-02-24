var u = require('../../../../app/util');
var context = require('../../../../context/context');

var RedpacketService = require('./RedpacketService');
var ParticipantService = require('./ParticipantService');

module.exports.redpacketService = new RedpacketService(context);
module.exports.participantService = new ParticipantService(context);

u.extend(context.services, module.exports);