/**
 * SPA definition which is the single entry of our mobile site
 */
var riot = require('seedriot');
require('./tags')();
var agent = require('./agent-boss').init();
var util = require('./util');

var Spa = require('./spa');
var app = new Spa({defaultHash: 'tenant'});

app.routeView('tenant', nest.viewable({
  name: 'tenant',
  mount: function(ctx){
    var tags = riot.mount('boss-tenant', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', ctx.req.query);
  }
}));

app.routeView('wechatsite', nest.viewable({
  name: 'wechatsite',
  mount: function(ctx){
    var tags = riot.mount('boss-tenant-wechatsite', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', ctx.req.query);
  }
}));

app.routeView('wechatsite/_:id', nest.viewable({
  name: 'wechatsite/_:id',
  mount: function(ctx){
    var tags = riot.mount('boss-wechatsite', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', {id: ctx.req.params.id});
  }
}));

app.routeView('wechatsite/edit/_:id', nest.viewable({
  name: 'wechatsite/edit/_:id',
  mount: function(ctx){
    var tags = riot.mount('boss-wechatsite-edit', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', {id: ctx.req.params.id});
  }
}));

app.routeView('wechatsite/add', nest.viewable({
  name: 'wechatsite/add',
  mount: function(ctx){
    var tags = riot.mount('boss-wechatsite-add', {filter: ctx.req.query, app: this.parent});
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
  riot.mount('boss-tenant-topbar');
  riot.route(hash);
  if(attentionUrl){
    util.setCookie('attentionUrl', "", -1);
  }
});

app.init();

module.exports = app;