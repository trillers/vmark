var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context/context');

var WechatToken = require('./WechatToken');
module.exports.wechatToken = Promise.promisifyAll(new WechatToken(context));

var WechatOAuth = require('./WechatOAuth');
module.exports.wechatOAuth = Promise.promisifyAll(new WechatOAuth(context));

u.extend(context.kvs, module.exports);