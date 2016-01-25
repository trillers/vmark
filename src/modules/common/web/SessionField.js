var logger = require('../../../app/logging').logger;

var SessionField = function(){
    this.field = o.field;
    this.key = o.key;
};

SessionField.prototype = {
    get: function(ctx){
        var val = ctx.session[this.key];
        logger.debug('Get session [ ' + this.key + ' = ' + val + ' ] - ' + this.field);
        return val;
    },
    set: function(ctx, val){
        ctx.session[this.key] = val;
        logger.debug('Set session [ ' + this.key + ' = ' + val + ' ] - ' + this.field);
    },
    delete: function(ctx){
        var val = ctx.session[this.key];
        ctx.session[this.key] = null;
        logger.debug('Delete session [ ' + this.key + ' = ' + val + ' ] - ' + this.field);
    }

};

module.exports = SessionField;