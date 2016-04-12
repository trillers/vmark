var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var OrderService = require('./OrderService');
module.exports.orderService = Promise.promisifyAll(new OrderService(context));

u.extend(context.services, module.exports);