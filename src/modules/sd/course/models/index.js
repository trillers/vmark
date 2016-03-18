var u = require('../../../../app/util');
var context = require('../../../../context/context');

var Course = require('./Course');

module.exports.Course = Course(context.domainBuilder.main);

u.extend(context.models, module.exports);