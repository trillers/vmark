var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var CourseService = require('./CourseService');
module.exports.courseService = Promise.promisifyAll(new CourseService(context));

u.extend(context.services, module.exports);