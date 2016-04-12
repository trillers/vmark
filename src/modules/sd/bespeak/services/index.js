var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var BespeakService = require('./BespeakService');
module.exports.bespeakService = Promise.promisifyAll(new BespeakService(context));

u.extend(context.services, module.exports);