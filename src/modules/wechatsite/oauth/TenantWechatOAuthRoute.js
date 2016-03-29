var u = require('../../../app/util');

/**
 *
 * @param hub Hub
 * @param options
 *      state: //
 *      scope: //
 *      handler: //handler after authorization succeeds
 *      errorHandler: //handler after authorization fails
 * @constructor
 */
var Route = function(bus, options) {
    this.bus = bus;
    u.extend(this, options);
};

Route.prototype.authorize = function*(ctx, wechatId){
    var url = yield this.bus.getAuthorizeUrl(this.state, this.scope, wechatId);
    ctx.response.status = 303;
    ctx.response.redirect(url);
};

module.exports = Route;
