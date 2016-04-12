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

app.routeView('sd', nest.viewable({
  name: 'sd',
  mount: function(ctx){
    var tags = riot.mount('boss-tenant-sd', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', ctx.req.query);
  }
}));

app.routeView('sd/courses', nest.viewable({
  name: 'sd/courses',
  mount: function(ctx){
    var tags = riot.mount('boss-tenant-sd-courses', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', ctx.req.query);
  }
}));

app.routeView('sd/bespeaks', nest.viewable({
    name: 'boss-tenant-sd-bespeaks',
    mount: function(ctx){
        var tags = riot.mount('boss-tenant-sd-bespeaks', {filter: ctx.req.query, app: this.parent});
        this.tag = tags[0];
    },
    route: function(ctx){
        this.context = ctx;
        this.tag.trigger('open', ctx.req.query);
    }
}));

app.routeView('sd/catalogs', nest.viewable({
  name: 'boss-tenant-sd-catalogs',
  mount: function(ctx){
    var tags = riot.mount('boss-tenant-sd-catalogs', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', ctx.req.query);
  }
}));

app.routeView('sd/catalogs/add', nest.viewable({
  name: 'boss-tenant-sd-catalogs-add',
  mount: function(ctx){
    var tags = riot.mount('boss-tenant-sd-catalogs-add', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', ctx.req.query);
  }
}));

app.routeView('sd/catalogs/edit/_:id', nest.viewable({
  name: 'boss-tenant-sd-catalogs-edit',
  mount: function(ctx){
    var tags = riot.mount('boss-tenant-sd-catalogs-edit', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', ctx);
  }
}));

app.routeView('sd/catalogs/_:id', nest.viewable({
  name: 'boss-tenant-sd-catalogs-detail',
  mount: function(ctx){
    var tags = riot.mount('boss-tenant-sd-catalogs-detail', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', ctx);
  }
}));

app.routeView('sd/customers', nest.viewable({
    name: 'boss-tenant-sd-customers',
    mount: function(ctx){
        var tags = riot.mount('boss-tenant-sd-customers', {filter: ctx.req.query, app: this.parent});
        this.tag = tags[0];
    },
    route: function(ctx){
        this.context = ctx;
        this.tag.trigger('open', ctx.req.query);
    }
}));

app.routeView('sd/distributors', nest.viewable({
  name: 'boss-tenant-sd-distributors',
  mount: function(ctx){
    var tags = riot.mount('boss-tenant-sd-distributors', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', ctx.req.query);
  }
}));

app.routeView('sd/courses/_:id', nest.viewable({
  name: 'boss-tenant-sd-courses-detail',
  mount: function(ctx){
    var tags = riot.mount('boss-tenant-sd-courses-detail', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', ctx);
  }
}));

app.routeView('sd/courses/add', nest.viewable({
  name: 'sd/courses/add',
  mount: function(ctx){
    var tags = riot.mount('boss-tenant-sd-courses-add', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', ctx.req.query);
  }
}));

app.routeView('sd/courses/edit/_:id', nest.viewable({
  name: 'boss-tenant-sd-courses-edit',
  mount: function(ctx){
    var tags = riot.mount('boss-tenant-sd-courses-edit', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', ctx);
  }
}));

app.routeView('sd/courses/edit/details/_:id', nest.viewable({
  name: 'boss-tenant-sd-courses-edit-detail',
  mount: function(ctx){
    var tags = riot.mount('boss-tenant-sd-courses-edit-detail', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', ctx);
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

app.routeView('power/list', nest.viewable({
  name: 'power/list',
  mount: function(ctx){
    var tags = riot.mount('boss-tenant-power-list', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', ctx.req.query);
  }
}));

app.routeView('power/edit/_:id', nest.viewable({
  name: 'power/edit/_:id',
  mount: function(ctx){
    var tags = riot.mount('boss-tenant-power-edit', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open', {id: ctx.req.params.id});
  }
}));

app.routeView('power/add', nest.viewable({
  name: 'power/add',
  mount: function(ctx){
    var tags = riot.mount('boss-tenant-power-add', {filter: ctx.req.query, app: this.parent});
    this.tag = tags[0];
  },
  route: function(ctx){
    this.context = ctx;
    this.tag.trigger('open');
  }
}));

app.routeView('sd/orders', nest.viewable({
  name: 'boss-tenant-sd-orders',
  mount: function(ctx){
    var tags = riot.mount('boss-tenant-sd-orders', {filter: ctx.req.query, app: this.parent});
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
  window.app = app;

  riot.mount('boss-tenant-topbar');
  riot.mount('confirm');
  riot.mount('showimg');
  riot.route(hash);
  if(attentionUrl){
    util.setCookie('attentionUrl', "", -1);
  }
});

app.init();

module.exports = app;