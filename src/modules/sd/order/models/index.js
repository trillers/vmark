var u = require('../../../../app/util');
var context = require('../../../../context/context');

var Order = require('./Order');

module.exports.Order = Order(context.domainBuilder.main);

u.extend(context.models, module.exports);