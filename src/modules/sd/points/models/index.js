var u = require('../../../../app/util');
var context = require('../../../../context/context');

var Points = require('./Points');

module.exports.Points = Points(context.domainBuilder.main);

u.extend(context.models, module.exports);