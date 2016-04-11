var settings = require('@private/vmark-settings');
var Router = require('koa-router');
var util = require('../../app/util');
var context = require('../../context/context');
var tenantFilter = require('../../modules/tenant/common/middlewares/tenantFilter');
var authentication = require('../../modules/tenant/auth/authentication');
var generateAuthFilter = require('../../modules/tenant/auth/middlewares/generateAuthFilter');
var needBaseInfoFilter = generateAuthFilter(1);
var needUserInfoFilter = generateAuthFilter(2);
var powerActivityService = context.services.powerActivityService;
var powerParticipantService = context.services.powerParticipantService;
var typeRegistry = require('../../modules/common/models/TypeRegistry');
var UserType = typeRegistry.item('UserType');
var PowerType = typeRegistry.item('PowerType');

module.exports = function(){
    var router = new Router();
    router.prefix('/marketing/tenant/power');
    require('../../app/routes-spa')(router);

    router.get('/:wechatId/activity', tenantFilter, needBaseInfoFilter, function *(){
        var id = this.query.id;
        var auth = authentication.getAuthentication(this, this.wechatId)
        var user = auth && auth.user || {};
        var activity = yield powerActivityService.loadById(id);
        if (activity && activity.lFlg === 'a')  {
            var status = yield powerActivityService.getStatus(activity, user);
            if (status.participant) {
                this.redirect('/marketing/tenant/power/' + this.wechatId + '/participant?id=' + status.participant);
            } else {
                util.extend(activity, status);
                var participants = yield powerActivityService.getParticipantRankingList(activity._id, 200);
                yield powerActivityService.increaseViews(activity._id);
                if (activity.type === PowerType.RedPacket.value()) {
                    yield this.render('/marketing/tenant/power/activity-redpacket', {
                        activity: activity,
                        participants: participants
                    });
                } else if (activity.type === PowerType.Points.value()) {
                    yield this.render('/marketing/tenant/power/activity-points', {
                        activity: activity,
                        participants: participants
                    });
                }
            }
        } else {
            yield this.render('/marketing/tenant/power/error', {error: '活动暂未开放'});
        }
    });

    router.get('/:wechatId/participant', tenantFilter, needBaseInfoFilter, function *(){
        var id = this.query.id;
        var auth = authentication.getAuthentication(this, this.wechatId)
        var user = auth && auth.user;
        if(user) {
            var participant = yield powerParticipantService.loadById(id);
            if(participant) {
                if(!participant.phone){
                    this.redirect('/marketing/tenant/power/' + this.wechatId + '/full-info?id=' + participant._id);
                }else {
                    if (participant.activity.lFlg === 'a') {
                        var status = yield powerParticipantService.getStatus(participant, user);
                        util.extend(participant, status);
                        var participants = yield powerActivityService.getParticipantRankingList(participant.activity._id, 200);
                        yield powerActivityService.increaseViews(participant.activity._id);
                        if (participant.activity.type === PowerType.RedPacket.value()) {
                            yield this.render('/marketing/tenant/power/participant-redpacket', {
                                participant: participant,
                                participants: participants
                            });
                        } else if (participant.activity.type === PowerType.Points.value()) {
                            yield this.render('/marketing/tenant/power/participant-points', {
                                participant: participant,
                                participants: participants
                            });
                        }
                    } else {
                        yield this.render('/marketing/tenant/power/error', {error: '活动暂未开放'});
                    }
                }
            }else{
                yield this.render('/marketing/tenant/power/error', {error: '页面不存在'});
            }
        }else{
            yield this.render('/marketing/tenant/power/error', {error: '请用微信浏览器打开该页面'});
        }
    });

    router.get('/:wechatId/join', tenantFilter, needUserInfoFilter, function *(){
        var id = this.query.id;
        var auth = authentication.getAuthentication(this, this.wechatId)
        var user = auth && auth.user;
        if(user && user.openid) {
            var activity = yield powerActivityService.loadById(id);
            if (activity) {
                yield this.render('/marketing/tenant/power/join', {
                    headimgurl: user.headimgurl,
                    nickname: user.nickname,
                    activityId: activity._id,
                    wechatId: this.wechatId
                });
            } else {
                yield this.render('/marketing/tenant/power/error', {error: '页面不存在'});
            }
        }else{
                yield this.render('/marketing/tenant/power/error', {error: '请用微信浏览器打开该页面'});
        }
    });

    router.get('/:wechatId/full-info', tenantFilter, needUserInfoFilter, function *(){
        var id = this.query.id;
        var auth = authentication.getAuthentication(this, this.wechatId)
        var user = auth && auth.user;
        if(user && user.openid) {
            yield this.render('/marketing/tenant/power/fullInfo', {participantId: id, headimgurl: user.headimgurl, wechatId: this.wechatId});
        }else{
            yield this.render('/marketing/tenant/power/error', {error: '请用微信浏览器打开该页面'});
        }
    });

    return router.routes();
};