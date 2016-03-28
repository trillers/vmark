var u = require('../../../../app/util');
var context = require('../../../../context/context');

var Poster = require('./Poster');

module.exports.Poster = Poster(context.domainBuilder.main);

u.extend(context.models, module.exports);