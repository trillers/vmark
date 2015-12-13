var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context');

var PlatformWechatSite = require('./PlatformWechatSite');
var PlatformWechatSiteUser = require('./PlatformWechatSiteUser');

module.exports.platformWechatSite = Promise.promisifyAll(new PlatformWechatSite(context));
module.exports.platformWechatSiteUser = Promise.promisifyAll(new PlatformWechatSiteUser(context));

u.extend(context.kvs, module.exports);