var hub = require('./oauth-bus');

require('./oauth-route-get-base-info')(hub);
require('./oauth-route-get-user-info')(hub);

module.exports = hub;