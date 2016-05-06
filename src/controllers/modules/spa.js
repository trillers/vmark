var util = require('../../app/util');
var loginFilter = require('../../middlewares/loginFilter');

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

};