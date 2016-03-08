var u = require('../../../../app/util');
var context = require('../../../../context/context');

var ActivityRedpacket = require('./ActivityRedpacket');
var RedpacketParticipant = require('./RedpacketParticipant');
var RedpacketPoster = require('./RedpacketPoster');

module.exports.ActivityRedpacket = ActivityRedpacket(context.domainBuilder.main);
module.exports.RedpacketParticipant = RedpacketParticipant(context.domainBuilder.main);
module.exports.RedpacketPoster = RedpacketPoster(context.domainBuilder.main);

u.extend(context.models, module.exports);