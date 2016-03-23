var u = require('../../../../app/util');
var context = require('../../../../context/context');

var Catalog = require('./Catalog');

module.exports.Catalog = Catalog(context.domainBuilder.main);

u.extend(context.models, module.exports);