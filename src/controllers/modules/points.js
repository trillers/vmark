var settings = require('@private/vmark-settings');
var Router = require('koa-router');
var util = require('../../app/util');
var context = require('../../context/context');
var generateAuthFilter = require('../../modules/auth/middlewares/generateAuthFilter');
var needBaseInfoFilter = generateAuthFilter(1);
var needUserInfoFilter = generateAuthFilter(2);
var needSubscriptionFilter = generateAuthFilter(3);
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
            points.participateLink = this.protocol + '://' + settings.app.domain + '/marketing/points/join?id=' + points._id;
            points.join = '';
            points.joined = 'none';
            points.closed = 'none';
            points.noActivated = 'none';
            var participant = yield pointsParticipantService.filter({conditions: {user: user.id, points: points._id}});
            if(participant.length > 0){
                points.join = 'none';
                points.joined = '';
                this.redirect('/marketing/points/participant?id=' + participant[0]._id);
            }else {
                var today = new Date();
                var active = today >= new Date(points.startTime) && today <= new Date(points.endTime);
                if(!active){
                    points.join = 'none';
                    points.joined = 'none';
                    if(today < new Date(points.startTime)){
                        points.noActivated = '';
                    }
                    if(today > new Date(points.endTime)){
                        points.closed = '';
                    }
                }
                var params = {
                    conditions: {
                        points: points._id,
                        lFlg: 'a'
                    },
                    sort: {
                        total_points: -1
                    },
                    populate: [
                        {
                            path: 'user'
                        }
                    ]
                }
                var participants = yield pointsParticipantService.filter(params);
                console.warn('**************************');
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
            if (participant && participant.points.lFlg === 'a') {
                participant.participateLink = this.protocol + '://' + settings.app.domain + '/marketing/points/join?id=' + participant.points._id;
                participant.join = '';
                participant.joined = 'none';
                participant.help = '';
                participant.helped = 'none';
                participant.closed = 'none';
                participant.noActivated = 'none';
                participant.helpLimited = 'none';

                if (user.openid === participant.user.openid) {
                    participant.join = 'none';
                    participant.joined = 'none';
                    participant.help = 'none';
                    participant.helped = 'none';
                    participant.inviteFriend = '';
                } else {
                    participant.inviteFriend = 'none';
                    var docs = yield pointsParticipantService.filter({
                        conditions: {
                            user: user.id,
                            points: participant.points._id
                        }
                    });
                    if (docs.length > 0) {
                        participant.join = 'none';
                        participant.joined = '';
                    }
                    var helpArr = participant.help_friends;
                    if (_.indexOf(helpArr, user.openid) !== -1) {
                        participant.help = 'none';
                        participant.helped = '';
                    }
                    if (helpArr.length >= participant.points.friend_help_count_limit) {
                        participant.help = 'none';
                        participant.helped = 'none';
                        participant.helpLimited = '';
                    }
                    var today = new Date();
                    var active = today >= new Date(participant.points.startTime) && today <= new Date(participant.points.endTime);
                    if (!active) {
                        participant.join = 'none';
                        participant.joined = 'none';
                        participant.help = 'none';
                        participant.helped = 'none';
                        participant.inviteFriend = 'none';
                        if (today < new Date(participant.points.startTime)) {
                            participant.noActivated = '';
                        }
                        if (today > new Date(participant.points.endTime)) {
                            participant.closed = '';
                        }
                    }
                }
                var params = {
                    conditions: {
                        points: participant.points._id,
                        lFlg: 'a'
                    },
                    sort: {
                        total_points: -1
                    },
                    populate: [
                        {
                            path: 'user'
                        }
                    ]
                }
                var participants = yield pointsParticipantService.filter(params);
                yield this.render('/marketing/points/participant', {
                    participant: participant,
                    participants: participants
                });
            } else {
                yield this.render('/marketing/points/error', {error: '活动暂未开放'});
            }
        }else{
            yield this.render('/marketing/points/error', {error: '请用微信浏览器打开该页面'});
        }
    });

    router.get('/join', needUserInfoFilter, function *(){
        var id = this.query.id;
        var user = this.session.auth && this.session.auth.user || {};
        console.error(user);
        if(user.type === UserType.Customer.value()) {
            if (user.openid) {
                var points = yield activityPointsService.loadById(id);
                if (points) {
                    yield this.render('/marketing/points/join', {
                        headimgurl: user.headimgurl,
                        nickname: user.nickname,
                        pointsId: points._id
                    });
                } else {
                    yield this.render('/marketing/points/error');
                }
            } else {
                yield this.render('/marketing/points/error');
            }
        }else{
                yield this.render('/marketing/points/error', {error: '请用微信浏览器打开该页面'});
        }
    });

    return router.routes();
};