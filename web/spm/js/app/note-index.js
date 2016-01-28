/**
 * SPA definition which is the single entry of our mobile site
 */
var agent = require('./agent-note').init();
require('./tags')();
var util = require('./util');

var Spa = require('./spa');
var app = new Spa({defaultHash: '/'});

app.routeView('/', nest.viewable({
  name: '/',
  mount: function(ctx){
    var tags = riot.mount('note-edit', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', {_id: ctx.req.params.id});
  }
}));

app.on('init', function(){
  var attentionUrl = util.getCookie('attentionUrl');
  var hash = attentionUrl || window.location.hash;
  hash || (hash = app.defaultHash);
  riot.route(hash);
  if(attentionUrl){
    util.setCookie('attentionUrl', "", -1);
  }
});

app.init();

module.exports = app;