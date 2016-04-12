var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var Order = require('./Order');

module.exports.order = Promise.promisifyAll(new Order(context));

u.extend(context.kvs, module.exports);