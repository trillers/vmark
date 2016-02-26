var riot = require('seedriot');
var routeParser = function(path) {
    var defaultHashPath = '';
    var parts = path.split('#');
    var hash = parts.length==1 ? parts[0] : parts[1];
    var hashParts = hash.split('?');
    var hashPath = hashParts[0] || defaultHashPath;
    var request = {route: hashPath};
    return [request];
};
var App = function(options){
    riot.observable(this);
};
App.prototype = {
    init: function(){
        var app = this;
        riot.route.parser(routeParser);
        riot.route(app._doRoute.bind(app));
        this.on('init', function(){
            //var id = window.location.pathname.split('/_')[1];
            //app.trigger('mount', id);
            riot.route(window.location.hash || 'timeline');
        });

        if(!window.devOrNot){
            window.onload = function(){
                app.trigger('init');
            };
        }else{
            riot.compile(function(){
                app.trigger('init');
            });
        }
    },

    _doRoute: function(request){
        this.trigger('route', { app: this, req: request });
    },

    emptyFn: function(){}
};

module.exports = App;
