/**
 * SPA definition which is the single entry of our mobile site
 */
require('./agent').init();
require('./tags')();
var App = require('./app');
var app = new App({defaultHash: '/'});

//app.on('mount', function(id){
//    riot.mount('notebook-timelines', {id: id});
//});

var Navigation = function(){
    this.routes = {};
};
Navigation.prototype.addRoute = function(key, handler){
    this.routes[key] = handler;
};
Navigation.prototype.doRoute = function(ctx, id){
    var handler = this.routes[ctx.req.routeKey];
    if(handler) handler.call(ctx, id);
    else console.warn(ctx.req.routeKey + ' route has no registered handler');
};
var nav = new Navigation();

app.on('route', function (ctx) {
    console.log(ctx.req.route);
    var routeStr = ctx.req.route;
    var parts = routeStr.split('/_');
    var id = null;
    if(parts.length==2){
        ctx.req.routeKey = parts[0] + '/id';
        id = parts[1];
    }
    else{
        ctx.req.routeKey = routeStr;
    }
    nav.doRoute(ctx, id);
});

app.on('init', function () {

});

var timeline = function(id){
    alert('11')
    riot.mount('notebook-timelines', {id: id});
};
nav.addRoute('timeline', timeline);
nav.addRoute('timeline/id', timeline);


app.init();

module.exports = app;