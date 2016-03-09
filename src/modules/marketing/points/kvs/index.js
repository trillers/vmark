var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var Points = require('./Points');

module.exports.points = Promise.promisifyAll(new Points(context));

u.extend(context.kvs, module.exports);