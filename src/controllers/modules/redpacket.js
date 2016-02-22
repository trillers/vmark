var settings = require('@private/vmark-settings');
var Router = require('koa-router');
var util = require('../../app/util');
var context = require('../../context/context');
var generateAuthFilter = require('../../modules/auth/middlewares/generateAuthFilter');
var needBaseInfoFilter = generateAuthFilter(1);
var needUserInfoFilter = generateAuthFilter(2);
var needSubscriptionFilter = generateAuthFilter(3);
var redpacketService = context.services.redpacketService;
var participantService = context.services.participantService;
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
        var redpacket = yield redpacketService.loadById(id);
        if(redpacket && redpacket.lFlg === 'a'){
            redpacket.participateLink = this.protocol + '://' + settings.app.domain + '/join?id=' + redpacket._id;
            redpacket.join = '';
            redpacket.joined = 'none';
            redpacket.closed = 'none';
            redpacket.noActivated = 'none';
            var participant = yield participantService.filter({conditions: {user: user.id, redpacket: redpacket._id}});
            if(participant.length > 0){
                redpacket.join = 'none';
                redpacket.joined = '';
                this.redirect('/marketing/participant?id=' + participant[0]._id);
            }else {
                var today = new Date();
                var active = today >= new Date(redpacket.startTime) && today <= new Date(redpacket.endTime);
                if(!active){
                    redpacket.join = 'none';
                    redpacket.joined = 'none';
                    if(today < new Date(redpacket.startTime)){
                        redpacket.noActivated = '';
                    }
                    if(today > new Date(redpacket.endTime)){
                        redpacket.closed = '';
                    }
                }
                var params = {
                    conditions: {
                        redpacket: redpacket._id,
                        lFlg: 'a'
                    },
                    sort: {
                        total_money: -1
                    },
                    page: {
                        no: 1,
                        size: 10
                    },
                    populate: [
                        {
                            path: 'user'
                        }
                    ]
                }
                var participants = yield participantService.filter(params);
                console.warn('**************************');
                yield this.render('/marketing/redpacket/redpacket', {redpacket: redpacket, participants: participants});
            }
        }else{
            yield this.render('/marketing/redpacket/error', {error: '活动暂未开放'});
        }
    });

    router.get('/participant', needBaseInfoFilter, function *(){
        var id = this.query.id;
        var user = this.session.user || {};
        var participant = yield participantService.loadById(id);
        if(participant && participant.redpacket.lFlg === 'a'){
            participant.participateLink = this.protocol + '://' + settings.app.domain + '/join?id=' + participant.redpacket._id;
            participant.join = '';
            participant.joined = 'none';
            participant.help = '';
            participant.helped = 'none';
            participant.closed = 'none';
            participant.noActivated = 'none';
            participant.helpLimited = 'none';

            if(user.openid === participant.user.openid){
                participant.join = 'none';
                participant.joined = 'none';
                participant.help = 'none';
                participant.helped = 'none';
                participant.inviteFriend = '';
            }else{
                participant.inviteFriend = 'none';
                var docs = yield participantService.filter({conditions: {user: user.id, redpacket: participant.redpacket._id}});
                if(docs.length > 0){
                    participant.join = 'none';
                    participant.joined = '';
                }
                var helpArr = participant.help_friends;
                if (_.indexOf(helpArr, user.openid) !== -1) {
                    participant.help = 'none';
                    participant.helped = '';
                }
                if(helpArr.length >= participant.redpacket.friend_help_count_limit){
                    participant.help = 'none';
                    participant.helped = 'none';
                    participant.helpLimited = '';
                }
                var today = new Date();
                var active = today >= new Date(participant.redpacket.startTime) && today <= new Date(participant.redpacket.endTime);
                if(!active){
                    participant.join = 'none';
                    participant.joined = 'none';
                    participant.help = 'none';
                    participant.helped = 'none';
                    participant.inviteFriend = 'none';
                    if(today < new Date(participant.redpacket.startTime)){
                        participant.noActivated = '';
                    }
                    if(today > new Date(participant.redpacket.endTime)){
                        participant.closed = '';
                    }
                }
            }
            var params = {
                conditions: {
                    redpacket: participant.redpacket._id,
                    lFlg: 'a'
                },
                sort: {
                    total_money: -1
                },
                page: {
                    no: 1,
                    size: 10
                },
                populate: [
                    {
                        path: 'user'
                    }
                ]
            }
            var participants = yield participantService.filter(params);
            yield this.render('/marketing/redpacket/participant', {participant: participant, participants: participants});
        }else{
            yield this.render('/marketing/redpacket/error', {error: '活动暂未开放'});
        }
    });

    router.get('/join', needUserInfoFilter, function *(){
        var id = this.query.id;
        var user = this.session.auth && this.session.auth.user || {};
        console.error(user);
        if(user.openid){
            var redpacket = yield redpacketService.loadById(id);
            if(redpacket){
                yield this.render('/marketing/redpacket/join', {headimgurl: user.headimgurl, nickname: user.nickname, redpacketId: redpacket._id});
            }else{
                yield this.render('/marketing/redpacket/error');
            }
        }else{
            yield this.render('/marketing/redpacket/error');
        }
    });

    return router.routes();
};