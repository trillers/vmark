var Authenticator = function(options){};

Authenticator.prototype = {
    auth: function*(ctx, next){
        //ctx.redirect('/login');
        yield next;
    }
};

module.exports = Authenticator;