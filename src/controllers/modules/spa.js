var util = require('../../app/util');
var loginFilter = require('../../middlewares/loginFilter');
var generateAuthFilter = require('../../modules/auth/middlewares/generateAuthFilter');
var needBaseInfoFilter = generateAuthFilter(1);
var context = require('../../context/context');
var platformUserSerivce = context.services.platformUserService;

module.exports = function(router){
    require('../../app/routes-spa')(router);

    router.get('/', function *(){
        if(!this.session.auth || this.session.auth.user.type === 'c'){
            this.redirect('/login');
        }else{
            this.redirect('/boss');
        }
    });
    router.get('/login', loginFilter, function *(){
        yield this.render('login', {qrCodeUrl: this.qrCodeUrl, connId: this.connId});
    });
    router.get('/logout', function *(){
        this.session.auth = null;
        this.body = null;
    });

    router.get('/clear-user-info', needBaseInfoFilter, function *(){
        var platformUser = this.session.auth && this.session.auth.user;
        if(platformUser){
            yield platformUserSerivce.deletePlatformUserByOpenidAsync(platformUser.openid);
            this.session.auth = null;
            this.body = 'clear success !';
        }else{
            this.body = 'clear failed !';
        }
    })
};