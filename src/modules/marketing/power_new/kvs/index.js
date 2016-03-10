var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var Power = require('./Power');
var Poster = require('./Poster');

module.exports.power = Promise.promisifyAll(new Power(context));
module.exports.poster = Promise.promisifyAll(new Poster(context));

u.extend(context.kvs, module.exports);