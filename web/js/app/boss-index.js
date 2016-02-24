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
  riot.mount('boss-topbar');
  riot.route(hash);
  if(attentionUrl){
    util.setCookie('attentionUrl', "", -1);
  }
});

app.init();

module.exports = app;