var context = require('../../context/context');
var powerActivityService = context.services.powerActivityService;
var powerParticipantService = context.services.powerParticipantService;
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
            ,base_power: this.request.body.base_power
            ,friend_help_count_limit: this.request.body.friend_help_count_limit
            ,startTime: new Date(this.request.body.startTime)
            ,endTime: new Date(this.request.body.endTime)
            ,friend_help_min_power: this.request.body.friend_help_min_power
            ,friend_help_max_power: this.request.body.friend_help_max_power
            ,rule: this.request.body.rule
            ,desc: this.request.body.desc
            ,withPic: this.request.body.withPic
        }
        var data = yield powerActivityService.create(json);
        this.body = data;
    });

    router.get('/load', function *(){
        var data = yield powerActivityService.loadAll();
        this.body = data;
    });

    router.get('/loadById', function *(){
        var id = this.query.id;
        var data = yield powerActivityService.loadById(id);
        this.body = data;
    });

    router.post('/update', function *(){
        var id = this.request.body.id;
        var json = {
            type:  this.request.body.type
            ,withPic: this.request.body.withPic
            ,name: this.request.body.name
            ,shareTitle: this.request.body.shareTitle
            ,shareDesc: this.request.body.shareDesc
            ,shareImg: this.request.body.shareImg
            ,bgImg: this.request.body.bgImg
            ,base_power: this.request.body.base_power
            ,friend_help_count_limit: this.request.body.friend_help_count_limit
            ,startTime: new Date(this.request.body.startTime)
            ,endTime: new Date(this.request.body.endTime)
            ,friend_help_min_power: this.request.body.friend_help_min_power
            ,friend_help_max_power: this.request.body.friend_help_max_power
            ,rule: this.request.body.rule
            ,desc: this.request.body.desc
        }
        var data = yield powerActivityService.updateById(id, json);
        this.body = data;
    });

    router.get('/exportParticipants', function*(){
        var activityId = this.query.id;
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
            caption:'助力总数',
            type:'number',
            width:40
        }];
        conf.rows = [];
        var params = {
            conditions: {
                activity: activityId
            },
            populate:[{
                path: 'user'
            },{
                path: 'activity'
            }]
        }
        var participants = yield powerParticipantService.filter(params);
        participants.forEach(function(item){
            conf.rows.push([item.activity.name, item.user.nickname, item.phone, item.total_power]);
        });
        var result = nodeExcel.execute(conf);
        var data = yield powerActivityService.loadById(activityId);
        var activityName = '报名数据';
        if(data){
            activityName = data.name
        }
        this.set('Content-Type', 'application/vnd.openxmlformats');
        this.set("Content-Disposition", "attachment; filename=" + encodeURIComponent(activityName) + ".xlsx");
        this.body = new Buffer(result, 'binary');
    });

    router.post('/join', function *() {
        var id = this.request.body.id;
        var phone = this.request.body.phone;
        var user = this.session.auth && this.session.auth.user;
        if(user && user.type === UserType.Customer.value()) {
            if (phone) {
                var activity = yield powerActivityService.loadById(id);
                if (activity) {
                    var status = yield powerActivityService.getStatus(activity, user);
                    if (status.join === 'none') {
                        this.body = {error: 'joined', msg: '已参加'};
                    } else {
                        var json = {
                            activity: id
                            , user: user.id
                            , phone: phone
                            , total_power: activity.base_power
                            , help_friends: []
                        }
                        var data = yield powerParticipantService.create(json);
                        this.body = data;
                    }
                } else {
                    this.body = {error: 'no such activity'};
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
            var participant = yield powerParticipantService.loadById(id);
            var res = yield powerParticipantService.help(participant, user);
            this.body = res;
        }else {
            this.body = {error: 'please open in wechat browser'};
        }
    });

}

