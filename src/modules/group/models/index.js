var u = require('../../../app/util');
var context = require('../../../context/context');

var Group = require('./Group');
module.exports.Group = Group(context.domainBuilder.main);

var GroupMember = require('./GroupMember');
module.exports.GroupMember = GroupMember(context.domainBuilder.main);

u.extend(context.models, module.exports);