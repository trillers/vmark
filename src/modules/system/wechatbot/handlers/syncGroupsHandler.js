"use strict";
var context = require('../../../../context/context');
var co = require('co');
var TypeRegistry = require('../../../common/models/TypeRegistry')
var WechatMediaUserType = TypeRegistry.item('WechatMediaUserType');
var WechatMediaUserContactType = TypeRegistry.item('WechatMediaUserContactType');

module.exports = function (msg){
    co(function* (){
        var logger = context.logger;
        try{
            //msg.Data Array<{username, name}>
            var groups = msg.Data;
            console.error(msg);
            var botId = msg.AgentId;
            var wechatMediaService = context.services.wechatMediaService;
            var wechatMediaUserService = context.services.wechatMediaUserService;
            var media = yield wechatMediaService.findBotByOpenidAsync(botId);
            if(media && groups && groups.length){
                for(let i=0, len=groups.length; i<len; i++){
                    let group = groups[i];
                    group.remark = group.name || 'no_name';
                    let meidaUser = yield wechatMediaUserService.loadByRemarkAsync(group.remark);
                    /**
                     * mediaUser that own remark provided, nothing to do
                     */
                    if(meidaUser){
                        logger.info('Succeed to sync the contact, contact\'s remark is ' + contact.remark);
                    }
                    else{
                        /**
                         * have no such group, create a new one
                         * @type {{host: *, type: *, remark: (*|remark|{type}|string|string), nickname: *, headimgurl: *, sex: (*|sex|{type, default}|number)}}
                         */
                        let jsonForCreate = {
                            host: media._id,
                            type: WechatMediaUserType.WechatBotContact.value(),
                            contacttype: WechatMediaUserContactType.Group.value(),
                            remark: group.remark,
                            nickname: group.name
                        };
                        yield wechatMediaUserService.createAsync(jsonForCreate);
                    }
                }
            }
            logger.error('Failed to sync the contact, no such media');
        }
        catch(e){
            logger.error(e)
        }
    })
};