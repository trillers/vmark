var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var PosterService = require('./PosterService');
module.exports.posterService = Promise.promisifyAll(new PosterService(context));

u.extend(context.services, module.exports);