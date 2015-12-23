/**
 * SPA definition which is the single entry of our mobile site
 */
var riot = require('seedriot');
require('./tags')();
var agent = require('./agent').init();
var util = require('./util');

var Spa = require('./spa');
var app = new Spa({defaultHash: 'broadcast'});

app.routeView('overview', nest.viewable({
  name: 'overview',
  mount: function(ctx){
    var tags = riot.mount('overview', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', ctx.req.query);
  }
}));

app.routeView('broadcast', nest.viewable({
  name: 'broadcast',
  mount: function(ctx){
    var tags = riot.mount('broadcast', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', ctx.req.query);
  }
}));

app.routeView('contacts', nest.viewable({
  name: 'contacts',
  mount: function(ctx){
    var tags = riot.mount('contacts', {filter: ctx.req.query, app: this.parent});
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
  riot.mount('top-menu');
  riot.route(hash);
  if(attentionUrl){
    util.setCookie('attentionUrl', "", -1);
  }
});

app.init();

module.exports = app;