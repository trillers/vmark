var u = require('../../../app/util');
var context = require('../../../context');

var Org = require('./Org');
var OrgMember = require('./OrgMember');

module.exports.Org        = Org(context.domainBuilder.main);
module.exports.OrgMember  = OrgMember(context.domainBuilder.main);

u.extend(context.models, module.exports);