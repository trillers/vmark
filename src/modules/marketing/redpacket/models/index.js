var u = require('../../../../app/util');
var context = require('../../../../context/context');

var Redpacket = require('./Redpacket');
var Participant = require('./Participant');

module.exports.Redpacket = Redpacket(context.domainBuilder.main);
module.exports.Participant = Participant(context.domainBuilder.main);

u.extend(context.models, module.exports);