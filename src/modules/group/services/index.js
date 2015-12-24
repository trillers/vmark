var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context/context');

var GroupService = require('./GroupService');
module.exports.groupService         = Promise.promisifyAll(new GroupService(context));

var GroupMemberService = require('./GroupMemberService');
module.exports.groupMemberService   = Promise.promisifyAll(new GroupMemberService(context));

u.extend(context.services, module.exports);