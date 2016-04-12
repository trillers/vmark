var checkAuth = function*(next){
    if(this.session && this.session.auth && this.session.auth.user){
        yield next;
    }else{
        this.redirect('/login');
    }
}

module.exports = checkAuth;