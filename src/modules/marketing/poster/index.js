var PosterHandler = require('./PosterHandler');
var PosterType = require('../../common/models/TypeRegistry').item('PosterType');

module.exports.activityPosterHandler = new PosterHandler(PosterType.activity.value());
module.exports.participantPosterHandler = new PosterHandler(PosterType.participant.value());