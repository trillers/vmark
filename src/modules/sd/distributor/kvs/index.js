var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var Distributor = require('./Distributor');

module.exports.distributor = Promise.promisifyAll(new Distributor(context));

u.extend(context.kvs, module.exports);