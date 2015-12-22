var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context/context');

var Group = require('./Group');
module.exports.group = Promise.promisifyAll(new Group(context));

u.extend(context.kvs, module.exports);