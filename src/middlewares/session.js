var session = require('koa-generic-session');
//var redisStore = require('koa-redis');
var settings = require('@private/base-settings').redis;
var Store = require('./session-store');

module.exports = function(){
    return session({
        key: 'koss:test_sid',
        prefix: 'koss:test',
        cookie: {
            maxAge: 2*60000*60
        },
        //store: redisStore({host: settings.host, port: settings.port, pass: settings.auth}),
        store: new Store(),
        reconnectTimeout: 100
    });
}