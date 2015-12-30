var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context/context');

var WebSocket = require('./WebSocket');

module.exports.ws = Promise.promisifyAll(new WebSocket(context));

u.extend(context.kvs, module.exports);