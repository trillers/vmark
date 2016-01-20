var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context/context');

var Note = require('./Note');

module.exports.note = Promise.promisifyAll(new Note(context));

u.extend(context.kvs, module.exports);