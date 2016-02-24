var u = require('../../../../app/util');
var context = require('../../../../context/context');

var ActivityPointsService = require('./ActivityPointsService');
var PointsParticipantService = require('./PointsParticipantService');

module.exports.activityPointsService = new ActivityPointsService(context);
module.exports.pointsParticipantService = new PointsParticipantService(context);

u.extend(context.services, module.exports);