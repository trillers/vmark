var u = require('../../../../app/util');
var context = require('../../../../context/context');

var ActivityPoints = require('./ActivityPoints');
var PointsParticipant = require('./PointsParticipant');

module.exports.ActivityPoints = ActivityPoints(context.domainBuilder.main);
module.exports.PointsParticipant = PointsParticipant(context.domainBuilder.main);

u.extend(context.models, module.exports);