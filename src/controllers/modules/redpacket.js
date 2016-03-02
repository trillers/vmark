var settings = require('@private/vmark-settings');
var Router = require('koa-router');
var util = require('../../app/util');
var context = require('../../context/context');
var generateAuthFilter = require('../../modules/auth/middlewares/generateAuthFilter');
var needBaseInfoFilter = generateAuthFilter(1);
var needUserInfoFilter = generateAuthFilter(2);
var activityRedpacketService = context.services.activityRedpacketService;
var redpacketParticipantService = context.services.redpacketParticipantService;
var typeRegistry = require('../../modules/common/models/TypeRegistry');
var UserType = typeRegistry.item('UserType');
var _ = require('underscore');

module.exports = function(){
    var router = new Router();
    router.prefix('/marketing/redpacket');
    require('../../app/routes-spa')(router);
    
    router.get('/clear', function *(){
        this.cookies.set('token', null, {maxAge: 1});
        this.session.authenticated = false;
        this.session['user'] = null;
        this.body = 'clear successful!!';
    });

    router.get('/redpacket', needBaseInfoFilter, function *(){
        var id = this.query.id;
        var user = this.session.auth && this.session.auth.user || {};
        var redpacket = yield activityRedpacketService.loadById(id);
        if(redpacket && redpacket.lFlg === 'a'){
            var status = yield activityRedpacketService.getStatus(redpacket, user);
            console.error('++++++++++++++++++++++');
            console.log(status);
            if(status.participant){
                this.redirect('/marketing/redpacket/participant?id=' + status.participant);
            }else {
                util.extend(redpacket, status);
                var participants = yield activityRedpacketService.getRankingList(redpacket._id, 200);
                yield activityRedpacketService.increaseViews(redpacket._id);
                yield this.render('/marketing/redpacket/redpacket', {redpacket: redpacket, participants: participants});
            }
        }else{
            yield this.render('/marketing/redpacket/error', {error: '活动暂未开放'});
        }
    });

    router.get('/participant', needBaseInfoFilter, function *(){
        var id = this.query.id;
        var user = this.session.auth && this.session.auth.user || {};
        if(user.type === UserType.Customer.value()) {
            var participant = yield redpacketParticipantService.loadById(id);
            if(participant) {
                if (participant.redpacket.lFlg === 'a') {
                    var status = yield redpacketParticipantService.getStatus(participant, user);
                    util.extend(participant, status);
                    var participants = yield activityRedpacketService.getRankingList(participant.redpacket._id, 200);
                    yield activityRedpacketService.increaseViews(participant.redpacket._id);
                    yield this.render('/marketing/redpacket/participant', {
                        participant: participant,
                        participants: participants
                    });
                } else {
                    yield this.render('/marketing/redpacket/error', {error: '活动暂未开放'});
                }
            }else{
                yield this.render('/marketing/redpacket/error', {error: '页面不存在'});
            }
        }else{
            yield this.render('/marketing/redpacket/error', {error: '请用微信浏览器打开该页面'});
        }
    });

    router.get('/join', needUserInfoFilter, function *(){
        var id = this.query.id;
        var user = this.session.auth && this.session.auth.user || {};
        if(user.type === UserType.Customer.value() && user.openid) {
            var redpacket = yield activityRedpacketService.loadById(id);
            if (redpacket) {
                yield this.render('/marketing/redpacket/join', {
                    headimgurl: user.headimgurl,
                    nickname: user.nickname,
                    redpacketId: redpacket._id
                });
            } else {
                yield this.render('/marketing/redpacket/error', {error: '页面不存在'});
            }
        }else{
                yield this.render('/marketing/redpacket/error', {error: '请用微信浏览器打开该页面'});
        }
    });

    return router.routes();
};