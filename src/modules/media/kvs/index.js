var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context');

var WechatMedia = require('./WechatMedia');
var WechatMediaUser = require('./WechatMediaUser');

module.exports.wechatMedia = Promise.promisifyAll(new WechatMedia(context));
module.exports.wechatMediaUser = Promise.promisifyAll(new WechatMediaUser(context));

u.extend(context.kvs, module.exports);