var u = require('../../../app/util');
var context = require('../../../context/context');

var WechatMedia = require('./WechatMedia');
var WechatMediaSetting = require('./WechatMediaSetting');
var WechatMediaUser = require('./WechatMediaUser');

module.exports.WechatMedia     = WechatMedia(context.domainBuilder.main);
module.exports.WechatMediaSetting     = WechatMediaSetting(context.domainBuilder.main);
module.exports.WechatMediaUser = WechatMediaUser(context.domainBuilder.main);

u.extend(context.models, module.exports);