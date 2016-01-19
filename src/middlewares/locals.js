var settings = require('vmark-settings');
var resources = require('vmark-settings').resources;
var typeRegistry = require('../modules/common/models/TypeRegistry');
var env = settings.env.NODE_ENV;
var debug = env != 'production';
var __app = {
    settings: {
        api: settings.api,
        app: settings.app,
        env: settings.env
    },
    enums: typeRegistry.dict(),
    resources: resources
};
__app.settings.env.debug = debug;
__app.settings.app.url = 'http://'+__app.settings.app.domain;

var processor = function* (next) {
    this.state.__app = __app;
    this.state.__page = {};
    this.state.__page.browser = this.basics.browser;
    this.state.__page.url = this.request.href;
    this.state.__page.baseUrl = this.request.origin;
    this.state.__page.user = this.session.auth ? this.session.auth.user : {};
    this.state.__page.bot = this.session.auth ? this.session.auth.bot : {};
    this.state.__page.tenantId = this.session.auth ? this.session.auth.tenantId : '';
    yield next;
};

module.exports = processor;