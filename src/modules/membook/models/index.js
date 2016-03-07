var u = require('../../../app/util');
var context = require('../../../context/context');

var Note = require('./Note');
module.exports.Note = Note(context.domainBuilder.main);

var Notebook = require('./Notebook');
module.exports.Notebook = Notebook(context.domainBuilder.main);

var Invitation = require('./Invitation');
module.exports.Invitation = Invitation(context.domainBuilder.main);

var UserNotebook = require('./UserNotebook');
module.exports.UserNotebook = UserNotebook(context.domainBuilder.main);

var Interaction = require('./Interaction');
module.exports.Interaction     = Interaction(context.domainBuilder.main);

var WechatSiteUser = require('./WechatSiteUser');
module.exports.WechatSiteUser     = WechatSiteUser(context.domainBuilder.main);

var User = require('./User');
module.exports.User     = User(context.domainBuilder.main);

u.extend(context.models, module.exports);