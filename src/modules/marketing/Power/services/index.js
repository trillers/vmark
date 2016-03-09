var u = require('../../../../app/util');
var context = require('../../../../context/context');

var PowerActivityService = require('./PowerActivityService');
var PowerParticipantService = require('./PowerParticipantService');

module.exports.powerActivityService = new PowerActivityService(context);
module.exports.powerParticipantService = new PowerParticipantService(context);

u.extend(context.services, module.exports);