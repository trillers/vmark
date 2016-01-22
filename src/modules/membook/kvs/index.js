var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context/context');

var Note = require('./Note');
module.exports.note = Promise.promisifyAll(new Note(context));

var WechatSiteUser = require('./WechatSiteUser');
module.exports.wechatSiteUser = Promise.promisifyAll(new WechatSiteUser(context));

var User = require('./User');
module.exports.user = Promise.promisifyAll(new User(context));

var OpenidToId = require('./OpenidToId');
module.exports.openidToId = Promise.promisifyAll(new OpenidToId(context));

var AtToOpenid = require('./AtToOpenid');
module.exports.atToOpenid = Promise.promisifyAll(new AtToOpenid(context));

u.extend(context.kvs, module.exports);