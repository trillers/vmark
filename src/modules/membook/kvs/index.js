var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context/context');

var User = require('./User');

module.exports.user = Promise.promisifyAll(new User(context));

u.extend(context.kvs, module.exports);