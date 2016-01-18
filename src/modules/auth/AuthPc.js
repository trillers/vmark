var Authenticator = function(options){};

Authenticator.prototype = {
    auth: function(ctx, next){
        ctx.redirect('/login');
    }
};

module.exports = Authenticator;