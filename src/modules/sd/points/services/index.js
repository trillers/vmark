var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var PointsService = require('./PointsService');
module.exports.pointsService = Promise.promisifyAll(new PointsService(context));

u.extend(context.services, module.exports);