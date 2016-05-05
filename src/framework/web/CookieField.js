var logger = require('../../app/logging').logger;

var CookieField = function(o){
    this.field = o.field;
    this.key = o.key;
    this.options = o.options;
};

CookieField.prototype = {
    get: function(ctx, keyParams){
        var key = typeof this.key == 'function' ? this.key(keyParams) : this.key;
        var val = ctx.cookies.get(key);
        logger.debug('Get cookie [ ' + key + ' = ' + val + ' ] - ' + this.field);
        return val;
    },
    set: function(ctx, keyParams, val){
        var key = null;
        if(typeof this.key == 'function'){
            key = this.key(keyParams);
        }
        else{
            key = this.key;
            val = keyParams;
        }

        ctx.cookies.set(key, val, this.options);
        logger.debug('Set cookie [ ' + key + ' = ' + val + ' ] - ' + this.field);
    },
    delete: function(ctx, keyParams){
        var key = typeof this.key == 'function' ? this.key(keyParams) : this.key;
        var val = ctx.cookies.get(key);
        ctx.cookies.set(key);
        logger.debug('Delete cookie [ ' + key + ' = ' + val + ' ] - ' + this.field);
    }

};

module.exports = CookieField;