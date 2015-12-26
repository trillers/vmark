var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context/context');

//var Recontent = require('./Recontent');
//module.exports.recontent = Promise.promisifyAll(new Recontent(context));

u.extend(context.kvs, module.exports);