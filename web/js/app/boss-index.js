/**
 * SPA definition which is the single entry of our mobile site
 */
var riot = require('seedriot');
require('./tags')();
var agent = require('./agent-boss').init();
var util = require('./util');

var Spa = require('./spa');
var app = new Spa({defaultHash: 'tenants'});

app.routeView('tenants', nest.viewable({
  name: 'tenants',
  mount: function(ctx){
    var tags = riot.mount('tenants', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', ctx.req.query);
  }
}));

app.routeView('tenant/edit/_:id', nest.viewable({
  name: 'tenant-edit',
  mount: function(ctx){
    var tags = riot.mount('tenant-edit', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', ctx);
  }
}));

app.routeView('tenant/_:id', nest.viewable({
  name: 'tenant',
  mount: function(ctx){
    var tags = riot.mount('tenant', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', ctx);
  }
}));

app.routeView('redpacket', nest.viewable({
  name: 'redpacket',
  mount: function(ctx){
    var tags = riot.mount('redpacket-boss', {filter: ctx.req.query, app: this.parent});
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
  if(attentionUrl){
    util.setCookie('attentionUrl', "", -1);
  }
  window.app = app;
  riot.mount('boss-topbar');
  riot.mount('confirm');
  riot.mount('alert');
  riot.route(hash);
});

app.init();

module.exports = app;