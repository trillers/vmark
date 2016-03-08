var hub = require('./oauth-wechat-hub');

require('./oauth-wechat-get-identity')(hub);
require('./oauth-wechat-get-base-info')(hub);
require('./oauth-wechat-get-user-info')(hub);

module.exports = hub;