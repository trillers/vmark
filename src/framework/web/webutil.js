var util = {};

/**
 * Parse from user-agent http header to browser object
 *
 * How to get user agent string:
 * var ua = ctx.header['user-agent']; //koa
 * var ua = request.headers['user-agent']; //express
 *
 * @param ua
 * @returns {{}}
 */
util.parseUserAgent = function (ua) {
    var browser = {};

    if (/mobile/i.test(ua))
        browser.Mobile = true;

    if (/like Mac OS X/.test(ua)) {
        browser.iOS = /CPU( iPhone)? OS ([0-9\._]+) like Mac OS X/.exec(ua)[2].replace(/_/g, '.');
        browser.iPhone = /iPhone/.test(ua);
        browser.iPad = /iPad/.test(ua);
    }

    if (/Android/.test(ua))
        browser.Android = /Android ([0-9\.]+)[\);]/.exec(ua)[1];

    if (/webOS\//.test(ua))
        browser.webOS = /webOS\/([0-9\.]+)[\);]/.exec(ua)[1];

    if (/(Intel|PPC) Mac OS X/.test(ua))
        browser.Mac = /(Intel|PPC) Mac OS X ?([0-9\._]*)[\)\;]/.exec(ua)[2].replace(/_/g, '.') || true;

    if (/Windows NT/.test(ua))
        browser.Windows = /Windows NT ([0-9\._]+)[\);]/.exec(ua)[1];

    return browser;
};

module.exports = util;