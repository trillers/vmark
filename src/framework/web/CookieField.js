var logger = require('../../app/logging').logger;

var CookieField = function(o){
    this.field = o.field;
    this.key = o.key;
    this.options = o.options;
};

CookieField.prototype = {
    get: function(ctx){
        var val = ctx.cookies.get(this.key);
        logger.debug('Get cookie [ ' + this.key + ' = ' + val + ' ] - ' + this.field);
        return val;
    },
    set: function(ctx, val){
        ctx.cookies.set(this.key, val, this.options);
        logger.debug('Set cookie [ ' + this.key + ' = ' + val + ' ] - ' + this.field);
    },
    delete: function(ctx){
        var val = ctx.cookies.get(this.key);
        ctx.cookies.set(this.key);
        logger.debug('Delete cookie [ ' + this.key + ' = ' + val + ' ] - ' + this.field);
    }

};

module.exports = CookieField;