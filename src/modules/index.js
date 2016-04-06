var _exports = {};
_exports.org = require('./org');
_exports.media = require('./media');
_exports.sd = require('./sd');

_exports.platform = {};
_exports.platform.org = require('./platform/org');
_exports.platform.media = require('./platform/media');
_exports.platform.user = require('./platform/user');
_exports.platform.main = require('./platform/main');
_exports.platform.tenant = require('./platform/tenant');

_exports.tenant = {};
_exports.tenant.wechat = require('./tenant/wechat');
_exports.tenant.org = require('./tenant/org');
//_exports.tenant.media = require('./tenant/media');
_exports.tenant.user = require('./tenant/user');
_exports.tenant.main = require('./tenant/main');
_exports.tenant.auth = require('./tenant/auth');

_exports.group = require('./group');
_exports.tag = require('./tag');
_exports.recontent = require('./recontent');
_exports.boss = {};
_exports.boss.main = require('./boss/main');
_exports.websocket = require('./websocket');
_exports.websocket = require('./wechat');
_exports.marketing = {};
_exports.marketing.power = require('./marketing/power_new');
_exports.authenticationService = require('./auth/services');

require('./system/wechatbot');
module.exports = _exports;