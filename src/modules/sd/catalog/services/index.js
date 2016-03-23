var Promise = require('bluebird');
var u = require('../../../../app/util');
var context = require('../../../../context/context');

var CatalogService = require('./CatalogService');
module.exports.catalogService = Promise.promisifyAll(new CatalogService(context));

u.extend(context.services, module.exports);