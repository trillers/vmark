var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var Course = require('./Course');

module.exports.course = Promise.promisifyAll(new Course(context));

u.extend(context.kvs, module.exports);