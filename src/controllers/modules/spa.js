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
    router.post('/login', function *(){
        var username = this.request.body.username;
        var password = this.request.body.password;
        var token = util.generateToken(password);
        var res = {};
        try{
            var user = yield systemUserService.findOneAsync({username: username, token: token, lFlg: 'a'});
            if(user){
                this.session.user = user;
                res.success = true;
            }else{
                res.success = false;
            }
        }catch(err){
            console.log('query admin err in login router, err: ' + err);
            res.success = false;
        }
        this.body = res;
    });
    router.get('/logout', function *(){
        this.session.user = null;
        this.body = null;
    });
};