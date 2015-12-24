"use strict";
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
var groupMemberService = context.services.groupMemberService;

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

    router.post('/group/members', function*(){
        try{
            var members = this.request.body.members;
            var membersArr = [];
            for(let i=0,len=Object.keys(members).length; i<len; i++){
                var member = members[Object.keys(members)[i]];
                var groupMember = {
                    group: member['group'],
                    media: member['media'],
                    member: member['member']
                };
                var group = yield groupMemberService.createAsync(groupMember);
                var tmpMember = yield groupMemberService.findAllDetailByIdAsync(group._id);
                membersArr.push(tmpMember);
            }
            this.body = {success: true, error: null, data: membersArr};
        }catch(e){
            console.error(e);
            this.body = {error: e};
        }
    });

    router.post('/group/mediaUser', function*(){
        try{
            var medias = this.request.body.medias;
            var groupId = this.request.body.groupId;
            if(!medias.length){
                return this.body = {users: []};
            }
            var tmpGroupMembers = yield groupMemberService.findByGroupIdAsync(groupId);
            var existMembers = tmpGroupMembers.map(function(groupMember){
                return groupMember.member;
            });
            var users = [];
            for(let i=0, len= medias.length; i<len; i++){
                var media = medias[i];
                var params = {
                    condition: {
                        lFlg: 'a',
                        host: media,
                        type: 'wbc'
                    },
                    sort: {
                        crtOn: -1
                    }
                };
                var tmps = yield wechatMediaUserService.findAsync(params);
                var mediaUsers = tmps.filter(function(mediaUser){
                    return existMembers.indexOf(mediaUser._id) < 0
                });
                users.push({
                    media: media,
                    mediaUsers: mediaUsers
                });
            }
            this.body = {users: users};
        }catch(e){
            console.error(e);
            this.body = {error: e};
        }
    });

    router.get('/group', function*(){
        try{
            var groupId = this.query.id;
            var members = null;
            var group = yield groupService.loadByIdAsync(groupId);
            if(group.medias){
                var medias = [];
                for(let i=0, len=group.medias.length; i<len; i++){
                    let m = yield wechatMediaService.findBotsByIdAsync(group.medias[i]);
                    medias.push(m);
                }
                group.medias = medias;
            }
            members = yield groupMemberService.findAllDetailByGroupIdAsync(groupId);
            this.body = {group: group, members: members};
        }catch(e){
            console.error(e)
            this.body = {error: e};
        }
    });

    router.post('/group', function* (){
        try{
            var name = this.request.body.name;
            var type = this.request.body.type || GroupType.Selected.value();
            var desc = this.request.body.desc || '';
            var scope = this.request.body.scope || GroupScope.Operator.value();
            var user = this.session.auth.user;
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
            var groupOrigin = yield groupService.createAsync(group);
            var groupFinal = yield groupService.loadByIdAsync(groupOrigin._id);
            var mediasResult = [];
            for(let i=0,len=groupOrigin.medias.length; i<len; i++){
                let media = yield wechatMediaService.findByIdAsync(groupOrigin.medias[i]);
                mediasResult.push(media);
            }
            groupFinal.medias = mediasResult;
            this.body = {success: true, data: groupFinal}
        }catch(e){
            console.error(e);
            this.body = {success: false, err: e};
        }
    });

    router.delete('/group', function* (){
        try{
            var groupId = this.query.id;
            yield groupService.removeGroupByIdAsync(groupId);
            yield groupMemberService.removeGroupMembersByGroupIdAsync(groupId);
            this.body = {success: true, err: null};
        }catch(e){
            console.error(e);
            this.body = {success: false, err: e};
        }
    })
}