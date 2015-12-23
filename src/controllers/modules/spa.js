var util = require('../../app/util');
var loginFilter = require('../../middlewares/loginFilter');

module.exports = function(router){
    require('../../app/routes-spa')(router);

    router.get('/', function *(){
        if(!this.session.auth){
            this.redirect('/login');
        }else{
            yield this.render('index');
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