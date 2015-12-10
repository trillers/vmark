var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context');

var WechatMediaService = require('./WechatMediaService');
var WechatMediaUserService = require('./WechatMediaUserService');

module.exports.wechatMediaService = Promise.promisifyAll(new WechatMediaService(context));
module.exports.wechatMediaUserService = Promise.promisifyAll(new WechatMediaUserService(context));

u.extend(context.services, module.exports);