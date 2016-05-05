var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var Catalog = require('./Catalog');

module.exports.catalog = Promise.promisifyAll(new Catalog(context));

u.extend(context.kvs, module.exports);