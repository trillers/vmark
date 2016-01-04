var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context/context');

var TagService = require('./TagService');
module.exports.tagService         = Promise.promisifyAll(new TagService(context));

u.extend(context.services, module.exports);