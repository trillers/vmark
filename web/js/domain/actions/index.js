var domain = require('../domain');

require('./wenode');
require('./wenode-boss');
require('./wenode-tenant');

module.exports = domain.actions();