var util = require('../../app/util');

module.exports = function(router){

    router.get('/', function *(){
        if(!this.session.user){
            this.redirect('/login');
        }else{
            yield this.render('index');
        }
    });

};