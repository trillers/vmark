var u = require('../../../app/util');
var context = require('../../../context/context');

var Recontent = require('./Recontent');
module.exports.Recontent = Recontent(context.domainBuilder.main);

u.extend(context.models, module.exports);