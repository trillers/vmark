var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var Power = require('./Power');

module.exports.power = Promise.promisifyAll(new Power(context));

u.extend(context.kvs, module.exports);