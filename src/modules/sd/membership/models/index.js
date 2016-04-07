var u = require('../../../../app/util');
var context = require('../../../../context/context');

var Membership = require('./Membership');

module.exports.Membership = Membership(context.domainBuilder.main);

u.extend(context.models, module.exports);