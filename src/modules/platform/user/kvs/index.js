var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var PlatformUser = require('./PlatformUser');
var AtToOpenid = require('./AtToOpenid');
var OpenidToId = require('./OpenidToId');
var OtToOpenid = require('./OtToOpenid');

module.exports.platformUser = Promise.promisifyAll(new PlatformUser(context));
module.exports.atToOpenid = Promise.promisifyAll(new AtToOpenid(context));
module.exports.openidToId = Promise.promisifyAll(new OpenidToId(context));
module.exports.otToOpenid = Promise.promisifyAll(new OtToOpenid(context));

u.extend(context.kvs, module.exports);