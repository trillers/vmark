var context = require('../../context/context');
var wechatMediaUserService = context.services.wechatMediaUserService;
var wechatMediaService = context.services.wechatMediaService;
var wechatBotManager = context.wechatBotManager;
var fileService = require('../../modules/file/services/FileService');
var lifeFlagEnum = require('../../framework/model/enums').LifeFlag;
var broadcastMessageService = require('../../modules/message/services/BroadcastMessageService');
var MsgContentType = require('../../modules/common/models/TypeRegistry').item('MsgType');
var BroadcastType = require('../../modules/common/models/TypeRegistry').item('BroadcastType');

module.exports = function(router){
    router.post('/broadcastTxt', function *(){
        try {
            var botId = this.request.body.botId;//bot openid
            var bot = wechatBotManager.getWechatBot(botId);
            var msg = this.request.body.msg;
            var media = yield wechatMediaService.findBotByOpenidAsync(botId);
            if(media){
                var broadcastMessage = {
                    from: botId,
                    contentType: MsgContentType.text.value(),
                    content: msg,
                    broadcastType: BroadcastType.single.value()
                }
                var params = {
                    conditions: {
                        host: media._id,
                        type: 'wbc'
                    }
                }
                var toUsers = [];
                var buIdArr = [];
                var wechatMediaUsers = yield wechatMediaUserService.findAsync(params);
                for (var i = 0; i < wechatMediaUsers.length; i++) {
                    console.log('*************************');
                    console.log(wechatMediaUsers[i].remark);
                    toUsers.push(wechatMediaUsers[i]._id);
                    buIdArr.push(wechatMediaUsers[i].remark);
                }
                console.error(buIdArr);
                buIdArr = ['独自等待', '包三哥', '祺天大圣', '小小星星妹'];
                bot.broadcastTxtToContacts(buIdArr, msg);

                broadcastMessage.toUsers = toUsers;
                var msg = yield broadcastMessageService.createAsync(broadcastMessage);
                this.body = {success: true, err: null, msg: msg};
            }else{
                console.log('failed to broadcastTxt err: no such bot');
                this.body = {success: false, err: 'no such bot'};
            }
        } catch (e) {
            console.log('failed to broadcastTxt err: ' + e);
            this.body = {success: false, err: e};
        }
    });

    router.post('/broadcastImg', function *(){
        try {
            var botId = this.request.body.botId;//bot openid
            var bot = wechatBotManager.getWechatBot(botId);
            var media_id = this.request.body.media_id;
            var media = yield wechatMediaService.findBotByOpenidAsync(botId);
            if(media){
                var broadcastMessage = {
                    from: botId,
                    contentType: MsgContentType.image.value(),
                    media_id: media_id,
                    broadcastType: BroadcastType.single.value()
                }
                var params = {
                    conditions: {
                        host: media._id,
                        type: 'wbc'
                    }
                }
                var toUsers = [];
                var buIdArr = [];
                var wechatMediaUsers = yield wechatMediaUserService.findAsync(params);
                var image = yield fileService.loadAsync(media_id);
                for (var i = 0; i < wechatMediaUsers.length; i++) {
                    console.log('*************************');
                    console.log(wechatMediaUsers[i].remark);
                    toUsers.push(wechatMediaUsers[i]._id);
                    buIdArr.push(wechatMediaUsers[i].remark);
                }
                console.error(buIdArr);
                buIdArr = ['独自等待', '包三哥', '祺天大圣', '小小星星妹'];

                bot.broadcastImgToContacts(buIdArr, image.path);

                broadcastMessage.toUsers = toUsers;
                var msg = yield broadcastMessageService.createAsync(broadcastMessage);
                this.body = {success: true, err: null, msg: msg};
            }else{
                console.log('failed to broadcastImg err: no such bot');
                this.body = {success: false, err: 'no such bot'};
            }

        } catch (e) {
            console.log('failed to broadcastImg err: ' + e);
            this.body = {success: false, err: e};
        }
    });

    router.get('/broadcastHistory', function *(){
        var botId = this.query.botId;
        var params = {
            conditions:{
                from: botId
            },
            sort: {
                crtOn: -1
            }
        }
        try {
            var data = yield broadcastMessageService.findAsync(params);
            var broadcastHistory = data.length > 0 ? data : null;
            this.body = {history: broadcastHistory};
        }catch(err){
            console.log('load broadcastHistory err: ' + err);
            this.body = {history: null};
        }
    });
}