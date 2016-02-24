var u = require('../../../../app/util');
var context = require('../../../../context/context');

var ActivityRedpacket = require('./ActivityRedpacket');
var RepacketParticipant = require('./RepacketParticipant');

module.exports.ActivityRedpacket = ActivityRedpacket(context.domainBuilder.main);
module.exports.RepacketParticipant = RepacketParticipant(context.domainBuilder.main);

u.extend(context.models, module.exports);