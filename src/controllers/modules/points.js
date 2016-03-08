var settings = require('@private/vmark-settings');
var Router = require('koa-router');
var util = require('../../app/util');
var context = require('../../context/context');
var generateAuthFilter = require('../../modules/auth/middlewares/generateAuthFilter');
var needBaseInfoFilter = generateAuthFilter(1);
var needUserInfoFilter = generateAuthFilter(2);
var activityPointsService = context.services.activityPointsService;
var pointsParticipantService = context.services.pointsParticipantService;
var typeRegistry = require('../../modules/common/models/TypeRegistry');
var UserType = typeRegistry.item('UserType');
var _ = require('underscore');

module.exports = function(){
    var router = new Router();
    router.prefix('/marketing/points');
    require('../../app/routes-spa')(router);

    router.get('/clear', function *(){
        this.cookies.set('token', null, {maxAge: 1});
        this.session.authenticated = false;
        this.session['user'] = null;
        this.body = 'clear successful!!';
    });

    router.get('/points', needBaseInfoFilter, function *(){
        var id = this.query.id;
        var user = this.session.auth && this.session.auth.user || {};
        var points = yield activityPointsService.loadById(id);
        if(points && points.lFlg === 'a'){
            var status = yield activityPointsService.getStatus(points, user);

            if(status.participant){
                this.redirect('/marketing/points/participant?id=' + status.participant);
            }else {
                util.extend(points, status);
                var participants = yield activityPointsService.getRankingList(points._id, 200);
                yield activityPointsService.increaseViews(points._id);
                yield this.render('/marketing/points/points', {points: points, participants: participants});
            }
        }else{
            yield this.render('/marketing/points/error', {error: '活动暂未开放'});
        }
    });

    router.get('/participant', needBaseInfoFilter, function *(){
        var id = this.query.id;
        var user = this.session.auth && this.session.auth.user || {};
        if(user.type === UserType.Customer.value()) {
            var participant = yield pointsParticipantService.loadById(id);
            if(participant) {
                if (participant.points.lFlg === 'a') {
                    var status = yield pointsParticipantService.getStatus(participant, user);
                    util.extend(participant, status);
                    var participants = yield activityPointsService.getRankingList(participant.points._id, 200);
                    yield activityPointsService.increaseViews(participant.points._id);
                    yield this.render('/marketing/points/participant', {
                        participant: participant,
                        participants: participants
                    });
                } else {
                    yield this.render('/marketing/points/error', {error: '活动暂未开放'});
                }
            }else{
                yield this.render('/marketing/points/error', {error: '页面不存在'});
            }
        }else{
            yield this.render('/marketing/points/error', {error: '请用微信浏览器打开该页面'});
        }
    });

    router.get('/join', needUserInfoFilter, function *(){
        var id = this.query.id;
        var user = this.session.auth && this.session.auth.user || {};
        if(user.type === UserType.Customer.value() && user.openid) {
            var points = yield activityPointsService.loadById(id);
            if (points) {
                yield this.render('/marketing/points/join', {
                    headimgurl: user.headimgurl,
                    nickname: user.nickname,
                    pointsId: points._id
                });
            } else {
                yield this.render('/marketing/points/error', {error: '页面不存在'});
            }
        }else{
            yield this.render('/marketing/points/error', {error: '请用微信浏览器打开该页面'});
        }
    });

    return router.routes();
};