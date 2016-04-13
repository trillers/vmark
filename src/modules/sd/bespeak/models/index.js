var u = require('../../../../app/util');
var context = require('../../../../context/context');

var Bespeak = require('./Bespeak');

module.exports.Bespeak = Bespeak(context.domainBuilder.main);

u.extend(context.models, module.exports);