var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var Membership = require('./Membership');

module.exports.membership = Promise.promisifyAll(new Membership(context));

u.extend(context.kvs, module.exports);