var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var Redpacket = require('./Redpacket');

module.exports.redpacket = Promise.promisifyAll(new Redpacket(context));

u.extend(context.kvs, module.exports);