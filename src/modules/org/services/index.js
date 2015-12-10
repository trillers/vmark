var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context');

var OrgService = require('./OrgService');
var OrgMemberService = require('./OrgMemberService');

module.exports.orgService         = Promise.promisifyAll(new OrgService(context));
module.exports.orgMemberService   = Promise.promisifyAll(new OrgMemberService(context));

u.extend(context.services, module.exports);