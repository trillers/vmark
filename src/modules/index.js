var _exports = {};
_exports.org = require('./org');
_exports.media = require('./media');
_exports.platform = {};
_exports.platform.org = require('./platform/org');
_exports.platform.media = require('./platform/media');
_exports.platform.user = require('./platform/user');
_exports.platform.main = require('./platform/main');
_exports.tenant = {};
_exports.tenant.org = require('./tenant/org');
//_exports.tenant.media = require('./platform/media');
_exports.tenant.main = require('./tenant/main');

require('./system/wechatbot');
module.exports = _exports;