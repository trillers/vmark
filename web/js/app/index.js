/**
 * SPA definition which is the single entry of our mobile site
 */
require('./agent').init();
require('./tags')();
var App = require('./app');
var app = new App({defaultHash: '/'});

var Navigation = function(){
    this.routes = {};
    this.views = {};
    riot.observable(this);
};
Navigation.prototype.addRoute = function(key, handler){
    this.routes[key] = handler;
};
Navigation.prototype.doRoute = function(ctx, id){
    var handler = this.routes[ctx.req.routeKey];
    if(handler) handler.call(ctx, id);
    else console.warn(ctx.req.routeKey + ' route has no registered handler');
};
Navigation.prototype.addRouteView = function(key, mountHandler, viewHandler){
    this.routes[key] = {
        mountHandler: mountHandler,
        viewHandler: viewHandler
    };
};
Navigation.prototype.doRouteView = function(ctx, id){
    var handlers = this.routes[ctx.req.routeKey];
    if(!handlers) {
        console.warn(ctx.req.routeKey + ' route has no registered handler');
        return;
    }
    var viewId = ctx.req.routeKey + (id || '');
    var view = this.views[viewId];
    if(!view) {
        view = handlers.mountHandler.call(this, ctx, id);
    }
    this.current = view;
    this.last = handlers.viewHandler.call(this, ctx, id);
};

var nav = new Navigation();

app.on('route', function (ctx) {
    console.log(ctx.req.route);
    var routeStr = ctx.req.route;
    var parts = routeStr.split('/_');
    var id = null;
    if(parts.length==2){
        ctx.req.routeKey = parts[0] + '/_';
        id = parts[1];
    }
    else{
        ctx.req.routeKey = routeStr;
    }
    nav.doRouteView(ctx, id);
});

app.on('init', function () {
    if(!window.app){
        window.app = app;
    }
});

riot.mount('btn-group');

app.on('init', function () {});

/*
 * route for timeline index page
 */
var mount_timeline = function(ctx, id){
    riot.mount('notebook-timelines', {id: id});
};
var view_timeline = function(ctx, id){

};

nav.addRouteView('timeline', mount_timeline, view_timeline);
nav.addRouteView('timeline/_', mount_timeline, view_timeline);

/*
 * route for notebook index page
 */
var mount_notebook_index = function(ctx, id){
    riot.mount('notebook-index', {});
};
var view_notebook_index = function(ctx, id){

};
nav.addRouteView('notebook/index', mount_notebook_index, view_notebook_index);

/*
 * route for notebook index page
 */
var mount_notebook_detail = function(ctx, id){
    riot.mount('notebook-detail', {id: id});
};
var view_notebook_detail = function(ctx, id){

};
nav.addRouteView('notebook/_', mount_notebook_detail, view_notebook_detail);

app.init();

module.exports = app;