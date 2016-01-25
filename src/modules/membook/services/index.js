var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context/context');

var NoteService = require('./NoteService');
module.exports.noteService = Promise.promisifyAll(new NoteService(context));

var InteractService = require('./InteractService');
module.exports.interactService = Promise.promisifyAll(new InteractService(context));

var WechatSiteUserService = require('./WechatSiteUserService');
module.exports.wechatSiteUserService = Promise.promisifyAll(new WechatSiteUserService(context));

var UserService = require('./UserService');
module.exports.userService = Promise.promisifyAll(new UserService(context));

var AuthenticationService = require('./AuthenticationService');
module.exports.authenticationService = Promise.promisifyAll(new AuthenticationService(context));

u.extend(context.services, module.exports);