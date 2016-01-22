var hub = require('./oauth-wechat-hub');

require('./oauth-wechat-get-identity')(hub);
require('./oauth-wechat-membook-get-base-info')(hub);
require('./oauth-wechat-membook-get-user-info')(hub);

module.exports = hub;