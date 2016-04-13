var Authenticator = function(options){};

Authenticator.prototype = {
    auth: function*(ctx, next){
        //ctx.redirect('/login'); //TODO add redirect here for security
        yield next;
    }
};

module.exports = Authenticator;