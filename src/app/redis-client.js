var _ = require('underscore');
var settings = require('@private/base-settings').redis;
var logger = require('./logging').logger;
var redis = require('redis');
var DEFAULT_NAME = 'default';
var clients = {};
var options = [
    "host",
    "port",
    "path",
    "url",
    "parser",
    "string_numbers",
    "return_buffers",
    "detect_buffers",
    "socket_keepalive",
    "no_ready_check",
    "enable_offline_queue",
    "retry_max_delay",
    "connect_timeout",
    "max_attempts",
    "retry_unfulfilled_commands",
    "password",
    "db",
    "family",
    "disable_resubscribing",
    "rename_commands",
    "tls",
    "prefix",
    "retry_strategy"
];

/*
 * logging methods
 */
var infolog = function (msg) {
    return function() {
        logger.info(msg, arguments);
    }
};
var warnlog = function (msg) {
    return function() {
        logger.warn(msg, arguments);
    }
};
var errorlog = function (msg) {
    return function() {
        logger.error(msg, arguments);
    }
};

var redisClient = function(name){
    name = name || DEFAULT_NAME;
    if(clients[name]) return clients[name];
    return clients[name] = createRedisClient(name);
};

var createRedisClient = function(name){
    var redisClient = {};
    if (settings.mode == 'single') {
        redisClient = redis.createClient(_.pick.apply(null, [settings].concat(options))); //TODO: need options
    } else {
        redisClient = null; //TODO: sentinel
    }

    if (settings.auth != '') {redisClient.auth(settings.auth);}

    var url = 'redis://' + redisClient.address;
    redisClient.on('connect'     , infolog('Redis client ' + name + ' is connecting to ' + url));
    redisClient.on('ready'       , infolog('Redis client ' + name + ' is ready'));
    redisClient.on('reconnecting', warnlog('Redis client ' + name + ' is reconnecting to ' + url));
    redisClient.on('error'       , errorlog('Redis client ' + name + ' error happens'));
    redisClient.on('end'         , infolog('Redis client ' + name + ' is ended'));
    return redisClient;
};

module.exports = redisClient;
