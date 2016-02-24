var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context/context');

var AuthenticationService = require('./AuthenticationService');
module.exports.authenticationService = Promise.promisifyAll(new AuthenticationService(context));

u.extend(context.services, module.exports);