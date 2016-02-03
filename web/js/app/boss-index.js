/**
 * SPA definition which is the single entry of our mobile site
 */
var agent = require('./agent-boss').init();
require('./tags')();
var util = require('./util');

var Spa = require('./spa');
var app = new Spa({defaultHash: 'active'});

app.routeView('active', nest.viewable({
    name: 'active',
    mount: function(ctx){
        var tags = riot.mount('boss-active-note', {filter: ctx.req.query, app: this.parent});
        this.tag = tags[0];
    },
    route: function(ctx){
        this.context = ctx;
        this.tag.trigger('open', {_id: ctx.req.params.id});
    }
}));

app.routeView('deleted', nest.viewable({
    name: 'deleted',
    mount: function(ctx){
        var tags = riot.mount('boss-deleted-note', {filter: ctx.req.query, app: this.parent});
        this.tag = tags[0];
    },
    route: function(ctx){
        this.context = ctx;
        this.tag.trigger('open', {_id: ctx.req.params.id});
    }
}));

app.on('init', function(){
    var hash = window.location.hash;
    hash || (hash = app.defaultHash);
    riot.mount('boss-top-menu');
    riot.route(hash);
});
app.init();

module.exports = app;