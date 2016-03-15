/**
 * SPA definition which is the single entry of our mobile site
 */
require('./agent').init();
require('./tags')();
var _ = require('./util');
var middlewares = require('./middlewares');
var applyMiddlewares = middlewares.applyMiddlewares;
var loadNotebooksByUserId = middlewares.loadNotebooksByUserId;
var logger = middlewares.logger;
var listenToChange = middlewares.listenToChange;

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
    var self = this;
    var handlers = this.routes[ctx.req.routeKey];
    if(!handlers) {
        console.warn(ctx.req.routeKey + ' route has no registered handler');
        return;
    }
    var viewId = ctx.req.routeKey;
    var view = this.views[viewId];
    if(!view) {
        view = handlers.mountHandler.call(this, ctx, id);
        if(!view){
            throw new Error('no such tag name ' + viewId);
        }
        this.views[viewId] = view;
    }
    view.off('ready').on('ready', readyHandler);
    try{
        var context = _.toObjectFromRiot(this.current);
        context.id = id;
    } catch (e){
        console.error('ctx parse error.');
    }
    view.trigger('open', context);

    this.current = view;

    function readyHandler(){
        Object.keys(self.views).map(function(key){
            var v = self.views[key];
            if(v && !v.hidden){
                v.update({hidden: true});
            }
        });
        app.trigger('done');
        view.update({hidden: false});

        view.off('ready');
    }
    this.last = handlers.viewHandler.call(this, ctx, id);
};

var nav = new Navigation();

app.on('route', function (ctx) {
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
    riot.mount('btn-group', {notebooks: app.notebooks, latestnotebook: app.latestnotebook});
    riot.mount('mask');
});

var isDone = false;
app.on('done', function(){
    if(isDone){
        return;
    }
    isDone = true;
    var topDiv = document.body.querySelector('body >div');
    topDiv.removeChild(topDiv.querySelector('#welcomeWrapper'));
});


/*
 * route for share page note
 */
var mount_timeline = function(ctx, id){
    return riot.mount('note-page', {id: id})[0];
};
var view_timeline = function(ctx, id){

};
var mount_shareList = function(ctx, id){
    return riot.mount('note-share', {id: id})[0];
};
var view_shareList = function(ctx, id){
};

nav.addRouteView('share/_', mount_timeline, view_timeline);
nav.addRouteView('share', mount_shareList, view_shareList);

/*
 * route for timeline index page
 */
var mount_timeline = function(ctx, id){
    var tagInstance = null;
    tagInstance = this.views['timeline'] || this.views['timeline/_'];
    if(!tagInstance){
        tagInstance = riot.mount('notebook-timelines', {id: id, notebooks: app.notebooks, latestnotebook: app.latestnotebook})[0];
    }
    return tagInstance;
};
var view_timeline = function(ctx, id){
};

nav.addRouteView('timeline', mount_timeline, view_timeline);
nav.addRouteView('timeline/_', mount_timeline, view_timeline);

/*
 * route for notebook index page
 */
var mount_notebook_index = function(ctx, id){
    var tagInstance = riot.mount('notebook-index', {notebooks: app.notebooks, latestnotebook: app.latestnotebook})[0];
    return tagInstance
};
var view_notebook_index = function(ctx, id){

};
nav.addRouteView('notebook/index', mount_notebook_index, view_notebook_index);

/*
 * route for notebook index page
 */
var mount_notebook_detail = function(ctx, id){
    return riot.mount('notebook-detail', {id: id})[0];
};
var view_notebook_detail = function(ctx, id){

};
nav.addRouteView('notebook/_', mount_notebook_detail, view_notebook_detail);

var mount_notebook_new = function(ctx, id){
    return riot.mount('notebook-new', {id: id})[0];
};
var view_notebook_new = function(ctx, id){
};
nav.addRouteView('notebook/new', mount_notebook_new, view_notebook_new);

var bootstrap = applyMiddlewares(loadNotebooksByUserId(app), logger(app), listenToChange(app));

bootstrap(app.init.bind(app));


module.exports = app;