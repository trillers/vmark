var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var Poster = require('./Poster');

module.exports.sdPoster = Promise.promisifyAll(new Poster(context));

u.extend(context.kvs, module.exports);