var hub = require('./oauth-wechat-hub');

require('./oauth-wechat-get-identity')(hub);

module.exports = hub;