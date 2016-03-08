var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var Redpacket = require('./Redpacket');
var Poster = require('./Poster');

module.exports.redpacket = Promise.promisifyAll(new Redpacket(context));
module.exports.poster = Promise.promisifyAll(new Poster(context));

u.extend(context.kvs, module.exports);