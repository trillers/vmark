var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context/context');

<<<<<<< HEAD
var Note = require('./Note');

module.exports.note = Promise.promisifyAll(new Note(context));
=======
var User = require('./User');

module.exports.user = Promise.promisifyAll(new User(context));
>>>>>>> 81b69a8a33c798efa2f69f771fd7ac098be663f1

u.extend(context.kvs, module.exports);