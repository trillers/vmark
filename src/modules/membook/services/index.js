var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context/context');

var NoteService = require('./NoteService');

module.exports.noteService = Promise.promisifyAll(new NoteService(context));

u.extend(context.services, module.exports);