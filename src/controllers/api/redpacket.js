var context = require('../../context/context');
var activityRedpacketService = context.services.activityRedpacketService;
var redpacketParticipantService = context.services.redpacketParticipantService;
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
            ,base_lucky_money: this.request.body.base_lucky_money
            ,friend_help_count_limit: this.request.body.friend_help_count_limit
            ,startTime: new Date(this.request.body.startTime)
            ,endTime: new Date(this.request.body.endTime)
            ,friend_help_min_money: this.request.body.friend_help_min_money
            ,friend_help_max_money: this.request.body.friend_help_max_money
            ,rule: this.request.body.rule
            ,desc: this.request.body.desc
        }
        var data = yield activityRedpacketService.create(json);
        this.body = data;
    });

    router.get('/load', function *(){
        var data = yield activityRedpacketService.loadAll();
        this.body = data;
    });

    router.get('/loadById', function *(){
        var id = this.query.id;
        var data = yield activityRedpacketService.loadById(id);
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
            ,base_lucky_money: this.request.body.base_lucky_money
            ,friend_help_count_limit: this.request.body.friend_help_count_limit
            ,startTime: new Date(this.request.body.startTime)
            ,endTime: new Date(this.request.body.endTime)
            ,friend_help_min_money: this.request.body.friend_help_min_money
            ,friend_help_max_money: this.request.body.friend_help_max_money
            ,rule: this.request.body.rule
            ,desc: this.request.body.desc
        }
        var data = yield activityRedpacketService.updateById(id, json);
        this.body = data;
    });

    router.get('/exportParticipants', function*(){
        var redpacket_id = this.query.id;
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
            caption:'红包金额',
            type:'number',
            width:40
        }];
        conf.rows = [];
        var params = {
            conditions: {
                redpacket: redpacket_id
            },
            populate:[{
                path: 'user'
            },{
                path: 'redpacket'
            }]
        }
        var participants = yield redpacketParticipantService.filter(params);
        participants.forEach(function(item){
            conf.rows.push([item.redpacket.name, item.user.nickname, item.phone, item.total_money]);
        });
        var result = nodeExcel.execute(conf);
        var data = yield activityRedpacketService.loadById(redpacket_id);
        var redpacket_name = '报名数据';
        if(data){
            redpacket_name = data.name
        }
        this.set('Content-Type', 'application/vnd.openxmlformats');
        this.set("Content-Disposition", "attachment; filename=" + encodeURIComponent(redpacket_name) + ".xlsx");
        this.body = new Buffer(result, 'binary');
    });

    router.post('/join', function *() {
        var id = this.request.body.id;
        var phone = this.request.body.phone;
        var user = this.session.auth && this.session.auth.user;
        if(user && user.type === UserType.Customer.value()) {
            if (phone) {
                var redpacket = yield activityRedpacketService.loadById(id);
                if (redpacket) {
                    var participant = yield redpacketParticipantService.filter({
                        conditions: {
                            user: this.session.auth.user.id,
                            redpacket: id
                        }
                    });
                    console.error(participant);
                    if (participant.length > 0) {
                        this.body = {error: 'joined', msg: '已参加'};
                    } else {
                        var json = {
                            redpacket: id
                            , user: this.session.auth.user.id
                            , phone: phone
                            , total_money: redpacket.base_lucky_money
                            , help_friends: []
                        }
                        var data = yield redpacketParticipantService.create(json);
                        yield activityRedpacketService.updateById(id, {$inc: {participants_count: 1}});
                        this.body = data;
                    }
                } else {
                    this.body = {error: 'no such redpacket'};
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
            var participant = yield redpacketParticipantService.loadById(id);
            var helpArr = participant.help_friends;
            if (helpArr.length < participant.redpacket.friend_help_count_limit) {
                var con = {
                    _id: id,
                    $where: 'this.help_friends.length < ' + participant.redpacket.friend_help_count_limit
                }
                var res = yield redpacketParticipantService.update(con, {$addToSet: {help_friends: user.openid}});
                if(res.n === 1) {
                    if (res.ok === 1 && res.nModified === 1) {
                        var min = participant.redpacket.friend_help_min_money || 0;
                        var max = participant.redpacket.friend_help_max_money || 0;
                        var helpMoney = util.random(min, max);
                        var total_money = participant.total_money + helpMoney;
                        var update = {
                            total_money: total_money
                        }
                        var data = yield redpacketParticipantService.updateById(participant._id, update);
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

