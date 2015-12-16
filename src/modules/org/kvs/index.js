var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context/context');

var Org = require('./Org');

module.exports.org = Promise.promisifyAll(new Org(context));

u.extend(context.kvs, module.exports);