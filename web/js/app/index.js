/**
 * SPA definition which is the single entry of our mobile site
 */
require('./agent').init();
require('./tags')();
var App = require('./app');
var app = new App({defaultHash: '/'});

app.on('mount', function(id){
    riot.mount('note-page', {id: id});
});

app.on('route', function (ctx) {
    console.log(ctx.req.route);
});


app.on('init', function () {

});

app.init();

module.exports = app;