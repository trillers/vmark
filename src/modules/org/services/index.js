var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context');

var OrgService = require('./OrgService');
module.exports.orgService         = Promise.promisifyAll(new OrgService(context));

var OrgMemberService = require('./OrgMemberService');
module.exports.orgMemberService   = Promise.promisifyAll(new OrgMemberService(context));

var OrgMediaService = require('./OrgMediaService');
module.exports.orgMediaService   = Promise.promisifyAll(new OrgMediaService(context));


u.extend(context.services, module.exports);