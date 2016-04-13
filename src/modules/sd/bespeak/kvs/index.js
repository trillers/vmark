var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var Bespeak = require('./Bespeak');

module.exports.bespeak = Promise.promisifyAll(new Bespeak(context));

u.extend(context.kvs, module.exports);