var co = require('co');
var logger = require('../../../app/logging').logger;
var QrChannelService = require('../../qrchannel/services/QrChannelService');
var wechatApi = require('../../wechat/common/api').api;
var context = require('../../../context/context');
var tenantService = context.services.tenantService;
var bindBotResults = tenantService.bindBotResults;
var loginHandler = require('./loginHandler');
var qrTypeRegistry = require('../../wechatsite/qr');

module.exports = function (emitter) {
    emitter.qr(function (event, context) {
        co(function*() {
            var sceneId = context.weixin.SceneId;
            var userOpenid = context.weixin.FromUserName;
            var wechatId = context.weixin.ToUserName;
            qrTypeRegistry.handle(sceneId, userOpenid, wechatId);

        });
    });
};