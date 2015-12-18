var Router = require('koa-router');
var context = require('../context/context');
//var securityService = context.services.securityService;

module.exports = function(app){
    var router = new Router();

    var mockUsers = [{
            "openid": "okvXqs_VftHruzwFV9rx4Pbd_fno",
            "nickname": "小小星星妹",
            "headimgurl": "http://wx.qlogo.cn/mmopen/CyYbk1vmHvYCTpBHH4UiblXdxyuNYN2BX7E8fVw1kUAASwIrlS0nMfMIrsbby4oILcMYic2tCJLJTuhTbngb2hhtTbiaAic3mBFY/0"
        },
        {
            "openid": "okvXqswFmgRwEV0YrJ-h5YvKhdUk",
            "nickname": "祺天大剩",
            "headimgurl": "http://wx.qlogo.cn/mmopen/WiaGzvINYibQIsdezmic0kKrPrcTFhFOYfzcfzzUFUkWwj3xwibxO5tiabxuwgRdStwG8sPfuNynfHDnY6vNuEbSqQg/0"
        },
        {
            "openid": "okvXqs4vtB5JDwtb8Gd6Rj26W6mE",
            "nickname": "独自等待",
            "headimgurl": "http://wx.qlogo.cn/mmopen/CJ35Z2cnZA2r9iaUDwhRq0ic5oHTgXLallotFS8O5yEvdOglsSCe6icKk5ZlCmSM0JiarWme9yW0esKiaPRGLMABIAg/0"
        },
        {
            "openid": "okvXqsw1VG76eVVJrKivWDgps_gA",
            "nickname": "包三哥",
            "headimgurl": "http://wx.qlogo.cn/mmopen/CyYbk1vmHvYCTpBHH4UiblcOM6IEMibm2VweVnbTm5tnWib1rQG5v6t7779AEnDSkFf212MXOVXX29JvZlKicjhUxjpRYDnTPTES/0"
        }
    ];
    router.get('/mock-login-list', function *(){
        //var users = yield securityService.loadAllTenantAdminUsersAsync();
        yield this.render('mock-login-list', {users: mockUsers});
    });

    router.get('/mock-login', function *(){
        var openid = this.query.openid;
        if(!openid){
            yield this.render('mock-login-list', {users: mockUsers});
            return;
        }
        //var auth = yield securityService.authenticateAsync();
        var auth = mockUsers[0];
        if(!auth){
            yield this.render('mock-login');
            return;
        }
        this.session.auth = auth;
        this.redirect('/');
    });

    app.use(router.routes());
};