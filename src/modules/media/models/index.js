var u = require('../../../app/util');
var context = require('../../../context');

var WechatMedia = require('./WechatMedia');
var WechatMediaUser = require('./WechatMediaUser');

module.exports.WechatMedia     = WechatMedia(context.domainBuilder.main);
module.exports.WechatMediaUser = WechatMediaUser(context.domainBuilder.main);

u.extend(context.models, module.exports);