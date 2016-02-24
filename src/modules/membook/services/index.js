var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context/context');

var NoteService = require('./NoteService');
module.exports.noteService = Promise.promisifyAll(new NoteService(context));

var MediaService = require('./MediaService');
module.exports.mediaService = Promise.promisifyAll(new MediaService(context));

var NotebookService = require('./NotebookService');
module.exports.notebookService = Promise.promisifyAll(new NotebookService(context));

var InteractService = require('./InteractService');
module.exports.interactService = Promise.promisifyAll(new InteractService(context));

var WechatSiteUserService = require('./WechatSiteUserService');
module.exports.wechatSiteUserService = Promise.promisifyAll(new WechatSiteUserService(context));

var UserService = require('./UserService');
module.exports.userService = Promise.promisifyAll(new UserService(context));

var AuthenticationService = require('./AuthenticationService');
module.exports.authenticationService = Promise.promisifyAll(new AuthenticationService(context));

var MembookService = require('./MembookService');
module.exports.membookService = Promise.promisifyAll(new MembookService(context));

u.extend(context.services, module.exports);