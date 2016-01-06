var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context/context');

var RecontentService = require('./RecontentService');
module.exports.recontentService = Promise.promisifyAll(new RecontentService(context));

var AdlinkService = require('./AdlinkService');
module.exports.adlinkService = Promise.promisifyAll(new AdlinkService(context));

u.extend(context.services, module.exports);