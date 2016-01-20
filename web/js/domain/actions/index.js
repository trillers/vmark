var domain = require('../domain');

require('./wenode');
require('./wenode-boss');
require('./wenode-tenant');
require('./membook');

module.exports = domain.actions();