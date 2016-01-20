var u = require('../../../app/util');
var context = require('../../../context/context');

var Note = require('./Note');

module.exports.Note     = Note(context.domainBuilder.main);

u.extend(context.models, module.exports);