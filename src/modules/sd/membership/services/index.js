var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var MembershipSerivce = require('./MembershipService');
module.exports.membershipService = Promise.promisifyAll(new MembershipSerivce(context));

u.extend(context.services, module.exports);