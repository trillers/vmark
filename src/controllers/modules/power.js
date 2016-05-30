var settings = require('@private/vmark-settings');
var Router = require('koa-router');
var util = require('../../app/util');
var context = require('../../context/context');
var generateAuthFilter = require('../../modules/auth/middlewares/generateAuthFilter');
var needBaseInfoFilter = generateAuthFilter(1);
var needUserInfoFilter = generateAuthFilter(2);
var powerActivityService = context.services.powerActivityService;
var powerParticipantService = context.services.powerParticipantService;
var typeRegistry = require('../../modules/common/models/TypeRegistry');
var UserType = typeRegistry.item('UserType');
var PowerType = typeRegistry.item('PowerType');

var _ = require('underscore');

module.exports = function(){
    var router = new Router();
    router.prefix('/marketing/power');
    require('../../app/routes-spa')(router);
    
    router.get('/clear', function *(){
        this.cookies.set('token', null, {maxAge: 1});
        this.session.authenticated = false;
        this.session['user'] = null;
        this.body = 'clear successful!!';
    });

    router.get('/activity', needBaseInfoFilter, function *(){
        var id = this.query.id;
        var user = this.session.auth && this.session.auth.user;
        var activity = yield powerActivityService.loadById(id);
        if(activity && activity.lFlg === 'a'){
            var status = yield powerActivityService.getStatus(activity, user);

            if(status.participant){
                this.redirect('/marketing/power/participant?id=' + status.participant);
            }else {
                util.extend(activity, status);
                var participants = yield powerActivityService.getParticipantRankingList(activity._id, 200);
                yield powerActivityService.increaseViews(activity._id);
                if(activity.type === PowerType.RedPacket.value()) {
                    yield this.render('/marketing/power/activity-redpacket', {activity: activity, participants: participants});
                }else if(activity.type === PowerType.Points.value()) {
                    yield this.render('/marketing/power/activity-points', {activity: activity, participants: participants});
                }
            }
        }else{
            yield this.render('/marketing/power/error', {error: '活动暂未开放'});
        }
    });

    router.get('/participant', needBaseInfoFilter, function *(){
        var id = this.query.id;
        var user = this.session.auth && this.session.auth.user;
        if(user) {
            var participant = yield powerParticipantService.loadById(id);
            if(participant) {
                if(!participant.phone){
                    this.redirect('/marketing/power/fullInfo?id=' + participant._id);
                }else {
                    if (participant.activity.lFlg === 'a') {
                        var status = yield powerParticipantService.getStatus(participant, user);
                        util.extend(participant, status);
                        var participants = yield powerActivityService.getParticipantRankingList(participant.activity._id, 200);
                        yield powerActivityService.increaseViews(participant.activity._id);
                        if (participant.activity.type === PowerType.RedPacket.value()) {
                            yield this.render('/marketing/power/participant-redpacket', {
                                participant: participant,
                                participants: participants
                            });
                        } else if (participant.activity.type === PowerType.Points.value()) {
                            yield this.render('/marketing/power/participant-points', {
                                participant: participant,
                                participants: participants
                            });
                        }
                    } else {
                        yield this.render('/marketing/power/error', {error: '活动暂未开放'});
                    }
                }
            }else{
                yield this.render('/marketing/power/error', {error: '页面不存在'});
            }
        }else{
            yield this.render('/marketing/power/error', {error: '请用微信浏览器打开该页面'});
        }
    });

    router.get('/new/participant', needBaseInfoFilter, function *(){
        var id = this.query.id;
        var user = this.session.auth && this.session.auth.user;
        if(user) {
            var participant = yield powerParticipantService.loadById(id);
            if(participant) {
                if(!participant.phone){
                    this.redirect('/marketing/power/fullInfo?id=' + participant._id);
                }else {
                    if (participant.activity.lFlg === 'a') {
                        var status = yield powerParticipantService.getStatus(participant, user);
                        util.extend(participant, status);
                        var participants = yield powerActivityService.getParticipantRankingList(participant.activity._id, 200);
                        yield powerActivityService.increaseViews(participant.activity._id);
                        if (participant.activity.type === PowerType.RedPacket.value()) {
                            yield this.render('/marketing/power/participant-redpacket', {
                                participant: participant,
                                participants: participants
                            });
                        } else if (participant.activity.type === PowerType.Points.value()) {
                            yield this.render('/marketing/power/participant-points', {
                                participant: participant,
                                participants: participants
                            });
                        }
                    } else {
                        yield this.render('/marketing/power/error', {error: '活动暂未开放'});
                    }
                }
            }else{
                yield this.render('/marketing/power/error', {error: '页面不存在'});
            }
        }else{
            yield this.render('/marketing/power/error', {error: '请用微信浏览器打开该页面'});
        }
    });

    router.get('/join', needUserInfoFilter, function *(){
        var id = this.query.id;
        var user = this.session.auth && this.session.auth.user;
        if(user && user.openid) {
            var activity = yield powerActivityService.loadById(id);
            if (activity) {
                yield this.render('/marketing/power/join', {
                    headimgurl: user.headimgurl,
                    nickname: user.nickname,
                    activityId: activity._id
                });
            } else {
                yield this.render('/marketing/power/error', {error: '页面不存在'});
            }
        }else{
                yield this.render('/marketing/power/error', {error: '请用微信浏览器打开该页面'});
        }
    });

    router.get('/fullInfo', needUserInfoFilter, function *(){
        var id = this.query.id;
        var user = this.session.auth && this.session.auth.user;
        if(user && user.openid) {
            yield this.render('/marketing/power/fullInfo', {participantId: id, headimgurl: user.headimgurl});
        }else{
            yield this.render('/marketing/power/error', {error: '请用微信浏览器打开该页面'});
        }
    });

    return router.routes();
};