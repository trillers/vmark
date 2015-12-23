var context = require('../../context/context');
var fileService = require('../../modules/file/services/FileService');
var lifeFlagEnum = require('../../framework/model/enums').LifeFlag;
var broadcastMessageService = require('../../modules/message/services/BroadcastMessageService');
var typeRegistry = require('../../modules/common/models/TypeRegistry');
var MsgContentType = typeRegistry.item('MsgType');
var BroadcastType = typeRegistry.item('BroadcastType');
var GroupType = typeRegistry.item('GroupType');
var GroupScope = typeRegistry.item('GroupScope');
var wechatMediaUserService = context.services.wechatMediaUserService;
var wechatMediaService = context.services.wechatMediaService;
var wechatBotManager = context.wechatBotManager;
var tenantOrgMediaService = context.services.tenantOrgMediaService;
var orgMediaService = context.services.orgMediaService;
var groupService = context.services.groupService;

module.exports = function (router) {
    router.post('/broadcastTxt', function *() {
        try {
            var botId = this.request.body.botId;//bot openid
            var groupId = this.request.body.groupId;
            var bot = wechatBotManager.getWechatBot(botId);
            var msg = this.request.body.msg;
            var media = yield wechatMediaService.findBotByOpenidAsync(botId);
            if (media) {
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
            } else {
                console.log('failed to broadcastTxt err: no such bot');
                this.body = {success: false, err: 'no such bot'};
            }
        } catch (e) {
            console.log('failed to broadcastTxt err: ' + e);
            this.body = {success: false, err: e};
        }
    });

    router.post('/broadcastImg', function *() {
        try {
            var botId = this.request.body.botId;//bot openid
            var bot = wechatBotManager.getWechatBot(botId);
            var media_id = this.request.body.media_id;
            var media = yield wechatMediaService.findBotByOpenidAsync(botId);
            if (media) {
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
            } else {
                console.log('failed to broadcastImg err: no such bot');
                this.body = {success: false, err: 'no such bot'};
            }

        } catch (e) {
            console.log('failed to broadcastImg err: ' + e);
            this.body = {success: false, err: e};
        }
    });

    router.get('/broadcastHistory', function *() {
        var botId = this.query.botId;
        var params = {
            conditions: {
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
        } catch (err) {
            console.log('load broadcastHistory err: ' + err);
            this.body = {history: null};
        }
    });

    router.get('/contacts', function *() {
        var botId = this.query.botId;
        try {
            var media = yield wechatMediaService.findBotByOpenidAsync(botId);

            var params = {
                conditions: {
                    host: media._id,
                    type: 'wbc'
                },
                sort: {
                    crtOn: -1
                }
            }


            var contacts = yield wechatMediaUserService.findAsync(params);
            this.body = {contacts: contacts, error: null};
        } catch (err) {
            console.log('load contacts err: ' + err);
            this.body = {contacts: [], error: err};
        }
    });

    router.get('/allMyMedia', function* (){
        try{
            var tenantId = this.query.tenantId;
            var operator = this.query.operatorId;
            var medias = yield tenantOrgMediaService.loadAllMyManagedMediasAsync(tenantId, operator);
            this.body = {medias: medias};
        }catch(e){
            this.body = {error: e};
        }
    })

    router.get('/groups', function*(){
        try{
            var tenantId = this.query.tenantId;
            var operatorId = this.query.operatorId;
            var groups = yield groupService.listMyGroupsAsync(tenantId, operatorId);
            this.body = {groups: groups};
        }catch(e){
            this.body = {error: e};
        }
    })

    router.get('/group', function*(){
        try{
            var groupId = this.query.id;
            var group = yield groupService.loadByIdAsync(groupId);
            //this.body = {group: group};
        }catch(e){
            this.body = {error: e};
        }
    })

    router.post('/group', function* (){
        try{
            var name = this.request.body.name;
            var type = this.request.body.type || GroupType.Selected.value();
            var desc = this.request.body.desc || '';
            var scope = this.request.body.scope || GroupScope.Operator.value();
            var user = this.session.auth.user;
            console.log(user)
            var orgId = user.posts[0].org;
            var operator = this.request.body.operator || user.posts[0].member;
            var group = {
                name: name,
                type: type,
                desc: desc,
                scope: scope,
                org: orgId
            };
            if(scope === GroupScope.Tenant.value()){
                group['medias'] = yield orgMediaService.listMediasByIdAsync(orgId);
            }
            else if(scope === GroupScope.Operator.value()){
                group['operator'] = operator;
                group['medias'] = yield orgMediaService.listMediasByOperatorIdAsync(orgId, operator);
            }
            yield groupService.createAsync(group);
            this.body = {success: true, data: group}
        }catch(e){
            console.error(e);
            this.body = {success: false, err: e};
        }
    });
}