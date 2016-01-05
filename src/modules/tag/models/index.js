var u = require('../../../app/util');
var context = require('../../../context/context');

var Tag = require('./Tag');

module.exports.Tag        = Tag(context.domainBuilder.main);

u.extend(context.models, module.exports);