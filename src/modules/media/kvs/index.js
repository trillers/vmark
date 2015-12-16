var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context/context');

var WechatMedia = require('./WechatMedia');

module.exports.wechatMedia = Promise.promisifyAll(new WechatMedia(context));

u.extend(context.kvs, module.exports);