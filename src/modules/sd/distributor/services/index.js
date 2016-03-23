var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var DistributorService = require('./DistributorService');
module.exports.distributorService = Promise.promisifyAll(new DistributorService(context));

u.extend(context.services, module.exports);