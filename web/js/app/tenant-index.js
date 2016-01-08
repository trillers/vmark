/**
 * SPA definition which is the single entry of our mobile site
 */
var riot = require('seedriot');
require('./tags')();
var agent = require('./agent-tenant').init();
var util = require('./util');

var Spa = require('./spa');
var app = new Spa({defaultHash: 'adlink-index'});

app.routeView('adlink-index', nest.viewable({
  name: 'adlink-index',
  mount: function(ctx){
    var tags = riot.mount('adlink-index', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', ctx.req.query);
  }
}));

app.routeView('recontent-index', nest.viewable({
  name: 'recontent-index',
  mount: function(ctx){
    var tags = riot.mount('recontent-index', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', ctx.req.query);
  }
}));


app.on('init', function(){
  var attentionUrl = util.getCookie('attentionUrl');
  var hash = attentionUrl || window.location.hash;
  hash || (hash = app.defaultHash);
  riot.mount('tenant-topbar');
  riot.route(hash);
  if(attentionUrl){
    util.setCookie('attentionUrl', "", -1);
  }
});

app.init();

module.exports = app;