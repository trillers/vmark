var settings = require('vmark-settings');
var resources = require('vmark-settings').resources;
var typeRegistry = require('../modules/common/models/TypeRegistry');
var webutil = require('../framework/web/webutil');
var time = require('../app/time');
var _ = require('underscore');
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

var getUrl = function(ctx){
    return ctx.protocol + '://' + ctx.get('host') + ctx.originalUrl;
};

var getBaseUrl = function(ctx){
    return ctx.protocol + '://' + ctx.get('host');
};

var getServerTime = function(){
    return time.currentTime();
}

var attachLocals = function* (next) {
    this.state.__app = __app;
    this.state.__page = {};

    var browser = webutil.parseUserAgent(this.header['user-agent']);
    this.state.browser = browser;
    this.state.__page.browser = browser;
    this.state.__page.url = getUrl(this);
    this.state.__page.baseUrl = getBaseUrl(this);
    this.state.__page.servertime = getServerTime();
    this.state.__page.user = this.session.auth ? this.session.auth.user : {};
    this.state.__page.bot = this.session.auth ? this.session.auth.bot : {};
    this.state.__page.tenantId = this.session.auth ? this.session.auth.tenantId : '';
    yield next;
};

module.exports = attachLocals;