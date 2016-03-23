var u = require('../../../../app/util');
var context = require('../../../../context/context');

var Distributor = require('./Distributor');

module.exports.Distributor = Distributor(context.domainBuilder.main);

u.extend(context.models, module.exports);