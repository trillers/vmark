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
    /**
     * MultiSend routers
     */
    router.post('/broadcastTxt', function *() {
        try {
            var msgArr = yield multiSend(this.request.body);
            this.body = {success: true, err: null, msgArr: msgArr};
        }catch(e){
            this.body = {success: false, err: e};
        }
    });

    router.post('/broadcastImg', function *() {
        try {
            var msgArr = yield multiSend(this.request.body);
            this.body = {success: true, err: null, msgArr: msgArr};
        }catch(e){
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

    /**
     * Contacts routers
     */
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

    /**
     * Group routers
     */
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
            console.error("*****************");
            console.error(medias);
            var groupId = this.request.body.groupId;
            if(!medias.length){
                return this.body = {users: []};
            }
            var tmpGroupMembers = yield groupMemberService.findByGroupIdAsync(groupId);
            var existMembers = tmpGroupMembers.map(function(groupMember){
                return groupMember.member;
            });
            console.log("exist members *************")
            console.error(existMembers.length)
            console.error(existMembers)
            var users = [];
            for(let i=0, len= medias.length; i<len; i++){
                let media = medias[i];
                let params = {
                    condition: {
                        lFlg: 'a',
                        host: media,
                        type: 'wbc'
                    },
                    sort: {
                        crtOn: -1
                    }
                };
                let tmps = yield wechatMediaUserService.findAsync(params);
                console.log("all members *************")
                console.log(tmps.length)
                console.log(tmps)
                let mediaUsers = tmps.filter(function(mediaUser){
                    return existMembers.indexOf(mediaUser._id) < 0
                });
                console.log("filtered members *************")
                console.log(mediaUsers.length)
                console.log(mediaUsers)
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

    /**
     * Helper for multi-send
     * @param body
     * @returns {Array}
     */
    function* multiSend(body){
        var type = body.msg ? 'txt' : 'image';
        var payload = body.msg ? body.msg : body.media_id;
        const groupId = body.groupId;
        var msgResult = [];
        var groupMembers =  yield groupMemberService.findByGroupIdAsync(groupId);
        // hm<openid, tos>
        var hm = {};
        for(let i=0, len=groupMembers.length; i<len; i++){
            let media = groupMembers[i].media;
            var mediaFull = yield wechatMediaService.loadByIdAsync(media);
            var customId = mediaFull.customId;
            if(!hm[customId]){
                hm[customId] = [];
            }
            hm[customId].push(groupMembers[i].member);
        }
        for(let openid in hm){
            let toFull = [];
            let tos = hm[openid];
            for(let i=0, len=tos.length; i<len; i++){
                let wcUser = yield wechatMediaUserService.loadByIdAsync(tos[i]);
                toFull.push(wcUser.remark);
            }
            let broadcastMessage = {
                toUsers: tos,
                from: openid,
                broadcastType: BroadcastType.single.value()
            };
            let bot = wechatBotManager.getWechatBot(openid);
            if(type === 'txt'){
                bot.broadcastTxtToContacts(toFull, payload);
                broadcastMessage['contentType'] = MsgContentType.text.value();
                broadcastMessage['content'] = payload;
            }
            else if (type === 'image'){
                var image = yield fileService.loadAsync(payload);
                bot.broadcastImgToContacts(toFull, image.path);
                broadcastMessage['contentType'] = MsgContentType.image.value();
                broadcastMessage['media_id'] = payload;
            }
            let msgDoc = yield broadcastMessageService.createAsync(broadcastMessage);
            msgResult.push(msgDoc);
        }
        return msgResult;
    }
}