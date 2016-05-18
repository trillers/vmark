var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context/context');

var WechatMediaService = require('./WechatMediaService');
var WechatMediaSettingService = require('./WechatMediaSettingService');
var WechatMediaUserService = require('./WechatMediaUserService');

module.exports.wechatMediaService = Promise.promisifyAll(new WechatMediaService(context));
module.exports.wechatMediaSettingService = Promise.promisifyAll(new WechatMediaSettingService(context));
module.exports.wechatMediaUserService = Promise.promisifyAll(new WechatMediaUserService(context));

u.extend(context.services, module.exports);