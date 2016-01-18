var hub = require('./oauth-wechat-hub');

require('./oauth-wechat-get-identity')(hub);
require('./oauth-wechat-get-membook-identity')(hub);

module.exports = hub;