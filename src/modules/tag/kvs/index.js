var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context/context');

var Tag = require('./Tag');

module.exports.tag = Promise.promisifyAll(new Tag(context));

u.extend(context.kvs, module.exports);