var context = require('../../context/context');
var activityPointsService = context.services.activityPointsService;
var pointsParticipantService = context.services.pointsParticipantService;
var nodeExcel = require('excel-export');
var typeRegistry = require('../../modules/common/models/TypeRegistry');
var UserType = typeRegistry.item('UserType');
var util = require('../../app/util');

module.exports = function(router){
    router.post('/add', function *(){
        var json = {
            type:  this.request.body.type
            ,name: this.request.body.name
            ,shareTitle: this.request.body.shareTitle
            ,shareDesc: this.request.body.shareDesc
            ,shareImg: this.request.body.shareImg
            ,bgImg: this.request.body.bgImg
            ,base_points: this.request.body.base_points
            ,friend_help_count_limit: this.request.body.friend_help_count_limit
            ,startTime: new Date(this.request.body.startTime)
            ,endTime: new Date(this.request.body.endTime)
            ,friend_help_min_points: this.request.body.friend_help_min_points
            ,friend_help_max_points: this.request.body.friend_help_max_points
            ,rule: this.request.body.rule
            ,desc: this.request.body.desc
        }
        var data = yield activityPointsService.create(json);
        this.body = data;
    });

    router.get('/load', function *(){
        var data = yield activityPointsService.loadAll();
        this.body = data;
    });

    router.get('/loadById', function *(){
        var id = this.query.id;
        var data = yield activityPointsService.loadById(id);
        this.body = data;
    });

    router.post('/update', function *(){
        var id = this.request.body.id;
        var json = {
            type:  this.request.body.type
            ,name: this.request.body.name
            ,shareTitle: this.request.body.shareTitle
            ,shareDesc: this.request.body.shareDesc
            ,shareImg: this.request.body.shareImg
            ,bgImg: this.request.body.bgImg
            ,base_points: this.request.body.base_points
            ,friend_help_count_limit: this.request.body.friend_help_count_limit
            ,startTime: new Date(this.request.body.startTime)
            ,endTime: new Date(this.request.body.endTime)
            ,friend_help_min_points: this.request.body.friend_help_min_points
            ,friend_help_max_points: this.request.body.friend_help_max_points
            ,rule: this.request.body.rule
            ,desc: this.request.body.desc
        }
        var data = yield activityPointsService.updateById(id, json);
        this.body = data;
    });

    router.get('/exportParticipants', function*(){
        var points_id = this.query.id;
        var conf ={};
        conf.cols = [{
            caption:'活动名称',
            type:'string',
            width:40
        },{
            caption:'报名昵称',
            type:'string',
            width:40
        },{
            caption:'报名电话',
            type:'string',
            width:40
        },{
            caption:'总积分',
            type:'number',
            width:40
        }];
        conf.rows = [];
        var params = {
            conditions: {
                points: points_id
            },
            populate:[{
                path: 'user'
            },{
                path: 'points'
            }]
        }
        var participants = yield pointsParticipantService.filter(params);
        participants.forEach(function(item){
            conf.rows.push([item.points.name, item.user.nickname, item.phone, item.total_points]);
        });
        var result = nodeExcel.execute(conf);
        var data = yield activityPointsService.loadById(points_id);
        var points_name = '报名数据';
        if(data){
            points_name = data.name
        }
        this.set('Content-Type', 'application/vnd.openxmlformats');
        this.set("Content-Disposition", "attachment; filename=" + encodeURIComponent(points_name) + ".xlsx");
        this.body = new Buffer(result, 'binary');
    });

    router.post('/join', function *() {
        var id = this.request.body.id;
        var phone = this.request.body.phone;
        var user = this.session.auth && this.session.auth.user;
        if(user && user.type === UserType.Customer.value()) {
            if (phone) {
                var points = yield activityPointsService.loadById(id);
                if (points) {
                    var participant = yield pointsParticipantService.filter({
                        conditions: {
                            user: this.session.auth.user.id,
                            points: id
                        }
                    });
                    console.error(participant);
                    if (participant.length > 0) {
                        this.body = {error: 'joined', msg: '已参加'};
                    } else {
                        var json = {
                            points: id
                            , user: this.session.auth.user.id
                            , phone: phone
                            , total_points: points.base_points
                            , help_friends: []
                        }
                        var data = yield pointsParticipantService.create(json);
                        yield activityPointsService.updateById(id, {$inc: {participants_count: 1}});
                        this.body = data;
                    }
                } else {
                    this.body = {error: 'no such points'};
                }
            } else {
                this.body = {error: 'phone no is must'};
            }
        }else{
            this.body = {err: 'please open url in wechat browser'};
        }
    });

    router.post('/help', function *() {
        var id = this.request.body.id;
        var user = this.session.auth && this.session.auth.user || {};
        if(user.openid && user.type === UserType.Customer.value()){
            var participant = yield pointsParticipantService.loadById(id);
            var helpArr = participant.help_friends;
            if (helpArr.length < participant.points.friend_help_count_limit) {
                var con = {
                    _id: id,
                    $where: 'this.help_friends.length < ' + participant.points.friend_help_count_limit
                }
                var res = yield pointsParticipantService.update(con, {$addToSet: {help_friends: user.openid}});
                if(res.n === 1) {
                    if (res.ok === 1 && res.nModified === 1) {
                        var min = participant.points.friend_help_min_points || 0;
                        var max = participant.points.friend_help_max_points || 0;
                        var helpMoney = util.random(min, max);
                        var total_points = participant.total_points + helpMoney;
                        var update = {
                            total_points: total_points
                        }
                        var data = yield pointsParticipantService.updateById(participant._id, update);
                        this.body = data;
                    } else {
                        this.body = {helped: true};
                    }
                } else if(res.n === 0) {
                    this.body = {limited: true};
                } else {
                    this.body = {error: 'unknown error'};
                }
            } else {
                this.body = {limited: true};
            }
        }else {
            this.body = {error: 'please open in wechat browser'};
        }
    });

}

