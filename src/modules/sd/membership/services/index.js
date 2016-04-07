var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var MembershipSerivce = require('./DistributorService');
module.exports.membershipSerivce = Promise.promisifyAll(new MembershipSerivce(context));

u.extend(context.services, module.exports);