webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * SPA definition which is the single entry of our mobile site
	 */
	var riot = __webpack_require__(1);
	window.riot = riot;
	__webpack_require__(2)();

	var agent = __webpack_require__(3).init();
	var util = __webpack_require__(7);

	var Spa = __webpack_require__(28);
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

	app.routeView('sd/splitbill', nest.viewable({
	    name: 'boss-tenant-sd-splitbill',
	    mount: function(ctx){
	        var tags = riot.mount('boss-tenant-sd-splitbill', {filter: ctx.req.query, app: this.parent});
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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* Riot WIP, @license MIT, (c) 2015 Muut Inc. + contributors */
	(function(){var e={version:"WIP",settings:{}};"use strict";e.observable=function(e){e=e||{};var t={},n=0;e.on=function(i,r){if(typeof r=="function"){r._id=typeof r._id=="undefined"?n++:r._id;i.replace(/\S+/g,function(e,n){(t[e]=t[e]||[]).push(r);r.typed=n>0})}return e};e.off=function(n,i){if(n=="*")t={};else{n.replace(/\S+/g,function(e){if(i){var n=t[e];for(var r=0,o;o=n&&n[r];++r){if(o._id==i._id){n.splice(r,1);r--}}}else{t[e]=[]}})}return e};e.one=function(t,n){if(n)n.one=1;return e.on(t,n)};e.trigger=function(n){var i=[].slice.call(arguments,1),r=t[n]||[];for(var o=0,u;u=r[o];++o){if(!u.busy){u.busy=1;u.apply(e,u.typed?[n].concat(i):i);if(u.one){r.splice(o,1);o--}else if(r[o]!==u){o--}u.busy=0}}return e};return e};(function(e,t){if(!this.top)return;var n=location,i=e.observable(),r=window,o;function u(){return n.hash.slice(1)}function f(e){return e.split("/")}function a(e){if(e.type)e=u();if(e!=o){i.trigger.apply(null,["H"].concat(f(e)));o=e}}var c=e.route=function(e){if(e[0]){n.hash=e;a(e)}else{i.on("H",e)}};c.exec=function(e){e.apply(null,f(u()))};c.parser=function(e){f=e};r.addEventListener?r.addEventListener(t,a,false):r.attachEvent("on"+t,a)})(e,"hashchange");var t=function(t,n,i){return function(r){n=e.settings.brackets||t;if(i!=n)i=n.split(" ");return r&&r.test?n==t?r:RegExp(r.source.replace(/\{/g,i[0].replace(/(?=.)/g,"\\")).replace(/\}/g,i[1].replace(/(?=.)/g,"\\")),r.global?"g":""):i[r]}}("{ }");var n=function(){var e={},n=/(['"\/]).*?[^\\]\1|\.\w*|\w*:|\b(?:(?:new|typeof|in|instanceof) |(?:this|true|false|null|undefined)\b|function *\()|([a-z_$]\w*)/gi;return function(t,n){return t&&(e[t]=e[t]||i(t))(n)};function i(e,n){e=(e||t(0)+t(1)).replace(t(/\\{/g),"￰").replace(t(/\\}/g),"￱");n=u(e,t(/{[\s\S]*?}/g));return new Function("d","return "+(!n[0]&&!n[2]&&!n[3]?r(n[1]):"["+n.map(function(e,t){return t%2?r(e,true):'"'+e.replace(/\n/g,"\\n").replace(/"/g,'\\"')+'"'}).join(",")+'].join("")').replace(/\uFFF0/g,t(0)).replace(/\uFFF1/g,t(1))+";")}function r(e,n){e=e.replace(/\n/g," ").replace(t(/^[{ ]+|[ }]+$|\/\*.+?\*\//g),"");return/^\s*[\w- "']+ *:/.test(e)?"["+e.replace(/\W*([\w- ]+)\W*:([^,]+)/g,function(e,t,n){return n.replace(/[^&|=!><]+/g,o)+'?"'+t.trim()+'":"",'})+'].join(" ").trim()':o(e,n)}function o(e,t){e=e.trim();return!e?"":"(function(v){try{v="+(e.replace(n,function(e,t,n){return n?"(d."+n+"===undefined?window."+n+":d."+n+")":e})||"x")+"}finally{return "+(t===true?'!v&&v!==0?"":v':"v")+"}}).call(d)"}function u(e,t){var n=[],i=0;e.replace(t,function(t,r){n.push(e.slice(i,r),t);i=r+t.length});return n.concat(e.slice(i))}}();function i(e){var n={val:e},i=e.split(/\s+in\s+/);if(i[1]){n.val=t(0)+i[1];i=i[0].slice(t(0).length).trim().split(/,\s*/);n.key=i[0];n.pos=i[1]}return n}function r(e,t,n){var i={};i[e.key]=t;if(e.pos)i[e.pos]=n;return i}function o(e,t,o){d(e,"each");var u=e.outerHTML,f=e.previousSibling,c=e.parentNode,l=[],s=[],v;o=i(o);function m(e,t,n){l.splice(e,0,t);s.splice(e,0,n)}t.one("update",function(){c.removeChild(e)}).one("premount",function(){if(c.stub)c=t.root}).on("update",function(){var e=n(o.val,t);if(!e)return;if(!Array.isArray(e)){var i=JSON.stringify(e);if(i==v)return;v=i;p(s,function(e){e.unmount()});l=[];s=[];e=Object.keys(e).map(function(t){return r(o,t,e[t])})}p(h(l,e),function(e){var t=l.indexOf(e),n=s[t];if(n){n.unmount();l.splice(t,1);s.splice(t,1)}});var d=c.childNodes,g=[].indexOf.call(d,f);p(e,function(n,i){var f=e.indexOf(n,i),p=l.indexOf(n,i);f<0&&(f=e.lastIndexOf(n,i));p<0&&(p=l.lastIndexOf(n,i));if(p<0){if(!v&&o.key)n=r(o,n,f);var h=new a({tmpl:u},{before:d[g+1+f],parent:t,root:c,item:n});h.mount();return m(f,n,h)}if(o.pos&&s[p][o.pos]!=f){s[p].one("update",function(e){e[o.pos]=f});s[p].update()}if(f!=p){c.insertBefore(d[g+p+1],d[g+f+1]);return m(f,l.splice(p,1)[0],s.splice(p,1)[0])}});l=e.slice()})}function u(e,t,n){g(e,function(e){if(e.nodeType==1){var i=x(e);if(i&&!e.getAttribute("each")){var r=new a(i,{root:e,parent:t});t.tags[e.getAttribute("name")||i.name]=r;n.push(r)}p(e.attributes,function(n){if(/^(name|id)$/.test(n.name))t[n.value]=e})}})}function f(e,n,i){function r(e,n,r){if(n.indexOf(t(0))>=0){var o={dom:e,expr:n};i.push(v(o,r))}}g(e,function(e){var t=e.nodeType;if(t==3&&e.parentNode.tagName!="STYLE")r(e,e.nodeValue);if(t!=1)return;var i=e.getAttribute("each");if(i){o(e,n,i);return false}p(e.attributes,function(t){var n=t.name,i=n.split("__")[1];r(e,t.value,{attr:i||n,bool:i});if(i){d(e,n);return false}});if(x(e))return false})}function a(t,i){var r=e.observable(this),o=b(i.opts)||{},a=m(t.tmpl),c=i.parent,l=[],d=[],g=i.root,h=i.item,y=t.fn,w={},x;if(y&&g.riot)return;g.riot=true;v(this,{parent:c,root:g,opts:o,tags:{}},h);p(g.attributes,function(e){w[e.name]=e.value});function C(e){p(Object.keys(w),function(e){o[e]=n(w[e],c||r)})}this.update=function(e,t){v(r,e,h);C();r.trigger("update",h);s(l,r,h);r.trigger("updated")};this.mount=function(){C();y&&y.call(r,o);N(true);f(a,r,l);r.update();r.trigger("premount");if(y){while(a.firstChild)g.appendChild(a.firstChild)}else{x=a.firstChild;g.insertBefore(x,i.before||null)}if(g.stub)r.root=g=c.root;r.trigger("mount")};this.unmount=function(){var e=y?g:x,t=e.parentNode;if(t){if(c)t.removeChild(e);else while(g.firstChild)g.removeChild(g.firstChild);N();r.trigger("unmount");r.off("*");delete g.riot}};function N(e){p(d,function(t){t[e?"mount":"unmount"]()});if(c){var t=e?"on":"off";c[t]("update",r.update)[t]("unmount",r.unmount)}}u(a,this,d)}function c(e,t,n,i,r){n[e]=function(e){e=e||window.event;e.which=e.which||e.charCode||e.keyCode;e.target=e.target||e.srcElement;e.currentTarget=n;e.item=r;if(t.call(i,e)!==true){e.preventDefault&&e.preventDefault();e.returnValue=false}var o=r?i.parent:i;o.update()}}function l(e,t,n){if(e){e.insertBefore(n,t);e.removeChild(t)}}function s(e,t,i){p(e,function(e){var r=e.dom,o=e.attr,u=n(e.expr,t),f=e.dom.parentNode;if(u==null)u="";if(f&&f.tagName=="TEXTAREA")u=u.replace(/riot-/g,"");if(e.value===u)return;e.value=u;if(!o)return r.nodeValue=u;d(r,o);if(typeof u=="function"){c(o,u,r,t,i)}else if(o=="if"){var a=e.stub;if(u){a&&l(a.parentNode,a,r)}else{a=e.stub=a||document.createTextNode("");l(r.parentNode,r,a)}}else if(/^(show|hide)$/.test(o)){if(o=="hide")u=!u;r.style.display=u?"":"none"}else if(o=="value"){r.value=u}else if(o.slice(0,5)=="riot-"){o=o.slice(5);u?r.setAttribute(o,u):d(r,o)}else{if(e.bool){r[o]=u;if(!u)return;u=o}if(typeof u!="object")r.setAttribute(o,u)}})}function p(e,t){for(var n=0,i=(e||[]).length,r;n<i;n++){r=e[n];if(r!=null&&t(r,n)===false)n--}return e}function d(e,t){e.removeAttribute(t)}function v(e,t,n){t&&p(Object.keys(t),function(n){e[n]=t[n]});return n?v(e,n):e}function m(e){var t=e.trim().slice(1,3).toLowerCase(),n=/td|th/.test(t)?"tr":t=="tr"?"tbody":"div",i=document.createElement(n);i.stub=true;i.innerHTML=e;return i}function g(e,t){if(e){if(t(e)===false)g(e.nextSibling,t);else{e=e.firstChild;while(e){g(e,t);e=e.nextSibling}}}}function h(e,t){return e.filter(function(e){return t.indexOf(e)<0})}function b(e){function t(){}t.prototype=e;return new t}var y=[],w={};function x(e){return w[e.tagName.toLowerCase()]}function C(e){var t=document.createElement("style");t.innerHTML=e;document.head.appendChild(t)}function N(e,t,n){var i=w[t];if(i&&e)i=new a(i,{root:e,opts:n});if(i&&i.mount){i.mount();y.push(i);return i.on("unmount",function(){y.splice(y.indexOf(i),1)})}}e.tag=function(e,t,n,i){if(typeof n=="function")i=n;else if(n)C(n);w[e]={name:e,tmpl:t,fn:i}};e.mount=function(e,t,n){if(e=="*")e=Object.keys(w).join(", ");if(typeof t=="object"){n=t;t=0}var i=[];function r(e){var r=t||e.tagName.toLowerCase(),o=N(e,r,n);if(o)i.push(o)}if(e.tagName){r(e);return i[0]}else{p(document.querySelectorAll(e),r);return i}};e.update=function(){return p(y,function(e){e.update()})};e.mountTo=e.mount;e.util={brackets:t,tmpl:n};if(true)module.exports=e;else if(typeof define==="function"&&define.amd)define(function(){return e});else if(typeof define==="function"&&define.cmd)define(function(t,n,i){i.exports=e});else this.riot=e})();

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports=function(){riot.tag('accordion', '<nav> <ul class="nav nav-pills nav-stacked"> <li role="presentation" class="{active: useAsDefault}" each="{opts.navs}"> <a href="#{path}">{presentation}</a> </li> </ul> </nav>', 'accordion ul{ margin: 0px; padding: 0px; }', function(opts) {

	    
	});
	riot.tag('add-group-member', '<div class="title_wrap"> <b onclick="{backToView}" style="display: block;width:24px;height:24px;float:left" onclick="{back}"> <i class="glyphicon glyphicon-chevron-left"></i> </b> 添加成员 <b onclick="{submit}" style="display: block;width:80px;height:24px;float:right"> <button type="button" class="btn btn-default" style="display:inline-block;background: #42AC3E; color:white; border: none"> 确认添加 </button> </b> </div> <div> <div class="wrapper" attr="{parent.mediaUsers}"> <div style="margin-bottom: 10px"> <button onclick="{selectContact}" class="{select_contact: status[\'contact\']}"> <span class="glyphicon glyphicon-user" aria-hidden="true"></span> 联系人 </button> <button onclick="{selectGroup}" class="{select_contact: status[\'group\']}"> <span class="glyphicon glyphicon-th" aria-hidden="true"></span> 群组 </button> </div> <div each="{parent.mediaUsers}"> <div class="list_container"> <div style="height:24px;line-height: 24px;margin-bottom: 10px;border-bottom:1px solid #ddd">{media.name}<strong>({mediaUsers.length})</strong></div> <ul class="user_list"> <li onclick="{parent.parent.selectMember}" each="{mediaUsers}" if="{parent.parent.status[contacttype]}" id="{_id}" media="{parent.media._id}" group="{parent.parent.parent.group._id}"> <img riot-src="{parent.parent.app.settings.api.url + \'/file?media_id=\' + headimgurl}"> <p style="overflow: hidden;height:24px">{remark}</p> </li> </ul> </div> </div> </div> </div>', 'add-group-member .select_contact{ background: #5B6779; border:1px solid #2E3238; color:white; } add-group-member .list_container{ overflow: scroll; height:500px; } add-group-member .wrapper{ width:90%; margin:0px auto; } add-group-member .user_list{ overflow: hidden; list-style-type: none; margin:0px; padding:0px; color:#888; } add-group-member .user_list >li{ width:100px; float:left; margin:5px 0px; text-align: center; line-height: 30px; position: relative; } add-group-member .user_list >li img{ display: inline-block; width:64px; height:64px; } add-group-member .title_wrap{ height:50px; margin:8px 10px; text-align: center; line-height: 50px; } add-group-member .select{ position: absolute; top:0px; left:17px; background:#42AC3E; width:64px; height:64px; opacity: 0.8; } add-group-member .select div{ font-size: 40px; color:white; margin:8px; }', function(opts) {
	        var self = this;
	        self.page = __page;
	        self.app = __app;
	        self.nav = 0;
	        self.members = {};
	        self.init = function(){
	            self.status = {};
	            self.status['contact'] = 'contact';
	        };
	        var navNameToIndex = {
	            '基本信息': 0,
	            '成员': 1
	        };
	        var addGroupMembers = domain.action('addGroupMembers');
	        function onAddGroupMembers(data){
	            if(data.success){
	                self.members = {};
	                if(data.data && data.data.length){
	                    data.data.forEach(function(member){
	                        self.parent.groupMembers.unshift(member);
	                    })
	                }
	                self.parent.panel.view();
	                self.parent.update();
	            }
	        }
	        this.on('mount', function(){
	            addGroupMembers.onDone(onAddGroupMembers);
	        });
	        this.on('unmount', function(){
	            addGroupMembers.offDone(onAddGroupMembers);
	        });
	        this.selectContact = function(e) {
	            if(self.status['contact']){
	                delete self.status['contact']
	                return;
	            }
	            self.status['contact'] = 'contact';
	        }.bind(this);
	        this.selectGroup = function(e) {
	            if(self.status['group']){
	                delete self.status['group']
	                return;
	            }
	            self.status['group'] = 'group';
	        }.bind(this);
	        this.clickNav = function(e) {
	            self.nav = navNameToIndex[e.target.innerText];
	        }.bind(this);
	        this.addMember = function(e) {
	            self.parent.panel.status = 'add_m';
	            self.parent.update();
	        }.bind(this);
	        this.selectMember = function(e) {
	            var target = e.currentTarget;
	            var id = target.id;
	            var group = target.getAttribute('group');
	            var media = target.getAttribute('media');
	            toggle(target)
	            function toggle(target){
	                if(self.members[id]){
	                    cancel(target);
	                    delete self.members[id];
	                }else{
	                    var member = {
	                        group: group,
	                        media: media,
	                        member: id
	                    };
	                    self.members[id] = member;
	                    select(target);
	                }
	            }
	            function select(el){
	                var maskEl = document.createElement('div');
	                maskEl.classList.add('select');
	                var iconEl = document.createElement('div');
	                iconEl.classList.add('glyphicon');
	                iconEl.classList.add('glyphicon-ok');
	                maskEl.appendChild(iconEl);
	                el.appendChild(maskEl);
	            }
	            function cancel(el){
	                el.removeChild(el.childNodes[el.childNodes.length-1])
	            }
	        }.bind(this);
	        this.submit = function(e) {
	            if(!Object.keys(self.members).length){
	                return;
	            }else{
	                addGroupMembers.execute({members: self.members});
	            }
	        }.bind(this);
	        this.backToView = function(e) {
	            self.members = {};
	            self.parent.panel.view();
	            self.parent.update();
	        }.bind(this);
	    
	});
	riot.tag('add-group', '<div class="title_wrap"> <b onclick="{backToView}" style="display: block;width:24px;height:24px;float:left" onclick="{back}"> <i class="glyphicon glyphicon-chevron-left"></i> </b> 添加分组 </div> <form id="form"> <div class="profile"> <div class="profile_item row-fluid form-group"> <div class="primary col-md-5 col-xs-5 col-sm-5"> <label>名称</label> </div> <div class="primary col-md-7 col-xs-7 col-sm-7"> <input id="groupName" class="form-control" type="text" placeholder="请输入名称"> </div> </div> <div class="profile_item row-fluid form-group"> <div class="secondary col-md-5 col-xs-5 col-sm-5"> <label>类型</label> </div> <div class="secondary col-md-7 col-xs-7 col-sm-7"> <label class="radio-inline"> <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="{app.enums.GroupType.names.Selected}" checked> {app.enums.GroupType.values.selected} </label> <label class="radio-inline" style="color:#ccc"> <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="{app.enums.GroupType.names.Tagged}" disabled> {app.enums.GroupType.values.tagged} </label> </div> </div> <div class="profile_item row-fluid form-group"> <div class="secondary col-md-5 col-xs-5 col-sm-5"> <label>包含微信号</label> </div> <div class="secondary col-md-7 col-xs-7 col-sm-7"> <button each="{parent.myManageMedia}" onclick="{backToView}" type="button" class="btn btn-default" style="display:inline-block;background: #CCC; color:white; border: none"> {name} </button> </div> </div> <div class="profile_item row-fluid form-group"> <div class="secondary col-md-5 col-xs-5 col-sm-5"> <label>负责人</label> </div> <div class="secondary col-md-7 col-xs-7 col-sm-7"> <label>{page.user.nickname}</label> </div> </div> <div class="profile_item"> <button onclick="{submit}" type="button" class="btn btn-default" style="height:40px;width:160px;background: #42AC3E; color:white; border: none"> <span class="glyphicon glyphicon-ok" aria-hidden="true"></span> 确认 </button>&nbsp&nbsp&nbsp&nbsp <button onclick="{backToView}" type="button" class="btn btn-default" style="display:inline-block;height:40px;width:160px;background: #9D9D9D; color:white; border: none"> <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> 返回 </button> </div> </div> </form>', 'add-group .profile{ padding-top:80px; margin:0px auto; width:80% } add-group .profile_item{ margin: 0px auto; text-align: center; margin-bottom: 30px; overflow: hidden; } add-group .profile_item div.secondary label{ font-size: 16px; } add-group .profile_item >div:first-child{ text-align: right; } add-group .profile_item >div:nth-child(2){ text-indent: 3em; text-align: left; } add-group .profile_item label{ font-weight:400; font-size: 24px; } add-group .title_wrap{ height:50px; line-height: 50px; margin:8px 10px; text-align: center; border-bottom: 1px solid #ddd; } add-group .tips_wrapper{ width:100%; position: absolute; top:0px; left:0px; overflow: hidden; margin-top:100px; -webkit-transition: opacity 1s ease-in; -moz-transition: opacity 1s ease-in; -ms-transition: opacity 1s ease-in; -o-transition: opacity 1s ease-in; transition: opacity 1s ease-in; } add-group .tips{ width:60%; margin:0px auto; } add-group .fadeout{ opacity: 0; }', function(opts) {
	        var self = this;
	        self.app = __app;
	        self.page = __page;
	        var addGroup = domain.action('addGroup');
	        this.backToView = function(e) {
	            self.groupName.value = '';
	            self.parent.panel.status = 'view';
	            self.parent.tags['group-left'].init();
	            self.parent.update();
	        }.bind(this);
	        function onAddGroup(data){
	            self.parent.groups.unshift(data.data);
	            self.parent.group = data.data;
	            self.parent.groupMembers = [];
	            self.backToView();
	        }
	        this.on('mount', function(){
	            addGroup.onDone(onAddGroup);
	        });
	        this.on('unmount', function(){
	            addGroup.offDone(onAddGroup);
	        });
	        this.submit = function(e) {
	            if(!self.groupName.value){
	                showAlert(self.form, '请输入名称', false);
	                return;
	            }
	            var radio = document.querySelector('input[name="inlineRadioOptions"]:checked');
	            var group = {
	                name: self.groupName.value,
	                type: radio.value
	            };
	            addGroup.execute(group);
	        }.bind(this);

	        function showAlert(parentEl, text, flag){
	            var bgFlag = null;
	            var iconFlag = null;
	            if(flag){
	                bgFlag = 'alert-success';
	                iconFlag = 'glyphicon-ok';

	            }else{
	                bgFlag = 'alert-danger';
	                iconFlag = 'glyphicon-exclamation-sign';
	            }
	            var wrapper = document.createElement('div');
	            addClass(wrapper, 'tips_wrapper');

	            var tips = document.createElement('div');
	            addClass(tips, 'alert');
	            addClass(tips, bgFlag);
	            addClass(tips, 'tips');
	            tips.setAttribute('role', 'alert');

	            var icon = document.createElement('span');
	            addClass(icon, 'glyphicon');
	            addClass(icon, iconFlag);
	            icon.setAttribute('aria-hidden', 'true');

	            var title = document.createElement('span');
	            addClass(title, 'sr-only');
	            title.innerText ='错误:';

	            var txtEl = document.createElement('span');
	            txtEl.innerText = ' ' + text;
	            tips.append = function(el){
	                tips.appendChild(el);
	                return tips;
	            };

	            tips.append(icon).append(title).insertBefore(txtEl, title.nextSibling);
	            wrapper.appendChild(tips);
	            parentEl.appendChild(wrapper);

	            setTimeout(function(){
	                addClass(wrapper, 'fadeout');
	                setTimeout(function(){
	                    removeFrom(wrapper, self.form)
	                }, 1000)
	            }, 1000);

	            function addClass(el, className){
	                el.classList.add(className);
	            }

	            function removeFrom(el, parentEl){
	                parentEl.removeChild(el);
	            }
	        }
	    
	});
	riot.tag('adlink-detail', '<div if="{!hidden}"> <div class="container-fluid"> <div class="row-fluid"> <div class="col-sm-12 col-md-12 col-lg-12" > <div id="adlink-msg" class="alert alert-danger alert-dismissible fade in hidden" style="margin-left: 20px;" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <h4></h4> <div id="msgs"></div> </div> </div> </div> <div class="row-fluid"> <div class="col-sm-12 col-md-12 col-lg-12" > <form class="form-horizontal" id="adlink-detail"> <input type="hidden" id="id" name="id" value="{adlink._id}"> <div class="form-group"> <label class="col-sm-2 col-md-2 col-lg-2 control-label">名称</label> <div class="col-sm-10 col-md-10 col-lg-10"> <p class="form-control-static">{adlink.name}</p> </div> </div>       <div class="form-group"> <label class="col-sm-2 col-md-2 col-lg-2 control-label">广告图片</label> <div class="col-sm-10 col-md-10 col-lg-10"> <div class="{hidden: !adlink.adpicUrl}"> <img riot-src="{adlink.adpicUrl}" style="width: 100%;"> </div> </div> </div> <div class="form-group"> <label class="col-sm-2 col-md-2 col-lg-2 control-label">广告链接</label> <div class="col-sm-10"> <p class="form-control-static">{adlink.url}</p> </div> </div> <div class="form-group"> <label class="col-sm-2 col-md-2 col-lg-2 control-label">客服电话</label> <div class="col-sm-10 col-md-10 col-lg-10"> <div class="input-group"> <p class="form-control-static">{adlink.phone}</p> </div> </div> </div> <div class="form-group"> <label class="col-sm-2 col-md-2 col-lg-2 control-label">位置</label> <div class="col-sm-10 col-md-10 col-lg-10"> <div class="btn-group"> <p class="form-control-static">{ __app.enums.AdlinkLayout.values[adlink.layout] }</p> </div> </div> </div> <div class="form-group"> <label class="col-sm-2 col-md-2 col-lg-2 control-label">主题</label> <div class="col-sm-10 col-md-10 col-lg-10"> <div class="btn-group"> <p class="form-control-static">{ __app.enums.AdlinkTheme.values[adlink.theme] }</p> </div> </div> </div> <div class="form-group"> <label class="col-sm-2 col-md-2 col-lg-2 control-label">创建时间</label> <div class="col-sm-10 col-md-10 col-lg-10"> <div class="btn-group"> <p class="form-control-static">{ adlink.crtOnText }</p> </div> </div> </div> <div class="form-group"> <div class="col-sm-offset-2 col-md-offset-2 col-lg-offset-2 col-sm-10 col-md-10 col-lg-10"> <button type="button" class="btn btn-primary" onclick="{onEdit}">编辑</button> </div> </div> </form> </div> </div> </div> </div>', 'adlink-detail .row-fluid { word-wrap: break-word; }', function(opts) {
	        var self = nest.presentable(this);
	        self.api =  __app.settings.api.url;
	        self.adlink = {};

	        var loadAdlink = domain.action('loadAdlink');
	        var onLoadAdlink = function(adlink){
	            adlink.crtOnText = formateDate(new Date(adlink.crtOn));
	            self.update({hidden: false, adlink: adlink});
	        };

	        this.on('mount', function(){
	            loadAdlink.onDone(onLoadAdlink);
	        });

	        this.on('unmount', function(){
	            loadAdlink.offDone(onLoadAdlink);
	        });

	        self.on('open', function(params){
	            if(params.id){
	                loadAdlink.execute(params.id);
	            }
	            else{
	                onLoadAdlink(params.model);
	            }
	        });

	        self.on('close', function(){self.update({hidden: true});});

	        function trim(str) {
	            if(!str) return '';
	            return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	        }

	        function formateDate(date) {
	            return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	        }

	        this.onEdit = function(e) {
	            self.parent.showEditView(self.adlink._id);
	        }.bind(this);

	        this.onSyncLayout = function(e) {
	            $('#adlink-edit #layout').val( $(e.currentTarget).find('input').val() );
	        }.bind(this);

	        this.onSyncTheme = function(e) {
	            $('#adlink-edit #theme').val( $(e.currentTarget).find('input').val() );
	        }.bind(this);

	        this.onPhoneBlur = function(e) {
	            var phone = $(e.currentTarget).val();
	            $('#adlink-edit #hasPhone').prop("checked", trim(phone)!=='');
	        }.bind(this);

	    
	});
	riot.tag('adlink-edit', '<div if="{!hidden}"> <div class="container-fluid"> <div class="row-fluid"> <div class="col-sm-12 col-md-12 col-lg-12" > <div id="adlink-msg" class="alert alert-danger alert-dismissible fade in hidden" style="margin-left: 20px;" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <h4></h4> <div id="msgs"></div> </div> </div> </div> <div class="row-fluid"> <div class="col-sm-12 col-md-12 col-lg-12" > <form class="form-horizontal" id="adlink-edit"> <input if="{action==\'edit\'}" type="hidden" id="id" name="id" value="{adlink._id}"> <input if="{action==\'new\'}" type="hidden" id="org" name="org" value="{tenantId}"> <div class="form-group"> <label for="name" class="col-sm-2 col-md-2 col-lg-2 control-label">名称</label> <div class="col-sm-10 col-md-10 col-lg-10"> <input type="text" class="form-control" id="name" placeholder="" value="{adlink.name}"> </div> </div>       <div class="form-group"> <label for="adwords" class="col-sm-2 col-md-2 col-lg-2 control-label">广告图片</label> <div class="col-sm-10 col-md-10 col-lg-10">   <div class="{hidden: adpicMode!=\'select\'}"> <span class="btn btn-default btn-file"> 浏览<input id="img_file" type="file" multiple="multiple" accept="image/bmp, image/jpg, image/jpeg, image/gif, image/png" onchange="{previewImg}"> </span> <div class="{hidden: !adlink.adpicUrl}"> <img riot-src="{adlink.adpicUrl}" style="width: 100%;"> </div> </div> <div class="{hidden: adpicMode!=\'preview\'}" class="panel panel-default" id="img_prew" style="margin-bottom: 10px"> <table class="table table-condensed" style="border: 0px; text-align: center; vertical-align: middle;"> <tbody> <tr> <td colspan="3"><img riot-src="{img_url}" style="width: 100%;"></td> </tr> <tr> <td>{img_name}</td> <td>{img_size}</td> <td>{img_width}*{img_height}</td> </tr> <tr> <td colspan="3"> <input class="btn btn-default" type="button" style="margin-right: 50px" value="取消" onclick="{cancel_send_img}"> <input class="btn btn-success" type="button" value="发送" onclick="{send_img}"> </td> </tr> </tbody> </table> </div> </div> </div> <div class="form-group"> <label for="url" class="col-sm-2 col-md-2 col-lg-2 control-label">广告链接</label> <div class="col-sm-10"> <input type="url" class="form-control" id="url" placeholder="" value="{adlink.url}"> </div> </div> <div class="form-group"> <label for="phone" class="col-sm-2 col-md-2 col-lg-2 control-label">客服电话</label> <div class="col-sm-10 col-md-10 col-lg-10"> <div class="input-group"> <span class="input-group-addon"> <input type="checkbox" aria-label="..." id="hasPhone" __checked="{adlink.phone==\'\' ? \'false\':\'true\'}"> </span> <input type="phone" class="form-control" id="phone" placeholder="" onblur="{onPhoneBlur}" value="{adlink.phone}"> </div> </div> </div> <div class="form-group"> <label for="layout" class="col-sm-2 col-md-2 col-lg-2 control-label">位置</label> <div class="col-sm-10 col-md-10 col-lg-10"> <div class="btn-group" data-toggle="buttons"> <input type="hidden" id="layout" name="layout" value="{adlink.layout ? adlink.layout : \'bottom\'}"> <label class="btn btn-default {!adlink.layout || adlink.layout==\'bottom\' ? \'active\': \'\'}" onclick="{onSyncLayout}"> <input type="radio" name="layoutRadio" id="layoutBottom" autocomplete="off" value="bottom">底部 </label> <label class="btn btn-default {adlink.layout==\'top\' ? \'active\': \'\'}" onclick="{onSyncLayout}"> <input type="radio" name="layoutRadio" id="layoutTop" autocomplete="off" value="top">顶部 </label> </div> </div> </div> <div class="form-group"> <label for="theme" class="col-sm-2 col-md-2 col-lg-2 control-label">主题</label> <div class="col-sm-10 col-md-10 col-lg-10"> <div class="btn-group" data-toggle="buttons"> <input type="hidden" id="theme" name="theme" value="{adlink.theme ? adlink.theme : \'dark\'}"> <label class="btn btn-default {!adlink.theme || adlink.theme==\'dark\' ? \'active\': \'\'}" onclick="{onSyncTheme}"> <input type="radio" name="themeRadio" id="themeDark" autocomplete="off" value="dark">深色 </label> <label class="btn btn-default {adlink.theme==\'light\' ? \'active\': \'\'}" onclick="{onSyncTheme}"> <input type="radio" name="themeRadio" id="themeLight" autocomplete="off" value="light">浅色 </label> </div> </div> </div> <div if="{action==\'edit\'}" class="form-group"> <label for="url" class="col-sm-2 col-md-2 col-lg-2 control-label">创建时间</label> <div class="btn-group"> <p class="form-control-static">{ adlink.crtOnText }</p> </div> </div> <div class="form-group"> <div class="col-sm-offset-2 col-md-offset-2 col-lg-offset-2 col-sm-10 col-md-10 col-lg-10"> <button if="{action==\'new\'}" type="button" class="btn btn-primary" onclick="{onSave}">创建</button> <button if="{action==\'edit\'}" type="button" class="btn btn-primary" onclick="{onSave}">更新</button> </div> </div> </form> </div> </div> </div> </div>', 'adlink-edit .btn-file { position: relative; overflow: hidden; } adlink-edit .btn-file input[type=file] { position: absolute; top: 0; right: 0; min-width: 100%; min-height: 100%; font-size: 100px; text-align: right; filter: alpha(opacity=0); opacity: 0; outline: none; background: white; cursor: inherit; display: block; }', function(opts) {
	        var self = nest.presentable(this);
	        self.api =  __app.settings.api.url;
	        self.adlink = {};
	        self.adpicMode = 'select'; //select | preview

	        var createAdlink = domain.action('createAdlink');
	        var updateAdlink = domain.action('updateAdlink');
	        var onSaveAdlink = function(adlink){
	            self.parent.showDetailView(adlink);
	            self.parent.onRefresh();
	        };

	        var loadAdlink = domain.action('loadAndEditAdlink');
	        var onLoadAdlink = function(adlink){
	            adlink.crtOnText = formateDate(new Date(adlink.crtOn));
	            self.update({hidden: false, adlink: adlink});
	        };

	        this.on('mount', function(){
	            createAdlink.onDone(onSaveAdlink);
	            updateAdlink.onDone(onSaveAdlink);
	            loadAdlink.onDone(onLoadAdlink);
	        });
	        this.on('unmount', function(){
	            createAdlink.offDone(onSaveAdlink);
	            updateAdlink.offDone(onSaveAdlink);
	            loadAdlink.offDone(onLoadAdlink);
	        });

	        self.on('open', function(params){
	            self.action = params.action;
	            if(params.action=='new'){
	                self.tenantId = params.tenantId;
	                self.adlink = {org: params.tenantId};
	                self.update({hidden: false});
	            }
	            else if(params.action=='edit'){
	                loadAdlink.execute(params.id);
	            }
	        });

	        self.on('close', function(){self.update({hidden: true});});

	        function trim(str) {
	            if(!str) return '';
	            return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	        }

	        function formateDate(date) {
	            return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	        }

	        this.cancel_send_img = function(e) {
	            self.adpicMode = 'select';
	            self.update();
	        }.bind(this);
	        this.previewImg = function(e) {
	            var file = e.target.files[0];
	            var kSize = Math.round(file.size/1024);
	            self.img_size = kSize>=1024 ? Math.round(kSize/1024) + 'm' : kSize + 'k';
	            self.img_name = file.name;
	            self.img_width = 0;
	            self.img_height = 0;
	            var reader = new FileReader();
	            reader.onload = function(data){
	                self.img_url = data.target.result;

	                var image = new Image();
	                image.src = data.target.result;
	                image.onload = function() {
	                    self.img_width = this.width;
	                    self.img_height = this.height;
	                    self.update();
	                };

	                self.adpicMode = 'preview';
	                self.update();
	            }
	            reader.readAsDataURL(file);
	        }.bind(this);
	        this.send_img = function(e) {
	            var formData = new FormData();
	            var files = $('#img_file')[0].files;
	            formData.append('file', files[0]);
	            $.ajax({
	                url: self.api + '/file/upload',
	                type: 'POST',
	                data: formData,
	                processData: false,
	                contentType: false,
	                success: function (body) {
	                    self.adlink.adpic = body.media_id;
	                    self.adlink.adpicUrl = '/api/file?media_id=' + body.media_id;
	                    self.adpicMode = 'select';
	                    self.update();
	                },
	                error: function (responseStr) {
	                    console.error("失败:" + JSON.stringify(responseStr));
	                }
	            });
	        }.bind(this);

	        var model = {};
	        this.onSave = function(e) {
	            var msgs = [];

	            model.name = $('#adlink-edit #name').val();
	            if(trim(model.name)=='') msgs.push('<p>"名称"不能为空</p>');



	            console.log(self.adlink);
	            model.adpic = self.adlink.adpic;
	            model.adpicUrl = self.adlink.adpicUrl;
	            if(trim(model.adpic)=='') msgs.push('<p>"广告图片"不能为空</p>');

	            model.url = $('#adlink-edit #url').val();
	            if(trim(model.url)=='') msgs.push('<p>"广告链接"不能为空</p>');

	            model.phone = $('#adlink-edit #phone').val();

	            model.layout = $('#adlink-edit #layout').val();
	            model.theme = $('#adlink-edit #theme').val();

	            if(msgs.length){
	                $('#adlink-msg #msgs').html(msgs.join(''));
	                $('#adlink-msg').removeClass('hidden');
	                return;
	            }
	            else{
	                $('#adlink-msg #msgs').html('');
	                $('#adlink-msg').addClass('hidden');
	            }

	            if(self.action=='new'){
	                model.org = self.tenantId;
	                createAdlink.execute(model);
	            }
	            else if(self.action=='edit'){
	                model._id = $('#adlink-edit #id').val();
	                updateAdlink.execute(model);
	            }
	        }.bind(this);

	        this.onSyncLayout = function(e) {
	            $('#adlink-edit #layout').val( $(e.currentTarget).find('input').val() );
	        }.bind(this);

	        this.onSyncTheme = function(e) {
	            $('#adlink-edit #theme').val( $(e.currentTarget).find('input').val() );
	        }.bind(this);

	        this.onPhoneBlur = function(e) {
	            var phone = $(e.currentTarget).val();
	            $('#adlink-edit #hasPhone').prop("checked", trim(phone)!=='');
	        }.bind(this);

	    
	});
	riot.tag('adlink-index', '<div if="{!hidden}"> <div class="container-fluid"> <div class="row-fluid"> &nbsp; </div> <div class="row-fluid"> <div class="col-md-4 col-lg-4" > <div class="row-fluid"> <div class="col-md-12 col-lg-12" > <div class="pull-right"> <button class="btn btn-default btn-sm" type="button" onclick="{onRefresh}">刷新</button> <button class="btn btn-default btn-sm" type="button" onclick="{onNew}">新建</button> </div> <table class="table table-striped"> <thead> <tr> <th>名称</th> <th>广告</th> <th>布局</th> </tr> </thead> <tbody> <tr each="{adlinks}"> <td> <a onclick="{parent.onView}"> <input type="hidden" value="{_id}"> {name} </a> </td> <td> <a href="{url}"> <img riot-src="{adpicUrl}" style="width: 200px;"> </a> </td> <td> { __app.enums.AdlinkLayout.values[layout] } </td> </tr> </tbody> </table> </div> </div> </div> <div class="col-md-8 col-lg-8" > <adlink-edit id="edit"></adlink-edit> <adlink-detail id="detail"></adlink-detail> </div> </div> </div> </div>', function(opts) {
	            "use strict";
	            this.app = this.opts.app;
	            var self = nest.presentable(this);
	            self.api =  __app.settings.api.url;
	            self.tenantId = this.opts.tenant;
	            var edit = self.tags['adlink-edit'];
	            var detail = self.tags['adlink-detail'];

	            var findTenantAdlinks = domain.action('findTenantAdlinks');

	            var onFindTenantAdlinks = function(adlinks){
	                self.update({adlinks: adlinks});
	            };

	            this.on('mount', function(){
	                findTenantAdlinks.onDone(onFindTenantAdlinks);
	            });
	            this.on('unmount', function(){
	                findTenantAdlinks.offDone(onFindTenantAdlinks);
	            });
	            this.on('open', function(options){
	                console.info('tag adlink-index is opening');
	                self.trigger('ready', false);
	                self.trigger('view-route-to');
	                findTenantAdlinks.execute(self.tenantId);
	            });

	            this.on('leave', function(){
	                self.mask = true;
	                self.update();
	            });

	            this.on('reenter', function(){
	                self.mask = false;
	                self.update();
	            });

	            this.on('refresh', function(){
	                onRefresh();
	            });

	            this.onRefresh = function(e) {
	                findTenantAdlinks.execute(self.tenantId);
	            }.bind(this);

	            this.onNew = function(e) {
	                detail.trigger('close');
	                edit.trigger('open', {action: 'new', tenantId: self.tenantId});
	            }.bind(this);

	            this.onView = function(e) {
	                var id = $(e.currentTarget).find('input[type=hidden]').val();
	                edit.trigger('close');
	                detail.trigger('open', {id: id});
	            }.bind(this);

	            this.showEditView = function(id){
	                detail.trigger('close');
	                edit.trigger('open', {action: 'edit', id: id});
	            };

	            this.showDetailView = function(model){
	                edit.trigger('close');
	                detail.trigger('open', {model: model});
	            };

	        
	});
	riot.tag('alert', '<div class="alert-container" if="{opts.validators.length}"> <div style="width: 300px; margin: 0px auto;" class="alert {alert-warning: !opts.validator.success, alert-success: opts.validator.success} alert-dismissible fade in" role="alert"> <button onclick="{onCancel}" type="button" class="close" aria-label="Close"><span aria-hidden="true">×</span></button> <p each="{validator in opts.validators}"><strong>{validator.field && (\'【\' + validator.field + \'】\')}</strong> {validator.desc}</p> </div> </div>', 'alert .alert-container{ top: 60px; width: 100%; }', function(opts) {
	        var self = this;
	        this.onCancel = function(e){
	            self.opts.clear();
	            self.update();
	        };
	    
	});
	riot.tag('boss-tenant-power-add', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <alert validators="{validators}" clear="{clear}"></alert> <div class="col-md-10 col-md-offset-1"> <div class="jumbotron" style="height: auto; padding: 25px;"> <div id="addForm" class="panel" style="margin-top: 1em;"> <div style="padding-left: 20px; padding-bottom: 20px; padding-top: 15px"><a href="#power/list" style="font-size: 15px; text-decoration: none;">返回活动列表</a></div> <ul class="ul" style="text-align: left; padding-left: 2em"> <li><span>助力活动设置</span></li> <li> <span>活动公众号: </span> <select id="selectMedia" > <option each="{wechatMedias}" value="{originalId}" __selected="{parent.activity.wechatId = originalId}">{name}</option> </select> </li> <li id="type_select"><span>类型: </span> <label><input id="type_rp" name="activity_type" type="radio" value="rp" __checked="{activity.type === \'rp\'}" onclick="{selectType}">红包</label> <label><input id="type_po" name="activity_type" type="radio" value="po" __checked="{activity.type === \'po\'}" onclick="{selectType}">积分</label> <label><input id="type_co" name="activity_type" type="radio" value="co" __checked="{activity.type === \'co\'}" onclick="{selectType}">课程助力</label> </li> <li if="{activity.type !== \'co\'}"><span>启动图片助力: </span><input name="withPic" type="checkbox" __checked="{activity.withPic === \'true\'}" onclick="{toggleWithPic}"></li> <li id="poster" if="{activity.withPic === \'true\' || activity.type === \'co\'}" style="clear: both; min-height: 26px;"><span style="float: left">海报背景图片: </span><input if="{!activity.posterBgImg}" id="posterBgImg" type="file" accept="image/bmp, image/jpg, image/jpeg, image/gif, image/png" onchange="{uploadPosterBgImg}" style="width: 60px;"> <div if="{activity.posterBgImg}" class="posterBgImgCon"><i onclick="{deletePosterBgImg}" class="glyphicon glyphicon-remove"></i><img riot-src="{activity.posterBgImg}" alt=""></div> </li> <li><span>活动名称: </span><input name="activityName" type="text" value="{activity.name}"></li> <li if="{activity.type !== \'co\'}" class="bgImg" style="min-height: 26px"><span style="float: left">背景图片(3张): </span><input if="{activity.bgImg.length != 3}" id="bgImg" type="file" multiple="multiple" accept="image/bmp, image/jpg, image/jpeg, image/gif, image/png" onchange="{uploadBgImg}" style="width: 60px;"> <div if="{activity.bgImg.length >= 1}" class="bgImgCon"><i onclick="{deleteBgImg}" class="glyphicon glyphicon-remove"></i><img riot-src="{activity.bgImg[0]}" alt=""></div> <div if="{activity.bgImg.length >= 2}" class="bgImgCon"><i onclick="{deleteBgImg}" class="glyphicon glyphicon-remove"></i><img riot-src="{activity.bgImg[1]}" alt=""></div> <div if="{activity.bgImg.length >= 3}" class="bgImgCon"><i onclick="{deleteBgImg}" class="glyphicon glyphicon-remove"></i><img riot-src="{activity.bgImg[2]}" alt=""></div> </li> <li style="clear: both; min-height: 26px"><span style="float: left" if="{activity.type !== \'co\'}">分享卡片图片: </span><span style="float: left" if="{activity.type === \'co\'}">消息卡片图片: </span><input if="{!activity.shareImg}" id="shareImg" type="file" accept="image/bmp, image/jpg, image/jpeg, image/gif, image/png" onchange="{uploadShareImg}" style="width: 60px;"> <div if="{activity.shareImg}" class="shareImgCon"><i onclick="{deleteShareImg}" class="glyphicon glyphicon-remove"></i><img riot-src="{activity.shareImg}" alt=""></div> </li> <li style="clear: both"><span>活动时间: </span><input id="startTime" type="date" value="{formatDate(activity.startTime)}"><span> 至 </span><input id="endTime" type="date" value="{formatDate(activity.endTime)}"> </li> <li if="{activity.type !== \'co\'}"><span>活动介绍: </span><div id="desc"></div></li> <li if="{activity.type === \'co\'}"><span>活动介绍: </span><textarea class="form-control" name="co_desc" rows="10"></textarea></li> <li if="{activity.type !== \'co\'}"><span>活动规则: </span><div id="rule"></div></li> <li><span if="{activity.type !== \'co\'}">分享标题自定义: </span><span if="{activity.type === \'co\'}">消息卡片标题: </span><input class="form-control" type="text" name="shareTitle" value="{activity.shareTitle}"></li> <li><span if="{activity.type !== \'co\'}">分享描述自定义: </span><span if="{activity.type === \'co\'}">消息卡片描述: </span><input class="form-control" type="text" name="shareDesc" value="{activity.shareTitle}"></li> <li if="{activity.type !== \'co\'}"><span>基础奖励: </span><input id="base_power" type="number" value="{activity.base_power}"></li> <li if="{activity.type !== \'co\'}"><span>好友助力单次奖励: </span><input name="friend_help_min_power" type="number" value="{activity.friend_help_min_power}"><span> 至 </span><input name="friend_help_max_power" type="number" value="{activity.friend_help_max_power}"></li> <li><span if="{activity.type !== \'co\'}">好友助力上限人数: </span><span if="{activity.type === \'co\'}">最低好友助力人数: </span><input name="friend_help_count_limit" type="number" value="{activity.friend_help_count_limit}"></li> <li if="{activity.type === \'co\'}"><span>课程地址: </span><input class="form-control" type="text" name="courseUrl" value="{activity.courseUrl}"></li> <li style="text-align: center; margin-top: 1em"><input class="btn btn-success" type="button" onclick="{submit}" value="提交"></li> </ul> </div> </div> </div> </div> </div>', 'boss-tenant-power-add .ul {list-style-type: none; text-align: center; padding: 0} boss-tenant-power-add .ul li {margin-bottom: 20px;} boss-tenant-power-add .bgImg #bgImg {float: left; margin-left: 10px;} boss-tenant-power-add .bgImg .bgImgCon {margin-left: 10px; display: -webkit-inline-box; position: relative; border: solid 1px #E8E7E7;} boss-tenant-power-add .bgImgCon i{color: #EC3131; position: absolute; left: 58px; top: 2px; cursor: pointer;} boss-tenant-power-add .bgImgCon div{margin-left: 20px; float: left;} boss-tenant-power-add .bgImgCon img {width: 75px; height: 75px;} boss-tenant-power-add .shareImgCon img {width: 75px; height: 75px;} boss-tenant-power-add #shareImg{float: left; margin-left: 10px;} boss-tenant-power-add .shareImgCon i{color: #EC3131;position: absolute;left: 58px;top: 2px;cursor: pointer;} boss-tenant-power-add .shareImgCon{margin-left: 10px; display: -webkit-inline-box;position: relative; border: solid 1px #E8E7E7;} boss-tenant-power-add .posterBgImgCon img {width: 75px; height: 75px;} boss-tenant-power-add #posterBgImg{float: left; margin-left: 10px;} boss-tenant-power-add .posterBgImgCon i{color: #EC3131;position: absolute;left: 58px;top: 2px;cursor: pointer;} boss-tenant-power-add .posterBgImgCon{margin-left: 10px; display: -webkit-inline-box;position: relative; border: solid 1px #E8E7E7;}', function(opts) {
	        "use strict"
	        var self = nest.presentable(this);
	        self.validators = [];
	        var addPowerActivity = domain.action('addPowerActivity');
	        var loadAllTenantWechatSite = domain.action('loadAllTenantWechatSite');

	        self.activity = {
	            org: __page.tenantId,
	            type: 'rp',
	            bgImg: []
	        }
	        self.on('open', function(ctx){
	            self.trigger('ready', false);
	            self.trigger('view-route-to');
	            setTimeout(function(){
	                $('#rule').summernote({
	                    height: 200,
	                    minHeight: null,
	                    maxHeight: null,
	                    toolbar: [
	                        ['style', ['bold', 'italic', 'underline', 'clear']],
	                        ['fontsize', ['fontsize']],
	                        ['color', ['color']],
	                        ['para', ['ul', 'ol', 'paragraph']],
	                        ['height', ['height']],
	                        ['fontname', ['fontname']],
	                        ['insert', ['picture', 'link', 'video', 'hr', 'table']]
	                    ],
	                    callbacks: {
	                        onImageUpload: function(files) {
	                            uploadEditorImg(files[0], '#rule')
	                        }
	                    }
	                }).summernote('code', self.activity.rule || '');
	            }, 10);
	            setTimeout(function(){
	                $('#desc').summernote({
	                    height: 200,
	                    minHeight: null,
	                    maxHeight: null,
	                    toolbar: [
	                        ['style', ['bold', 'italic', 'underline', 'clear']],
	                        ['fontsize', ['fontsize']],
	                        ['color', ['color']],
	                        ['para', ['ul', 'ol', 'paragraph']],
	                        ['height', ['height']],
	                        ['fontname', ['fontname']],
	                        ['insert', ['picture', 'link', 'video', 'hr', 'table']]
	                    ],
	                    callbacks: {
	                        onImageUpload: function(files) {
	                            uploadEditorImg(files[0], '#desc')
	                        }
	                    }
	                }).summernote('code', self.activity.desc || '');
	            }, 10);
	            loadAllTenantWechatSite.newInvocation(__page.tenantId).onDone(function(data){
	                self.wechatMedias = data;
	                self.update();
	            }).execute();
	        });
	        self.on('mount', function(){
	            self.validators = _.widget.validatify([]);
	        });

	        self.formatDate = function(date) {
	            var dateTime = new Date(date);
	            var year = dateTime.getFullYear();
	            var month = (dateTime.getMonth() + 1)>9 ? (dateTime.getMonth() + 1) : '0' + (dateTime.getMonth() + 1);
	            var day = dateTime.getDate() > 9 ? dateTime.getDate() : '0' + dateTime.getDate();
	            return year + '-' + month + '-' + day;
	        }

	        function uploadFile(file, callback){
	            self.validators = [];
	            if(file.size > 2*1024*1024){
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '文件大小超过限制-2M'
	                });
	                return;
	            }
	            var formData = new FormData();
	            formData.append('file', file);
	            $.ajax({
	                url: __app.settings.api.url + '/file/upload',
	                type: 'POST',
	                data: formData,
	                processData: false,
	                contentType: false,
	                success: function (res) {
	                    callback(null, res);
	                },
	                error: function (res) {
	                    callback(res, null);
	                }
	            });
	        }

	        self.uploadPosterBgImg = function(e){
	            var file = e.currentTarget.files[0];
	            uploadFile(file, function(err, res){
	                if(err) return console.error('upload file err in func uploadPosterBgImg, err: ' + err);
	                self.activity.posterBgImg = window.__app.settings.api.url + '/file?media_id=' + res.media_id;
	                self.update();
	            })
	        }

	        self.uploadBgImg = function(e){
	            var files = e.currentTarget.files;
	            self.validators = [];
	            if(files.length > (3 - self.activity.bgImg.length)){
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '最多上传三张背景图片'
	                });
	                return;
	            }
	            for(var i=0; i<files.length; i++) {
	                uploadFile(files[i], function(err, res){
	                    if(err) return console.error('upload file err in func uploadBgImg, err: ' + err);
	                    self.activity.bgImg.push(window.__app.settings.api.url + '/file?media_id=' + res.media_id);
	                    self.update();
	                });
	            }
	        }

	        self.uploadShareImg = function(e){
	            var file = e.currentTarget.files[0];
	            uploadFile(file, function(err, res){
	                if(err) return console.error('upload file err in func uploadShareImg, err: ' + err);
	                self.activity.shareImg = window.__app.settings.api.url + '/file?media_id=' + res.media_id;
	                self.update();
	            })
	        }

	        self.deleteBgImg = function(e){
	            self.activity.bgImg = self.activity.bgImg.filter(function(item){
	                return item != $($(e.currentTarget).siblings('img')[0]).attr('src');
	            });
	        }

	        self.deletePosterBgImg = function(e){
	            self.activity.posterBgImg = '';
	        }

	        self.deleteShareImg = function(e){
	            self.activity.shareImg = '';
	        }

	        self.clear = function(){
	            self.validators = [];
	        };

	        self.toggleWithPic = function(e){
	            if($(e.currentTarget).is(':checked')){
	                self.activity.withPic = 'true';
	            }else{
	                self.activity.withPic = 'false';
	            }
	            return true;
	        }

	        self.verify = function(data){
	            var legal = true;
	            if(!data.name){
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '活动名称不能为空!'
	                });
	                legal = false;
	            }
	            if(!data.shareDesc){
	                var msg = {
	                    success: false,
	                    field: '提示',
	                    desc: '分享描述不能为空!'
	                };
	                if(data.type === 'co'){
	                    msg.desc = '消息卡片描述不能为空!';
	                }
	                self.validators.push(msg);
	                legal = false;
	            }
	            if(!data.shareTitle){
	                var msg = {
	                    success: false,
	                    field: '提示',
	                    desc: '分享标题不能为空!'
	                };
	                if(data.type === 'co'){
	                    msg.desc = '消息卡片标题不能为空!';
	                }
	                self.validators.push(msg);
	                legal = false;
	            }
	            if((data.withPic && !data.posterBgImg) || (data.type === 'co' && !data.posterBgImg)){
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '必须上传海报背景图片!'
	                });
	                legal = false;
	            }

	            if(!data.shareImg){
	                var msg = {
	                    success: false,
	                    field: '提示',
	                    desc: '必须设置分享卡片图片!'
	                };
	                if(data.type === 'co'){
	                    msg.desc = '必须设置消息卡片图片!';
	                }
	                legal = false;
	            }

	            if(data.type !== 'co' && (!data.bgImg || data.bgImg.length < 1)){
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '必须设置背景图片!'
	                });
	                legal = false;
	            }

	            if(!data.startTime){
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '必须设置活动开始时间!'
	                });
	                legal = false;
	            }
	            if(!data.endTime){
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '必须设置活动结束时间!'
	                });
	                legal = false;
	            }
	            if(data.type !== 'co' && (!data.base_power || !/^[0-9]+$/.test(data.base_power))) {
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '基础奖励必填且必须为数字!'
	                });
	                legal = false;
	            }
	            if(!data.friend_help_count_limit || !/^[0-9]+$/.test(data.friend_help_count_limit)) {
	                var msg = {
	                    success: false,
	                    field: '提示',
	                    desc: '好友助力上限必填且必须为数字!'
	                };
	                if(data.type === 'co'){
	                    msg.desc = '最低好友助力人数必填且必须为数字!';
	                }
	                self.validators.push(msg);
	                legal = false;
	            }
	            if(data.type !== 'co' && (!data.friend_help_max_power || !/^[0-9]+$/.test(data.friend_help_max_power))) {
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '单次助力最大值必填且必须为数字!'
	                });
	                legal = false;
	            }
	            if(data.type !== 'co' && (!data.friend_help_min_power || !/^[0-9]+$/.test(data.friend_help_min_power))) {
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '单次助力最小值必填且必须为数字!'
	                });
	                legal = false;
	            }
	            return legal;
	        };

	        self.submit = function(e){
	            self.validators = [];
	            self.activity.type = $(':radio[name="activity_type"]:checked').val();
	            self.activity.name = self.activityName.value;
	            self.activity.shareTitle = self.shareTitle.value;
	            self.activity.shareDesc = self.shareDesc.value;
	            self.activity.startTime = self.startTime.value;
	            self.activity.endTime = self.endTime.value;
	            self.activity.friend_help_count_limit = self.friend_help_count_limit.value;
	            self.activity.wechatId = self.selectMedia.value;
	            if(self.activity.type !== 'co') {
	                self.activity.base_power = self.base_power.value;
	                self.activity.friend_help_min_power = self.friend_help_min_power.value;
	                self.activity.friend_help_max_power = self.friend_help_max_power.value;
	                self.activity.rule = $('#rule').summernote('code');
	                self.activity.desc = $('#desc').summernote('code') || self.co_desc.value;
	            }else{
	                self.activity.desc = self.co_desc.value;
	                self.activity.courseUrl = self.courseUrl.value;
	            }
	            var allowSubmit = self.verify(self.activity);
	            console.log(self.activity);
	            debugger;
	            if(allowSubmit){
	                addPowerActivity.newInvocation(self.activity).onDone(function(data){
	                    self.activity = {
	                        org: __page.tenantId,
	                        type: 'rp',
	                        bgImg: []
	                    }
	                    riot.route('power/list');
	                }).execute();
	            }
	        }

	        var uploadEditorImg = function(file, editorId){
	            _.uploadImgFile(file, function(err, url){
	                if(!err) {
	                    $(editorId).summernote('insertImage', url);
	                }else{
	                    alert('上传图片失败');
	                }
	            });
	        }

	        self.selectType = function(e){
	            self.activity.type = e.currentTarget.value;
	            return true;
	        }
	    
	});
	riot.tag('boss-tenant-power-edit', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <alert validators="{validators}" clear="{clear}"></alert> <div class="col-md-10 col-md-offset-1"> <div class="jumbotron" style="height: auto; padding: 25px;"> <div id="addForm" class="panel" style="margin-top: 1em;"> <div style="padding-left: 20px; padding-bottom: 20px; padding-top: 15px"><a href="#power/list" style="font-size: 15px; text-decoration: none;">返回活动列表</a></div> <ul class="ul" style="text-align: left; padding-left: 2em"> <li><span>助力活动设置</span></li> <li> <span>活动公众号: </span> <select id="selectMedia" > <option each="{wechatMedias}" value="{originalId}" __selected="{parent.activity.wechatId = originalId}">{name}</option> </select> </li> <li id="type_select"><span>类型: </span> <label><input id="type_rp" name="activity_type" type="radio" value="rp" __checked="{activity.type === \'rp\'}" onclick="{selectType}">红包</label> <label><input id="type_po" name="activity_type" type="radio" value="po" __checked="{activity.type === \'po\'}" onclick="{selectType}">积分</label> <label><input id="type_co" name="activity_type" type="radio" value="co" __checked="{activity.type === \'co\'}" onclick="{selectType}">课程助力</label> </li> <li if="{activity.type !== \'co\'}"><span>启动图片助力: </span><input name="withPic" type="checkbox" __checked="{activity.withPic === \'true\'}" onclick="{toggleWithPic}"></li> <li id="poster" if="{activity.withPic === \'true\' || activity.type === \'co\'}" style="clear: both; min-height: 26px;"><span style="float: left">海报背景图片: </span><input if="{!activity.posterBgImg}" id="posterBgImg" type="file" accept="image/bmp, image/jpg, image/jpeg, image/gif, image/png" onchange="{uploadPosterBgImg}" style="width: 60px;"> <div if="{activity.posterBgImg}" class="posterBgImgCon"><i onclick="{deletePosterBgImg}" class="glyphicon glyphicon-remove"></i><img riot-src="{activity.posterBgImg}" alt=""></div> </li> <li><span>活动名称: </span><input name="activityName" type="text" value="{activity.name}"></li> <li if="{activity.type !== \'co\'}" class="bgImg" style="min-height: 26px"><span style="float: left">背景图片(3张): </span><input if="{activity.bgImg.length != 3}" id="bgImg" type="file" multiple="multiple" accept="image/bmp, image/jpg, image/jpeg, image/gif, image/png" onchange="{uploadBgImg}" style="width: 60px;"> <div if="{activity.bgImg.length >= 1}" class="bgImgCon"><i onclick="{deleteBgImg}" class="glyphicon glyphicon-remove"></i><img riot-src="{activity.bgImg[0]}" alt=""></div> <div if="{activity.bgImg.length >= 2}" class="bgImgCon"><i onclick="{deleteBgImg}" class="glyphicon glyphicon-remove"></i><img riot-src="{activity.bgImg[1]}" alt=""></div> <div if="{activity.bgImg.length >= 3}" class="bgImgCon"><i onclick="{deleteBgImg}" class="glyphicon glyphicon-remove"></i><img riot-src="{activity.bgImg[2]}" alt=""></div> </li> <li style="clear: both; min-height: 26px"><span style="float: left" if="{activity.type !== \'co\'}">分享卡片图片: </span><span style="float: left" if="{activity.type === \'co\'}">消息卡片图片: </span><input if="{!activity.shareImg}" id="shareImg" type="file" accept="image/bmp, image/jpg, image/jpeg, image/gif, image/png" onchange="{uploadShareImg}" style="width: 60px;"> <div if="{activity.shareImg}" class="shareImgCon"><i onclick="{deleteShareImg}" class="glyphicon glyphicon-remove"></i><img riot-src="{activity.shareImg}" alt=""></div> </li> <li style="clear: both"><span>活动时间: </span><input id="startTime" type="date" value="{formatDate(activity.startTime)}"><span> 至 </span><input id="endTime" type="date" value="{formatDate(activity.endTime)}"> </li> <li if="{activity.type !== \'co\'}"><span>活动介绍: </span><div id="desc"></div></li> <li if="{activity.type === \'co\'}"><span>活动介绍: </span><textarea class="form-control" name="co_desc" rows="10" value="{activity.desc}"></textarea></li> <li if="{activity.type !== \'co\'}"><span>活动规则: </span><div id="rule"></div></li> <li><span if="{activity.type !== \'co\'}">分享标题自定义: </span><span if="{activity.type === \'co\'}">消息卡片标题: </span><input class="form-control" type="text" name="shareTitle" value="{activity.shareTitle}"></li> <li><span if="{activity.type !== \'co\'}">分享描述自定义: </span><span if="{activity.type === \'co\'}">消息卡片描述: </span><input class="form-control" type="text" name="shareDesc" value="{activity.shareTitle}"></li> <li if="{activity.type !== \'co\'}"><span>基础奖励: </span><input id="base_power" type="number" value="{activity.base_power}"></li> <li if="{activity.type !== \'co\'}"><span>好友助力单次奖励: </span><input name="friend_help_min_power" type="number" value="{activity.friend_help_min_power}"><span> 至 </span><input name="friend_help_max_power" type="number" value="{activity.friend_help_max_power}"></li> <li><span if="{activity.type !== \'co\'}">好友助力上限人数: </span><span if="{activity.type === \'co\'}">最低好友助力人数: </span><input name="friend_help_count_limit" type="number" value="{activity.friend_help_count_limit}"></li> <li if="{activity.type === \'co\'}"><span>课程地址: </span><input class="form-control" type="text" name="courseUrl" value="{activity.courseUrl}"></li> <li style="text-align: center; margin-top: 1em"><input class="btn btn-success" type="button" onclick="{submit}" value="提交"></li> </ul> </div> </div> </div> </div> </div>', 'boss-tenant-power-edit .ul {list-style-type: none; text-align: center; padding: 0} boss-tenant-power-edit .ul li {margin-bottom: 20px;} boss-tenant-power-edit .bgImg #bgImg {float: left; margin-left: 10px;} boss-tenant-power-edit .bgImg .bgImgCon {margin-left: 10px; display: -webkit-inline-box; position: relative; border: solid 1px #E8E7E7;} boss-tenant-power-edit .bgImgCon i{color: #EC3131; position: absolute; left: 58px; top: 2px; cursor: pointer;} boss-tenant-power-edit .bgImgCon div{margin-left: 20px; float: left;} boss-tenant-power-edit .bgImgCon img {width: 75px; height: 75px;} boss-tenant-power-edit .shareImgCon img {width: 75px; height: 75px;} boss-tenant-power-edit #shareImg{float: left; margin-left: 10px;} boss-tenant-power-edit .shareImgCon i{color: #EC3131;position: absolute;left: 58px;top: 2px;cursor: pointer;} boss-tenant-power-edit .shareImgCon{margin-left: 10px; display: -webkit-inline-box;position: relative; border: solid 1px #E8E7E7;} boss-tenant-power-edit .posterBgImgCon img {width: 75px; height: 75px;} boss-tenant-power-edit #posterBgImg{float: left; margin-left: 10px;} boss-tenant-power-edit .posterBgImgCon i{color: #EC3131;position: absolute;left: 58px;top: 2px;cursor: pointer;} boss-tenant-power-edit .posterBgImgCon{margin-left: 10px; display: -webkit-inline-box;position: relative; border: solid 1px #E8E7E7;}', function(opts) {
	        "use strict"
	        var self = nest.presentable(this);
	        self.validators = [];
	        var loadPowerActivity = domain.action('loadPowerActivity');
	        var updatePowerActivity = domain.action('updatePowerActivity');
	        var loadAllTenantWechatSite = domain.action('loadAllTenantWechatSite');

	        self.on('open', function(ctx){
	            loadPowerActivity.newInvocation({
	                id: ctx.id
	            }).onDone(function(data){
	                self.activity = data;
	                self.trigger('ready', false);
	                self.trigger('view-route-to');
	                setTimeout(function(){
	                    $('#rule').summernote({
	                        height: 200,
	                        minHeight: null,
	                        maxHeight: null,
	                        toolbar: [
	                            ['style', ['bold', 'italic', 'underline', 'clear']],
	                            ['fontsize', ['fontsize']],
	                            ['color', ['color']],
	                            ['para', ['ul', 'ol', 'paragraph']],
	                            ['height', ['height']],
	                            ['fontname', ['fontname']],
	                            ['insert', ['picture', 'link', 'video', 'hr', 'table']]
	                        ],
	                        callbacks: {
	                            onImageUpload: function(files) {
	                                uploadEditorImg(files[0], '#rule')
	                            }
	                        }
	                    }).summernote('code', self.activity.rule || '');
	                }, 10);
	                setTimeout(function(){
	                    $('#desc').summernote({
	                        height: 200,
	                        minHeight: null,
	                        maxHeight: null,
	                        toolbar: [
	                            ['style', ['bold', 'italic', 'underline', 'clear']],
	                            ['fontsize', ['fontsize']],
	                            ['color', ['color']],
	                            ['para', ['ul', 'ol', 'paragraph']],
	                            ['height', ['height']],
	                            ['fontname', ['fontname']],
	                            ['insert', ['picture', 'link', 'video', 'hr', 'table']]
	                        ],
	                        callbacks: {
	                            onImageUpload: function(files) {
	                                uploadEditorImg(files[0], '#desc')
	                            }
	                        }
	                    }).summernote('code', self.activity.desc || '');
	                }, 10);
	            }).execute();
	            loadAllTenantWechatSite.newInvocation(__page.tenantId).onDone(function(data){
	                self.wechatMedias = data;
	                self.update();
	            }).execute();
	        });
	        self.on('mount', function(){
	            self.validators = _.widget.validatify([]);
	        });

	        self.formatDate = function(date) {
	            var dateTime = new Date(date);
	            var year = dateTime.getFullYear();
	            var month = (dateTime.getMonth() + 1)>9 ? (dateTime.getMonth() + 1) : '0' + (dateTime.getMonth() + 1);
	            var day = dateTime.getDate() > 9 ? dateTime.getDate() : '0' + dateTime.getDate();
	            return year + '-' + month + '-' + day;
	        }

	        function uploadFile(file, callback){
	            self.validators = [];
	            if(file.size > 2*1024*1024){
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '文件大小超过限制-2M'
	                });
	                return;
	            }
	            var formData = new FormData();
	            formData.append('file', file);
	            $.ajax({
	                url: __app.settings.api.url + '/file/upload',
	                type: 'POST',
	                data: formData,
	                processData: false,
	                contentType: false,
	                success: function (res) {
	                    callback(null, res);
	                },
	                error: function (res) {
	                    callback(res, null);
	                }
	            });
	        }

	        self.uploadPosterBgImg = function(e){
	            var file = e.currentTarget.files[0];
	            uploadFile(file, function(err, res){
	                if(err) return console.error('upload file err in func uploadPosterBgImg, err: ' + err);
	                self.activity.posterBgImg = window.__app.settings.api.url + '/file?media_id=' + res.media_id;
	                self.update();
	            })
	        }

	        self.uploadBgImg = function(e){
	            var files = e.currentTarget.files;
	            self.validators = [];
	            if(files.length > (3 - self.activity.bgImg.length)){
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '最多上传三张背景图片'
	                });
	                return;
	            }
	            for(var i=0; i<files.length; i++) {
	                uploadFile(files[i], function(err, res){
	                    if(err) return console.error('upload file err in func uploadBgImg, err: ' + err);
	                    self.activity.bgImg.push(window.__app.settings.api.url + '/file?media_id=' + res.media_id);
	                    self.update();
	                });
	            }
	        }

	        self.uploadShareImg = function(e){
	            var file = e.currentTarget.files[0];
	            uploadFile(file, function(err, res){
	                if(err) return console.error('upload file err in func uploadShareImg, err: ' + err);
	                self.activity.shareImg = window.__app.settings.api.url + '/file?media_id=' + res.media_id;
	                self.update();
	            })
	        }

	        self.deleteBgImg = function(e){
	            self.activity.bgImg = self.activity.bgImg.filter(function(item){
	                return item != $($(e.currentTarget).siblings('img')[0]).attr('src');
	            });
	        }

	        self.deletePosterBgImg = function(e){
	            self.activity.posterBgImg = '';
	        }

	        self.deleteShareImg = function(e){
	            self.activity.shareImg = '';
	        }

	        self.clear = function(){
	            self.validators = [];
	        };

	        self.toggleWithPic = function(e){
	            if($(e.currentTarget).is(':checked')){
	                self.activity.withPic = 'true';
	            }else{
	                self.activity.withPic = 'false';
	            }
	            return true;
	        }

	        self.verify = function(data){
	            var legal = true;
	            if(!data.name){
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '活动名称不能为空!'
	                });
	                legal = false;
	            }
	            if(!data.shareDesc){
	                var msg = {
	                    success: false,
	                    field: '提示',
	                    desc: '分享描述不能为空!'
	                };
	                if(data.type === 'co'){
	                    msg.desc = '消息卡片描述不能为空!';
	                }
	                self.validators.push(msg);
	                legal = false;
	            }
	            if(!data.shareTitle){
	                var msg = {
	                    success: false,
	                    field: '提示',
	                    desc: '分享标题不能为空!'
	                };
	                if(data.type === 'co'){
	                    msg.desc = '消息卡片标题不能为空!';
	                }
	                self.validators.push(msg);
	                legal = false;
	            }
	            if((data.withPic && !data.posterBgImg) || (data.type === 'co' && !data.posterBgImg)){
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '必须上传海报背景图片!'
	                });
	                legal = false;
	            }

	            if(!data.shareImg){
	                var msg = {
	                    success: false,
	                    field: '提示',
	                    desc: '必须设置分享卡片图片!'
	                };
	                if(data.type === 'co'){
	                    msg.desc = '必须设置消息卡片图片!';
	                }
	                legal = false;
	            }

	            if(data.type !== 'co' && (!data.bgImg || data.bgImg.length < 1)){
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '必须设置背景图片!'
	                });
	                legal = false;
	            }

	            if(!data.startTime){
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '必须设置活动开始时间!'
	                });
	                legal = false;
	            }
	            if(!data.endTime){
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '必须设置活动结束时间!'
	                });
	                legal = false;
	            }
	            if(data.type !== 'co' && (!data.base_power || !/^[0-9]+$/.test(data.base_power))) {
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '基础奖励必填且必须为数字!'
	                });
	                legal = false;
	            }
	            if(!data.friend_help_count_limit || !/^[0-9]+$/.test(data.friend_help_count_limit)) {
	                var msg = {
	                    success: false,
	                    field: '提示',
	                    desc: '好友助力上限必填且必须为数字!'
	                };
	                if(data.type === 'co'){
	                    msg.desc = '最低好友助力人数必填且必须为数字!';
	                }
	                self.validators.push(msg);
	                legal = false;
	            }
	            if(data.type !== 'co' && (!data.friend_help_max_power || !/^[0-9]+$/.test(data.friend_help_max_power))) {
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '单次助力最大值必填且必须为数字!'
	                });
	                legal = false;
	            }
	            if(data.type !== 'co' && (!data.friend_help_min_power || !/^[0-9]+$/.test(data.friend_help_min_power))) {
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '单次助力最小值必填且必须为数字!'
	                });
	                legal = false;
	            }
	            return legal;
	        };

	        self.submit = function(e){
	            self.validators = [];
	            self.activity.type = $(':radio[name="activity_type"]:checked').val();
	            self.activity.name = self.activityName.value;
	            self.activity.shareTitle = self.shareTitle.value;
	            self.activity.shareDesc = self.shareDesc.value;
	            self.activity.startTime = self.startTime.value;
	            self.activity.endTime = self.endTime.value;
	            self.activity.friend_help_count_limit = self.friend_help_count_limit.value;
	            self.activity.wechatId = self.selectMedia.value;
	            if(self.activity.type !== 'co') {
	                self.activity.base_power = self.base_power.value;
	                self.activity.friend_help_min_power = self.friend_help_min_power.value;
	                self.activity.friend_help_max_power = self.friend_help_max_power.value;
	                self.activity.rule = $('#rule').summernote('code');
	                self.activity.desc = $('#desc').summernote('code') || self.co_desc.value;
	            }else{
	                self.activity.desc = self.co_desc.value;
	                self.activity.courseUrl = self.courseUrl.value;
	            }
	            var allowSubmit = self.verify(self.activity);

	            if(allowSubmit){
	                updatePowerActivity.newInvocation(self.activity).onDone(function(data){
	                    self.activity = {
	                        org: __page.tenantId,
	                        type: 'rp',
	                        bgImg: []
	                    }
	                    riot.route('power/list');
	                }).execute();
	            }
	        }

	        var uploadEditorImg = function(file, editorId){
	            _.uploadImgFile(file, function(err, url){
	                if(!err) {
	                    $(editorId).summernote('insertImage', url);
	                }else{
	                    alert('上传图片失败');
	                }
	            });
	        }

	        self.selectType = function(e){
	            self.activity.type = e.currentTarget.value;
	            return true;
	        }
	    
	});
	riot.tag('boss-tenant-power-list', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <div class="col-md-10 col-md-offset-1"> <div class="jumbotron" style="height: auto; padding: 25px;"> <div id="powerList" class="panel" style="margin-top: 1em; padding: 0; min-height: 30em"> <div style="padding-left: 20px; padding-top: 10px;"><a id="add" href="#power/add" style="font-size: 15px; text-decoration: none; cursor: pointer">新增</a> </div> <ul class="ul" id="list"> <li> <strong class="col-md-2">活动名称</strong> <strong class="col-md-2">开始时间</strong> <strong class="col-md-2">结束时间</strong> <strong class="col-md-2">类型</strong> <strong class="col-md-2">海报二维码</strong> <strong class="col-md-2">操作</strong> </li> <li> <hr width="100%"> </li> <li class="actItem" each="{activityArr}"> <strong class="col-md-2"><a href="#power/edit/_{_id}">{name}</a></strong> <strong class="col-md-2">{_.date.format(new Date(startTime), \'yyyy-MM-dd\')}</strong> <strong class="col-md-2">{_.date.format(new Date(endTime), \'yyyy-MM-dd\')}</strong> <strong class="col-md-2">{__app.enums.PowerType.values[type]}</strong> <strong class="col-md-2 actionCon"> <a class="fa fa-qrcode fa-lg" data-toggle="modal" data-target="#showImg" onclick="{parent.showImg}"></a> </strong> <strong if="{type !== \'co\'}" class="col-md-2 actionCon"><a href="{ __app.settings.app.url + \'/marketing/tenant/power/\' + wechatId + \'/activity?id=\' + _id }" target="_blank">查看</a><a href="{__app.settings.api.url + \'/marketing/tenant/power/exportParticipants?id=\' + _id }" target="_blank" >导出</a></strong> <strong if="{type === \'co\'}" class="col-md-2 actionCon"><a href="javascript:void(0)">无</a></strong> </li> </ul> </div> </div> </div> </div> </div>', 'boss-tenant-power-list .ul {list-style-type: none; text-align: center; padding: 0} boss-tenant-power-list .ul li {margin-bottom: 20px;} boss-tenant-power-list .actItem {height: 17px; overflow: hidden; margin-top: 2px;} boss-tenant-power-list li strong{ padding: 0 !important; margin: 0 !important; } boss-tenant-power-list .actionCon a{ margin-left: 10px; cursor: pointer; }', function(opts) {
	        "use strict"
	        var self = nest.presentable(this);
	        var loadPowerActivities = domain.action('loadPowerActivities');
	        self.showImg = function(e){
	            var errorMsg = '';
	            if(!e.item.qrCodeUrl){
	                errorMsg = '该活动不是海报助力活动'
	            }
	            _.widget.showImg({
	                title: '用微信扫描下方二维码获取活动海报',
	                imgUrl: e.item.qrCodeUrl,
	                width: '300px',
	                height: '300px',
	                errorMsg: errorMsg
	            });
	        }
	        self.on('open', function(ctx){
	            loadPowerActivities.newInvocation({
	                tenantId: __page.tenantId
	            }).onDone(function(data){
	                self.activityArr = data;
	                self.trigger('ready', false);
	                self.trigger('view-route-to');
	            }).execute();
	        });
	        self.on('mount', function(){
	            self.validators = _.widget.validatify([]);
	        });
	    
	});
	riot.tag('boss-tenant-sd-bespeaks', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <div class="row"> <div class="col-md-3 col-lg-3"> <boss-tenant-sd-left path="sd/bespeaks"></boss-tenant-sd-left> </div> <div class="col-md-9 col-lg-9"> <div class="row" style="text-align: center"> <h4>预约管理</h4> </div> <div class="row"> <form class="form-inline"> <div class="col-md-6 col-lg-6"> <div class="form-group"> <label for="bespeakStatus">状态</label> <select id="bespeakStatus" class="form-control" onchange="{onSelect}"> <option value="">全部状态</option> <option selected value="{__app.enums.LifeFlag.names.Active}">待处理</option> <option value="{__app.enums.LifeFlag.names.Deleted}">已处理</option> </select> </div> <input onclick="{onSearch}" class="btn btn-primary" type="button" value="查询"> </div> </form> </div> <div class="row" style="margin-top: 10px"> <table class="table table-striped"> <thead> <tr> <th>客户昵称</th> <th>预约产品</th> <th>日期</th> <th>电话</th> <th>状态</th> <th>成单</th> </tr> </thead> <tbody> <tr each="{bespeaks}"> <td> <a href="#sd/bespeaks/_{_id}"> {user.nickname} </a> </td> <td> { product.name } </td> <td> {_.date.format(new Date(crtOn), \'yyyy-MM-dd hh点mm分\')} </td> <td> { telephone } </td> <td> { lFlg === __app.enums.LifeFlag.names.Active ? \'待处理\': \'已处理\' } </td> <td> <div if="{lFlg === __app.enums.LifeFlag.names.Active}"> <input onclick="{parent.onOrderCreate}" data-toggle="modal" data-target="#orderModal" type="button" class="btn btn-default" value="成单"> <input onclick="{parent.onOrderGiveUp}" data-toggle="modal" data-target="#modal" type="button" class="btn btn-default" value="弃单"> </div> </td> </tr> </tbody> </table> </div> </div> </div> <div id="orderModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title">生成订单</h4> </div> <div class="modal-body"> <form class="form-horizontal"> <div class="form-group"> <label class="col-sm-2 control-label">媒体价</label> <div class="col-sm-10"> <span>{currBespeak.product.listPrice}</span> </div> </div> <div class="form-group"> <label for="finalPrice" class="col-sm-2 control-label">成交价</label> <div class="col-sm-10"> <input class="form-control" oninput="{onInput}" id="finalPrice" type="number" name="finalPrice"> </div> </div> </form> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">取消</button> <button __disabled="{finalPrice.value.trim() === \'\' || parseInt(finalPrice.value.trim(), 10)<0 || parseInt(finalPrice.value.trim(), 10) > currBespeak.product.listPrice}" onclick="{onSubmitOrder}" data-dismiss="modal" type="button" class="btn btn-primary">确认</button> </div> </div> </div> </div> </div>', function(opts) {
	        "use strict";
	        var self = nest.presentable(this);
	        var findBespeaksAction = domain.action('findBespeaks');
	        var createOrderAction = domain.action('createOrder');
	        var updateBespeakByIdAction = domain.action('updateBespeakById');

	        self.bespeaks = [];
	        self.currBespeak = {};
	        self.filter = {
	            tenant: __page.tenantId,
	            lFlg: 'a'
	        };
	        self.on('open', function(){
	            findBespeaksAction.newInvocation({
	                filter: self.filter
	            }).onDone(function(res){
	                if(res.error){
	                    return alert("failed to search bespeaks");
	                }
	                self.bespeaks= res.bespeaks;
	                self.trigger('ready', false);
	                self.trigger('view-route-to');
	            }).execute();
	        });
	        self.onOrderCreate = function(e){
	            self.finalPrice.value = "";
	            self.currBespeak = e.item;
	        };
	        self.onOrderGiveUp = function(e){
	            self.currBespeak = e.item;
	            _.widget.confirm({
	                title: '操作确认',
	                content: '你确认要“销毁”该预约吗？',
	                callback: function(){
	                    self.currBespeak.lFlg = __app.enums.LifeFlag.names.Deleted;
	                    console.log(e.item);
	                    updateBespeakByIdAction.newInvocation({
	                        id: self.currBespeak._id,
	                        o: {
	                            media: self.currBespeak.media,
	                            lFlg: self.currBespeak.lFlg
	                        }
	                    }).onDone(function(res){
	                        if(res.error){
	                            alert('销毁预约失败');
	                            return;
	                        }
	                        self.currBespeak = null;
	                        self.bespeaks = self.bespeaks.filter(function(bespeak){
	                            return bespeak._id != res.bespeak._id;
	                        });
	                        self.update();
	                    }).execute();
	                }
	            });
	        };
	        self.onSearch = function(e){
	            findBespeaksAction.newInvocation({
	                filter: self.filter
	            }).onDone(function(res){
	                if(res.error){
	                    return alert("failed to search bespeaks");
	                }
	                self.update({bespeaks: res.bespeaks});
	            }).execute();
	        };

	        self.onInput = function noop(){};

	        self.onSubmitOrder = function(e){
	            createOrderAction.newInvocation({
	                bespeak: self.currBespeak,
	                finalPrice : self.finalPrice.value.trim()
	            }).onDone(function(res){
	                if(res.error){
	                    alert('成单失败');
	                    return
	                }
	                self.currBespeak = null;
	                self.bespeaks = self.bespeaks.filter(function(bespeak){
	                    return bespeak._id != res.order.bespeak;
	                });
	                self.update();
	            }).execute();
	        };
	        self.onSelect = function(e){
	            var liveStatus = self.bespeakStatus.value;
	            console.log(liveStatus);
	            if(!liveStatus){
	                if(self.filter.hasOwnProperty('lFlg')){
	                    delete self.filter['lFlg'];
	                }
	                return;
	            }
	            self.filter.lFlg = liveStatus;
	        }
	    
	});
	riot.tag('boss-tenant-sd-catalogs-add', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <div class="row"> <div class="col-md-3 col-lg-3"> <boss-tenant-sd-left path="sd/catalogs"></boss-tenant-sd-left> </div> <div class="col-md-9 col-lg-9"> <div class="row" style="text-align: center"> <h4>新建课程目录</h4> </div> <alert validators="{validators}" clear="{clear}"></alert> <div class="row"> <div class="panel panel-default"> <div class="panel-heading">基本信息</div> <div class="panel-body"> <form class="form-horizontal"> <div class="form-group text-left"> <label for="catalogNameInput" class="col-sm-2 control-label text-left">课程目录名称</label> <div class="col-sm-10 {has-error: !catalogNameInput.value.trim()} has-feedback"> <input onblur="{catalogNameInputBlur}" type="text" class="form-control " id="catalogNameInput"> </div> </div> <div class="form-group"> <label for="catalogWechatsiteInput" class="col-sm-2 control-label">公众号</label> <div class="col-sm-10"> <select class="form-control" id="catalogWechatsiteInput" style="width: 200px"> <option each="{wechatsites}" value="{_id}">{name}</option> </select> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">上/下架状态</label> <div class="col-sm-10" style="height: 32px;line-height: 32px"> <span>待上架</span> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">创建时间</label> <div class="col-sm-10"> <span>{_.date.format(new Date(), \'yyyy-MM-dd hh点mm分\') }</span> </div> </div> <div class="form-group"> <label for="catalogDescInput" class="col-sm-2 control-label">备注</label> <div class="col-sm-10"> <textarea onblur="{catalogDescInputBlur}" type="password" class="form-control" id="catalogDescInput"></textarea> </div> </div> </form> </div> </div> </div> <div class="row" style="margin-top: 10px"> <div class="col-md-12 col-lg-12 text-center"> <input __disabled="{!courseMediaPriceInput.value.trim() || !courseNameInput.value.trim()}" onclick="{onSubmit}" type="button" class="btn btn-primary" value="保存"> <a href="#sd/catalogs" class="btn btn-default">取消</a> </div> </div> </div> </div> </div>', '.form-horizontal .control-label{ text-align: left !important; }', function(opts) {
	        "use strict"
	        var self = nest.presentable(this);
	        var loadAllTenantWechatSiteAction = domain.action('loadAllTenantWechatSite');
	        var createCatalogAction = domain.action('createCatalog');
	        self.on('open', function(){
	            self.catalog = {};
	            self.catalog.tenant = __page.tenantId;
	            self.validators = [];
	            self.catalogNameInput.value = "";
	            self.catalogDescInput.value = "";
	            loadAllTenantWechatSiteAction.newInvocation(__page.tenantId)
	                .onDone(function(res){
	                    self.wechatsites = res;
	                    self.trigger('ready', false);
	                    self.trigger('view-route-to');
	                })
	                .execute();
	        });
	        self.catalogNameInputBlur = function(){
	            var catalogName = self.catalogNameInput.value.trim();
	            if(!catalogName){
	                return self.validators.push({
	                    success: false,
	                    field: '课程目录名称',
	                    desc: '不能为空!'
	                });
	            }
	            self.catalog.name = catalogName;
	        };
	        self.clear = function(){
	            self.validators = [];
	        };
	        self.catalogDescInputBlur = function(){
	            self.catalog.desc = self.catalogDescInput.value.trim();
	        };
	        self.onSubmit = function(){
	            self.catalog.media = self.catalogWechatsiteInput.value;
	            createCatalogAction.newInvocation(self.catalog)
	                .onDone(function(res){
	                    riot.route('sd/catalogs');
	                })
	                .execute();
	        };
	    
	});
	riot.tag('boss-tenant-sd-catalogs-detail', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <div class="row"> <div class="col-md-3 col-lg-3"> <boss-tenant-sd-left path="sd/catalogs"></boss-tenant-sd-left> </div> <div class="col-md-9 col-lg-9"> <div> <div class="row" style="text-align: center"> <a href="#sd/catalogs" style="position: absolute; left: 0px; top: 10px">返回课程目录列表</a> <h4>{catalog.name}</h4> </div> <alert validators="{validators.raw()}" clear="{clear}"></alert> <div class="row"> <div class="panel panel-default"> <div class="panel-body"> <div> <table class="table table-narrow"> <tr> <td>所属公众号</td> <td>{catalog.media.name}</td> </tr> <tr> <td>租户类型</td> <td>{__app.enums.PartyType.values[catalog.tenant.type]}</td> </tr> <tr> <td>状态</td> <td>{__app.enums.LifeFlag.values[catalog.lFlg]}</td> </tr> <tr> <td>创建时间</td> <td>{_.date.format(new Date(catalog.crtOn), \'yyyy-MM-dd hh点mm分\')}</td> </tr> <tr> <td>备注</td> <td>{catalog.desc}</td> </tr> <tr> <td>微站URL</td> <td><span>{__app.settings.app.url + "/sd/" + catalog.media.originalId + "/catalog?id=" + catalog._id}</span></td> </tr> </table> <div class="row text-center" style="margin-top: 20px; margin-bottom: 20px"> <div class="col-md-12 col-lg-12"> <a href="#sd/catalogs/edit/_{catalog._id}" class="btn btn-default">修改</a> <input if="{catalog.lFlg === __app.enums.LifeFlag.names.Active}" onclick="{onInactive}" data-toggle="modal" data-target="#modal" value="锁定" type="button" class="btn btn-default"> <input if="{catalog.lFlg === __app.enums.LifeFlag.names.Inactive}" onclick="{onActive}" data-toggle="modal" data-target="#modal" value="激活" type="button" class="btn btn-default"> <input onclick="{onDelete}" data-toggle="modal" data-target="#modal" value="删除" type="button" class="btn btn-default"> </div> </div> <div class="row" style="margin-top: 20px; margin-bottom: 20px"> <div class="col-md-12 col-lg-12"> <h4 class="text-left">课程目录</h4> <hr> <div class="text-right"> <input onclick="{onAddProduct}" type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" value="添加"> </div> <div> <table class="table table-striped"> <thead> <tr> <th>名称</th> <th>状态</th> <th>上/下架时间</th> <th>创建时间</th> <th>备注</th> <th>二维码</th> </tr> </thead> <tbody> <tr each="{populateProducts(catalog.products)}"> <td> {name} </td> <td> { __app.enums.LiveStatus.values[liveStatus] } </td> <td> { actionTime && _.date.format(new Date(actionTime), \'yyyy-MM-dd hh点mm分\') || \'空\'} </td> <td> {_.date.format(new Date(crtOn), \'yyyy-MM-dd hh点mm分\')} </td> <td> { desc } </td> <td> <i class="fa fa-qrcode fa-lg" aria-hidden="true" data-toggle="modal" data-target="#showImg" onclick="{parent.obtainQr(this)}"></i> </td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div> </div> </div> <div id="myModal" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"> <div class="modal-dialog modal-lg"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title">选择课程</h4> </div> <div class="modal-body"> <table class="table table-striped"> <thead> <tr> <th> <div class="checkbox"> <label> <input id="toggleInput" type="checkbox" onclick="{onToggleSelectAll}"> </label> </div> </th> <th>名称</th> <th>状态</th> <th>上/下架时间</th> <th>创建时间</th> <th>备注</th> </tr> </thead> <tbody> <tr each="{courses}"> <td> <div class="checkbox"> <label> <input name="CourseCheckBox" type="checkbox" __checked="{parent.isChecked(_id)}" value="{_id}"> </label> </div> </td> <td> {name} </td> <td> { __app.enums.LiveStatus.values[liveStatus] } </td> <td> { actionTime && _.date.format(new Date(actionTime), \'yyyy-MM-dd hh点mm分\') || \'空\'} </td> <td> {_.date.format(new Date(crtOn), \'yyyy-MM-dd hh点mm分\')} </td> <td> { desc } </td> </tr> </tbody> </table> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">取消</button> <button onclick="{onSubmitCourses}" data-dismiss="modal" type="button" class="btn btn-primary">确认</button> </div> </div> </div> </div> </div> </div> </div> </div>', 'boss-tenant-sd-catalogs-detail .form-horizontal .control-label{ text-align: left !important; } boss-tenant-sd-catalogs-detail .vcenter { vertical-align: middle; } boss-tenant-sd-catalogs-detail .table-narrow tr td{ border: none !important; width: 30% !important; } boss-tenant-sd-catalogs-detail .my-table{ width: 100%; } boss-tenant-sd-catalogs-detail .my-table td{ width: 33.33333%; } boss-tenant-sd-catalogs-detail .panel-default { border-top: none; border-color: #ddd; }', function(opts) {
	        "use strict"
	        var self = nest.presentable(this);
	        var loadCatalogByIdAction = domain.action('loadCatalogById');
	        var findCoursesAction = domain.action('findCourses');
	        var updateCatalogByIdAction = domain.action('updateCatalogById');
	        var fetchSdQrByProductAndWechatSiteAction = domain.action('fetchSdQrByProductAndWechatSite');

	        self.on('open', function(ctx){
	            var catalogId = ctx.req.paramList[0];
	            loadCatalogByIdAction.newInvocation({
	                id: catalogId
	            }).onDone(function(res){
	                self.catalog = res.catalog;
	                findCoursesAction.newInvocation({
	                    tenant: __page.tenantId
	                }).onDone(function(res){
	                    self.courses = res.courses;
	                    self.trigger('ready', false);
	                    self.trigger('view-route-to');
	                }).execute();
	            }).execute();
	        });
	        self.on('mount', function(){
	            self.validators = _.widget.validatify([]);
	        });

	        self.isChecked = function(id){
	            return self.catalog.products.map(function(product){return product._id}).indexOf(id)>=0;
	        };

	        self.populateProducts = function(products){
	            return products.map(function(product){
	                return self.courses.filter(function(course){
	                    return course._id === product._id;
	                })[0]
	            });
	        };

	        self.onToggleSelectAll = function(){
	            var inputs =[].slice.apply(document.querySelectorAll('input[name="CourseCheckBox"]'));
	            if(self.toggleInput.checked === false){
	                inputs.map(function(input){
	                    input.checked = false;
	                });
	            }else{
	                inputs.map(function(input){
	                    input.checked = true;
	                });
	            }
	            return true;
	        };

	        self.onInactive = function(e){
	            _.widget.confirm({
	                title: '操作确认',
	                content: '你确认要“锁定”该课程目录吗？',
	                callback: function(){
	                    self.catalog.lFlg = __app.enums.LifeFlag.names.Inactive;
	                    updateCatalogByIdAction.newInvocation({
	                        id: self.catalog._id,
	                        o: self.catalog
	                    }).onDone(function(res){
	                        self.update();
	                    }).execute();
	                }
	            });
	        };

	        self.obtainQr = function(product){
	            return function(e){
	                var qrTicket = null;
	                var qrUrl = null;
	                if(typeof self.catalog.media != 'object' || !product){
	                    return;
	                }
	                if(!product.poster){
	                    _.widget.showImg({
	                        title: '扫一扫获取课程海报',
	                        imgUrl: '',
	                        width: '300px',
	                        height: '300px',
	                        errorMsg: '该课程尚没有背景图片'
	                    });
	                    return;
	                }
	                if(product.qr && product.qr.ticket){
	                    qrTicket = product.qr.ticket || product.qr.ticket;
	                    qrUrl = 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' + qrTicket;
	                    _.widget.showImg({
	                        title: '扫一扫获取课程海报',
	                        imgUrl: qrUrl,
	                        width: '300px',
	                        height: '300px'
	                    });
	                    return;
	                }
	                fetchSdQrByProductAndWechatSiteAction.newInvocation({
	                    product: _.toObjectFromRiot(product),
	                    media: self.catalog.media
	                }).onDone(function(res){
	                    if(res.error){
	                        alert('获取二维码失败');
	                        return;
	                    }
	                    qrTicket = res.product.qr.ticket;
	                    qrUrl = 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' + qrTicket;
	                    _.widget.showImg({
	                        title: '扫一扫获取课程海报',
	                        imgUrl: qrUrl,
	                        width: '300px',
	                        height: '300px'
	                    });
	                    self.catalog.products.forEach(function(product, i){
	                        if(res.product._id === product._id){
	                            self.catalog.products[i] = res.product;
	                        }
	                    })
	                }).execute();
	            }
	        };

	        self.onActive = function(){
	            _.widget.confirm({
	                title: '操作确认',
	                content: '你确认要“锁定”该课程目录吗？',
	                callback: function(){
	                    self.catalog.lFlg = __app.enums.LifeFlag.names.Active;
	                    updateCatalogByIdAction.newInvocation({
	                        id: self.catalog._id,
	                        o: self.catalog
	                    }).onDone(function(res){
	                        self.update();
	                    }).execute();
	                }
	            });
	        };



	        self.onDelete = function(){
	            _.widget.confirm({
	                title: '操作确认',
	                content: '你确认要“删除”该课程目录吗？',
	                callback: function(){
	                    self.catalog.lFlg = __app.enums.LifeFlag.names.Deleted;
	                    updateCatalogByIdAction.newInvocation({
	                        id: self.catalog._id,
	                        o: self.catalog
	                    }).onDone(function(res){
	                        if(!res.error){
	                            riot.route('sd/catalogs');
	                        }
	                    }).execute();
	                }
	            });
	        };

	        self.onSubmitCourses = function(){
	            var checkedArr = document.querySelectorAll('input[name="CourseCheckBox"]:checked');
	            var ids = [];
	            self.catalog.products = [].slice.apply(checkedArr).map(function(input) {
	                ids.push(input.value);
	                return self.courses.filter(function(course){
	                    return course._id === input.value
	                })[0]
	            });

	            var catalogMeta = {};
	            catalogMeta._id = self.catalog._id;
	            catalogMeta.products = ids;

	            updateCatalogByIdAction.newInvocation({
	                id: self.catalog._id,
	                o: catalogMeta
	            }).onDone(function(res){
	                if(res.error){
	                    alert("保存课程失败");
	                }
	            }).execute();
	        };

	        self.onAddProduct = function(){
	            self.toggleInput.checked = false;
	        };
	    
	});
	riot.tag('boss-tenant-sd-catalogs-edit', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <div class="row"> <div class="col-md-3 col-lg-3"> <boss-tenant-sd-left path="sd/catalogs"></boss-tenant-sd-left> </div> <div class="col-md-9 col-lg-9"> <div class="row" style="text-align: center"> <h4>{catalog.name}</h4> </div> <alert validators="{validators.raw()}" clear="{clear}"></alert> <div class="row"> <div class="panel panel-default"> <div class="panel-body"> <form class="form-horizontal"> <div class="form-group text-left"> <label for="catalogNameInput" class="col-sm-2 control-label text-left">课程目录名称</label> <div class="col-sm-10 {has-error: !catalogNameInput.value.trim()} has-feedback"> <input onblur="{catalogNameInputBlur}" value="{catalog.name}" id="catalogNameInput" type="text" class="form-control "> </div> </div> <div class="form-group"> <label for="catalogMediaInput" class="col-sm-2 control-label">公众号</label> <div class="col-sm-10"> <select id="catalogMediaInput" class="form-control"> <option each="{wechatsites}" value="{_id}">{name}</option> </select> </div> </div> <div class="form-group"> <label for="catalogDescInput" class="col-sm-2 control-label">备注</label> <div class="col-sm-10"> <textarea onblur="{catalogDescInputBlur}" type="password" class="form-control" id="catalogDescInput"> {catalog.desc} </textarea> </div> </div> </form> </div> </div> </div> <div class="row" style="margin-top: 10px"> <div class="col-md-12 col-lg-12 text-center"> <input __disabled="{!courseMediaPriceInput.value.trim() || !courseNameInput.value.trim()}" onclick="{onSubmit}" type="button" class="btn btn-primary" value="保存"> <a href="#sd/catalogs" class="btn btn-default">取消</a> </div> </div> </div> </div> </div> </div>', '.form-horizontal .control-label{ text-align: left !important; } .vcenter { vertical-align: middle; } .my-table{ width: 100%; } .my-table td{ width: 33.33333%; } .panel-default { border-top: none; border-color: #ddd; }', function(opts) {
	        "use strict"
	        var self = nest.presentable(this);
	        var loadCatalogByIdAction = domain.action('loadCatalogById');
	        var updateCatalogByIdAction = domain.action('updateCatalogById');
	        var loadAllTenantWechatSiteAction = domain.action('loadAllTenantWechatSite');

	        self.on('open', function(ctx){
	            var courseId = ctx.req.paramList[0];
	            loadCatalogByIdAction.newInvocation({
	                id: courseId
	            }).onDone(function(res){
	                self.catalog = res.catalog;
	                loadAllTenantWechatSiteAction.newInvocation(__page.tenantId)
	                    .onDone(function(res){
	                        self.wechatsites = res;
	                        self.trigger('ready', false);
	                        self.trigger('view-route-to');
	                    })
	                    .execute();
	            }).execute();
	        });
	        self.on('mount', function(){
	            self.validators = _.widget.validatify([]);
	        });
	        self.catalogNameInputBlur = function(){
	            var catalogName = self.catalogNameInput.value.trim();
	            if(!catalogName){
	                return self.validators.addToSet({
	                    success: false,
	                    field: '课程名称',
	                    desc: '不能为空!',
	                    key: 'courseNameInput'
	                });
	            }
	            self.catalog.name = catalogName;
	        };
	        self.clear = function(){
	            self.validators.clear();
	        };
	        self.catalogDescInputBlur = function(){
	            self.catalog.desc = self.catalogDescInput.value.trim();
	        };

	        self.onSubmit = function(){
	            var req = {
	                id: self.catalog._id,
	                o: self.catalog
	            };

	            updateCatalogByIdAction.newInvocation(req)
	                .onDone(function(res){
	                    riot.route('sd/catalogs');
	                })
	                .execute();

	        };
	    
	});
	riot.tag('boss-tenant-sd-catalogs', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <div class="row"> <div class="col-md-3 col-lg-3"> <boss-tenant-sd-left path="sd/catalogs"></boss-tenant-sd-left> </div> <div class="col-md-9 col-lg-9"> <div class="row" style="text-align: center"> <h4>课程目录管理</h4> </div> <div class="row"> <form class="form-inline"> <div class="col-md-6 col-lg-6"> <div class="form-group"> <label for="catalogStatus">状态</label> <select id="catalogStatus" class="form-control" onchange="{onSelect}"> <option value="">全部状态</option> <option value="{__app.enums.LifeFlag.names.Active}">已激活</option> <option value="{__app.enums.LifeFlag.names.Inactive}">已锁定</option> <option value="{__app.enums.LifeFlag.names.Deleted}">已删除</option> </select> </div> <input onclick="{onSearch}" class="btn btn-primary" type="button" value="查询"> </div> <div class="col-md-6 col-lg-6 text-right"> <a class="btn btn-primary" href="#sd/catalogs/add">添加</a> </div> </form> </div> <div class="row" style="margin-top: 10px"> <table class="table table-striped"> <thead> <tr> <th>名称</th> <th>状态</th> <th>公众号</th> <th>创建时间</th> <th>备注</th> </tr> </thead> <tbody> <tr each="{catalogs}"> <td> <a href="#sd/catalogs/_{_id}"> {name} </a> </td> <td> { __app.enums.LifeFlag.values[lFlg] } </td> <td> { media.name } </td> <td> {_.date.format(new Date(crtOn), \'yyyy-MM-dd hh点mm分\')} </td> <td> { desc } </td> </tr> </tbody> </table> </div> </div> </div> </div>', function(opts) {
	        "use strict"
	        var self = nest.presentable(this);
	        var findCatalogsAction = domain.action('findCatalogs');
	        self.courses = [];
	        self.filter = {
	            tenant: __page.tenantId
	        };
	        self.on('open', function(){
	            findCatalogsAction.newInvocation({
	                filter: self.filter
	            }).onDone(function(res){
	                if(res.error){
	                    return alert("failed to search courses");
	                }
	                self.catalogs = res.catalogs;
	                self.trigger('ready', false);
	                self.trigger('view-route-to');
	            }).execute();
	        });
	        self.onSearch = function(e){
	            findCatalogsAction.newInvocation({
	                filter: self.filter
	            }).onDone(function(res){
	                if(res.error){
	                    return alert("failed to search courses");
	                }
	                self.update({catalogs: res.catalogs});
	            }).execute();
	        };
	        self.onSelect = function(e){
	            var lFlg = self.catalogStatus.value;
	            if(!lFlg){
	                if(self.filter.hasOwnProperty('lFlg')){
	                    delete self.filter['lFlg'];
	                }
	                return;
	            }
	            self.filter.lFlg = lFlg;
	        }
	    
	});
	riot.tag('boss-tenant-sd-courses-add', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <div class="row"> <div class="col-md-3 col-lg-3"> <boss-tenant-sd-left path="sd/courses"></boss-tenant-sd-left> </div> <div class="col-md-9 col-lg-9"> <div class="row" style="text-align: center"> <h4>新建课程</h4> </div> <alert validators="{validators}" clear="{clear}"></alert> <div class="row"> <div class="panel panel-default"> <div class="panel-heading">基本信息</div> <div class="panel-body"> <form class="form-horizontal"> <div class="form-group text-left"> <label for="courseNameInput" class="col-sm-2 control-label text-left">课程名称</label> <div class="col-sm-10 {has-error: !courseNameInput.value.trim()} has-feedback"> <input onblur="{courseNameInputBlur}" type="text" class="form-control " id="courseNameInput"> </div> </div> <div class="form-group"> <label for="coursePromoteInput" class="col-sm-2 control-label">推广语</label> <div class="col-sm-10"> <input type="text" class="form-control" id="coursePromoteInput" onblur="{coursePromoteInputBlur}"> </div> </div> <div class="form-group"> <label for="courseMediaPriceInput" class="col-sm-2 control-label">媒体价 ( :元 )</label> <div class="col-sm-10 {has-error: !courseMediaPriceInput.value.trim()}"> <input onblur="{courseMediaPriceInputBlur}" type="number" class="form-control" id="courseMediaPriceInput"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">上/下架状态</label> <div class="col-sm-10" style="height: 32px;line-height: 32px"> <span>待上架</span> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">上/下架时间</label> <div class="col-sm-10" style="height: 32px;line-height: 32px"> <span>空</span> </div> </div> <div class="form-group"> <label for="courseDescInput" class="col-sm-2 control-label">备注</label> <div class="col-sm-10"> <textarea onblur="{courseDescInputBlur}" type="password" class="form-control" id="courseDescInput"></textarea> </div> </div> </form> </div> </div> </div> <div class="row" style="margin-top: 10px"> <div class="col-md-12 col-lg-12 text-center"> <input __disabled="{!courseMediaPriceInput.value.trim() || !courseNameInput.value.trim()}" onclick="{onSubmit}" type="button" class="btn btn-primary" value="保存"> <a href="#sd/courses" class="btn btn-default">取消</a> </div> </div> </div> </div> </div>', '.form-horizontal .control-label{ text-align: left !important; }', function(opts) {
	        "use strict"
	        var self = nest.presentable(this);
	        var createCourseAction = domain.action('createCourse');
	        self.on('open', function(){
	            self.course = {};
	            self.course.tenant = __page.tenantId;
	            self.validators = [];
	            self.courseMediaPriceInput.value = "";
	            self.courseNameInput.value = "";
	            self.coursePromoteInput.value = "";
	            self.courseDescInput.value = "";
	            self.trigger('ready', false);
	            self.trigger('view-route-to');
	        });
	        self.courseNameInputBlur = function(){
	            var courseName = self.courseNameInput.value.trim();
	            if(!courseName){
	                return self.validators.push({
	                    success: false,
	                    field: '课程名称',
	                    desc: '不能为空!'
	                });
	            }
	            self.course.name = courseName;
	        };
	        self.clear = function(){
	            self.validators = [];
	        };
	        self.courseDescInputBlur = function(){
	            self.course.desc = self.courseDescInput.value.trim();
	        };
	        self.coursePromoteInputBlur = function(){
	            self.course.slogan = self.coursePromoteInput.value.trim();
	        };
	        self.courseMediaPriceInputBlur = function(){
	            var listPrice = self.courseMediaPriceInput.value.trim();
	            if(!listPrice){
	                return self.validators.push({
	                    success: false,
	                    field: '媒体价',
	                    desc: '不能为空!'
	                });
	            }
	            self.course.listPrice = listPrice;
	        };
	        self.onSubmit = function(){
	            createCourseAction.newInvocation(self.course)
	                .onDone(function(res){
	                    riot.route('sd/courses');
	                })
	                .execute();
	        };
	    
	});
	riot.tag('boss-tenant-sd-courses-detail', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <div class="row"> <div class="col-md-3 col-lg-3"> <boss-tenant-sd-left path="sd/courses"></boss-tenant-sd-left> </div> <div class="col-md-9 col-lg-9"> <div> <div class="row" style="text-align: center"> <a href="#sd/courses" style="position: absolute; left: 0px; top: 10px">返回课程列表</a> <h4>{course.name}</h4> </div> <alert validators="{validators.raw()}" clear="{clear}"></alert> <div class="row"> <ul class="nav nav-tabs"> <li role="presentation" class="{active: currNav === 0}"><a onclick="{onChangeTab(0)}">课程</a></li> <li role="presentation" class="{active: currNav === 1}"><a onclick="{onChangeTab(1)}">分销</a></li> </ul> </div> <div class="row" if="{currNav === 0}"> <div class="panel panel-default"> <div class="panel-body"> <div> <table class="table table-narrow"> <tr> <td>课程名称</td> <td>{course.name}</td> </tr> <tr> <td>推广语</td> <td>{course.slogan}</td> </tr> <tr> <td>媒体价 ( :元 )</td> <td>{course.listPrice}</td> </tr> <tr> <td>上/下架状态</td> <td>{__app.enums.LiveStatus.values[course.liveStatus]}</td> </tr> <tr> <td>上/下架时间</td> <td>{course.actionTime && _.date.format(new Date(course.actionTime), \'yyyy-MM-dd hh点mm分\') || \'空\'}</td> </tr> <tr> <td>备注</td> <td>{course.desc}</td> </tr> <tr> <td><strong>焦点图</strong></td> <td colspan="2"> <ul class="banners-container"> <li each="{banner, i in course.banners}"> <img riot-src="{banner && (__app.settings.api.url + \'/file?media_id=\' + banner)}"> </li> </ul> </td> </tr> </table> <div class="row text-center"> <div class="col-md-12 col-lg-12"> <a href="#sd/courses/edit/details/_{course._id}">编辑课程详情</a> </div> </div> <div class="row text-center" style="margin-top: 20px; margin-bottom: 20px"> <div class="col-md-12 col-lg-12"> <a href="#sd/courses/edit/_{course._id}" class="btn btn-default">修改</a> <input if="{course.liveStatus === __app.enums.LiveStatus.names.Idle}" onclick="{onGoLive}" data-toggle="modal" data-target="#modal" value="上架" type="button" class="btn btn-default"> <input if="{course.liveStatus === __app.enums.LiveStatus.names.GoLive}" onclick="{onSunset}" data-toggle="modal" data-target="#modal" value="下架" type="button" class="btn btn-default"> <input onclick="{onDelete}" data-toggle="modal" data-target="#modal" value="删除" type="button" class="btn btn-default"> </div> </div> </div> </div> </div> </div> <div class="row" if="{currNav === 1}"> <div class="panel panel-default"> <div class="panel-body"> <td class="text-left"> <table class="my-table table table-narrow"> <tr> <td><strong>会员折扣</strong></td> <td>单位课程优惠</td> <td> <span>{__app.enums.CommissionType.names.Cash === course.memberDiscountsType && \'金额\' || \'百分比\'}</span> <span>{ course.memberDiscountsValue }</span> </td> </tr> <tr> <td><strong>直接分销商-直接推荐人</strong></td> <td>单位课程佣金</td> <td> <span>{__app.enums.CommissionType.names.Cash === course.upLine1CommissionType && \'金额\' || \'百分比\'}</span> <span>{ course.upLine1CommissionValue }</span> </td> </tr> <tr> <td><strong>间接分销商-间接推荐人</strong></td> <td>单位课程佣金</td> <td> <span>{__app.enums.CommissionType.names.Cash === course.upLine2CommissionType && \'金额\' || \'百分比\'}</span> <span>{ course.upLine2CommissionValue }</span> </td> </tr> <tr> <td><strong>第三级分销商-间接推荐人的推荐人</strong></td> <td>单位课程佣金</td> <td> <span>{__app.enums.CommissionType.names.Cash === course.upLine3CommissionType && \'金额\' || \'百分比\'}</span> <span>{ course.upLine3CommissionValue }</span> </td> </tr> <tr> <td colspan="3" style="text-align: center">注： 如果佣金按百分比计算，佣金基数以实际消费者实付金额为准（即线下实际核销金额）</td> </tr> <tr> <td><strong>分销海报背景</strong></td> <td colspan="2"><img style="width: 200px" riot-src="{course.poster &&__app.settings.api.url + \'/file?media_id=\' + course.poster}"></td> </tr> </table> </div> </div> </div>  </div> </div> </div> </div> </div>', 'boss-tenant-sd-courses-detail .form-horizontal .control-label{ text-align: left !important; } boss-tenant-sd-courses-detail .vcenter { vertical-align: middle; } boss-tenant-sd-courses-detail .table-narrow tr td{ border: none !important; width: 30% !important; } boss-tenant-sd-courses-detail .my-table{ width: 100%; } boss-tenant-sd-courses-detail .my-table td{ width: 33.33333%; } boss-tenant-sd-courses-detail .panel-default { border-top: none; border-color: #ddd; }', function(opts) {
	        "use strict"
	        var self = nest.presentable(this);
	        var loadCourseByIdAction = domain.action('loadCourseById');
	        var updateCourseByIdAction = domain.action('updateCourseById');
	        self.currNav = 0;
	        self.onChangeTab = function(index){
	            return function(){
	                self.currNav = index;
	            };
	        };
	        self.on('open', function(ctx){
	            var courseId = ctx.req.paramList[0];
	            loadCourseByIdAction.newInvocation({
	                id: courseId
	            }).onDone(function(res){
	                self.course = res.course;
	                if(!self.course.banners){
	                    self.course.banners = [];
	                }
	                self.trigger('ready', false);
	                self.trigger('view-route-to');
	            }).execute();
	        });
	        self.on('mount', function(){
	            self.validators = _.widget.validatify([]);
	        });

	        self.onGoLive = function(e){
	            _.widget.confirm({
	                title: '操作确认',
	                content: '你确认要“上架”该课程吗？',
	                callback: function(){
	                    self.course.liveStatus = __app.enums.LiveStatus.names.GoLive;
	                    updateCourseByIdAction.newInvocation({
	                        id: self.course._id,
	                        intention: 'GoLiveOrSunset',
	                        o: self.course
	                    }).onDone(function(res){
	                        self.course.actionTime = res.course.actionTime;
	                        self.course.qr = res.course.qr;
	                        self.update();
	                    }).execute();
	                }
	            });
	        };

	        self.onSunset = function(){
	            _.widget.confirm({
	                title: '操作确认',
	                content: '你确认要“下架”该课程吗？',
	                callback: function(){
	                    self.course.liveStatus = __app.enums.LiveStatus.names.Sunset;
	                    updateCourseByIdAction.newInvocation({
	                        id: self.course._id,
	                        intention: 'GoLiveOrSunset',
	                        o: self.course
	                    }).onDone(function(res){
	                        self.course.actionTime = res.course.actionTime;
	                        self.update();
	                    }).execute();
	                }
	            });
	        };

	        self.onDelete = function(){
	            _.widget.confirm({
	                title: '操作确认',
	                content: '你确认要“删除”该课程吗？',
	                callback: function(){
	                    self.course.lFlg = __app.enums.LifeFlag.names.Deleted;
	                    updateCourseByIdAction.newInvocation({
	                        id: self.course._id,
	                        o: self.course
	                    }).onDone(function(res){
	                        if(!res.error){
	                            riot.route('sd/courses');
	                        }
	                    }).execute();
	                }
	            });
	        };
	    
	});
	riot.tag('boss-tenant-sd-courses-edit-detail', '<div class="container" if="{!hidden}"> <div class="row"> <div class="col-md-6 col-md-offset-3"> <div class="row text-center"> <a href="#sd/courses/_{course._id}" style="position: absolute; left: 0px; top: 10px">返回</a> <h4>课程详情-{course.name}</h4> </div> <div class="row" style="margin-bottom: 10px"> <span>更新时间: {course.updOn && _.date.format(new Date(course.updOn), \'yyyy-MM-dd hh点mm分\')}</span> </div> <div if="{status===\'view\'}"> <div class="row" style="margin-bottom: 10px"> <input onclick="{onEdit}" type="button" class="btn btn-primary" value="编辑"> </div> <div class="row" style="height:450px; background: white; padding: 10px; margin-bottom: 20px; overflow: scroll"> <raw content="{course.details}"></raw> </div> </div> <div if="{status===\'edit\'}"> <div class="row" style="margin-bottom: 10px"> <input onclick="{onPreview}" type="button" class="btn btn-primary" value="预览"> </div> <div class="row text-center" style="padding-bottom: 50px"> <div id="richEditor"></div> <input onclick="{onSubmit}" type="button" class="btn-primary btn" value="保存"> <input onclick="{onCancel}" type="button" class="btn-default btn" value="取消"> </div> </div> <div if="{status===\'preview\'}"> <div class="row" style="margin-bottom: 10px"> <input onclick="{onBack}" type="button" class="btn btn-primary" value="返回"> </div> <div class="row" style="height: 450px;background: white; padding: 10px; margin-bottom: 20px; overflow: scroll"> <raw content="{preview}"></raw> </div>    </div> </div> </div> </div>', function(opts) {
	        "use strict"
	        var self = nest.presentable(this);
	        var loadCourseByIdAction = domain.action('loadCourseById');
	        var updateCourseByIdAction = domain.action('updateCourseById');

	        self.on('open', function(ctx){
	            self.status = 'view';
	            var courseId = ctx.req.paramList[0];
	            loadCourseByIdAction.newInvocation({
	                id: courseId
	            }).onDone(function(res){
	                self.course = res.course;
	                self.preview = res.course.details || '';
	                self.trigger('ready', false);
	                self.trigger('view-route-to');
	            }).execute();
	        });
	        self.onEdit = function(){
	            self.status = 'edit';
	            setTimeout(function(){
	                $('#richEditor').summernote({
	                    height: 400,
	                    minHeight: null,
	                    maxHeight: null,
	                    toolbar: [
	                        ['style', ['bold', 'italic', 'underline', 'clear']],
	                        ['fontsize', ['fontsize']],
	                        ['color', ['color']],
	                        ['para', ['ul', 'ol', 'paragraph']],
	                        ['height', ['height']],
	                        ['fontname', ['fontname']],
	                        ['insert', ['picture', 'link', 'video', 'hr', 'table']]
	                    ],
	                    callbacks: {
	                        onImageUpload: function(files) {
	                            uploadEditorImg(files[0])
	                        }
	                    }

	                }).summernote('code', self.course.details || '');
	            }, 0);
	        };
	        self.onSubmit = function(){
	            self.course.details = $('#richEditor').summernote('code');
	            updateCourseByIdAction.newInvocation({
	                id: self.course._id,
	                o: self.course
	            }).onDone(function(res){
	                if(res.error){
	                    return alert("error occur.");
	                }
	                riot.route('sd/courses/_' + self.course._id);
	            }).execute();
	        };
	        self.onPreview = function(){
	            if(self.status != 'preview'){
	                self.status = 'preview';
	                self.preview = $('#richEditor').summernote('code');
	            }
	        };
	        self.onBack = function(){
	            self.status = 'edit';
	        };
	        self.onCancel = function(){
	            self.status = 'view';
	        };

	        var uploadEditorImg = function(file){
	            _.uploadImgFile(file, function(err, url){
	                if(!err) {
	                    $('#richEditor').summernote('insertImage', url, function($img){
	                        $img.css('width', '100%');
	                    });
	                }else{
	                    alert('上传图片失败');
	                }
	            });
	        }
	    
	});
	riot.tag('boss-tenant-sd-courses-edit', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <div class="row"> <div class="col-md-3 col-lg-3"> <boss-tenant-sd-left path="sd/courses"></boss-tenant-sd-left> </div> <div class="col-md-9 col-lg-9"> <div class="row" style="text-align: center"> <h4>{course.name}</h4> </div> <alert validators="{validators.raw()}" clear="{clear}"></alert> <div class="row"> <ul class="nav nav-tabs"> <li role="presentation" class="{active: currNav === 0}"><a onclick="{onChangeTab(0)}">课程</a></li> <li role="presentation" class="{active: currNav === 1}"><a onclick="{onChangeTab(1)}">分销</a></li> </ul> </div> <div class="row" if="{currNav === 0}"> <div class="panel panel-default"> <div class="panel-body"> <form class="form-horizontal"> <div class="form-group text-left"> <label for="courseNameInput" class="col-sm-2 control-label text-left">课程名称</label> <div class="col-sm-10 {has-error: !courseNameInput.value.trim()} has-feedback"> <input onblur="{courseNameInputBlur}" value="{course.name}" id="courseNameInput" type="text" class="form-control "> </div> </div> <div class="form-group"> <label for="coursePromoteInput" class="col-sm-2 control-label">推广语</label> <div class="col-sm-10"> <input onblur="{coursePromoteInputBlur}" value="{course.slogan}" type="text" class="form-control" id="coursePromoteInput"> </div> </div> <div class="form-group"> <label for="courseMediaPriceInput" class="col-sm-2 control-label">媒体价 ( :元 )</label> <div class="col-sm-10 {has-error: !courseMediaPriceInput.value.trim()}"> <input onblur="{courseMediaPriceInputBlur}" value="{course.listPrice}" type="number" class="form-control" id="courseMediaPriceInput"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">上/下架状态</label> <div class="col-sm-10" style="height: 32px;line-height: 32px"> <span>{__app.enums.LiveStatus.values[course.liveStatus]}</span> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">上/下架时间</label> <div class="col-sm-10" style="height: 32px;line-height: 32px"> <span>{course.actionTime && _.date.format(new Date(course.actionTime), \'yyyy-MM-dd hh点mm分\') || \'空\'}</span> </div> </div> <div class="form-group"> <label for="courseDescInput" class="col-sm-2 control-label">备注</label> <div class="col-sm-10"> <textarea onblur="{courseDescInputBlur}" type="password" class="form-control" id="courseDescInput"> {course.desc} </textarea> </div> </div> <div class="form-group"> <label for="courseDescInput" class="col-sm-2 control-label">轮播焦点图</label> <div class="col-sm-10"> <input multiple="multiple" onchange="{onBannersChange}" id="bannersInput" type="file" accept="image/jpeg, image/png, image/jpg"> <ul class="banners-container"> <li each="{banner, i in course.banners}" onmouseenter="{parent.onHover}" onmouseleave="{parent.onUnHover}"> <div onclick="{parent.removeBanner}" if="{isImgMaskShow}"> <b> <b class="close-a"></b> <b class="close-b"></b> </b> </div> <img riot-src="{banner.data || banner && (__app.settings.api.url + \'/file?media_id=\' + banner)}"> </li> </ul> </div> </div> </form> </div> </div> </div> <div class="row" if="{currNav === 1}"> <div class="panel panel-default"> <div class="panel-body"> <td class="text-left"> <table class="my-table table table-striped"> <tr> <td><strong>会员折扣</strong></td> <td>单位课程优惠</td> <td> <table> <tr> <td> <div onclick="{onSelectMemberDiscountsType1}" class="radio form-inline"> <label for="memberDiscountsTypeInput1"> <input id="memberDiscountsTypeInput1" value="{__app.enums.CommissionType.names.Cash}" __checked="{course.memberDiscountsType === __app.enums.CommissionType.names.Cash}" type="radio" name="memberDiscountsType"> 金额 </label> </div> </td> <td> <input id="memberDiscountsValueInput1" onblur="{onValidateValue}" __disabled="{course.memberDiscountsType != __app.enums.CommissionType.names.Cash}" value="{course.memberDiscountsType === __app.enums.CommissionType.names.Cash && course.memberDiscountsValue || \'\'}" class="form-control" type="number"> </td> </tr> <tr> <td> <div onclick="{onSelectMemberDiscountsType2}" class="radio form-inline"> <label for="memberDiscountsTypeInput2"> <input type="radio" name="memberDiscountsType" id="memberDiscountsTypeInput2" value="{__app.enums.CommissionType.names.Percent}" __checked="{course.memberDiscountsType === __app.enums.CommissionType.names.Percent}"> 百分比 </label> </div> </td> <td> <input id="memberDiscountsValueInput2" onblur="{onValidatePercent}" __disabled="{course.memberDiscountsType != __app.enums.CommissionType.names.Percent}" value="{course.memberDiscountsType === __app.enums.CommissionType.names.Percent && course.memberDiscountsValue || \'\'}" class="form-control" type="number"> </td> </tr> </table> </td> </tr> <tr> <td><strong>直接分销商-直接推荐人</strong></td> <td>单位课程佣金</td> <td> <table> <tr> <td> <div onclick="{onSelectUpLine1CommissionType1}" class="radio form-inline"> <label for="upLine1CommissionTypeInput1"> <input id="upLine1CommissionTypeInput1" value="{__app.enums.CommissionType.names.Cash}" __checked="{course.upLine1CommissionType === __app.enums.CommissionType.names.Cash}" type="radio" name="upLine1CommissionType"> 金额 </label> </div> </td> <td> <input id="upLine1CommissionValueInput1" onblur="{onBlurUpLine1CommissionValue(\'val\')}" __disabled="{course.upLine1CommissionType != __app.enums.CommissionType.names.Cash}" value="{course.upLine1CommissionType === __app.enums.CommissionType.names.Cash && course.upLine1CommissionValue || \'\'}" class="form-control" type="number"> </td> </tr> <tr> <td> <div onclick="{onSelectUpLine1CommissionType2}" class="radio form-inline"> <label for="upLine1CommissionTypeInput2"> <input id="upLine1CommissionTypeInput2" value="{__app.enums.CommissionType.names.Percent}" __checked="{course.upLine1CommissionType === __app.enums.CommissionType.names.Percent}" type="radio" name="upLine1CommissionType"> 百分比 </label> </div> </td> <td> <input id="upLine1CommissionValueInput2" onblur="{onBlurUpLine1CommissionValue(\'percent\')}" __disabled="{course.upLine1CommissionType != __app.enums.CommissionType.names.Percent}" value="{course.upLine1CommissionType === __app.enums.CommissionType.names.Percent && course.upLine1CommissionValue || \'\'}" class="form-control" type="number"> </td> </tr> </table> </td> </tr> <tr> <td><strong>间接分销商-间接推荐人</strong></td> <td>单位课程佣金</td> <td> <table> <tr> <td> <div onclick="{onSelectUpLine2CommissionType1}" class="radio form-inline"> <label for="upLine2CommissionTypeInput1"> <input id="upLine2CommissionTypeInput1" value="{__app.enums.CommissionType.names.Cash}" __checked="{course.upLine2CommissionType === __app.enums.CommissionType.names.Cash}" type="radio" name="upLine2CommissionType"> 金额 </label> </div> </td> <td> <input id="upLine2CommissionValueInput1" onblur="{onBlurUpLine2CommissionValue(\'val\')}" __disabled="{course.upLine2CommissionType != __app.enums.CommissionType.names.Cash}" value="{course.upLine2CommissionType === __app.enums.CommissionType.names.Cash && course.upLine2CommissionValue || \'\'}" class="form-control" type="number"> </td> </tr> <tr> <td> <div onclick="{onSelectUpLine2CommissionType2}" class="radio form-inline"> <label for="upLine2CommissionTypeInput2"> <input id="upLine2CommissionTypeInput2" value="{__app.enums.CommissionType.names.Percent}" __checked="{course.upLine2CommissionType === __app.enums.CommissionType.names.Percent}" type="radio" name="upLine2CommissionType"> 百分比 </label> </div> </td> <td> <input id="upLine2CommissionValueInput2" onblur="{onBlurUpLine2CommissionValue(\'percent\')}" __disabled="{course.upLine2CommissionType != __app.enums.CommissionType.names.Percent}" value="{course.upLine2CommissionType === __app.enums.CommissionType.names.Percent && course.upLine2CommissionValue || \'\'}" class="form-control" type="number"> </td> </tr> </table> </td> </tr> <tr> <td><strong>第三级分销商-间接推荐人的推荐人</strong></td> <td>单位课程佣金</td> <td> <table> <tr> <td> <div onclick="{onSelectUpLine3CommissionType1}" class="radio form-inline"> <label for="upLine3CommissionTypeInput1"> <input id="upLine3CommissionTypeInput1" value="{__app.enums.CommissionType.names.Cash}" __checked="{course.upLine3CommissionType === __app.enums.CommissionType.names.Cash}" type="radio" name="upLine3CommissionType"> 金额 </label> </div> </td> <td> <input id="upLine3CommissionValueInput1" onblur="{onBlurUpLine3CommissionValue(\'val\')}" __disabled="{course.upLine3CommissionType != __app.enums.CommissionType.names.Cash}" value="{course.upLine3CommissionType === __app.enums.CommissionType.names.Cash && course.upLine3CommissionValue || \'\'}" class="form-control" type="number"> </td> </tr> <tr> <td> <div onclick="{onSelectUpLine3CommissionType2}" class="radio form-inline"> <label for="upLine3CommissionTypeInput2"> <input id="upLine3CommissionTypeInput2" value="{__app.enums.CommissionType.names.Percent}" __checked="{course.upLine3CommissionType === __app.enums.CommissionType.names.Percent}" type="radio" name="upLine3CommissionType"> 百分比 </label> </div> </td> <td> <input id="upLine3CommissionValueInput2" onblur="{onBlurUpLine3CommissionValue(\'percent\')}" __disabled="{course.upLine3CommissionType != __app.enums.CommissionType.names.Percent}" value="{course.upLine3CommissionType === __app.enums.CommissionType.names.Percent && course.upLine3CommissionValue || \'\'}" class="form-control" type="number"> </td> </tr> </table> </td> </tr> <tr> <td colspan="3" style="text-align: center">注： 如果佣金按百分比计算，佣金基数以实际消费者实付金额为准（即线下实际核销金额）</td> </tr> <tr> <td> <strong>分销海报背景</strong> </td> <td colspan="2"> <input onchange="{onFileChange}" id="posterInput" type="file" accept="image/jpeg, image/png, image/jpg"> <img style="width: 100px; margin-top: 10px" riot-src="{course.poster && !course.poster.data && __app.settings.api.url + \'/file?media_id=\' + course.poster || course.poster.data}"> </td> </tr> </table> </div> </div> </div>  <div class="row" style="margin-top: 10px"> <div class="col-md-12 col-lg-12 text-center"> <input __disabled="{!courseMediaPriceInput.value.trim() || !courseNameInput.value.trim() || !validators.allOk()}" onclick="{onSubmit}" type="button" class="btn btn-primary" value="保存"> <a href="#sd/courses" class="btn btn-default">取消</a> </div> </div> </div> </div> </div> </div>', '.form-horizontal .control-label{ text-align: left !important; } .vcenter { vertical-align: middle; } .my-table{ width: 100%; } .my-table td{ width: 33.33333%; } .panel-default { border-top: none; border-color: #ddd; } .banners-container{ margin: 0px; margin-top: 10px;overflow: hidden;padding:0px } .banners-container >li { position: relative;width: 100px;height:100px;overflow: hidden;background-color: #EFEFEF; list-style-type:none;float:left;margin-right: 10px;line-height: 100px;text-align: center } .banners-container >li img{ width: 100px; } .banners-container >li div{ position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.3); } .banners-container >li div >b{ position: absolute; top:38px; left:38px; width:24px; height:24px; } .close-a{ position: absolute; top:0px; left:10px; width: 4px; height: 24px; transform:rotate(45deg); background: white; } .close-b{ position: absolute; top:0px; left:10px; width: 4px; height: 24px; transform:rotate(135deg); background: white; }', function(opts) {
	        "use strict";
	        var self = nest.presentable(this);
	        var maxBannerCount = 3;
	        var loadCourseByIdAction = domain.action('loadCourseById');
	        var updateCourseByIdAction = domain.action('updateCourseById');
	        self.currNav = 0;
	        self.onChangeTab = function(index){
	            return function(){
	                self.currNav = index;
	            };
	        };
	        self.on('open', function(ctx){
	            var courseId = ctx.req.paramList[0];
	            self.posterInput.value = "";
	            loadCourseByIdAction.newInvocation({
	                id: courseId
	            }).onDone(function(res){
	                self.course = res.course;
	                if(!self.course.banners){
	                    self.course.banners = [];
	                }
	                self.trigger('ready', false);
	                self.trigger('view-route-to');
	            }).execute();
	        });
	        self.onHover = function(){
	            this.isImgMaskShow = true;
	        };
	        self.onUnHover = function(){
	            this.isImgMaskShow = false;
	        };
	        self.on('mount', function(){
	            self.validators = _.widget.validatify([]);
	            setTimeout(function(){
	                $('#richEditor').summernote({
	                    height: 200,
	                    minHeight: null,
	                    maxHeight: null,
	                    focus: true
	                });
	            }, 100);
	        });
	        self.courseNameInputBlur = function(){
	            var courseName = self.courseNameInput.value.trim();
	            if(!courseName){
	                return self.validators.addToSet({
	                    success: false,
	                    field: '课程名称',
	                    desc: '不能为空!',
	                    key: 'courseNameInput'
	                });
	            }
	            self.course.name = courseName;
	        };
	        self.clear = function(){
	            self.validators.clear();
	        };
	        self.courseDescInputBlur = function(){
	            self.course.desc = self.courseDescInput.value.trim();
	        };
	        self.coursePromoteInputBlur = function(){
	            self.course.slogan = self.coursePromoteInput.value.trim();
	        };
	        self.courseMediaPriceInputBlur = function(){
	            var listPrice = self.courseMediaPriceInput.value.trim();
	            if(!listPrice){
	                return self.validators.addToSet({
	                    success: false,
	                    field: '媒体价',
	                    desc: '不能为空!',
	                    key: 'courseMediaPrice'
	                });
	            }
	            self.course.listPrice = listPrice;
	        };
	        self.onSelectMemberDiscountsType1 = function(e){
	            self.course.memberDiscountsType = __app.enums.CommissionType.names.Cash;
	            self.course.memberDiscountsValue = '';
	        };
	        var validateValue = function(val, kv, callback){
	            if(val.trim() < 0 || parseInt(val.trim(), 10) > parseInt(self.course.listPrice, 10)){
	                return self.validators.addToSet({
	                    success: false,
	                    field: kv.value,
	                    desc: '所属金额小于0,或者大于媒体价',
	                    key: kv.key
	                });
	            }
	            self.validators.pass(kv.key);
	            callback();
	        };
	        var validatePercent = function(val, kv, callback){
	            if(val.trim() <= 0 || val.trim() > 100){
	                return self.validators.addToSet({
	                    success: false,
	                    field: kv.value,
	                    desc: '请输入1到100的自然数',
	                    key: kv.key
	                });
	            }
	            self.validators.pass(kv.key);
	            callback();
	        };
	        self.onValidateValue = function(e){
	            validateValue(e.target.value, {key: 'membershipDiscountValue', value: '会员折扣金额非法'}, function(){
	                self.course.memberDiscountsValue = e.target.value;
	            })
	        };
	        self.onValidatePercent = function(e){
	            validatePercent(e.target.value, {key: 'membershipDiscountPercent', value: '会员折扣百分比非法'}, function(){
	                self.course.memberDiscountsValue = e.target.value;
	            })
	        };
	        self.onSelectMemberDiscountsType2 = function(e){
	            self.course.memberDiscountsType = __app.enums.CommissionType.names.Percent;
	            self.course.memberDiscountsValue = '';
	        };

	        self.onSelectUpLine1CommissionType1 = function(e){
	            self.course.upLine1CommissionType = __app.enums.CommissionType.names.Cash;
	            self.course.upLine1CommissionValue = '';
	        };
	        self.onSelectUpLine1CommissionType2 = function(e){
	            self.course.upLine1CommissionType = __app.enums.CommissionType.names.Percent;
	            self.course.upLine1CommissionValue = '';
	        };
	        self.onBlurUpLine1CommissionValue = function(type){
	            return function(e){
	                if(type === 'val'){
	                    validateValue(e.target.value, {key: 'upLine1CommissionValue', value: '一级分销金额非法'}, function(){
	                        self.course.upLine1CommissionValue = e.target.value;
	                    });
	                    return;
	                }
	                validatePercent(e.target.value, {key: 'upLine1CommissionPercent', value: '一级分销百分比非法'}, function(){
	                    self.course.upLine1CommissionValue = e.target.value;
	                })
	            }
	        };

	        self.onSelectUpLine2CommissionType1 = function(e){
	            self.course.upLine2CommissionType = __app.enums.CommissionType.names.Cash;
	            self.course.upLine2CommissionValue = '';
	        };
	        self.onSelectUpLine2CommissionType2 = function(e){
	            self.course.upLine2CommissionType = __app.enums.CommissionType.names.Percent;
	            self.course.upLine2CommissionValue = '';
	        };
	        self.onBlurUpLine2CommissionValue = function(type){
	            return function(e){
	                if(type === 'val'){
	                    validateValue(e.target.value, {key: 'upLine2CommissionValue', value: '二级分销金额非法'}, function(){
	                        self.course.upLine2CommissionValue = e.target.value;
	                    });
	                    return;
	                }
	                validatePercent(e.target.value, {key: 'upLine2CommissionPercent', value: '二级分销百分比非法'}, function(){
	                    self.course.upLine2CommissionValue = e.target.value;
	                })
	            }
	        };

	        self.onSelectUpLine3CommissionType1 = function(e){
	            self.course.upLine3CommissionType = __app.enums.CommissionType.names.Cash;
	            self.course.upLine3CommissionValue = '';
	        };
	        self.onSelectUpLine3CommissionType2 = function(e){
	            self.course.upLine3CommissionType = __app.enums.CommissionType.names.Percent;
	            self.course.upLine3CommissionValue = '';
	        };
	        self.onBlurUpLine3CommissionValue = function(type){
	            return function(e){
	                if(type === 'val'){
	                    validateValue(e.target.value, {key: 'upLine3CommissionValue', value: '三级分销金额非法'}, function(){
	                        self.course.upLine3CommissionValue = e.target.value;
	                    });
	                    return;
	                }
	                validatePercent(e.target.value, {key: 'upLine3CommissionPercent', value: '三级分销百分比非法'}, function(){
	                    self.course.upLine3CommissionValue = e.target.value;
	                })
	            }
	        };

	        self.onFileChange = function(e){
	            var file = document.getElementById("posterInput").files[0];
	            if(file.size > 2*1024*1024){
	                alert("文件大小超过限制-2M");
	                return;
	            }
	            var reader = new FileReader();
	            reader.readAsDataURL(file);
	            reader.onload = function(e){
	                self.course.poster = {
	                    file: file,
	                    data: e.target.result
	                };
	                self.update();
	            };
	        };

	        self.removeBanner = function(e){
	            self.course.banners.map(function(banner, i){
	                if(banner
	                    && banner.file
	                    && banner.file.name
	                    && e.item.banner
	                    && e.item.banner.file
	                    && e.item.banner.file.name){

	                    if(banner.file.name === e.item.banner.file.name){
	                        self.course.banners.splice(i, 1)
	                    }
	                    return;
	                }

	                if(banner === e.item.banner){
	                    self.course.banners.splice(i, 1);
	                }
	            });
	        };

	        self.onBannersChange = function(e){
	            var files = document.getElementById("bannersInput").files;

	            if(self.course.banners){
	                if(self.course.banners.length + files.length > maxBannerCount){
	                    alert('焦点图最多' + maxBannerCount + '张');
	                    return;
	                }
	            }else if(files.length > maxBannerCount){
	                alert('焦点图最多' + maxBannerCount + '张');
	                return;
	            }
	            if(files && files.length){
	                var index = 0;
	                var loadRecur = function(index){
	                    var file = files[index];
	                    if(!file){
	                        return;
	                    }
	                    if(file.size > 2*1024*1024){
	                        alert("文件大小超过限制-2M");
	                        return;
	                    }
	                    var reader = new FileReader();
	                    reader.readAsDataURL(file);
	                    reader.onload = function(e){
	                        if(!self.course.banners){
	                            self.course.banners = [];
	                        }
	                        self.course.banners.push({
	                            file: file,
	                            data: e.target.result
	                        });
	                        self.update();
	                        loadRecur(++index)
	                    };
	                };
	                loadRecur(index)
	            }
	        };

	        self.onSubmit = function(){
	            var totalTasksNum = 0;
	            var completelyTasksNum = 0;
	            var req = {
	                id: self.course._id,
	                o: self.course
	            };
	            if(self.course.poster && self.course.poster.file){
	                ++totalTasksNum;
	                var formData1 = new FormData();
	                formData1.append('file', self.course.poster.file);
	                $.ajax({
	                    url: __app.settings.api.url + '/file/upload',
	                    type: 'POST',
	                    data: formData1,
	                    processData: false,
	                    contentType: false,
	                    success: function (res) {
	                        req.o.poster = res.media_id;
	                        ++completelyTasksNum;
	                        done();
	                    },
	                    error: function (responseStr) {
	                        console.error("失败:" + JSON.stringify(responseStr));
	                    }
	                });
	            }

	            if(self.course.banners){
	                ++totalTasksNum;
	                var formData2 = new FormData();
	                self.course.banners.map(function(banner){
	                    if(banner.file){
	                        formData2.append('files', banner.file);
	                    }
	                });

	                $.ajax({
	                    url: __app.settings.api.url + '/file/uploads',
	                    type: 'POST',
	                    data: formData2,
	                    processData: false,
	                    contentType: false,
	                    success: function (res) {
	                        var persistedBanners = [];
	                        if(self.course.banners && self.course.banners.length){
	                            persistedBanners = self.course.banners.filter(function(banner){
	                                return typeof banner === 'string'
	                            });
	                        }
	                        req.o.banners = persistedBanners.concat(res.metas.map(function(meta){return meta.media_id}));
	                        ++completelyTasksNum;
	                        done();
	                    },
	                    error: function (responseStr) {
	                        console.error("失败:" + JSON.stringify(responseStr));
	                    }
	                });
	            }

	            done();

	            function done(){
	                if(completelyTasksNum != totalTasksNum){
	                    return;
	                }
	                updateCourseByIdAction.newInvocation(req)
	                    .onDone(function(res){
	                        riot.route('sd/courses');
	                    })
	                    .execute();
	            }

	        };
	    
	});
	riot.tag('boss-tenant-sd-courses', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <div class="row"> <div class="col-md-3 col-lg-3"> <boss-tenant-sd-left path="sd/courses"></boss-tenant-sd-left> </div> <div class="col-md-9 col-lg-9"> <div class="row" style="text-align: center"> <h4>课程管理</h4> </div> <div class="row"> <form class="form-inline"> <div class="col-md-6 col-lg-6"> <div class="form-group"> <label for="coursesStatus">状态</label> <select id="coursesStatus" class="form-control" onchange="{onSelect}"> <option value="">全部状态</option> <option value="{__app.enums.LiveStatus.names.Idle}">待上架</option> <option value="{__app.enums.LiveStatus.names.GoLive}">已上架</option> <option value="{__app.enums.LiveStatus.names.Sunset}">已下架</option> </select> </div> <input onclick="{onSearch}" class="btn btn-primary" type="button" value="查询"> </div> <div class="col-md-6 col-lg-6 text-right"> <a class="btn btn-primary" href="#sd/courses/add">添加</a> </div> </form> </div> <div class="row" style="margin-top: 10px"> <table class="table table-striped"> <thead> <tr> <th>名称</th> <th>状态</th> <th>上/下架时间</th> <th>创建时间</th> <th>备注</th> </tr> </thead> <tbody> <tr each="{courses}"> <td> <a href="#sd/courses/_{_id}"> {name} </a> </td> <td> { __app.enums.LiveStatus.values[liveStatus] } </td> <td> { actionTime && _.date.format(new Date(actionTime), \'yyyy-MM-dd hh点mm分\') || \'空\'} </td> <td> {_.date.format(new Date(crtOn), \'yyyy-MM-dd hh点mm分\')} </td> <td> { desc } </td> </tr> </tbody> </table> </div> </div> </div> </div>', function(opts) {
	        "use strict"
	        var self = nest.presentable(this);
	        var findCoursesAction = domain.action('findCourses');
	        self.courses = [];
	        self.filter = {};
	        console.log(__app.enums)
	        self.on('open', function(){
	            findCoursesAction.newInvocation({
	                tenant: __page.tenantId,
	                filter: self.filter
	            }).onDone(function(res){
	                if(res.error){
	                    return alert("failed to search courses");
	                }
	                self.courses= res.courses;
	                self.trigger('ready', false);
	                self.trigger('view-route-to');
	            }).execute();
	        });
	        self.onSearch = function(e){
	            findCoursesAction.newInvocation({
	                tenant: __page.tenantId,
	                filter: self.filter
	            }).onDone(function(res){
	                if(res.error){
	                    return alert("failed to search courses");
	                }
	                self.update({courses: res.courses});
	            }).execute();
	        };
	        self.onSelect = function(e){
	            var liveStatus = self.coursesStatus.value;
	            if(!liveStatus){
	                if(self.filter.hasOwnProperty('liveStatus')){
	                    delete self.filter['liveStatus'];
	                }
	                return;
	            }
	            self.filter.liveStatus = liveStatus;
	        }
	    
	});
	riot.tag('boss-tenant-sd-customers', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <div class="row"> <div class="col-md-3 col-lg-3"> <boss-tenant-sd-left path="sd/customers"></boss-tenant-sd-left> </div> <div class="col-md-9 col-lg-9"> <div class="row" style="text-align: center"> <h4>客户管理</h4> </div> <div class="row"> <form class="form-inline"> <div class="col-md-12 col-lg-12"> <div class="form-group"> <label for="wechatsitesSelect">公众号</label> <select id="wechatsitesSelect" class="form-control" onchange="{onSelect}"> <option value="">全部</option> <option each="{wechatsites}" value="{originalId}">{name}</option> </select> </div> <input onclick="{onSearch}" class="btn btn-primary" type="button" value="查询"> </div> </form> </div> <div class="row" style="margin-top: 10px"> <span if="{!customers.length}"> <strong>该机构尚没有任何客户.</strong> </span> <table if="{customers.length}" class="table table-striped"> <thead> <tr> <th>名称</th> <th>所属公众号</th> <th>上线分销商</th> <th>创建时间</th> <th>备注</th> </tr> </thead> <tbody> <tr each="{customers}"> <td> { user.nickname } </td> <td> { media.name } </td> <td> { upLine && upLine.user.nickname || \'顶级\' } </td> <td> {_.date.format(new Date(crtOn), \'yyyy-MM-dd hh点mm分\')} </td> <td> { desc } </td> </tr> </tbody> </table> <div> <input onclick="{prevPage}" type="button" class="btn btn-default" value="上一页"> <span>当前页: </span> <span>{filter.no}</span>, <span>共( {totalPage} )页: </span> <input onclick="{nextPage}" type="button" class="btn btn-default" value="下一页"> <input name="pageTo" type="number" value=""> <input onclick="{jumpToPage}" type="button" class="btn btn-default" value="跳转"> </div> </div> </div> </div> </div>', function(opts) {
	        "use strict"
	        var self = nest.presentable(this);
	        var findCustomersByTenantIdAction = domain.action('findCustomersByTenantId');
	        var findCustomersCountByTenantIdAction = domain.action('findCustomersCountByTenantId');
	        var loadAllTenantWechatSiteAction = domain.action('loadAllTenantWechatSite');
	        self.customers = [];
	        self.totalPage = 1;
	        self.filter = {
	            tenant: __page.tenantId,
	            no: 1,
	            size: 10
	        };
	        self.on('mount', function(){
	            findCustomersByTenantIdAction.onDone(function(res){
	                self.customers= res.customers;
	                self.update();
	            })
	        });
	        self.on('open', function(){
	            loadAllTenantWechatSiteAction.newInvocation(__page.tenantId)
	                .onDone(function(res){
	                    self.update({wechatsites: res});
	                }).execute();
	            findCustomersCountByTenantIdAction.newInvocation({
	                tenant: __page.tenantId
	            })
	            .onDone(function(res){
	                if(res.error){
	                    return alert("failed to search customers");
	                }
	                self.totalPage = Math.ceil(res.count/self.filter.size);
	                self.update();
	            }).execute();
	            findCustomersByTenantIdAction.newInvocation({
	                filter: self.filter
	            }).onDone(function(res){
	                if(res.error){
	                    return alert("failed to search customers");
	                }
	                self.customers= res.customers;
	                self.trigger('ready', false);
	                self.trigger('view-route-to');
	            }).execute();
	        });
	        self.onSearch = function(e){
	            findCustomersByTenantIdAction.execute({
	                filter: self.filter
	            });
	        };
	        self.onSelect = function(e){
	            var wechatId = self.wechatsitesSelect.value;
	            if(!wechatId){
	                if(self.filter.hasOwnProperty('wechatId')){
	                    delete self.filter['wechatId'];
	                }
	                return;
	            }
	            self.filter.wechatId = wechatId;
	        };
	        self.prevPage = function(e){
	            var currPage = self.filter.no;
	            if(currPage <= 1){
	                return;
	            }
	            self.filter.no = --currPage;
	            findCustomersByTenantIdAction.execute({
	                filter: self.filter
	            });
	        };
	        self.nextPage = function(e){
	            var currPage = self.filter.no;
	            if(currPage >= self.totalPage){
	                return;
	            }
	            self.filter.no = ++currPage;
	            findCustomersByTenantIdAction.execute({
	                filter: self.filter
	            });
	        };
	        self.jumpToPage = function(e){
	            console.log(typeof self.pageTo.value)
	            if(self.pageTo.value.trim() === ''){
	                alert('请输入页码');
	                return;
	            }
	            if(self.pageTo.value <= 0 || self.pageTo.value > self.totalPage){
	                alert('页码非法');
	                return;
	            }
	            self.filter.no = parseInt(self.pageTo.value, 10);
	            findCustomersByTenantIdAction.execute({
	                filter: self.filter
	            });
	        }
	    
	});
	riot.tag('boss-tenant-sd-distributors', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <div class="row"> <div class="col-md-3 col-lg-3"> <boss-tenant-sd-left path="sd/distributors"></boss-tenant-sd-left> </div> <div class="col-md-9 col-lg-9"> <div class="row" style="text-align: center"> <h4>分销商管理</h4> </div> <div class="row"> <form class="form-inline"> <div class="col-md-12 col-lg-12"> <div class="form-group"> <label for="wechatsitesSelect">公众号</label> <select id="wechatsitesSelect" class="form-control" onchange="{onSelect}"> <option value="">全部</option> <option each="{wechatsites}" value="{originalId}">{name}</option> </select> </div> <input onclick="{onSearch}" class="btn btn-primary" type="button" value="查询"> </div> </form> </div> <div class="row" style="margin-top: 10px"> <span if="{!distributors.length}"> <strong>该机构尚没有任何分销商.</strong> </span> <table if="{distributors.length}" class="table table-striped"> <thead> <tr> <th>名称</th> <th>所属公众号</th> <th>上线分销商</th> <th>创建时间</th> <th>备注</th> </tr> </thead> <tbody> <tr each="{distributors}"> <td> { user.nickname } </td> <td> { media.name } </td> <td> { upLine && upLine.user.nickname || \'顶级\' } </td> <td> {_.date.format(new Date(crtOn), \'yyyy-MM-dd hh点mm分\')} </td> <td> { desc } </td> </tr> </tbody> </table> <div> <input onclick="{prevPage}" type="button" class="btn btn-default" value="上一页"> <span>当前页: </span> <span>{filter.no}</span>, <span>共( {totalPage} )页: </span> <input onclick="{nextPage}" type="button" class="btn btn-default" value="下一页"> <input name="pageTo" type="number" value=""> <input onclick="{jumpToPage}" type="button" class="btn btn-default" value="跳转"> </div> </div> </div> </div> </div>', function(opts) {
	        "use strict"
	        var self = nest.presentable(this);
	        var findDistributorsByTenantIdAction = domain.action('findDistributorsByTenantId');
	        var findDistributorsCountByTenantIdAction = domain.action('findDistributorsCountByTenantId');
	        var loadAllTenantWechatSiteAction = domain.action('loadAllTenantWechatSite');
	        self.distributors = [];
	        self.totalPage = 1;
	        self.filter = {
	            tenant: __page.tenantId,
	            no: 1,
	            size: 10
	        };
	        self.on('mount', function(){
	            findDistributorsByTenantIdAction.onDone(function(res){
	                self.distributors= res.distributors;
	                self.update();
	            })
	        });
	        self.on('open', function(){
	            loadAllTenantWechatSiteAction.newInvocation(__page.tenantId)
	            .onDone(function(res){
	                self.update({wechatsites: res});
	            }).execute();
	            findDistributorsCountByTenantIdAction.newInvocation({
	                tenant: __page.tenantId
	            })
	            .onDone(function(res){
	                if(res.error){
	                    return alert("failed to search distributors");
	                }
	                self.totalPage = Math.ceil(res.count/self.filter.size);
	                self.update();
	            }).execute();
	            findDistributorsByTenantIdAction.newInvocation({
	                filter: self.filter
	            }).onDone(function(res){
	                if(res.error){
	                    return alert("failed to search distributors");
	                }
	                self.distributors= res.distributors;
	                self.trigger('ready', false);
	                self.trigger('view-route-to');
	            }).execute();
	        });
	        self.onSearch = function(e){
	            findDistributorsByTenantIdAction.execute({
	                filter: self.filter
	            });
	        };
	        self.onSelect = function(e){
	            var wechatId = self.wechatsitesSelect.value;
	            if(!wechatId){
	                if(self.filter.hasOwnProperty('wechatId')){
	                    delete self.filter['wechatId'];
	                }
	                return;
	            }
	            self.filter.wechatId = wechatId;
	        };
	        self.prevPage = function(e){
	            var currPage = self.filter.no;
	            if(currPage <= 1){
	                return;
	            }
	            self.filter.no = --currPage;
	            findDistributorsByTenantIdAction.execute({
	                filter: self.filter
	            });
	        };
	        self.nextPage = function(e){
	            var currPage = self.filter.no;
	            if(currPage >= self.totalPage){
	                return;
	            }
	            self.filter.no = ++currPage;
	            findDistributorsByTenantIdAction.execute({
	                filter: self.filter
	            });
	        };
	        self.jumpToPage = function(e){
	            console.log(typeof self.pageTo.value)
	            if(self.pageTo.value.trim() === ''){
	                alert('请输入页码');
	                return;
	            }
	            if(self.pageTo.value <= 0 || self.pageTo.value > self.totalPage){
	                alert('页码非法');
	                return;
	            }
	            self.filter.no = parseInt(self.pageTo.value, 10);
	            findDistributorsByTenantIdAction.execute({
	                filter: self.filter
	            });
	        }
	    
	});
	riot.tag('boss-tenant-sd-left', '<div class="my-container"> <accordion navs="{navs}"></accordion> </div>', 'boss-tenant-sd-left .my-container{ background: white; }', function(opts) {
	        var self = this;
	        self.navs=[
	            {
	                path: 'sd',
	                presentation: '首页'
	            },
	            {
	                path: 'sd/courses',
	                presentation: '课程管理'
	            },
	            {
	                path: 'sd/catalogs',
	                presentation: '课程目录管理'
	            },
	            {
	                path: 'sd/bespeaks',
	                presentation: '预约管理'
	            },
	            {
	                path: 'sd/orders',
	                presentation: '订单管理'
	            },
	            {
	                path: 'sd/customers',
	                presentation: '客户管理'
	            },
	            {
	                path: 'sd/distributors',
	                presentation: '分销商管理'
	            },
	            {
	                path: 'sd/splitbill',
	                presentation: '分账管理'
	            }
	        ];
	        self.on('mount', function(){
	            var path  = this.opts.path;
	            self.navs.forEach(function(nav){
	                nav.path === path && (nav['useAsDefault'] = true)
	            })
	        });
	    
	});
	riot.tag('boss-tenant-sd-orders', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <div class="row"> <div class="col-md-3 col-lg-3"> <boss-tenant-sd-left path="sd/orders"></boss-tenant-sd-left> </div> <div class="col-md-9 col-lg-9"> <div class="row" style="text-align: center"> <h4>订单管理</h4> </div> <div class="row"> <form class="form-inline"> <div class="col-md-6 col-lg-6"> <div class="form-group"> <label for="orderStatus">状态</label> <select id="orderStatus" class="form-control" onchange="{onSelect}"> <option value="">全部状态</option> <option value="{__app.enums.OrderStatus.names.finish}">已结算</option> <option value="{__app.enums.OrderStatus.names.unFinish}">未结算</option> </select> </div> <input onclick="{onSearch}" class="btn btn-primary" type="button" value="查询"> </div> </form> </div> <div class="row" style="margin-top: 10px"> <table class="table table-striped"> <thead> <tr> <th>客户昵称</th> <th>课程</th> <th>状态</th> <th>成交价</th> <th>创建时间</th> <th colspan="3">受益分销商</th> </tr> </thead> <tbody> <tr each="{orders}"> <td> {bespeak.user.nickname} </td> <td> {bespeak.product.name} </td> <td> { __app.enums.OrderStatus.values[status] } </td> <td> { finalPrice } </td> <td> {_.date.format(new Date(crtOn), \'yyyy-MM-dd hh点mm分\')} </td> <td> {distributors && distributors[0] && parent.getDistributorMoney(distributors[0].user, bespeak.product, 1, finalPrice) || \'无\'} </td> <td> {distributors && distributors[1] && parent.getDistributorMoney(distributors[1].user, bespeak.product, 2, finalPrice) || \'无\'} </td> <td> {distributors && distributors[2] && parent.getDistributorMoney(distributors[2].user, bespeak.product, 3, finalPrice) || \'无\'} </td> </tr> </tbody> </table> <div> <input onclick="{prevPage}" type="button" class="btn btn-default" value="上一页"> <span>当前页: </span> <span>{filter.no}</span>, <span>共( {totalPage} )页: </span> <input onclick="{nextPage}" type="button" class="btn btn-default" value="下一页"> <input name="pageTo" type="number" value=""> <input onclick="{jumpToPage}" type="button" class="btn btn-default" value="跳转"> </div> </div> </div> </div> </div>', function(opts) {
	        "use strict"
	        var self = nest.presentable(this);
	        var findOrdersAction = domain.action('findOrders');
	        self.orders = [];
	        self.totalPage = 1;
	        self.filter = {
	            tenant: __page.tenantId,
	            no: 1,
	            size: 10
	        };
	        self.on('mount', function(){
	            findOrdersAction.onDone(function(res){
	                if(!res.error) {
	                    self.orders = res.orders;
	                    self.totalPage = Math.ceil(res.count / self.filter.size);
	                    self.update();
	                }else{
	                    console.error('failed find orders err:' + res.error);
	                }
	            })
	        });
	        self.on('open', function(){
	            findOrdersAction.execute({
	                filter: self.filter
	            });
	            self.trigger('ready', false);
	            self.trigger('view-route-to');
	        });

	        self.onSearch = function(e){
	            findOrdersAction.execute({
	                filter: self.filter
	            });
	        };

	        self.onSelect = function(e){
	            var status = self.orderStatus.value;
	            if(!status){
	                if(self.filter.hasOwnProperty('status')){
	                    delete self.filter['status'];
	                }
	                return;
	            }
	            self.filter.status = status;
	        }

	        self.getDistributorMoney = function(user, course, level, finalPrice){
	            var money = 0;
	            var commissionType = 'upLine' + level + 'CommissionType';
	            var commissionValue = 'upLine' + level + 'CommissionValue';
	            if(course[commissionType] === __app.enums.CommissionType.names.Percent){
	                money = (parseFloat(finalPrice)*parseFloat(parseFloat(course[commissionValue])/100)).toFixed(2);
	            }else if(course[commissionType] === __app.enums.CommissionType.names.Cash){
	                money = parseFloat(course[commissionValue]);
	            }
	            return user.nickname + ': ' + money;
	        }

	        self.prevPage = function(e){
	            var currPage = self.filter.no;
	            if(currPage <= 1){
	                return;
	            }
	            self.filter.no = --currPage;
	            findOrdersAction.execute({
	                filter: self.filter
	            });
	        };
	        self.nextPage = function(e){
	            var currPage = self.filter.no;
	            if(currPage >= self.totalPage){
	                return;
	            }
	            self.filter.no = ++currPage;
	            findOrdersAction.execute({
	                filter: self.filter
	            });
	        };
	        self.jumpToPage = function(e){
	            console.log(typeof self.pageTo.value)
	            if(self.pageTo.value.trim() === ''){
	                alert('请输入页码');
	                return;
	            }
	            if(self.pageTo.value <= 0 || self.pageTo.value > self.totalPage){
	                alert('页码非法');
	                return;
	            }
	            self.filter.no = parseInt(self.pageTo.value, 10);
	            findOrdersAction.execute({
	                filter: self.filter
	            });
	        }
	    
	});
	riot.tag('boss-tenant-sd-splitbill', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <div class="row"> <div class="col-md-3 col-lg-3"> <boss-tenant-sd-left path="sd/splitbill"></boss-tenant-sd-left> </div> <div class="col-md-9 col-lg-9"> <div class="row" style="text-align: center"> <h4>分账管理</h4> </div>                 <div class="row" style="margin-top: 10px"> <span if="{!distributors.length}"> <strong>尚没有未结款项.</strong> </span> <table if="{distributors.length}" class="table table-striped"> <thead> <tr> <th>分销商</th> <th>所属公众号</th> <th>待结款</th> <th>结款</th> </tr> </thead> <tbody> <tr each="{distributors}"> <td> <a data-toggle="modal" data-target="#ordersInDistributors" onclick="{parent.onClickDistributor}">{ user.nickname }</a> </td> <td> { media.name } </td> <td> { accountBalance || \'顶级\' } </td> <td> <input onclick="{parent.onCheckout}" data-toggle="modal" data-target="#modal" type="button" class="btn btn-default" value="结款"> </td> </tr> </tbody> </table> <div> <input onclick="{prevPage}" type="button" class="btn btn-default" value="上一页"> <span>当前页: </span> <span>{filter.no}</span>, <span>共( {totalPage} )页: </span> <input onclick="{nextPage}" type="button" class="btn btn-default" value="下一页"> <input name="pageTo" type="number" value=""> <input onclick="{jumpToPage}" type="button" class="btn btn-default" value="跳转"> </div> </div> <div id="ordersInDistributors" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"> <div class="modal-dialog modal-lg"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title">相关订单</h4> </div> <div class="modal-body"> <table class="table table-striped"> <thead> <tr> <th>客户</th> <th>产品</th> <th>成交价</th> <th>所获分成</th> </tr> </thead> <tbody> <tr each="{orders}"> <td> { bespeak.user.nickname } </td> <td> { bespeak.product.name } </td> <td> { finalPrice } </td> <td> { commission } </td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div> </div>', function(opts) {
	        "use strict";
	        var self = nest.presentable(this);
	        var findDistributorsWithPendingPaymentByTenantIdAction = domain.action('findDistributorsWithPendingPaymentByTenantId');
	        var findDistributorsCountWithPendingPaymentByTenantIdAction = domain.action('findDistributorsCountWithPendingPaymentByTenantId');
	        var findOrderRelatedDistributorAction = domain.action('findOrderRelatedDistributor');
	        var checkoutAction = domain.action('checkout');
	        self.distributors = [];
	        self.totalPage = 1;
	        self.filter = {
	            tenant: __page.tenantId,
	            no: 1,
	            size: 10
	        };
	        self.on('mount', function(){
	            findDistributorsWithPendingPaymentByTenantIdAction.onDone(function(res){
	                self.distributors= res.distributors;
	                self.update();
	            })
	        });
	        self.on('open', function(){
	            findDistributorsCountWithPendingPaymentByTenantIdAction.newInvocation({
	                tenant: __page.tenantId
	            })
	            .onDone(function(res){
	                if(res.error){
	                    return alert("failed to search distributors");
	                }
	                self.totalPage = Math.ceil(res.count/self.filter.size);
	                self.update();
	            }).execute();
	            findDistributorsWithPendingPaymentByTenantIdAction.newInvocation({
	                filter: self.filter
	            }).onDone(function(res){
	                if(res.error){
	                    return alert("failed to search distributors");
	                }
	                self.distributors= res.distributors;
	                self.trigger('ready', false);
	                self.trigger('view-route-to');
	            }).execute();
	        });
	        self.onSearch = function(e){
	            findDistributorsWithPendingPaymentByTenantIdAction.execute({
	                filter: self.filter
	            });
	        };
	        self.onClickDistributor = function(e){
	            findOrderRelatedDistributorAction
	                .newInvocation({
	                    distributor: e.item._id,
	                    status: __app.enums.OrderStatus.names['unFinish']
	                })
	                .onDone(function(res){
	                    if(res.error){
	                        alert('获取相关订单失败');
	                        return;
	                    }
	                    self.orders = res.orders.map(function(order){
	                        var commission = 0;
	                        var product = order.bespeak.product;
	                        if(order.distributors){
	                            var level = order.distributors.indexOf(e.item._id) + 1;
	                            var cmType = product['upLine' + level + 'CommissionType'];
	                            var cmValue = product['upLine' + level + 'CommissionValue'];
	                            if(cmType === __app.enums.CommissionType.names.Percent){
	                                commission = parseFloat(order.finalPrice) * parseFloat(parseFloat(cmValue)/100);
	                            }else{
	                                commission = cmValue;
	                            }
	                        }
	                        order.commission = commission;
	                        return order;
	                    });

	                    self.update();
	                })
	                .execute();
	        };
	        self.onCheckout = function(e){
	            _.widget.confirm({
	                title: '操作确认',
	                content: '你已经为 [ ' + e.item.user.nickname + ' ] 结清款项了吗？',
	                callback: function(){
	                    checkoutAction
	                        .newInvocation({
	                            media: e.item.media,
	                            distributor: e.item._id,
	                            tenant: __page.tenantId
	                        })
	                        .onDone(function(res){
	                            if(res.error){
	                                alert('借款失败,请联系管理员');
	                                return;
	                            }
	                            findDistributorsWithPendingPaymentByTenantIdAction.execute({
	                                filter: self.filter
	                            });
	                        })
	                        .execute();
	                }
	            });
	        };
	        self.onSelect = function(e){
	            var liveStatus = self.coursesStatus.value;
	            if(!liveStatus){
	                if(self.filter.hasOwnProperty('liveStatus')){
	                    delete self.filter['liveStatus'];
	                }
	                return;
	            }
	            self.filter.liveStatus = liveStatus;
	        };
	        self.prevPage = function(e){
	            var currPage = self.filter.no;
	            if(currPage <= 1){
	                return;
	            }
	            self.filter.no = --currPage;
	            findDistributorsWithPendingPaymentByTenantIdAction.execute({
	                filter: self.filter
	            });
	        };
	        self.nextPage = function(e){
	            var currPage = self.filter.no;
	            if(currPage >= self.totalPage){
	                return;
	            }
	            self.filter.no = ++currPage;
	            findDistributorsWithPendingPaymentByTenantIdAction.execute({
	                filter: self.filter
	            });
	        };
	        self.jumpToPage = function(e){
	            if(self.pageTo.value.trim() === ''){
	                alert('请输入页码');
	                return;
	            }
	            if(self.pageTo.value <= 0 || self.pageTo.value > self.totalPage){
	                alert('页码非法');
	                return;
	            }
	            self.filter.no = parseInt(self.pageTo.value, 10);
	            findDistributorsWithPendingPaymentByTenantIdAction.execute({
	                filter: self.filter
	            });
	        }
	    
	});
	riot.tag('boss-tenant-sd', '<div if="{!hidden}" class="container"> <div class="row"> <div class="col-md-3 col-lg-3"> <boss-tenant-sd-left path="sd"></boss-tenant-sd-left> </div> <div class="col-md-9 col-lg-9"> <div class="row"> <h4 class="text-center">欢迎来到课程分销系统</h4> </div> </div> </div> </div>', function(opts) {
	        var self = nest.presentable(this);
	        self.on('open', function(){
	            self.trigger('ready', false);
	            self.trigger('view-route-to');
	        });

	    
	});
	riot.tag('boss-tenant-topbar', '<nav class="navbar navbar-default navbar-inverse" role="navigation" style="margin-bottom: 5px; border-radius: 0;"> <div class="collapse navbar-collapse"> <a class="navbar-brand" style="font-size:20px; color: #ffffff">百加宝-平台端</a> <ul class="nav navbar-nav" style="width: 86%"> <li class="navbtn"><a id="tenant" href="#" route="tenant" class="myActive" onclick="{nav}">机构</a></li> <li class="navbtn"><a id="wechatsite" href="#" route="wechatsite" onclick="{nav}" >公众号</a></li> <li class="navbtn"><a id="sd" href="#" route="sd" onclick="{nav}">分销</a></li> <li class="navbtn"><a id="power" href="#" route="power/list" onclick="{nav}">助力活动</a></li> <li style="float: right;"><a href="#" style="font-size: 1.4em" class="glyphicon glyphicon-off" title="退出" onclick="{logout}"></a></li> <li style="float: right; margin-right: 20px; padding-top: 5px;"> <img riot-src="{headimgurl}" style="height: 40px; width: 40px" alt=""><span style="margin-left: 10px; color: white">{nickname}</span> </li> </ul> </div> </nav>', '.navbtn{padding-left: 20px; font-size:16px} .myActive{color: #ffffff !important; border:0; outline: none !important;}', function(opts) {
	        this.headimgurl = __page.user.headimgurl;
	        this.nickname = __page.user.nickname;

	        this.on('mount', function(){
	            if(window.location.hash) {
	                $('.navbtn a').removeClass('myActive');
	                var reg = new RegExp(/^#[a-z, A-Z, _]+/);
	                var res = reg.exec(window.location.hash);
	                $(res[0]).addClass('myActive');
	            }
	        });

	        this.logout = function(e) {
	            $.get('/logout', function(data){
	               window.location.href = '/login';
	            });
	        }.bind(this);

	        this.nav = function(e) {
	            e.preventUpdate = true;
	            $('.navbtn a').removeClass('myActive');
	            $(e.currentTarget).addClass('myActive');
	            riot.route($(e.currentTarget).attr('route'));
	        }.bind(this);
	    
	});
	riot.tag('boss-tenant-wechatsite', '<div class="container" if="{!hidden}"> <div class="row"> <div class="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2" style="text-align: center"><h3>公众号管理</h3></div> </div> <div class="row" style="margin-top: 10px"> <div class="action col-md-offset-2 col-lg-offset-2"> <button class="btn btn-default" onclick="{add}">添加</button> </div> <div class="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2"> <div class="row panel-container"> <table class="table table-striped"> <thead> <tr> <th>名称</th> <th>类型</th> <th>状态</th> <th>创建时间</th> </tr> </thead> <tbody> <tr each="{wechatSites}"> <td><a href="#wechatsite/_{_id}">{name}</a></td> <td>{ __app.enums.WechatSiteType.values[wechatSiteType] }</td> <td>{ __app.enums.LifeFlag.values[lFlg] }</td> <td>{_.date.format(new Date(crtOn), \'yyyy-MM-dd hh点mm分\')}</td> </tr> </tbody> </table> </div> </div> </div> </div>', 'boss-tenant-wechatsite .panel-container >div{ height: 40px; line-height: 40px; }', function(opts) {
	        var self = nest.presentable(this);
	        var loadAllWechatSite = domain.action('loadAllTenantWechatSite');

	        var onLoadAllWechatSite = function(data){
	            self.update({wechatSites: data});
	        }

	        self.on('open', function(){
	            loadAllWechatSite.execute(__page.tenantId);
	            self.trigger('ready', false);
	            self.trigger('view-route-to');
	        });
	        self.on('mount', function(){
	            loadAllWechatSite.onDone(onLoadAllWechatSite);
	        })

	        self.add = function(e){
	            riot.route('wechatsite/add');
	        }
	    
	});
	riot.tag('boss-tenant', '<div class="container" if="{!hidden}"> <div class="row"> <div class="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2" style="text-align: center"><h3>{tenant.name}</h3></div> </div> <div class="row" style="margin-top: 30px"> <div class="col-md-4 col-md-offset-3 col-lg-4 col-lg-offset-3"> <div class="row panel-container"> <div class="col-md-6">名称</div> <div class="col-md-6">{tenant.name}</div> <div class="col-md-6">类型</div> <div class="col-md-6">{__app.enums.PartyType.values[tenant.type]}</div> <div class="col-md-6">状态</div> <div class="col-md-6">{ __app.enums.LifeFlag.values[tenant.lFlg]}</div> <div class="col-md-6">创建时间</div> <div class="col-md-6">{_.date.format(new Date(tenant.crtOn), \'yyyy-MM-dd hh点mm分\')}</div> <div class="col-md-6">备注</div> <div class="col-md-6">{tenant.desc}</div> </div> </div> </div> </div>', 'boss-tenant .panel-container >div{ height: 40px; line-height: 40px; }', function(opts) {
	        var self = nest.presentable(this);
	        var loadTenantById = domain.action('loadTenantById');
	        var onLoadTenantById = function(res){
	            self.update({tenant: res.tenant});
	        };
	        self.on('open', function(){
	            loadTenantById.execute({id: __page.tenantId});
	            self.trigger('ready', false);
	            self.trigger('view-route-to');
	        });
	        self.on('mount', function(){
	            loadTenantById.onDone(onLoadTenantById);
	        })
	        self.on('unmount', function(){
	            loadTenantById.offDone(onLoadTenantById);
	        })
	    
	});
	riot.tag('boss-topbar', '<nav class="navbar navbar-default navbar-inverse" role="navigation" style="margin-bottom: 5px; border-radius: 0;"> <div class="collapse navbar-collapse"> <a class="navbar-brand" style="font-size:20px; color: #ffffff">微节点</a> <ul class="nav navbar-nav" style="width: 88%"> <li class="navbtn"><a id="tenants" href="#" route="tenants" class="myActive" onclick="{tenants}">机构</a></li> <li class="navbtn"><a id="power" href="/marketing/boss/power" >助力活动</a></li> <li style="float: right;"><a href="#" style="font-size: 1.4em" class="glyphicon glyphicon-off" title="退出" onclick="{logout}"></a></li> <li style="float: right; margin-right: 20px; padding-top: 5px;"> <img riot-src="{headimgurl}" style="height: 40px; width: 40px" alt=""><span style="margin-left: 10px; color: white">{nickname}</span> </li> </ul> </div> </nav>', '.navbtn{padding-left: 20px; font-size:16px} .myActive{color: #ffffff !important; border:0; outline: none !important;}', function(opts) {
	        this.headimgurl = __page.user.headimgurl;
	        this.nickname = __page.user.nickname;

	        this.on('mount', function(){
	            if(window.location.hash) {
	                $('.navbtn a').removeClass('myActive');
	                var reg = new RegExp(/^#[a-z, A-Z, _]+/);
	                var res = reg.exec(window.location.hash);
	                $(res[0]).addClass('myActive');
	            }
	        });

	        this.logout = function(e) {
	            $.get('/logout', function(data){
	               window.location.href = '/login';
	            });
	        }.bind(this);

	        this.tenants = function(e) {
	            e.preventUpdate = true;
	            $('.navbtn a').removeClass('myActive');
	            $(e.currentTarget).addClass('myActive');
	            riot.route($(e.currentTarget).attr('route'));
	        }.bind(this);
	    
	});
	riot.tag('boss-wechatsite-add', '<div class="container" if="{!hidden}"> <alert validators="{validators}" clear="{clear}"></alert> <div class="row" style="margin-top: 10px"> <div class="action col-md-offset-2 col-lg-offset-2"> <a href="#wechatsite">返回公众号列表</a> </div> <div class="form-con col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2"> <div class="panel panel-default"> <div class="panel-heading">基本信息</div> <div class="panel-body"> <div class="row"> <div class="col-md-3">名称</div> <div class="col-md-9"><input name="name" class="form-control" type="text"></div> </div> <div class="row"> <div class="col-md-3">类型</div> <div class="col-md-9"> <select id="selectType" class="form-control"> <option value="voa">认证服务号</option> <option value="vsa">认证订阅号</option> <option value="oa">服务号</option> <option value="sa">订阅号</option> </select> </div> </div> <div class="row"> <div class="col-md-3">公众号邮箱</div> <div class="col-md-9"><input name="email" class="form-control" type="email"></div> </div> <div class="row"> <div class="col-md-3">原始ID</div> <div class="col-md-9"><input name="originalId" class="form-control" type="text"></div> </div> <div class="row"> <div class="col-md-3">AppID</div> <div class="col-md-9"><input name="appId" class="form-control" type="text"></div> </div> <div class="row"> <div class="col-md-3">AppSecret</div> <div class="col-md-9"><input name="appSecret" class="form-control" type="text"></div> </div> </div> </div> <div class="sub"> <input class="btn btn-primary" onclick="{submit}" type="button" value="提交"> <input class="btn btn-default" onclick="{cancel}" type="button" value="取消"> </div> </div> </div> </div>', 'boss-wechatsite-add a { cursor: pointer; } boss-wechatsite-add .row{ margin-top: 10px; } boss-wechatsite-add .panel-container >div{ height: 40px; line-height: 40px; } boss-wechatsite-add .form-con { margin-top: 15px; padding: 0 0; } boss-wechatsite-add #selectType{ width: 30% !important; } boss-wechatsite-add .sub{ text-align: center; } boss-wechatsite-add .sub input{ margin-left: 30px; }', function(opts) {
	        var self = nest.presentable(this);
	        self.validators = [];

	        var addTenantWechatSite = domain.action('addTenantWechatSite');

	        var onAddTenantWechatSite = function(data){
	            if(!data.error){
	                riot.route('wechatsite/_' + data.wechatSite._id);
	            }
	        }
	        self.on('open', function(){
	            self.trigger('ready', false);
	            self.trigger('view-route-to');
	        });

	        self.on('mount', function(){
	            addTenantWechatSite.onDone(onAddTenantWechatSite)
	        })

	        self.cancel = function(e){
	            riot.route('wechatsite');
	        }
	        self.verify = function(data){
	            var legal = true;
	            if(!data.name){
	                self.validators.push({
	                    success: false,
	                    field: '名称',
	                    desc: '不能为空!'
	                });
	                legal = false;
	            }
	            if(!data.email){
	                self.validators.push({
	                    success: false,
	                    field: '邮箱',
	                    desc: '不能为空!'
	                });
	                legal = false;
	            }
	            if(!data.originalId){
	                self.validators.push({
	                    success: false,
	                    field: '原始ID',
	                    desc: '不能为空!'
	                });
	                legal = false;
	            }
	            if(!data.appId){
	                self.validators.push({
	                    success: false,
	                    field: 'AppID',
	                    desc: '不能为空!'
	                });
	                legal = false;
	            }
	            if(!data.appSecret){
	                self.validators.push({
	                    success: false,
	                    field: 'AppSecret',
	                    desc: '不能为空!'
	                });
	                legal = false;
	            }
	            if(data.email) {
	                var emailReg = new RegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);
	                if (!emailReg.test(data.email)) {
	                    self.validators.push({
	                        success: false,
	                        field: '邮箱',
	                        desc: '输入邮箱非法!'
	                    });
	                    legal = false;
	                }
	            }
	            return legal;
	        };
	        self.clear = function(){
	            self.validators = [];
	        };

	        self.submit = function(e){
	            self.validators = [];
	            var json = {
	                org: __page.tenantId,
	                name: self.name.value.trim(),
	                email: self.email.value.trim(),
	                originalId: self.originalId.value.trim(),
	                appId: self.appId.value.trim(),
	                appSecret: self.appSecret.value.trim(),
	                wechatSiteType: self.selectType.value
	            }
	            var allowSubmit = self.verify(json);
	            if(allowSubmit){
	                addTenantWechatSite.execute(json);
	            }
	        }
	    
	});
	riot.tag('boss-wechatsite-edit', '<div class="container" if="{!hidden}"> <alert validators="{validators}" clear="{clear}"></alert> <div class="row" style="margin-top: 10px"> <div class="action col-md-offset-2 col-lg-offset-2"> <a href="#wechatsite">返回公众号列表</a> </div> <div class="form-con col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2"> <div class="panel panel-default"> <div class="panel-heading">基本信息</div> <div class="panel-body"> <div class="row"> <div class="col-md-3">名称</div> <div class="col-md-9"><input name="name" class="form-control" type="text" value="{wechatSite.name}"></div> </div> <div class="row"> <div class="col-md-3">类型</div> <div class="col-md-9"> <select id="selectType" class="form-control"> <option value="voa">认证服务号</option> <option value="vsa">认证订阅号</option> <option value="oa">服务号</option> <option value="sa">订阅号</option> </select> </div> </div> <div class="row"> <div class="col-md-3">公众号邮箱</div> <div class="col-md-9"><input name="email" class="form-control" type="email" value="{wechatSite.email}"></div> </div> <div class="row"> <div class="col-md-3">原始ID</div> <div class="col-md-9"><input name="originalId" class="form-control" type="text" value="{wechatSite.originalId}"></div> </div> <div class="row"> <div class="col-md-3">AppID</div> <div class="col-md-9"><input name="appId" class="form-control" type="text" value="{wechatSite.appId}"></div> </div> <div class="row"> <div class="col-md-3">AppSecret</div> <div class="col-md-9"><input name="appSecret" class="form-control" type="text" value="{wechatSite.appSecret}"></div> </div> </div> </div> <div class="panel panel-default"> <div class="panel-heading">托管配置信息</div> <div class="panel-body"> <div class="row"> <div class="col-md-3">Token(令牌)</div> <div class="col-md-7" id="token">{ wechatSite.token }</div> <a class="col-md-2 resetToken" onclick="{resetToken}">重新生成</a> </div> <div class="row"> <div class="col-md-3">EncodingAESKey<br>(消息加解密密钥)</div> <div class="col-md-7" id="encodingAESKey">{ wechatSite.encodingAESKey }</div> <a class="col-md-2 resetAes" onclick="{resetAes}">重新生成</a> </div> </div> </div> <div class="sub"> <input class="btn btn-primary" onclick="{submit}" type="button" value="提交"> <input class="btn btn-default" onclick="{cancel}" type="button" value="取消"> </div> </div> </div> </div>', 'boss-wechatsite-edit a { cursor: pointer; } boss-wechatsite-edit .row{ margin-top: 10px; } boss-wechatsite-edit .panel-container >div{ height: 40px; line-height: 40px; } boss-wechatsite-edit .form-con { margin-top: 15px; padding: 0 0; } boss-wechatsite-edit #selectType{ width: 30% !important; } boss-wechatsite-edit .sub{ text-align: center; padding-bottom: 50px; } boss-wechatsite-edit .sub input{ margin-left: 30px; }', function(opts) {
	        var self = nest.presentable(this);
	        self.validators = [];

	        var loadTenantWechatSite = domain.action('loadTenantWechatSite');
	        var updateTenantWechatSiteById = domain.action('updateTenantWechatSiteById');

	        self.on('open', function(opt){
	            self.trigger('ready', false);
	            self.trigger('view-route-to');
	            self.id = opt.id;
	            loadTenantWechatSite.newInvocation(opt.id).onDone(function(res){
	                self.update({wechatSite: res.wechatSite});
	                $("#selectType").find("option[value='" + res.wechatSite.wechatSiteType + "']").attr("selected",true);
	            }).execute();
	        });

	        self.on('mount', function(){
	        })

	        self.cancel = function(e){
	            riot.route('wechatsite/_' + self.wechatSite._id);
	        }
	        self.verify = function(data){
	            var legal = true;
	            if(!data.name){
	                self.validators.push({
	                    success: false,
	                    field: '名称',
	                    desc: '不能为空!'
	                });
	                legal = false;
	            }
	            if(!data.email){
	                self.validators.push({
	                    success: false,
	                    field: '邮箱',
	                    desc: '不能为空!'
	                });
	                legal = false;
	            }
	            if(!data.originalId){
	                self.validators.push({
	                    success: false,
	                    field: '原始ID',
	                    desc: '不能为空!'
	                });
	                legal = false;
	            }
	            if(!data.appId){
	                self.validators.push({
	                    success: false,
	                    field: 'AppID',
	                    desc: '不能为空!'
	                });
	                legal = false;
	            }
	            if(!data.appSecret){
	                self.validators.push({
	                    success: false,
	                    field: 'AppSecret',
	                    desc: '不能为空!'
	                });
	                legal = false;
	            }
	            if(data.email) {
	                var emailReg = new RegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);
	                if (!emailReg.test(data.email)) {
	                    self.validators.push({
	                        success: false,
	                        field: '邮箱',
	                        desc: '输入邮箱非法!'
	                    });
	                    legal = false;
	                }
	            }
	            return legal;
	        };
	        self.clear = function(){
	            self.validators = [];
	        };

	        self.submit = function(e){
	            self.validators = [];
	            var json = {
	                id: self.id,
	                org: __page.tenantId,
	                name: self.name.value.trim(),
	                email: self.email.value.trim(),
	                originalId: self.originalId.value.trim(),
	                appId: self.appId.value.trim(),
	                appSecret: self.appSecret.value.trim(),
	                wechatSiteType: self.selectType.value,
	                token: $('#token').text(),
	                encodingAESKey: $('#encodingAESKey').text()
	            }
	            var allowSubmit = self.verify(json);
	            if(allowSubmit){
	                updateTenantWechatSiteById.newInvocation(json).onDone(function(res){
	                    if(!res.error){
	                        riot.route('wechatsite/_' + self.wechatSite._id);
	                    }else{
	                        self.validators.push({
	                            success: false,
	                            field: '公众号',
	                            desc: '修改失败!'
	                        });
	                    }
	                }).execute();
	            }
	        }

	        self.resetToken = function(e){
	            self.wechatSite.token = _.generateRandomString(20);
	            self.update()
	        }

	        self.resetAes = function(e){
	            self.wechatSite.encodingAESKey = _.generateRandomString(43);
	            self.update()
	        }
	    
	});
	riot.tag('boss-wechatsite', '<div class="container" if="{!hidden}"> <div class="row" style="margin-top: 10px"> <div class="row"> <div class="col-md-2 col-md-offset-2 col-lg-offset-2"> <a href="#wechatsite">返回公众号列表</a> </div> <div class="col-md-2 col-md-offset-1 col-lg-2 col-lg-offset-1" style="text-align: center"><h3>{wechatSite.name}</h3></div> </div> <div class="form-con col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2"> <div class="panel panel-default"> <div class="panel-heading">基本信息</div> <div class="panel-body"> <div class="row"> <div class="col-md-3">名称</div> <div class="col-md-9">{wechatSite.name}</div> </div> <div class="row"> <div class="col-md-3">类型</div> <div class="col-md-9">{ __app.enums.WechatSiteType.values[wechatSite.wechatSiteType] }</div> </div> <div class="row"> <div class="col-md-3">状态</div> <div class="col-md-9">{ __app.enums.LifeFlag.values[wechatSite.lFlg] }</div> </div> <div class="row"> <div class="col-md-3">创建时间</div> <div class="col-md-9">{_.date.format(new Date(wechatSite.crtOn), \'yyyy-MM-dd hh点mm分\')}</div> </div> <div class="row"> <div class="col-md-3">公众号邮箱</div> <div class="col-md-9">{wechatSite.email}</div> </div> <div class="row"> <div class="col-md-3">原始ID</div> <div class="col-md-9">{wechatSite.originalId}</div> </div> <div class="row"> <div class="col-md-3">AppID</div> <div class="col-md-9">{wechatSite.appId}</div> </div> <div class="row"> <div class="col-md-3">AppSecret</div> <div class="col-md-9">{wechatSite.appSecret}</div> </div> </div> </div> <div class="panel panel-default"> <div class="panel-heading">托管配置信息</div> <div class="panel-body"> <div class="row"> <div class="col-md-3">URL(服务器地址)</div> <div class="col-md-8" id="url">{__app.settings.app.protocol + \'://\' + __app.settings.app.domain + \'/wechat/\' + wechatSite.originalId + \'/message\'}</div> <a class="col-md-1 clip_button" data-clipboard-target="url">复制</a> </div> <div class="row"> <div class="col-md-3">Token(令牌)</div> <div class="col-md-8" id="token">{ wechatSite.token }</div> <a class="col-md-1 clip_button" data-clipboard-target="token">复制</a> </div> <div class="row"> <div class="col-md-3">EncodingAESKey<br>(消息加解密密钥)</div> <div class="col-md-8" id="encodingAESKey">{ wechatSite.encodingAESKey }</div> <a class="col-md-1 clip_button" data-clipboard-target="encodingAESKey">复制</a> </div> <div class="row"> <div class="col-md-3">公众号邮箱</div> <div class="col-md-8" id="email">{wechatSite.email}</div> <a class="col-md-1 clip_button" data-clipboard-target="email">复制</a> </div> <div class="row"> <div class="col-md-3">授权回调页面域名</div> <div class="col-md-8" id="callbackDomain">{__app.settings.app.domain}</div> <a class="col-md-1 clip_button" data-clipboard-target="callbackDomain">复制</a> </div> <div class="row"> <div class="col-md-3">JS接口安全域名</div> <div class="col-md-8" id="jsDomain">{__app.settings.app.domain}</div> <a class="col-md-1 clip_button" data-clipboard-target="jsDomain">复制</a> </div> </div> </div> <div class="action"> <a href="#wechatsite/edit/_{wechatSite._id}" class="btn btn-default">修改</a> <input if="{wechatSite.lFlg != \'a\'}" onclick="{unlockWechatSite}" class="btn btn-default" data-toggle="modal" data-target="#modal" type="button" value="激活"> <input if="{wechatSite.lFlg != \'i\'}" onclick="{lockWechatSite}" class="btn btn-default" data-toggle="modal" data-target="#modal" type="button" value="锁定"> <input if="{wechatSite.lFlg != \'d\'}" onclick="{delWechatSite}" class="btn btn-default" data-toggle="modal" data-target="#modal" type="button" value="删除"> </div> </div> </div> </div>', 'boss-wechatsite a { cursor: pointer; } boss-wechatsite .row{ margin-top: 10px; } boss-wechatsite .panel-container >div{ height: 40px; line-height: 40px; } boss-wechatsite .form-con { margin-top: 15px; padding: 0 0; } boss-wechatsite .action{ text-align: center; padding-bottom: 50px; } boss-wechatsite .action input{ margin-left: 30px; }', function(opts) {
	        var self = nest.presentable(this);
	        var loadTenantWechatSite = domain.action('loadTenantWechatSite');
	        var updateTenantWechatSiteById = domain.action('updateTenantWechatSiteById');

	        var onLoadTenantWechatSite = function(data){
	            if(!data.error){
	                self.update({wechatSite: data.wechatSite});
	            }
	        }
	        self.on('open', function(opt){
	            self.trigger('ready', false);
	            self.trigger('view-route-to');
	            loadTenantWechatSite.execute(opt.id);
	            var client = new ZeroClipboard( $('.clip_button') );
	        });

	        self.on('mount', function(){
	            loadTenantWechatSite.onDone(onLoadTenantWechatSite)
	        })

	        self.unlockWechatSite = function(){
	            _.widget.confirm({
	                title: '操作确认?',
	                content: '你确认要“激活”该公众号吗？',
	                callback: function(){
	                    self.wechatSite.lFlg = __app.enums.LifeFlag.names.Active;
	                    updateTenantWechatSiteById.newInvocation({
	                        id: self.wechatSite._id,
	                        lFlg: self.wechatSite.lFlg
	                    }).onDone(function(res){
	                        self.update();
	                    }).execute();
	                }
	            });
	        };
	        self.lockWechatSite = function(){
	            _.widget.confirm({
	                title: '操作确认?',
	                content: '你确认要“锁定”该公众号吗？',
	                callback: function(){
	                    self.wechatSite.lFlg = __app.enums.LifeFlag.names.Inactive;
	                    updateTenantWechatSiteById.newInvocation({
	                        id: self.wechatSite._id,
	                        lFlg: self.wechatSite.lFlg
	                    }).onDone(function(res){
	                        self.update();
	                    }).execute();
	                }
	            });
	        };
	        self.delWechatSite = function(){
	            _.widget.confirm({
	                title: '操作确认?',
	                content: '你确认要“删除”该公众号吗？',
	                callback: function(){
	                    self.wechatSite.lFlg = __app.enums.LifeFlag.names.Deleted;
	                    updateTenantWechatSiteById.newInvocation({
	                        id: self.wechatSite._id,
	                        lFlg: self.wechatSite.lFlg
	                    }).onDone(function(res){
	                        self.update();
	                    }).execute();
	                }
	            });
	        };
	    
	});
	riot.tag('broadcast', '<div if="{!hidden}"> <div if="{tip}" class="alert {addClass}" style="margin-top: -5px; float: left; width: 100%; text-align: center; margin-bottom: 0; position: absolute; z-index: 9999"> <strong>{tipInfo}</strong> </div> <div class="container" style="width: 100%; margin-left: 0; margin-right: 0; padding-left: 0; padding-right: 0"> <div class="row-fluid"> <div class="col-md-4 col-xs-4 col-sm-4" style="padding-right: 0; padding-left: 0; margin-top: -5px; width: 30%"> <div class="well sidebar-nav" style="padding-top: 0; padding-right: 0; padding-left: 0;height: 48em; background-color: #222; border: 1px solid #080808; overflow: scroll; border-radius: 0"> <div if="{!broadcastHistory.length}"> <ul style="padding: 0; margin: 0; list-style-type: none"> <li style="margin-bottom: 3px; padding: 25px 20px; background-color: #333; cursor: pointer; text-align: center"> <span style="color: white">暂无群发纪录</span> </li> </ul> </div> <div if="{broadcastHistory.length}"> <ul style="padding: 0; margin: 0; list-style-type: none"> <li each="{broadcastHistory}" style="position:relative; border-bottom: 1px solid #252525; padding: 5px 5px 5px 10px; background-color:#2E3238; cursor: pointer; color: white"> <div if="{contentType == \'image\'}" style="height: 100%; width: 100%"> <div style="display: -webkit-inline-box;"> <img style="width: 48px;height:48px" riot-src="{contentType == \'image\' && media_id && parent.api + \'/file/?media_id=\' + media_id}" alt=""> </div> <div style="position:absolute;right:10px;bottom:10px;font-size: 12px;float:right; text-align: right;">{parent.formatDate(crtOn)}</div> </div> <div if="{contentType == \'text\'}" style="height: 100%; width: 100%"> <div style="display: -webkit-inline-box; padding: 5px; min-height: 50px; overflow: hidden; width: 100%; font-size: 14px">{content}</div> <div style="position:absolute;right:10px;bottom:10px;font-size: 12px;float:right; text-align: right;">{parent.formatDate(crtOn)}</div> </div> </li> </ul> </div> </div> </div> <div class="col-md-8 col-xs-8 col-sm-8" style="padding-right: 1px; padding-left: 0; margin-top: -5px; width: 70%"> <div class="jumbotron" style="height: 48em; border-radius: 0"> <div id="broadcast"> <div class="panel panel-default" id="img_prew" style="display:none; margin-bottom: 10px"> <table class="table table-bordered" style="text-align: center; vertical-align: middle;"> <tbody> <tr> <td rowspan="3"> <img riot-src="{img_url}" alt="" style="height: 9em;"></td> <td>文件名</td> <td>{img_name}</td> </tr> <tr> <td>文件大小</td> <td>{img_size}</td> </tr> <tr> <td colspan="2"> <input class="btn btn-default" type="button" style="margin-right: 50px" value="取消" onclick="{cancel_send_img}"> <input class="btn btn-success" type="button" value="发送" onclick="{send_img}"> </td> </tr> </tbody> </table> </div> <div class="btn-group" style="float: left;margin-bottom: 10px"> <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span id="groupDisplay">请选择分组</span><span class="caret"></span> </button> <ul class="dropdown-menu"> <li each="{groups}"><a href="javascript:void(0)" onclick="{parent.chooseGroup}" groupid="{_id}">{name}</a></li> </ul> <input id="group" type="hidden"> </div> <textarea id="broadcastMsg" style="height:160px;background: #FBFBFB;margin-top: 5px;" class="form-control" rows="3"></textarea> <button id="send" type="button" onclick="{broadcast}" style="margin-top: 1em; width: 7em;float:right" class="btn btn-success">发送</button> <div id="choose_img" style="float: right; margin-right: 20px; margin-top: 12px"> <span class="btn_addPic glyphicon glyphicon-picture" href="javascript:void(0);"><input id="img_file" type="file" class="filePrew" class="glyphicon glyphicon-picture" multiple="multiple" accept="image/bmp, image/jpg, image/jpeg, image/gif, image/png" onchange="{previewImg}"></span> </div> </div> </div> </div> </div> </div> </div>', 'broadcast .btn_addPic{ display: block; position: relative; font-size: 35px; width: 38px; height: 38px; overflow: hidden; cursor: pointer; text-align: center; } broadcast .filePrew { display: block; position: absolute; top: 0; left: 0; width: 38px; height: 38px; cursor: pointer; font-size: 100px; opacity: 0; filter:alpha(opacity=0); }', function(opts) {
	            this.app = this.opts.app; //keep spa object
	            var self = nest.presentable(this);
	            self.env = (__app.settings.env.NODE_ENV=="production")?"public":"web";
	            self.api =  __app.settings.api.url;
	            self.botId = __page.bot.customId;
	            self.broadcastHistory = [];
	            self.tip = false;
	            self.tipInfo = "";

	            var broadcastTxt = domain.action('broadcastTxt');
	            var broadcastImg = domain.action('broadcastImg');
	            var loadBroadcastHistory = domain.action('loadBroadcastHistory')
	            var loadGroups = domain.action('loadGroups');

	            var onLoadGroups = function(data){
	                self.update({groups: data.groups});
	            };

	            var onBroadcastTxt = function(data){
	                $('#send').attr('disabled', false);
	                if(data.success){
	                    $('#broadcastMsg').val('');
	                    data.msgArr.forEach(function(msg){
	                        self.broadcastHistory.unshift(msg);
	                    });
	                    self.update();
	                    tipShow('success', '群发成功');
	                }else{
	                    tipShow('error', '群发失败');
	                }
	            }

	            var onBroadcastImg = function(data){
	                if(data.success){
	                    $('#img_file').val('');
	                    data.msgArr.forEach(function(msg){
	                        self.broadcastHistory.unshift(msg);
	                    });
	                    self.update();
	                    tipShow('success', '群发图片成功');
	                }else{
	                    tipShow('error', '群发图片失败');
	                }
	            }

	            var onLoadBroadcastHistory = function(data){
	                self.broadcastHistory = data.history || [];
	                self.update();
	            }

	            this.on('mount', function(){
	                console.info('tag broadcast index is mounted');
	                broadcastTxt.onDone(onBroadcastTxt);
	                broadcastImg.onDone(onBroadcastImg);
	                loadBroadcastHistory.onDone(onLoadBroadcastHistory);
	                loadGroups.onDone(onLoadGroups);
	            });
	            this.on('unmount', function(){
	                console.info('tag broadcast index is unmounted');
	                broadcastTxt.offDone(onBroadcastTxt);
	                broadcastImg.offDone(onBroadcastImg);
	                loadBroadcastHistory.offDone(onLoadBroadcastHistory);
	                loadGroups.offDone(onLoadGroups);
	            });
	            this.on('open', function(options){
	                console.info('tag broadcast index is opening');
	                self.trigger('ready', false);
	                self.trigger('view-route-to');
	                loadBroadcastHistory.execute(self.botId);
	                loadGroups.execute({tenantId:__page.user.posts[0].org, operatorId: __page.user.posts[0].member});
	            });

	            this.on('leave', function(){
	                self.mask = true;
	                self.update();
	            });

	            this.on('reenter', function(){
	                self.mask = false;
	                self.update();
	            });

	            this.on('refresh', function(){
	                console.info('tag broadcast index is refreshing');

	            });

	            function tipShow(type, msg){
	                var addClass = '';
	                if(type === 'success'){
	                    addClass = 'alert-success';
	                }
	                if(type === 'error'){
	                    addClass = 'alert-danger';
	                }
	                if(type === 'info'){
	                    addClass = 'alert-info';
	                }
	                if(type === 'warning'){
	                    addClass = 'alert-warning';
	                }
	                self.update({tip: true, tipInfo: msg, addClass: addClass});
	                setTimeout(function(){
	                    self.update({tip: false, tipInfo: '', addClass: ''});
	                }, 1000);
	            }

	            self.formatDate = function(date){
	                var dateStr = new Date(date).toLocaleString();
	                return dateStr.replace(/\//g, '-');
	            }

	            this.previewImg = function(e) {
	                var file = e.target.files[0];
	                self.img_size = file.size/1000 + 'KB';
	                self.img_name = file.name;
	                var reader = new FileReader();
	                reader.onload = function(data){
	                    self.img_url = data.target.result;
	                    self.update();
	                    $('#img_prew').show();
	                }
	                reader.readAsDataURL(file);
	            }.bind(this);

	            this.cancel_send_img = function(e) {
	                $('#img_prew').hide();
	            }.bind(this);

	            this.send_img = function(e) {
	                var groupId = $('#group').val();
	                if(groupId) {
	                    var formData = new FormData();
	                    var files = $('#img_file')[0].files;
	                    formData.append('file', files[0]);
	                    $.ajax({
	                        url: self.api + '/file/upload',
	                        type: 'POST',
	                        data: formData,
	                        processData: false,
	                        contentType: false,
	                        success: function (responseStr) {
	                            $('#img_prew').hide();
	                            var data = {
	                                botId: self.botId,
	                                groupId: groupId,
	                                media_id: responseStr.media_id
	                            }
	                            broadcastImg.execute(data);
	                        },
	                        error: function (responseStr) {
	                            console.error("失败:" + JSON.stringify(responseStr));
	                        }
	                    });
	                }else{
	                    tipShow('warning', '请先选择群发的分组');
	                }
	            }.bind(this);

	            this.broadcast = function(e) {
	                e.preventUpdate = true;
	                var groupId = $('#group').val();
	                if(groupId) {
	                    var msg = $('#broadcastMsg').val().trim();
	                    if (msg.length > 0) {
	                        var data = {
	                            botId: self.botId,
	                            groupId: groupId,
	                            msg: msg
	                        }
	                        broadcastTxt.execute(data);
	                        $(e.currentTarget).attr('disabled', true);
	                    } else {
	                        tipShow('warning', '发送内容不能为空');
	                    }
	                }else{
	                    tipShow('warning', '请先选择群发的分组');
	                }
	            }.bind(this);

	            this.chooseGroup = function(e) {
	                $('#groupDisplay').text($(e.currentTarget).text());
	                $('#group').val($(e.currentTarget).attr('groupId'));
	            }.bind(this);
	        
	});
	riot.tag('confirm', '<div class="modal fade" id="modal"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title">{title || \'操作确认\'}</h4> </div> <div class="modal-body"> <p>{content || \'确定吗?\'}&hellip;</p> </div> <div class="modal-footer"> <button onclick="{Cancel}" type="button" class="btn btn-default" data-dismiss="modal">取消</button> <button onclick="{Confirm}" type="button" class="btn btn-primary" data-dismiss="modal">确认</button> </div> </div> </div> </div>', function(opts) {
	        var self = this;
	        app.on('confirm', function(data){
	            self.update({title: data.title, content: data.content})
	        });
	        this.Cancel = function(e){
	            app.trigger('confirmCancel')
	        };
	        this.Confirm = function(e){
	            app.trigger('confirmOk');
	        };
	    
	});
	riot.tag('contacts', '<div if="{!hidden}" onclick="{hideMenu}"> <div if="{tip}" class="alert {addClass}" style="margin-top: -5px; float: left; width: 100%; text-align: center; margin-bottom: 0; position: absolute; z-index: 9999"> <strong>{tipInfo}</strong> </div> <div class="container" style="width: 100%; margin-left: 0; margin-right: 0; padding-left: 0; padding-right: 0"> <div class="row-fluid"> <div class="col-md-4 col-xs-4 col-sm-4" style="padding-right: 0; padding-left: 0; margin-top: -5px; width: 30%"> <div class="row-fluid" style="height:50px; background: #2E3238;"> <div onclick="{selectContacts}" class="{left_nav_sel: viewModel.nav === CONST.NAV.CONTACT, left_nav_def: viewModel.nav != CONST.NAV.CONTACT} col-md-5 col-xs-5 col-sm-5" style="text-align: center;height:50px; line-height: 50px;border-right:1px solid #1C2129"> <span class="glyphicon glyphicon-user" aria-hidden="true"></span> &nbsp联系人 </div> <div onclick="{selectGroups}" class="{left_nav_sel: viewModel.nav === CONST.NAV.GROUP,left_nav_def: viewModel.nav != CONST.NAV.GROUP} col-md-5 col-xs-5 col-sm-5" style="border-right:1px solid #1C2129;text-align: center;height:50px; line-height: 50px"> <span class="glyphicon glyphicon-th" aria-hidden="true"></span> &nbsp群 </div> <div id="menuBtn" onclick="{toggleMenu}" class="{menu_open: menuOpen} col-md-2 col-xs-2 col-sm-2" style="overflow:visible;position:relative;height:50px;line-height: 50px;color:white;font-size:16px;text-align: center"> <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> <div if="{menuOpen===true}" id="menu" style="position: absolute;top:50px;left:0px;width:170px;height:100px"> <ul style="list-style-type: none;margin: 0px;padding:0px;"> <li if="{!syncingContacts}" style="background: #4D5767;border-bottom: 1px solid #3F4650;text-align: left;padding-left:20px" onclick="{syncContact}"> <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> &nbsp<span style="font-size: 14px">同步联系人</span> </li> <li if="{syncingContacts}" style="background: #4D5767;border-bottom: 1px solid #3F4650;text-align: left;padding-left:20px"> <span class="sync glyphicon glyphicon-refresh" aria-hidden="true"></span> &nbsp<span style="font-size: 14px">正在同步联系人...</span> </li> <li if="{!syncingGroups}" style="background: #4D5767;border-bottom: 1px solid #3F4650;text-align: left;padding-left:20px" onclick="{syncGroup}"> <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> &nbsp<span style="font-size: 14px">同步群</span> </li> <li if="{syncingGroups}" style="background: #4D5767;border-bottom: 1px solid #3F4650;text-align: left;padding-left:20px"> <span class="sync glyphicon glyphicon-refresh" aria-hidden="true"></span> &nbsp<span style="font-size: 14px">正在同步群...</span> </li> </ul> </div> </div> </div> <div class="well sidebar-nav" style="padding-top: 0; padding-right: 0; padding-left: 0;height: 48em; background-color: #2E3238; border: 1px solid #080808; overflow: scroll; border-radius: 0"> <ul if="{viewModel.nav === CONST.NAV.CONTACT}" style="padding: 0; margin: 0; list-style-type: none"> <li each="{contacts}" onclick="{parent.selectContact}" style="margin-bottom: 3px; padding: 5px 20px; border-bottom:1px solid #292C33; cursor: pointer"> <img riot-src="{parent.api + \'/file?media_id=\' + headimgurl}" style="width: 4em; height: 4em" alt=""> <span style="color: white; margin-left: 15px">{nickname}</span> </li> </ul> <span style="display:block;text-align: center;margin-top: 10px; color: white" if="{!groups || groups.length===0}">暂无相关记录</span> <ul if="{viewModel.nav === CONST.NAV.GROUP}" style="padding: 0; margin: 0; list-style-type: none"> <li each="{groups}" style="height:50px;line-height:40px;margin-bottom: 3px; padding: 5px 20px; border-bottom:1px solid #292C33; cursor: pointer">  <span style="color: white; margin-left: 15px">{nickname}</span> </li> </ul> </div> </div> <div if="{Object.keys(currUser).length>0}" class="col-md-8 col-xs-8 col-sm-8" style="padding-right: 1px; padding-left: 0; margin-top: -5px; width: 70%"> <div style="margin-bottom:50px;height: 50px;line-height:50px;border-bottom:1px solid #ddd;text-align: center"> <span>明细</span> </div> <div style="padding-bottom:30px;"> <div class="avatar" style="text-align: center;"><img riot-src="{api + \'/file?media_id=\' + currUser.headimgurl}" style="width:120px;height:120px;border-radius: 5px;margin-bottom: 10px"></div> <div class="nickname_area" style="text-align:center;height:48px;line-height: 48px;"><strong style="font-size: 24px;font-weight: 100">{currUser.nickname}</strong></div> <div style="width:70%;padding-left: 28%;margin: 0px auto;color:#999;margin-bottom:10px"> <label>备注: &nbsp&nbsp&nbsp&nbsp</label><span>{currUser.remark}</span><br> <label>地区: &nbsp&nbsp&nbsp&nbsp</label><span>{showPlace()}</span> </div> <div class="tags_area"> <div style="text-align: center; margin-bottom:20px"> <button if="{viewModel.mode===\'view\'}" onclick="{editTags}" type="button" class="btn btn-default" style="display:inline-block;background: #269227; color:white; border: none"> 编辑标签 </button> <button if="{viewModel.mode===\'edit\'}" onclick="{submitTags}" type="button" class="btn btn-default" style="display:inline-block;background: #269227; color:white; border: none"> 确认 </button>    </div> <ul onclick="{clickTags}" class="{tags_body:true, tags_body_edit:viewModel.mode===\'edit\'}"> <li style="position: relative" class="{tags_item:true ,tags_edit: parent.viewModel.mode===\'edit\'}" each="{name in (currUser.tags || [])}"> {name} <b onclick="{parent.removeTag}" if="{parent.viewModel.mode===\'edit\'}" style="position: absolute;border-radius: 50em;top:6px;right:3px;width:18px;height:18px;background:#8A8A8A"> <b style="width:16px;height:16px;border-radius: 50em;display:block;margin:4px auto"> <span style="position: absolute; top: 2px; left: 2px;" class="glyphicon glyphicon-remove" aria-hidden="true"></span> </b> </b> </li> <li><input name="newTag" onkeyup="{newTagInput}" type="text" value="" style="display:inline-block;margin-left:10px;margin-top:5px;font-size:16px;background:transparent;border:none"></li> </ul> </div> </div> <div> </div> </div> </div> </div> </div>', 'contacts .sync{ animation:rotation 2.5s linear infinite; -webkit-animation:rotation 2.5s linear infinite; } contacts .menu_open{ background: #4D5767; } contacts input,contacts textarea{ outline:none; } contacts .left_nav_def{ color:white; } contacts .left_nav_sel{ color:#6CBD6E; } contacts .tags_body{ list-style-type: none; width:50%; margin:0px auto; padding-top: 12px; overflow:hidden; padding-left:0px; padding:10px; } contacts .tags_body_edit{ border:1px solid #ccc; border-radius: 5px; } contacts .tags_item{ float:left;margin-right:10px;margin-bottom:10px;height:32px;padding:5px 25px; background:#6CBD6E;color:white;text-align:center;border-radius: 5px; } contacts .tags_item:first-child{ margin-left:0px; } contacts .tags_edit{ background:#8FC590 !important; }', function(opts) {
	            this.app = this.opts.app; //keep spa object
	            var self = nest.presentable(this);
	            var CONST = self.CONST = {
	                NAV: {
	                    CONTACT: 'contact',
	                    GROUP: 'group'
	                }
	            };
	            self.env = (__app.settings.env.NODE_ENV=="production")?"public":"web";
	            self.api =  __app.settings.api.url;
	            self.botId = __page.bot.customId;
	            self.tip = false;
	            self.tipInfo = "";
	            self.viewModel = {
	                nav: CONST.NAV.CONTACT,
	                mode: 'view'
	            };
	            self.menuOpen = false;
	            
	            self.currUser = {};
	            self.init = function(){

	            };
	            var loadContacts = domain.action('loadContacts');
	            var saveTagsById = domain.action('saveTagsById');
	            var syncContacts = domain.action('syncContacts');
	            var syncGroups = domain.action('syncGroups');

	            var onLoadContacts = function(data){
	                self.update({contacts: data.contacts, groups: data.groups});
	            };
	            var onSyncContacts = function(data){
	                setTimeout(function(){
	                    self.syncingContacts = false;
	                    self.update();
	                }, 5*3600*1000);
	            };
	            var onSyncGroups = function(data){
	                setTimeout(function(){
	                    self.syncingGroups = false;
	                    self.update();
	                }, 5*3600*1000);
	            };
	            var onSaveTagsById = function(data){
	                if(data.success){
	                    self.viewModel.mode = 'view';

	                    self.newTag.value = '';
	                    self.update();
	                }
	            };

	            this.on('mount', function(){
	                console.info('tag contacts index is mounted');
	                syncContacts.onDone(onSyncContacts);
	                syncGroups.onDone(onSyncGroups);
	                loadContacts.onDone(onLoadContacts);
	                saveTagsById.onDone(onSaveTagsById);
	            });
	            this.on('unmount', function(){
	                console.info('tag contacts index is unmounted');
	                syncContacts.offDone(onSyncContacts);
	                syncGroups.offDone(onSyncGroups);
	                loadContacts.offDone(onLoadContacts);
	                saveTagsById.offDone(onSaveTagsById);
	            });
	            this.on('open', function(options){
	                console.info('tag contacts index is opening');
	                self.trigger('ready', false);
	                self.trigger('view-route-to');
	                loadContacts.execute(self.botId);
	            });

	            this.on('leave', function(){
	                self.mask = true;
	                self.update();
	            });

	            this.on('reenter', function(){
	                self.mask = false;
	                self.update();
	            });

	            this.on('refresh', function(){
	                console.info('tag contacts index is refreshing');

	            });

	            function tipShow(type, msg){
	                var addClass = '';
	                if(type === 'success'){
	                    addClass = 'alert-success';
	                }
	                if(type === 'error'){
	                    addClass = 'alert-danger';
	                }
	                if(type === 'info'){
	                    addClass = 'alert-info';
	                }
	                if(type === 'warning'){
	                    addClass = 'alert-warning';
	                }
	                self.update({tip: true, tipInfo: msg, addClass: addClass});
	                setTimeout(function(){
	                    self.update({tip: false, tipInfo: '', addClass: ''});
	                }, 1000);
	            }

	            this.selectContact = function(e) {
	                self.currUser = e.item
	                self.viewModel.mode = 'view';
	                self.newTag.value = "";
	            }.bind(this);
	            self.formatDate = function(date){
	                var dateStr = new Date(date).toLocaleDateString();
	                return dateStr.replace(/\//g, '-');
	            };
	            self.showPlace = function(){
	                var result = "";
	                if (self.currUser.district) {
	                    result = (self.currUser.city || '') + ' '+ (self.currUser.district || '');
	                }
	                else{
	                    result = (self.currUser.province || '') + ' ' + (self.currUser.city || '');
	                }
	                return result;
	            };
	            this.hideMenu = function(e) {
	                self.menuOpen = false;
	            }.bind(this);
	            this.selectContacts = function(e) {
	                self.viewModel.nav = CONST.NAV.CONTACT;
	            }.bind(this);
	            this.selectGroups = function(e) {
	                self.viewModel.nav = CONST.NAV.GROUP;
	            }.bind(this);
	            this.editTags = function(e) {
	                self.viewModel.mode = 'edit';
	                $('.tags_body').find('>li>input').focus();
	            }.bind(this);
	            this.cancelTags = function(e) {
	                self.viewModel.mode = 'view';
	                self.newTag.value = "";
	            }.bind(this);
	            this.clickTags = function(e) {
	                var $target = $(e.currentTarget);
	                $target.find('>li>input').focus();
	            }.bind(this);
	            this.newTagInput = function(e) {
	                if(e.which === 32 && (self.newTag.value.trim() != '')){
	                    if(!self.currUser.tags){
	                        self.currUser.tags = [];
	                    }
	                    if(self.currUser.tags.length > 4){
	                        alert('最多添加五个标签');
	                        return;
	                    }
	                    self.currUser.tags.forEach(function(tag){
	                        if(tag.trim() === self.newTag.value.trim()){
	                            return;
	                        }
	                    });
	                    self.currUser.tags.push(self.newTag.value.trim());
	                    self.newTag.value = "";
	                }
	            }.bind(this);
	            this.removeTag = function(e) {
	                self.currUser.tags.forEach(function(item, index){
	                    if(item === e.item.name){
	                        self.currUser.tags.splice(index, 1);
	                    }
	                });
	                return false;
	            }.bind(this);
	            this.submitTags = function(e) {
	                saveTagsById.execute({
	                    id: self.currUser._id,
	                    tags: self.currUser.tags,
	                    tenant: __page.bot.org
	                })
	            }.bind(this);
	            this.toggleMenu = function(e) {
	                self.menuOpen = !self.menuOpen;
	                e.stopPropagation();
	            }.bind(this);
	            this.syncContact = function(e) {
	                syncContacts.execute({
	                    botid: __page.bot.customId
	                });
	                self.syncingContacts = true;
	                e.stopPropagation();
	            }.bind(this);
	            this.syncGroup = function(e) {
	                syncGroups.execute({
	                    botid: __page.bot.customId
	                });
	                self.syncingGroups = true;
	                e.stopPropagation();
	            }.bind(this);
	        
	});
	riot.tag('del-group-member', '<div class="title_wrap"> <b onclick="{backToView}" style="display: block;width:24px;height:24px;float:left" onclick="{back}"> <i class="glyphicon glyphicon-chevron-left"></i> </b> 移除成员 <b onclick="{submit}" style="display: block;width:80px;height:24px;float:right"> <button type="button" class="btn btn-default" style="display:inline-block;background: #42AC3E; color:white; border: none"> 确认移除 </button> </b> </div> <div> <div class="wrapper" attr="{parent.mediaUsers}"> <div>   <ul class="user_list"> <li onclick="{parent.selectMember}" each="{parent.groupMembers}" id="{_id}" media="{parent.media._id}" group="{parent.parent.parent.group._id}"> <img riot-src="{parent.app.settings.api.url + \'/file?media_id=\' + member.headimgurl}"> <p style="overflow: hidden;height:24px">{member.remark}</p> </li> </ul> </div> </div> </div>', 'del-group-member .wrapper{ width:90%; margin:0px auto; } del-group-member .user_list{ overflow: hidden; list-style-type: none; margin:0px; padding:0px; color:#888; } del-group-member .user_list >li{ width:100px; float:left; margin:5px 0px; text-align: center; line-height: 30px; position: relative; } del-group-member .user_list >li img{ display: inline-block; width:64px; height:64px; } del-group-member .title_wrap{ height:50px; margin:8px 10px; text-align: center; line-height: 50px; } del-group-member .select{ position: absolute; top:0px; left:17px; background:#42AC3E; width:64px; height:64px; opacity: 0.8; } del-group-member .select div{ font-size: 40px; color:white; margin:8px; }', function(opts) {
	        var self = this;
	        self.page = __page;
	        self.app = __app;
	        self.nav = 0;
	        self.members = {};
	        var navNameToIndex = {
	            '基本信息': 0,
	            '成员': 1
	        };
	        var addGroupMembers = domain.action('addGroupMembers');
	        function onAddGroupMembers(data){
	            if(data.success){
	                self.members = {};
	                if(data.data && data.data.length){
	                    data.data.forEach(function(member){
	                        self.parent.groupMembers.unshift(member);
	                    })
	                }
	                self.parent.panel.view();
	                self.parent.update();
	            }
	        }
	        this.on('mount', function(){
	            addGroupMembers.onDone(onAddGroupMembers);
	        });
	        this.on('unmount', function(){
	            addGroupMembers.offDone(onAddGroupMembers);
	        });
	        this.clickNav = function(e) {
	            self.nav = navNameToIndex[e.target.innerText];
	        }.bind(this);
	        this.addMember = function(e) {
	            self.parent.panel.status = 'add_m';
	            self.parent.update();
	        }.bind(this);
	        this.selectMember = function(e) {
	            var target = e.currentTarget;
	            var id = target.id;
	            var group = target.getAttribute('group');
	            var media = target.getAttribute('media');
	            toggle(target)
	            function toggle(target){
	                if(self.members[id]){
	                    cancel(target);
	                    delete self.members[id];
	                }else{
	                    var member = {
	                        group: group,
	                        media: media,
	                        member: id
	                    };
	                    self.members[id] = member;
	                    select(target);
	                }
	            }
	            function select(el){
	                var maskEl = document.createElement('div');
	                maskEl.classList.add('select');
	                var iconEl = document.createElement('div');
	                iconEl.classList.add('glyphicon');
	                iconEl.classList.add('glyphicon-ok');
	                maskEl.appendChild(iconEl);
	                el.appendChild(maskEl);
	            }
	            function cancel(el){
	                el.removeChild(el.childNodes[el.childNodes.length-1])
	            }
	        }.bind(this);
	        this.submit = function(e) {
	            if(!Object.keys(self.members).length){
	                return;
	            }else{
	                addGroupMembers.execute({members: self.members});
	            }
	        }.bind(this);
	        this.backToView = function(e) {
	            self.members = {};
	            self.parent.panel.view();
	            self.parent.update();
	        }.bind(this);
	    
	});
	riot.tag('group-left', '<div class="well sidebar-nav" style="padding-top: 0; padding-right: 0; padding-left: 0;height: 48em; background-color: #2E3238; border: 1px solid #080808; overflow: scroll; border-radius: 0"> <ul style="padding: 0; margin: 0; list-style-type: none"> <li style="height: 50px; border-bottom:1px solid #252525; line-height: 50px;overflow: hidden"> <div class="col-md-8 col-xs-8 col-sm-8" style="height:50px;line-height:50px;overflow: hidden"> <div style="padding-left:10px;background: #24272C;height: 32px; margin-top: 8px;line-height:32px;color: #777"> <b style="width:20%;"> <span class="glyphicon glyphicon-search"></span> </b> <input oninput="{search}" type="text" id="searchInput" style="background: transparent;border: none;width:80%" placeholder="搜索"> </div> </div> <div class="col-md-4 col-xs-4 col-sm-4" style="height:50px;overflow: hidden;"> <div style="height:32px;margin-top: 6px;line-height: 32px"> <button type="button" onclick="{parent.addGroup}" class="btn btn-sm" style="background: #42AC3E; color:white"> <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> 添加分组 </button> </div> </div> </li> <li onclick="{parent.parent.viewGroup}" id="{_id}" each="{ownGroups || parent.groups}" style="height: 50px;line-height: 40px;border-bottom:1px solid #252525;padding: 5px 20px; cursor: pointer"> <span style="color: white; margin-left: 15px">{name}</span> </li> </ul> </div>', function(opts) {
	    var self = this;
	    self.ownGroups = null;
	    self._timeout = null;
	    self.init = function(){
	        self.ownGroups = null;
	        self.searchInput.value = '';
	    }
	    this.search = function(e) {
	        if(self._timeout){
	            return;
	        }
	        self._timeout = setTimeout(function(){
	            var txt = self.searchInput.value;
	            var keywords = txt.split(' ');
	            self.ownGroups = self.parent.groups.filter(function(group){
	                var matched = true;
	                keywords.forEach(function(keyword){
	                    if(group.name.search(new RegExp(keyword)) <= -1){
	                        matched = false;
	                    }
	                });
	                return matched;
	            });
	            clearTimeout(self._timeout);
	            self._timeout = null;
	            self.update();
	        }, 500)
	    }.bind(this);

	});
	riot.tag('group', '<div if="{!hidden}"> <div class="row-fluid" style="overflow: hidden; background: #eee;margin-top:-6px"> <div class="col-md-4 col-xs-4 col-sm-4" style="padding-right: 0; padding-left: 0; width: 30%"> <group-left></group-left> </div> <div class="col-md-8 col-xs-8 col-sm-8" style="background:#eee;padding-right: 1px; padding-left: 0;width: 70%"> <div if ="{panel.status === \'start\'}"> </div> <view-group if="{panel.status === \'view\'}"></view-group> <add-group if="{panel.status === \'add\'}"></add-group> <del-group-member if="{panel.status === \'del_m\'}"></del-group-member> <add-group-member if="{panel.status === \'add_m\'}"></add-group-member> </div> </div> </div>', function(opts) {
	        this.app = this.opts.app; //keep spa object
	        var self = nest.presentable(this);
	        self.env = (__app.settings.env.NODE_ENV=="production")?"public":"web";
	        self.api =  __app.settings.api.url;
	        self.botId = __page.bot.customId;
	        self.tip = false;
	        self.tipInfo = "";
	        self.groups = {};
	        self.groupMembers = [];

	        var loadAllMyManageMedia = domain.action('loadAllMyManageMedia');
	        var loadGroups = domain.action('loadGroups');
	        var loadGroup = domain.action('loadGroup');

	        var onLoadGroups = function(data){
	            self.groups = data.groups
	            self.update();
	        };
	        var onLoadAllMyManageMedia = function(data){
	            self.myManageMedia = data.medias;
	            self.panel.add();
	            self.update();
	        };
	        var onLoadGroup = function(data){
	            self.group = data.group;
	            self.groupMembers = data.members;
	            self.panel.view();
	            self.update();
	        };

	        this.on('mount', function(){
	            loadAllMyManageMedia.onDone(onLoadAllMyManageMedia);
	            loadGroups.onDone(onLoadGroups);
	            loadGroup.onDone(onLoadGroup);
	        });
	        this.on('unmount', function(){
	            loadAllMyManageMedia.offDone(onLoadAllMyManageMedia);
	            loadGroups.offDone(onLoadGroups);
	            loadGroup.offDone(onLoadGroup);
	        });
	        this.on('open', function(options){
	            console.info('tag group index is opening');
	            self.trigger('ready', false);
	            self.trigger('view-route-to');
	            loadGroups.execute({tenantId:__page.user.posts[0].org, operatorId: __page.user.posts[0].member});
	        });

	        this.on('leave', function(){
	            self.mask = true;
	            self.update();
	        });

	        this.on('reenter', function(){
	            self.mask = false;
	            self.update();
	        });

	        this.on('refresh', function(){
	            console.info('tag group index is refreshing');

	        });

	        self.formatDate = function(date){
	            var dateStr = new Date(date).toLocaleDateString();
	            return dateStr.replace(/\//g, '-');
	        }

	        self.panel ={
	            status: 'start',
	            add:function(){
	                this.status = 'add'
	            },
	            view: function(){
	                this.status = 'view';
	                self.tags['view-group'].init();
	            },
	            start: function(){
	                this.status = 'start';
	                self.group = {};
	                self.groupMembers = [];
	            }
	        };
	        this.viewGroup = function(e) {
	            var groupId = e.currentTarget.id;
	            loadGroup.execute({id: groupId});
	        }.bind(this);
	        this.addGroup = function(e) {
	            var w = self.panel;
	            if(w.status === 'add'){
	                return
	            }
	            loadAllMyManageMedia.execute({tenantId: __page.user.posts[0].org, operatorId: __page.user.posts[0].member});
	        }.bind(this);
	    
	});
	riot.tag('overview', '<div if="{!hidden}"> <div if="{tip}" class="alert {addClass}" style="margin-top: -5px; float: left; width: 100%; text-align: center; margin-bottom: 0; position: absolute; z-index: 9999"> <strong>{tipInfo}</strong> </div> <div class="container" style="width: 100%; margin-left: 0; margin-right: 0; padding-left: 0; padding-right: 0"> <div class="row"> &nbsp; </div> <div class="row"> <div class="col-md-8 col-md-offset-2" > <div class="panel panel-default"> <div class="panel-heading">账户信息</div> <div class="panel-body"> <div class="container" style=""> <div class="row"> <div class="col-md-1 col-lg-1" style=""> 账户： </div> <div class="col-md-3 col-lg-3" riot-style=""> {user.nickname} &nbsp;&nbsp; <small><small>个人账户</small></small> </div> <div class="col-md-1 col-lg-1" style=""> 管理员： </div> <div class="col-md-3 col-lg-3" style=""> <img src="{user.headimgurl}" alt="{user.nickname}" class="img-rounded" data-src="holder.js/40x40" style="width: 40px; height: 40px;"> &nbsp;&nbsp;{user.nickname} </div> </div> </div> </div> </div> <div class="panel panel-default"> <div class="panel-heading">微信托管</div> <div class="panel-body"> <div style=""> <div class="row"> <div class="col-md-3 col-lg-3" style=""> <img src="{bot.headimgurl}" alt="{bot.name}" class="img-rounded" data-src="holder.js/40x40" style="width: 40px; height: 40px;"> &nbsp; {bot.name} <img if="{bot.sex==1}" src="/web/images/male.png" alt="男" class="" style="boder:0px; width: 16px; height: 16px;"> <img if="{bot.sex==2}" src="/web/images/female.png" alt="女" class="" style="boder:0px; width: 16px; height: 16px;"> </div> <div class="col-md-3 col-lg-3" style=""> <div class="row" > <div class="col-md-4 col-lg-4" style="height: 60px"> <img if="{!botActioning && botKeepLogged}" src="/web/images/stop-active.png" alt="退出" onclick="{goExiting}" class="bot-action-icon bot-logged" style=""> <img if="{botActioning && botKeepLogged}" src="/web/images/start.png" alt="启动中..." class="bot-action-icon bot-logging" style=""> <img if="{!botActioning && botKeepExited}" src="/web/images/start-active.png" alt="启动" onclick="{goLogging}" class="bot-action-icon bot-exited" style=""> <img if="{botActioning && botKeepExited}" src="/web/images/stop.png" alt="退出中..." class="bot-action-icon bot-exiting" style=""> </div> <div class="col-md-8 col-lg-8" style="vertical-align: middle;height: 60px;"> <label>&nbsp;&nbsp;{bot.statusName}</label> </div> </div> </div> <div class="col-md-6 col-lg-6" if="{needLoginFlg}"> <div class="row" > <div class="col-md-4 col-lg-4" style="height: 112px;"> <img riot-src="{loginQR}" style="border:1px solid #ddd;display: inline-block; height: 100%"> </div> <div class="col-md-8 col-lg-8" style="vertical-align: middle;height: 60px;"> <label>扫描左方二维码登录</label> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div>', 'overview .panel-body{ line-height: 70px; } overview .bot-action-icon{ border: 0px; width: 60px; height: 60px; } overview .bot-logged {cursor: default !important;} overview .bot-logging {cursor: wait !important;} overview .bot-exited {cursor: default !important;} overview .bot-exiting {cursor: wait !important;}', function(opts) {
	            "use strict";
	            this.app = this.opts.app; //keep spa object
	            var self = nest.presentable(this);
	            self.api =  __app.settings.api.url;
	            self.tip = false;
	            self.tipInfo = "";
	            self.botId = __page.bot.customId;
	            self.bot = __page.bot;
	            self.user = __page.user;
	            self.tenantId = __page.tenantId;
	            self.botKeepLogged = true;
	            self.botKeepExited = false;
	            self.botActioning = true;
	            self.needLoginFlg = false;
	            var loadBotByMediaId = domain.action('loadBotByMediaId');
	            var startBot = domain.action('startBot');
	            var stopBot = domain.action('stopBot');
	            var IntentionStatus = __app.enums.IntentionStatus.names;
	            var Status = __app.enums.WechatBotStatus.names;
	            var statusValues = __app.enums.WechatBotStatus.values;
	            var BotState = function(id, intentionStatus, status){
	                this.id = id;
	                this.intentionStatus = intentionStatus || IntentionStatus.Logged;
	                this.on('logged', this.onLogged.bind(this));
	                this.on('exited', this.onExited.bind(this));
	                this.on('logging', this.onLogging.bind(this));
	                this.on('exiting', this.onExiting.bind(this));
	                this.on('status-changed', this.onStatusChanged.bind(this));
	                this.updateStatus(status);
	            };
	            BotState.prototype = riot.observable({});
	            BotState.prototype.updateStatus = function(status){
	                if(this.status==status){
	                    return;
	                }
	                else{
	                    this.status = status;
	                }

	                if(status == IntentionStatus.Logged){
	                    this.trigger('logged');
	                }
	                else if(status == IntentionStatus.Exited || status == Status.Aborted){
	                    this.trigger('exited');
	                }
	                this.trigger('status-changed', this.status, status);
	            };
	            BotState.prototype.goLogging = function(){
	                this.trigger('logging');
	            };
	            BotState.prototype.goExiting = function(){
	                this.trigger('exiting');
	            };
	            BotState.prototype.onLogged = function(){
	                self.bot.intentionStatus = IntentionStatus.Logged;
	                self.botKeepLogged = true;
	                self.botKeepExited = false;
	                self.botActioning = false;
	                self.update();
	            };
	            BotState.prototype.onExited = function(){
	                self.bot.intentionStatus = IntentionStatus.Exited;
	                self.botKeepLogged = false;
	                self.botKeepExited = true;
	                self.botActioning = false;
	                self.update();
	            };
	            BotState.prototype.onLogging = function(){
	                self.botKeepLogged = true;
	                self.botKeepExited = false;
	                self.botActioning = true;
	                self.update();
	                console.info('logging...');

	            };
	            BotState.prototype.onExiting = function(){
	                self.botKeepLogged = false;
	                self.botKeepExited = true;
	                self.botActioning = true;
	                self.update();
	                console.info('exiting...');

	            };
	            BotState.prototype.onStatusChanged = function(oldStatus, newStatus){
	                self.bot.status = newStatus;
	                self.bot.statusName = statusValues[self.bot.status];
	                console.info(self.bot.statusName);
	                self.update();
	            };

	            var botState = null;

	            ws.subscribe('/bot/st_change', function(data){
	                var json = data;
	                if(json.agentId === self.bot.customId){
	                    if(json.newStatus === Status.Logged){
	                        self.needLoginFlg = false;
	                    }
	                    botState.updateStatus(json.newStatus);
	                }
	            });

	            ws.subscribe('/bot/need_login', function(data){
	                var json = data;
	                if(json.agentId === self.bot.customId){
	                    self.loginQR = json.mediaUrl;
	                    self.needLoginFlg = true;
	                    self.update();
	                }
	            });

	            this.goLogging = function(e) {
	                startBot.execute({
	                    openid: self.bot.customId,
	                    intention: 'login',
	                    mode: 'untrusted',
	                    nickname: self.bot.name,
	                    sex: self.bot.sex
	                });
	                botState.goLogging();
	            }.bind(this);

	            this.goExiting = function(e) {
	                stopBot.execute({openid: self.bot.customId});
	                console.log({openid: self.bot.customId});
	                botState.goExiting();
	            }.bind(this);

	            var onLoadBotByMediaId = function(data){
	                botState = new BotState(self.bot.id, data.media.intentionStatus, data.media.status);
	                botState.updateStatus(data.media.status);
	                self.update();
	            };

	            this.on('mount', function(){
	                loadBotByMediaId.onDone(onLoadBotByMediaId);
	                loadBotByMediaId.execute({
	                    botId: self.bot._id
	                });
	            });
	            this.on('unmount', function(){
	                loadBotByMediaId.offDone(onLoadBotByMediaId);
	            });
	            this.on('open', function(options){
	                console.info('tag overview is opening');
	                self.trigger('ready', false);
	                self.trigger('view-route-to');
	            });

	            this.on('leave', function(){
	                self.mask = true;
	                self.update();
	            });

	            this.on('reenter', function(){
	                self.mask = false;
	                self.update();
	            });

	            this.on('refresh', function(){
	                console.info('tag overview is refreshing');

	            });

	        
	});
	riot.tag('raw', '', function(opts) {
	        var me = this;
	        me.on('update', function(){
	            me.root.innerHTML = me.opts.content || '';
	        })
	    
	});
	riot.tag('recontent-index', '<div if="{!hidden}"> <div class="container-fluid"> <div class="row-fluid"> &nbsp; </div> <div class="row-fluid"> <div class="col-md-6 col-lg-6" > <div class="row-fluid"> <div class="col-md-12 col-lg-12" > <div class="pull-right"> <button class="btn btn-default btn-sm" type="button" onclick="{onRefresh}">刷新</button> <button class="btn btn-default btn-sm" type="button" onclick="{onNew}">新建</button> </div> <table class="table table-striped"> <thead> <tr> <th>名称</th> <th>广告</th> <th>预览</th> </tr> </thead> <tbody> <tr each="{recontents}"> <td> <a onclick="{parent.onView}"> <input type="hidden" value="{_id}"> {originalTitle} </a> </td> <td> {adName} </td> <td> <a href="{newUrl}" target="_blank"> 预览 </a> </td> </tr> </tbody> </table> </div> </div> </div> <div class="col-md-6 col-lg-6" >   </div> </div> </div> <form id="newForm" method="post" action="recontent-set" target="_blank"> <input type="hidden" id="tenantId" name="tenantId" value="{tenantId}"> </form> </div>', function(opts) {
	            "use strict";
	            this.app = this.opts.app;
	            var self = nest.presentable(this);
	            self.api =  __app.settings.api.url;
	            self.tenantId = this.opts.tenant;



	            var findTenantRecontents = domain.action('findTenantRecontents');

	            var onFindTenantRecontents = function(recontents){
	                console.log(recontents);
	                self.update({recontents: recontents});
	            };

	            this.on('mount', function(){
	                findTenantRecontents.onDone(onFindTenantRecontents);
	            });
	            this.on('unmount', function(){
	                findTenantRecontents.offDone(onFindTenantRecontents);
	            });
	            this.on('open', function(options){
	                console.info('tag adlink-index is opening');
	                self.trigger('ready', false);
	                self.trigger('view-route-to');
	                findTenantRecontents.execute(self.tenantId);
	            });

	            this.on('leave', function(){
	                self.mask = true;
	                self.update();
	            });

	            this.on('reenter', function(){
	                self.mask = false;
	                self.update();
	            });

	            this.on('refresh', function(){
	                onRefresh();
	            });

	            this.onRefresh = function(e) {
	                findTenantRecontents.execute(self.tenantId);
	            }.bind(this);

	            this.onNew = function(e) {


	                $('#newForm').submit();
	            }.bind(this);

	            this.onView = function(e) {



	            }.bind(this);

	            this.showEditView = function(id){
	                detail.trigger('close');
	                edit.trigger('open', {action: 'edit', id: id});
	            };

	            this.showDetailView = function(model){
	                edit.trigger('close');
	                detail.trigger('open', {model: model});
	            };

	        
	});
	riot.tag('redpacket-boss', '<div if="{!hidden}"> <div if="{tip}" class="alert {addClass}" style="margin-top: -5px; float: left; width: 100%; text-align: center; margin-bottom: 0; position: absolute; z-index: 9999"> <strong>{tipInfo}</strong> </div> <div class="container"> <div class="row-fluid"> <div class="jumbotron" style="height: auto; padding: 25px;"> <div if="{!editing}" id="luckyMoneyHelpList" class="panel" style="margin-top: 1em; padding: 0; min-height: 30em"> <div style="padding-left: 20px; padding-bottom: 10px;"><a id="add" style="font-size: 1.5em; text-decoration: none; cursor: pointer">新增</a> </div> <ul class="ul" id="list"> <li> <strong class="col-md-2">活动名称</strong> <strong class="col-md-2">开始时间</strong> <strong class="col-md-2">结束时间</strong>  <strong class="col-md-6">操作</strong> </li> <li> <hr width="100%"> </li> <li each="{redpackets}"> <strong class="col-md-2 activity-name" onclick="{parent.edit}">{name}</strong> <strong class="col-md-2">{parent.formatDate(startTime)}</strong> <strong class="col-md-2">{parent.formatDate(endTime)}</strong> <strong class="col-md-6 actionCon"><a href="{__app.settings.app.url + \'/marketing/redpacket/redpacket?id=\' + _id}" target="_blank">查看</a><a href="{__app.settings.api.url + \'/marketing/redpacket/exportParticipants?id=\' + _id}" target="_blank" >导出</a></strong> </li> </ul> </div> <div if="{editing}" id="addForm" class="panel" style="margin-top: 1em;"> <div style="padding-left: 20px; padding-bottom: 10px;"><a id="return" style="font-size: 1.5em; text-decoration: none; cursor: pointer">返回</a></div> <ul class="ul" style="text-align: left; padding-left: 2em"> <li><span>红包助力活动设置</span></li> <li><span>活动名称: </span><input name="redpacketActivityName" id="activityName" type="text" value="{redpacket.name}"></li> <li class="bgImg" style="min-height: 26px"><span style="float: left">背景图片(3张): </span><input id="bgImg" type="file" multiple="multiple" accept="image/bmp, image/jpg, image/jpeg, image/gif, image/png" onchange="uploadBgImg()" style="width: 60px;"> <div id="bgImg1" if="{redpacket.bgImg[0]}" class="bgImgCon"><i class="glyphicon glyphicon-remove"></i><img riot-src="{redpacket.bgImg[0]}" alt=""></div> <div id="bgImg2" if="{redpacket.bgImg[1]}" class="bgImgCon"><i class="glyphicon glyphicon-remove"></i><img riot-src="{redpacket.bgImg[1]}" alt=""></div> <div id="bgImg3" if="{redpacket.bgImg[2]}" class="bgImgCon"><i class="glyphicon glyphicon-remove"></i><img riot-src="{redpacket.bgImg[2]}" alt=""></div> </li> <li style="clear: both; min-height: 26px"><span style="float: left">分享卡片图片: </span><input id="shareImg" type="file" accept="image/bmp, image/jpg, image/jpeg, image/gif, image/png" onchange="uploadShareImg()" style="width: 60px;"> <div id="shareImg1" if="{redpacket.shareImg}" class="shareImgCon"><i class="glyphicon glyphicon-remove"></i><img riot-src="{redpacket.shareImg}" alt=""></div> </li> <li style="clear: both"><span>活动时间: </span><input id="startTime" type="date" value="{formatDate(redpacket.startTime)}"><span> 至 </span><input id="endTime" type="date" value="{formatDate(redpacket.endTime)}"> </li> <li><span>活动介绍: </span><div id="desc"></div></li> <li><span>活动规则: </span><div id="rule"></div></li> <li><span>分享标题自定义: </span><textarea id="shareTitle" cols="60" rows="1">{redpacket.shareTitle}</textarea></li> <li><span>分享描述自定义: </span><textarea id="shareDesc" cols="60" rows="1">{redpacket.shareDesc}</textarea></li> <li><span>基础红包金额: </span><input id="base_power" type="text" value="{redpacket.base_power}"></li> <li><span>好友助力单次奖励: </span><input id="friend_help_min_power" type="text" value="{redpacket.friend_help_min_power}"><span> 至 </span><input id="friend_help_max_power" type="text" value="{redpacket.friend_help_max_power}"></li> <li><span>好友助力上限人数: </span><input id="friend_help_count_limit" type="text" value="{redpacket.friend_help_count_limit}"></li> <li style="text-align: center; margin-top: 1em"><input class="btn btn-success" type="button" id="submit" value="提交"></li> </ul> </div> </div> </div>  </div> </div>', 'redpacket-boss .leftlist {list-style-type: none; text-align: center; font-size: 1.3em} redpacket-boss .ul {list-style-type: none; text-align: center; padding: 0} redpacket-boss .ul li {margin-bottom: 20px;} redpacket-boss .bgImg #bgImg {float: left; margin-left: 10px;} redpacket-boss .bgImg .bgImgCon {margin-left: 10px; display: -webkit-inline-box; position: relative; display: none; border: solid 1px #E8E7E7;} redpacket-boss .bgImgCon i{color: #EC3131; position: absolute; left: 58px; top: 2px; cursor: pointer;} redpacket-boss .bgImgCon div{margin-left: 20px; float: left;} redpacket-boss .bgImgCon img {width: 75px; height: 75px;} redpacket-boss .shareImgCon img {width: 75px; height: 75px;} redpacket-boss #shareImg{float: left; margin-left: 10px;} redpacket-boss .shareImgCon i{color: #EC3131;position: absolute;left: 58px;top: 2px;cursor: pointer;} redpacket-boss .shareImgCon{margin-left: 10px; display: -webkit-inline-box;position: relative; display: none; border: solid 1px #E8E7E7;} redpacket-boss .activity-name{ color: #23527c; cursor: pointer; } redpacket-boss li strong{ padding: 0 !important; margin: 0 !important; } redpacket-boss .actionCon a{ margin-left: 10px; }', function(opts) {
	            "use strict";
	            this.app = this.opts.app; //keep spa object
	            var self = nest.presentable(this);
	            self.api =  __app.settings.api.url;
	            self.tip = false;
	            self.tipInfo = "";
	            self.redpacket = {};
	            self.editing = false;

	            var loadRedpackets = domain.action('loadRedpackets');
	            var onloadRedpackets = function(redpackets){
	                self.redpackets = redpackets;
	                self.update();
	            };

	            setTimeout(function(){
	                debugger;
	                console.error($('#desc').summernote);
	                console.log( $('#desc'));
	                $('#desc').summernote({
	                    height: 200,
	                    minHeight: null,
	                    maxHeight: null,
	                    focus: true
	                });
	                $('#rule').summernote({
	                    height: 200,
	                    minHeight: null,
	                    maxHeight: null,
	                    focus: true
	                });
	            }, 5000);
	            this.on('mount', function(){
	                loadRedpackets.onDone(onloadRedpackets);
	            });
	            this.on('unmount', function(){
	                loadRedpackets.offDone(onloadRedpackets);
	            });
	            this.on('open', function(options){
	                self.trigger('ready', false);
	                self.trigger('view-route-to');
	                loadRedpackets.execute({});
	                console.info('tag tenants is opening');
	            });

	            this.on('leave', function(){
	                self.mask = true;
	                self.update();
	            });

	            this.on('reenter', function(){
	                self.mask = false;
	                self.update();
	            });

	            this.on('refresh', function(){
	                console.info('tag tenants is refreshing');

	            });

	            self.formatDate = function(date){
	                var dateTime = new Date(date);
	                var year = dateTime.getFullYear();
	                var month = (dateTime.getMonth() + 1)>9 ? (dateTime.getMonth() + 1) : '0' + (dateTime.getMonth() + 1);
	                var day = dateTime.getDate() > 9 ? dateTime.getDate() : '0' + dateTime.getDate();
	                return year + '-' + month + '-' + day;
	            }
	            self.edit = function(e){
	                self.update({redpacket: e.item, editing: true});
	            }
	        
	});
	riot.tag('showimg', '<div class="modal fade" id="showImg"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title">{title || \'图片\'}</h4> </div> <div if="{!errorMsg}" class="modal-body" style="text-align: center"> <img riot-src="{imgUrl}" alt="" id="img" riot-style="height: {height}; width: {width}"> </div> <div if="{errorMsg}" class="modal-body" style="text-align: center"> <span>{errorMsg}</span> </div> </div> </div> </div>', function(opts) {
	        var self = this;
	        app.on('showImg', function(data){
	            console.log(data);
	            self.update({title: data.title, imgUrl: data.imgUrl, width: data.width, height: data.imgUrl, errorMsg: data.errorMsg});
	        });

	    
	});
	riot.tag('tenant-edit', '<div class="container" if="{!hidden}"> <div class="row"> <div class="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2" style="text-align: center"><h3>{tenant.name}</h3></div> </div> <alert validators="{validators}" clear="{clear}"></alert> <div class="row" style="margin-top: 30px"> <div class="col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3"> <div class="row panel-container"> <div class="col-md-3">名称</div> <div class="col-md-9"> <div class="{has-error: !tenantNameInput.value.trim()} has-feedback"> <input type="text" onblur="{onNameBlur}" class="form-control" name="tenantNameInput" value="{tenant.name}" required> </div> </div> <div class="col-md-3">类型</div> <div class="col-md-9"> <div class="btn-group" data-toggle="buttons"> <label onclick="{selectPersonalType}" class="btn btn-default {active: tenant.type == \'p\'}"> <input type="radio" name="orgTypeRadio" autocomplete="off" __checked="{tenant.type == \'p\'}" value="p"> 个人 </label> <label onclick="{selectOrgType}" class="btn btn-default {active: tenant.type == \'o\'}"> <input type="radio" name="orgTypeRadio" autocomplete="off" __checked="{tenant.type == \'o\'}" value="o"> 机构 </label> </div> </div> <div class="col-md-3">状态</div> <div class="col-md-9">{ __app.enums.LifeFlag.values[tenant.lFlg]}</div> <div class="col-md-3">创建时间</div> <div class="col-md-9">{_.date.format(new Date(tenant.crtOn), \'yyyy-MM-dd hh点mm分\')}</div> <div class="col-md-3">备注</div> <div class="col-md-9"><textarea name="tenantDescInput" class="form-control" onblur="{descOnBlur}">{tenant.desc}</textarea></div> </div> </div> </div> <div class="row" style="margin-top: 30px"> <div class="col-md-12 col-lg-12" style="text-align: center"> <input __disabled="{!tenantNameInput.value.trim()}" onclick="{onSubmit}" class="btn btn-primary" type="button" value="保存"> <a href="#tenants/_{tenant._id}" class="btn btn-default">取消</a> </div> </div> </div>', function(opts) {
	        var self = nest.presentable(this);
	        var loadTenantById = domain.action('loadTenantById');
	        var updateTenantById = domain.action('updateTenantById');
	        var onLoadTenantById = function(res){
	            self.update({tenant: res.tenant});
	            self.trigger('ready', false);
	            self.trigger('view-route-to');
	        };
	        self.validators = [];
	        self.on('open', function(ctx){
	            loadTenantById.newInvocation({id: ctx.req.paramList[0]})
	                .onDone(onLoadTenantById)
	                .execute()
	        });
	        self.selectPersonalType = function(e){
	            self.tenant.type = 'p';
	            self.update();
	        };
	        self.selectOrgType = function(e){
	            self.tenant.type = 'o';
	            self.update();
	        };
	        self.onSubmit = function(){
	            updateTenantById.newInvocation(self.tenant)
	                .onDone(function(){
	                    riot.route('tenants/_' + self.tenant._id);
	                })
	                .execute();
	        };
	        self.onNameBlur = function(){
	            var name = self.tenantNameInput.value.trim();
	            if(!name){
	                return self.validators.push({
	                    success: false,
	                    field: '名称',
	                    desc: '不能为空!'
	                });
	            }
	            self.tenant.name = name;
	        };
	        self.clear = function(){
	            self.validators = [];
	        };
	        self.descOnBlur = function(){
	            var desc = self.tenantDescInput.value.trim();
	            if(!desc){
	                return;
	            }
	            self.tenant.desc = desc;
	        }
	    
	});
	riot.tag('tenant-topbar', '<nav class="navbar navbar-default navbar-inverse" role="navigation" style="margin-bottom: 5px; border-radius: 0;"> <div class="collapse navbar-collapse"> <a class="navbar-brand" style="font-size:20px; color: #ffffff">微节点</a> <ul class="nav navbar-nav" style="width: 88%"> <li class="navbtn"><a id="adlink-index" href="#" route="adlink-index" onclick="{adlinks}">广告位</a></li> <li class="navbtn"><a id="recontent-index" href="#" route="recontent-index" class="myActive" onclick="{recontents}">文章</a></li> <li style="float: right;"><a href="#" style="font-size: 1.4em" class="glyphicon glyphicon-off" title="退出" onclick="{logout}"></a></li> <li style="float: right; margin-right: 20px; padding-top: 5px;"> <img riot-src="{headimgurl}" style="height: 40px; width: 40px" alt=""><span style="margin-left: 10px; color: white">{nickname}</span> </li> </ul> </div> </nav>', '.navbtn{padding-left: 20px; font-size:16px} .myActive{color: #ffffff !important; border:0; outline: none !important;}', function(opts) {
	        this.headimgurl = __page.user.headimgurl;
	        this.nickname = __page.user.nickname;
	        this.tenantId = this.opts.tenant;

	        this.on('mount', function(){
	            if(window.location.hash) {
	                $('.navbtn a').removeClass('myActive');
	                $(window.location.hash).addClass('myActive');
	            }
	        });

	        this.logout = function(e) {
	            $.get('/logout', function(data){
	               window.location.href = '/login';
	            });
	        }.bind(this);

	        this.adlinks = function(e) {
	            e.preventUpdate = true;
	            $('.navbtn a').removeClass('myActive');
	            $(e.currentTarget).addClass('myActive');
	            riot.route($(e.currentTarget).attr('route'));
	        }.bind(this);

	        this.recontents = function(e) {
	            e.preventUpdate = true;
	            $('.navbtn a').removeClass('myActive');
	            $(e.currentTarget).addClass('myActive');
	            riot.route($(e.currentTarget).attr('route'));
	        }.bind(this);

	    
	});
	riot.tag('tenant', '<div class="container" if="{!hidden}"> <div class="row"> <div class="col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" style="position: relative;text-align: center"> <a href="#tenants" style="position: absolute; left: 0px; top: 20px;">返回机构列表</a> <h3>{tenant.name}</h3> </div> </div> <div class="row" style="margin-top: 30px"> <div class="col-md-4 col-md-offset-3 col-lg-4 col-lg-offset-3"> <div class="row panel-container"> <div class="col-md-6">名称</div> <div class="col-md-6">{tenant.name}</div> <div class="col-md-6">类型</div> <div class="col-md-6">{__app.enums.PartyType.values[tenant.type]}</div> <div class="col-md-6">状态</div> <div class="col-md-6">{ __app.enums.LifeFlag.values[tenant.lFlg]}</div> <div class="col-md-6">创建时间</div> <div class="col-md-6">{_.date.format(new Date(tenant.crtOn), \'yyyy-MM-dd hh点mm分\')}</div> <div class="col-md-6">备注</div> <div class="col-md-6">{tenant.desc}</div> </div> </div> </div> <div class="row" style="margin-top: 30px"> <div class="col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4" style="text-align: center"> <a href="#tenants/edit/_{tenant._id}" class="btn btn-default">修改</a> <input if="{tenant.lFlg != \'a\'}" onclick="{unlockTenant}" class="btn btn-default" data-toggle="modal" data-target="#modal" type="button" value="激活"> <input if="{tenant.lFlg != \'i\'}" onclick="{lockTenant}" class="btn btn-default" data-toggle="modal" data-target="#modal" type="button" value="锁定"> <input if="{tenant.lFlg != \'d\'}" onclick="{delTenant}" class="btn btn-default" data-toggle="modal" data-target="#modal" type="button" value="删除"> </div> </div> <div class="row" style="margin-top: 30px"> <div class="col-md-12 col-lg-12" style="text-align: center"> <a href="/boss/tenant/_{tenant._id}">机构管理</a> </div> </div> </div>', '.panel-container >div{ height: 40px; line-height: 40px; }', function(opts) {
	        var self = nest.presentable(this);
	        var loadTenantById = domain.action('loadTenantById');
	        var updateTenantById = domain.action('updateTenantById');
	        self.unlockTenant = function(){
	            _.widget.confirm({
	                title: '操作确认?',
	                content: '你确认要“激活”机构吗？',
	                callback: function(){
	                    self.tenant.lFlg = __app.enums.LifeFlag.names.Active;
	                    updateTenantById.newInvocation({
	                        id: self.tenant._id,
	                        lFlg: self.tenant.lFlg
	                    }).onDone(function(res){
	                        self.update();
	                    }).execute();
	                }
	            });
	        };
	        self.lockTenant = function(){
	            _.widget.confirm({
	                title: '操作确认?',
	                content: '你确认要“锁定”机构吗？',
	                callback: function(){
	                    self.tenant.lFlg = __app.enums.LifeFlag.names.Inactive;
	                    updateTenantById.newInvocation({
	                        id: self.tenant._id,
	                        lFlg: self.tenant.lFlg
	                    }).onDone(function(res){
	                        self.update();
	                    }).execute();
	                }
	            });
	        };
	        self.delTenant = function(){
	            _.widget.confirm({
	                title: '操作确认?',
	                content: '你确认要“删除”机构吗？',
	                callback: function(){
	                    self.tenant.lFlg = __app.enums.LifeFlag.names.Deleted;
	                    updateTenantById.newInvocation({
	                        id: self.tenant._id,
	                        lFlg: self.tenant.lFlg
	                    }).onDone(function(res){
	                        self.update();
	                    }).execute();
	                }
	            });
	        };
	        self.on('open', function(ctx){
	            loadTenantById.newInvocation({id: ctx.req.paramList[0]})
	                .onDone(function(res){
	                    self.update({tenant: res.tenant});
	                    self.trigger('ready', false);
	                    self.trigger('view-route-to');
	                }).execute();
	        });
	    
	});
	riot.tag('tenants', '<div if="{!hidden}"> <div if="{tip}" class="alert {addClass}" style="margin-top: -5px; float: left; width: 100%; text-align: center; margin-bottom: 0; position: absolute; z-index: 9999"> <strong>{tipInfo}</strong> </div> <div class="container" style="width: 100%; margin-left: 0; margin-right: 0; padding-left: 0; padding-right: 0"> <div class="row"> &nbsp; </div> <div class="row"> <div class="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2" > <form class="form-inline"> <div class="form-group"> <label for="statusSelect">状态</label> <select id="statusSelect" class="form-control"> <option value="" selected>请选择</option> <option value="{__app.enums.LifeFlag.names.Active}">{__app.enums.LifeFlag.values.a}</option> <option value="{__app.enums.LifeFlag.names.Inactive}">{__app.enums.LifeFlag.values.i}</option> <option value="{__app.enums.LifeFlag.names.Deleted}">{__app.enums.LifeFlag.values.d}</option> </select> </div> <button onclick="{queryTenantsByFilter}" class="btn btn-primary">查询</button> </form> <table class="table table-striped"> <thead> <tr> <th>名称</th> <th>类型</th> <th>状态</th> <th>创建时间</th> <th>备注</th> </tr> </thead> <tbody> <tr each="{tenants}"> <td> <a href="#tenants/_{_id}"> {name} </a> </td> <td> { __app.enums.PartyType.values[type] } </td> <td> { __app.enums.LifeFlag.values[lFlg] } </td> <td> {_.date.format(new Date(crtOn), \'yyyy-MM-dd hh点mm分\')} </td> <td> { desc } </td> </tr> </tbody> </table> </div> </div> </div> </div>', function(opts) {
	            "use strict";
	            this.app = this.opts.app; //keep spa object
	            var self = nest.presentable(this);
	            self.api =  __app.settings.api.url;
	            self.tip = false;
	            self.tipInfo = "";
	            var findTenants = domain.action('findTenants');
	            var onFindTenants = function(res){
	                var ts = res.tenants;
	                ts = ts.filter(function(t){return t.lFlg==='a'})
	                        .concat(ts.filter(function(t){return t.lFlg==='i'}))
	                        .concat(ts.filter(function(t){return t.lFlg==='d'}));
	                self.update({tenants: ts});
	            };
	            self.queryTenantsByFilter = function(e){
	                var filter = {};
	                self.statusSelect.value && (filter['lFlg'] = self.statusSelect.value);
	                findTenants.execute(filter);
	            };

	            this.on('mount', function(){
	                findTenants.onDone(onFindTenants);
	            });
	            this.on('unmount', function(){
	                findTenants.offDone(onFindTenants);
	            });
	            this.on('open', function(options){
	                self.trigger('ready', false);
	                self.trigger('view-route-to');
	                findTenants.execute({});
	                console.info('tag tenants is opening');
	            });

	        
	});
	riot.tag('top-menu', '<nav class="navbar navbar-default navbar-inverse" role="navigation" style="margin-bottom: 5px; border-radius: 0;"> <div class="collapse navbar-collapse"> <a class="navbar-brand" style="font-size: 1.6em;color: white">微节点</a> <ul class="nav navbar-nav" style="width: 88%"> <li class="navbtn"><a id="overview" href="#" route="overview" class="myActive" onclick="{overview}">首页</a></li> <li class="navbtn"><a id="broadcast" href="#" route="broadcast" class="" onclick="{broadcast}">群发</a></li> <li class="navbtn"><a id="contacts" href="#" route="contacts" onclick="{contacts}">联系人</a></li> <li class="navbtn"><a id="group" href="#" route="group" onclick="{group}">群组</a></li> <li style="float: right;"><a href="#" style="font-size: 1.4em" class="glyphicon glyphicon-off" title="退出" onclick="{logout}"></a></li> <li style="float: right; margin-right: 20px; padding-top: 5px;"> <img riot-src="{headimgurl}" style="height: 40px; width: 40px" alt=""><span style="margin-left: 10px; color: white">{nickname}</span> </li> </ul> </div> </nav>', 'top-menu .navbtn{padding-left: 3em; font-size:1.2em} top-menu .myActive{color: #ffffff !important; border:0; outline:none !important;}', function(opts) {
	        this.headimgurl = __page.user.headimgurl;
	        this.nickname = __page.user.nickname;

	        this.on('mount', function(){
	            if(window.location.hash) {
	                $('.navbtn a').removeClass('myActive');
	                $(window.location.hash).addClass('myActive');
	            }
	        });

	        this.logout = function(e) {
	            $.get('/logout', function(data){
	               window.location.href = '/login';
	            });
	        }.bind(this);

	        this.overview = function(e) {
	            e.preventUpdate = true;
	            $('.navbtn a').removeClass('myActive');
	            $(e.currentTarget).addClass('myActive');
	            riot.route($(e.currentTarget).attr('route'));
	        }.bind(this);

	        this.broadcast = function(e) {
	            e.preventUpdate = true;
	            $('.navbtn a').removeClass('myActive');
	            $(e.currentTarget).addClass('myActive');
	            riot.route($(e.currentTarget).attr('route'));
	        }.bind(this);

	        this.group = function(e) {
	            e.preventUpdate = true;
	            $('.navbtn a').removeClass('myActive');
	            $(e.currentTarget).addClass('myActive');
	            riot.route($(e.currentTarget).attr('route'));
	        }.bind(this);

	        this.contacts = function(e) {
	            e.preventUpdate = true;
	            $('.navbtn a').removeClass('myActive');
	            $(e.currentTarget).addClass('myActive');
	            riot.route($(e.currentTarget).attr('route'));
	        }.bind(this);
	    
	});
	riot.tag('view-group', '<div class="title_wrap"> <ul onclick="{clickNav}" class="nav nav-tabs" style="color: #3E3D3D"> <li role="presentation" class="{active: nav===0}"><a href="#">基本信息</a></li> <li role="presentation" class="{active: nav===1}"><a href="#">成员</a></li> </ul> </div> <div if="{nav===0}" class="profile"> <div class="profile_item row-fluid"> <div class="primary col-md-6 col-xs-6 col-sm-6"> <label>名称</label> </div> <div class="primary col-md-6 col-xs-6 col-sm-6"> <div if="{viewModel.mode === \'view\'}"> <label>{parent.group.name}</label>&nbsp&nbsp <span onclick="{editGroupName}" style="color:#45cc10;font-size:16px;" class="glyphicon glyphicon-edit" aria-hidden="true"></span> </div> <form if="{viewModel.mode===\'edit\'}" class="form-inline"> <input onblur="{checkGroupName}" class="form-control" name="groupName" type="text" value="{parent.group.name}" style="width:100px"> <button onclick="{submitGroupName}" type="button" class="btn btn-default" style="background: #18c54b;border:none"> <span class="glyphicon glyphicon-ok" style="color:white" aria-hidden="true"></span> </button> </form> </div> </div> <div class="profile_item row-fluid"> <div class="secondary col-md-6 col-xs-6 col-sm-6"> <label>类型</label> </div> <div class="secondary col-md-6 col-xs-6 col-sm-6"> <label>{__app.enums.GroupType.values[parent.group.type]}</label> </div> </div> <div class="profile_item row-fluid"> <div class="secondary col-md-6 col-xs-6 col-sm-6"> <label>范围</label> </div> <div class="secondary col-md-6 col-xs-6 col-sm-6"> <label>{__app.enums.GroupScope.values[parent.group.scope]}</label> </div> </div> <div class="profile_item row-fluid"> <div class="secondary col-md-6 col-xs-6 col-sm-6"> <label>包含微信号</label> </div> <div class="secondary col-md-6 col-xs-6 col-sm-6"> <button each="{parent.group.medias}" onclick="{backToView}" type="button" class="btn btn-default" style="display:inline-block;background: #CCC; color:white; border: none"> {name} </button> </div> </div> <div class="profile_item row-fluid"> <div class="secondary col-md-6 col-xs-6 col-sm-6"> <label>负责人</label> </div> <div class="secondary col-md-6 col-xs-6 col-sm-6"> <label>{parent.group.operator.remark}</label> </div> </div> <div class="profile_item"> <button onclick="{delGroup}" type="button" class="btn btn-default" style="height:40px;width:160px;background: #903D3D; color:white; border: none"> <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> 删除该组 </button> </div> </div> <div if="{nav===1}"> <div class="wrapper"> <div style="margin-bottom: 10px; overflow: hidden"> <span>共 ( <strong style="color:#65cc2b">{parent.groupMembers.length}</strong> ) 人</span> <button onclick="{selectContact}" class="{select_contact: status[\'contact\']}"> <span class="glyphicon glyphicon-user" aria-hidden="true"></span> 联系人 </button> <button onclick="{selectGroup}" class="{select_contact: status[\'group\']}"> <span class="glyphicon glyphicon-th" aria-hidden="true"></span> 群组 </button> <div style="float:right"> <button if="{currentStatus === \'view\'}" onclick="{addMember}" style="background: #52B918; color:white" type="button" class="btn" aria-label="Left Align"> <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> 添加成员 </button> <button if="{currentStatus === \'view\'}" onclick="{editMember}" style="background: #e35a51; color:white" type="button" class="btn" aria-label="Align Right"> <span class="glyphicon glyphicon-minus" aria-hidden="true"></span> 移除成员 </button> <button if="{currentStatus === \'edit\'}" onclick="{delMember}" class="{btn: true, btn_enabled: members && Object.keys(members).length>0, btn_disable: !members || Object.keys(members).length===0}" style="color:white" type="button" aria-label="Align Right"> <span class="glyphicon glyphicon-trash" aria-hidden="true"></span> 完成 </button> <button if="{currentStatus === \'edit\'}" onclick="{cancelDelMember}" style="background: #B1B1B1; color:white" type="button" class="btn" aria-label="Align Right"> <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> 取消 </button> </div> </div> <div class="list_container"> <ul class="user_list" > <li onclick="{parent.selectMember}" each="{parent.groupMembers}" if="{parent.status[member.contacttype]}" remark="{member.remark}" mid="{member._id}"> <img class="{img_sel: parent.currentStatus === \'edit\'}" riot-src="{parent.app.settings.api.url + \'/file?media_id=\' + member.headimgurl}"> <p style="overflow: hidden;height:24px">{member.remark}</p> </li> </ul> </div> </div> </div>', 'view-group input,view-group textarea{ outline:none; } view-group .select_contact{ background: #5B6779; border:1px solid #2E3238; color:white; } view-group .profile_item .primary:nth-child(1){ padding-left:25% } view-group .profile_item .primary:nth-child(2){ padding-left:15% } view-group .profile_item .secondary:nth-child(1){ padding-left:25% } view-group .profile_item .secondary:nth-child(2){ padding-left:15% } view-group .list_container{ overflow: scroll; height:500px; } view-group .img_sel{ opacity: 0.4; } view-group .wrapper{ width:90%; margin:0px auto; } view-group .user_list{ overflow: hidden; list-style-type: none; margin:0px; padding:0px; color:#888; } view-group .user_list >li{ width:100px; float:left; margin:5px 0px; text-align: center; line-height: 30px; position: relative; } view-group .user_list >li img{ display: inline-block; width:64px; height:64px; } view-group .profile{ padding-top:30px; margin:0px auto; width:80% } view-group .profile_item{ margin: 0px auto; text-align: center; margin-bottom: 30px; overflow: hidden; } view-group .profile_item div.secondary label{ font-size: 16px; } view-group .profile_item >div:first-child{ text-align: left; } view-group .profile_item >div:nth-child(2){ text-align: left; } view-group .profile_item label{ font-weight:400; font-size: 24px; } view-group .select{ position: absolute; top:0px; left:17px; background:#42AC3E; width:64px; height:64px; opacity: 0.8; } view-group .select div{ font-size: 40px; color:white; margin:8px; } view-group .title_wrap{ height:50px; margin:8px 10px; } view-group .btn_disable{ background: #B1B1B1; } view-group .btn_enabled{ background: #e35a51; }', function(opts) {
	    var self = this;
	    var loadAllGroupMediaUsers = domain.action('loadAllGroupMediaUsers');
	    var editGroup = domain.action('editGroup');
	    var delGroup = domain.action('delGroup');
	    var delGroupMember = domain.action('delGroupMember');
	    var navNameToIndex = {
	        '基本信息': 0,
	        '成员': 1
	    };
	    var status = {
	        VIEW : 'view',
	        EDIT  : 'edit'
	    };
	    self.page = __page;
	    self.app = __app;
	    self.viewModel={};
	    self.status = {};
	    self.init = function(){
	        self.currentStatus = status.VIEW;
	        self.members = {};
	        self.nav = 0;
	        self.viewModel.mode = 'view';
	        self.status = {};
	        self.status['contact'] = 'contact';
	    };
	    self.init();
	    function onLoadAllGroupMediaUsers(data){
	        self.parent.panel.status = 'add_m';
	        self.parent.mediaUsers = data.users;
	        self.parent.tags['add-group-member'].init();
	        self.parent.update();
	    }
	    function onDelGroupMember(data){
	        if(!data.success){
	            alert('删除失败')
	        }
	        data.deprecateMembers.forEach(function(member){
	            var members = self.parent.groupMembers.map(function(pMember){
	                return pMember._id
	            });
	            var index = members.indexOf(member._id);
	            if(index >= 0){
	                return self.parent.groupMembers.splice(index, 1);
	            }
	        });
	        self.currentStatus = status.VIEW;
	        self.members = {};
	        self.parent.update();
	    }
	    function onDelGroup(data){
	        self.parent.groups.forEach(function(group, index){
	            if(group._id === self.parent.group._id){
	                self.parent.groups.splice(index, 1);
	            }
	        });
	        self.parent.panel.start();
	        self.parent.update();
	    }
	    function onEditGroup(data){
	        if(data.success){
	            self.parent.group.name = data.group.name;
	            self.parent.groups.forEach(function(group){
	                if(group._id === data.group._id){
	                    group.name = data.group.name;
	                }
	            })
	            self.parent.panel.view();
	            self.parent.update();
	        }
	    }
	    this.on('mount', function(){
	        delGroup.onDone(onDelGroup);
	        delGroupMember.onDone(onDelGroupMember);
	        editGroup.onDone(onEditGroup);
	        loadAllGroupMediaUsers.onDone(onLoadAllGroupMediaUsers);
	    });
	    this.on('unmount', function(){
	        delGroup.offDone(onDelGroup);
	        delGroupMember.offDone(onDelGroupMember);
	        editGroup.offDone(onEditGroup);
	        loadAllGroupMediaUsers.offDone(onLoadAllGroupMediaUsers);
	    });
	    this.selectContact = function(e) {
	        if(self.status['contact']){
	            delete self.status['contact']
	            return;
	        }
	        self.status['contact'] = 'contact';
	    }.bind(this);
	    this.selectGroup = function(e) {
	        if(self.status['group']){
	            delete self.status['group']
	            return;
	        }
	        self.status['group'] = 'group';
	    }.bind(this);
	    this.clickNav = function(e) {
	        self.nav = navNameToIndex[e.target.innerText];
	    }.bind(this);
	    this.addMember = function(e) {
	        var medias = self.parent.group.medias;
	        var groupId = self.parent.group._id;
	        loadAllGroupMediaUsers.execute({medias: medias, groupId: groupId});
	    }.bind(this);
	    this.delGroup = function(e) {
	        delGroup.execute({groupId: self.parent.group._id});
	    }.bind(this);
	    this.editMember = function(e) {

	        self.currentStatus = status.EDIT;
	    }.bind(this);
	    this.delMember = function(e) {
	        if(!Object.keys(self.members).length){
	            return;
	        }
	        [].forEach.call(document.querySelectorAll('ul.user_list >li'), function(i){
	            i.removeChild(i.childNodes[i.childNodes.length-1])
	        });
	        delGroupMember.execute({groupId: self.parent.group._id, mids: JSON.stringify(Object.keys(self.members))});
	    }.bind(this);
	    this.submitGroupName = function(e) {
	        var groupName = self.groupName.value.trim();
	        if(groupName === ''){
	            alert('请输入名称')
	            return;
	        }
	        editGroup.execute({
	            id: self.parent.group._id,
	            name: groupName
	        });
	    }.bind(this);
	    this.cancelDelMember = function(e) {
	        self.members = {};
	        [].forEach.call(document.querySelectorAll('ul.user_list >li >div.select'), function(i){
	            i.parentNode.removeChild(i);
	        });
	        self.currentStatus = status.VIEW;
	    }.bind(this);
	    this.checkGroupName = function(e) {
	        var groupName = self.groupName.value;
	        if(groupName.trim() === ''){
	            e.target.parentNode.classList.add('has-error');
	            e.target.focus();
	        }
	        else{
	            e.target.parentNode.classList.remove('has-error');
	        }
	    }.bind(this);
	    this.editGroupName = function(e) {
	        self.viewModel.mode = 'edit';
	        self.groupName.focus();
	    }.bind(this);
	    this.selectMember = function(e) {
	        if(self.currentStatus != status.EDIT){
	            return;
	        }
	        var target = e.currentTarget;
	        var remark = target.getAttribute('remark');
	        var mid = target.getAttribute('mid');
	        toggle(target);
	        self.update();
	        function toggle(target){
	            if(self.members[mid]){
	                cancel(target);
	                delete self.members[mid];
	            }else{
	                self.members[mid] = remark;
	                select(target);
	            }
	        }
	        function select(el){
	            var maskEl = document.createElement('div');
	            maskEl.classList.add('select');
	            var iconEl = document.createElement('div');
	            iconEl.classList.add('glyphicon');
	            iconEl.classList.add('glyphicon-ok');
	            maskEl.appendChild(iconEl);
	            el.appendChild(maskEl);
	        }
	        function cancel(el){
	            el.removeChild(el.childNodes[el.childNodes.length-1])
	        }
	    }.bind(this);

	});}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * SPA definition which is the single entry of our mobile site
	 */
	var jquery = __webpack_require__(4);
	jquery = __webpack_require__(6);
	util = __webpack_require__(7);
	var page = __webpack_require__(8);
	///*
	// * import global variables
	// */
	riot = __webpack_require__(1);
	nest = __webpack_require__(9);
	$ = jQuery = jquery;
	__webpack_require__(10);
	domain = __webpack_require__(11);
	__webpack_require__(24);
	__webpack_require__(25);

	/*
	* wechat js config
	*/
	//var jsConfig = __page.jc;
	//if(jsConfig){
	//  wx.config(jsConfig);
	//  wx.error(function(res){
	//    console.log(res);
	//  });
	//}
	//else{
	//  console.error('no js config found');
	//}
	////
	//var _czc = _czc || [];
	//_czc.push(["_setAccount", "1254786218"]);

	var agent = {
	  init: function(){return this;}
	};


	//init agent window
	(function($){
	  //ajax event handlers
	  function onStart(event) {
	    //lock window handler
	    util.forbidOperation();
	  }
	  function onComplete(event, xhr, settings) {
	    //unlock window handler
	    util.removeforbidOperation();
	  }
	  //ajax lock chain
	  $(document).ajaxStart(onStart).ajaxComplete(onComplete);

	  //jqlazyload.init($);

	  //$("img").lazyload({ threshold : 200 ,effect:"fadeIn"});

	  //util.setImageHeight($);

	  $(window).resize(function(){
	    //util.setImageHeight($);
	  });

	  $(".img_home").click(function(){
	      $(".home_gy").removeClass("home_gy_set1");
	      $(".home_gy").addClass("home_gy_set");
	  });
	  $(".home_close").click(function(){
	      $(".home_gy").removeClass("home_gy_set");
	      $(".home_gy").addClass("home_gy_set1");
	  });

	  window.newActivity = {};
	  window.revokedActivity = {};
	  riot.observable(window.newActivity);
	  riot.observable(window.revokedActivity);
	})(jquery);

	module.exports = agent;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v2.1.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
	!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
	},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
	},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"=="function"&&__webpack_require__(5).cmd&&!(__WEBPACK_AMD_DEFINE_RESULT__ = function(a,b,c){c.exports=n}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});
	//# sourceMappingURL=jquery.min.map

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery Cookie Plugin v1.3.1
	 * https://github.com/carhartl/jquery-cookie
	 *
	 * Copyright 2013 Klaus Hartl
	 * Released under the MIT license
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
		var jQuery = __webpack_require__(4);

		(function ($, document, undefined) {

			var pluses = /\+/g;

			function raw(s) {
				return s;
			}

			function decoded(s) {
				return unRfc2068(decodeURIComponent(s.replace(pluses, ' ')));
			}

			function unRfc2068(value) {
				if (value.indexOf('"') === 0) {
					// This is a quoted cookie as according to RFC2068, unescape
					value = value.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
				}
				return value;
			}

			function fromJSON(value) {
				return config.json ? JSON.parse(value) : value;
			}

			var config = $.cookie = function (key, value, options) {

				// write
				if (value !== undefined) {
					options = $.extend({}, config.defaults, options);

					if (value === null) {
						options.expires = -1;
					}

					if (typeof options.expires === 'number') {
						var days = options.expires, t = options.expires = new Date();
						t.setDate(t.getDate() + days);
					}

					value = config.json ? JSON.stringify(value) : String(value);

					return (document.cookie = [
						encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
						options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
						options.path    ? '; path=' + options.path : '',
						options.domain  ? '; domain=' + options.domain : '',
						options.secure  ? '; secure' : ''
					].join(''));
				}

				// read
				var decode = config.raw ? raw : decoded;
				var cookies = document.cookie.split('; ');
				var result = key ? null : {};
				for (var i = 0, l = cookies.length; i < l; i++) {
					var parts = cookies[i].split('=');
					var name = decode(parts.shift());
					var cookie = decode(parts.join('='));

					if (key && key === name) {
						result = fromJSON(cookie);
						break;
					}

					if (!key) {
						result[name] = fromJSON(cookie);
					}
				}

				return result;
			};

			config.defaults = {};

			$.removeCookie = function (key, options) {
				if ($.cookie(key) !== null) {
					$.cookie(key, null, options);
					return true;
				}
				return false;
			};

		})(jQuery, document);

		module.exports = jQuery;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//end define

/***/ },
/* 7 */
/***/ function(module, exports) {

	var util = {
	    date: {
	        current: function(){
	            return new Date()
	        },
	        format: function(date, fmt){
	            var o = {
	                "M+" : date.getMonth()+1,
	                "d+" : date.getDate(),
	                "h+" : date.getHours(),
	                "m+" : date.getMinutes(),
	                "s+" : date.getSeconds(),
	                "q+" : Math.floor((date.getMonth()+3)/3),
	                "S"  : date.getMilliseconds()
	            };
	            if(/(y+)/.test(fmt))
	                fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
	            for(var k in o)
	                if(new RegExp("("+ k +")").test(fmt))
	                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
	            return fmt;
	        },
	        today: function(){
	            var t = new Date();
	            t.setHours(0);
	            t.setMinutes(0);
	            t.setSeconds(0);
	            return t;
	        },
	        isYesterday: function(date){
	            return date.toDateString() === util.date.yesterday().toDateString();
	        },
	        yesterday: function(){
	            var t = new Date();
	            t.setDate(t.getDate()-1);
	            t.setHours(0);
	            t.setMinutes(0);
	            t.setSeconds(0);
	            return t;
	        },
	        isTheDayBeforeYesterday: function(date){
	            return date.toDateString() === util.date.addDay(new Date(), -2).toDateString();
	        },
	        addDay: function(date, count){
	            var t = new Date();
	            t.setFullYear(date.getFullYear());
	            t.setMonth(date.getMonth());
	            t.setDate(date.getDate() + count);
	            t.setHours(0);
	            t.setMinutes(0);
	            t.setSeconds(0);
	            return t;
	        }
	    },
	    arr: {
	        rest: function(full, part){
	            return full.filter(function(f){
	                if(part.indexOf(f)<0){
	                    return f;
	                }
	            })
	        }
	    },
	    range: function(count){
	        var a = [];
	        for(var i=0; i<count; i++){
	            a.push(i);
	        }
	        return a;
	    },
	    deepClone: function(o, flag){
	        var o2 = null;
	        flag && (o2 = {}) || (o2 = []);
	        for(var p in o){
	            if(typeof o[p] === 'function'){
	                return;
	            }
	            if(typeof o[p] === 'object'){
	                if(!Array.isArray(o[p])){
	                    o[p] = util.deepClone(o[p]);
	                }else{
	                    o[p]=o[p].map(function(i){
	                        util.deepClone(i, true)
	                    });
	                }
	            }
	            o2[p] = o[p];
	        }
	        return o2;
	    },
	    in: function(arr, el){
	        return arr.indexOf(el) >=0
	    },
	    assign: function(){
	        var objs = [].slice.apply(arguments);
	        return objs.reduceRight(function(prev, curr){
	            return util.mixin(curr, prev);
	        }, undefined)
	    },
	    mixin: function(t, s){
	        if(typeof s === 'object'){
	            if(!Array.isArray(s)){
	                for(var p in s){
	                    t[p] = s[p]
	                }
	                return t;
	            }
	            s.map(function(i, index){ util.mixin(t[index], s[index])});
	        }
	        return t;
	    },
	    extend: function(target, source){
	        for(var p in source){
	            target[p] = source[p];
	        }
	        return target;
	    },
	    toObjectFromRiot: function(tagInstance){
	        var o = {};
	        for(var p in tagInstance) {
	            if (tagInstance.hasOwnProperty(p) && typeof tagInstance[p] != 'function') {
	                if(!util.in(['parent', 'root', 'opts', 'tags', 'hidden'], p)){
	                    //TODO need deep clone
	                    o[p] = tagInstance[p];
	                }
	            }
	        }
	        return o;
	    },
	    htmlParser: {
	        parse: function(str){
	            return str.replace(/<br>/g,'\n');
	        },
	        unparse: function(str){
	            return str.replace(/\\n/g,'<br>');
	        }
	    },
	    formatDateForNote: function(date){
	        var d_days;
	        var timeNow = parseInt(new Date().getTime()/1000);
	        var time = parseInt(date.getTime()/1000);
	        var d;
	        d = timeNow - time;
	        d_days = parseInt(d/86400);
	        if(util.date.isTheDayBeforeYesterday(date)){
	            return '前天';
	        }
	        else if(util.date.isYesterday(date)){
	            return '昨天';
	        }else if(d_days===0){
	            return '今天';
	        }
	        else if(d_days>2 && d_days<=4){
	            return d_days+"天前";
	        }
	        else{
	            var s = new Date(time*1000);
	            return (s.getMonth()+1)+"月"+s.getDate()+"日";
	        }
	    },
	    formatDateForComments: function(date){
	        var d_minutes,d_hours,d_days;
	        var timeNow = parseInt(new Date().getTime()/1000);
	        var time = parseInt(date.getTime()/1000);
	        var d;
	        d = timeNow - time;
	        d_days = parseInt(d/86400);
	        d_hours = parseInt(d/3600);
	        d_minutes = parseInt(d/60);
	        if(d_days>0 && d_days<4){
	            return d_days+"天前";
	        }else if(d_days<=0 && d_hours>0){
	            return d_hours+"小时前";
	        }else if(d_hours<=0 && d_minutes>=1){
	            return d_minutes+"分钟前";
	        }else if(d_minutes<=1){
	            return '刚刚';
	        }
	        else{
	            var s = new Date(time*1000);
	            return (s.getMonth()+1)+"月"+s.getDate()+"日";
	        }
	    },
	    getCookie: function (key) {
	        /*获取cookie参数*/
	        var getCookie = document.cookie.replace(/[ ]/g, "");  //获取cookie，并且将获得的cookie格式化，去掉空格字符
	        var arrCookie = getCookie.split(";")  //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
	        var tips;  //声明变量tips
	        for (var i = 0; i < arrCookie.length; i++) {   //使用for循环查找cookie中的tips变量
	            var arr = arrCookie[i].split("=");   //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
	            if (key == arr[0]) {  //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
	                tips = arr[1];   //将cookie的值赋给变量tips
	                break;   //终止for循环遍历
	            }
	        }
	        return tips;
	    },
	    forbidOperation:function(){
	        var objDiv = $("<div/>");
	        var winheight = $(window).height();
	        var bodyheight = $("body").height();
	        objDiv.addClass("forbidShadow");
	        var setHeight = winheight > bodyheight ? winheight : bodyheight;
	        objDiv.css({position:"absolute",top:"0px",left:"0px;",height:setHeight+"px",background:"#000",width:"100%",opacity:"0"}).css("z-index","999");
	        $("body").append(objDiv);
	    },
	    removeforbidOperation:function(){
	        if($(".forbidShadow")){
	            $(".forbidShadow").remove();
	        }

	    },
	    widget: {
	        confirm: function(opts){
	            window.app.trigger('confirm', {title: opts.title, content: opts.content})
	                .one('confirmOk', function(){
	                    app.off('confirmOk');
	                    app.off('confirmCancel');
	                    opts.callback();
	                })
	                .one('confirmCancel', function(){
	                    app.off('confirmOk');
	                    app.off('confirmCancel');
	                });
	        },
	        showImg: function(opts){
	            window.app.trigger('showImg', opts);
	        },
	        alert: function(opts){
	            window.app.trigger('alert', opts);
	        },
	        validatify: function(arr){
	            if(!Array.isArray(arr)){
	                throw new Error('validatify expected to be a Array.');
	            }
	            var api = {
	                meta: {}
	            };
	            api.addToSet = function(o){
	                if(!(o && o.hasOwnProperty('success'))){
	                    throw new Error('expected a success flag')
	                }
	                if(!(o && o.field)){
	                    throw new Error('expected a field')
	                }
	                if(!(o && o.desc)){
	                    throw new Error('expected a desc')
	                }
	                if(!(o && o.key)){
	                    throw new Error('expected a key')
	                }
	                if(this.meta[o.key]){
	                    return;
	                }
	                this.meta[o.key] = delete o['key'] && o;
	            };
	            api.pass = function(key){
	                this.meta[key] && delete this.meta[key];
	            };
	            api.raw = function(){
	                var me = this;
	                return Object.keys(me.meta).map(function(k){
	                    return me.meta[k];
	                })
	            };
	            api.allOk = function(){
	                return Object.keys(this.meta).length <=0;
	            };
	            api.notOk = function(k){
	                return this.meta[k];
	            };
	            api.clear = function(){
	                this.meta = {};
	                return this;
	            };
	            util.mixin(arr, api);
	            return arr;
	        }
	    },
	    /**
	     * generate random string
	     * @param num //limit random string length
	     * **/
	    generateRandomString: function(num){
	        var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	        var res = "";
	        for (var i = 0; i < num; i++) {
	            var id = Math.floor(Math.random() * 62);
	            res += chars[id];
	        }
	        return res;
	    },

	    /**
	     *upload img file to server
	     * @param file
	     * @param callback
	     */
	    uploadImgFile: function(file, callback){
	        if(file.size > 2*1024*1024){
	            alert('图片大小不能超过2M');
	            return;
	        }
	        var formData = new FormData();
	        formData.append('file', file);
	        $.ajax({
	            url: __app.settings.api.url + '/file/upload',
	            type: 'POST',
	            data: formData,
	            processData: false,
	            contentType: false,
	            success: function (res) {
	                var imgUrl = __app.settings.api.url + '/file?media_id=' + res.media_id;
	                callback(null, imgUrl);
	            },
	            error: function (res) {
	                callback(res, null);
	            }
	        });
	    }
	};
	if(!window._){
	    window._ = util;
	}

	module.exports = util;

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * SPA definition which is the single entry of our mobile site
	 */
	var page = __page || {};

	var Holder = function (state) {
	    this.state = state;
	};

	Holder.prototype.getUrl = function(){
	    var hash = window.location.hash || '';
	    return this.state.url + hash;
	};

	Holder.prototype.getBaseUrl = function(){
	    return this.state.baseUrl;
	};

	Holder.prototype.setTitle = function(title){
	    this.state.title = title;
	    document && (document.title = title);
	};

	Holder.prototype.saveTop = function(top){
	    this.state.top = top;
	    document && (document.top = top);
	};

	Holder.prototype.getTop = function(){
	    return this.state.top;
	};

	Holder.prototype.getUser = function(){
	    return this.state.user;
	};

	Holder.prototype.getUser = function(){
	    return this.state.user;
	};

	__page.holder = function () {
	    if (!__page._holder) {
	        __page._holder = new Holder(__page);
	    }
	    return __page._holder;
	};

	module.exports = __page.holder();

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * nest is library to help u to build a mvp pattern spa
	 */
	var riot = __webpack_require__(1);
	var $ = __webpack_require__(4);
	var util = __webpack_require__(7);
	var _default_model = {
	    name: 'thing',
	    fetched: false,
	    idAttribute: '_id',
	    url: '/thing/'

	};

	var modelize = function(obj, options){
	    /*
	     * make it observable
	     */
	    riot.observable(obj);

	    /*
	     * add model behaviors
	     */
	    obj._m = util.extend({}, _default_model);//copy defaults
	    obj._m = util.extend(obj._m, options);//set options

	    var _m = obj._m;
	    obj.fetched = function(v){
	        return typeof v === 'undefined' ? _m.fetched : _m.fetched = v;
	    };

	    obj.has = function(attr) {
	        return this.get(attr) != null;
	    },
	    obj.isNew = function() {
	        return !this.has(_m.idAttribute);
	    };
	    obj.toObject = function() {
	        var obj = {};
	        for(var n in this){
	            if(typeof this[n] != 'function'){
	                obj[n] = this[n];
	            }
	        }
	        return obj;
	    };
	    obj.fetch = function(id, o){
	        if(typeof o == 'undefined'){
	            if(typeof id == 'object'){
	                o = id;
	                id = null;
	            }
	        }

	        var _o = _m;
	        o && (_o = util.extend({}, _m)) && util.extend(_o, o);
	        id || (id = this[_m.idAttribute]);

	        if(!id){
	            console.error('fail to fetch: no id');
	            return false;
	        }

	        var apiUrl = _o.url + '_' +id;
	        var jqxhr = $.ajax({
	            type:  _o.method || 'GET',
	            url:   apiUrl
	        });

	        jqxhr
	            .done(function(data, textStatus, jqXHR ){
	                if(data.status){
	                    obj.trigger('fetch', data.result, o);
	                }
	                else{
	                    obj.trigger('fetch-error', data, o);
	                }
	            })
	            .fail(function(jqXHR, textStatus, errorThrown){
	                obj.trigger('error', errorThrown, o);
	            })
	            .always(function(){
	                //none
	            });
	        return jqxhr;
	    };

	    obj.append = function(id, o){
	        if(typeof o == 'undefined'){
	            if(typeof id == 'object'){
	                o = id;
	                id = null;
	            }
	        }

	        var _o = _m;
	        o && (_o = util.extend({}, _m)) && util.extend(_o, o);
	        id || (id = this[_m.idAttribute]);

	        if(!id){
	            console.error('fail to append: no id');
	            return false;
	        }

	        var apiUrl = _o.url + '_' +id;
	        var jqxhr = $.ajax({
	            type:  _o.method || 'GET',
	            url:   apiUrl
	        });

	        jqxhr
	            .done(function(data, textStatus, jqXHR ){
	                if(data.status){
	                    obj.trigger('append', data.result, o);
	                }
	                else{
	                    obj.trigger('append-error', data, o);
	                }
	            })
	            .fail(function(jqXHR, textStatus, errorThrown){
	                obj.trigger('error', errorThrown, o);
	            })
	            .always(function(){
	                //none
	            });
	        return jqxhr;
	    };

	    var getQueryString = function(query){
	        var params = [];
	        for(var name in query){
	            params.push(name + '=' + query[name]);
	        }
	        return params.join('&');
	    };
	    obj.save = function(attributes, o){
	        var _o = _m;
	        o && (_o = util.extend({}, _m)) && util.extend(_o, o);
	        var method = this.isNew() ? 'POST' : 'PUT';
	        var apiUrl = this.isNew() ? _o.url : _o.url + "_" + this[_m.idAttribute];
	        var data = this.toObject();
	        var queryString = getQueryString(data.query||{});
	        queryString!='' && (apiUrl+='?'+queryString);
	        var jqxhr = $.ajax({
	            type: method,
	            url:   apiUrl,
	            data: data
	        });

	        jqxhr
	            .done(function(data, textStatus, jqXHR ){
	                if(data.status){
	                    obj.fetched(true);
	                    obj.trigger('save', data.result, o);
	                }
	                else{
	                    obj.trigger('save-error', data, o);
	                }
	            })
	            .fail(function(jqXHR, textStatus, errorThrown ){
	                obj.trigger('error', errorThrown, o);
	            })
	            .always(function(){
	                //none
	            });
	        return jqxhr;
	    };

	    obj.get = function(name){
	        return this[name];
	    };

	    obj.set = function(name, value, o){
	        if(name == 'myobj' && typeof value=="object"){
	            util.extend(this,value);
	        }
	        else if(name == 'randomNotePic' && typeof value=="object"){
	            util.extend(this,value);
	        }
	        else if(value=="object"){
	            this[name] = value;
	        }
	        else{
	            var oldValue = this[name];
	            this[name] = value;
	            if(o && o.silent){

	            }
	            else{
	                this.trigger('change:' + name, this, value, oldValue);
	                this.trigger('change', this);
	            }
	        }
	    };
	    return obj;
	};


	var _default_collection = {
	    name: 'collection',
	    url: '/thing/filter'
	};

	var collectize = function(col, options){
	    /*
	     * make it observable
	     */
	    riot.observable(col);

	    /*
	     * add model behaviors
	     */
	    col._m = util.extend({}, _default_collection);//copy defaults
	    col._m = util.extend(col._m, options);//set options

	    var _m = col._m;

	    col.fetched = function(v){
	        return typeof v === 'undefined' ? _m.fetched : _m.fetched = v;
	    };

	    col.fetch = function(o){
	        var _o = _m;
	        o && (_o = util.extend({}, _m)) && util.extend(_o, o);

	        var filter = _m.filter || {};
	        var apiUrl = _o.url;
	        var jqxhr = $.ajax({
	            type:  _o.method || 'POST',
	            url:   apiUrl,
	            data:  {filter: filter}
	        });

	        jqxhr
	            .done(function(data, textStatus, jqXHR ){
	                if(data.status){
	                    col.items = data.result;
	                    col.fetched(true);
	                    col.trigger('fetch', data.result, o);
	                }
	                else{
	                    col.trigger('fetch-error', data, o);
	                }
	            })
	            .fail(function(jqXHR, textStatus, errorThrown){
	                col.trigger('error', errorThrown, o);
	            })
	            .always(function(){
	                //none
	            });
	        return jqxhr;
	    };

	    col.append = function(o){
	        var _o = _m;
	        o && (_o = util.extend({}, _m)) && util.extend(_o, o);

	        var filter = _m.filter || {};
	        var apiUrl = _o.url;
	        var jqxhr = $.ajax({
	            type:  _o.method || 'POST',
	            url:   apiUrl,
	            data:  {filter: filter}
	        });
	        jqxhr
	            .done(function(data, textStatus, jqXHR ){
	                if(data.status){
	                    col.items = data.result;
	                    col.fetched(true);
	                    col.trigger('append', data.result, o);
	                }
	                else{
	                    col.trigger('append-error', data, o);
	                }
	            })
	            .fail(function(jqXHR, textStatus, errorThrown){
	                col.trigger('error', errorThrown, o);
	            })
	            .always(function(){
	                //none
	            });
	        return jqxhr;
	    };
	    return col;
	};

	/**
	 * events:
	 * show
	 * open
	 * close
	 * @param tag
	 * @param opts
	 * @returns {*}
	 */
	var presentize = function(tag, opts){
	    tag.hidden = true;
	    tag.ready = false;
	    tag.mask = false;

	    var setShow = function(cmd){
	        tag.hidden = !cmd;
	        tag.mask = !cmd;
	        tag.update({hidden: tag.hidden});
	    };

	    tag.on('show', function(cmd){
	        setShow(cmd);
	    });

	    var setReady = function(cmd){
	        tag.ready = cmd;
	        tag.update({ready: tag.ready});
	    };

	    tag.on('ready', function(cmd){
	        setReady(cmd);
	    });

	    tag.on('refresh', function(){
	        console.info('start refreshing');
	    });

	    return tag;
	};

	var nest = {

	    modelable: function(obj, options){
	        return modelize(obj, options);
	    },

	    collectable: function(obj, options){
	        return collectize(obj, options);
	    },

	    presentable: function(tag, options){
	        return presentize(tag, options);
	    },

	    viewable: function(options){
	        var view = util.extend({}, options);

	        view.init = function(ctx){
	            this.mount(ctx);

	            if(!this.tag){
	                throw new Error('tag is not set');
	            }
	            this.tag.on('view-route-to', function(){
	                view.parent.trigger('view-route-to', view);
	            });
	            this.tag.on('view-route-back', function(){
	                view.parent.trigger('view-route-back', view);
	            });
	            this.tag.on('model-changed', function(action, modelName, modelId){
	                view.parent.trigger('app-changed', action, modelName, modelId);
	            });
	        };

	        view.setParent = function(p){
	            this.parent = p;
	        };

	        /**
	         * The method is invoked automatically when leaving current view
	         * but not closing it yet.
	         * Target view will do the final view switching.
	         * @param from current view
	         * @param to target view
	         */
	        view.leave = function(from, to){
	            from.tag.trigger('leave', to.tag);
	        };

	        /**
	         * The method is invoked automatically when entering target view
	         * but not opening it yet.
	         * Target view will do the final view switching.
	         * @param from current view
	         * @param to target view
	         */
	        view.enter = function(from, to){
	            to.tag.trigger('enter', from && from.tag, from && from.context);
	        };

	        /**
	         * The method is invoked automatically when current view is equal to target view.
	         */
	        view.reenter = function(){
	            this.tag.trigger('reenter', this.context);
	        };

	        view.open = function(){
	            this.tag.trigger('open');
	        };

	        view.close = function(){
	            this.tag.trigger('close');
	        };

	        view.show = function(cmd){
	            this.tag.trigger('show', cmd);
	        };

	        view.equalRoute = function(targetView){
	            var currentRoute = this.context && this.context.req.query.route;
	            var targetRoute = targetView && targetView.context.req.query.route;
	            return currentRoute = currentRoute;
	        };
	        return view;
	    },

	    emptyFn: function(){}
	};
	module.exports = nest;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	$.fn.simslider = function(opts){
		var $banner = this;
		var count = this.find('>ul>li').length;
		var currentindex = 0;
		var defaults = {
			docs:true,
			docscolor:"white"
		};
		var options = $.extend(defaults,opts);
		this.css({
			width:"100%"
		});
		this.find('>ul').css({
			width:count*100+"%",
			position:"relative",
			overflow:"hidden"
		});
		this.find('>ul>li').css({
			width:parseFloat(100/count).toFixed(6)+"%"
		});
		setInterval(slidepic,5000);
		function slidepic(){
			if(currentindex>=(count-1)){
				$banner.find('>ul').css({
					left:0+"%"
				});
				currentindex = 0;
				if(options.docs){
					$banner.find('.bannerdocs').find('li').removeClass('docsihov');
					$banner.find('.bannerdocs').find('li:eq('+(currentindex)+')').addClass('docsihov');
				}
			}
			else{
				$banner.find('>ul').css({
					left:"-"+(currentindex+1)*100+"%"
				});
				if(options.docs){
					$banner.find('.bannerdocs').find('li').removeClass('docsihov');
					$banner.find('.bannerdocs').find('li:eq('+(currentindex+1)+')').addClass('docsihov');
				}
				currentindex++;
			}
		}
		function slidepicOp(){
			if(currentindex<=0){
				$banner.find('>ul').css({
					left:"-"+(count-1)*100+"%"
				});
				currentindex = count-1;
				if(options.docs){
					$banner.find('.bannerdocs').find('li').removeClass('docsihov');
					$banner.find('.bannerdocs').find('li:eq('+(currentindex)+')').addClass('docsihov');
				}
			}
			else{
				$banner.find('>ul').css({
					left:"-"+(currentindex-1)*100+"%"
				});
				if(options.docs){
					$banner.find('.bannerdocs').find('li').removeClass('docsihov');
					$banner.find('.bannerdocs').find('li:eq('+(currentindex-1)+')').addClass('docsihov');
				}
				currentindex--;
			}
		}
		var startX,endPageX;
		function touch_start(event){
			//event.preventDefault();
			var event = event || window.event;
			startX = event.originalEvent.targetTouches[0].pageX;
		};
		function touch_move(event){
			event.preventDefault();
			var event = event || window.event;
			endPageX = event.originalEvent.targetTouches[0].pageX;
		}
		function touch_end(){
			if(startX-endPageX > 100){
				slidepic();
			}else if(endPageX-startX > 100){
				slidepicOp();
			}
		}
		$banner.on("touchstart",touch_start);
		$banner.on("touchmove",touch_move);
		$banner.on("touchend",touch_end);

		if(options.docs){
			var html = "<div class='bannerdocs' style='width:100%;position:absolute;bottom:6px'><ul style='width:"+((6+5)*count)+"px'>";
			for(var i=0;i<count;i++){
				if(i==0){
					html+="<li class='docsihov docsidef' style='display:block;width:6px;height:6px;border-radius:50em;margin-right:5px;'></li>";
					continue;
				}
				html+="<li class='docsidef' style='display:block;width:6px;height:6px;border-radius:50em;margin-right:5px;'></li>";
			}
			html+="</ul></div>";
			$banner.append(html);
		}
	}
	module.exports = null;




/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var domain = __webpack_require__(12);
	var actions = __webpack_require__(20);

	module.exports = domain;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var h2 = __webpack_require__(13);
	var domain = h2.domain();

	domain.restApi({
	    baseUrl: __app.settings.api.url
	});

	module.exports = domain;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var h2 = __webpack_require__(14);

	module.exports = h2;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var h2 = { version: 'WIP', settings: {} };

	var util = __webpack_require__(15);

	var error = __webpack_require__(16);
	util.extend(h2, error);

	var rest = __webpack_require__(17);
	util.extend(h2, rest);

	var ws = __webpack_require__(18);
	util.extend(h2, ws);

	var action = __webpack_require__(19);
	util.extend(h2, action);

	/**
	 * the single object which represents the state and logic of a whole application
	 * @constructor
	 */
	var Domain = function(){
	    this._actions = {};
	    this._restApiFactories = {};
	    this._wsApiFactories = {};
	};

	/**
	 * Get or create an action of domain.
	 * @param name action name which follows a action naming convention
	 * @returns {Action}
	 */
	Domain.prototype.action = function(name){
	    var action = this._actions[name];
	    return action ? action : (this._actions[name] = new h2.Action(this, name)) ;
	};

	/**
	 * Get all actions of domain.
	 * @returns {{Action}}
	 */
	Domain.prototype.actions = function(){
	    return this._actions;
	};

	Domain.prototype.restApi = function(factory, options){
	    var config = typeof factory === 'object' || typeof options === 'object';
	    var useDefault = typeof factory !== 'string';
	    var name = useDefault ? 'default' : factory;
	    var o = useDefault ? factory : options;

	    if(config){
	        var existed = !!this._restApiFactories[name];
	        !existed && (this._restApiFactories[name] = new h2.RestApiFactory(o));
	        existed && this._restApiFactories[name].options(o);
	    }

	    return this._restApiFactories[name];
	};

	Domain.prototype.wsApi = function(factory, options){
	    var config = typeof factory === 'object' || typeof options === 'object';
	    var useDefault = typeof factory !== 'string';
	    var name = useDefault ? 'default' : factory;
	    var o = useDefault ? factory : options;

	    //TODO: add WebSocket api factories
	    return this._wsApiFactories[name];
	};

	h2.domain = function(){
	    return new Domain();
	};

	module.exports = h2;


/***/ },
/* 15 */
/***/ function(module, exports) {

	var util = {};

	util.extend = function(obj, source) {
	    for (var prop in source) {obj[prop] = source[prop];}
	    return obj;
	};

	util.getArguments = function(args){return Array.prototype.slice.call(args, 0);};

	util.remove = function(array, item) {
	    var i = array.indexOf(item);
	    i > -1 && array.splice(i, 1);
	};

	var _ids = {};

	util.nextId = function(name){
	    if(!_ids[name]) _ids[name] = 1;
	    return _ids[name]++;
	};

	module.exports = util;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var h2 = {};

	var util = __webpack_require__(15);

	var _wrong_biz_code = 500;

	var ajaxStockErrorList = [
	    /*
	     * Reserve code (100 - 199) as fundamental errors, such as
	     *  network connection errors,
	     *  resource is not found,
	     *  request is timeout
	     *  request is aborted
	     */
	      {code: 100, msg: 'unknown error'}         //testStatus: null
	    , {code: 101, msg: 'ajax request timeout'}  //testStatus: timeout
	    , {code: 102, msg: 'ajax request abort'}    //testStatus: abort

	    /*
	     * Reserve code (200 - 299) as server side errors, such as
	     *  authentication errors,
	     *  request/response parsing errors,
	     *  server side runtime errors
	     */
	    , {code: 200, msg: 'server side error'}     //testStatus: error
	    , {code: 201, msg: 'ajax parser error'}     //testStatus: parsererror

	    /*
	     * Reserve code (>500) as custom business logic errors,
	     * so developers can define them by themselves, but uniqueness
	     * should be guaranteed.
	     */
	    , {code: 500, msg: 'wrong biz code, custom error code should be >500'}
	];


	var _initErrors = function(map, list){
	    for(var i=0; i<list.length; i++){
	        var e = list[i];
	        map[''+ e.code] = e;
	    }
	};

	var ajaxStockErrors = {};

	_initErrors(ajaxStockErrors, ajaxStockErrorList);

	var codes = {
	      'unknown': '100'
	    , 'error': '200'
	    , 'wrongcode': '' + _wrong_biz_code
	};

	var jqAjaxCodes = {
	      'timeout': '101'
	    , 'abort': '102'
	    , 'error': '200'
	    , 'parsererror': '201'
	};

	util.extend(codes, jqAjaxCodes);

	var ApiError = function(code, msg){
	    this.code = code;
	    this.msg = msg;
	};

	ApiError.prototype.toString = function(){
	    return 'code: ' + this.code + ', msg: ' + this.msg;
	};

	var ApiErrorFactory = {};

	ApiErrorFactory.codes = codes;

	ApiErrorFactory.ajaxError = function(textStatus, errorThrown){
	    var code = !textStatus || !codes[textStatus] ? codes.unknown : codes[textStatus];
	    var e = ajaxStockErrors[code];
	    return new ApiError(e.code, errorThrown || e.msg);
	};

	ApiErrorFactory.bizError = function(code, msg){
	    var error = new ApiError(code, msg);
	    if(code < _wrong_biz_code){
	        console.error('wrong biz error code: ' + JSON.stringify(error));
	    }
	    return error;
	};

	h2.ApiError = ApiError;
	h2.ApiErrorFactory = ApiErrorFactory;

	module.exports = h2;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var h2 = { version: 'WIP', settings: {} };

	var util = __webpack_require__(15);

	var ApiErrorFactory = __webpack_require__(16).ApiErrorFactory;

	var _ajax = $ && $.ajax || __webpack_require__(4);

	var _default_options = {dataType: 'json'};

	/**
	 * Restful API Factory
	 * @param method
	 * @constructor
	 */
	var RestApiFactory = function(options){
	    this._options = util.extend({}, _default_options);
	    this.options(options || {});
	};

	RestApiFactory.defaultOptions = _default_options;

	RestApiFactory.prototype.options = function(options){
	    util.extend(this._options, options);
	};

	var defineHtmlMethodSetter = function(p, method){
	    p[method] = function(url){
	        var restApi = new RestApi(this._options);
	        var o = restApi.o;
	        o.method = method;
	        o.url = (o.baseUrl || '') + url;
	        return restApi;
	    };
	};

	defineHtmlMethodSetter(RestApiFactory.prototype, 'get');
	defineHtmlMethodSetter(RestApiFactory.prototype, 'post');
	defineHtmlMethodSetter(RestApiFactory.prototype, 'put');
	defineHtmlMethodSetter(RestApiFactory.prototype, 'delete');

	var RestApi = function(options){
	    this.o = util.extend({}, options || {});
	};

	var registerListenerBinder = function(p, event){
	    p[event] = function(listener){
	        this.o[event] = listener;
	        return this;
	    };
	};

	RestApi.prototype.drive = function(action){
	    this.o.action = action;
	    return this;
	};

	registerListenerBinder(RestApi.prototype, 'done');
	registerListenerBinder(RestApi.prototype, 'fail');
	registerListenerBinder(RestApi.prototype, 'success');
	registerListenerBinder(RestApi.prototype, 'error');
	registerListenerBinder(RestApi.prototype, 'always');

	RestApi.prototype.onDone = function(data, textStatus, jqXHR){
	    if(data && data.errcode){
	        var e = ApiErrorFactory.bizError(data.errcode, data.errmsg);
	        this.o.fail(e);
	    }
	    else{
	        if(data && typeof data.result !== 'undefined'){
	            this.o.done(data.result);
	        }
	        else{
	            this.o.done(data);
	        }
	    }
	};

	RestApi.prototype.onFail = function(jqXHR, textStatus, errorThrown){
	    var e = ApiErrorFactory.ajaxError(textStatus, errorThrown);
	    this.o.fail(e);
	};

	RestApi.prototype.send = function(data){
	    var jqXHR = _ajax({
	        type: this.o.method,
	        url: this.o.url,
	        dataType: this.o.dataType,
	        data: data || null
	    });

	    if(this.o.action){
	        var action = this.o.action;
	        this.done(function(data){action.done(data);})
	            .fail(function(error){action.fail(error);});
	    }

	    if(this.o.done || this.o.fail){
	        jqXHR.done(this.onDone.bind(this));
	        jqXHR.fail(this.onFail.bind(this));
	    }
	    else{
	        this.o.success && jqXHR.done(this.o.success);
	        this.o.error && jqXHR.fail(this.o.error);
	    }

	    this.o.always && jqXHR.always(this.o.always);

	    return jqXHR;
	};

	h2.RestApi = RestApi;

	h2.RestApiFactory = RestApiFactory;

	module.exports = h2;


/***/ },
/* 18 */
/***/ function(module, exports) {

	var h2 = {};

	module.exports = h2;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var h2 = {};

	var util = __webpack_require__(15);

	var observableFn = __webpack_require__(1).observable;

	/**
	 * TODO:
	 * Append result array (arguments) to ['done'] array
	 * for example:
	 *   var doneArgs = ['done'];
	 *   var comingArgus = [{_id: 'h3j5', name: 'activity name'}, true];
	 *   Array.prototype.push.apply(doneArgs, comingArgs);
	 *   console.log(doneArgs);
	 *   //['done', {_id: 'h3j5', name: 'activity name'}, true]
	 */
	var triggerEvent = function(observable, event, args){
	    var triggerArgs = [event];
	    Array.prototype.push.apply(triggerArgs, args);
	    observable.trigger.apply(observable, triggerArgs);
	};

	var bindNameEventWithContext = function(context, observable, listeners, name){
	    var eventListeners = listeners[name];
	    var len = eventListeners.length;
	    var listener = null;
	    for(var i=0; i<len; i++){
	        listener = eventListeners[i];
	        observable.on(name, listener.bind(context));
	    }
	};

	/**
	 * TODO
	 */
	var ActionInvocation = function(action, inputs){
	    this.id = util.nextId(action.name());
	    this.action = action;
	    this.inputs = inputs;
	    this.outputs = null;
	    this.error = null;
	    this.executed = false;

	    var events = this._events = observableFn({});
	    var listeners = this.action._listeners;

	    bindNameEventWithContext(this, events, listeners, 'execute');
	    bindNameEventWithContext(this, events, listeners, 'unexecute');
	    bindNameEventWithContext(this, events, listeners, 'done');
	    bindNameEventWithContext(this, events, listeners, 'fail');
	    bindNameEventWithContext(this, events, listeners, 'always');
	};

	/**
	 * TODO
	 */
	ActionInvocation.prototype.execute = function(){
	    triggerEvent(this._events, 'execute', this.inputs);
	};

	/**
	 * TODO
	 */
	ActionInvocation.prototype.unexecute = function(){
	    triggerEvent(this._events, 'unexecute', this.inputs);
	};

	ActionInvocation.prototype.onDone = function(listener){
	    this._events.on('done', listener.bind(this));
	    return this;
	};

	ActionInvocation.prototype.onFail = function(listener){
	    this._events.on('fail', listener.bind(this));
	    return this;
	};

	ActionInvocation.prototype.onAlways = function(listener){
	    this._events.on('always', listener.bind(this));
	    return this;
	};

	/**
	 * Trigger 'done' event following 'always' event.
	 * This method is supposed to be called in action
	 * execute listener to trigger domain state-changed
	 * notification event (done).
	 */
	ActionInvocation.prototype.done = function(){
	    var results = util.getArguments(arguments);
	    this.outputs = results;
	    this.executed = true;
	    triggerEvent(this._events, 'done', results);
	    triggerEvent(this._events, 'always', results);
	};

	/**
	 * Trigger 'fail' event following 'always' event.
	 * This method is supposed to be called in action
	 * execute listener to trigger domain state-changed
	 * notification event (fail).
	 */
	ActionInvocation.prototype.fail = function(){
	    var errorResults = util.getArguments(arguments);
	    this.error = errorResults[0];
	    this.executed = true;
	    triggerEvent(this._events, 'fail', errorResults);
	    triggerEvent(this._events, 'always', errorResults);
	};

	var Action = function(domain, name){
	    this._domain = domain;
	    this._name = name;
	    this._events = observableFn({});
	    this._listeners = {
	        execute: [],
	        unexecute: [],
	        done: [],
	        fail: [],
	        always: []
	    };
	};

	Action.prototype.name = function(name){
	    if(name){
	        this._name = name;
	        return this;
	    }
	    else{
	        return this._name;
	    }
	};

	Action.prototype.onExecute = function(listener){
	    this._listeners.execute.push(listener);
	    return this;
	};

	Action.prototype.onUnexecute = function(listener){
	    this._listeners.unexecute.push(listener);
	    return this;
	};

	Action.prototype.onDone = function(listener){
	    this._listeners.done.push(listener);
	    return this;
	};

	Action.prototype.onFail = function(listener){
	    this._listeners.fail.push(listener);
	    return this;
	};

	Action.prototype.onAlways = function(listener){
	    this._listeners.always.push(listener);
	    return this;
	};

	Action.prototype.offDone = function(listener){
	    util.remove(this._listeners.done, listener);
	    return this;
	};

	Action.prototype.offFail = function(listener){
	    util.remove(this._listeners.fail, listener);
	    return this;
	};

	Action.prototype.offAlways = function(listener){
	    util.remove(this._listeners.always, listener);
	    return this;
	};

	/**
	 * Create and execute an ActionInvocation with given input arguments.
	 * @returns {ActionInvocation} the created and executed ActionInvocation object
	 */
	Action.prototype.execute = function(){
	    var invocation = new ActionInvocation(this, util.getArguments(arguments));
	    invocation.execute();
	    return invocation;
	};

	/**
	 * Create an ActionInvocation with given input arguments, then it can be execute.
	 * @returns {ActionInvocation} the created and executed ActionInvocation object
	 */
	Action.prototype.newInvocation = function(){
	    return new ActionInvocation(this, util.getArguments(arguments));
	};

	h2.Action = Action;

	h2.ActionInvocation = ActionInvocation;

	module.exports = h2;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var domain = __webpack_require__(12);

	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);

	module.exports = domain.actions();

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var domain = __webpack_require__(12);
	var apiFactory = domain.restApi();

	/**
	 * operate bot actions
	 */
	domain.action('startBot').onExecute(function(data){
	    apiFactory.post('/bot/start').drive(this).send(data);
	});
	domain.action('stopBot').onExecute(function(data){
	    apiFactory.get('/bot/stop/' + data.openid).drive(this).send();
	});
	domain.action('syncContacts').onExecute(function(data){
	    apiFactory.post('/bot/sync/contacts').drive(this).send(data);
	});
	domain.action('syncGroups').onExecute(function(data){
	    apiFactory.post('/bot/sync/groups').drive(this).send(data);
	});

	/**
	 * status actions
	 */
	domain.action('loadBotByMediaId').onExecute(function(data){
	    apiFactory.get('/bot/' + data.botId).drive(this).send();
	});

	/**
	 * tags actions
	 */
	domain.action('saveTagsById').onExecute(function(data){
	    apiFactory.post('/bot/tags/user/' + data.id).drive(this).send(data);
	});

	/**
	 * multiSend actions
	 */
	domain.action('broadcastTxt').onExecute(function(data){
	    apiFactory.post('/bot/broadcastTxt').drive(this).send(data);
	});

	domain.action('broadcastImg').onExecute(function(data){
	    apiFactory.post('/bot/broadcastImg').drive(this).send(data);
	});

	domain.action('loadBroadcastHistory').onExecute(function(id){
	    apiFactory.get('/bot/broadcastHistory?botId=' + id).drive(this).send();
	});

	/**
	 * Contacts actions
	 */
	domain.action('loadContacts').onExecute(function(id){
	    apiFactory.get('/bot/contacts?botId=' + id).drive(this).send();
	});

	/**
	 * Group actions
	 */
	domain.action('loadGroup').onExecute(function(data){
	    apiFactory.get('/bot/group?id=' + data.id).drive(this).send();
	});

	domain.action('editGroup').onExecute(function(data){
	    apiFactory.put('/bot/group/' + data.id).drive(this).send(data);
	});

	domain.action('delGroup').onExecute(function(data){
	    apiFactory.delete('/bot/group?id=' + data.groupId).drive(this).send(data);
	});

	domain.action('addGroup').onExecute(function(data){
	    apiFactory.post('/bot/group').drive(this).send(data);
	});

	domain.action('loadGroups').onExecute(function(data){
	    apiFactory.get('/bot/groups?tenantId=' + data.tenantId + '&operatorId=' + data.operatorId).drive(this).send();
	});

	domain.action('loadAllMyManageMedia').onExecute(function(data){
	    apiFactory.get('/bot/allMyMedia?tenantId=' + data.tenantId + '&operatorId=' + data.operatorId).drive(this).send();
	});

	domain.action('loadAllGroupMediaUsers').onExecute(function(data){
	    apiFactory.post('/bot/group/mediaUser').drive(this).send(data);
	});

	domain.action('addGroupMembers').onExecute(function(data){
	    apiFactory.post('/bot/group/members').drive(this).send(data);
	});

	domain.action('delGroupMember').onExecute(function(data){
	    apiFactory.delete('/bot/group/members?ids='+data.mids + '&groupId=' + data.groupId).drive(this).send();
	});

	module.exports = null;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var domain = __webpack_require__(12);
	var apiFactory = domain.restApi();

	domain.action('findTenants').onExecute(function(data){
	    apiFactory.post('/tenant/filter').drive(this).send(data);
	});

	domain.action('loadTenantById').onExecute(function(data){
	    apiFactory.get('/tenant/_' + data.id).drive(this).send();
	});

	domain.action('updateTenantById').onExecute(function(data){
	    apiFactory.put('/tenant/_' + data.id).drive(this).send(data);
	});

	domain.action('addTenantWechatSite').onExecute(function(data){
	    apiFactory.post('/tenant/add-wechatsite').drive(this).send(data);
	});

	domain.action('loadAllTenantWechatSite').onExecute(function(id){
	    apiFactory.get('/tenant/wechatsite/loadAll?tenant=' + id).drive(this).send();
	});
	domain.action('loadTenantWechatSite').onExecute(function(id){
	    apiFactory.get('/tenant/wechatsite/load?id=' + id).drive(this).send();
	});

	domain.action('updateTenantWechatSiteById').onExecute(function(data){
	    apiFactory.put('/tenant/wechatsite/_' + data.id).drive(this).send(data);
	});

	domain.action('findDistributorsCountByTenantId').onExecute(function(data){
	    apiFactory.get('/tenant/sd/distributors/count?tenant=' + data.tenant).drive(this).send();
	});

	domain.action('findCustomersCountByTenantId').onExecute(function(data){
	    apiFactory.get('/tenant/sd/customers/count?tenant=' + data.tenant).drive(this).send();
	});

	domain.action('findCustomersByTenantId').onExecute(function(data){
	    var querystring = Object.keys(data.filter).map(function(k){
	        return k + "=" + data.filter[k]
	    }).join("&");
	    apiFactory.get('/tenant/sd/customers?' + querystring).drive(this).send();
	});

	domain.action('checkout').onExecute(function(data){
	    apiFactory.post('/tenant/sd/distributors/checkout').drive(this).send(data);
	});

	domain.action('findDistributorsWithPendingPaymentByTenantId').onExecute(function(data){
	    var querystring = Object.keys(data.filter).map(function(k){
	        return k + "=" + data.filter[k]
	    }).join("&");
	    apiFactory.get('/tenant/sd/distributors/payment?' + querystring).drive(this).send();
	});

	domain.action('findDistributorsCountWithPendingPaymentByTenantId').onExecute(function(data){
	    apiFactory.get('/tenant/sd/distributors/payment/count?tenant=' + data.tenant).drive(this).send();
	});

	domain.action('findOrderRelatedDistributor').onExecute(function(data){
	    apiFactory.get('/tenant/sd/orders/distributor?distributor=' + data.distributor + '&status=' + data.status).drive(this).send();
	});

	domain.action('findDistributorsByTenantId').onExecute(function(data){
	    var querystring = Object.keys(data.filter).map(function(k){
	        return k + "=" + data.filter[k]
	    }).join("&");
	    apiFactory.get('/tenant/sd/distributors?' + querystring).drive(this).send();
	});

	domain.action('createOrder').onExecute(function(data){
	    apiFactory.post('/tenant/sd/order').drive(this).send(data);
	});

	domain.action('createCourse').onExecute(function(data){
	    apiFactory.post('/tenant/sd/course').drive(this).send(data);
	});

	domain.action('findCourses').onExecute(function(data){
	    apiFactory.post('/tenant/sd/courses').drive(this).send(data);
	});

	domain.action('loadCourseById').onExecute(function(data){
	    apiFactory.get('/tenant/sd/course/_' + data.id).drive(this).send(data);
	});

	domain.action('updateCourseById').onExecute(function(data){
	    apiFactory.put('/tenant/sd/course/_' + data.id).drive(this).send(data);
	});

	domain.action('createCatalog').onExecute(function(data){
	    apiFactory.post('/tenant/sd/catalog').drive(this).send(data);
	});

	domain.action('loadCatalogById').onExecute(function(data){
	    apiFactory.get('/tenant/sd/catalog/_' + data.id).drive(this).send();
	});

	domain.action('updateCatalogById').onExecute(function(data){
	    apiFactory.put('/tenant/sd/catalog/_' + data.id).drive(this).send(data);
	});

	domain.action('fetchSdQrByProductAndWechatSite').onExecute(function(data) {
	    apiFactory.post('/tenant/sd/catalog/poster').drive(this).send(data);
	});

	domain.action('findBespeaks').onExecute(function(data){
	    var querystring = Object.keys(data.filter).map(function(k){
	        return k + "=" + data.filter[k]
	    }).join("&");
	    apiFactory.get('/tenant/sd/bespeak?' + querystring).drive(this).send();
	});

	domain.action('updateBespeakById').onExecute(function(data){
	    apiFactory.put('/tenant/sd/bespeaks/_' + data.id).drive(this).send(data);
	});

	domain.action('findCatalogs').onExecute(function(data){
	    var querystring = Object.keys(data.filter).map(function(k){
	        return k + "=" + data.filter[k]
	    }).join("&");
	    apiFactory.get('/tenant/sd/catalog?' + querystring).drive(this).send();
	});

	domain.action('loadPowerActivities').onExecute(function(data){
	    apiFactory.get('/marketing/tenant/power/load?tenantId=' + data.tenantId).drive(this).send();
	});

	domain.action('loadPowerActivity').onExecute(function(data){
	    apiFactory.get('/marketing/tenant/power/loadById?id=' + data.id).drive(this).send();
	});

	domain.action('updatePowerActivity').onExecute(function(data){
	    apiFactory.post('/marketing/tenant/power/update').drive(this).send(data);
	});

	domain.action('addPowerActivity').onExecute(function(data){
	    apiFactory.post('/marketing/tenant/power/add').drive(this).send(data);
	});

	domain.action('findOrders').onExecute(function(data){
	    var querystring = Object.keys(data.filter).map(function(k){
	        return k + "=" + data.filter[k]
	    }).join("&");
	    apiFactory.get('/tenant/sd/orders?' + querystring).drive(this).send();
	});
	module.exports = null;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var domain = __webpack_require__(12);
	var apiFactory = domain.restApi();


	domain.action('findTenantAdlinks').onExecute(function(tenantId){
	    apiFactory.get('/adlink/tenant-' + tenantId).drive(this).send();
	});

	domain.action('findTenantRecontents').onExecute(function(tenantId){
	    apiFactory.get('/recontent/tenant-' + tenantId).drive(this).send();
	});

	domain.action('loadAdlink').onExecute(function(data){
	    apiFactory.get('/adlink/_' + data).drive(this).send();
	});

	domain.action('loadAndEditAdlink').onExecute(function(data){
	    apiFactory.get('/adlink/_' + data).drive(this).send();
	});

	domain.action('createAdlink').onExecute(function(data){
	    apiFactory.post('/adlink/').drive(this).send(data);
	});

	domain.action('updateAdlink').onExecute(function(data){
	    apiFactory.put('/adlink/_' + data._id).drive(this).send(data);
	});



	module.exports = null;

/***/ },
/* 24 */
/***/ function(module, exports) {

	/*!
	 * Bootstrap v3.3.5 (http://getbootstrap.com)
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under the MIT license
	 */
	if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
	d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! Summernote v0.7.3 | (c) 2013-2015 Alan Hong and other contributors | MIT license */
	!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(window.jQuery)}(function(a){"use strict";var b,c=function(){var b=function(a){return function(b){return a===b}},c=function(a,b){return a===b},d=function(a){return function(b,c){return b[a]===c[a]}},e=function(){return!0},f=function(){return!1},g=function(a){return function(){return!a.apply(a,arguments)}},h=function(a,b){return function(c){return a(c)&&b(c)}},i=function(a){return a},j=function(a,b){return function(){return a[b].apply(a,arguments)}},k=0,l=function(a){var b=++k+"";return a?a+b:b},m=function(b){var c=a(document);return{top:b.top+c.scrollTop(),left:b.left+c.scrollLeft(),width:b.right-b.left,height:b.bottom-b.top}},n=function(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[a[c]]=c);return b},o=function(a,b){return b=b||"",b+a.split(".").map(function(a){return a.substring(0,1).toUpperCase()+a.substring(1)}).join("")};return{eq:b,eq2:c,peq2:d,ok:e,fail:f,self:i,not:g,and:h,invoke:j,uniqueId:l,rect2bnd:m,invertObject:n,namespaceToCamel:o}}(),d=function(){var b=function(a){return a[0]},d=function(a){return a[a.length-1]},e=function(a){return a.slice(0,a.length-1)},f=function(a){return a.slice(1)},g=function(a,b){for(var c=0,d=a.length;d>c;c++){var e=a[c];if(b(e))return e}},h=function(a,b){for(var c=0,d=a.length;d>c;c++)if(!b(a[c]))return!1;return!0},i=function(b,c){return a.inArray(c,b)},j=function(a,b){return-1!==i(a,b)},k=function(a,b){return b=b||c.self,a.reduce(function(a,c){return a+b(c)},0)},l=function(a){for(var b=[],c=-1,d=a.length;++c<d;)b[c]=a[c];return b},m=function(a){return!a||!a.length},n=function(a,c){if(!a.length)return[];var e=f(a);return e.reduce(function(a,b){var e=d(a);return c(d(e),b)?e[e.length]=b:a[a.length]=[b],a},[[b(a)]])},o=function(a){for(var b=[],c=0,d=a.length;d>c;c++)a[c]&&b.push(a[c]);return b},p=function(a){for(var b=[],c=0,d=a.length;d>c;c++)j(b,a[c])||b.push(a[c]);return b},q=function(a,b){var c=i(a,b);return-1===c?null:a[c+1]},r=function(a,b){var c=i(a,b);return-1===c?null:a[c-1]};return{head:b,last:d,initial:e,tail:f,prev:r,next:q,find:g,contains:j,all:h,sum:k,from:l,isEmpty:m,clusterBy:n,compact:o,unique:p}}(),e="function"=="function"&&__webpack_require__(26),f=function(b){var c="Comic Sans MS"===b?"Courier New":"Comic Sans MS",d=a("<div>").css({position:"absolute",left:"-9999px",top:"-9999px",fontSize:"200px"}).text("mmmmmmmmmwwwwwww").appendTo(document.body),e=d.css("fontFamily",c).width(),f=d.css("fontFamily",b+","+c).width();return d.remove(),e!==f},g=navigator.userAgent,h=/MSIE|Trident/i.test(g);if(h){var i=/MSIE (\d+[.]\d+)/.exec(g);i&&(b=parseFloat(i[1])),i=/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(g),i&&(b=parseFloat(i[1]))}var j={isMac:navigator.appVersion.indexOf("Mac")>-1,isMSIE:h,isFF:/firefox/i.test(g),isWebkit:/webkit/i.test(g),isSafari:/safari/i.test(g),browserVersion:b,jqueryVersion:parseFloat(a.fn.jquery),isSupportAmd:e,hasCodeMirror:e?/*require.resolve*/(27):!!window.CodeMirror,isFontInstalled:f,isW3CRangeSupport:!!document.createRange},k=String.fromCharCode(160),l="\ufeff",m=function(){var b=function(b){return b&&a(b).hasClass("note-editable")},e=function(b){return b&&a(b).hasClass("note-control-sizing")},f=function(a){return a=a.toUpperCase(),function(b){return b&&b.nodeName.toUpperCase()===a}},g=function(a){return a&&3===a.nodeType},h=function(a){return a&&1===a.nodeType},i=function(a){return a&&/^BR|^IMG|^HR|^IFRAME|^BUTTON/.test(a.nodeName.toUpperCase())},n=function(a){return b(a)?!1:a&&/^DIV|^P|^LI|^H[1-7]/.test(a.nodeName.toUpperCase())},o=function(a){return a&&/^H[1-7]/.test(a.nodeName.toUpperCase())},p=f("PRE"),q=f("LI"),r=function(a){return n(a)&&!q(a)},s=f("TABLE"),t=function(a){return!(y(a)||u(a)||v(a)||n(a)||s(a)||x(a))},u=function(a){return a&&/^UL|^OL/.test(a.nodeName.toUpperCase())},v=f("HR"),w=function(a){return a&&/^TD|^TH/.test(a.nodeName.toUpperCase())},x=f("BLOCKQUOTE"),y=function(a){return w(a)||x(a)||b(a)},z=f("A"),A=function(a){return t(a)&&!!J(a,n)},B=function(a){return t(a)&&!J(a,n)},C=f("BODY"),D=function(a,b){return a.nextSibling===b||a.previousSibling===b},E=function(a,b){b=b||c.ok;var d=[];return a.previousSibling&&b(a.previousSibling)&&d.push(a.previousSibling),d.push(a),a.nextSibling&&b(a.nextSibling)&&d.push(a.nextSibling),d},F=j.isMSIE&&j.browserVersion<11?"&nbsp;":"<br>",G=function(a){return g(a)?a.nodeValue.length:a.childNodes.length},H=function(a){var b=G(a);return 0===b?!0:g(a)||1!==b||a.innerHTML!==F?d.all(a.childNodes,g)&&""===a.innerHTML?!0:!1:!0},I=function(a){i(a)||G(a)||(a.innerHTML=F)},J=function(a,c){for(;a;){if(c(a))return a;if(b(a))break;a=a.parentNode}return null},K=function(a,c){for(a=a.parentNode;a&&1===G(a);){if(c(a))return a;if(b(a))break;a=a.parentNode}return null},L=function(a,d){d=d||c.fail;var e=[];return J(a,function(a){return b(a)||e.push(a),d(a)}),e},M=function(a,b){var c=L(a);return d.last(c.filter(b))},N=function(b,c){for(var d=L(b),e=c;e;e=e.parentNode)if(a.inArray(e,d)>-1)return e;return null},O=function(a,b){b=b||c.fail;for(var d=[];a&&!b(a);)d.push(a),a=a.previousSibling;return d},P=function(a,b){b=b||c.fail;for(var d=[];a&&!b(a);)d.push(a),a=a.nextSibling;return d},Q=function(a,b){var d=[];return b=b||c.ok,function e(c){a!==c&&b(c)&&d.push(c);for(var f=0,g=c.childNodes.length;g>f;f++)e(c.childNodes[f])}(a),d},R=function(b,c){var d=b.parentNode,e=a("<"+c+">")[0];return d.insertBefore(e,b),e.appendChild(b),e},S=function(a,b){var c=b.nextSibling,d=b.parentNode;return c?d.insertBefore(a,c):d.appendChild(a),a},T=function(b,c){return a.each(c,function(a,c){b.appendChild(c)}),b},U=function(a){return 0===a.offset},V=function(a){return a.offset===G(a.node)},W=function(a){return U(a)||V(a)},X=function(a,b){for(;a&&a!==b;){if(0!==_(a))return!1;a=a.parentNode}return!0},Y=function(a,b){for(;a&&a!==b;){if(_(a)!==G(a.parentNode)-1)return!1;a=a.parentNode}return!0},Z=function(a,b){return U(a)&&X(a.node,b)},$=function(a,b){return V(a)&&Y(a.node,b)},_=function(a){for(var b=0;a=a.previousSibling;)b+=1;return b},aa=function(a){return!!(a&&a.childNodes&&a.childNodes.length)},ba=function(a,c){var d,e;if(0===a.offset){if(b(a.node))return null;d=a.node.parentNode,e=_(a.node)}else aa(a.node)?(d=a.node.childNodes[a.offset-1],e=G(d)):(d=a.node,e=c?0:a.offset-1);return{node:d,offset:e}},ca=function(a,c){var d,e;if(G(a.node)===a.offset){if(b(a.node))return null;d=a.node.parentNode,e=_(a.node)+1}else aa(a.node)?(d=a.node.childNodes[a.offset],e=0):(d=a.node,e=c?G(a.node):a.offset+1);return{node:d,offset:e}},da=function(a,b){return a.node===b.node&&a.offset===b.offset},ea=function(a){if(g(a.node)||!aa(a.node)||H(a.node))return!0;var b=a.node.childNodes[a.offset-1],c=a.node.childNodes[a.offset];return b&&!i(b)||c&&!i(c)?!1:!0},fa=function(a,b){for(;a;){if(b(a))return a;a=ba(a)}return null},ga=function(a,b){for(;a;){if(b(a))return a;a=ca(a)}return null},ha=function(a){if(!g(a.node))return!1;var b=a.node.nodeValue.charAt(a.offset-1);return b&&" "!==b&&b!==k},ia=function(a,b,c,d){for(var e=a;e&&(c(e),!da(e,b));){var f=d&&a.node!==e.node&&b.node!==e.node;e=ca(e,f)}},ja=function(a,b){var d=L(b,c.eq(a));return d.map(_).reverse()},ka=function(a,b){for(var c=a,d=0,e=b.length;e>d;d++)c=c.childNodes.length<=b[d]?c.childNodes[c.childNodes.length-1]:c.childNodes[b[d]];return c},la=function(a,b){var c=b&&b.isSkipPaddingBlankHTML,d=b&&b.isNotSplitEdgePoint;if(W(a)&&(g(a.node)||d)){if(U(a))return a.node;if(V(a))return a.node.nextSibling}if(g(a.node))return a.node.splitText(a.offset);var e=a.node.childNodes[a.offset],f=S(a.node.cloneNode(!1),a.node);return T(f,P(e)),c||(I(a.node),I(f)),f},ma=function(a,b,d){var e=L(b.node,c.eq(a));return e.length?1===e.length?la(b,d):e.reduce(function(a,c){return a===b.node&&(a=la(b,d)),la({node:c,offset:a?m.position(a):G(c)},d)}):null},na=function(a,b){var c,e,f=b?n:y,g=L(a.node,f),h=d.last(g)||a.node;f(h)?(c=g[g.length-2],e=h):(c=h,e=c.parentNode);var i=c&&ma(c,a,{isSkipPaddingBlankHTML:b,isNotSplitEdgePoint:b});return i||e!==a.node||(i=a.node.childNodes[a.offset]),{rightNode:i,container:e}},oa=function(a){return document.createElement(a)},pa=function(a){return document.createTextNode(a)},qa=function(a,b){if(a&&a.parentNode){if(a.removeNode)return a.removeNode(b);var c=a.parentNode;if(!b){var d,e,f=[];for(d=0,e=a.childNodes.length;e>d;d++)f.push(a.childNodes[d]);for(d=0,e=f.length;e>d;d++)c.insertBefore(f[d],a)}c.removeChild(a)}},ra=function(a,c){for(;a&&!b(a)&&c(a);){var d=a.parentNode;qa(a),a=d}},sa=function(a,b){if(a.nodeName.toUpperCase()===b.toUpperCase())return a;var c=oa(b);return a.style.cssText&&(c.style.cssText=a.style.cssText),T(c,d.from(a.childNodes)),S(c,a),qa(a),c},ta=f("TEXTAREA"),ua=function(a,b){var c=ta(a[0])?a.val():a.html();return b?c.replace(/[\n\r]/g,""):c},va=function(b,c){var d=ua(b);if(c){var e=/<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;d=d.replace(e,function(a,b,c){c=c.toUpperCase();var d=/^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(c)&&!!b,e=/^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(c);return a+(d||e?"\n":"")}),d=a.trim(d)}return d},wa=function(b){var c=a(b),d=c.offset(),e=c.outerHeight(!0);return{left:d.left,top:d.top+e}},xa=function(a,b){Object.keys(b).forEach(function(c){a.on(c,b[c])})},ya=function(a,b){Object.keys(b).forEach(function(c){a.off(c,b[c])})};return{NBSP_CHAR:k,ZERO_WIDTH_NBSP_CHAR:l,blank:F,emptyPara:"<p>"+F+"</p>",makePredByNodeName:f,isEditable:b,isControlSizing:e,isText:g,isElement:h,isVoid:i,isPara:n,isPurePara:r,isHeading:o,isInline:t,isBlock:c.not(t),isBodyInline:B,isBody:C,isParaInline:A,isPre:p,isList:u,isTable:s,isCell:w,isBlockquote:x,isBodyContainer:y,isAnchor:z,isDiv:f("DIV"),isLi:q,isBR:f("BR"),isSpan:f("SPAN"),isB:f("B"),isU:f("U"),isS:f("S"),isI:f("I"),isImg:f("IMG"),isTextarea:ta,isEmpty:H,isEmptyAnchor:c.and(z,H),isClosestSibling:D,withClosestSiblings:E,nodeLength:G,isLeftEdgePoint:U,isRightEdgePoint:V,isEdgePoint:W,isLeftEdgeOf:X,isRightEdgeOf:Y,isLeftEdgePointOf:Z,isRightEdgePointOf:$,prevPoint:ba,nextPoint:ca,isSamePoint:da,isVisiblePoint:ea,prevPointUntil:fa,nextPointUntil:ga,isCharPoint:ha,walkPoint:ia,ancestor:J,singleChildAncestor:K,listAncestor:L,lastAncestor:M,listNext:P,listPrev:O,listDescendant:Q,commonAncestor:N,wrap:R,insertAfter:S,appendChildNodes:T,position:_,hasChildren:aa,makeOffsetPath:ja,fromOffsetPath:ka,splitTree:ma,splitPoint:na,create:oa,createText:pa,remove:qa,removeWhile:ra,replace:sa,html:va,value:ua,posFromPlaceholder:wa,attachEvents:xa,detachEvents:ya}}(),n=function(b,e){var f=this,g=a.summernote.ui;return this.memos={},this.modules={},this.layoutInfo={},this.options=e,this.initialize=function(){return this.layoutInfo=g.createLayout(b,e),this._initialize(),b.hide(),this},this.destroy=function(){this._destroy(),b.removeData("summernote"),g.removeLayout(b,this.layoutInfo)},this.reset=function(){this.code(m.emptyPara),this._destroy(),this._initialize()},this._initialize=function(){var b=a.extend({},this.options.buttons);Object.keys(b).forEach(function(a){f.memo("button."+a,b[a])});var c=a.extend({},this.options.modules,a.summernote.plugins||{});Object.keys(c).forEach(function(a){f.module(a,c[a],!0)}),Object.keys(this.modules).forEach(function(a){f.initializeModule(a)})},this._destroy=function(){Object.keys(this.modules).reverse().forEach(function(a){f.removeModule(a)}),Object.keys(this.memos).forEach(function(a){f.removeMemo(a)})},this.code=function(a){var c=this.invoke("codeview.isActivated");return void 0===a?(this.invoke("codeview.sync"),c?this.layoutInfo.codable.val():this.layoutInfo.editable.html()):(c?this.layoutInfo.codable.val(a):this.layoutInfo.editable.html(a),b.val(a),this.triggerEvent("change",a),void 0)},this.isDisabled=function(){return"false"===this.layoutInfo.editable.attr("contenteditable")},this.enable=function(){this.layoutInfo.editable.attr("contenteditable",!0),this.invoke("toolbar.activate",!0)},this.disable=function(){this.invoke("codeview.isActivated")&&this.invoke("codeview.deactivate"),this.layoutInfo.editable.attr("contenteditable",!1),this.invoke("toolbar.deactivate",!0)},this.triggerEvent=function(){var a=d.head(arguments),e=d.tail(d.from(arguments)),f=this.options.callbacks[c.namespaceToCamel(a,"on")];f&&f.apply(b[0],e),b.trigger("summernote."+a,e)},this.initializeModule=function(a){var d=this.modules[a];d.shouldInitialize=d.shouldInitialize||c.ok,d.shouldInitialize()&&(d.initialize&&d.initialize(),d.events&&m.attachEvents(b,d.events))},this.module=function(a,b,c){return 1===arguments.length?this.modules[a]:(this.modules[a]=new b(this),void(c||this.initializeModule(a)))},this.removeModule=function(a){var c=this.modules[a];c.shouldInitialize()&&(c.events&&m.detachEvents(b,c.events),c.destroy&&c.destroy()),delete this.modules[a]},this.memo=function(a,b){return 1===arguments.length?this.memos[a]:void(this.memos[a]=b)},this.removeMemo=function(a){this.memos[a]&&this.memos[a].destroy&&this.memos[a].destroy(),delete this.memos[a]},this.createInvokeHandler=function(b,c){return function(d){d.preventDefault(),f.invoke(b,c||a(d.target).closest("[data-value]").data("value"))}},this.invoke=function(){var a=d.head(arguments),b=d.tail(d.from(arguments)),c=a.split("."),e=c.length>1,f=e&&d.head(c),g=e?d.last(c):d.head(c),h=this.modules[f||"editor"];return!f&&this[g]?this[g].apply(this,b):h&&h[g]&&h.shouldInitialize()?h[g].apply(h,b):void 0},this.initialize()};a.summernote=a.summernote||{lang:{}},a.fn.extend({summernote:function(){var b=a.type(d.head(arguments)),c="string"===b,e="object"===b,f=e?d.head(arguments):{};f=a.extend({},a.summernote.options,f),f.langInfo=a.extend(!0,{},a.summernote.lang["en-US"],a.summernote.lang[f.lang]),this.each(function(b,c){var d=a(c);if(!d.data("summernote")){var e=new n(d,f);d.data("summernote",e),d.data("summernote").triggerEvent("init",e.layoutInfo)}});var g=this.first();if(g.length){var h=g.data("summernote");if(c)return h.invoke.apply(h,d.from(arguments));f.focus&&h.invoke("editor.focus")}return this}});var o=function(b,c,d,e){this.render=function(f){var g=a(b);if(d&&d.contents&&g.html(d.contents),d&&d.className&&g.addClass(d.className),d&&d.data&&a.each(d.data,function(a,b){g.attr("data-"+a,b)}),d&&d.click&&g.on("click",d.click),c){var h=g.find(".note-children-container");c.forEach(function(a){a.render(h.length?h:g)})}return e&&e(g,d),d&&d.callback&&d.callback(g),f&&f.append(g),g}},p={create:function(b,c){return function(){var d=a.isArray(arguments[0])?arguments[0]:[],e="object"==typeof arguments[1]?arguments[1]:arguments[0];return e&&e.children&&(d=e.children),new o(b,d,e,c)}}},q=p.create('<div class="note-editor note-frame panel panel-default"/>'),r=p.create('<div class="note-toolbar panel-heading"/>'),s=p.create('<div class="note-editing-area"/>'),t=p.create('<textarea class="note-codable"/>'),u=p.create('<div class="note-editable panel-body" contentEditable="true"/>'),v=p.create(['<div class="note-statusbar">','  <div class="note-resizebar">','    <div class="note-icon-bar"/>','    <div class="note-icon-bar"/>','    <div class="note-icon-bar"/>',"  </div>","</div>"].join("")),w=p.create('<div class="note-editor"/>'),x=p.create('<div class="note-editable" contentEditable="true"/>'),y=p.create('<div class="note-btn-group btn-group">'),z=p.create('<button type="button" class="note-btn btn btn-default btn-sm">',function(a,b){b&&b.tooltip&&a.attr({title:b.tooltip}).tooltip({container:"body",trigger:"hover",placement:"bottom"})}),A=p.create('<div class="dropdown-menu">',function(b,c){var d=a.isArray(c.items)?c.items.map(function(a){var b="string"==typeof a?a:a.value||"",d=c.template?c.template(a):a;return'<li><a href="#" data-value="'+b+'">'+d+"</a></li>"}).join(""):c.items;b.html(d)}),B=p.create('<div class="dropdown-menu note-check">',function(b,c){var d=a.isArray(c.items)?c.items.map(function(a){var b="string"==typeof a?a:a.value||"",d=c.template?c.template(a):a;return'<li><a href="#" data-value="'+b+'">'+F(c.checkClassName)+" "+d+"</a></li>"}).join(""):c.items;b.html(d)}),C=p.create('<div class="note-color-palette"/>',function(a,b){for(var c=[],d=0,e=b.colors.length;e>d;d++){for(var f=b.eventName,g=b.colors[d],h=[],i=0,j=g.length;j>i;i++){var k=g[i];h.push(['<button type="button" class="note-color-btn"','style="background-color:',k,'" ','data-event="',f,'" ','data-value="',k,'" ','title="',k,'" ','data-toggle="button" tabindex="-1"></button>'].join(""))}c.push('<div class="note-color-row">'+h.join("")+"</div>")}a.html(c.join("")),a.find(".note-color-btn").tooltip({container:"body",trigger:"hover",placement:"bottom"})}),D=p.create('<div class="modal" aria-hidden="false" tabindex="-1"/>',function(a,b){b.fade&&a.addClass("fade"),a.html(['<div class="modal-dialog">','  <div class="modal-content">',b.title?'    <div class="modal-header">      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>      <h4 class="modal-title">'+b.title+"</h4>    </div>":"",'    <div class="modal-body">'+b.body+"</div>",b.footer?'    <div class="modal-footer">'+b.footer+"</div>":"","  </div>","</div>"].join(""))}),E=p.create(['<div class="note-popover popover in">','  <div class="arrow"/>','  <div class="popover-content note-children-container"/>',"</div>"].join(""),function(a,b){var c="undefined"!=typeof b.direction?b.direction:"bottom";a.addClass(c),b.hideArrow&&a.find(".arrow").hide()}),F=function(a,b){return b=b||"i","<"+b+' class="'+a+'"/>'},G={editor:q,toolbar:r,editingArea:s,codable:t,editable:u,statusbar:v,airEditor:w,airEditable:x,buttonGroup:y,button:z,dropdown:A,dropdownCheck:B,palette:C,dialog:D,popover:E,icon:F,toggleBtn:function(a,b){a.toggleClass("disabled",!b),a.attr("disabled",!b)},toggleBtnActive:function(a,b){a.toggleClass("active",b)},onDialogShown:function(a,b){a.one("shown.bs.modal",b)},onDialogHidden:function(a,b){a.one("hidden.bs.modal",b)},showDialog:function(a){a.modal("show")},hideDialog:function(a){a.modal("hide")},createLayout:function(a,b){var c=(b.airMode?G.airEditor([G.editingArea([G.airEditable()])]):G.editor([G.toolbar(),G.editingArea([G.codable(),G.editable()]),G.statusbar()])).render();return c.insertAfter(a),{note:a,editor:c,toolbar:c.find(".note-toolbar"),editingArea:c.find(".note-editing-area"),editable:c.find(".note-editable"),codable:c.find(".note-codable"),statusbar:c.find(".note-statusbar")}},removeLayout:function(a,b){a.html(b.editable.html()),b.editor.remove(),a.show()}};a.extend(a.summernote.lang,{"en-US":{font:{bold:"Bold",italic:"Italic",underline:"Underline",clear:"Remove Font Style",height:"Line Height",name:"Font Family",strikethrough:"Strikethrough",subscript:"Subscript",superscript:"Superscript",size:"Font Size"},image:{image:"Picture",insert:"Insert Image",resizeFull:"Resize Full",resizeHalf:"Resize Half",resizeQuarter:"Resize Quarter",floatLeft:"Float Left",floatRight:"Float Right",floatNone:"Float None",shapeRounded:"Shape: Rounded",shapeCircle:"Shape: Circle",shapeThumbnail:"Shape: Thumbnail",shapeNone:"Shape: None",dragImageHere:"Drag image or text here",dropImage:"Drop image or Text",selectFromFiles:"Select from files",maximumFileSize:"Maximum file size",maximumFileSizeError:"Maximum file size exceeded.",url:"Image URL",remove:"Remove Image"},video:{video:"Video",videoLink:"Video Link",insert:"Insert Video",url:"Video URL?",providers:"(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)"},link:{link:"Link",insert:"Insert Link",unlink:"Unlink",edit:"Edit",textToDisplay:"Text to display",url:"To what URL should this link go?",openInNewWindow:"Open in new window"},table:{table:"Table"},hr:{insert:"Insert Horizontal Rule"},style:{style:"Style",normal:"Normal",blockquote:"Quote",pre:"Code",h1:"Header 1",h2:"Header 2",h3:"Header 3",h4:"Header 4",h5:"Header 5",h6:"Header 6"},lists:{unordered:"Unordered list",ordered:"Ordered list"},options:{help:"Help",fullscreen:"Full Screen",codeview:"Code View"},paragraph:{paragraph:"Paragraph",outdent:"Outdent",indent:"Indent",left:"Align left",center:"Align center",right:"Align right",justify:"Justify full"},color:{recent:"Recent Color",more:"More Color",background:"Background Color",foreground:"Foreground Color",transparent:"Transparent",setTransparent:"Set transparent",reset:"Reset",resetToDefault:"Reset to default"},shortcut:{shortcuts:"Keyboard shortcuts",close:"Close",textFormatting:"Text formatting",action:"Action",paragraphFormatting:"Paragraph formatting",documentStyle:"Document Style",extraKeys:"Extra keys"},help:{insertParagraph:"Insert Paragraph",undo:"Undoes the last command",redo:"Redoes the last command",tab:"Tab",untab:"Untab",bold:"Set a bold style",italic:"Set a italic style",underline:"Set a underline style",strikethrough:"Set a strikethrough style",removeFormat:"Clean a style",justifyLeft:"Set left align",justifyCenter:"Set center align",justifyRight:"Set right align",justifyFull:"Set full align",insertUnorderedList:"Toggle unordered list",insertOrderedList:"Toggle ordered list",outdent:"Outdent on current paragraph",indent:"Indent on current paragraph",formatPara:"Change current block's format as a paragraph(P tag)",formatH1:"Change current block's format as H1",formatH2:"Change current block's format as H2",formatH3:"Change current block's format as H3",formatH4:"Change current block's format as H4",formatH5:"Change current block's format as H5",formatH6:"Change current block's format as H6",insertHorizontalRule:"Insert horizontal rule","linkDialog.show":"Show Link Dialog"},history:{undo:"Undo",redo:"Redo"},specialChar:{specialChar:"SPECIAL CHARACTERS",select:"Select Special characters"}}});var H,I=function(){var a={BACKSPACE:8,TAB:9,ENTER:13,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,NUM0:48,NUM1:49,NUM2:50,NUM3:51,NUM4:52,NUM5:53,NUM6:54,NUM7:55,NUM8:56,B:66,E:69,I:73,J:74,K:75,L:76,R:82,S:83,U:85,V:86,Y:89,Z:90,SLASH:191,LEFTBRACKET:219,BACKSLASH:220,RIGHTBRACKET:221};return{isEdit:function(b){return d.contains([a.BACKSPACE,a.TAB,a.ENTER,a.SPACe],b)},isMove:function(b){return d.contains([a.LEFT,a.UP,a.RIGHT,a.DOWN],b)},nameFromCode:c.invertObject(a),code:a}}(),J=function(){var b=function(a,b){var c,e,f=a.parentElement(),g=document.body.createTextRange(),h=d.from(f.childNodes);for(c=0;c<h.length;c++)if(!m.isText(h[c])){if(g.moveToElementText(h[c]),g.compareEndPoints("StartToStart",a)>=0)break;e=h[c]}if(0!==c&&m.isText(h[c-1])){var i=document.body.createTextRange(),j=null;i.moveToElementText(e||f),i.collapse(!e),j=e?e.nextSibling:f.firstChild;var k=a.duplicate();k.setEndPoint("StartToStart",i);for(var l=k.text.replace(/[\r\n]/g,"").length;l>j.nodeValue.length&&j.nextSibling;)l-=j.nodeValue.length,j=j.nextSibling;j.nodeValue;b&&j.nextSibling&&m.isText(j.nextSibling)&&l===j.nodeValue.length&&(l-=j.nodeValue.length,j=j.nextSibling),f=j,c=l}return{cont:f,offset:c}},e=function(a){var b=function(a,e){var f,g;if(m.isText(a)){var h=m.listPrev(a,c.not(m.isText)),i=d.last(h).previousSibling;f=i||a.parentNode,e+=d.sum(d.tail(h),m.nodeLength),g=!i}else{if(f=a.childNodes[e]||a,m.isText(f))return b(f,0);e=0,g=!1}return{node:f,collapseToStart:g,offset:e}},e=document.body.createTextRange(),f=b(a.node,a.offset);return e.moveToElementText(f.node),e.collapse(f.collapseToStart),e.moveStart("character",f.offset),e},f=function(b,g,h,i){this.sc=b,this.so=g,this.ec=h,this.eo=i;var k=function(){if(j.isW3CRangeSupport){var a=document.createRange();return a.setStart(b,g),a.setEnd(h,i),a}var c=e({node:b,offset:g});return c.setEndPoint("EndToEnd",e({node:h,offset:i})),c};this.getPoints=function(){return{sc:b,so:g,ec:h,eo:i}},this.getStartPoint=function(){return{node:b,offset:g}},this.getEndPoint=function(){return{node:h,offset:i}},this.select=function(){var a=k();if(j.isW3CRangeSupport){var b=document.getSelection();b.rangeCount>0&&b.removeAllRanges(),b.addRange(a)}else a.select();return this},this.scrollIntoView=function(a){return a[0].scrollTop+a.height()<this.sc.offsetTop&&(a[0].scrollTop+=Math.abs(a[0].scrollTop+a.height()-this.sc.offsetTop)),this},this.normalize=function(){var a=function(a,b){if(m.isVisiblePoint(a)&&!m.isEdgePoint(a)||m.isVisiblePoint(a)&&m.isRightEdgePoint(a)&&!b||m.isVisiblePoint(a)&&m.isLeftEdgePoint(a)&&b||m.isVisiblePoint(a)&&m.isBlock(a.node)&&m.isEmpty(a.node))return a;var c=m.ancestor(a.node,m.isBlock);if((m.isLeftEdgePointOf(a,c)||m.isVoid(m.prevPoint(a).node))&&!b||(m.isRightEdgePointOf(a,c)||m.isVoid(m.nextPoint(a).node))&&b){if(m.isVisiblePoint(a))return a;b=!b}var d=b?m.nextPointUntil(m.nextPoint(a),m.isVisiblePoint):m.prevPointUntil(m.prevPoint(a),m.isVisiblePoint);return d||a},b=a(this.getEndPoint(),!1),c=this.isCollapsed()?b:a(this.getStartPoint(),!0);return new f(c.node,c.offset,b.node,b.offset)},this.nodes=function(a,b){a=a||c.ok;var e=b&&b.includeAncestor,f=b&&b.fullyContains,g=this.getStartPoint(),h=this.getEndPoint(),i=[],j=[];return m.walkPoint(g,h,function(b){if(!m.isEditable(b.node)){var c;f?(m.isLeftEdgePoint(b)&&j.push(b.node),m.isRightEdgePoint(b)&&d.contains(j,b.node)&&(c=b.node)):c=e?m.ancestor(b.node,a):b.node,c&&a(c)&&i.push(c)}},!0),d.unique(i)},this.commonAncestor=function(){return m.commonAncestor(b,h)},this.expand=function(a){var c=m.ancestor(b,a),d=m.ancestor(h,a);if(!c&&!d)return new f(b,g,h,i);var e=this.getPoints();return c&&(e.sc=c,e.so=0),d&&(e.ec=d,e.eo=m.nodeLength(d)),new f(e.sc,e.so,e.ec,e.eo)},this.collapse=function(a){return a?new f(b,g,b,g):new f(h,i,h,i)},this.splitText=function(){var a=b===h,c=this.getPoints();return m.isText(h)&&!m.isEdgePoint(this.getEndPoint())&&h.splitText(i),m.isText(b)&&!m.isEdgePoint(this.getStartPoint())&&(c.sc=b.splitText(g),c.so=0,a&&(c.ec=c.sc,c.eo=i-g)),new f(c.sc,c.so,c.ec,c.eo)},this.deleteContents=function(){if(this.isCollapsed())return this;var b=this.splitText(),c=b.nodes(null,{fullyContains:!0}),e=m.prevPointUntil(b.getStartPoint(),function(a){return!d.contains(c,a.node)}),g=[];return a.each(c,function(a,b){var c=b.parentNode;e.node!==c&&1===m.nodeLength(c)&&g.push(c),m.remove(b,!1)}),a.each(g,function(a,b){m.remove(b,!1)}),new f(e.node,e.offset,e.node,e.offset).normalize()};var l=function(a){return function(){var c=m.ancestor(b,a);return!!c&&c===m.ancestor(h,a)}};this.isOnEditable=l(m.isEditable),this.isOnList=l(m.isList),this.isOnAnchor=l(m.isAnchor),this.isOnCell=l(m.isCell),this.isLeftEdgeOf=function(a){if(!m.isLeftEdgePoint(this.getStartPoint()))return!1;var b=m.ancestor(this.sc,a);return b&&m.isLeftEdgeOf(this.sc,b)},this.isCollapsed=function(){return b===h&&g===i},this.wrapBodyInlineWithPara=function(){if(m.isBodyContainer(b)&&m.isEmpty(b))return b.innerHTML=m.emptyPara,new f(b.firstChild,0,b.firstChild,0);var a=this.normalize();if(m.isParaInline(b)||m.isPara(b))return a;var e;if(m.isInline(a.sc)){var g=m.listAncestor(a.sc,c.not(m.isInline));e=d.last(g),m.isInline(e)||(e=g[g.length-2]||a.sc.childNodes[a.so])}else e=a.sc.childNodes[a.so>0?a.so-1:0];var h=m.listPrev(e,m.isParaInline).reverse();if(h=h.concat(m.listNext(e.nextSibling,m.isParaInline)),h.length){var i=m.wrap(d.head(h),"p");m.appendChildNodes(i,d.tail(h))}return this.normalize()},this.insertNode=function(a){var b=this.wrapBodyInlineWithPara().deleteContents(),c=m.splitPoint(b.getStartPoint(),m.isInline(a));return c.rightNode?c.rightNode.parentNode.insertBefore(a,c.rightNode):c.container.appendChild(a),a},this.pasteHTML=function(b){var c=a("<div></div>").html(b)[0],e=d.from(c.childNodes),f=this.wrapBodyInlineWithPara().deleteContents();return e.reverse().map(function(a){return f.insertNode(a)}).reverse()},this.toString=function(){var a=k();return j.isW3CRangeSupport?a.toString():a.text},this.getWordRange=function(a){var b=this.getEndPoint();if(!m.isCharPoint(b))return this;var c=m.prevPointUntil(b,function(a){return!m.isCharPoint(a)});return a&&(b=m.nextPointUntil(b,function(a){return!m.isCharPoint(a)})),new f(c.node,c.offset,b.node,b.offset)},this.bookmark=function(a){return{s:{path:m.makeOffsetPath(a,b),offset:g},e:{path:m.makeOffsetPath(a,h),offset:i}}},this.paraBookmark=function(a){return{s:{path:d.tail(m.makeOffsetPath(d.head(a),b)),offset:g},e:{path:d.tail(m.makeOffsetPath(d.last(a),h)),offset:i}}},this.getClientRects=function(){var a=k();return a.getClientRects()}};return{create:function(a,c,d,e){if(arguments.length)2===arguments.length&&(d=a,e=c);else if(j.isW3CRangeSupport){var g=document.getSelection();if(!g||0===g.rangeCount)return null;if(m.isBody(g.anchorNode))return null;var h=g.getRangeAt(0);a=h.startContainer,c=h.startOffset,d=h.endContainer,e=h.endOffset}else{var i=document.selection.createRange(),k=i.duplicate();k.collapse(!1);var l=i;l.collapse(!0);var n=b(l,!0),o=b(k,!1);m.isText(n.node)&&m.isLeftEdgePoint(n)&&m.isTextNode(o.node)&&m.isRightEdgePoint(o)&&o.node.nextSibling===n.node&&(n=o),a=n.cont,c=n.offset,d=o.cont,e=o.offset}return new f(a,c,d,e)},createFromNode:function(a){var b=a,c=0,d=a,e=m.nodeLength(d);return m.isVoid(b)&&(c=m.listPrev(b).length-1,b=b.parentNode),m.isBR(d)?(e=m.listPrev(d).length-1,d=d.parentNode):m.isVoid(d)&&(e=m.listPrev(d).length,d=d.parentNode),this.create(b,c,d,e)},createFromNodeBefore:function(a){return this.createFromNode(a).collapse(!0)},createFromNodeAfter:function(a){return this.createFromNode(a).collapse()},createFromBookmark:function(a,b){var c=m.fromOffsetPath(a,b.s.path),d=b.s.offset,e=m.fromOffsetPath(a,b.e.path),g=b.e.offset;return new f(c,d,e,g)},createFromParaBookmark:function(a,b){var c=a.s.offset,e=a.e.offset,g=m.fromOffsetPath(d.head(b),a.s.path),h=m.fromOffsetPath(d.last(b),a.e.path);return new f(g,c,h,e)}}}(),K=function(){var b=function(b){return a.Deferred(function(c){a.extend(new FileReader,{onload:function(a){var b=a.target.result;c.resolve(b)},onerror:function(){c.reject(this)}}).readAsDataURL(b)}).promise()},c=function(b){return a.Deferred(function(c){var d=a("<img>");d.one("load",function(){d.off("error abort"),c.resolve(d)}).one("error abort",function(){d.off("load").detach(),c.reject(d)}).css({display:"none"}).appendTo(document.body).attr("src",b)}).promise()};return{readFileAsDataURL:b,createImage:c}}(),L=function(a){var b=[],c=-1,d=a[0],e=function(){var b=J.create(),c={s:{path:[],offset:0},e:{path:[],offset:0}};return{contents:a.html(),bookmark:b?b.bookmark(d):c}},f=function(b){null!==b.contents&&a.html(b.contents),null!==b.bookmark&&J.createFromBookmark(d,b.bookmark).select()};this.rewind=function(){a.html()!==b[c].contents&&this.recordUndo(),c=0,f(b[c])},this.reset=function(){b=[],c=-1,a.html(""),this.recordUndo()},this.undo=function(){a.html()!==b[c].contents&&this.recordUndo(),c>0&&(c--,f(b[c]))},this.redo=function(){b.length-1>c&&(c++,f(b[c]))},this.recordUndo=function(){c++,b.length>c&&(b=b.slice(0,c)),b.push(e())}},M=function(){var b=function(b,c){if(j.jqueryVersion<1.9){var d={};return a.each(c,function(a,c){d[c]=b.css(c)}),d}return b.css.call(b,c)};this.fromNode=function(a){var c=["font-family","font-size","text-align","list-style-type","line-height"],d=b(a,c)||{};return d["font-size"]=parseInt(d["font-size"],10),d},this.stylePara=function(b,c){a.each(b.nodes(m.isPara,{includeAncestor:!0}),function(b,d){a(d).css(c)})},this.styleNodes=function(b,e){b=b.splitText();var f=e&&e.nodeName||"SPAN",g=!(!e||!e.expandClosestSibling),h=!(!e||!e.onlyPartialContains);if(b.isCollapsed())return[b.insertNode(m.create(f))];var i=m.makePredByNodeName(f),j=b.nodes(m.isText,{fullyContains:!0}).map(function(a){return m.singleChildAncestor(a,i)||m.wrap(a,f)});if(g){if(h){var k=b.nodes();i=c.and(i,function(a){return d.contains(k,a)})}return j.map(function(b){var c=m.withClosestSiblings(b,i),e=d.head(c),f=d.tail(c);return a.each(f,function(a,b){m.appendChildNodes(e,b.childNodes),m.remove(b)}),d.head(c)})}return j},this.current=function(b){var c=a(m.isElement(b.sc)?b.sc:b.sc.parentNode),d=this.fromNode(c);try{d=a.extend(d,{"font-bold":document.queryCommandState("bold")?"bold":"normal","font-italic":document.queryCommandState("italic")?"italic":"normal","font-underline":document.queryCommandState("underline")?"underline":"normal","font-subscript":document.queryCommandState("subscript")?"subscript":"normal","font-superscript":document.queryCommandState("superscript")?"superscript":"normal",
	"font-strikethrough":document.queryCommandState("strikethrough")?"strikethrough":"normal"})}catch(e){}if(b.isOnList()){var f=["circle","disc","disc-leading-zero","square"],g=a.inArray(d["list-style-type"],f)>-1;d["list-style"]=g?"unordered":"ordered"}else d["list-style"]="none";var h=m.ancestor(b.sc,m.isPara);if(h&&h.style["line-height"])d["line-height"]=h.style.lineHeight;else{var i=parseInt(d["line-height"],10)/parseInt(d["font-size"],10);d["line-height"]=i.toFixed(1)}return d.anchor=b.isOnAnchor()&&m.ancestor(b.sc,m.isAnchor),d.ancestors=m.listAncestor(b.sc,m.isEditable),d.range=b,d}},N=function(){this.insertOrderedList=function(){this.toggleList("OL")},this.insertUnorderedList=function(){this.toggleList("UL")},this.indent=function(){var b=this,e=J.create().wrapBodyInlineWithPara(),f=e.nodes(m.isPara,{includeAncestor:!0}),g=d.clusterBy(f,c.peq2("parentNode"));a.each(g,function(c,e){var f=d.head(e);m.isLi(f)?b.wrapList(e,f.parentNode.nodeName):a.each(e,function(b,c){a(c).css("marginLeft",function(a,b){return(parseInt(b,10)||0)+25})})}),e.select()},this.outdent=function(){var b=this,e=J.create().wrapBodyInlineWithPara(),f=e.nodes(m.isPara,{includeAncestor:!0}),g=d.clusterBy(f,c.peq2("parentNode"));a.each(g,function(c,e){var f=d.head(e);m.isLi(f)?b.releaseList([e]):a.each(e,function(b,c){a(c).css("marginLeft",function(a,b){return b=parseInt(b,10)||0,b>25?b-25:""})})}),e.select()},this.toggleList=function(b){var e=this,f=J.create().wrapBodyInlineWithPara(),g=f.nodes(m.isPara,{includeAncestor:!0}),h=f.paraBookmark(g),i=d.clusterBy(g,c.peq2("parentNode"));if(d.find(g,m.isPurePara)){var j=[];a.each(i,function(a,c){j=j.concat(e.wrapList(c,b))}),g=j}else{var k=f.nodes(m.isList,{includeAncestor:!0}).filter(function(c){return!a.nodeName(c,b)});k.length?a.each(k,function(a,c){m.replace(c,b)}):g=this.releaseList(i,!0)}J.createFromParaBookmark(h,g).select()},this.wrapList=function(a,b){var c=d.head(a),e=d.last(a),f=m.isList(c.previousSibling)&&c.previousSibling,g=m.isList(e.nextSibling)&&e.nextSibling,h=f||m.insertAfter(m.create(b||"UL"),e);return a=a.map(function(a){return m.isPurePara(a)?m.replace(a,"LI"):a}),m.appendChildNodes(h,a),g&&(m.appendChildNodes(h,d.from(g.childNodes)),m.remove(g)),a},this.releaseList=function(b,c){var e=[];return a.each(b,function(b,f){var g=d.head(f),h=d.last(f),i=c?m.lastAncestor(g,m.isList):g.parentNode,j=i.childNodes.length>1?m.splitTree(i,{node:h.parentNode,offset:m.position(h)+1},{isSkipPaddingBlankHTML:!0}):null,k=m.splitTree(i,{node:g.parentNode,offset:m.position(g)},{isSkipPaddingBlankHTML:!0});f=c?m.listDescendant(k,m.isLi):d.from(k.childNodes).filter(m.isLi),(c||!m.isList(i.parentNode))&&(f=f.map(function(a){return m.replace(a,"P")})),a.each(d.from(f).reverse(),function(a,b){m.insertAfter(b,i)});var l=d.compact([i,k,j]);a.each(l,function(b,c){var d=[c].concat(m.listDescendant(c,m.isList));a.each(d.reverse(),function(a,b){m.nodeLength(b)||m.remove(b,!0)})}),e=e.concat(f)}),e}},O=function(){var b=new N;this.insertTab=function(a,b,c){var d=m.createText(new Array(c+1).join(m.NBSP_CHAR));b=b.deleteContents(),b.insertNode(d,!0),b=J.create(d,c),b.select()},this.insertParagraph=function(c){var d=J.create();d=d.deleteContents(),d=d.wrapBodyInlineWithPara();var e,f=m.ancestor(d.sc,m.isPara);if(f){if(m.isEmpty(f)&&m.isLi(f))return void b.toggleList(f.parentNode.nodeName);if(m.isEmpty(f)&&m.isPara(f)&&m.isBlockquote(f.parentNode))m.insertAfter(f,f.parentNode),e=f;else{e=m.splitTree(f,d.getStartPoint());var g=m.listDescendant(f,m.isEmptyAnchor);g=g.concat(m.listDescendant(e,m.isEmptyAnchor)),a.each(g,function(a,b){m.remove(b)}),(m.isHeading(e)||m.isPre(e))&&m.isEmpty(e)&&(e=m.replace(e,"p"))}}else{var h=d.sc.childNodes[d.so];e=a(m.emptyPara)[0],h?d.sc.insertBefore(e,h):d.sc.appendChild(e)}J.create(e,0).normalize().select().scrollIntoView(c)}},P=function(){this.tab=function(a,b){var c=m.ancestor(a.commonAncestor(),m.isCell),e=m.ancestor(c,m.isTable),f=m.listDescendant(e,m.isCell),g=d[b?"prev":"next"](f,c);g&&J.create(g,0).select()},this.createTable=function(b,c,d){for(var e,f=[],g=0;b>g;g++)f.push("<td>"+m.blank+"</td>");e=f.join("");for(var h,i=[],j=0;c>j;j++)i.push("<tr>"+e+"</tr>");h=i.join("");var k=a("<table>"+h+"</table>");return d&&d.tableClassName&&k.addClass(d.tableClassName),k[0]}},Q="bogus",R=function(b){var c=this,e=b.layoutInfo.note,f=b.layoutInfo.editor,g=b.layoutInfo.editable,h=b.options,i=h.langInfo,k=new M,l=new P,n=new O,o=new N,p=new L(g);this.initialize=function(){g.on("keydown",function(a){a.keyCode===I.code.ENTER&&b.triggerEvent("enter",a),b.triggerEvent("keydown",a),h.shortcuts&&!a.isDefaultPrevented()&&c.handleKeyMap(a)}).on("keyup",function(a){b.triggerEvent("keyup",a)}).on("focus",function(a){b.triggerEvent("focus",a)}).on("blur",function(a){b.triggerEvent("blur",a)}).on("mousedown",function(a){b.triggerEvent("mousedown",a)}).on("mouseup",function(a){b.triggerEvent("mouseup",a)}).on("scroll",function(a){b.triggerEvent("scroll",a)}).on("paste",function(a){b.triggerEvent("paste",a)});var a=j.isMSIE?"DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted":"input";g.on(a,function(){b.triggerEvent("change",g.html())}),f.on("focusin",function(a){b.triggerEvent("focusin",a)}).on("focusout",function(a){b.triggerEvent("focusout",a)}),!h.airMode&&h.height&&g.outerHeight(h.height),!h.airMode&&h.maxHeight&&g.css("max-height",h.maxHeight),!h.airMode&&h.minHeight&&g.css("min-height",h.minHeight),g.html(m.html(e)||m.emptyPara),p.recordUndo()},this.destroy=function(){g.off()},this.handleKeyMap=function(a){var c=h.keyMap[j.isMac?"mac":"pc"],d=[];a.metaKey&&d.push("CMD"),a.ctrlKey&&!a.altKey&&d.push("CTRL"),a.shiftKey&&d.push("SHIFT");var e=I.nameFromCode[a.keyCode];e&&d.push(e);var f=c[d.join("+")];f?(a.preventDefault(),b.invoke(f)):I.isEdit(a.keyCode)&&this.afterCommand()},this.createRange=function(){return this.focus(),J.create()},this.saveRange=function(a){this.focus(),g.data("range",J.create()),a&&J.create().collapse().select()},this.restoreRange=function(){var a=g.data("range");a&&(a.select(),this.focus())},this.saveTarget=function(a){g.data("target",a)},this.clearTarget=function(){g.removeData("target")},this.restoreTarget=function(){return g.data("target")},this.currentStyle=function(){var a=J.create();return a&&(a=a.normalize()),a?k.current(a):k.fromNode(g)},this.styleFromNode=function(a){return k.fromNode(a)},this.undo=function(){b.triggerEvent("before.command",g.html()),p.undo(),b.triggerEvent("change",g.html())},b.memo("help.undo",i.help.undo),this.redo=function(){b.triggerEvent("before.command",g.html()),p.redo(),b.triggerEvent("change",g.html())},b.memo("help.redo",i.help.redo);for(var q=this.beforeCommand=function(){b.triggerEvent("before.command",g.html()),c.focus()},r=this.afterCommand=function(a){p.recordUndo(),a||b.triggerEvent("change",g.html())},s=["bold","italic","underline","strikethrough","superscript","subscript","justifyLeft","justifyCenter","justifyRight","justifyFull","formatBlock","removeFormat","backColor","foreColor","fontName"],t=0,u=s.length;u>t;t++)this[s[t]]=function(a){return function(b){q(),document.execCommand(a,!1,b),r(!0)}}(s[t]),b.memo("help."+s[t],i.help[s[t]]);this.tab=function(){var a=this.createRange();a.isCollapsed()&&a.isOnCell()?l.tab(a):(q(),n.insertTab(g,a,h.tabSize),r())},b.memo("help.tab",i.help.tab),this.untab=function(){var a=this.createRange();a.isCollapsed()&&a.isOnCell()&&l.tab(a,!0)},b.memo("help.untab",i.help.untab),this.wrapCommand=function(a){return function(){q(),a.apply(c,arguments),r()}},this.insertParagraph=this.wrapCommand(function(){n.insertParagraph(g)}),b.memo("help.insertParagraph",i.help.insertParagraph),this.insertOrderedList=this.wrapCommand(function(){o.insertOrderedList(g)}),b.memo("help.insertOrderedList",i.help.insertOrderedList),this.insertUnorderedList=this.wrapCommand(function(){o.insertUnorderedList(g)}),b.memo("help.insertUnorderedList",i.help.insertUnorderedList),this.indent=this.wrapCommand(function(){o.indent(g)}),b.memo("help.indent",i.help.indent),this.outdent=this.wrapCommand(function(){o.outdent(g)}),b.memo("help.outdent",i.help.outdent),this.insertImage=function(a,c){return K.createImage(a,c).then(function(a){q(),"function"==typeof c?c(a):("string"==typeof c&&a.attr("data-filename",c),a.css("width",Math.min(g.width(),a.width()))),a.show(),J.create().insertNode(a[0]),J.createFromNodeAfter(a[0]).select(),r()}).fail(function(){b.triggerEvent("image.upload.error")})},this.insertImages=function(d){a.each(d,function(a,d){var e=d.name;h.maximumImageFileSize&&h.maximumImageFileSize<d.size?b.triggerEvent("image.upload.error",i.image.maximumFileSizeError):K.readFileAsDataURL(d).then(function(a){return c.insertImage(a,e)}).fail(function(){b.triggerEvent("image.upload.error")})})},this.insertImagesOrCallback=function(a){var c=h.callbacks;c.onImageUpload?b.triggerEvent("image.upload",a):this.insertImages(a)},this.insertNode=this.wrapCommand(function(a){J.create().insertNode(a),J.createFromNodeAfter(a).select()}),this.insertText=this.wrapCommand(function(a){var b=J.create().insertNode(m.createText(a));J.create(b,m.nodeLength(b)).select()}),this.getSelectedText=function(){var a=this.createRange();return a.isOnAnchor()&&(a=J.createFromNode(m.ancestor(a.sc,m.isAnchor))),a.toString()},this.pasteHTML=this.wrapCommand(function(a){var b=J.create().pasteHTML(a);J.createFromNodeAfter(d.last(b)).select()}),this.formatBlock=this.wrapCommand(function(a){a=j.isMSIE?"<"+a+">":a,document.execCommand("FormatBlock",!1,a)}),this.formatPara=function(){this.formatBlock("P")},b.memo("help.formatPara",i.help.formatPara);for(var t=1;6>=t;t++)this["formatH"+t]=function(a){return function(){this.formatBlock("H"+a)}}(t),b.memo("help.formatH"+t,i.help["formatH"+t]);this.fontSize=function(b){this.focus();var c=J.create();if(c&&c.isCollapsed()){var e=k.styleNodes(c),f=d.head(e);a(e).css({"font-size":b+"px"}),f&&!m.nodeLength(f)&&(f.innerHTML=m.ZERO_WIDTH_NBSP_CHAR,J.createFromNodeAfter(f.firstChild).select(),g.data(Q,f))}else q(),a(k.styleNodes(c)).css({"font-size":b+"px"}),r()},this.insertHorizontalRule=this.wrapCommand(function(){var b=J.create(),c=b.insertNode(a("<HR/>")[0]);c.nextSibling&&J.create(c.nextSibling,0).normalize().select()}),b.memo("help.insertHorizontalRule",i.help.insertHorizontalRule),this.removeBogus=function(){var a=g.data(Q);if(a){var b=d.find(d.from(a.childNodes),m.isText),c=b.nodeValue.indexOf(m.ZERO_WIDTH_NBSP_CHAR);-1!==c&&b.deleteData(c,1),m.isEmpty(a)&&m.remove(a),g.removeData(Q)}},this.lineHeight=this.wrapCommand(function(a){k.stylePara(J.create(),{lineHeight:a})}),this.unlink=function(){var a=this.createRange();if(a.isOnAnchor()){var b=m.ancestor(a.sc,m.isAnchor);a=J.createFromNode(b),a.select(),q(),document.execCommand("unlink"),r()}},this.createLink=this.wrapCommand(function(b){var c=b.url,e=b.text,f=b.isNewWindow,g=b.range||this.createRange(),i=g.toString()!==e;h.onCreateLink&&(c=h.onCreateLink(c));var j=[];if(i){var l=g.insertNode(a("<A>"+e+"</A>")[0]);j.push(l)}else j=k.styleNodes(g,{nodeName:"A",expandClosestSibling:!0,onlyPartialContains:!0});a.each(j,function(b,d){a(d).attr("href",c),f?a(d).attr("target","_blank"):a(d).removeAttr("target")});var m=J.createFromNodeBefore(d.head(j)),n=m.getStartPoint(),o=J.createFromNodeAfter(d.last(j)),p=o.getEndPoint();J.create(n.node,n.offset,p.node,p.offset).select()}),this.getLinkInfo=function(){this.focus();var b=J.create().expand(m.isAnchor),c=a(d.head(b.nodes(m.isAnchor)));return{range:b,text:b.toString(),isNewWindow:c.length?"_blank"===c.attr("target"):!1,url:c.length?c.attr("href"):""}},this.color=this.wrapCommand(function(a){var b=a.foreColor,c=a.backColor;b&&document.execCommand("foreColor",!1,b),c&&document.execCommand("backColor",!1,c)}),this.insertTable=this.wrapCommand(function(a){var b=a.split("x"),c=J.create().deleteContents();c.insertNode(l.createTable(b[0],b[1],h))}),this.floatMe=this.wrapCommand(function(b){var c=a(this.restoreTarget());c.css("float",b)}),this.resize=this.wrapCommand(function(b){var c=a(this.restoreTarget());c.css({width:100*b+"%",height:""})}),this.resizeTo=function(a,b,c){var d;if(c){var e=a.y/a.x,f=b.data("ratio");d={width:f>e?a.x:a.y/f,height:f>e?a.x*f:a.y}}else d={width:a.x,height:a.y};b.css(d)},this.removeMedia=this.wrapCommand(function(){var c=a(this.restoreTarget()).detach();b.triggerEvent("media.delete",c,g)}),this.hasFocus=function(){return g.is(":focus")},this.focus=function(){this.hasFocus()||(g.focus(),!this.hasFocus()&&j.isFF&&J.createFromNode(g[0]).normalize().collapse().select())},this.isEmpty=function(){return m.isEmpty(g[0])||m.emptyPara===g.html()},this.empty=function(){b.invoke("code",m.emptyPara)}},S=function(b){var c=this,e=b.layoutInfo.editable;this.events={"summernote.keydown":function(a,d){c.needKeydownHook()&&(d.ctrlKey||d.metaKey)&&d.keyCode===I.code.V&&(b.invoke("editor.saveRange"),c.$paste.focus(),setTimeout(function(){c.pasteByHook()},0))}},this.needKeydownHook=function(){return j.isMSIE&&j.browserVersion>10||j.isFF},this.initialize=function(){this.needKeydownHook()?(this.$paste=a("<div />").attr("contenteditable",!0).css({position:"absolute",left:-1e5,opacity:0}),e.before(this.$paste),this.$paste.on("paste",function(a){b.triggerEvent("paste",a)})):e.on("paste",this.pasteByEvent)},this.destroy=function(){this.needKeydownHook()&&(this.$paste.remove(),this.$paste=null)},this.pasteByHook=function(){var c=this.$paste[0].firstChild;if(m.isImg(c)){for(var d=c.src,e=atob(d.split(",")[1]),f=new Uint8Array(e.length),g=0;g<e.length;g++)f[g]=e.charCodeAt(g);var h=new Blob([f],{type:"image/png"});h.name="clipboard.png",b.invoke("editor.restoreRange"),b.invoke("editor.focus"),b.invoke("editor.insertImagesOrCallback",[h])}else{var i=a("<div />").html(this.$paste.html()).html();b.invoke("editor.restoreRange"),b.invoke("editor.focus"),i&&b.invoke("editor.pasteHTML",i)}this.$paste.empty()},this.pasteByEvent=function(a){var c=a.originalEvent.clipboardData;if(c&&c.items&&c.items.length){var e=d.head(c.items);"file"===e.kind&&-1!==e.type.indexOf("image/")&&b.invoke("editor.insertImagesOrCallback",[e.getAsFile()]),b.invoke("editor.afterCommand")}}},T=function(b){var c=a(document),d=b.layoutInfo.editor,e=b.layoutInfo.editable,f=b.options,g=f.langInfo,h=a(['<div class="note-dropzone">','  <div class="note-dropzone-message"/>',"</div>"].join("")).prependTo(d);this.initialize=function(){f.disableDragAndDrop?c.on("drop",function(a){a.preventDefault()}):this.attachDragAndDropEvent()},this.attachDragAndDropEvent=function(){var f=a(),i=h.find(".note-dropzone-message");c.on("dragenter",function(a){var c=b.invoke("codeview.isActivated"),e=d.width()>0&&d.height()>0;c||f.length||!e||(d.addClass("dragover"),h.width(d.width()),h.height(d.height()),i.text(g.image.dragImageHere)),f=f.add(a.target)}).on("dragleave",function(a){f=f.not(a.target),f.length||d.removeClass("dragover")}).on("drop",function(){f=a(),d.removeClass("dragover")}),h.on("dragenter",function(){h.addClass("hover"),i.text(g.image.dropImage)}).on("dragleave",function(){h.removeClass("hover"),i.text(g.image.dragImageHere)}),h.on("drop",function(c){var d=c.originalEvent.dataTransfer;d&&d.files&&d.files.length?(c.preventDefault(),e.focus(),b.invoke("editor.insertImagesOrCallback",d.files)):a.each(d.types,function(c,e){var f=d.getData(e);e.toLowerCase().indexOf("text")>-1?b.invoke("editor.pasteHTML",f):a(f).each(function(){b.invoke("editor.insertNode",this)})})}).on("dragover",!1)}};j.hasCodeMirror&&(j.isSupportAmd?!/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(27)]; (function(a){H=a}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}()):H=window.CodeMirror);var U=function(a){var b=a.layoutInfo.editor,c=a.layoutInfo.editable,d=a.layoutInfo.codable,e=a.options;this.sync=function(){var a=this.isActivated();a&&j.hasCodeMirror&&d.data("cmEditor").save()},this.isActivated=function(){return b.hasClass("codeview")},this.toggle=function(){this.isActivated()?this.deactivate():this.activate(),a.triggerEvent("codeview.toggled")},this.activate=function(){if(d.val(m.html(c,e.prettifyHtml)),d.height(c.height()),a.invoke("toolbar.updateCodeview",!0),b.addClass("codeview"),d.focus(),j.hasCodeMirror){var f=H.fromTextArea(d[0],e.codemirror);if(e.codemirror.tern){var g=new H.TernServer(e.codemirror.tern);f.ternServer=g,f.on("cursorActivity",function(a){g.updateArgHints(a)})}f.setSize(null,c.outerHeight()),d.data("cmEditor",f)}},this.deactivate=function(){if(j.hasCodeMirror){var f=d.data("cmEditor");d.val(f.getValue()),f.toTextArea()}var g=m.value(d,e.prettifyHtml)||m.emptyPara,h=c.html()!==g;c.html(g),c.height(e.height?d.height():"auto"),b.removeClass("codeview"),h&&a.triggerEvent("change",c.html(),c),c.focus(),a.invoke("toolbar.updateCodeview",!1)},this.destroy=function(){this.isActivated()&&this.deactivate()}},V=24,W=function(b){var c=a(document),d=b.layoutInfo.statusbar,e=b.layoutInfo.editable,f=b.options;this.initialize=function(){f.airMode||f.disableResizeEditor||d.on("mousedown",function(a){a.preventDefault(),a.stopPropagation();var b=e.offset().top-c.scrollTop();c.on("mousemove",function(a){var c=a.clientY-(b+V);c=f.minheight>0?Math.max(c,f.minheight):c,c=f.maxHeight>0?Math.min(c,f.maxHeight):c,e.height(c)}).one("mouseup",function(){c.off("mousemove")})})},this.destroy=function(){d.off()}},X=function(b){var c=b.layoutInfo.editor,d=b.layoutInfo.toolbar,e=b.layoutInfo.editable,f=b.layoutInfo.codable,g=a(window),h=a("html, body");this.toggle=function(){var a=function(a){e.css("height",a.h),f.css("height",a.h),f.data("cmeditor")&&f.data("cmeditor").setsize(null,a.h)};c.toggleClass("fullscreen");var i=c.hasClass("fullscreen");i?(e.data("orgHeight",e.css("height")),g.on("resize",function(){a({h:g.height()-d.outerHeight()})}).trigger("resize"),h.css("overflow","hidden")):(g.off("resize"),a({h:e.data("orgHeight")}),h.css("overflow","visible")),b.invoke("toolbar.updateFullscreen",i)}},Y=function(b){var c=this,d=a(document),e=b.layoutInfo.editingArea,f=b.options;this.events={"summernote.mousedown":function(a,b){c.update(b.target)&&b.preventDefault()},"summernote.keyup summernote.scroll summernote.change summernote.dialog.shown":function(){c.update()}},this.initialize=function(){this.$handle=a(['<div class="note-handle">','<div class="note-control-selection">','<div class="note-control-selection-bg"></div>','<div class="note-control-holder note-control-nw"></div>','<div class="note-control-holder note-control-ne"></div>','<div class="note-control-holder note-control-sw"></div>','<div class="',f.disableResizeImage?"note-control-holder":"note-control-sizing",' note-control-se"></div>',f.disableResizeImage?"":'<div class="note-control-selection-info"></div>',"</div>","</div>"].join("")).prependTo(e),this.$handle.on("mousedown",function(a){if(m.isControlSizing(a.target)){a.preventDefault(),a.stopPropagation();var e=c.$handle.find(".note-control-selection").data("target"),f=e.offset(),g=d.scrollTop();d.on("mousemove",function(a){b.invoke("editor.resizeTo",{x:a.clientX-f.left,y:a.clientY-(f.top-g)},e,!a.shiftKey),c.update(e[0])}).one("mouseup",function(a){a.preventDefault(),d.off("mousemove"),b.invoke("editor.afterCommand")}),e.data("ratio")||e.data("ratio",e.height()/e.width())}})},this.destroy=function(){this.$handle.remove()},this.update=function(c){var d=m.isImg(c),e=this.$handle.find(".note-control-selection");if(b.invoke("imagePopover.update",c),d){var f=a(c),g=f.position(),h={w:f.outerWidth(!0),h:f.outerHeight(!0)};e.css({display:"block",left:g.left,top:g.top,width:h.w,height:h.h}).data("target",f);var i=h.w+"x"+h.h;e.find(".note-control-selection-info").text(i),b.invoke("editor.saveTarget",c)}else this.hide();return d},this.hide=function(){b.invoke("editor.clearTarget"),this.$handle.children().hide()}},Z=function(b){var c=this,e="http://",f=/^(https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i;this.events={"summernote.keyup":function(a,b){b.isDefaultPrevented()||c.handleKeyup(b)},"summernote.keydown":function(a,b){c.handleKeydown(b)}},this.initialize=function(){this.lastWordRange=null},this.destroy=function(){this.lastWordRange=null},this.replace=function(){if(this.lastWordRange){var c=this.lastWordRange.toString(),d=c.match(f);if(d&&(d[1]||d[2])){var g=d[1]?c:e+c,h=a("<a />").html(c).attr("href",g)[0];this.lastWordRange.insertNode(h),this.lastWordRange=null,b.invoke("editor.focus")}}},this.handleKeydown=function(a){if(d.contains([I.code.ENTER,I.code.SPACE],a.keyCode)){var c=b.invoke("editor.createRange").getWordRange();this.lastWordRange=c}},this.handleKeyup=function(a){d.contains([I.code.ENTER,I.code.SPACE],a.keyCode)&&this.replace()}},$=function(a){var b=a.layoutInfo.note;this.events={"summernote.change":function(){b.val(a.invoke("code"))}},this.shouldInitialize=function(){return m.isTextarea(b[0])}},_=function(b){var c=this,d=b.layoutInfo.editingArea,e=b.options;this.events={"summernote.init summernote.change":function(){c.update()},"summernote.codeview.toggled":function(){c.update()}},this.shouldInitialize=function(){return!!e.placeholder},this.initialize=function(){this.$placeholder=a('<div class="note-placeholder">'),this.$placeholder.on("click",function(){b.invoke("focus")}).text(e.placeholder).prependTo(d)},this.destroy=function(){this.$placeholder.remove()},this.update=function(){var a=!b.invoke("codeview.isActivated")&&b.invoke("editor.isEmpty");this.$placeholder.toggle(a)}},aa=function(b){var e=this,f=a.summernote.ui,g=b.layoutInfo.toolbar,h=b.options,i=h.langInfo,k=c.invertObject(h.keyMap[j.isMac?"mac":"pc"]),l=this.representShortcut=function(a){var b=k[a];return j.isMac&&(b=b.replace("CMD","⌘").replace("SHIFT","⇧")),b=b.replace("BACKSLASH","\\").replace("SLASH","/").replace("LEFTBRACKET","[").replace("RIGHTBRACKET","]")," ("+b+")"};this.initialize=function(){this.addToolbarButtons(),this.addImagePopoverButtons(),this.addLinkPopoverButtons()},this.addToolbarButtons=function(){b.memo("button.style",function(){return f.buttonGroup([f.button({className:"dropdown-toggle",contents:f.icon(h.icons.magic)+" "+f.icon(h.icons.caret,"span"),tooltip:i.style.style,data:{toggle:"dropdown"}}),f.dropdown({className:"dropdown-style",items:b.options.styleTags,template:function(a){"string"==typeof a&&(a={tag:a,title:a});var b=a.tag,c=a.title,d=a.style?' style="'+a.style+'" ':"",e=a.className?' className="'+a.className+'"':"";return"<"+b+d+e+">"+c+"</"+b+">"},click:b.createInvokeHandler("editor.formatBlock")})]).render()}),b.memo("button.bold",function(){return f.button({className:"note-btn-bold",contents:f.icon(h.icons.bold),tooltip:i.font.bold+l("bold"),click:b.createInvokeHandler("editor.bold")}).render()}),b.memo("button.italic",function(){return f.button({className:"note-btn-italic",contents:f.icon(h.icons.italic),tooltip:i.font.italic+l("italic"),click:b.createInvokeHandler("editor.italic")}).render()}),b.memo("button.underline",function(){return f.button({className:"note-btn-underline",contents:f.icon(h.icons.underline),tooltip:i.font.underline+l("underline"),click:b.createInvokeHandler("editor.underline")}).render()}),b.memo("button.clear",function(){return f.button({contents:f.icon(h.icons.eraser),tooltip:i.font.clear+l("removeFormat"),click:b.createInvokeHandler("editor.removeFormat")}).render()}),b.memo("button.strikethrough",function(){return f.button({className:"note-btn-strikethrough",contents:f.icon(h.icons.strikethrough),tooltip:i.font.strikethrough+l("strikethrough"),click:b.createInvokeHandler("editor.strikethrough")}).render()}),b.memo("button.superscript",function(){return f.button({className:"note-btn-superscript",contents:f.icon(h.icons.superscript),tooltip:i.font.superscript,click:b.createInvokeHandler("editor.superscript")}).render()}),b.memo("button.subscript",function(){return f.button({className:"note-btn-subscript",contents:f.icon(h.icons.subscript),tooltip:i.font.subscript,click:b.createInvokeHandler("editor.subscript")}).render()}),b.memo("button.fontname",function(){return f.buttonGroup([f.button({className:"dropdown-toggle",contents:'<span class="note-current-fontname"/> '+f.icon(h.icons.caret,"span"),tooltip:i.font.name,data:{toggle:"dropdown"}}),f.dropdownCheck({className:"dropdown-fontname",checkClassName:h.icons.menuCheck,items:h.fontNames.filter(function(a){return j.isFontInstalled(a)||d.contains(h.fontNamesIgnoreCheck,a)}),template:function(a){return'<span style="font-family:'+a+'">'+a+"</span>"},click:b.createInvokeHandler("editor.fontName")})]).render()}),b.memo("button.fontsize",function(){return f.buttonGroup([f.button({className:"dropdown-toggle",contents:'<span class="note-current-fontsize"/>'+f.icon(h.icons.caret,"span"),tooltip:i.font.size,data:{toggle:"dropdown"}}),f.dropdownCheck({className:"dropdown-fontsize",checkClassName:h.icons.menuCheck,items:h.fontSizes,click:b.createInvokeHandler("editor.fontSize")})]).render()}),b.memo("button.color",function(){return f.buttonGroup({className:"note-color",children:[f.button({className:"note-current-color-button",contents:f.icon(h.icons.font+" note-recent-color"),tooltip:i.color.recent,click:b.createInvokeHandler("editor.color"),callback:function(a){var b=a.find(".note-recent-color");b.css({"background-color":"yellow"}),a.data("value",{backColor:"yellow"})}}),f.button({className:"dropdown-toggle",contents:f.icon(h.icons.caret,"span"),tooltip:i.color.more,data:{toggle:"dropdown"}}),f.dropdown({items:["<li>",'<div class="btn-group">','  <div class="note-palette-title">'+i.color.background+"</div>","  <div>",'    <button type="button" class="note-color-reset btn btn-default" data-event="backColor" data-value="inherit">',i.color.transparent,"    </button>","  </div>",'  <div class="note-holder" data-event="backColor"/>',"</div>",'<div class="btn-group">','  <div class="note-palette-title">'+i.color.foreground+"</div>","  <div>",'    <button type="button" class="note-color-reset btn btn-default" data-event="removeFormat" data-value="foreColor">',i.color.resetToDefault,"    </button>","  </div>",'  <div class="note-holder" data-event="foreColor"/>',"</div>","</li>"].join(""),callback:function(b){b.find(".note-holder").each(function(){var b=a(this);b.append(f.palette({colors:h.colors,eventName:b.data("event")}).render())})},click:function(c){var d=a(c.target),e=d.data("event"),f=d.data("value");if(e&&f){var g="backColor"===e?"background-color":"color",h=d.closest(".note-color").find(".note-recent-color"),i=d.closest(".note-color").find(".note-current-color-button"),j=i.data("value");j[e]=f,h.css(g,f),i.data("value",j),b.invoke("editor."+e,f)}}})]}).render()}),b.memo("button.ol",function(){return f.button({contents:f.icon(h.icons.unorderedlist),tooltip:i.lists.unordered+l("insertUnorderedList"),click:b.createInvokeHandler("editor.insertUnorderedList")}).render()}),b.memo("button.ul",function(){return f.button({contents:f.icon(h.icons.orderedlist),tooltip:i.lists.ordered+l("insertOrderedList"),click:b.createInvokeHandler("editor.insertOrderedList")}).render()});var g=f.button({contents:f.icon(h.icons.alignLeft),tooltip:i.paragraph.left+l("justifyLeft"),click:b.createInvokeHandler("editor.justifyLeft")}),k=f.button({contents:f.icon(h.icons.alignCenter),tooltip:i.paragraph.center+l("justifyCenter"),click:b.createInvokeHandler("editor.justifyCenter")}),m=f.button({contents:f.icon(h.icons.alignRight),tooltip:i.paragraph.right+l("justifyRight"),click:b.createInvokeHandler("editor.justifyRight")}),n=f.button({contents:f.icon(h.icons.alignJustify),tooltip:i.paragraph.justify+l("justifyFull"),click:b.createInvokeHandler("editor.justifyFull")}),o=f.button({contents:f.icon(h.icons.outdent),tooltip:i.paragraph.outdent+l("outdent"),click:b.createInvokeHandler("editor.outdent")}),p=f.button({contents:f.icon(h.icons.indent),tooltip:i.paragraph.indent+l("indent"),click:b.createInvokeHandler("editor.indent")});b.memo("button.justifyLeft",c.invoke(g,"render")),b.memo("button.justifyCenter",c.invoke(k,"render")),b.memo("button.justifyRight",c.invoke(m,"render")),b.memo("button.justifyFull",c.invoke(n,"render")),b.memo("button.outdent",c.invoke(o,"render")),b.memo("button.indent",c.invoke(p,"render")),b.memo("button.paragraph",function(){return f.buttonGroup([f.button({className:"dropdown-toggle",contents:f.icon(h.icons.align)+" "+f.icon(h.icons.caret,"span"),tooltip:i.paragraph.paragraph,data:{toggle:"dropdown"}}),f.dropdown([f.buttonGroup({className:"note-align",children:[g,k,m,n]}),f.buttonGroup({className:"note-list",children:[o,p]})])]).render()}),b.memo("button.height",function(){return f.buttonGroup([f.button({className:"dropdown-toggle",contents:f.icon(h.icons.textHeight)+" "+f.icon(h.icons.caret,"span"),tooltip:i.font.height,data:{toggle:"dropdown"}}),f.dropdownCheck({items:h.lineHeights,checkClassName:h.icons.menuCheck,className:"dropdown-line-height",click:b.createInvokeHandler("editor.lineHeight")})]).render()}),b.memo("button.table",function(){return f.buttonGroup([f.button({className:"dropdown-toggle",contents:f.icon(h.icons.table)+" "+f.icon(h.icons.caret,"span"),tooltip:i.table.table,data:{toggle:"dropdown"}}),f.dropdown({className:"note-table",items:['<div class="note-dimension-picker">','  <div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"/>','  <div class="note-dimension-picker-highlighted"/>','  <div class="note-dimension-picker-unhighlighted"/>',"</div>",'<div class="note-dimension-display">1 x 1</div>'].join("")})],{callback:function(a){var c=a.find(".note-dimension-picker-mousecatcher");c.css({width:h.insertTableMaxSize.col+"em",height:h.insertTableMaxSize.row+"em"}).mousedown(b.createInvokeHandler("editor.insertTable")).on("mousemove",e.tableMoveHandler)}}).render()}),b.memo("button.link",function(){return f.button({contents:f.icon(h.icons.link),tooltip:i.link.link,click:b.createInvokeHandler("linkDialog.show")}).render()}),b.memo("button.picture",function(){return f.button({contents:f.icon(h.icons.picture),tooltip:i.image.image,click:b.createInvokeHandler("imageDialog.show")}).render()}),b.memo("button.video",function(){return f.button({contents:f.icon(h.icons.video),tooltip:i.video.video,click:b.createInvokeHandler("videoDialog.show")}).render()}),b.memo("button.hr",function(){return f.button({contents:f.icon(h.icons.minus),tooltip:i.hr.insert+l("insertHorizontalRule"),click:b.createInvokeHandler("editor.insertHorizontalRule")}).render()}),b.memo("button.fullscreen",function(){return f.button({className:"btn-fullscreen",contents:f.icon(h.icons.arrowsAlt),tooltip:i.options.fullscreen,click:b.createInvokeHandler("fullscreen.toggle")}).render()}),b.memo("button.codeview",function(){return f.button({className:"btn-codeview",contents:f.icon(h.icons.code),tooltip:i.options.codeview,click:b.createInvokeHandler("codeview.toggle")}).render()}),b.memo("button.redo",function(){return f.button({contents:f.icon(h.icons.redo),tooltip:i.history.redo+l("redo"),click:b.createInvokeHandler("editor.redo")}).render()}),b.memo("button.undo",function(){return f.button({contents:f.icon(h.icons.undo),tooltip:i.history.undo+l("undo"),click:b.createInvokeHandler("editor.undo")}).render()}),b.memo("button.help",function(){return f.button({contents:f.icon(h.icons.question),tooltip:i.options.help,click:b.createInvokeHandler("helpDialog.show")}).render()})},this.addImagePopoverButtons=function(){b.memo("button.imageSize100",function(){return f.button({contents:'<span class="note-fontsize-10">100%</span>',tooltip:i.image.resizeFull,click:b.createInvokeHandler("editor.resize","1")}).render()}),b.memo("button.imageSize50",function(){return f.button({contents:'<span class="note-fontsize-10">50%</span>',tooltip:i.image.resizeHalf,click:b.createInvokeHandler("editor.resize","0.5")}).render()}),b.memo("button.imageSize25",function(){return f.button({contents:'<span class="note-fontsize-10">25%</span>',tooltip:i.image.resizeQuarter,click:b.createInvokeHandler("editor.resize","0.25")}).render()}),b.memo("button.floatLeft",function(){return f.button({contents:f.icon(h.icons.alignLeft),tooltip:i.image.floatLeft,click:b.createInvokeHandler("editor.floatMe","left")}).render()}),b.memo("button.floatRight",function(){return f.button({contents:f.icon(h.icons.alignRight),
	tooltip:i.image.floatRight,click:b.createInvokeHandler("editor.floatMe","right")}).render()}),b.memo("button.floatNone",function(){return f.button({contents:f.icon(h.icons.alignJustify),tooltip:i.image.floatNone,click:b.createInvokeHandler("editor.floatMe","none")}).render()}),b.memo("button.removeMedia",function(){return f.button({contents:f.icon(h.icons.trash),tooltip:i.image.remove,click:b.createInvokeHandler("editor.removeMedia")}).render()})},this.addLinkPopoverButtons=function(){b.memo("button.linkDialogShow",function(){return f.button({contents:f.icon(h.icons.link),tooltip:i.link.edit,click:b.createInvokeHandler("linkDialog.show")}).render()}),b.memo("button.unlink",function(){return f.button({contents:f.icon(h.icons.unlink),tooltip:i.link.unlink,click:b.createInvokeHandler("editor.unlink")}).render()})},this.build=function(a,c){for(var d=0,e=c.length;e>d;d++){for(var g=c[d],h=g[0],i=g[1],j=f.buttonGroup({className:"note-"+h}).render(),k=0,l=i.length;l>k;k++){var m=b.memo("button."+i[k]);m&&j.append("function"==typeof m?m():m)}j.appendTo(a)}},this.updateCurrentStyle=function(){var c=b.invoke("editor.currentStyle");if(this.updateBtnStates({".note-btn-bold":function(){return"bold"===c["font-bold"]},".note-btn-italic":function(){return"italic"===c["font-italic"]},".note-btn-underline":function(){return"underline"===c["font-underline"]},".note-btn-subscript":function(){return"subscript"===c["font-subscript"]},".note-btn-superscript":function(){return"superscript"===c["font-superscript"]},".note-btn-strikethrough":function(){return"strikethrough"===c["font-strikethrough"]}}),c["font-family"]){var e=c["font-family"].split(",").map(function(a){return a.replace(/[\'\"]/g,"").replace(/\s+$/,"").replace(/^\s+/,"")}),f=d.find(e,function(a){return j.isFontInstalled(a)||d.contains(h.fontNamesIgnoreCheck,a)});g.find(".dropdown-fontname li a").each(function(){var b=a(this).data("value")+""==f+"";this.className=b?"checked":""}),g.find(".note-current-fontname").text(f)}if(c["font-size"]){var i=c["font-size"];g.find(".dropdown-fontsize li a").each(function(){var b=a(this).data("value")+""==i+"";this.className=b?"checked":""}),g.find(".note-current-fontsize").text(i)}if(c["line-height"]){var k=c["line-height"];g.find(".dropdown-line-height li a").each(function(){var b=a(this).data("value")+""==k+"";this.className=b?"checked":""})}},this.updateBtnStates=function(b){a.each(b,function(a,b){f.toggleBtnActive(g.find(a),b())})},this.tableMoveHandler=function(b){var c,d=18,e=a(b.target.parentNode),f=e.next(),g=e.find(".note-dimension-picker-mousecatcher"),i=e.find(".note-dimension-picker-highlighted"),j=e.find(".note-dimension-picker-unhighlighted");if(void 0===b.offsetX){var k=a(b.target).offset();c={x:b.pageX-k.left,y:b.pageY-k.top}}else c={x:b.offsetX,y:b.offsetY};var l={c:Math.ceil(c.x/d)||1,r:Math.ceil(c.y/d)||1};i.css({width:l.c+"em",height:l.r+"em"}),g.data("value",l.c+"x"+l.r),3<l.c&&l.c<h.insertTableMaxSize.col&&j.css({width:l.c+1+"em"}),3<l.r&&l.r<h.insertTableMaxSize.row&&j.css({height:l.r+1+"em"}),f.html(l.c+" x "+l.r)}},ba=function(b){var c=a.summernote.ui,d=b.layoutInfo.note,e=b.layoutInfo.toolbar,f=b.options;this.shouldInitialize=function(){return!f.airMode},this.initialize=function(){f.toolbar=f.toolbar||[],f.toolbar.length?b.invoke("buttons.build",e,f.toolbar):e.hide(),f.toolbarContainer&&e.appendTo(f.toolbarContainer),d.on("summernote.keyup summernote.mouseup summernote.change",function(){b.invoke("buttons.updateCurrentStyle")}),b.invoke("buttons.updateCurrentStyle")},this.destroy=function(){e.children().remove()},this.updateFullscreen=function(a){c.toggleBtnActive(e.find(".btn-fullscreen"),a)},this.updateCodeview=function(a){c.toggleBtnActive(e.find(".btn-codeview"),a),a?this.deactivate():this.activate()},this.activate=function(a){var b=e.find("button");a||(b=b.not(".btn-codeview")),c.toggleBtn(b,!0)},this.deactivate=function(a){var b=e.find("button");a||(b=b.not(".btn-codeview")),c.toggleBtn(b,!1)}},ca=function(b){var c=this,d=a.summernote.ui,e=b.layoutInfo.editor,f=b.options,g=f.langInfo;this.initialize=function(){var b=f.dialogsInBody?a(document.body):e,c='<div class="form-group"><label>'+g.link.textToDisplay+'</label><input class="note-link-text form-control" type="text" /></div><div class="form-group"><label>'+g.link.url+'</label><input class="note-link-url form-control" type="text" value="http://" /></div>'+(f.disableLinkTarget?"":'<div class="checkbox"><label><input type="checkbox" checked> '+g.link.openInNewWindow+"</label></div>"),h='<button href="#" class="btn btn-primary note-link-btn disabled" disabled>'+g.link.insert+"</button>";this.$dialog=d.dialog({className:"link-dialog",title:g.link.insert,fade:f.dialogsFade,body:c,footer:h}).render().appendTo(b)},this.destroy=function(){d.hideDialog(this.$dialog),this.$dialog.remove()},this.bindEnterKey=function(a,b){a.on("keypress",function(a){a.keyCode===I.code.ENTER&&b.trigger("click")})},this.showLinkDialog=function(e){return a.Deferred(function(a){var f=c.$dialog.find(".note-link-text"),g=c.$dialog.find(".note-link-url"),h=c.$dialog.find(".note-link-btn"),i=c.$dialog.find("input[type=checkbox]");d.onDialogShown(c.$dialog,function(){b.triggerEvent("dialog.shown"),f.val(e.text),f.on("input",function(){d.toggleBtn(h,f.val()&&g.val()),e.text=f.val()}),e.url||(e.url=e.text||"http://",d.toggleBtn(h,e.text)),g.on("input",function(){d.toggleBtn(h,f.val()&&g.val()),e.text||f.val(g.val())}).val(e.url).trigger("focus"),c.bindEnterKey(g,h),c.bindEnterKey(f,h),i.prop("checked",e.isNewWindow),h.one("click",function(b){b.preventDefault(),a.resolve({range:e.range,url:g.val(),text:f.val(),isNewWindow:i.is(":checked")}),c.$dialog.modal("hide")})}),d.onDialogHidden(c.$dialog,function(){f.off("input keypress"),g.off("input keypress"),h.off("click"),"pending"===a.state()&&a.reject()}),d.showDialog(c.$dialog)}).promise()},this.show=function(){var a=b.invoke("editor.getLinkInfo");b.invoke("editor.saveRange"),this.showLinkDialog(a).then(function(a){b.invoke("editor.restoreRange"),b.invoke("editor.createLink",a)}).fail(function(){b.invoke("editor.restoreRange")})},b.memo("help.linkDialog.show",f.langInfo.help["linkDialog.show"])},da=function(b){var c=this,e=a.summernote.ui,f=b.options;this.events={"summernote.keyup summernote.mouseup summernote.change summernote.scroll":function(){c.update()},"summernote.dialog.shown":function(){c.hide()}},this.shouldInitialize=function(){return!d.isEmpty(f.popover.link)},this.initialize=function(){this.$popover=e.popover({className:"note-link-popover",callback:function(a){var b=a.find(".popover-content");b.prepend('<span><a target="_blank"></a>&nbsp;</span>')}}).render().appendTo("body");var a=this.$popover.find(".popover-content");b.invoke("buttons.build",a,f.popover.link)},this.destroy=function(){this.$popover.remove()},this.update=function(){if(!b.invoke("editor.hasFocus"))return void this.hide();var c=b.invoke("editor.createRange");if(c.isCollapsed()&&c.isOnAnchor()){var d=m.ancestor(c.sc,m.isAnchor),e=a(d).attr("href");this.$popover.find("a").attr("href",e).html(e);var f=m.posFromPlaceholder(d);this.$popover.css({display:"block",left:f.left,top:f.top})}else this.hide()},this.hide=function(){this.$popover.hide()}},ea=function(b){var c=this,d=a.summernote.ui,e=b.layoutInfo.editor,f=b.options,g=f.langInfo;this.initialize=function(){var b=f.dialogsInBody?a(document.body):e,c="";if(f.maximumImageFileSize){var h=Math.floor(Math.log(f.maximumImageFileSize)/Math.log(1024)),i=1*(f.maximumImageFileSize/Math.pow(1024,h)).toFixed(2)+" "+" KMGTP"[h]+"B";c="<small>"+g.image.maximumFileSize+" : "+i+"</small>"}var j='<div class="form-group note-group-select-from-files"><label>'+g.image.selectFromFiles+'</label><input class="note-image-input form-control" type="file" name="files" accept="image/*" multiple="multiple" />'+c+'</div><div class="form-group" style="overflow:auto;"><label>'+g.image.url+'</label><input class="note-image-url form-control col-md-12" type="text" /></div>',k='<button href="#" class="btn btn-primary note-image-btn disabled" disabled>'+g.image.insert+"</button>";this.$dialog=d.dialog({title:g.image.insert,fade:f.dialogsFade,body:j,footer:k}).render().appendTo(b)},this.destroy=function(){d.hideDialog(this.$dialog),this.$dialog.remove()},this.bindEnterKey=function(a,b){a.on("keypress",function(a){a.keyCode===I.code.ENTER&&b.trigger("click")})},this.show=function(){b.invoke("editor.saveRange"),this.showImageDialog().then(function(a){d.hideDialog(c.$dialog),b.invoke("editor.restoreRange"),"string"==typeof a?b.invoke("editor.insertImage",a):b.invoke("editor.insertImagesOrCallback",a)}).fail(function(){b.invoke("editor.restoreRange")})},this.showImageDialog=function(){return a.Deferred(function(a){var e=c.$dialog.find(".note-image-input"),f=c.$dialog.find(".note-image-url"),g=c.$dialog.find(".note-image-btn");d.onDialogShown(c.$dialog,function(){b.triggerEvent("dialog.shown"),e.replaceWith(e.clone().on("change",function(){a.resolve(this.files||this.value)}).val("")),g.click(function(b){b.preventDefault(),a.resolve(f.val())}),f.on("keyup paste",function(){var a=f.val();d.toggleBtn(g,a)}).val("").trigger("focus"),c.bindEnterKey(f,g)}),d.onDialogHidden(c.$dialog,function(){e.off("change"),f.off("keyup paste keypress"),g.off("click"),"pending"===a.state()&&a.reject()}),d.showDialog(c.$dialog)})}},fa=function(b){var c=a.summernote.ui,e=b.options;this.shouldInitialize=function(){return!d.isEmpty(e.popover.image)},this.initialize=function(){this.$popover=c.popover({className:"note-image-popover"}).render().appendTo("body");var a=this.$popover.find(".popover-content");b.invoke("buttons.build",a,e.popover.image)},this.destroy=function(){this.$popover.remove()},this.update=function(a){if(m.isImg(a)){var b=m.posFromPlaceholder(a);this.$popover.css({display:"block",left:b.left,top:b.top})}else this.hide()},this.hide=function(){this.$popover.hide()}},ga=function(b){var c=this,d=a.summernote.ui,e=b.layoutInfo.editor,f=b.options,g=f.langInfo;this.initialize=function(){var b=f.dialogsInBody?a(document.body):e,c='<div class="form-group row-fluid"><label>'+g.video.url+' <small class="text-muted">'+g.video.providers+'</small></label><input class="note-video-url form-control span12" type="text" /></div>',h='<button href="#" class="btn btn-primary note-video-btn disabled" disabled>'+g.video.insert+"</button>";this.$dialog=d.dialog({title:g.video.insert,fade:f.dialogsFade,body:c,footer:h}).render().appendTo(b)},this.destroy=function(){d.hideDialog(this.$dialog),this.$dialog.remove()},this.bindEnterKey=function(a,b){a.on("keypress",function(a){a.keyCode===I.code.ENTER&&b.trigger("click")})},this.createVideoNode=function(b){var c,d=/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,e=b.match(d),f=/\/\/instagram.com\/p\/(.[a-zA-Z0-9_-]*)/,g=b.match(f),h=/\/\/vine.co\/v\/(.[a-zA-Z0-9]*)/,i=b.match(h),j=/\/\/(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/,k=b.match(j),l=/.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/,m=b.match(l),n=/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/,o=b.match(n),p=/^.+.(mp4|m4v)$/,q=b.match(p),r=/^.+.(ogg|ogv)$/,s=b.match(r),t=/^.+.(webm)$/,u=b.match(t);if(e&&11===e[1].length){var v=e[1];c=a("<iframe>").attr("frameborder",0).attr("src","//www.youtube.com/embed/"+v).attr("width","640").attr("height","360")}else if(g&&g[0].length)c=a("<iframe>").attr("frameborder",0).attr("src",g[0]+"/embed/").attr("width","612").attr("height","710").attr("scrolling","no").attr("allowtransparency","true");else if(i&&i[0].length)c=a("<iframe>").attr("frameborder",0).attr("src",i[0]+"/embed/simple").attr("width","600").attr("height","600").attr("class","vine-embed");else if(k&&k[3].length)c=a("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder",0).attr("src","//player.vimeo.com/video/"+k[3]).attr("width","640").attr("height","360");else if(m&&m[2].length)c=a("<iframe>").attr("frameborder",0).attr("src","//www.dailymotion.com/embed/video/"+m[2]).attr("width","640").attr("height","360");else if(o&&o[1].length)c=a("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder",0).attr("height","498").attr("width","510").attr("src","//player.youku.com/embed/"+o[1]);else{if(!(q||s||u))return!1;c=a("<video controls>").attr("src",b).attr("width","640").attr("height","360")}return c.addClass("note-video-clip"),c[0]},this.show=function(){var a=b.invoke("editor.getSelectedText");b.invoke("editor.saveRange"),this.showVideoDialog(a).then(function(a){d.hideDialog(c.$dialog),b.invoke("editor.restoreRange");var e=c.createVideoNode(a);e&&b.invoke("editor.insertNode",e)}).fail(function(){b.invoke("editor.restoreRange")})},this.showVideoDialog=function(e){return a.Deferred(function(a){var f=c.$dialog.find(".note-video-url"),g=c.$dialog.find(".note-video-btn");d.onDialogShown(c.$dialog,function(){b.triggerEvent("dialog.shown"),f.val(e).on("input",function(){d.toggleBtn(g,f.val())}).trigger("focus"),g.click(function(b){b.preventDefault(),a.resolve(f.val())}),c.bindEnterKey(f,g)}),d.onDialogHidden(c.$dialog,function(){f.off("input"),g.off("click"),"pending"===a.state()&&a.reject()}),d.showDialog(c.$dialog)})}},ha=function(b){var c=this,d=a.summernote.ui,e=b.layoutInfo.editor,f=b.options,g=f.langInfo;this.createShortCutList=function(){var c=f.keyMap[j.isMac?"mac":"pc"];return Object.keys(c).map(function(d){var e=c[d],f=a('<div><div class="help-list-item"/></div>');return f.append(a("<label><kbd>"+d+"</kdb></label>").css({width:180,"margin-right":10})).append(a("<span/>").html(b.memo("help."+e)||e)),f.html()}).join("")},this.initialize=function(){var b=f.dialogsInBody?a(document.body):e,c=['<p class="text-center">','<a href="//summernote.org/" target="_blank">Summernote 0.7.3</a> · ','<a href="//github.com/summernote/summernote" target="_blank">Project</a> · ','<a href="//github.com/summernote/summernote/issues" target="_blank">Issues</a>',"</p>"].join("");this.$dialog=d.dialog({title:g.options.help,fade:f.dialogsFade,body:this.createShortCutList(),footer:c,callback:function(a){a.find(".modal-body").css({"max-height":300,overflow:"scroll"})}}).render().appendTo(b)},this.destroy=function(){d.hideDialog(this.$dialog),this.$dialog.remove()},this.showHelpDialog=function(){return a.Deferred(function(a){d.onDialogShown(c.$dialog,function(){b.triggerEvent("dialog.shown"),a.resolve()}),d.showDialog(c.$dialog)}).promise()},this.show=function(){b.invoke("editor.saveRange"),this.showHelpDialog().then(function(){b.invoke("editor.restoreRange")})}},ia=function(b){var e=this,f=a.summernote.ui,g=b.options,h=20;this.events={"summernote.keyup summernote.mouseup summernote.scroll":function(){e.update()},"summernote.change summernote.dialog.shown":function(){e.hide()},"summernote.focusout":function(a,b){j.isFF||b.relatedTarget&&m.ancestor(b.relatedTarget,c.eq(e.$popover[0]))||e.hide()}},this.shouldInitialize=function(){return g.airMode&&!d.isEmpty(g.popover.air)},this.initialize=function(){this.$popover=f.popover({className:"note-air-popover"}).render().appendTo("body");var a=this.$popover.find(".popover-content");b.invoke("buttons.build",a,g.popover.air)},this.destroy=function(){this.$popover.remove()},this.update=function(){var a=b.invoke("editor.currentStyle");if(a.range&&!a.range.isCollapsed()){var e=d.last(a.range.getClientRects());if(e){var f=c.rect2bnd(e);this.$popover.css({display:"block",left:Math.max(f.left+f.width/2,0)-h,top:f.top+f.height})}}else this.hide()},this.hide=function(){this.$popover.hide()}},ja=function(b){var e=this,f=a.summernote.ui,g=5,h=b.options.hint||[],i=b.options.hintDirection||"bottom",j=a.isArray(h)?h:[h];this.events={"summernote.keyup":function(a,b){b.isDefaultPrevented()||e.handleKeyup(b)},"summernote.keydown":function(a,b){e.handleKeydown(b)},"summernote.dialog.shown":function(){e.hide()}},this.shouldInitialize=function(){return j.length>0},this.initialize=function(){this.lastWordRange=null,this.$popover=f.popover({className:"note-hint-popover",hideArrow:!0,direction:""}).render().appendTo("body"),this.$popover.hide(),this.$content=this.$popover.find(".popover-content"),this.$content.on("click",".note-hint-item",function(){e.$content.find(".active").removeClass("active"),a(this).addClass("active"),e.replace()})},this.destroy=function(){this.$popover.remove()},this.selectItem=function(a){this.$content.find(".active").removeClass("active"),a.addClass("active"),this.$content[0].scrollTop=a[0].offsetTop-this.$content.innerHeight()/2},this.moveDown=function(){var a=this.$content.find(".note-hint-item.active"),b=a.next();if(b.length)this.selectItem(b);else{var c=a.parent().next();c.length||(c=this.$content.find(".note-hint-group").first()),this.selectItem(c.find(".note-hint-item").first())}},this.moveUp=function(){var a=this.$content.find(".note-hint-item.active"),b=a.prev();if(b.length)this.selectItem(b);else{var c=a.parent().prev();c.length||(c=this.$content.find(".note-hint-group").last()),this.selectItem(c.find(".note-hint-item").last())}},this.replace=function(){var a=this.$content.find(".note-hint-item.active");if(a.length){var c=this.nodeFromItem(a);this.lastWordRange.insertNode(c),J.createFromNode(c).collapse().select(),this.lastWordRange=null,this.hide(),b.invoke("editor.focus")}},this.nodeFromItem=function(a){var b=j[a.data("index")],c=a.data("item"),d=b.content?b.content(c):c;return"string"==typeof d&&(d=m.createText(d)),d},this.createItemTemplates=function(b,c){var d=j[b];return c.map(function(c,e){var f=a('<div class="note-hint-item"/>');return f.append(d.template?d.template(c):c+""),f.data({index:b,item:c}),0===b&&0===e&&f.addClass("active"),f})},this.handleKeydown=function(a){this.$popover.is(":visible")&&(a.keyCode===I.code.ENTER?(a.preventDefault(),this.replace()):a.keyCode===I.code.UP?(a.preventDefault(),this.moveUp()):a.keyCode===I.code.DOWN&&(a.preventDefault(),this.moveDown()))},this.searchKeyword=function(a,b,c){var d=j[a];if(d&&d.match.test(b)&&d.search){var e=d.match.exec(b);d.search(e[1],c)}else c()},this.createGroup=function(b,c){var d=a('<div class="note-hint-group note-hint-group-'+b+'"/>');return this.searchKeyword(b,c,function(a){a=a||[],a.length&&(d.html(e.createItemTemplates(b,a)),e.show())}),d},this.handleKeyup=function(a){if(d.contains([I.code.ENTER,I.code.UP,I.code.DOWN],a.keyCode)){if(a.keyCode===I.code.ENTER&&this.$popover.is(":visible"))return}else{var f=b.invoke("editor.createRange").getWordRange(),h=f.toString();if(j.length&&h){this.$content.empty();var k=c.rect2bnd(d.last(f.getClientRects()));k&&(this.$popover.hide(),this.lastWordRange=f,j.forEach(function(a,b){a.match.test(h)&&e.createGroup(b,h).appendTo(e.$content)}),"top"===i?this.$popover.css({left:k.left,top:k.top-this.$popover.outerHeight()-g}):this.$popover.css({left:k.left,top:k.top+k.height+g}))}else this.hide()}},this.show=function(){this.$popover.show()},this.hide=function(){this.$popover.hide()}};a.summernote=a.extend(a.summernote,{version:"0.7.3",ui:G,plugins:{},options:{modules:{editor:R,clipboard:S,dropzone:T,codeview:U,statusbar:W,fullscreen:X,handle:Y,hintPopover:ja,autoLink:Z,autoSync:$,placeholder:_,buttons:aa,toolbar:ba,linkDialog:ca,linkPopover:da,imageDialog:ea,imagePopover:fa,videoDialog:ga,helpDialog:ha,airPopover:ia},buttons:{},lang:"en-US",toolbar:[["style",["style"]],["font",["bold","underline","clear"]],["fontname",["fontname"]],["color",["color"]],["para",["ul","ol","paragraph"]],["table",["table"]],["insert",["link","picture","video"]],["view",["fullscreen","codeview","help"]]],popover:{image:[["imagesize",["imageSize100","imageSize50","imageSize25"]],["float",["floatLeft","floatRight","floatNone"]],["remove",["removeMedia"]]],link:[["link",["linkDialogShow","unlink"]]],air:[["color",["color"]],["font",["bold","underline","clear"]],["para",["ul","paragraph"]],["table",["table"]],["insert",["link","picture"]]]},airMode:!1,width:null,height:null,focus:!1,tabSize:4,styleWithSpan:!0,shortcuts:!0,textareaAutoSync:!0,direction:null,styleTags:["p","blockquote","pre","h1","h2","h3","h4","h5","h6"],fontNames:["Arial","Arial Black","Comic Sans MS","Courier New","Helvetica Neue","Helvetica","Impact","Lucida Grande","Tahoma","Times New Roman","Verdana"],fontSizes:["8","9","10","11","12","14","18","24","36"],colors:[["#000000","#424242","#636363","#9C9C94","#CEC6CE","#EFEFEF","#F7F7F7","#FFFFFF"],["#FF0000","#FF9C00","#FFFF00","#00FF00","#00FFFF","#0000FF","#9C00FF","#FF00FF"],["#F7C6CE","#FFE7CE","#FFEFC6","#D6EFD6","#CEDEE7","#CEE7F7","#D6D6E7","#E7D6DE"],["#E79C9C","#FFC69C","#FFE79C","#B5D6A5","#A5C6CE","#9CC6EF","#B5A5D6","#D6A5BD"],["#E76363","#F7AD6B","#FFD663","#94BD7B","#73A5AD","#6BADDE","#8C7BC6","#C67BA5"],["#CE0000","#E79439","#EFC631","#6BA54A","#4A7B8C","#3984C6","#634AA5","#A54A7B"],["#9C0000","#B56308","#BD9400","#397B21","#104A5A","#085294","#311873","#731842"],["#630000","#7B3900","#846300","#295218","#083139","#003163","#21104A","#4A1031"]],lineHeights:["1.0","1.2","1.4","1.5","1.6","1.8","2.0","3.0"],tableClassName:"table table-bordered",insertTableMaxSize:{col:10,row:10},dialogsInBody:!1,dialogsFade:!1,maximumImageFileSize:null,callbacks:{onInit:null,onFocus:null,onBlur:null,onEnter:null,onKeyup:null,onKeydown:null,onSubmit:null,onImageUpload:null,onImageUploadError:null},codemirror:{mode:"text/html",htmlMode:!0,lineNumbers:!0},keyMap:{pc:{ENTER:"insertParagraph","CTRL+Z":"undo","CTRL+Y":"redo",TAB:"tab","SHIFT+TAB":"untab","CTRL+B":"bold","CTRL+I":"italic","CTRL+U":"underline","CTRL+SHIFT+S":"strikethrough","CTRL+BACKSLASH":"removeFormat","CTRL+SHIFT+L":"justifyLeft","CTRL+SHIFT+E":"justifyCenter","CTRL+SHIFT+R":"justifyRight","CTRL+SHIFT+J":"justifyFull","CTRL+SHIFT+NUM7":"insertUnorderedList","CTRL+SHIFT+NUM8":"insertOrderedList","CTRL+LEFTBRACKET":"outdent","CTRL+RIGHTBRACKET":"indent","CTRL+NUM0":"formatPara","CTRL+NUM1":"formatH1","CTRL+NUM2":"formatH2","CTRL+NUM3":"formatH3","CTRL+NUM4":"formatH4","CTRL+NUM5":"formatH5","CTRL+NUM6":"formatH6","CTRL+ENTER":"insertHorizontalRule","CTRL+K":"linkDialog.show"},mac:{ENTER:"insertParagraph","CMD+Z":"undo","CMD+SHIFT+Z":"redo",TAB:"tab","SHIFT+TAB":"untab","CMD+B":"bold","CMD+I":"italic","CMD+U":"underline","CMD+SHIFT+S":"strikethrough","CMD+BACKSLASH":"removeFormat","CMD+SHIFT+L":"justifyLeft","CMD+SHIFT+E":"justifyCenter","CMD+SHIFT+R":"justifyRight","CMD+SHIFT+J":"justifyFull","CMD+SHIFT+NUM7":"insertUnorderedList","CMD+SHIFT+NUM8":"insertOrderedList","CMD+LEFTBRACKET":"outdent","CMD+RIGHTBRACKET":"indent","CMD+NUM0":"formatPara","CMD+NUM1":"formatH1","CMD+NUM2":"formatH2","CMD+NUM3":"formatH3","CMD+NUM4":"formatH4","CMD+NUM5":"formatH5","CMD+NUM6":"formatH6","CMD+ENTER":"insertHorizontalRule","CMD+K":"linkDialog.show"}},icons:{align:"fa fa-align-left",alignCenter:"fa fa-align-center",alignJustify:"fa fa-align-justify",alignLeft:"fa fa-align-left",alignRight:"fa fa-align-right",indent:"fa fa-indent",outdent:"fa fa-outdent",arrowsAlt:"fa fa-arrows-alt",bold:"fa fa-bold",caret:"caret",circle:"fa fa-circle",close:"fa fa-close",code:"fa fa-code",eraser:"fa fa-eraser",font:"fa fa-font",frame:"fa fa-frame",italic:"fa fa-italic",link:"fa fa-link",unlink:"fa fa-chain-broken",magic:"fa fa-magic",menuCheck:"fa fa-check",minus:"fa fa-minus",orderedlist:"fa fa-list-ol",pencil:"fa fa-pencil",picture:"fa fa-picture-o",question:"fa fa-question",redo:"fa fa-repeat",square:"fa fa-square",strikethrough:"fa fa-strikethrough",subscript:"fa fa-subscript",superscript:"fa fa-superscript",table:"fa fa-table",textHeight:"fa fa-text-height",trash:"fa fa-trash",underline:"fa fa-underline",undo:"fa fa-undo",unorderedlist:"fa fa-list-ul",video:"fa fa-youtube-play"}}})});

/***/ },
/* 26 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	// This is CodeMirror (http://codemirror.net), a code editor
	// implemented in JavaScript on top of the browser's DOM.
	//
	// You can find some technical background for some of the code below
	// at http://marijnhaverbeke.nl/blog/#cm-internals .

	(function(mod) {
	  if (true) // CommonJS
	    module.exports = mod();
	  else if (typeof define == "function" && define.amd) // AMD
	    return define([], mod);
	  else // Plain browser env
	    (this || window).CodeMirror = mod();
	})(function() {
	  "use strict";

	  // BROWSER SNIFFING

	  // Kludges for bugs and behavior differences that can't be feature
	  // detected are enabled based on userAgent etc sniffing.
	  var userAgent = navigator.userAgent;
	  var platform = navigator.platform;

	  var gecko = /gecko\/\d/i.test(userAgent);
	  var ie_upto10 = /MSIE \d/.test(userAgent);
	  var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
	  var ie = ie_upto10 || ie_11up;
	  var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : ie_11up[1]);
	  var webkit = /WebKit\//.test(userAgent);
	  var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
	  var chrome = /Chrome\//.test(userAgent);
	  var presto = /Opera\//.test(userAgent);
	  var safari = /Apple Computer/.test(navigator.vendor);
	  var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
	  var phantom = /PhantomJS/.test(userAgent);

	  var ios = /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent);
	  // This is woefully incomplete. Suggestions for alternative methods welcome.
	  var mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
	  var mac = ios || /Mac/.test(platform);
	  var chromeOS = /\bCrOS\b/.test(userAgent);
	  var windows = /win/i.test(platform);

	  var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
	  if (presto_version) presto_version = Number(presto_version[1]);
	  if (presto_version && presto_version >= 15) { presto = false; webkit = true; }
	  // Some browsers use the wrong event properties to signal cmd/ctrl on OS X
	  var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
	  var captureRightClick = gecko || (ie && ie_version >= 9);

	  // Optimize some code when these features are not used.
	  var sawReadOnlySpans = false, sawCollapsedSpans = false;

	  // EDITOR CONSTRUCTOR

	  // A CodeMirror instance represents an editor. This is the object
	  // that user code is usually dealing with.

	  function CodeMirror(place, options) {
	    if (!(this instanceof CodeMirror)) return new CodeMirror(place, options);

	    this.options = options = options ? copyObj(options) : {};
	    // Determine effective options based on given values and defaults.
	    copyObj(defaults, options, false);
	    setGuttersForLineNumbers(options);

	    var doc = options.value;
	    if (typeof doc == "string") doc = new Doc(doc, options.mode, null, options.lineSeparator);
	    this.doc = doc;

	    var input = new CodeMirror.inputStyles[options.inputStyle](this);
	    var display = this.display = new Display(place, doc, input);
	    display.wrapper.CodeMirror = this;
	    updateGutters(this);
	    themeChanged(this);
	    if (options.lineWrapping)
	      this.display.wrapper.className += " CodeMirror-wrap";
	    if (options.autofocus && !mobile) display.input.focus();
	    initScrollbars(this);

	    this.state = {
	      keyMaps: [],  // stores maps added by addKeyMap
	      overlays: [], // highlighting overlays, as added by addOverlay
	      modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
	      overwrite: false,
	      delayingBlurEvent: false,
	      focused: false,
	      suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
	      pasteIncoming: false, cutIncoming: false, // help recognize paste/cut edits in input.poll
	      selectingText: false,
	      draggingText: false,
	      highlight: new Delayed(), // stores highlight worker timeout
	      keySeq: null,  // Unfinished key sequence
	      specialChars: null
	    };

	    var cm = this;

	    // Override magic textarea content restore that IE sometimes does
	    // on our hidden textarea on reload
	    if (ie && ie_version < 11) setTimeout(function() { cm.display.input.reset(true); }, 20);

	    registerEventHandlers(this);
	    ensureGlobalHandlers();

	    startOperation(this);
	    this.curOp.forceUpdate = true;
	    attachDoc(this, doc);

	    if ((options.autofocus && !mobile) || cm.hasFocus())
	      setTimeout(bind(onFocus, this), 20);
	    else
	      onBlur(this);

	    for (var opt in optionHandlers) if (optionHandlers.hasOwnProperty(opt))
	      optionHandlers[opt](this, options[opt], Init);
	    maybeUpdateLineNumberWidth(this);
	    if (options.finishInit) options.finishInit(this);
	    for (var i = 0; i < initHooks.length; ++i) initHooks[i](this);
	    endOperation(this);
	    // Suppress optimizelegibility in Webkit, since it breaks text
	    // measuring on line wrapping boundaries.
	    if (webkit && options.lineWrapping &&
	        getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
	      display.lineDiv.style.textRendering = "auto";
	  }

	  // DISPLAY CONSTRUCTOR

	  // The display handles the DOM integration, both for input reading
	  // and content drawing. It holds references to DOM nodes and
	  // display-related state.

	  function Display(place, doc, input) {
	    var d = this;
	    this.input = input;

	    // Covers bottom-right square when both scrollbars are present.
	    d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
	    d.scrollbarFiller.setAttribute("cm-not-content", "true");
	    // Covers bottom of gutter when coverGutterNextToScrollbar is on
	    // and h scrollbar is present.
	    d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
	    d.gutterFiller.setAttribute("cm-not-content", "true");
	    // Will contain the actual code, positioned to cover the viewport.
	    d.lineDiv = elt("div", null, "CodeMirror-code");
	    // Elements are added to these to represent selection and cursors.
	    d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
	    d.cursorDiv = elt("div", null, "CodeMirror-cursors");
	    // A visibility: hidden element used to find the size of things.
	    d.measure = elt("div", null, "CodeMirror-measure");
	    // When lines outside of the viewport are measured, they are drawn in this.
	    d.lineMeasure = elt("div", null, "CodeMirror-measure");
	    // Wraps everything that needs to exist inside the vertically-padded coordinate system
	    d.lineSpace = elt("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
	                      null, "position: relative; outline: none");
	    // Moved around its parent to cover visible view.
	    d.mover = elt("div", [elt("div", [d.lineSpace], "CodeMirror-lines")], null, "position: relative");
	    // Set to the height of the document, allowing scrolling.
	    d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
	    d.sizerWidth = null;
	    // Behavior of elts with overflow: auto and padding is
	    // inconsistent across browsers. This is used to ensure the
	    // scrollable area is big enough.
	    d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
	    // Will contain the gutters, if any.
	    d.gutters = elt("div", null, "CodeMirror-gutters");
	    d.lineGutter = null;
	    // Actual scrollable element.
	    d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
	    d.scroller.setAttribute("tabIndex", "-1");
	    // The element in which the editor lives.
	    d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");

	    // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
	    if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0; }
	    if (!webkit && !(gecko && mobile)) d.scroller.draggable = true;

	    if (place) {
	      if (place.appendChild) place.appendChild(d.wrapper);
	      else place(d.wrapper);
	    }

	    // Current rendered range (may be bigger than the view window).
	    d.viewFrom = d.viewTo = doc.first;
	    d.reportedViewFrom = d.reportedViewTo = doc.first;
	    // Information about the rendered lines.
	    d.view = [];
	    d.renderedView = null;
	    // Holds info about a single rendered line when it was rendered
	    // for measurement, while not in view.
	    d.externalMeasured = null;
	    // Empty space (in pixels) above the view
	    d.viewOffset = 0;
	    d.lastWrapHeight = d.lastWrapWidth = 0;
	    d.updateLineNumbers = null;

	    d.nativeBarWidth = d.barHeight = d.barWidth = 0;
	    d.scrollbarsClipped = false;

	    // Used to only resize the line number gutter when necessary (when
	    // the amount of lines crosses a boundary that makes its width change)
	    d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
	    // Set to true when a non-horizontal-scrolling line widget is
	    // added. As an optimization, line widget aligning is skipped when
	    // this is false.
	    d.alignWidgets = false;

	    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;

	    // Tracks the maximum line length so that the horizontal scrollbar
	    // can be kept static when scrolling.
	    d.maxLine = null;
	    d.maxLineLength = 0;
	    d.maxLineChanged = false;

	    // Used for measuring wheel scrolling granularity
	    d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;

	    // True when shift is held down.
	    d.shift = false;

	    // Used to track whether anything happened since the context menu
	    // was opened.
	    d.selForContextMenu = null;

	    d.activeTouch = null;

	    input.init(d);
	  }

	  // STATE UPDATES

	  // Used to get the editor into a consistent state again when options change.

	  function loadMode(cm) {
	    cm.doc.mode = CodeMirror.getMode(cm.options, cm.doc.modeOption);
	    resetModeState(cm);
	  }

	  function resetModeState(cm) {
	    cm.doc.iter(function(line) {
	      if (line.stateAfter) line.stateAfter = null;
	      if (line.styles) line.styles = null;
	    });
	    cm.doc.frontier = cm.doc.first;
	    startWorker(cm, 100);
	    cm.state.modeGen++;
	    if (cm.curOp) regChange(cm);
	  }

	  function wrappingChanged(cm) {
	    if (cm.options.lineWrapping) {
	      addClass(cm.display.wrapper, "CodeMirror-wrap");
	      cm.display.sizer.style.minWidth = "";
	      cm.display.sizerWidth = null;
	    } else {
	      rmClass(cm.display.wrapper, "CodeMirror-wrap");
	      findMaxLine(cm);
	    }
	    estimateLineHeights(cm);
	    regChange(cm);
	    clearCaches(cm);
	    setTimeout(function(){updateScrollbars(cm);}, 100);
	  }

	  // Returns a function that estimates the height of a line, to use as
	  // first approximation until the line becomes visible (and is thus
	  // properly measurable).
	  function estimateHeight(cm) {
	    var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
	    var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
	    return function(line) {
	      if (lineIsHidden(cm.doc, line)) return 0;

	      var widgetsHeight = 0;
	      if (line.widgets) for (var i = 0; i < line.widgets.length; i++) {
	        if (line.widgets[i].height) widgetsHeight += line.widgets[i].height;
	      }

	      if (wrapping)
	        return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th;
	      else
	        return widgetsHeight + th;
	    };
	  }

	  function estimateLineHeights(cm) {
	    var doc = cm.doc, est = estimateHeight(cm);
	    doc.iter(function(line) {
	      var estHeight = est(line);
	      if (estHeight != line.height) updateLineHeight(line, estHeight);
	    });
	  }

	  function themeChanged(cm) {
	    cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
	      cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
	    clearCaches(cm);
	  }

	  function guttersChanged(cm) {
	    updateGutters(cm);
	    regChange(cm);
	    setTimeout(function(){alignHorizontally(cm);}, 20);
	  }

	  // Rebuild the gutter elements, ensure the margin to the left of the
	  // code matches their width.
	  function updateGutters(cm) {
	    var gutters = cm.display.gutters, specs = cm.options.gutters;
	    removeChildren(gutters);
	    for (var i = 0; i < specs.length; ++i) {
	      var gutterClass = specs[i];
	      var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass));
	      if (gutterClass == "CodeMirror-linenumbers") {
	        cm.display.lineGutter = gElt;
	        gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
	      }
	    }
	    gutters.style.display = i ? "" : "none";
	    updateGutterSpace(cm);
	  }

	  function updateGutterSpace(cm) {
	    var width = cm.display.gutters.offsetWidth;
	    cm.display.sizer.style.marginLeft = width + "px";
	  }

	  // Compute the character length of a line, taking into account
	  // collapsed ranges (see markText) that might hide parts, and join
	  // other lines onto it.
	  function lineLength(line) {
	    if (line.height == 0) return 0;
	    var len = line.text.length, merged, cur = line;
	    while (merged = collapsedSpanAtStart(cur)) {
	      var found = merged.find(0, true);
	      cur = found.from.line;
	      len += found.from.ch - found.to.ch;
	    }
	    cur = line;
	    while (merged = collapsedSpanAtEnd(cur)) {
	      var found = merged.find(0, true);
	      len -= cur.text.length - found.from.ch;
	      cur = found.to.line;
	      len += cur.text.length - found.to.ch;
	    }
	    return len;
	  }

	  // Find the longest line in the document.
	  function findMaxLine(cm) {
	    var d = cm.display, doc = cm.doc;
	    d.maxLine = getLine(doc, doc.first);
	    d.maxLineLength = lineLength(d.maxLine);
	    d.maxLineChanged = true;
	    doc.iter(function(line) {
	      var len = lineLength(line);
	      if (len > d.maxLineLength) {
	        d.maxLineLength = len;
	        d.maxLine = line;
	      }
	    });
	  }

	  // Make sure the gutters options contains the element
	  // "CodeMirror-linenumbers" when the lineNumbers option is true.
	  function setGuttersForLineNumbers(options) {
	    var found = indexOf(options.gutters, "CodeMirror-linenumbers");
	    if (found == -1 && options.lineNumbers) {
	      options.gutters = options.gutters.concat(["CodeMirror-linenumbers"]);
	    } else if (found > -1 && !options.lineNumbers) {
	      options.gutters = options.gutters.slice(0);
	      options.gutters.splice(found, 1);
	    }
	  }

	  // SCROLLBARS

	  // Prepare DOM reads needed to update the scrollbars. Done in one
	  // shot to minimize update/measure roundtrips.
	  function measureForScrollbars(cm) {
	    var d = cm.display, gutterW = d.gutters.offsetWidth;
	    var docH = Math.round(cm.doc.height + paddingVert(cm.display));
	    return {
	      clientHeight: d.scroller.clientHeight,
	      viewHeight: d.wrapper.clientHeight,
	      scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
	      viewWidth: d.wrapper.clientWidth,
	      barLeft: cm.options.fixedGutter ? gutterW : 0,
	      docHeight: docH,
	      scrollHeight: docH + scrollGap(cm) + d.barHeight,
	      nativeBarWidth: d.nativeBarWidth,
	      gutterWidth: gutterW
	    };
	  }

	  function NativeScrollbars(place, scroll, cm) {
	    this.cm = cm;
	    var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
	    var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
	    place(vert); place(horiz);

	    on(vert, "scroll", function() {
	      if (vert.clientHeight) scroll(vert.scrollTop, "vertical");
	    });
	    on(horiz, "scroll", function() {
	      if (horiz.clientWidth) scroll(horiz.scrollLeft, "horizontal");
	    });

	    this.checkedZeroWidth = false;
	    // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
	    if (ie && ie_version < 8) this.horiz.style.minHeight = this.vert.style.minWidth = "18px";
	  }

	  NativeScrollbars.prototype = copyObj({
	    update: function(measure) {
	      var needsH = measure.scrollWidth > measure.clientWidth + 1;
	      var needsV = measure.scrollHeight > measure.clientHeight + 1;
	      var sWidth = measure.nativeBarWidth;

	      if (needsV) {
	        this.vert.style.display = "block";
	        this.vert.style.bottom = needsH ? sWidth + "px" : "0";
	        var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
	        // A bug in IE8 can cause this value to be negative, so guard it.
	        this.vert.firstChild.style.height =
	          Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
	      } else {
	        this.vert.style.display = "";
	        this.vert.firstChild.style.height = "0";
	      }

	      if (needsH) {
	        this.horiz.style.display = "block";
	        this.horiz.style.right = needsV ? sWidth + "px" : "0";
	        this.horiz.style.left = measure.barLeft + "px";
	        var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
	        this.horiz.firstChild.style.width =
	          (measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
	      } else {
	        this.horiz.style.display = "";
	        this.horiz.firstChild.style.width = "0";
	      }

	      if (!this.checkedZeroWidth && measure.clientHeight > 0) {
	        if (sWidth == 0) this.zeroWidthHack();
	        this.checkedZeroWidth = true;
	      }

	      return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0};
	    },
	    setScrollLeft: function(pos) {
	      if (this.horiz.scrollLeft != pos) this.horiz.scrollLeft = pos;
	      if (this.disableHoriz) this.enableZeroWidthBar(this.horiz, this.disableHoriz);
	    },
	    setScrollTop: function(pos) {
	      if (this.vert.scrollTop != pos) this.vert.scrollTop = pos;
	      if (this.disableVert) this.enableZeroWidthBar(this.vert, this.disableVert);
	    },
	    zeroWidthHack: function() {
	      var w = mac && !mac_geMountainLion ? "12px" : "18px";
	      this.horiz.style.height = this.vert.style.width = w;
	      this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none";
	      this.disableHoriz = new Delayed;
	      this.disableVert = new Delayed;
	    },
	    enableZeroWidthBar: function(bar, delay) {
	      bar.style.pointerEvents = "auto";
	      function maybeDisable() {
	        // To find out whether the scrollbar is still visible, we
	        // check whether the element under the pixel in the bottom
	        // left corner of the scrollbar box is the scrollbar box
	        // itself (when the bar is still visible) or its filler child
	        // (when the bar is hidden). If it is still visible, we keep
	        // it enabled, if it's hidden, we disable pointer events.
	        var box = bar.getBoundingClientRect();
	        var elt = document.elementFromPoint(box.left + 1, box.bottom - 1);
	        if (elt != bar) bar.style.pointerEvents = "none";
	        else delay.set(1000, maybeDisable);
	      }
	      delay.set(1000, maybeDisable);
	    },
	    clear: function() {
	      var parent = this.horiz.parentNode;
	      parent.removeChild(this.horiz);
	      parent.removeChild(this.vert);
	    }
	  }, NativeScrollbars.prototype);

	  function NullScrollbars() {}

	  NullScrollbars.prototype = copyObj({
	    update: function() { return {bottom: 0, right: 0}; },
	    setScrollLeft: function() {},
	    setScrollTop: function() {},
	    clear: function() {}
	  }, NullScrollbars.prototype);

	  CodeMirror.scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars};

	  function initScrollbars(cm) {
	    if (cm.display.scrollbars) {
	      cm.display.scrollbars.clear();
	      if (cm.display.scrollbars.addClass)
	        rmClass(cm.display.wrapper, cm.display.scrollbars.addClass);
	    }

	    cm.display.scrollbars = new CodeMirror.scrollbarModel[cm.options.scrollbarStyle](function(node) {
	      cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
	      // Prevent clicks in the scrollbars from killing focus
	      on(node, "mousedown", function() {
	        if (cm.state.focused) setTimeout(function() { cm.display.input.focus(); }, 0);
	      });
	      node.setAttribute("cm-not-content", "true");
	    }, function(pos, axis) {
	      if (axis == "horizontal") setScrollLeft(cm, pos);
	      else setScrollTop(cm, pos);
	    }, cm);
	    if (cm.display.scrollbars.addClass)
	      addClass(cm.display.wrapper, cm.display.scrollbars.addClass);
	  }

	  function updateScrollbars(cm, measure) {
	    if (!measure) measure = measureForScrollbars(cm);
	    var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
	    updateScrollbarsInner(cm, measure);
	    for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
	      if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
	        updateHeightsInViewport(cm);
	      updateScrollbarsInner(cm, measureForScrollbars(cm));
	      startWidth = cm.display.barWidth; startHeight = cm.display.barHeight;
	    }
	  }

	  // Re-synchronize the fake scrollbars with the actual size of the
	  // content.
	  function updateScrollbarsInner(cm, measure) {
	    var d = cm.display;
	    var sizes = d.scrollbars.update(measure);

	    d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
	    d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";
	    d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent"

	    if (sizes.right && sizes.bottom) {
	      d.scrollbarFiller.style.display = "block";
	      d.scrollbarFiller.style.height = sizes.bottom + "px";
	      d.scrollbarFiller.style.width = sizes.right + "px";
	    } else d.scrollbarFiller.style.display = "";
	    if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
	      d.gutterFiller.style.display = "block";
	      d.gutterFiller.style.height = sizes.bottom + "px";
	      d.gutterFiller.style.width = measure.gutterWidth + "px";
	    } else d.gutterFiller.style.display = "";
	  }

	  // Compute the lines that are visible in a given viewport (defaults
	  // the the current scroll position). viewport may contain top,
	  // height, and ensure (see op.scrollToPos) properties.
	  function visibleLines(display, doc, viewport) {
	    var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
	    top = Math.floor(top - paddingTop(display));
	    var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;

	    var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
	    // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
	    // forces those lines into the viewport (if possible).
	    if (viewport && viewport.ensure) {
	      var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
	      if (ensureFrom < from) {
	        from = ensureFrom;
	        to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
	      } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
	        from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
	        to = ensureTo;
	      }
	    }
	    return {from: from, to: Math.max(to, from + 1)};
	  }

	  // LINE NUMBERS

	  // Re-align line numbers and gutter marks to compensate for
	  // horizontal scrolling.
	  function alignHorizontally(cm) {
	    var display = cm.display, view = display.view;
	    if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) return;
	    var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
	    var gutterW = display.gutters.offsetWidth, left = comp + "px";
	    for (var i = 0; i < view.length; i++) if (!view[i].hidden) {
	      if (cm.options.fixedGutter && view[i].gutter)
	        view[i].gutter.style.left = left;
	      var align = view[i].alignable;
	      if (align) for (var j = 0; j < align.length; j++)
	        align[j].style.left = left;
	    }
	    if (cm.options.fixedGutter)
	      display.gutters.style.left = (comp + gutterW) + "px";
	  }

	  // Used to ensure that the line number gutter is still the right
	  // size for the current document size. Returns true when an update
	  // is needed.
	  function maybeUpdateLineNumberWidth(cm) {
	    if (!cm.options.lineNumbers) return false;
	    var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
	    if (last.length != display.lineNumChars) {
	      var test = display.measure.appendChild(elt("div", [elt("div", last)],
	                                                 "CodeMirror-linenumber CodeMirror-gutter-elt"));
	      var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
	      display.lineGutter.style.width = "";
	      display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
	      display.lineNumWidth = display.lineNumInnerWidth + padding;
	      display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
	      display.lineGutter.style.width = display.lineNumWidth + "px";
	      updateGutterSpace(cm);
	      return true;
	    }
	    return false;
	  }

	  function lineNumberFor(options, i) {
	    return String(options.lineNumberFormatter(i + options.firstLineNumber));
	  }

	  // Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
	  // but using getBoundingClientRect to get a sub-pixel-accurate
	  // result.
	  function compensateForHScroll(display) {
	    return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left;
	  }

	  // DISPLAY DRAWING

	  function DisplayUpdate(cm, viewport, force) {
	    var display = cm.display;

	    this.viewport = viewport;
	    // Store some values that we'll need later (but don't want to force a relayout for)
	    this.visible = visibleLines(display, cm.doc, viewport);
	    this.editorIsHidden = !display.wrapper.offsetWidth;
	    this.wrapperHeight = display.wrapper.clientHeight;
	    this.wrapperWidth = display.wrapper.clientWidth;
	    this.oldDisplayWidth = displayWidth(cm);
	    this.force = force;
	    this.dims = getDimensions(cm);
	    this.events = [];
	  }

	  DisplayUpdate.prototype.signal = function(emitter, type) {
	    if (hasHandler(emitter, type))
	      this.events.push(arguments);
	  };
	  DisplayUpdate.prototype.finish = function() {
	    for (var i = 0; i < this.events.length; i++)
	      signal.apply(null, this.events[i]);
	  };

	  function maybeClipScrollbars(cm) {
	    var display = cm.display;
	    if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
	      display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
	      display.heightForcer.style.height = scrollGap(cm) + "px";
	      display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
	      display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
	      display.scrollbarsClipped = true;
	    }
	  }

	  // Does the actual updating of the line display. Bails out
	  // (returning false) when there is nothing to be done and forced is
	  // false.
	  function updateDisplayIfNeeded(cm, update) {
	    var display = cm.display, doc = cm.doc;

	    if (update.editorIsHidden) {
	      resetView(cm);
	      return false;
	    }

	    // Bail out if the visible area is already rendered and nothing changed.
	    if (!update.force &&
	        update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
	        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
	        display.renderedView == display.view && countDirtyView(cm) == 0)
	      return false;

	    if (maybeUpdateLineNumberWidth(cm)) {
	      resetView(cm);
	      update.dims = getDimensions(cm);
	    }

	    // Compute a suitable new viewport (from & to)
	    var end = doc.first + doc.size;
	    var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
	    var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
	    if (display.viewFrom < from && from - display.viewFrom < 20) from = Math.max(doc.first, display.viewFrom);
	    if (display.viewTo > to && display.viewTo - to < 20) to = Math.min(end, display.viewTo);
	    if (sawCollapsedSpans) {
	      from = visualLineNo(cm.doc, from);
	      to = visualLineEndNo(cm.doc, to);
	    }

	    var different = from != display.viewFrom || to != display.viewTo ||
	      display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
	    adjustView(cm, from, to);

	    display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
	    // Position the mover div to align with the current scroll position
	    cm.display.mover.style.top = display.viewOffset + "px";

	    var toUpdate = countDirtyView(cm);
	    if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
	        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
	      return false;

	    // For big changes, we hide the enclosing element during the
	    // update, since that speeds up the operations on most browsers.
	    var focused = activeElt();
	    if (toUpdate > 4) display.lineDiv.style.display = "none";
	    patchDisplay(cm, display.updateLineNumbers, update.dims);
	    if (toUpdate > 4) display.lineDiv.style.display = "";
	    display.renderedView = display.view;
	    // There might have been a widget with a focused element that got
	    // hidden or updated, if so re-focus it.
	    if (focused && activeElt() != focused && focused.offsetHeight) focused.focus();

	    // Prevent selection and cursors from interfering with the scroll
	    // width and height.
	    removeChildren(display.cursorDiv);
	    removeChildren(display.selectionDiv);
	    display.gutters.style.height = display.sizer.style.minHeight = 0;

	    if (different) {
	      display.lastWrapHeight = update.wrapperHeight;
	      display.lastWrapWidth = update.wrapperWidth;
	      startWorker(cm, 400);
	    }

	    display.updateLineNumbers = null;

	    return true;
	  }

	  function postUpdateDisplay(cm, update) {
	    var viewport = update.viewport;

	    for (var first = true;; first = false) {
	      if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
	        // Clip forced viewport to actual scrollable area.
	        if (viewport && viewport.top != null)
	          viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)};
	        // Updated line heights might result in the drawn area not
	        // actually covering the viewport. Keep looping until it does.
	        update.visible = visibleLines(cm.display, cm.doc, viewport);
	        if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
	          break;
	      }
	      if (!updateDisplayIfNeeded(cm, update)) break;
	      updateHeightsInViewport(cm);
	      var barMeasure = measureForScrollbars(cm);
	      updateSelection(cm);
	      updateScrollbars(cm, barMeasure);
	      setDocumentHeight(cm, barMeasure);
	    }

	    update.signal(cm, "update", cm);
	    if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
	      update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
	      cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo;
	    }
	  }

	  function updateDisplaySimple(cm, viewport) {
	    var update = new DisplayUpdate(cm, viewport);
	    if (updateDisplayIfNeeded(cm, update)) {
	      updateHeightsInViewport(cm);
	      postUpdateDisplay(cm, update);
	      var barMeasure = measureForScrollbars(cm);
	      updateSelection(cm);
	      updateScrollbars(cm, barMeasure);
	      setDocumentHeight(cm, barMeasure);
	      update.finish();
	    }
	  }

	  function setDocumentHeight(cm, measure) {
	    cm.display.sizer.style.minHeight = measure.docHeight + "px";
	    cm.display.heightForcer.style.top = measure.docHeight + "px";
	    cm.display.gutters.style.height = (measure.docHeight + cm.display.barHeight + scrollGap(cm)) + "px";
	  }

	  // Read the actual heights of the rendered lines, and update their
	  // stored heights to match.
	  function updateHeightsInViewport(cm) {
	    var display = cm.display;
	    var prevBottom = display.lineDiv.offsetTop;
	    for (var i = 0; i < display.view.length; i++) {
	      var cur = display.view[i], height;
	      if (cur.hidden) continue;
	      if (ie && ie_version < 8) {
	        var bot = cur.node.offsetTop + cur.node.offsetHeight;
	        height = bot - prevBottom;
	        prevBottom = bot;
	      } else {
	        var box = cur.node.getBoundingClientRect();
	        height = box.bottom - box.top;
	      }
	      var diff = cur.line.height - height;
	      if (height < 2) height = textHeight(display);
	      if (diff > .001 || diff < -.001) {
	        updateLineHeight(cur.line, height);
	        updateWidgetHeight(cur.line);
	        if (cur.rest) for (var j = 0; j < cur.rest.length; j++)
	          updateWidgetHeight(cur.rest[j]);
	      }
	    }
	  }

	  // Read and store the height of line widgets associated with the
	  // given line.
	  function updateWidgetHeight(line) {
	    if (line.widgets) for (var i = 0; i < line.widgets.length; ++i)
	      line.widgets[i].height = line.widgets[i].node.parentNode.offsetHeight;
	  }

	  // Do a bulk-read of the DOM positions and sizes needed to draw the
	  // view, so that we don't interleave reading and writing to the DOM.
	  function getDimensions(cm) {
	    var d = cm.display, left = {}, width = {};
	    var gutterLeft = d.gutters.clientLeft;
	    for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
	      left[cm.options.gutters[i]] = n.offsetLeft + n.clientLeft + gutterLeft;
	      width[cm.options.gutters[i]] = n.clientWidth;
	    }
	    return {fixedPos: compensateForHScroll(d),
	            gutterTotalWidth: d.gutters.offsetWidth,
	            gutterLeft: left,
	            gutterWidth: width,
	            wrapperWidth: d.wrapper.clientWidth};
	  }

	  // Sync the actual display DOM structure with display.view, removing
	  // nodes for lines that are no longer in view, and creating the ones
	  // that are not there yet, and updating the ones that are out of
	  // date.
	  function patchDisplay(cm, updateNumbersFrom, dims) {
	    var display = cm.display, lineNumbers = cm.options.lineNumbers;
	    var container = display.lineDiv, cur = container.firstChild;

	    function rm(node) {
	      var next = node.nextSibling;
	      // Works around a throw-scroll bug in OS X Webkit
	      if (webkit && mac && cm.display.currentWheelTarget == node)
	        node.style.display = "none";
	      else
	        node.parentNode.removeChild(node);
	      return next;
	    }

	    var view = display.view, lineN = display.viewFrom;
	    // Loop over the elements in the view, syncing cur (the DOM nodes
	    // in display.lineDiv) with the view as we go.
	    for (var i = 0; i < view.length; i++) {
	      var lineView = view[i];
	      if (lineView.hidden) {
	      } else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
	        var node = buildLineElement(cm, lineView, lineN, dims);
	        container.insertBefore(node, cur);
	      } else { // Already drawn
	        while (cur != lineView.node) cur = rm(cur);
	        var updateNumber = lineNumbers && updateNumbersFrom != null &&
	          updateNumbersFrom <= lineN && lineView.lineNumber;
	        if (lineView.changes) {
	          if (indexOf(lineView.changes, "gutter") > -1) updateNumber = false;
	          updateLineForChanges(cm, lineView, lineN, dims);
	        }
	        if (updateNumber) {
	          removeChildren(lineView.lineNumber);
	          lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
	        }
	        cur = lineView.node.nextSibling;
	      }
	      lineN += lineView.size;
	    }
	    while (cur) cur = rm(cur);
	  }

	  // When an aspect of a line changes, a string is added to
	  // lineView.changes. This updates the relevant part of the line's
	  // DOM structure.
	  function updateLineForChanges(cm, lineView, lineN, dims) {
	    for (var j = 0; j < lineView.changes.length; j++) {
	      var type = lineView.changes[j];
	      if (type == "text") updateLineText(cm, lineView);
	      else if (type == "gutter") updateLineGutter(cm, lineView, lineN, dims);
	      else if (type == "class") updateLineClasses(lineView);
	      else if (type == "widget") updateLineWidgets(cm, lineView, dims);
	    }
	    lineView.changes = null;
	  }

	  // Lines with gutter elements, widgets or a background class need to
	  // be wrapped, and have the extra elements added to the wrapper div
	  function ensureLineWrapped(lineView) {
	    if (lineView.node == lineView.text) {
	      lineView.node = elt("div", null, null, "position: relative");
	      if (lineView.text.parentNode)
	        lineView.text.parentNode.replaceChild(lineView.node, lineView.text);
	      lineView.node.appendChild(lineView.text);
	      if (ie && ie_version < 8) lineView.node.style.zIndex = 2;
	    }
	    return lineView.node;
	  }

	  function updateLineBackground(lineView) {
	    var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
	    if (cls) cls += " CodeMirror-linebackground";
	    if (lineView.background) {
	      if (cls) lineView.background.className = cls;
	      else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null; }
	    } else if (cls) {
	      var wrap = ensureLineWrapped(lineView);
	      lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
	    }
	  }

	  // Wrapper around buildLineContent which will reuse the structure
	  // in display.externalMeasured when possible.
	  function getLineContent(cm, lineView) {
	    var ext = cm.display.externalMeasured;
	    if (ext && ext.line == lineView.line) {
	      cm.display.externalMeasured = null;
	      lineView.measure = ext.measure;
	      return ext.built;
	    }
	    return buildLineContent(cm, lineView);
	  }

	  // Redraw the line's text. Interacts with the background and text
	  // classes because the mode may output tokens that influence these
	  // classes.
	  function updateLineText(cm, lineView) {
	    var cls = lineView.text.className;
	    var built = getLineContent(cm, lineView);
	    if (lineView.text == lineView.node) lineView.node = built.pre;
	    lineView.text.parentNode.replaceChild(built.pre, lineView.text);
	    lineView.text = built.pre;
	    if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
	      lineView.bgClass = built.bgClass;
	      lineView.textClass = built.textClass;
	      updateLineClasses(lineView);
	    } else if (cls) {
	      lineView.text.className = cls;
	    }
	  }

	  function updateLineClasses(lineView) {
	    updateLineBackground(lineView);
	    if (lineView.line.wrapClass)
	      ensureLineWrapped(lineView).className = lineView.line.wrapClass;
	    else if (lineView.node != lineView.text)
	      lineView.node.className = "";
	    var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
	    lineView.text.className = textClass || "";
	  }

	  function updateLineGutter(cm, lineView, lineN, dims) {
	    if (lineView.gutter) {
	      lineView.node.removeChild(lineView.gutter);
	      lineView.gutter = null;
	    }
	    if (lineView.gutterBackground) {
	      lineView.node.removeChild(lineView.gutterBackground);
	      lineView.gutterBackground = null;
	    }
	    if (lineView.line.gutterClass) {
	      var wrap = ensureLineWrapped(lineView);
	      lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
	                                      "left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) +
	                                      "px; width: " + dims.gutterTotalWidth + "px");
	      wrap.insertBefore(lineView.gutterBackground, lineView.text);
	    }
	    var markers = lineView.line.gutterMarkers;
	    if (cm.options.lineNumbers || markers) {
	      var wrap = ensureLineWrapped(lineView);
	      var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", "left: " +
	                                             (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px");
	      cm.display.input.setUneditable(gutterWrap);
	      wrap.insertBefore(gutterWrap, lineView.text);
	      if (lineView.line.gutterClass)
	        gutterWrap.className += " " + lineView.line.gutterClass;
	      if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
	        lineView.lineNumber = gutterWrap.appendChild(
	          elt("div", lineNumberFor(cm.options, lineN),
	              "CodeMirror-linenumber CodeMirror-gutter-elt",
	              "left: " + dims.gutterLeft["CodeMirror-linenumbers"] + "px; width: "
	              + cm.display.lineNumInnerWidth + "px"));
	      if (markers) for (var k = 0; k < cm.options.gutters.length; ++k) {
	        var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id];
	        if (found)
	          gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt", "left: " +
	                                     dims.gutterLeft[id] + "px; width: " + dims.gutterWidth[id] + "px"));
	      }
	    }
	  }

	  function updateLineWidgets(cm, lineView, dims) {
	    if (lineView.alignable) lineView.alignable = null;
	    for (var node = lineView.node.firstChild, next; node; node = next) {
	      var next = node.nextSibling;
	      if (node.className == "CodeMirror-linewidget")
	        lineView.node.removeChild(node);
	    }
	    insertLineWidgets(cm, lineView, dims);
	  }

	  // Build a line's DOM representation from scratch
	  function buildLineElement(cm, lineView, lineN, dims) {
	    var built = getLineContent(cm, lineView);
	    lineView.text = lineView.node = built.pre;
	    if (built.bgClass) lineView.bgClass = built.bgClass;
	    if (built.textClass) lineView.textClass = built.textClass;

	    updateLineClasses(lineView);
	    updateLineGutter(cm, lineView, lineN, dims);
	    insertLineWidgets(cm, lineView, dims);
	    return lineView.node;
	  }

	  // A lineView may contain multiple logical lines (when merged by
	  // collapsed spans). The widgets for all of them need to be drawn.
	  function insertLineWidgets(cm, lineView, dims) {
	    insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);
	    if (lineView.rest) for (var i = 0; i < lineView.rest.length; i++)
	      insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false);
	  }

	  function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
	    if (!line.widgets) return;
	    var wrap = ensureLineWrapped(lineView);
	    for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
	      var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget");
	      if (!widget.handleMouseEvents) node.setAttribute("cm-ignore-events", "true");
	      positionLineWidget(widget, node, lineView, dims);
	      cm.display.input.setUneditable(node);
	      if (allowAbove && widget.above)
	        wrap.insertBefore(node, lineView.gutter || lineView.text);
	      else
	        wrap.appendChild(node);
	      signalLater(widget, "redraw");
	    }
	  }

	  function positionLineWidget(widget, node, lineView, dims) {
	    if (widget.noHScroll) {
	      (lineView.alignable || (lineView.alignable = [])).push(node);
	      var width = dims.wrapperWidth;
	      node.style.left = dims.fixedPos + "px";
	      if (!widget.coverGutter) {
	        width -= dims.gutterTotalWidth;
	        node.style.paddingLeft = dims.gutterTotalWidth + "px";
	      }
	      node.style.width = width + "px";
	    }
	    if (widget.coverGutter) {
	      node.style.zIndex = 5;
	      node.style.position = "relative";
	      if (!widget.noHScroll) node.style.marginLeft = -dims.gutterTotalWidth + "px";
	    }
	  }

	  // POSITION OBJECT

	  // A Pos instance represents a position within the text.
	  var Pos = CodeMirror.Pos = function(line, ch) {
	    if (!(this instanceof Pos)) return new Pos(line, ch);
	    this.line = line; this.ch = ch;
	  };

	  // Compare two positions, return 0 if they are the same, a negative
	  // number when a is less, and a positive number otherwise.
	  var cmp = CodeMirror.cmpPos = function(a, b) { return a.line - b.line || a.ch - b.ch; };

	  function copyPos(x) {return Pos(x.line, x.ch);}
	  function maxPos(a, b) { return cmp(a, b) < 0 ? b : a; }
	  function minPos(a, b) { return cmp(a, b) < 0 ? a : b; }

	  // INPUT HANDLING

	  function ensureFocus(cm) {
	    if (!cm.state.focused) { cm.display.input.focus(); onFocus(cm); }
	  }

	  // This will be set to an array of strings when copying, so that,
	  // when pasting, we know what kind of selections the copied text
	  // was made out of.
	  var lastCopied = null;

	  function applyTextInput(cm, inserted, deleted, sel, origin) {
	    var doc = cm.doc;
	    cm.display.shift = false;
	    if (!sel) sel = doc.sel;

	    var paste = cm.state.pasteIncoming || origin == "paste";
	    var textLines = doc.splitLines(inserted), multiPaste = null;
	    // When pasing N lines into N selections, insert one line per selection
	    if (paste && sel.ranges.length > 1) {
	      if (lastCopied && lastCopied.join("\n") == inserted) {
	        if (sel.ranges.length % lastCopied.length == 0) {
	          multiPaste = [];
	          for (var i = 0; i < lastCopied.length; i++)
	            multiPaste.push(doc.splitLines(lastCopied[i]));
	        }
	      } else if (textLines.length == sel.ranges.length) {
	        multiPaste = map(textLines, function(l) { return [l]; });
	      }
	    }

	    // Normal behavior is to insert the new text into every selection
	    for (var i = sel.ranges.length - 1; i >= 0; i--) {
	      var range = sel.ranges[i];
	      var from = range.from(), to = range.to();
	      if (range.empty()) {
	        if (deleted && deleted > 0) // Handle deletion
	          from = Pos(from.line, from.ch - deleted);
	        else if (cm.state.overwrite && !paste) // Handle overwrite
	          to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length));
	      }
	      var updateInput = cm.curOp.updateInput;
	      var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i % multiPaste.length] : textLines,
	                         origin: origin || (paste ? "paste" : cm.state.cutIncoming ? "cut" : "+input")};
	      makeChange(cm.doc, changeEvent);
	      signalLater(cm, "inputRead", cm, changeEvent);
	    }
	    if (inserted && !paste)
	      triggerElectric(cm, inserted);

	    ensureCursorVisible(cm);
	    cm.curOp.updateInput = updateInput;
	    cm.curOp.typing = true;
	    cm.state.pasteIncoming = cm.state.cutIncoming = false;
	  }

	  function handlePaste(e, cm) {
	    var pasted = e.clipboardData && e.clipboardData.getData("text/plain");
	    if (pasted) {
	      e.preventDefault();
	      if (!cm.isReadOnly() && !cm.options.disableInput)
	        runInOp(cm, function() { applyTextInput(cm, pasted, 0, null, "paste"); });
	      return true;
	    }
	  }

	  function triggerElectric(cm, inserted) {
	    // When an 'electric' character is inserted, immediately trigger a reindent
	    if (!cm.options.electricChars || !cm.options.smartIndent) return;
	    var sel = cm.doc.sel;

	    for (var i = sel.ranges.length - 1; i >= 0; i--) {
	      var range = sel.ranges[i];
	      if (range.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range.head.line)) continue;
	      var mode = cm.getModeAt(range.head);
	      var indented = false;
	      if (mode.electricChars) {
	        for (var j = 0; j < mode.electricChars.length; j++)
	          if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
	            indented = indentLine(cm, range.head.line, "smart");
	            break;
	          }
	      } else if (mode.electricInput) {
	        if (mode.electricInput.test(getLine(cm.doc, range.head.line).text.slice(0, range.head.ch)))
	          indented = indentLine(cm, range.head.line, "smart");
	      }
	      if (indented) signalLater(cm, "electricInput", cm, range.head.line);
	    }
	  }

	  function copyableRanges(cm) {
	    var text = [], ranges = [];
	    for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
	      var line = cm.doc.sel.ranges[i].head.line;
	      var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)};
	      ranges.push(lineRange);
	      text.push(cm.getRange(lineRange.anchor, lineRange.head));
	    }
	    return {text: text, ranges: ranges};
	  }

	  function disableBrowserMagic(field) {
	    field.setAttribute("autocorrect", "off");
	    field.setAttribute("autocapitalize", "off");
	    field.setAttribute("spellcheck", "false");
	  }

	  // TEXTAREA INPUT STYLE

	  function TextareaInput(cm) {
	    this.cm = cm;
	    // See input.poll and input.reset
	    this.prevInput = "";

	    // Flag that indicates whether we expect input to appear real soon
	    // now (after some event like 'keypress' or 'input') and are
	    // polling intensively.
	    this.pollingFast = false;
	    // Self-resetting timeout for the poller
	    this.polling = new Delayed();
	    // Tracks when input.reset has punted to just putting a short
	    // string into the textarea instead of the full selection.
	    this.inaccurateSelection = false;
	    // Used to work around IE issue with selection being forgotten when focus moves away from textarea
	    this.hasSelection = false;
	    this.composing = null;
	  };

	  function hiddenTextarea() {
	    var te = elt("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none");
	    var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
	    // The textarea is kept positioned near the cursor to prevent the
	    // fact that it'll be scrolled into view on input from scrolling
	    // our fake cursor out of view. On webkit, when wrap=off, paste is
	    // very slow. So make the area wide instead.
	    if (webkit) te.style.width = "1000px";
	    else te.setAttribute("wrap", "off");
	    // If border: 0; -- iOS fails to open keyboard (issue #1287)
	    if (ios) te.style.border = "1px solid black";
	    disableBrowserMagic(te);
	    return div;
	  }

	  TextareaInput.prototype = copyObj({
	    init: function(display) {
	      var input = this, cm = this.cm;

	      // Wraps and hides input textarea
	      var div = this.wrapper = hiddenTextarea();
	      // The semihidden textarea that is focused when the editor is
	      // focused, and receives input.
	      var te = this.textarea = div.firstChild;
	      display.wrapper.insertBefore(div, display.wrapper.firstChild);

	      // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
	      if (ios) te.style.width = "0px";

	      on(te, "input", function() {
	        if (ie && ie_version >= 9 && input.hasSelection) input.hasSelection = null;
	        input.poll();
	      });

	      on(te, "paste", function(e) {
	        if (signalDOMEvent(cm, e) || handlePaste(e, cm)) return

	        cm.state.pasteIncoming = true;
	        input.fastPoll();
	      });

	      function prepareCopyCut(e) {
	        if (signalDOMEvent(cm, e)) return
	        if (cm.somethingSelected()) {
	          lastCopied = cm.getSelections();
	          if (input.inaccurateSelection) {
	            input.prevInput = "";
	            input.inaccurateSelection = false;
	            te.value = lastCopied.join("\n");
	            selectInput(te);
	          }
	        } else if (!cm.options.lineWiseCopyCut) {
	          return;
	        } else {
	          var ranges = copyableRanges(cm);
	          lastCopied = ranges.text;
	          if (e.type == "cut") {
	            cm.setSelections(ranges.ranges, null, sel_dontScroll);
	          } else {
	            input.prevInput = "";
	            te.value = ranges.text.join("\n");
	            selectInput(te);
	          }
	        }
	        if (e.type == "cut") cm.state.cutIncoming = true;
	      }
	      on(te, "cut", prepareCopyCut);
	      on(te, "copy", prepareCopyCut);

	      on(display.scroller, "paste", function(e) {
	        if (eventInWidget(display, e) || signalDOMEvent(cm, e)) return;
	        cm.state.pasteIncoming = true;
	        input.focus();
	      });

	      // Prevent normal selection in the editor (we handle our own)
	      on(display.lineSpace, "selectstart", function(e) {
	        if (!eventInWidget(display, e)) e_preventDefault(e);
	      });

	      on(te, "compositionstart", function() {
	        var start = cm.getCursor("from");
	        if (input.composing) input.composing.range.clear()
	        input.composing = {
	          start: start,
	          range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
	        };
	      });
	      on(te, "compositionend", function() {
	        if (input.composing) {
	          input.poll();
	          input.composing.range.clear();
	          input.composing = null;
	        }
	      });
	    },

	    prepareSelection: function() {
	      // Redraw the selection and/or cursor
	      var cm = this.cm, display = cm.display, doc = cm.doc;
	      var result = prepareSelection(cm);

	      // Move the hidden textarea near the cursor to prevent scrolling artifacts
	      if (cm.options.moveInputWithCursor) {
	        var headPos = cursorCoords(cm, doc.sel.primary().head, "div");
	        var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
	        result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
	                                            headPos.top + lineOff.top - wrapOff.top));
	        result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
	                                             headPos.left + lineOff.left - wrapOff.left));
	      }

	      return result;
	    },

	    showSelection: function(drawn) {
	      var cm = this.cm, display = cm.display;
	      removeChildrenAndAdd(display.cursorDiv, drawn.cursors);
	      removeChildrenAndAdd(display.selectionDiv, drawn.selection);
	      if (drawn.teTop != null) {
	        this.wrapper.style.top = drawn.teTop + "px";
	        this.wrapper.style.left = drawn.teLeft + "px";
	      }
	    },

	    // Reset the input to correspond to the selection (or to be empty,
	    // when not typing and nothing is selected)
	    reset: function(typing) {
	      if (this.contextMenuPending) return;
	      var minimal, selected, cm = this.cm, doc = cm.doc;
	      if (cm.somethingSelected()) {
	        this.prevInput = "";
	        var range = doc.sel.primary();
	        minimal = hasCopyEvent &&
	          (range.to().line - range.from().line > 100 || (selected = cm.getSelection()).length > 1000);
	        var content = minimal ? "-" : selected || cm.getSelection();
	        this.textarea.value = content;
	        if (cm.state.focused) selectInput(this.textarea);
	        if (ie && ie_version >= 9) this.hasSelection = content;
	      } else if (!typing) {
	        this.prevInput = this.textarea.value = "";
	        if (ie && ie_version >= 9) this.hasSelection = null;
	      }
	      this.inaccurateSelection = minimal;
	    },

	    getField: function() { return this.textarea; },

	    supportsTouch: function() { return false; },

	    focus: function() {
	      if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
	        try { this.textarea.focus(); }
	        catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
	      }
	    },

	    blur: function() { this.textarea.blur(); },

	    resetPosition: function() {
	      this.wrapper.style.top = this.wrapper.style.left = 0;
	    },

	    receivedFocus: function() { this.slowPoll(); },

	    // Poll for input changes, using the normal rate of polling. This
	    // runs as long as the editor is focused.
	    slowPoll: function() {
	      var input = this;
	      if (input.pollingFast) return;
	      input.polling.set(this.cm.options.pollInterval, function() {
	        input.poll();
	        if (input.cm.state.focused) input.slowPoll();
	      });
	    },

	    // When an event has just come in that is likely to add or change
	    // something in the input textarea, we poll faster, to ensure that
	    // the change appears on the screen quickly.
	    fastPoll: function() {
	      var missed = false, input = this;
	      input.pollingFast = true;
	      function p() {
	        var changed = input.poll();
	        if (!changed && !missed) {missed = true; input.polling.set(60, p);}
	        else {input.pollingFast = false; input.slowPoll();}
	      }
	      input.polling.set(20, p);
	    },

	    // Read input from the textarea, and update the document to match.
	    // When something is selected, it is present in the textarea, and
	    // selected (unless it is huge, in which case a placeholder is
	    // used). When nothing is selected, the cursor sits after previously
	    // seen text (can be empty), which is stored in prevInput (we must
	    // not reset the textarea when typing, because that breaks IME).
	    poll: function() {
	      var cm = this.cm, input = this.textarea, prevInput = this.prevInput;
	      // Since this is called a *lot*, try to bail out as cheaply as
	      // possible when it is clear that nothing happened. hasSelection
	      // will be the case when there is a lot of text in the textarea,
	      // in which case reading its value would be expensive.
	      if (this.contextMenuPending || !cm.state.focused ||
	          (hasSelection(input) && !prevInput && !this.composing) ||
	          cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
	        return false;

	      var text = input.value;
	      // If nothing changed, bail.
	      if (text == prevInput && !cm.somethingSelected()) return false;
	      // Work around nonsensical selection resetting in IE9/10, and
	      // inexplicable appearance of private area unicode characters on
	      // some key combos in Mac (#2689).
	      if (ie && ie_version >= 9 && this.hasSelection === text ||
	          mac && /[\uf700-\uf7ff]/.test(text)) {
	        cm.display.input.reset();
	        return false;
	      }

	      if (cm.doc.sel == cm.display.selForContextMenu) {
	        var first = text.charCodeAt(0);
	        if (first == 0x200b && !prevInput) prevInput = "\u200b";
	        if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo"); }
	      }
	      // Find the part of the input that is actually new
	      var same = 0, l = Math.min(prevInput.length, text.length);
	      while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) ++same;

	      var self = this;
	      runInOp(cm, function() {
	        applyTextInput(cm, text.slice(same), prevInput.length - same,
	                       null, self.composing ? "*compose" : null);

	        // Don't leave long text in the textarea, since it makes further polling slow
	        if (text.length > 1000 || text.indexOf("\n") > -1) input.value = self.prevInput = "";
	        else self.prevInput = text;

	        if (self.composing) {
	          self.composing.range.clear();
	          self.composing.range = cm.markText(self.composing.start, cm.getCursor("to"),
	                                             {className: "CodeMirror-composing"});
	        }
	      });
	      return true;
	    },

	    ensurePolled: function() {
	      if (this.pollingFast && this.poll()) this.pollingFast = false;
	    },

	    onKeyPress: function() {
	      if (ie && ie_version >= 9) this.hasSelection = null;
	      this.fastPoll();
	    },

	    onContextMenu: function(e) {
	      var input = this, cm = input.cm, display = cm.display, te = input.textarea;
	      var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
	      if (!pos || presto) return; // Opera is difficult.

	      // Reset the current text selection only if the click is done outside of the selection
	      // and 'resetSelectionOnContextMenu' option is true.
	      var reset = cm.options.resetSelectionOnContextMenu;
	      if (reset && cm.doc.sel.contains(pos) == -1)
	        operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll);

	      var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText;
	      input.wrapper.style.cssText = "position: absolute"
	      var wrapperBox = input.wrapper.getBoundingClientRect()
	      te.style.cssText = "position: absolute; width: 30px; height: 30px; top: " + (e.clientY - wrapperBox.top - 5) +
	        "px; left: " + (e.clientX - wrapperBox.left - 5) + "px; z-index: 1000; background: " +
	        (ie ? "rgba(255, 255, 255, .05)" : "transparent") +
	        "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
	      if (webkit) var oldScrollY = window.scrollY; // Work around Chrome issue (#2712)
	      display.input.focus();
	      if (webkit) window.scrollTo(null, oldScrollY);
	      display.input.reset();
	      // Adds "Select all" to context menu in FF
	      if (!cm.somethingSelected()) te.value = input.prevInput = " ";
	      input.contextMenuPending = true;
	      display.selForContextMenu = cm.doc.sel;
	      clearTimeout(display.detectingSelectAll);

	      // Select-all will be greyed out if there's nothing to select, so
	      // this adds a zero-width space so that we can later check whether
	      // it got selected.
	      function prepareSelectAllHack() {
	        if (te.selectionStart != null) {
	          var selected = cm.somethingSelected();
	          var extval = "\u200b" + (selected ? te.value : "");
	          te.value = "\u21da"; // Used to catch context-menu undo
	          te.value = extval;
	          input.prevInput = selected ? "" : "\u200b";
	          te.selectionStart = 1; te.selectionEnd = extval.length;
	          // Re-set this, in case some other handler touched the
	          // selection in the meantime.
	          display.selForContextMenu = cm.doc.sel;
	        }
	      }
	      function rehide() {
	        input.contextMenuPending = false;
	        input.wrapper.style.cssText = oldWrapperCSS
	        te.style.cssText = oldCSS;
	        if (ie && ie_version < 9) display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos);

	        // Try to detect the user choosing select-all
	        if (te.selectionStart != null) {
	          if (!ie || (ie && ie_version < 9)) prepareSelectAllHack();
	          var i = 0, poll = function() {
	            if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
	                te.selectionEnd > 0 && input.prevInput == "\u200b")
	              operation(cm, commands.selectAll)(cm);
	            else if (i++ < 10) display.detectingSelectAll = setTimeout(poll, 500);
	            else display.input.reset();
	          };
	          display.detectingSelectAll = setTimeout(poll, 200);
	        }
	      }

	      if (ie && ie_version >= 9) prepareSelectAllHack();
	      if (captureRightClick) {
	        e_stop(e);
	        var mouseup = function() {
	          off(window, "mouseup", mouseup);
	          setTimeout(rehide, 20);
	        };
	        on(window, "mouseup", mouseup);
	      } else {
	        setTimeout(rehide, 50);
	      }
	    },

	    readOnlyChanged: function(val) {
	      if (!val) this.reset();
	    },

	    setUneditable: nothing,

	    needsContentAttribute: false
	  }, TextareaInput.prototype);

	  // CONTENTEDITABLE INPUT STYLE

	  function ContentEditableInput(cm) {
	    this.cm = cm;
	    this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null;
	    this.polling = new Delayed();
	    this.gracePeriod = false;
	  }

	  ContentEditableInput.prototype = copyObj({
	    init: function(display) {
	      var input = this, cm = input.cm;
	      var div = input.div = display.lineDiv;
	      disableBrowserMagic(div);

	      on(div, "paste", function(e) {
	        if (!signalDOMEvent(cm, e)) handlePaste(e, cm);
	      })

	      on(div, "compositionstart", function(e) {
	        var data = e.data;
	        input.composing = {sel: cm.doc.sel, data: data, startData: data};
	        if (!data) return;
	        var prim = cm.doc.sel.primary();
	        var line = cm.getLine(prim.head.line);
	        var found = line.indexOf(data, Math.max(0, prim.head.ch - data.length));
	        if (found > -1 && found <= prim.head.ch)
	          input.composing.sel = simpleSelection(Pos(prim.head.line, found),
	                                                Pos(prim.head.line, found + data.length));
	      });
	      on(div, "compositionupdate", function(e) {
	        input.composing.data = e.data;
	      });
	      on(div, "compositionend", function(e) {
	        var ours = input.composing;
	        if (!ours) return;
	        if (e.data != ours.startData && !/\u200b/.test(e.data))
	          ours.data = e.data;
	        // Need a small delay to prevent other code (input event,
	        // selection polling) from doing damage when fired right after
	        // compositionend.
	        setTimeout(function() {
	          if (!ours.handled)
	            input.applyComposition(ours);
	          if (input.composing == ours)
	            input.composing = null;
	        }, 50);
	      });

	      on(div, "touchstart", function() {
	        input.forceCompositionEnd();
	      });

	      on(div, "input", function() {
	        if (input.composing) return;
	        if (cm.isReadOnly() || !input.pollContent())
	          runInOp(input.cm, function() {regChange(cm);});
	      });

	      function onCopyCut(e) {
	        if (signalDOMEvent(cm, e)) return
	        if (cm.somethingSelected()) {
	          lastCopied = cm.getSelections();
	          if (e.type == "cut") cm.replaceSelection("", null, "cut");
	        } else if (!cm.options.lineWiseCopyCut) {
	          return;
	        } else {
	          var ranges = copyableRanges(cm);
	          lastCopied = ranges.text;
	          if (e.type == "cut") {
	            cm.operation(function() {
	              cm.setSelections(ranges.ranges, 0, sel_dontScroll);
	              cm.replaceSelection("", null, "cut");
	            });
	          }
	        }
	        // iOS exposes the clipboard API, but seems to discard content inserted into it
	        if (e.clipboardData && !ios) {
	          e.preventDefault();
	          e.clipboardData.clearData();
	          e.clipboardData.setData("text/plain", lastCopied.join("\n"));
	        } else {
	          // Old-fashioned briefly-focus-a-textarea hack
	          var kludge = hiddenTextarea(), te = kludge.firstChild;
	          cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild);
	          te.value = lastCopied.join("\n");
	          var hadFocus = document.activeElement;
	          selectInput(te);
	          setTimeout(function() {
	            cm.display.lineSpace.removeChild(kludge);
	            hadFocus.focus();
	          }, 50);
	        }
	      }
	      on(div, "copy", onCopyCut);
	      on(div, "cut", onCopyCut);
	    },

	    prepareSelection: function() {
	      var result = prepareSelection(this.cm, false);
	      result.focus = this.cm.state.focused;
	      return result;
	    },

	    showSelection: function(info) {
	      if (!info || !this.cm.display.view.length) return;
	      if (info.focus) this.showPrimarySelection();
	      this.showMultipleSelections(info);
	    },

	    showPrimarySelection: function() {
	      var sel = window.getSelection(), prim = this.cm.doc.sel.primary();
	      var curAnchor = domToPos(this.cm, sel.anchorNode, sel.anchorOffset);
	      var curFocus = domToPos(this.cm, sel.focusNode, sel.focusOffset);
	      if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
	          cmp(minPos(curAnchor, curFocus), prim.from()) == 0 &&
	          cmp(maxPos(curAnchor, curFocus), prim.to()) == 0)
	        return;

	      var start = posToDOM(this.cm, prim.from());
	      var end = posToDOM(this.cm, prim.to());
	      if (!start && !end) return;

	      var view = this.cm.display.view;
	      var old = sel.rangeCount && sel.getRangeAt(0);
	      if (!start) {
	        start = {node: view[0].measure.map[2], offset: 0};
	      } else if (!end) { // FIXME dangerously hacky
	        var measure = view[view.length - 1].measure;
	        var map = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
	        end = {node: map[map.length - 1], offset: map[map.length - 2] - map[map.length - 3]};
	      }

	      try { var rng = range(start.node, start.offset, end.offset, end.node); }
	      catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
	      if (rng) {
	        if (!gecko && this.cm.state.focused) {
	          sel.collapse(start.node, start.offset);
	          if (!rng.collapsed) sel.addRange(rng);
	        } else {
	          sel.removeAllRanges();
	          sel.addRange(rng);
	        }
	        if (old && sel.anchorNode == null) sel.addRange(old);
	        else if (gecko) this.startGracePeriod();
	      }
	      this.rememberSelection();
	    },

	    startGracePeriod: function() {
	      var input = this;
	      clearTimeout(this.gracePeriod);
	      this.gracePeriod = setTimeout(function() {
	        input.gracePeriod = false;
	        if (input.selectionChanged())
	          input.cm.operation(function() { input.cm.curOp.selectionChanged = true; });
	      }, 20);
	    },

	    showMultipleSelections: function(info) {
	      removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors);
	      removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
	    },

	    rememberSelection: function() {
	      var sel = window.getSelection();
	      this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset;
	      this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset;
	    },

	    selectionInEditor: function() {
	      var sel = window.getSelection();
	      if (!sel.rangeCount) return false;
	      var node = sel.getRangeAt(0).commonAncestorContainer;
	      return contains(this.div, node);
	    },

	    focus: function() {
	      if (this.cm.options.readOnly != "nocursor") this.div.focus();
	    },
	    blur: function() { this.div.blur(); },
	    getField: function() { return this.div; },

	    supportsTouch: function() { return true; },

	    receivedFocus: function() {
	      var input = this;
	      if (this.selectionInEditor())
	        this.pollSelection();
	      else
	        runInOp(this.cm, function() { input.cm.curOp.selectionChanged = true; });

	      function poll() {
	        if (input.cm.state.focused) {
	          input.pollSelection();
	          input.polling.set(input.cm.options.pollInterval, poll);
	        }
	      }
	      this.polling.set(this.cm.options.pollInterval, poll);
	    },

	    selectionChanged: function() {
	      var sel = window.getSelection();
	      return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
	        sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset;
	    },

	    pollSelection: function() {
	      if (!this.composing && !this.gracePeriod && this.selectionChanged()) {
	        var sel = window.getSelection(), cm = this.cm;
	        this.rememberSelection();
	        var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
	        var head = domToPos(cm, sel.focusNode, sel.focusOffset);
	        if (anchor && head) runInOp(cm, function() {
	          setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll);
	          if (anchor.bad || head.bad) cm.curOp.selectionChanged = true;
	        });
	      }
	    },

	    pollContent: function() {
	      var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary();
	      var from = sel.from(), to = sel.to();
	      if (from.line < display.viewFrom || to.line > display.viewTo - 1) return false;

	      var fromIndex;
	      if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
	        var fromLine = lineNo(display.view[0].line);
	        var fromNode = display.view[0].node;
	      } else {
	        var fromLine = lineNo(display.view[fromIndex].line);
	        var fromNode = display.view[fromIndex - 1].node.nextSibling;
	      }
	      var toIndex = findViewIndex(cm, to.line);
	      if (toIndex == display.view.length - 1) {
	        var toLine = display.viewTo - 1;
	        var toNode = display.lineDiv.lastChild;
	      } else {
	        var toLine = lineNo(display.view[toIndex + 1].line) - 1;
	        var toNode = display.view[toIndex + 1].node.previousSibling;
	      }

	      var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine));
	      var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length));
	      while (newText.length > 1 && oldText.length > 1) {
	        if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine--; }
	        else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++; }
	        else break;
	      }

	      var cutFront = 0, cutEnd = 0;
	      var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length);
	      while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
	        ++cutFront;
	      var newBot = lst(newText), oldBot = lst(oldText);
	      var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
	                               oldBot.length - (oldText.length == 1 ? cutFront : 0));
	      while (cutEnd < maxCutEnd &&
	             newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
	        ++cutEnd;

	      newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd);
	      newText[0] = newText[0].slice(cutFront);

	      var chFrom = Pos(fromLine, cutFront);
	      var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);
	      if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
	        replaceRange(cm.doc, newText, chFrom, chTo, "+input");
	        return true;
	      }
	    },

	    ensurePolled: function() {
	      this.forceCompositionEnd();
	    },
	    reset: function() {
	      this.forceCompositionEnd();
	    },
	    forceCompositionEnd: function() {
	      if (!this.composing || this.composing.handled) return;
	      this.applyComposition(this.composing);
	      this.composing.handled = true;
	      this.div.blur();
	      this.div.focus();
	    },
	    applyComposition: function(composing) {
	      if (this.cm.isReadOnly())
	        operation(this.cm, regChange)(this.cm)
	      else if (composing.data && composing.data != composing.startData)
	        operation(this.cm, applyTextInput)(this.cm, composing.data, 0, composing.sel);
	    },

	    setUneditable: function(node) {
	      node.contentEditable = "false"
	    },

	    onKeyPress: function(e) {
	      e.preventDefault();
	      if (!this.cm.isReadOnly())
	        operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0);
	    },

	    readOnlyChanged: function(val) {
	      this.div.contentEditable = String(val != "nocursor")
	    },

	    onContextMenu: nothing,
	    resetPosition: nothing,

	    needsContentAttribute: true
	  }, ContentEditableInput.prototype);

	  function posToDOM(cm, pos) {
	    var view = findViewForLine(cm, pos.line);
	    if (!view || view.hidden) return null;
	    var line = getLine(cm.doc, pos.line);
	    var info = mapFromLineView(view, line, pos.line);

	    var order = getOrder(line), side = "left";
	    if (order) {
	      var partPos = getBidiPartAt(order, pos.ch);
	      side = partPos % 2 ? "right" : "left";
	    }
	    var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
	    result.offset = result.collapse == "right" ? result.end : result.start;
	    return result;
	  }

	  function badPos(pos, bad) { if (bad) pos.bad = true; return pos; }

	  function domToPos(cm, node, offset) {
	    var lineNode;
	    if (node == cm.display.lineDiv) {
	      lineNode = cm.display.lineDiv.childNodes[offset];
	      if (!lineNode) return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true);
	      node = null; offset = 0;
	    } else {
	      for (lineNode = node;; lineNode = lineNode.parentNode) {
	        if (!lineNode || lineNode == cm.display.lineDiv) return null;
	        if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) break;
	      }
	    }
	    for (var i = 0; i < cm.display.view.length; i++) {
	      var lineView = cm.display.view[i];
	      if (lineView.node == lineNode)
	        return locateNodeInLineView(lineView, node, offset);
	    }
	  }

	  function locateNodeInLineView(lineView, node, offset) {
	    var wrapper = lineView.text.firstChild, bad = false;
	    if (!node || !contains(wrapper, node)) return badPos(Pos(lineNo(lineView.line), 0), true);
	    if (node == wrapper) {
	      bad = true;
	      node = wrapper.childNodes[offset];
	      offset = 0;
	      if (!node) {
	        var line = lineView.rest ? lst(lineView.rest) : lineView.line;
	        return badPos(Pos(lineNo(line), line.text.length), bad);
	      }
	    }

	    var textNode = node.nodeType == 3 ? node : null, topNode = node;
	    if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
	      textNode = node.firstChild;
	      if (offset) offset = textNode.nodeValue.length;
	    }
	    while (topNode.parentNode != wrapper) topNode = topNode.parentNode;
	    var measure = lineView.measure, maps = measure.maps;

	    function find(textNode, topNode, offset) {
	      for (var i = -1; i < (maps ? maps.length : 0); i++) {
	        var map = i < 0 ? measure.map : maps[i];
	        for (var j = 0; j < map.length; j += 3) {
	          var curNode = map[j + 2];
	          if (curNode == textNode || curNode == topNode) {
	            var line = lineNo(i < 0 ? lineView.line : lineView.rest[i]);
	            var ch = map[j] + offset;
	            if (offset < 0 || curNode != textNode) ch = map[j + (offset ? 1 : 0)];
	            return Pos(line, ch);
	          }
	        }
	      }
	    }
	    var found = find(textNode, topNode, offset);
	    if (found) return badPos(found, bad);

	    // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
	    for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
	      found = find(after, after.firstChild, 0);
	      if (found)
	        return badPos(Pos(found.line, found.ch - dist), bad);
	      else
	        dist += after.textContent.length;
	    }
	    for (var before = topNode.previousSibling, dist = offset; before; before = before.previousSibling) {
	      found = find(before, before.firstChild, -1);
	      if (found)
	        return badPos(Pos(found.line, found.ch + dist), bad);
	      else
	        dist += after.textContent.length;
	    }
	  }

	  function domTextBetween(cm, from, to, fromLine, toLine) {
	    var text = "", closing = false, lineSep = cm.doc.lineSeparator();
	    function recognizeMarker(id) { return function(marker) { return marker.id == id; }; }
	    function walk(node) {
	      if (node.nodeType == 1) {
	        var cmText = node.getAttribute("cm-text");
	        if (cmText != null) {
	          if (cmText == "") cmText = node.textContent.replace(/\u200b/g, "");
	          text += cmText;
	          return;
	        }
	        var markerID = node.getAttribute("cm-marker"), range;
	        if (markerID) {
	          var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));
	          if (found.length && (range = found[0].find()))
	            text += getBetween(cm.doc, range.from, range.to).join(lineSep);
	          return;
	        }
	        if (node.getAttribute("contenteditable") == "false") return;
	        for (var i = 0; i < node.childNodes.length; i++)
	          walk(node.childNodes[i]);
	        if (/^(pre|div|p)$/i.test(node.nodeName))
	          closing = true;
	      } else if (node.nodeType == 3) {
	        var val = node.nodeValue;
	        if (!val) return;
	        if (closing) {
	          text += lineSep;
	          closing = false;
	        }
	        text += val;
	      }
	    }
	    for (;;) {
	      walk(from);
	      if (from == to) break;
	      from = from.nextSibling;
	    }
	    return text;
	  }

	  CodeMirror.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput};

	  // SELECTION / CURSOR

	  // Selection objects are immutable. A new one is created every time
	  // the selection changes. A selection is one or more non-overlapping
	  // (and non-touching) ranges, sorted, and an integer that indicates
	  // which one is the primary selection (the one that's scrolled into
	  // view, that getCursor returns, etc).
	  function Selection(ranges, primIndex) {
	    this.ranges = ranges;
	    this.primIndex = primIndex;
	  }

	  Selection.prototype = {
	    primary: function() { return this.ranges[this.primIndex]; },
	    equals: function(other) {
	      if (other == this) return true;
	      if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) return false;
	      for (var i = 0; i < this.ranges.length; i++) {
	        var here = this.ranges[i], there = other.ranges[i];
	        if (cmp(here.anchor, there.anchor) != 0 || cmp(here.head, there.head) != 0) return false;
	      }
	      return true;
	    },
	    deepCopy: function() {
	      for (var out = [], i = 0; i < this.ranges.length; i++)
	        out[i] = new Range(copyPos(this.ranges[i].anchor), copyPos(this.ranges[i].head));
	      return new Selection(out, this.primIndex);
	    },
	    somethingSelected: function() {
	      for (var i = 0; i < this.ranges.length; i++)
	        if (!this.ranges[i].empty()) return true;
	      return false;
	    },
	    contains: function(pos, end) {
	      if (!end) end = pos;
	      for (var i = 0; i < this.ranges.length; i++) {
	        var range = this.ranges[i];
	        if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
	          return i;
	      }
	      return -1;
	    }
	  };

	  function Range(anchor, head) {
	    this.anchor = anchor; this.head = head;
	  }

	  Range.prototype = {
	    from: function() { return minPos(this.anchor, this.head); },
	    to: function() { return maxPos(this.anchor, this.head); },
	    empty: function() {
	      return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
	    }
	  };

	  // Take an unsorted, potentially overlapping set of ranges, and
	  // build a selection out of it. 'Consumes' ranges array (modifying
	  // it).
	  function normalizeSelection(ranges, primIndex) {
	    var prim = ranges[primIndex];
	    ranges.sort(function(a, b) { return cmp(a.from(), b.from()); });
	    primIndex = indexOf(ranges, prim);
	    for (var i = 1; i < ranges.length; i++) {
	      var cur = ranges[i], prev = ranges[i - 1];
	      if (cmp(prev.to(), cur.from()) >= 0) {
	        var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
	        var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
	        if (i <= primIndex) --primIndex;
	        ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
	      }
	    }
	    return new Selection(ranges, primIndex);
	  }

	  function simpleSelection(anchor, head) {
	    return new Selection([new Range(anchor, head || anchor)], 0);
	  }

	  // Most of the external API clips given positions to make sure they
	  // actually exist within the document.
	  function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1));}
	  function clipPos(doc, pos) {
	    if (pos.line < doc.first) return Pos(doc.first, 0);
	    var last = doc.first + doc.size - 1;
	    if (pos.line > last) return Pos(last, getLine(doc, last).text.length);
	    return clipToLen(pos, getLine(doc, pos.line).text.length);
	  }
	  function clipToLen(pos, linelen) {
	    var ch = pos.ch;
	    if (ch == null || ch > linelen) return Pos(pos.line, linelen);
	    else if (ch < 0) return Pos(pos.line, 0);
	    else return pos;
	  }
	  function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size;}
	  function clipPosArray(doc, array) {
	    for (var out = [], i = 0; i < array.length; i++) out[i] = clipPos(doc, array[i]);
	    return out;
	  }

	  // SELECTION UPDATES

	  // The 'scroll' parameter given to many of these indicated whether
	  // the new cursor position should be scrolled into view after
	  // modifying the selection.

	  // If shift is held or the extend flag is set, extends a range to
	  // include a given position (and optionally a second position).
	  // Otherwise, simply returns the range between the given positions.
	  // Used for cursor motion and such.
	  function extendRange(doc, range, head, other) {
	    if (doc.cm && doc.cm.display.shift || doc.extend) {
	      var anchor = range.anchor;
	      if (other) {
	        var posBefore = cmp(head, anchor) < 0;
	        if (posBefore != (cmp(other, anchor) < 0)) {
	          anchor = head;
	          head = other;
	        } else if (posBefore != (cmp(head, other) < 0)) {
	          head = other;
	        }
	      }
	      return new Range(anchor, head);
	    } else {
	      return new Range(other || head, head);
	    }
	  }

	  // Extend the primary selection range, discard the rest.
	  function extendSelection(doc, head, other, options) {
	    setSelection(doc, new Selection([extendRange(doc, doc.sel.primary(), head, other)], 0), options);
	  }

	  // Extend all selections (pos is an array of selections with length
	  // equal the number of selections)
	  function extendSelections(doc, heads, options) {
	    for (var out = [], i = 0; i < doc.sel.ranges.length; i++)
	      out[i] = extendRange(doc, doc.sel.ranges[i], heads[i], null);
	    var newSel = normalizeSelection(out, doc.sel.primIndex);
	    setSelection(doc, newSel, options);
	  }

	  // Updates a single range in the selection.
	  function replaceOneSelection(doc, i, range, options) {
	    var ranges = doc.sel.ranges.slice(0);
	    ranges[i] = range;
	    setSelection(doc, normalizeSelection(ranges, doc.sel.primIndex), options);
	  }

	  // Reset the selection to a single range.
	  function setSimpleSelection(doc, anchor, head, options) {
	    setSelection(doc, simpleSelection(anchor, head), options);
	  }

	  // Give beforeSelectionChange handlers a change to influence a
	  // selection update.
	  function filterSelectionChange(doc, sel, options) {
	    var obj = {
	      ranges: sel.ranges,
	      update: function(ranges) {
	        this.ranges = [];
	        for (var i = 0; i < ranges.length; i++)
	          this.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
	                                     clipPos(doc, ranges[i].head));
	      },
	      origin: options && options.origin
	    };
	    signal(doc, "beforeSelectionChange", doc, obj);
	    if (doc.cm) signal(doc.cm, "beforeSelectionChange", doc.cm, obj);
	    if (obj.ranges != sel.ranges) return normalizeSelection(obj.ranges, obj.ranges.length - 1);
	    else return sel;
	  }

	  function setSelectionReplaceHistory(doc, sel, options) {
	    var done = doc.history.done, last = lst(done);
	    if (last && last.ranges) {
	      done[done.length - 1] = sel;
	      setSelectionNoUndo(doc, sel, options);
	    } else {
	      setSelection(doc, sel, options);
	    }
	  }

	  // Set a new selection.
	  function setSelection(doc, sel, options) {
	    setSelectionNoUndo(doc, sel, options);
	    addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
	  }

	  function setSelectionNoUndo(doc, sel, options) {
	    if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
	      sel = filterSelectionChange(doc, sel, options);

	    var bias = options && options.bias ||
	      (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
	    setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));

	    if (!(options && options.scroll === false) && doc.cm)
	      ensureCursorVisible(doc.cm);
	  }

	  function setSelectionInner(doc, sel) {
	    if (sel.equals(doc.sel)) return;

	    doc.sel = sel;

	    if (doc.cm) {
	      doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged = true;
	      signalCursorActivity(doc.cm);
	    }
	    signalLater(doc, "cursorActivity", doc);
	  }

	  // Verify that the selection does not partially select any atomic
	  // marked ranges.
	  function reCheckSelection(doc) {
	    setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false), sel_dontScroll);
	  }

	  // Return a selection that does not partially select any atomic
	  // ranges.
	  function skipAtomicInSelection(doc, sel, bias, mayClear) {
	    var out;
	    for (var i = 0; i < sel.ranges.length; i++) {
	      var range = sel.ranges[i];
	      var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i];
	      var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear);
	      var newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear);
	      if (out || newAnchor != range.anchor || newHead != range.head) {
	        if (!out) out = sel.ranges.slice(0, i);
	        out[i] = new Range(newAnchor, newHead);
	      }
	    }
	    return out ? normalizeSelection(out, sel.primIndex) : sel;
	  }

	  function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
	    var line = getLine(doc, pos.line);
	    if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
	      var sp = line.markedSpans[i], m = sp.marker;
	      if ((sp.from == null || (m.inclusiveLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
	          (sp.to == null || (m.inclusiveRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
	        if (mayClear) {
	          signal(m, "beforeCursorEnter");
	          if (m.explicitlyCleared) {
	            if (!line.markedSpans) break;
	            else {--i; continue;}
	          }
	        }
	        if (!m.atomic) continue;

	        if (oldPos) {
	          var near = m.find(dir < 0 ? 1 : -1), diff;
	          if (dir < 0 ? m.inclusiveRight : m.inclusiveLeft)
	            near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null);
	          if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
	            return skipAtomicInner(doc, near, pos, dir, mayClear);
	        }

	        var far = m.find(dir < 0 ? -1 : 1);
	        if (dir < 0 ? m.inclusiveLeft : m.inclusiveRight)
	          far = movePos(doc, far, dir, far.line == pos.line ? line : null);
	        return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null;
	      }
	    }
	    return pos;
	  }

	  // Ensure a given position is not inside an atomic range.
	  function skipAtomic(doc, pos, oldPos, bias, mayClear) {
	    var dir = bias || 1;
	    var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
	        (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
	        skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
	        (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true));
	    if (!found) {
	      doc.cantEdit = true;
	      return Pos(doc.first, 0);
	    }
	    return found;
	  }

	  function movePos(doc, pos, dir, line) {
	    if (dir < 0 && pos.ch == 0) {
	      if (pos.line > doc.first) return clipPos(doc, Pos(pos.line - 1));
	      else return null;
	    } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
	      if (pos.line < doc.first + doc.size - 1) return Pos(pos.line + 1, 0);
	      else return null;
	    } else {
	      return new Pos(pos.line, pos.ch + dir);
	    }
	  }

	  // SELECTION DRAWING

	  function updateSelection(cm) {
	    cm.display.input.showSelection(cm.display.input.prepareSelection());
	  }

	  function prepareSelection(cm, primary) {
	    var doc = cm.doc, result = {};
	    var curFragment = result.cursors = document.createDocumentFragment();
	    var selFragment = result.selection = document.createDocumentFragment();

	    for (var i = 0; i < doc.sel.ranges.length; i++) {
	      if (primary === false && i == doc.sel.primIndex) continue;
	      var range = doc.sel.ranges[i];
	      if (range.from().line >= cm.display.viewTo || range.to().line < cm.display.viewFrom) continue;
	      var collapsed = range.empty();
	      if (collapsed || cm.options.showCursorWhenSelecting)
	        drawSelectionCursor(cm, range.head, curFragment);
	      if (!collapsed)
	        drawSelectionRange(cm, range, selFragment);
	    }
	    return result;
	  }

	  // Draws a cursor for the given range
	  function drawSelectionCursor(cm, head, output) {
	    var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);

	    var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"));
	    cursor.style.left = pos.left + "px";
	    cursor.style.top = pos.top + "px";
	    cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";

	    if (pos.other) {
	      // Secondary cursor, shown when on a 'jump' in bi-directional text
	      var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"));
	      otherCursor.style.display = "";
	      otherCursor.style.left = pos.other.left + "px";
	      otherCursor.style.top = pos.other.top + "px";
	      otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
	    }
	  }

	  // Draws the given range as a highlighted selection
	  function drawSelectionRange(cm, range, output) {
	    var display = cm.display, doc = cm.doc;
	    var fragment = document.createDocumentFragment();
	    var padding = paddingH(cm.display), leftSide = padding.left;
	    var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;

	    function add(left, top, width, bottom) {
	      if (top < 0) top = 0;
	      top = Math.round(top);
	      bottom = Math.round(bottom);
	      fragment.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + left +
	                               "px; top: " + top + "px; width: " + (width == null ? rightSide - left : width) +
	                               "px; height: " + (bottom - top) + "px"));
	    }

	    function drawForLine(line, fromArg, toArg) {
	      var lineObj = getLine(doc, line);
	      var lineLen = lineObj.text.length;
	      var start, end;
	      function coords(ch, bias) {
	        return charCoords(cm, Pos(line, ch), "div", lineObj, bias);
	      }

	      iterateBidiSections(getOrder(lineObj), fromArg || 0, toArg == null ? lineLen : toArg, function(from, to, dir) {
	        var leftPos = coords(from, "left"), rightPos, left, right;
	        if (from == to) {
	          rightPos = leftPos;
	          left = right = leftPos.left;
	        } else {
	          rightPos = coords(to - 1, "right");
	          if (dir == "rtl") { var tmp = leftPos; leftPos = rightPos; rightPos = tmp; }
	          left = leftPos.left;
	          right = rightPos.right;
	        }
	        if (fromArg == null && from == 0) left = leftSide;
	        if (rightPos.top - leftPos.top > 3) { // Different lines, draw top part
	          add(left, leftPos.top, null, leftPos.bottom);
	          left = leftSide;
	          if (leftPos.bottom < rightPos.top) add(left, leftPos.bottom, null, rightPos.top);
	        }
	        if (toArg == null && to == lineLen) right = rightSide;
	        if (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left)
	          start = leftPos;
	        if (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right)
	          end = rightPos;
	        if (left < leftSide + 1) left = leftSide;
	        add(left, rightPos.top, right - left, rightPos.bottom);
	      });
	      return {start: start, end: end};
	    }

	    var sFrom = range.from(), sTo = range.to();
	    if (sFrom.line == sTo.line) {
	      drawForLine(sFrom.line, sFrom.ch, sTo.ch);
	    } else {
	      var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line);
	      var singleVLine = visualLine(fromLine) == visualLine(toLine);
	      var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
	      var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
	      if (singleVLine) {
	        if (leftEnd.top < rightStart.top - 2) {
	          add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
	          add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
	        } else {
	          add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
	        }
	      }
	      if (leftEnd.bottom < rightStart.top)
	        add(leftSide, leftEnd.bottom, null, rightStart.top);
	    }

	    output.appendChild(fragment);
	  }

	  // Cursor-blinking
	  function restartBlink(cm) {
	    if (!cm.state.focused) return;
	    var display = cm.display;
	    clearInterval(display.blinker);
	    var on = true;
	    display.cursorDiv.style.visibility = "";
	    if (cm.options.cursorBlinkRate > 0)
	      display.blinker = setInterval(function() {
	        display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden";
	      }, cm.options.cursorBlinkRate);
	    else if (cm.options.cursorBlinkRate < 0)
	      display.cursorDiv.style.visibility = "hidden";
	  }

	  // HIGHLIGHT WORKER

	  function startWorker(cm, time) {
	    if (cm.doc.mode.startState && cm.doc.frontier < cm.display.viewTo)
	      cm.state.highlight.set(time, bind(highlightWorker, cm));
	  }

	  function highlightWorker(cm) {
	    var doc = cm.doc;
	    if (doc.frontier < doc.first) doc.frontier = doc.first;
	    if (doc.frontier >= cm.display.viewTo) return;
	    var end = +new Date + cm.options.workTime;
	    var state = copyState(doc.mode, getStateBefore(cm, doc.frontier));
	    var changedLines = [];

	    doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function(line) {
	      if (doc.frontier >= cm.display.viewFrom) { // Visible
	        var oldStyles = line.styles, tooLong = line.text.length > cm.options.maxHighlightLength;
	        var highlighted = highlightLine(cm, line, tooLong ? copyState(doc.mode, state) : state, true);
	        line.styles = highlighted.styles;
	        var oldCls = line.styleClasses, newCls = highlighted.classes;
	        if (newCls) line.styleClasses = newCls;
	        else if (oldCls) line.styleClasses = null;
	        var ischange = !oldStyles || oldStyles.length != line.styles.length ||
	          oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
	        for (var i = 0; !ischange && i < oldStyles.length; ++i) ischange = oldStyles[i] != line.styles[i];
	        if (ischange) changedLines.push(doc.frontier);
	        line.stateAfter = tooLong ? state : copyState(doc.mode, state);
	      } else {
	        if (line.text.length <= cm.options.maxHighlightLength)
	          processLine(cm, line.text, state);
	        line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null;
	      }
	      ++doc.frontier;
	      if (+new Date > end) {
	        startWorker(cm, cm.options.workDelay);
	        return true;
	      }
	    });
	    if (changedLines.length) runInOp(cm, function() {
	      for (var i = 0; i < changedLines.length; i++)
	        regLineChange(cm, changedLines[i], "text");
	    });
	  }

	  // Finds the line to start with when starting a parse. Tries to
	  // find a line with a stateAfter, so that it can start with a
	  // valid state. If that fails, it returns the line with the
	  // smallest indentation, which tends to need the least context to
	  // parse correctly.
	  function findStartLine(cm, n, precise) {
	    var minindent, minline, doc = cm.doc;
	    var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);
	    for (var search = n; search > lim; --search) {
	      if (search <= doc.first) return doc.first;
	      var line = getLine(doc, search - 1);
	      if (line.stateAfter && (!precise || search <= doc.frontier)) return search;
	      var indented = countColumn(line.text, null, cm.options.tabSize);
	      if (minline == null || minindent > indented) {
	        minline = search - 1;
	        minindent = indented;
	      }
	    }
	    return minline;
	  }

	  function getStateBefore(cm, n, precise) {
	    var doc = cm.doc, display = cm.display;
	    if (!doc.mode.startState) return true;
	    var pos = findStartLine(cm, n, precise), state = pos > doc.first && getLine(doc, pos-1).stateAfter;
	    if (!state) state = startState(doc.mode);
	    else state = copyState(doc.mode, state);
	    doc.iter(pos, n, function(line) {
	      processLine(cm, line.text, state);
	      var save = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo;
	      line.stateAfter = save ? copyState(doc.mode, state) : null;
	      ++pos;
	    });
	    if (precise) doc.frontier = pos;
	    return state;
	  }

	  // POSITION MEASUREMENT

	  function paddingTop(display) {return display.lineSpace.offsetTop;}
	  function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight;}
	  function paddingH(display) {
	    if (display.cachedPaddingH) return display.cachedPaddingH;
	    var e = removeChildrenAndAdd(display.measure, elt("pre", "x"));
	    var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
	    var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)};
	    if (!isNaN(data.left) && !isNaN(data.right)) display.cachedPaddingH = data;
	    return data;
	  }

	  function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth; }
	  function displayWidth(cm) {
	    return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth;
	  }
	  function displayHeight(cm) {
	    return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight;
	  }

	  // Ensure the lineView.wrapping.heights array is populated. This is
	  // an array of bottom offsets for the lines that make up a drawn
	  // line. When lineWrapping is on, there might be more than one
	  // height.
	  function ensureLineHeights(cm, lineView, rect) {
	    var wrapping = cm.options.lineWrapping;
	    var curWidth = wrapping && displayWidth(cm);
	    if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
	      var heights = lineView.measure.heights = [];
	      if (wrapping) {
	        lineView.measure.width = curWidth;
	        var rects = lineView.text.firstChild.getClientRects();
	        for (var i = 0; i < rects.length - 1; i++) {
	          var cur = rects[i], next = rects[i + 1];
	          if (Math.abs(cur.bottom - next.bottom) > 2)
	            heights.push((cur.bottom + next.top) / 2 - rect.top);
	        }
	      }
	      heights.push(rect.bottom - rect.top);
	    }
	  }

	  // Find a line map (mapping character offsets to text nodes) and a
	  // measurement cache for the given line number. (A line view might
	  // contain multiple lines when collapsed ranges are present.)
	  function mapFromLineView(lineView, line, lineN) {
	    if (lineView.line == line)
	      return {map: lineView.measure.map, cache: lineView.measure.cache};
	    for (var i = 0; i < lineView.rest.length; i++)
	      if (lineView.rest[i] == line)
	        return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]};
	    for (var i = 0; i < lineView.rest.length; i++)
	      if (lineNo(lineView.rest[i]) > lineN)
	        return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i], before: true};
	  }

	  // Render a line into the hidden node display.externalMeasured. Used
	  // when measurement is needed for a line that's not in the viewport.
	  function updateExternalMeasurement(cm, line) {
	    line = visualLine(line);
	    var lineN = lineNo(line);
	    var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
	    view.lineN = lineN;
	    var built = view.built = buildLineContent(cm, view);
	    view.text = built.pre;
	    removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
	    return view;
	  }

	  // Get a {top, bottom, left, right} box (in line-local coordinates)
	  // for a given character.
	  function measureChar(cm, line, ch, bias) {
	    return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias);
	  }

	  // Find a line view that corresponds to the given line number.
	  function findViewForLine(cm, lineN) {
	    if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
	      return cm.display.view[findViewIndex(cm, lineN)];
	    var ext = cm.display.externalMeasured;
	    if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
	      return ext;
	  }

	  // Measurement can be split in two steps, the set-up work that
	  // applies to the whole line, and the measurement of the actual
	  // character. Functions like coordsChar, that need to do a lot of
	  // measurements in a row, can thus ensure that the set-up work is
	  // only done once.
	  function prepareMeasureForLine(cm, line) {
	    var lineN = lineNo(line);
	    var view = findViewForLine(cm, lineN);
	    if (view && !view.text) {
	      view = null;
	    } else if (view && view.changes) {
	      updateLineForChanges(cm, view, lineN, getDimensions(cm));
	      cm.curOp.forceUpdate = true;
	    }
	    if (!view)
	      view = updateExternalMeasurement(cm, line);

	    var info = mapFromLineView(view, line, lineN);
	    return {
	      line: line, view: view, rect: null,
	      map: info.map, cache: info.cache, before: info.before,
	      hasHeights: false
	    };
	  }

	  // Given a prepared measurement object, measures the position of an
	  // actual character (or fetches it from the cache).
	  function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
	    if (prepared.before) ch = -1;
	    var key = ch + (bias || ""), found;
	    if (prepared.cache.hasOwnProperty(key)) {
	      found = prepared.cache[key];
	    } else {
	      if (!prepared.rect)
	        prepared.rect = prepared.view.text.getBoundingClientRect();
	      if (!prepared.hasHeights) {
	        ensureLineHeights(cm, prepared.view, prepared.rect);
	        prepared.hasHeights = true;
	      }
	      found = measureCharInner(cm, prepared, ch, bias);
	      if (!found.bogus) prepared.cache[key] = found;
	    }
	    return {left: found.left, right: found.right,
	            top: varHeight ? found.rtop : found.top,
	            bottom: varHeight ? found.rbottom : found.bottom};
	  }

	  var nullRect = {left: 0, right: 0, top: 0, bottom: 0};

	  function nodeAndOffsetInLineMap(map, ch, bias) {
	    var node, start, end, collapse;
	    // First, search the line map for the text node corresponding to,
	    // or closest to, the target character.
	    for (var i = 0; i < map.length; i += 3) {
	      var mStart = map[i], mEnd = map[i + 1];
	      if (ch < mStart) {
	        start = 0; end = 1;
	        collapse = "left";
	      } else if (ch < mEnd) {
	        start = ch - mStart;
	        end = start + 1;
	      } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
	        end = mEnd - mStart;
	        start = end - 1;
	        if (ch >= mEnd) collapse = "right";
	      }
	      if (start != null) {
	        node = map[i + 2];
	        if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
	          collapse = bias;
	        if (bias == "left" && start == 0)
	          while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
	            node = map[(i -= 3) + 2];
	            collapse = "left";
	          }
	        if (bias == "right" && start == mEnd - mStart)
	          while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
	            node = map[(i += 3) + 2];
	            collapse = "right";
	          }
	        break;
	      }
	    }
	    return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd};
	  }

	  function measureCharInner(cm, prepared, ch, bias) {
	    var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
	    var node = place.node, start = place.start, end = place.end, collapse = place.collapse;

	    var rect;
	    if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
	      for (var i = 0; i < 4; i++) { // Retry a maximum of 4 times when nonsense rectangles are returned
	        while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) --start;
	        while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) ++end;
	        if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart) {
	          rect = node.parentNode.getBoundingClientRect();
	        } else if (ie && cm.options.lineWrapping) {
	          var rects = range(node, start, end).getClientRects();
	          if (rects.length)
	            rect = rects[bias == "right" ? rects.length - 1 : 0];
	          else
	            rect = nullRect;
	        } else {
	          rect = range(node, start, end).getBoundingClientRect() || nullRect;
	        }
	        if (rect.left || rect.right || start == 0) break;
	        end = start;
	        start = start - 1;
	        collapse = "right";
	      }
	      if (ie && ie_version < 11) rect = maybeUpdateRectForZooming(cm.display.measure, rect);
	    } else { // If it is a widget, simply get the box for the whole widget.
	      if (start > 0) collapse = bias = "right";
	      var rects;
	      if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
	        rect = rects[bias == "right" ? rects.length - 1 : 0];
	      else
	        rect = node.getBoundingClientRect();
	    }
	    if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
	      var rSpan = node.parentNode.getClientRects()[0];
	      if (rSpan)
	        rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom};
	      else
	        rect = nullRect;
	    }

	    var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
	    var mid = (rtop + rbot) / 2;
	    var heights = prepared.view.measure.heights;
	    for (var i = 0; i < heights.length - 1; i++)
	      if (mid < heights[i]) break;
	    var top = i ? heights[i - 1] : 0, bot = heights[i];
	    var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
	                  right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
	                  top: top, bottom: bot};
	    if (!rect.left && !rect.right) result.bogus = true;
	    if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot; }

	    return result;
	  }

	  // Work around problem with bounding client rects on ranges being
	  // returned incorrectly when zoomed on IE10 and below.
	  function maybeUpdateRectForZooming(measure, rect) {
	    if (!window.screen || screen.logicalXDPI == null ||
	        screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
	      return rect;
	    var scaleX = screen.logicalXDPI / screen.deviceXDPI;
	    var scaleY = screen.logicalYDPI / screen.deviceYDPI;
	    return {left: rect.left * scaleX, right: rect.right * scaleX,
	            top: rect.top * scaleY, bottom: rect.bottom * scaleY};
	  }

	  function clearLineMeasurementCacheFor(lineView) {
	    if (lineView.measure) {
	      lineView.measure.cache = {};
	      lineView.measure.heights = null;
	      if (lineView.rest) for (var i = 0; i < lineView.rest.length; i++)
	        lineView.measure.caches[i] = {};
	    }
	  }

	  function clearLineMeasurementCache(cm) {
	    cm.display.externalMeasure = null;
	    removeChildren(cm.display.lineMeasure);
	    for (var i = 0; i < cm.display.view.length; i++)
	      clearLineMeasurementCacheFor(cm.display.view[i]);
	  }

	  function clearCaches(cm) {
	    clearLineMeasurementCache(cm);
	    cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
	    if (!cm.options.lineWrapping) cm.display.maxLineChanged = true;
	    cm.display.lineNumChars = null;
	  }

	  function pageScrollX() { return window.pageXOffset || (document.documentElement || document.body).scrollLeft; }
	  function pageScrollY() { return window.pageYOffset || (document.documentElement || document.body).scrollTop; }

	  // Converts a {top, bottom, left, right} box from line-local
	  // coordinates into another coordinate system. Context may be one of
	  // "line", "div" (display.lineDiv), "local"/null (editor), "window",
	  // or "page".
	  function intoCoordSystem(cm, lineObj, rect, context) {
	    if (lineObj.widgets) for (var i = 0; i < lineObj.widgets.length; ++i) if (lineObj.widgets[i].above) {
	      var size = widgetHeight(lineObj.widgets[i]);
	      rect.top += size; rect.bottom += size;
	    }
	    if (context == "line") return rect;
	    if (!context) context = "local";
	    var yOff = heightAtLine(lineObj);
	    if (context == "local") yOff += paddingTop(cm.display);
	    else yOff -= cm.display.viewOffset;
	    if (context == "page" || context == "window") {
	      var lOff = cm.display.lineSpace.getBoundingClientRect();
	      yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
	      var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
	      rect.left += xOff; rect.right += xOff;
	    }
	    rect.top += yOff; rect.bottom += yOff;
	    return rect;
	  }

	  // Coverts a box from "div" coords to another coordinate system.
	  // Context may be "window", "page", "div", or "local"/null.
	  function fromCoordSystem(cm, coords, context) {
	    if (context == "div") return coords;
	    var left = coords.left, top = coords.top;
	    // First move into "page" coordinate system
	    if (context == "page") {
	      left -= pageScrollX();
	      top -= pageScrollY();
	    } else if (context == "local" || !context) {
	      var localBox = cm.display.sizer.getBoundingClientRect();
	      left += localBox.left;
	      top += localBox.top;
	    }

	    var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
	    return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top};
	  }

	  function charCoords(cm, pos, context, lineObj, bias) {
	    if (!lineObj) lineObj = getLine(cm.doc, pos.line);
	    return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context);
	  }

	  // Returns a box for a given cursor position, which may have an
	  // 'other' property containing the position of the secondary cursor
	  // on a bidi boundary.
	  function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
	    lineObj = lineObj || getLine(cm.doc, pos.line);
	    if (!preparedMeasure) preparedMeasure = prepareMeasureForLine(cm, lineObj);
	    function get(ch, right) {
	      var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);
	      if (right) m.left = m.right; else m.right = m.left;
	      return intoCoordSystem(cm, lineObj, m, context);
	    }
	    function getBidi(ch, partPos) {
	      var part = order[partPos], right = part.level % 2;
	      if (ch == bidiLeft(part) && partPos && part.level < order[partPos - 1].level) {
	        part = order[--partPos];
	        ch = bidiRight(part) - (part.level % 2 ? 0 : 1);
	        right = true;
	      } else if (ch == bidiRight(part) && partPos < order.length - 1 && part.level < order[partPos + 1].level) {
	        part = order[++partPos];
	        ch = bidiLeft(part) - part.level % 2;
	        right = false;
	      }
	      if (right && ch == part.to && ch > part.from) return get(ch - 1);
	      return get(ch, right);
	    }
	    var order = getOrder(lineObj), ch = pos.ch;
	    if (!order) return get(ch);
	    var partPos = getBidiPartAt(order, ch);
	    var val = getBidi(ch, partPos);
	    if (bidiOther != null) val.other = getBidi(ch, bidiOther);
	    return val;
	  }

	  // Used to cheaply estimate the coordinates for a position. Used for
	  // intermediate scroll updates.
	  function estimateCoords(cm, pos) {
	    var left = 0, pos = clipPos(cm.doc, pos);
	    if (!cm.options.lineWrapping) left = charWidth(cm.display) * pos.ch;
	    var lineObj = getLine(cm.doc, pos.line);
	    var top = heightAtLine(lineObj) + paddingTop(cm.display);
	    return {left: left, right: left, top: top, bottom: top + lineObj.height};
	  }

	  // Positions returned by coordsChar contain some extra information.
	  // xRel is the relative x position of the input coordinates compared
	  // to the found position (so xRel > 0 means the coordinates are to
	  // the right of the character position, for example). When outside
	  // is true, that means the coordinates lie outside the line's
	  // vertical range.
	  function PosWithInfo(line, ch, outside, xRel) {
	    var pos = Pos(line, ch);
	    pos.xRel = xRel;
	    if (outside) pos.outside = true;
	    return pos;
	  }

	  // Compute the character position closest to the given coordinates.
	  // Input must be lineSpace-local ("div" coordinate system).
	  function coordsChar(cm, x, y) {
	    var doc = cm.doc;
	    y += cm.display.viewOffset;
	    if (y < 0) return PosWithInfo(doc.first, 0, true, -1);
	    var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
	    if (lineN > last)
	      return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, true, 1);
	    if (x < 0) x = 0;

	    var lineObj = getLine(doc, lineN);
	    for (;;) {
	      var found = coordsCharInner(cm, lineObj, lineN, x, y);
	      var merged = collapsedSpanAtEnd(lineObj);
	      var mergedPos = merged && merged.find(0, true);
	      if (merged && (found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0))
	        lineN = lineNo(lineObj = mergedPos.to.line);
	      else
	        return found;
	    }
	  }

	  function coordsCharInner(cm, lineObj, lineNo, x, y) {
	    var innerOff = y - heightAtLine(lineObj);
	    var wrongLine = false, adjust = 2 * cm.display.wrapper.clientWidth;
	    var preparedMeasure = prepareMeasureForLine(cm, lineObj);

	    function getX(ch) {
	      var sp = cursorCoords(cm, Pos(lineNo, ch), "line", lineObj, preparedMeasure);
	      wrongLine = true;
	      if (innerOff > sp.bottom) return sp.left - adjust;
	      else if (innerOff < sp.top) return sp.left + adjust;
	      else wrongLine = false;
	      return sp.left;
	    }

	    var bidi = getOrder(lineObj), dist = lineObj.text.length;
	    var from = lineLeft(lineObj), to = lineRight(lineObj);
	    var fromX = getX(from), fromOutside = wrongLine, toX = getX(to), toOutside = wrongLine;

	    if (x > toX) return PosWithInfo(lineNo, to, toOutside, 1);
	    // Do a binary search between these bounds.
	    for (;;) {
	      if (bidi ? to == from || to == moveVisually(lineObj, from, 1) : to - from <= 1) {
	        var ch = x < fromX || x - fromX <= toX - x ? from : to;
	        var xDiff = x - (ch == from ? fromX : toX);
	        while (isExtendingChar(lineObj.text.charAt(ch))) ++ch;
	        var pos = PosWithInfo(lineNo, ch, ch == from ? fromOutside : toOutside,
	                              xDiff < -1 ? -1 : xDiff > 1 ? 1 : 0);
	        return pos;
	      }
	      var step = Math.ceil(dist / 2), middle = from + step;
	      if (bidi) {
	        middle = from;
	        for (var i = 0; i < step; ++i) middle = moveVisually(lineObj, middle, 1);
	      }
	      var middleX = getX(middle);
	      if (middleX > x) {to = middle; toX = middleX; if (toOutside = wrongLine) toX += 1000; dist = step;}
	      else {from = middle; fromX = middleX; fromOutside = wrongLine; dist -= step;}
	    }
	  }

	  var measureText;
	  // Compute the default text height.
	  function textHeight(display) {
	    if (display.cachedTextHeight != null) return display.cachedTextHeight;
	    if (measureText == null) {
	      measureText = elt("pre");
	      // Measure a bunch of lines, for browsers that compute
	      // fractional heights.
	      for (var i = 0; i < 49; ++i) {
	        measureText.appendChild(document.createTextNode("x"));
	        measureText.appendChild(elt("br"));
	      }
	      measureText.appendChild(document.createTextNode("x"));
	    }
	    removeChildrenAndAdd(display.measure, measureText);
	    var height = measureText.offsetHeight / 50;
	    if (height > 3) display.cachedTextHeight = height;
	    removeChildren(display.measure);
	    return height || 1;
	  }

	  // Compute the default character width.
	  function charWidth(display) {
	    if (display.cachedCharWidth != null) return display.cachedCharWidth;
	    var anchor = elt("span", "xxxxxxxxxx");
	    var pre = elt("pre", [anchor]);
	    removeChildrenAndAdd(display.measure, pre);
	    var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
	    if (width > 2) display.cachedCharWidth = width;
	    return width || 10;
	  }

	  // OPERATIONS

	  // Operations are used to wrap a series of changes to the editor
	  // state in such a way that each change won't have to update the
	  // cursor and display (which would be awkward, slow, and
	  // error-prone). Instead, display updates are batched and then all
	  // combined and executed at once.

	  var operationGroup = null;

	  var nextOpId = 0;
	  // Start a new operation.
	  function startOperation(cm) {
	    cm.curOp = {
	      cm: cm,
	      viewChanged: false,      // Flag that indicates that lines might need to be redrawn
	      startHeight: cm.doc.height, // Used to detect need to update scrollbar
	      forceUpdate: false,      // Used to force a redraw
	      updateInput: null,       // Whether to reset the input textarea
	      typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
	      changeObjs: null,        // Accumulated changes, for firing change events
	      cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
	      cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
	      selectionChanged: false, // Whether the selection needs to be redrawn
	      updateMaxLine: false,    // Set when the widest line needs to be determined anew
	      scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
	      scrollToPos: null,       // Used to scroll to a specific position
	      focus: false,
	      id: ++nextOpId           // Unique ID
	    };
	    if (operationGroup) {
	      operationGroup.ops.push(cm.curOp);
	    } else {
	      cm.curOp.ownsGroup = operationGroup = {
	        ops: [cm.curOp],
	        delayedCallbacks: []
	      };
	    }
	  }

	  function fireCallbacksForOps(group) {
	    // Calls delayed callbacks and cursorActivity handlers until no
	    // new ones appear
	    var callbacks = group.delayedCallbacks, i = 0;
	    do {
	      for (; i < callbacks.length; i++)
	        callbacks[i].call(null);
	      for (var j = 0; j < group.ops.length; j++) {
	        var op = group.ops[j];
	        if (op.cursorActivityHandlers)
	          while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
	            op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm);
	      }
	    } while (i < callbacks.length);
	  }

	  // Finish an operation, updating the display and signalling delayed events
	  function endOperation(cm) {
	    var op = cm.curOp, group = op.ownsGroup;
	    if (!group) return;

	    try { fireCallbacksForOps(group); }
	    finally {
	      operationGroup = null;
	      for (var i = 0; i < group.ops.length; i++)
	        group.ops[i].cm.curOp = null;
	      endOperations(group);
	    }
	  }

	  // The DOM updates done when an operation finishes are batched so
	  // that the minimum number of relayouts are required.
	  function endOperations(group) {
	    var ops = group.ops;
	    for (var i = 0; i < ops.length; i++) // Read DOM
	      endOperation_R1(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Write DOM (maybe)
	      endOperation_W1(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Read DOM
	      endOperation_R2(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Write DOM (maybe)
	      endOperation_W2(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Read DOM
	      endOperation_finish(ops[i]);
	  }

	  function endOperation_R1(op) {
	    var cm = op.cm, display = cm.display;
	    maybeClipScrollbars(cm);
	    if (op.updateMaxLine) findMaxLine(cm);

	    op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
	      op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
	                         op.scrollToPos.to.line >= display.viewTo) ||
	      display.maxLineChanged && cm.options.lineWrapping;
	    op.update = op.mustUpdate &&
	      new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate);
	  }

	  function endOperation_W1(op) {
	    op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
	  }

	  function endOperation_R2(op) {
	    var cm = op.cm, display = cm.display;
	    if (op.updatedDisplay) updateHeightsInViewport(cm);

	    op.barMeasure = measureForScrollbars(cm);

	    // If the max line changed since it was last measured, measure it,
	    // and ensure the document's width matches it.
	    // updateDisplay_W2 will use these properties to do the actual resizing
	    if (display.maxLineChanged && !cm.options.lineWrapping) {
	      op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
	      cm.display.sizerWidth = op.adjustWidthTo;
	      op.barMeasure.scrollWidth =
	        Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
	      op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
	    }

	    if (op.updatedDisplay || op.selectionChanged)
	      op.preparedSelection = display.input.prepareSelection();
	  }

	  function endOperation_W2(op) {
	    var cm = op.cm;

	    if (op.adjustWidthTo != null) {
	      cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
	      if (op.maxScrollLeft < cm.doc.scrollLeft)
	        setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true);
	      cm.display.maxLineChanged = false;
	    }

	    if (op.preparedSelection)
	      cm.display.input.showSelection(op.preparedSelection);
	    if (op.updatedDisplay || op.startHeight != cm.doc.height)
	      updateScrollbars(cm, op.barMeasure);
	    if (op.updatedDisplay)
	      setDocumentHeight(cm, op.barMeasure);

	    if (op.selectionChanged) restartBlink(cm);

	    if (cm.state.focused && op.updateInput)
	      cm.display.input.reset(op.typing);
	    if (op.focus && op.focus == activeElt() && (!document.hasFocus || document.hasFocus()))
	      ensureFocus(op.cm);
	  }

	  function endOperation_finish(op) {
	    var cm = op.cm, display = cm.display, doc = cm.doc;

	    if (op.updatedDisplay) postUpdateDisplay(cm, op.update);

	    // Abort mouse wheel delta measurement, when scrolling explicitly
	    if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
	      display.wheelStartX = display.wheelStartY = null;

	    // Propagate the scroll position to the actual DOM scroller
	    if (op.scrollTop != null && (display.scroller.scrollTop != op.scrollTop || op.forceScroll)) {
	      doc.scrollTop = Math.max(0, Math.min(display.scroller.scrollHeight - display.scroller.clientHeight, op.scrollTop));
	      display.scrollbars.setScrollTop(doc.scrollTop);
	      display.scroller.scrollTop = doc.scrollTop;
	    }
	    if (op.scrollLeft != null && (display.scroller.scrollLeft != op.scrollLeft || op.forceScroll)) {
	      doc.scrollLeft = Math.max(0, Math.min(display.scroller.scrollWidth - display.scroller.clientWidth, op.scrollLeft));
	      display.scrollbars.setScrollLeft(doc.scrollLeft);
	      display.scroller.scrollLeft = doc.scrollLeft;
	      alignHorizontally(cm);
	    }
	    // If we need to scroll a specific position into view, do so.
	    if (op.scrollToPos) {
	      var coords = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
	                                     clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
	      if (op.scrollToPos.isCursor && cm.state.focused) maybeScrollWindow(cm, coords);
	    }

	    // Fire events for markers that are hidden/unidden by editing or
	    // undoing
	    var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
	    if (hidden) for (var i = 0; i < hidden.length; ++i)
	      if (!hidden[i].lines.length) signal(hidden[i], "hide");
	    if (unhidden) for (var i = 0; i < unhidden.length; ++i)
	      if (unhidden[i].lines.length) signal(unhidden[i], "unhide");

	    if (display.wrapper.offsetHeight)
	      doc.scrollTop = cm.display.scroller.scrollTop;

	    // Fire change events, and delayed event handlers
	    if (op.changeObjs)
	      signal(cm, "changes", cm, op.changeObjs);
	    if (op.update)
	      op.update.finish();
	  }

	  // Run the given function in an operation
	  function runInOp(cm, f) {
	    if (cm.curOp) return f();
	    startOperation(cm);
	    try { return f(); }
	    finally { endOperation(cm); }
	  }
	  // Wraps a function in an operation. Returns the wrapped function.
	  function operation(cm, f) {
	    return function() {
	      if (cm.curOp) return f.apply(cm, arguments);
	      startOperation(cm);
	      try { return f.apply(cm, arguments); }
	      finally { endOperation(cm); }
	    };
	  }
	  // Used to add methods to editor and doc instances, wrapping them in
	  // operations.
	  function methodOp(f) {
	    return function() {
	      if (this.curOp) return f.apply(this, arguments);
	      startOperation(this);
	      try { return f.apply(this, arguments); }
	      finally { endOperation(this); }
	    };
	  }
	  function docMethodOp(f) {
	    return function() {
	      var cm = this.cm;
	      if (!cm || cm.curOp) return f.apply(this, arguments);
	      startOperation(cm);
	      try { return f.apply(this, arguments); }
	      finally { endOperation(cm); }
	    };
	  }

	  // VIEW TRACKING

	  // These objects are used to represent the visible (currently drawn)
	  // part of the document. A LineView may correspond to multiple
	  // logical lines, if those are connected by collapsed ranges.
	  function LineView(doc, line, lineN) {
	    // The starting line
	    this.line = line;
	    // Continuing lines, if any
	    this.rest = visualLineContinued(line);
	    // Number of logical lines in this visual line
	    this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
	    this.node = this.text = null;
	    this.hidden = lineIsHidden(doc, line);
	  }

	  // Create a range of LineView objects for the given lines.
	  function buildViewArray(cm, from, to) {
	    var array = [], nextPos;
	    for (var pos = from; pos < to; pos = nextPos) {
	      var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
	      nextPos = pos + view.size;
	      array.push(view);
	    }
	    return array;
	  }

	  // Updates the display.view data structure for a given change to the
	  // document. From and to are in pre-change coordinates. Lendiff is
	  // the amount of lines added or subtracted by the change. This is
	  // used for changes that span multiple lines, or change the way
	  // lines are divided into visual lines. regLineChange (below)
	  // registers single-line changes.
	  function regChange(cm, from, to, lendiff) {
	    if (from == null) from = cm.doc.first;
	    if (to == null) to = cm.doc.first + cm.doc.size;
	    if (!lendiff) lendiff = 0;

	    var display = cm.display;
	    if (lendiff && to < display.viewTo &&
	        (display.updateLineNumbers == null || display.updateLineNumbers > from))
	      display.updateLineNumbers = from;

	    cm.curOp.viewChanged = true;

	    if (from >= display.viewTo) { // Change after
	      if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
	        resetView(cm);
	    } else if (to <= display.viewFrom) { // Change before
	      if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
	        resetView(cm);
	      } else {
	        display.viewFrom += lendiff;
	        display.viewTo += lendiff;
	      }
	    } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
	      resetView(cm);
	    } else if (from <= display.viewFrom) { // Top overlap
	      var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
	      if (cut) {
	        display.view = display.view.slice(cut.index);
	        display.viewFrom = cut.lineN;
	        display.viewTo += lendiff;
	      } else {
	        resetView(cm);
	      }
	    } else if (to >= display.viewTo) { // Bottom overlap
	      var cut = viewCuttingPoint(cm, from, from, -1);
	      if (cut) {
	        display.view = display.view.slice(0, cut.index);
	        display.viewTo = cut.lineN;
	      } else {
	        resetView(cm);
	      }
	    } else { // Gap in the middle
	      var cutTop = viewCuttingPoint(cm, from, from, -1);
	      var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
	      if (cutTop && cutBot) {
	        display.view = display.view.slice(0, cutTop.index)
	          .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
	          .concat(display.view.slice(cutBot.index));
	        display.viewTo += lendiff;
	      } else {
	        resetView(cm);
	      }
	    }

	    var ext = display.externalMeasured;
	    if (ext) {
	      if (to < ext.lineN)
	        ext.lineN += lendiff;
	      else if (from < ext.lineN + ext.size)
	        display.externalMeasured = null;
	    }
	  }

	  // Register a change to a single line. Type must be one of "text",
	  // "gutter", "class", "widget"
	  function regLineChange(cm, line, type) {
	    cm.curOp.viewChanged = true;
	    var display = cm.display, ext = cm.display.externalMeasured;
	    if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
	      display.externalMeasured = null;

	    if (line < display.viewFrom || line >= display.viewTo) return;
	    var lineView = display.view[findViewIndex(cm, line)];
	    if (lineView.node == null) return;
	    var arr = lineView.changes || (lineView.changes = []);
	    if (indexOf(arr, type) == -1) arr.push(type);
	  }

	  // Clear the view.
	  function resetView(cm) {
	    cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
	    cm.display.view = [];
	    cm.display.viewOffset = 0;
	  }

	  // Find the view element corresponding to a given line. Return null
	  // when the line isn't visible.
	  function findViewIndex(cm, n) {
	    if (n >= cm.display.viewTo) return null;
	    n -= cm.display.viewFrom;
	    if (n < 0) return null;
	    var view = cm.display.view;
	    for (var i = 0; i < view.length; i++) {
	      n -= view[i].size;
	      if (n < 0) return i;
	    }
	  }

	  function viewCuttingPoint(cm, oldN, newN, dir) {
	    var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
	    if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
	      return {index: index, lineN: newN};
	    for (var i = 0, n = cm.display.viewFrom; i < index; i++)
	      n += view[i].size;
	    if (n != oldN) {
	      if (dir > 0) {
	        if (index == view.length - 1) return null;
	        diff = (n + view[index].size) - oldN;
	        index++;
	      } else {
	        diff = n - oldN;
	      }
	      oldN += diff; newN += diff;
	    }
	    while (visualLineNo(cm.doc, newN) != newN) {
	      if (index == (dir < 0 ? 0 : view.length - 1)) return null;
	      newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
	      index += dir;
	    }
	    return {index: index, lineN: newN};
	  }

	  // Force the view to cover a given range, adding empty view element
	  // or clipping off existing ones as needed.
	  function adjustView(cm, from, to) {
	    var display = cm.display, view = display.view;
	    if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
	      display.view = buildViewArray(cm, from, to);
	      display.viewFrom = from;
	    } else {
	      if (display.viewFrom > from)
	        display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view);
	      else if (display.viewFrom < from)
	        display.view = display.view.slice(findViewIndex(cm, from));
	      display.viewFrom = from;
	      if (display.viewTo < to)
	        display.view = display.view.concat(buildViewArray(cm, display.viewTo, to));
	      else if (display.viewTo > to)
	        display.view = display.view.slice(0, findViewIndex(cm, to));
	    }
	    display.viewTo = to;
	  }

	  // Count the number of lines in the view whose DOM representation is
	  // out of date (or nonexistent).
	  function countDirtyView(cm) {
	    var view = cm.display.view, dirty = 0;
	    for (var i = 0; i < view.length; i++) {
	      var lineView = view[i];
	      if (!lineView.hidden && (!lineView.node || lineView.changes)) ++dirty;
	    }
	    return dirty;
	  }

	  // EVENT HANDLERS

	  // Attach the necessary event handlers when initializing the editor
	  function registerEventHandlers(cm) {
	    var d = cm.display;
	    on(d.scroller, "mousedown", operation(cm, onMouseDown));
	    // Older IE's will not fire a second mousedown for a double click
	    if (ie && ie_version < 11)
	      on(d.scroller, "dblclick", operation(cm, function(e) {
	        if (signalDOMEvent(cm, e)) return;
	        var pos = posFromMouse(cm, e);
	        if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) return;
	        e_preventDefault(e);
	        var word = cm.findWordAt(pos);
	        extendSelection(cm.doc, word.anchor, word.head);
	      }));
	    else
	      on(d.scroller, "dblclick", function(e) { signalDOMEvent(cm, e) || e_preventDefault(e); });
	    // Some browsers fire contextmenu *after* opening the menu, at
	    // which point we can't mess with it anymore. Context menu is
	    // handled in onMouseDown for these browsers.
	    if (!captureRightClick) on(d.scroller, "contextmenu", function(e) {onContextMenu(cm, e);});

	    // Used to suppress mouse event handling when a touch happens
	    var touchFinished, prevTouch = {end: 0};
	    function finishTouch() {
	      if (d.activeTouch) {
	        touchFinished = setTimeout(function() {d.activeTouch = null;}, 1000);
	        prevTouch = d.activeTouch;
	        prevTouch.end = +new Date;
	      }
	    };
	    function isMouseLikeTouchEvent(e) {
	      if (e.touches.length != 1) return false;
	      var touch = e.touches[0];
	      return touch.radiusX <= 1 && touch.radiusY <= 1;
	    }
	    function farAway(touch, other) {
	      if (other.left == null) return true;
	      var dx = other.left - touch.left, dy = other.top - touch.top;
	      return dx * dx + dy * dy > 20 * 20;
	    }
	    on(d.scroller, "touchstart", function(e) {
	      if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e)) {
	        clearTimeout(touchFinished);
	        var now = +new Date;
	        d.activeTouch = {start: now, moved: false,
	                         prev: now - prevTouch.end <= 300 ? prevTouch : null};
	        if (e.touches.length == 1) {
	          d.activeTouch.left = e.touches[0].pageX;
	          d.activeTouch.top = e.touches[0].pageY;
	        }
	      }
	    });
	    on(d.scroller, "touchmove", function() {
	      if (d.activeTouch) d.activeTouch.moved = true;
	    });
	    on(d.scroller, "touchend", function(e) {
	      var touch = d.activeTouch;
	      if (touch && !eventInWidget(d, e) && touch.left != null &&
	          !touch.moved && new Date - touch.start < 300) {
	        var pos = cm.coordsChar(d.activeTouch, "page"), range;
	        if (!touch.prev || farAway(touch, touch.prev)) // Single tap
	          range = new Range(pos, pos);
	        else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
	          range = cm.findWordAt(pos);
	        else // Triple tap
	          range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0)));
	        cm.setSelection(range.anchor, range.head);
	        cm.focus();
	        e_preventDefault(e);
	      }
	      finishTouch();
	    });
	    on(d.scroller, "touchcancel", finishTouch);

	    // Sync scrolling between fake scrollbars and real scrollable
	    // area, ensure viewport is updated when scrolling.
	    on(d.scroller, "scroll", function() {
	      if (d.scroller.clientHeight) {
	        setScrollTop(cm, d.scroller.scrollTop);
	        setScrollLeft(cm, d.scroller.scrollLeft, true);
	        signal(cm, "scroll", cm);
	      }
	    });

	    // Listen to wheel events in order to try and update the viewport on time.
	    on(d.scroller, "mousewheel", function(e){onScrollWheel(cm, e);});
	    on(d.scroller, "DOMMouseScroll", function(e){onScrollWheel(cm, e);});

	    // Prevent wrapper from ever scrolling
	    on(d.wrapper, "scroll", function() { d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; });

	    d.dragFunctions = {
	      enter: function(e) {if (!signalDOMEvent(cm, e)) e_stop(e);},
	      over: function(e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e); }},
	      start: function(e){onDragStart(cm, e);},
	      drop: operation(cm, onDrop),
	      leave: function(e) {if (!signalDOMEvent(cm, e)) { clearDragCursor(cm); }}
	    };

	    var inp = d.input.getField();
	    on(inp, "keyup", function(e) { onKeyUp.call(cm, e); });
	    on(inp, "keydown", operation(cm, onKeyDown));
	    on(inp, "keypress", operation(cm, onKeyPress));
	    on(inp, "focus", bind(onFocus, cm));
	    on(inp, "blur", bind(onBlur, cm));
	  }

	  function dragDropChanged(cm, value, old) {
	    var wasOn = old && old != CodeMirror.Init;
	    if (!value != !wasOn) {
	      var funcs = cm.display.dragFunctions;
	      var toggle = value ? on : off;
	      toggle(cm.display.scroller, "dragstart", funcs.start);
	      toggle(cm.display.scroller, "dragenter", funcs.enter);
	      toggle(cm.display.scroller, "dragover", funcs.over);
	      toggle(cm.display.scroller, "dragleave", funcs.leave);
	      toggle(cm.display.scroller, "drop", funcs.drop);
	    }
	  }

	  // Called when the window resizes
	  function onResize(cm) {
	    var d = cm.display;
	    if (d.lastWrapHeight == d.wrapper.clientHeight && d.lastWrapWidth == d.wrapper.clientWidth)
	      return;
	    // Might be a text scaling operation, clear size caches.
	    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
	    d.scrollbarsClipped = false;
	    cm.setSize();
	  }

	  // MOUSE EVENTS

	  // Return true when the given mouse event happened in a widget
	  function eventInWidget(display, e) {
	    for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
	      if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
	          (n.parentNode == display.sizer && n != display.mover))
	        return true;
	    }
	  }

	  // Given a mouse event, find the corresponding position. If liberal
	  // is false, it checks whether a gutter or scrollbar was clicked,
	  // and returns null if it was. forRect is used by rectangular
	  // selections, and tries to estimate a character position even for
	  // coordinates beyond the right of the text.
	  function posFromMouse(cm, e, liberal, forRect) {
	    var display = cm.display;
	    if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") return null;

	    var x, y, space = display.lineSpace.getBoundingClientRect();
	    // Fails unpredictably on IE[67] when mouse is dragged around quickly.
	    try { x = e.clientX - space.left; y = e.clientY - space.top; }
	    catch (e) { return null; }
	    var coords = coordsChar(cm, x, y), line;
	    if (forRect && coords.xRel == 1 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
	      var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
	      coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
	    }
	    return coords;
	  }

	  // A mouse down can be a single click, double click, triple click,
	  // start of selection drag, start of text drag, new cursor
	  // (ctrl-click), rectangle drag (alt-drag), or xwin
	  // middle-click-paste. Or it might be a click on something we should
	  // not interfere with, such as a scrollbar or widget.
	  function onMouseDown(e) {
	    var cm = this, display = cm.display;
	    if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) return;
	    display.shift = e.shiftKey;

	    if (eventInWidget(display, e)) {
	      if (!webkit) {
	        // Briefly turn off draggability, to allow widgets to do
	        // normal dragging things.
	        display.scroller.draggable = false;
	        setTimeout(function(){display.scroller.draggable = true;}, 100);
	      }
	      return;
	    }
	    if (clickInGutter(cm, e)) return;
	    var start = posFromMouse(cm, e);
	    window.focus();

	    switch (e_button(e)) {
	    case 1:
	      // #3261: make sure, that we're not starting a second selection
	      if (cm.state.selectingText)
	        cm.state.selectingText(e);
	      else if (start)
	        leftButtonDown(cm, e, start);
	      else if (e_target(e) == display.scroller)
	        e_preventDefault(e);
	      break;
	    case 2:
	      if (webkit) cm.state.lastMiddleDown = +new Date;
	      if (start) extendSelection(cm.doc, start);
	      setTimeout(function() {display.input.focus();}, 20);
	      e_preventDefault(e);
	      break;
	    case 3:
	      if (captureRightClick) onContextMenu(cm, e);
	      else delayBlurEvent(cm);
	      break;
	    }
	  }

	  var lastClick, lastDoubleClick;
	  function leftButtonDown(cm, e, start) {
	    if (ie) setTimeout(bind(ensureFocus, cm), 0);
	    else cm.curOp.focus = activeElt();

	    var now = +new Date, type;
	    if (lastDoubleClick && lastDoubleClick.time > now - 400 && cmp(lastDoubleClick.pos, start) == 0) {
	      type = "triple";
	    } else if (lastClick && lastClick.time > now - 400 && cmp(lastClick.pos, start) == 0) {
	      type = "double";
	      lastDoubleClick = {time: now, pos: start};
	    } else {
	      type = "single";
	      lastClick = {time: now, pos: start};
	    }

	    var sel = cm.doc.sel, modifier = mac ? e.metaKey : e.ctrlKey, contained;
	    if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() &&
	        type == "single" && (contained = sel.contains(start)) > -1 &&
	        (cmp((contained = sel.ranges[contained]).from(), start) < 0 || start.xRel > 0) &&
	        (cmp(contained.to(), start) > 0 || start.xRel < 0))
	      leftButtonStartDrag(cm, e, start, modifier);
	    else
	      leftButtonSelect(cm, e, start, type, modifier);
	  }

	  // Start a text drag. When it ends, see if any dragging actually
	  // happen, and treat as a click if it didn't.
	  function leftButtonStartDrag(cm, e, start, modifier) {
	    var display = cm.display, startTime = +new Date;
	    var dragEnd = operation(cm, function(e2) {
	      if (webkit) display.scroller.draggable = false;
	      cm.state.draggingText = false;
	      off(document, "mouseup", dragEnd);
	      off(display.scroller, "drop", dragEnd);
	      if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
	        e_preventDefault(e2);
	        if (!modifier && +new Date - 200 < startTime)
	          extendSelection(cm.doc, start);
	        // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
	        if (webkit || ie && ie_version == 9)
	          setTimeout(function() {document.body.focus(); display.input.focus();}, 20);
	        else
	          display.input.focus();
	      }
	    });
	    // Let the drag handler handle this.
	    if (webkit) display.scroller.draggable = true;
	    cm.state.draggingText = dragEnd;
	    // IE's approach to draggable
	    if (display.scroller.dragDrop) display.scroller.dragDrop();
	    on(document, "mouseup", dragEnd);
	    on(display.scroller, "drop", dragEnd);
	  }

	  // Normal selection, as opposed to text dragging.
	  function leftButtonSelect(cm, e, start, type, addNew) {
	    var display = cm.display, doc = cm.doc;
	    e_preventDefault(e);

	    var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges;
	    if (addNew && !e.shiftKey) {
	      ourIndex = doc.sel.contains(start);
	      if (ourIndex > -1)
	        ourRange = ranges[ourIndex];
	      else
	        ourRange = new Range(start, start);
	    } else {
	      ourRange = doc.sel.primary();
	      ourIndex = doc.sel.primIndex;
	    }

	    if (chromeOS ? e.shiftKey && e.metaKey : e.altKey) {
	      type = "rect";
	      if (!addNew) ourRange = new Range(start, start);
	      start = posFromMouse(cm, e, true, true);
	      ourIndex = -1;
	    } else if (type == "double") {
	      var word = cm.findWordAt(start);
	      if (cm.display.shift || doc.extend)
	        ourRange = extendRange(doc, ourRange, word.anchor, word.head);
	      else
	        ourRange = word;
	    } else if (type == "triple") {
	      var line = new Range(Pos(start.line, 0), clipPos(doc, Pos(start.line + 1, 0)));
	      if (cm.display.shift || doc.extend)
	        ourRange = extendRange(doc, ourRange, line.anchor, line.head);
	      else
	        ourRange = line;
	    } else {
	      ourRange = extendRange(doc, ourRange, start);
	    }

	    if (!addNew) {
	      ourIndex = 0;
	      setSelection(doc, new Selection([ourRange], 0), sel_mouse);
	      startSel = doc.sel;
	    } else if (ourIndex == -1) {
	      ourIndex = ranges.length;
	      setSelection(doc, normalizeSelection(ranges.concat([ourRange]), ourIndex),
	                   {scroll: false, origin: "*mouse"});
	    } else if (ranges.length > 1 && ranges[ourIndex].empty() && type == "single" && !e.shiftKey) {
	      setSelection(doc, normalizeSelection(ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
	                   {scroll: false, origin: "*mouse"});
	      startSel = doc.sel;
	    } else {
	      replaceOneSelection(doc, ourIndex, ourRange, sel_mouse);
	    }

	    var lastPos = start;
	    function extendTo(pos) {
	      if (cmp(lastPos, pos) == 0) return;
	      lastPos = pos;

	      if (type == "rect") {
	        var ranges = [], tabSize = cm.options.tabSize;
	        var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize);
	        var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize);
	        var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
	        for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
	             line <= end; line++) {
	          var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize);
	          if (left == right)
	            ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos)));
	          else if (text.length > leftPos)
	            ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize))));
	        }
	        if (!ranges.length) ranges.push(new Range(start, start));
	        setSelection(doc, normalizeSelection(startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
	                     {origin: "*mouse", scroll: false});
	        cm.scrollIntoView(pos);
	      } else {
	        var oldRange = ourRange;
	        var anchor = oldRange.anchor, head = pos;
	        if (type != "single") {
	          if (type == "double")
	            var range = cm.findWordAt(pos);
	          else
	            var range = new Range(Pos(pos.line, 0), clipPos(doc, Pos(pos.line + 1, 0)));
	          if (cmp(range.anchor, anchor) > 0) {
	            head = range.head;
	            anchor = minPos(oldRange.from(), range.anchor);
	          } else {
	            head = range.anchor;
	            anchor = maxPos(oldRange.to(), range.head);
	          }
	        }
	        var ranges = startSel.ranges.slice(0);
	        ranges[ourIndex] = new Range(clipPos(doc, anchor), head);
	        setSelection(doc, normalizeSelection(ranges, ourIndex), sel_mouse);
	      }
	    }

	    var editorSize = display.wrapper.getBoundingClientRect();
	    // Used to ensure timeout re-tries don't fire when another extend
	    // happened in the meantime (clearTimeout isn't reliable -- at
	    // least on Chrome, the timeouts still happen even when cleared,
	    // if the clear happens after their scheduled firing time).
	    var counter = 0;

	    function extend(e) {
	      var curCount = ++counter;
	      var cur = posFromMouse(cm, e, true, type == "rect");
	      if (!cur) return;
	      if (cmp(cur, lastPos) != 0) {
	        cm.curOp.focus = activeElt();
	        extendTo(cur);
	        var visible = visibleLines(display, doc);
	        if (cur.line >= visible.to || cur.line < visible.from)
	          setTimeout(operation(cm, function(){if (counter == curCount) extend(e);}), 150);
	      } else {
	        var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
	        if (outside) setTimeout(operation(cm, function() {
	          if (counter != curCount) return;
	          display.scroller.scrollTop += outside;
	          extend(e);
	        }), 50);
	      }
	    }

	    function done(e) {
	      cm.state.selectingText = false;
	      counter = Infinity;
	      e_preventDefault(e);
	      display.input.focus();
	      off(document, "mousemove", move);
	      off(document, "mouseup", up);
	      doc.history.lastSelOrigin = null;
	    }

	    var move = operation(cm, function(e) {
	      if (!e_button(e)) done(e);
	      else extend(e);
	    });
	    var up = operation(cm, done);
	    cm.state.selectingText = up;
	    on(document, "mousemove", move);
	    on(document, "mouseup", up);
	  }

	  // Determines whether an event happened in the gutter, and fires the
	  // handlers for the corresponding event.
	  function gutterEvent(cm, e, type, prevent) {
	    try { var mX = e.clientX, mY = e.clientY; }
	    catch(e) { return false; }
	    if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) return false;
	    if (prevent) e_preventDefault(e);

	    var display = cm.display;
	    var lineBox = display.lineDiv.getBoundingClientRect();

	    if (mY > lineBox.bottom || !hasHandler(cm, type)) return e_defaultPrevented(e);
	    mY -= lineBox.top - display.viewOffset;

	    for (var i = 0; i < cm.options.gutters.length; ++i) {
	      var g = display.gutters.childNodes[i];
	      if (g && g.getBoundingClientRect().right >= mX) {
	        var line = lineAtHeight(cm.doc, mY);
	        var gutter = cm.options.gutters[i];
	        signal(cm, type, cm, line, gutter, e);
	        return e_defaultPrevented(e);
	      }
	    }
	  }

	  function clickInGutter(cm, e) {
	    return gutterEvent(cm, e, "gutterClick", true);
	  }

	  // Kludge to work around strange IE behavior where it'll sometimes
	  // re-fire a series of drag-related events right after the drop (#1551)
	  var lastDrop = 0;

	  function onDrop(e) {
	    var cm = this;
	    clearDragCursor(cm);
	    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
	      return;
	    e_preventDefault(e);
	    if (ie) lastDrop = +new Date;
	    var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
	    if (!pos || cm.isReadOnly()) return;
	    // Might be a file drop, in which case we simply extract the text
	    // and insert it.
	    if (files && files.length && window.FileReader && window.File) {
	      var n = files.length, text = Array(n), read = 0;
	      var loadFile = function(file, i) {
	        if (cm.options.allowDropFileTypes &&
	            indexOf(cm.options.allowDropFileTypes, file.type) == -1)
	          return;

	        var reader = new FileReader;
	        reader.onload = operation(cm, function() {
	          var content = reader.result;
	          if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) content = "";
	          text[i] = content;
	          if (++read == n) {
	            pos = clipPos(cm.doc, pos);
	            var change = {from: pos, to: pos,
	                          text: cm.doc.splitLines(text.join(cm.doc.lineSeparator())),
	                          origin: "paste"};
	            makeChange(cm.doc, change);
	            setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)));
	          }
	        });
	        reader.readAsText(file);
	      };
	      for (var i = 0; i < n; ++i) loadFile(files[i], i);
	    } else { // Normal drop
	      // Don't do a replace if the drop happened inside of the selected text.
	      if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
	        cm.state.draggingText(e);
	        // Ensure the editor is re-focused
	        setTimeout(function() {cm.display.input.focus();}, 20);
	        return;
	      }
	      try {
	        var text = e.dataTransfer.getData("Text");
	        if (text) {
	          if (cm.state.draggingText && !(mac ? e.altKey : e.ctrlKey))
	            var selected = cm.listSelections();
	          setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
	          if (selected) for (var i = 0; i < selected.length; ++i)
	            replaceRange(cm.doc, "", selected[i].anchor, selected[i].head, "drag");
	          cm.replaceSelection(text, "around", "paste");
	          cm.display.input.focus();
	        }
	      }
	      catch(e){}
	    }
	  }

	  function onDragStart(cm, e) {
	    if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return; }
	    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) return;

	    e.dataTransfer.setData("Text", cm.getSelection());
	    e.dataTransfer.effectAllowed = "copyMove"

	    // Use dummy image instead of default browsers image.
	    // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
	    if (e.dataTransfer.setDragImage && !safari) {
	      var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
	      img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
	      if (presto) {
	        img.width = img.height = 1;
	        cm.display.wrapper.appendChild(img);
	        // Force a relayout, or Opera won't use our image for some obscure reason
	        img._top = img.offsetTop;
	      }
	      e.dataTransfer.setDragImage(img, 0, 0);
	      if (presto) img.parentNode.removeChild(img);
	    }
	  }

	  function onDragOver(cm, e) {
	    var pos = posFromMouse(cm, e);
	    if (!pos) return;
	    var frag = document.createDocumentFragment();
	    drawSelectionCursor(cm, pos, frag);
	    if (!cm.display.dragCursor) {
	      cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors");
	      cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv);
	    }
	    removeChildrenAndAdd(cm.display.dragCursor, frag);
	  }

	  function clearDragCursor(cm) {
	    if (cm.display.dragCursor) {
	      cm.display.lineSpace.removeChild(cm.display.dragCursor);
	      cm.display.dragCursor = null;
	    }
	  }

	  // SCROLL EVENTS

	  // Sync the scrollable area and scrollbars, ensure the viewport
	  // covers the visible area.
	  function setScrollTop(cm, val) {
	    if (Math.abs(cm.doc.scrollTop - val) < 2) return;
	    cm.doc.scrollTop = val;
	    if (!gecko) updateDisplaySimple(cm, {top: val});
	    if (cm.display.scroller.scrollTop != val) cm.display.scroller.scrollTop = val;
	    cm.display.scrollbars.setScrollTop(val);
	    if (gecko) updateDisplaySimple(cm);
	    startWorker(cm, 100);
	  }
	  // Sync scroller and scrollbar, ensure the gutter elements are
	  // aligned.
	  function setScrollLeft(cm, val, isScroller) {
	    if (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) return;
	    val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth);
	    cm.doc.scrollLeft = val;
	    alignHorizontally(cm);
	    if (cm.display.scroller.scrollLeft != val) cm.display.scroller.scrollLeft = val;
	    cm.display.scrollbars.setScrollLeft(val);
	  }

	  // Since the delta values reported on mouse wheel events are
	  // unstandardized between browsers and even browser versions, and
	  // generally horribly unpredictable, this code starts by measuring
	  // the scroll effect that the first few mouse wheel events have,
	  // and, from that, detects the way it can convert deltas to pixel
	  // offsets afterwards.
	  //
	  // The reason we want to know the amount a wheel event will scroll
	  // is that it gives us a chance to update the display before the
	  // actual scrolling happens, reducing flickering.

	  var wheelSamples = 0, wheelPixelsPerUnit = null;
	  // Fill in a browser-detected starting value on browsers where we
	  // know one. These don't have to be accurate -- the result of them
	  // being wrong would just be a slight flicker on the first wheel
	  // scroll (if it is large enough).
	  if (ie) wheelPixelsPerUnit = -.53;
	  else if (gecko) wheelPixelsPerUnit = 15;
	  else if (chrome) wheelPixelsPerUnit = -.7;
	  else if (safari) wheelPixelsPerUnit = -1/3;

	  var wheelEventDelta = function(e) {
	    var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
	    if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) dx = e.detail;
	    if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) dy = e.detail;
	    else if (dy == null) dy = e.wheelDelta;
	    return {x: dx, y: dy};
	  };
	  CodeMirror.wheelEventPixels = function(e) {
	    var delta = wheelEventDelta(e);
	    delta.x *= wheelPixelsPerUnit;
	    delta.y *= wheelPixelsPerUnit;
	    return delta;
	  };

	  function onScrollWheel(cm, e) {
	    var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y;

	    var display = cm.display, scroll = display.scroller;
	    // Quit if there's nothing to scroll here
	    var canScrollX = scroll.scrollWidth > scroll.clientWidth;
	    var canScrollY = scroll.scrollHeight > scroll.clientHeight;
	    if (!(dx && canScrollX || dy && canScrollY)) return;

	    // Webkit browsers on OS X abort momentum scrolls when the target
	    // of the scroll event is removed from the scrollable element.
	    // This hack (see related code in patchDisplay) makes sure the
	    // element is kept around.
	    if (dy && mac && webkit) {
	      outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
	        for (var i = 0; i < view.length; i++) {
	          if (view[i].node == cur) {
	            cm.display.currentWheelTarget = cur;
	            break outer;
	          }
	        }
	      }
	    }

	    // On some browsers, horizontal scrolling will cause redraws to
	    // happen before the gutter has been realigned, causing it to
	    // wriggle around in a most unseemly way. When we have an
	    // estimated pixels/delta value, we just handle horizontal
	    // scrolling entirely here. It'll be slightly off from native, but
	    // better than glitching out.
	    if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
	      if (dy && canScrollY)
	        setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight)));
	      setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth)));
	      // Only prevent default scrolling if vertical scrolling is
	      // actually possible. Otherwise, it causes vertical scroll
	      // jitter on OSX trackpads when deltaX is small and deltaY
	      // is large (issue #3579)
	      if (!dy || (dy && canScrollY))
	        e_preventDefault(e);
	      display.wheelStartX = null; // Abort measurement, if in progress
	      return;
	    }

	    // 'Project' the visible viewport to cover the area that is being
	    // scrolled into view (if we know enough to estimate it).
	    if (dy && wheelPixelsPerUnit != null) {
	      var pixels = dy * wheelPixelsPerUnit;
	      var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
	      if (pixels < 0) top = Math.max(0, top + pixels - 50);
	      else bot = Math.min(cm.doc.height, bot + pixels + 50);
	      updateDisplaySimple(cm, {top: top, bottom: bot});
	    }

	    if (wheelSamples < 20) {
	      if (display.wheelStartX == null) {
	        display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop;
	        display.wheelDX = dx; display.wheelDY = dy;
	        setTimeout(function() {
	          if (display.wheelStartX == null) return;
	          var movedX = scroll.scrollLeft - display.wheelStartX;
	          var movedY = scroll.scrollTop - display.wheelStartY;
	          var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
	            (movedX && display.wheelDX && movedX / display.wheelDX);
	          display.wheelStartX = display.wheelStartY = null;
	          if (!sample) return;
	          wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
	          ++wheelSamples;
	        }, 200);
	      } else {
	        display.wheelDX += dx; display.wheelDY += dy;
	      }
	    }
	  }

	  // KEY EVENTS

	  // Run a handler that was bound to a key.
	  function doHandleBinding(cm, bound, dropShift) {
	    if (typeof bound == "string") {
	      bound = commands[bound];
	      if (!bound) return false;
	    }
	    // Ensure previous input has been read, so that the handler sees a
	    // consistent view of the document
	    cm.display.input.ensurePolled();
	    var prevShift = cm.display.shift, done = false;
	    try {
	      if (cm.isReadOnly()) cm.state.suppressEdits = true;
	      if (dropShift) cm.display.shift = false;
	      done = bound(cm) != Pass;
	    } finally {
	      cm.display.shift = prevShift;
	      cm.state.suppressEdits = false;
	    }
	    return done;
	  }

	  function lookupKeyForEditor(cm, name, handle) {
	    for (var i = 0; i < cm.state.keyMaps.length; i++) {
	      var result = lookupKey(name, cm.state.keyMaps[i], handle, cm);
	      if (result) return result;
	    }
	    return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
	      || lookupKey(name, cm.options.keyMap, handle, cm);
	  }

	  var stopSeq = new Delayed;
	  function dispatchKey(cm, name, e, handle) {
	    var seq = cm.state.keySeq;
	    if (seq) {
	      if (isModifierKey(name)) return "handled";
	      stopSeq.set(50, function() {
	        if (cm.state.keySeq == seq) {
	          cm.state.keySeq = null;
	          cm.display.input.reset();
	        }
	      });
	      name = seq + " " + name;
	    }
	    var result = lookupKeyForEditor(cm, name, handle);

	    if (result == "multi")
	      cm.state.keySeq = name;
	    if (result == "handled")
	      signalLater(cm, "keyHandled", cm, name, e);

	    if (result == "handled" || result == "multi") {
	      e_preventDefault(e);
	      restartBlink(cm);
	    }

	    if (seq && !result && /\'$/.test(name)) {
	      e_preventDefault(e);
	      return true;
	    }
	    return !!result;
	  }

	  // Handle a key from the keydown event.
	  function handleKeyBinding(cm, e) {
	    var name = keyName(e, true);
	    if (!name) return false;

	    if (e.shiftKey && !cm.state.keySeq) {
	      // First try to resolve full name (including 'Shift-'). Failing
	      // that, see if there is a cursor-motion command (starting with
	      // 'go') bound to the keyname without 'Shift-'.
	      return dispatchKey(cm, "Shift-" + name, e, function(b) {return doHandleBinding(cm, b, true);})
	          || dispatchKey(cm, name, e, function(b) {
	               if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
	                 return doHandleBinding(cm, b);
	             });
	    } else {
	      return dispatchKey(cm, name, e, function(b) { return doHandleBinding(cm, b); });
	    }
	  }

	  // Handle a key from the keypress event
	  function handleCharBinding(cm, e, ch) {
	    return dispatchKey(cm, "'" + ch + "'", e,
	                       function(b) { return doHandleBinding(cm, b, true); });
	  }

	  var lastStoppedKey = null;
	  function onKeyDown(e) {
	    var cm = this;
	    cm.curOp.focus = activeElt();
	    if (signalDOMEvent(cm, e)) return;
	    // IE does strange things with escape.
	    if (ie && ie_version < 11 && e.keyCode == 27) e.returnValue = false;
	    var code = e.keyCode;
	    cm.display.shift = code == 16 || e.shiftKey;
	    var handled = handleKeyBinding(cm, e);
	    if (presto) {
	      lastStoppedKey = handled ? code : null;
	      // Opera has no cut event... we try to at least catch the key combo
	      if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
	        cm.replaceSelection("", null, "cut");
	    }

	    // Turn mouse into crosshair when Alt is held on Mac.
	    if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
	      showCrossHair(cm);
	  }

	  function showCrossHair(cm) {
	    var lineDiv = cm.display.lineDiv;
	    addClass(lineDiv, "CodeMirror-crosshair");

	    function up(e) {
	      if (e.keyCode == 18 || !e.altKey) {
	        rmClass(lineDiv, "CodeMirror-crosshair");
	        off(document, "keyup", up);
	        off(document, "mouseover", up);
	      }
	    }
	    on(document, "keyup", up);
	    on(document, "mouseover", up);
	  }

	  function onKeyUp(e) {
	    if (e.keyCode == 16) this.doc.sel.shift = false;
	    signalDOMEvent(this, e);
	  }

	  function onKeyPress(e) {
	    var cm = this;
	    if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) return;
	    var keyCode = e.keyCode, charCode = e.charCode;
	    if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return;}
	    if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) return;
	    var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
	    if (handleCharBinding(cm, e, ch)) return;
	    cm.display.input.onKeyPress(e);
	  }

	  // FOCUS/BLUR EVENTS

	  function delayBlurEvent(cm) {
	    cm.state.delayingBlurEvent = true;
	    setTimeout(function() {
	      if (cm.state.delayingBlurEvent) {
	        cm.state.delayingBlurEvent = false;
	        onBlur(cm);
	      }
	    }, 100);
	  }

	  function onFocus(cm) {
	    if (cm.state.delayingBlurEvent) cm.state.delayingBlurEvent = false;

	    if (cm.options.readOnly == "nocursor") return;
	    if (!cm.state.focused) {
	      signal(cm, "focus", cm);
	      cm.state.focused = true;
	      addClass(cm.display.wrapper, "CodeMirror-focused");
	      // This test prevents this from firing when a context
	      // menu is closed (since the input reset would kill the
	      // select-all detection hack)
	      if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
	        cm.display.input.reset();
	        if (webkit) setTimeout(function() { cm.display.input.reset(true); }, 20); // Issue #1730
	      }
	      cm.display.input.receivedFocus();
	    }
	    restartBlink(cm);
	  }
	  function onBlur(cm) {
	    if (cm.state.delayingBlurEvent) return;

	    if (cm.state.focused) {
	      signal(cm, "blur", cm);
	      cm.state.focused = false;
	      rmClass(cm.display.wrapper, "CodeMirror-focused");
	    }
	    clearInterval(cm.display.blinker);
	    setTimeout(function() {if (!cm.state.focused) cm.display.shift = false;}, 150);
	  }

	  // CONTEXT MENU HANDLING

	  // To make the context menu work, we need to briefly unhide the
	  // textarea (making it as unobtrusive as possible) to let the
	  // right-click take effect on it.
	  function onContextMenu(cm, e) {
	    if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) return;
	    if (signalDOMEvent(cm, e, "contextmenu")) return;
	    cm.display.input.onContextMenu(e);
	  }

	  function contextMenuInGutter(cm, e) {
	    if (!hasHandler(cm, "gutterContextMenu")) return false;
	    return gutterEvent(cm, e, "gutterContextMenu", false);
	  }

	  // UPDATING

	  // Compute the position of the end of a change (its 'to' property
	  // refers to the pre-change end).
	  var changeEnd = CodeMirror.changeEnd = function(change) {
	    if (!change.text) return change.to;
	    return Pos(change.from.line + change.text.length - 1,
	               lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0));
	  };

	  // Adjust a position to refer to the post-change position of the
	  // same text, or the end of the change if the change covers it.
	  function adjustForChange(pos, change) {
	    if (cmp(pos, change.from) < 0) return pos;
	    if (cmp(pos, change.to) <= 0) return changeEnd(change);

	    var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
	    if (pos.line == change.to.line) ch += changeEnd(change).ch - change.to.ch;
	    return Pos(line, ch);
	  }

	  function computeSelAfterChange(doc, change) {
	    var out = [];
	    for (var i = 0; i < doc.sel.ranges.length; i++) {
	      var range = doc.sel.ranges[i];
	      out.push(new Range(adjustForChange(range.anchor, change),
	                         adjustForChange(range.head, change)));
	    }
	    return normalizeSelection(out, doc.sel.primIndex);
	  }

	  function offsetPos(pos, old, nw) {
	    if (pos.line == old.line)
	      return Pos(nw.line, pos.ch - old.ch + nw.ch);
	    else
	      return Pos(nw.line + (pos.line - old.line), pos.ch);
	  }

	  // Used by replaceSelections to allow moving the selection to the
	  // start or around the replaced test. Hint may be "start" or "around".
	  function computeReplacedSel(doc, changes, hint) {
	    var out = [];
	    var oldPrev = Pos(doc.first, 0), newPrev = oldPrev;
	    for (var i = 0; i < changes.length; i++) {
	      var change = changes[i];
	      var from = offsetPos(change.from, oldPrev, newPrev);
	      var to = offsetPos(changeEnd(change), oldPrev, newPrev);
	      oldPrev = change.to;
	      newPrev = to;
	      if (hint == "around") {
	        var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0;
	        out[i] = new Range(inv ? to : from, inv ? from : to);
	      } else {
	        out[i] = new Range(from, from);
	      }
	    }
	    return new Selection(out, doc.sel.primIndex);
	  }

	  // Allow "beforeChange" event handlers to influence a change
	  function filterChange(doc, change, update) {
	    var obj = {
	      canceled: false,
	      from: change.from,
	      to: change.to,
	      text: change.text,
	      origin: change.origin,
	      cancel: function() { this.canceled = true; }
	    };
	    if (update) obj.update = function(from, to, text, origin) {
	      if (from) this.from = clipPos(doc, from);
	      if (to) this.to = clipPos(doc, to);
	      if (text) this.text = text;
	      if (origin !== undefined) this.origin = origin;
	    };
	    signal(doc, "beforeChange", doc, obj);
	    if (doc.cm) signal(doc.cm, "beforeChange", doc.cm, obj);

	    if (obj.canceled) return null;
	    return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin};
	  }

	  // Apply a change to a document, and add it to the document's
	  // history, and propagating it to all linked documents.
	  function makeChange(doc, change, ignoreReadOnly) {
	    if (doc.cm) {
	      if (!doc.cm.curOp) return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly);
	      if (doc.cm.state.suppressEdits) return;
	    }

	    if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
	      change = filterChange(doc, change, true);
	      if (!change) return;
	    }

	    // Possibly split or suppress the update based on the presence
	    // of read-only spans in its range.
	    var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
	    if (split) {
	      for (var i = split.length - 1; i >= 0; --i)
	        makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text});
	    } else {
	      makeChangeInner(doc, change);
	    }
	  }

	  function makeChangeInner(doc, change) {
	    if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) return;
	    var selAfter = computeSelAfterChange(doc, change);
	    addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);

	    makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
	    var rebased = [];

	    linkedDocs(doc, function(doc, sharedHist) {
	      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	        rebaseHist(doc.history, change);
	        rebased.push(doc.history);
	      }
	      makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
	    });
	  }

	  // Revert a change stored in a document's history.
	  function makeChangeFromHistory(doc, type, allowSelectionOnly) {
	    if (doc.cm && doc.cm.state.suppressEdits) return;

	    var hist = doc.history, event, selAfter = doc.sel;
	    var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;

	    // Verify that there is a useable event (so that ctrl-z won't
	    // needlessly clear selection events)
	    for (var i = 0; i < source.length; i++) {
	      event = source[i];
	      if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
	        break;
	    }
	    if (i == source.length) return;
	    hist.lastOrigin = hist.lastSelOrigin = null;

	    for (;;) {
	      event = source.pop();
	      if (event.ranges) {
	        pushSelectionToHistory(event, dest);
	        if (allowSelectionOnly && !event.equals(doc.sel)) {
	          setSelection(doc, event, {clearRedo: false});
	          return;
	        }
	        selAfter = event;
	      }
	      else break;
	    }

	    // Build up a reverse change object to add to the opposite history
	    // stack (redo when undoing, and vice versa).
	    var antiChanges = [];
	    pushSelectionToHistory(selAfter, dest);
	    dest.push({changes: antiChanges, generation: hist.generation});
	    hist.generation = event.generation || ++hist.maxGeneration;

	    var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

	    for (var i = event.changes.length - 1; i >= 0; --i) {
	      var change = event.changes[i];
	      change.origin = type;
	      if (filter && !filterChange(doc, change, false)) {
	        source.length = 0;
	        return;
	      }

	      antiChanges.push(historyChangeFromChange(doc, change));

	      var after = i ? computeSelAfterChange(doc, change) : lst(source);
	      makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
	      if (!i && doc.cm) doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)});
	      var rebased = [];

	      // Propagate to the linked documents
	      linkedDocs(doc, function(doc, sharedHist) {
	        if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	          rebaseHist(doc.history, change);
	          rebased.push(doc.history);
	        }
	        makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
	      });
	    }
	  }

	  // Sub-views need their line numbers shifted when text is added
	  // above or below them in the parent document.
	  function shiftDoc(doc, distance) {
	    if (distance == 0) return;
	    doc.first += distance;
	    doc.sel = new Selection(map(doc.sel.ranges, function(range) {
	      return new Range(Pos(range.anchor.line + distance, range.anchor.ch),
	                       Pos(range.head.line + distance, range.head.ch));
	    }), doc.sel.primIndex);
	    if (doc.cm) {
	      regChange(doc.cm, doc.first, doc.first - distance, distance);
	      for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
	        regLineChange(doc.cm, l, "gutter");
	    }
	  }

	  // More lower-level change function, handling only a single document
	  // (not linked ones).
	  function makeChangeSingleDoc(doc, change, selAfter, spans) {
	    if (doc.cm && !doc.cm.curOp)
	      return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans);

	    if (change.to.line < doc.first) {
	      shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
	      return;
	    }
	    if (change.from.line > doc.lastLine()) return;

	    // Clip the change to the size of this doc
	    if (change.from.line < doc.first) {
	      var shift = change.text.length - 1 - (doc.first - change.from.line);
	      shiftDoc(doc, shift);
	      change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
	                text: [lst(change.text)], origin: change.origin};
	    }
	    var last = doc.lastLine();
	    if (change.to.line > last) {
	      change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
	                text: [change.text[0]], origin: change.origin};
	    }

	    change.removed = getBetween(doc, change.from, change.to);

	    if (!selAfter) selAfter = computeSelAfterChange(doc, change);
	    if (doc.cm) makeChangeSingleDocInEditor(doc.cm, change, spans);
	    else updateDoc(doc, change, spans);
	    setSelectionNoUndo(doc, selAfter, sel_dontScroll);
	  }

	  // Handle the interaction of a change to a document with the editor
	  // that this document is part of.
	  function makeChangeSingleDocInEditor(cm, change, spans) {
	    var doc = cm.doc, display = cm.display, from = change.from, to = change.to;

	    var recomputeMaxLength = false, checkWidthStart = from.line;
	    if (!cm.options.lineWrapping) {
	      checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
	      doc.iter(checkWidthStart, to.line + 1, function(line) {
	        if (line == display.maxLine) {
	          recomputeMaxLength = true;
	          return true;
	        }
	      });
	    }

	    if (doc.sel.contains(change.from, change.to) > -1)
	      signalCursorActivity(cm);

	    updateDoc(doc, change, spans, estimateHeight(cm));

	    if (!cm.options.lineWrapping) {
	      doc.iter(checkWidthStart, from.line + change.text.length, function(line) {
	        var len = lineLength(line);
	        if (len > display.maxLineLength) {
	          display.maxLine = line;
	          display.maxLineLength = len;
	          display.maxLineChanged = true;
	          recomputeMaxLength = false;
	        }
	      });
	      if (recomputeMaxLength) cm.curOp.updateMaxLine = true;
	    }

	    // Adjust frontier, schedule worker
	    doc.frontier = Math.min(doc.frontier, from.line);
	    startWorker(cm, 400);

	    var lendiff = change.text.length - (to.line - from.line) - 1;
	    // Remember that these lines changed, for updating the display
	    if (change.full)
	      regChange(cm);
	    else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
	      regLineChange(cm, from.line, "text");
	    else
	      regChange(cm, from.line, to.line + 1, lendiff);

	    var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
	    if (changeHandler || changesHandler) {
	      var obj = {
	        from: from, to: to,
	        text: change.text,
	        removed: change.removed,
	        origin: change.origin
	      };
	      if (changeHandler) signalLater(cm, "change", cm, obj);
	      if (changesHandler) (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj);
	    }
	    cm.display.selForContextMenu = null;
	  }

	  function replaceRange(doc, code, from, to, origin) {
	    if (!to) to = from;
	    if (cmp(to, from) < 0) { var tmp = to; to = from; from = tmp; }
	    if (typeof code == "string") code = doc.splitLines(code);
	    makeChange(doc, {from: from, to: to, text: code, origin: origin});
	  }

	  // SCROLLING THINGS INTO VIEW

	  // If an editor sits on the top or bottom of the window, partially
	  // scrolled out of view, this ensures that the cursor is visible.
	  function maybeScrollWindow(cm, coords) {
	    if (signalDOMEvent(cm, "scrollCursorIntoView")) return;

	    var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
	    if (coords.top + box.top < 0) doScroll = true;
	    else if (coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) doScroll = false;
	    if (doScroll != null && !phantom) {
	      var scrollNode = elt("div", "\u200b", null, "position: absolute; top: " +
	                           (coords.top - display.viewOffset - paddingTop(cm.display)) + "px; height: " +
	                           (coords.bottom - coords.top + scrollGap(cm) + display.barHeight) + "px; left: " +
	                           coords.left + "px; width: 2px;");
	      cm.display.lineSpace.appendChild(scrollNode);
	      scrollNode.scrollIntoView(doScroll);
	      cm.display.lineSpace.removeChild(scrollNode);
	    }
	  }

	  // Scroll a given position into view (immediately), verifying that
	  // it actually became visible (as line heights are accurately
	  // measured, the position of something may 'drift' during drawing).
	  function scrollPosIntoView(cm, pos, end, margin) {
	    if (margin == null) margin = 0;
	    for (var limit = 0; limit < 5; limit++) {
	      var changed = false, coords = cursorCoords(cm, pos);
	      var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
	      var scrollPos = calculateScrollPos(cm, Math.min(coords.left, endCoords.left),
	                                         Math.min(coords.top, endCoords.top) - margin,
	                                         Math.max(coords.left, endCoords.left),
	                                         Math.max(coords.bottom, endCoords.bottom) + margin);
	      var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
	      if (scrollPos.scrollTop != null) {
	        setScrollTop(cm, scrollPos.scrollTop);
	        if (Math.abs(cm.doc.scrollTop - startTop) > 1) changed = true;
	      }
	      if (scrollPos.scrollLeft != null) {
	        setScrollLeft(cm, scrollPos.scrollLeft);
	        if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) changed = true;
	      }
	      if (!changed) break;
	    }
	    return coords;
	  }

	  // Scroll a given set of coordinates into view (immediately).
	  function scrollIntoView(cm, x1, y1, x2, y2) {
	    var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2);
	    if (scrollPos.scrollTop != null) setScrollTop(cm, scrollPos.scrollTop);
	    if (scrollPos.scrollLeft != null) setScrollLeft(cm, scrollPos.scrollLeft);
	  }

	  // Calculate a new scroll position needed to scroll the given
	  // rectangle into view. Returns an object with scrollTop and
	  // scrollLeft properties. When these are undefined, the
	  // vertical/horizontal position does not need to be adjusted.
	  function calculateScrollPos(cm, x1, y1, x2, y2) {
	    var display = cm.display, snapMargin = textHeight(cm.display);
	    if (y1 < 0) y1 = 0;
	    var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
	    var screen = displayHeight(cm), result = {};
	    if (y2 - y1 > screen) y2 = y1 + screen;
	    var docBottom = cm.doc.height + paddingVert(display);
	    var atTop = y1 < snapMargin, atBottom = y2 > docBottom - snapMargin;
	    if (y1 < screentop) {
	      result.scrollTop = atTop ? 0 : y1;
	    } else if (y2 > screentop + screen) {
	      var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen);
	      if (newTop != screentop) result.scrollTop = newTop;
	    }

	    var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft;
	    var screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0);
	    var tooWide = x2 - x1 > screenw;
	    if (tooWide) x2 = x1 + screenw;
	    if (x1 < 10)
	      result.scrollLeft = 0;
	    else if (x1 < screenleft)
	      result.scrollLeft = Math.max(0, x1 - (tooWide ? 0 : 10));
	    else if (x2 > screenw + screenleft - 3)
	      result.scrollLeft = x2 + (tooWide ? 0 : 10) - screenw;
	    return result;
	  }

	  // Store a relative adjustment to the scroll position in the current
	  // operation (to be applied when the operation finishes).
	  function addToScrollPos(cm, left, top) {
	    if (left != null || top != null) resolveScrollToPos(cm);
	    if (left != null)
	      cm.curOp.scrollLeft = (cm.curOp.scrollLeft == null ? cm.doc.scrollLeft : cm.curOp.scrollLeft) + left;
	    if (top != null)
	      cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
	  }

	  // Make sure that at the end of the operation the current cursor is
	  // shown.
	  function ensureCursorVisible(cm) {
	    resolveScrollToPos(cm);
	    var cur = cm.getCursor(), from = cur, to = cur;
	    if (!cm.options.lineWrapping) {
	      from = cur.ch ? Pos(cur.line, cur.ch - 1) : cur;
	      to = Pos(cur.line, cur.ch + 1);
	    }
	    cm.curOp.scrollToPos = {from: from, to: to, margin: cm.options.cursorScrollMargin, isCursor: true};
	  }

	  // When an operation has its scrollToPos property set, and another
	  // scroll action is applied before the end of the operation, this
	  // 'simulates' scrolling that position into view in a cheap way, so
	  // that the effect of intermediate scroll commands is not ignored.
	  function resolveScrollToPos(cm) {
	    var range = cm.curOp.scrollToPos;
	    if (range) {
	      cm.curOp.scrollToPos = null;
	      var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to);
	      var sPos = calculateScrollPos(cm, Math.min(from.left, to.left),
	                                    Math.min(from.top, to.top) - range.margin,
	                                    Math.max(from.right, to.right),
	                                    Math.max(from.bottom, to.bottom) + range.margin);
	      cm.scrollTo(sPos.scrollLeft, sPos.scrollTop);
	    }
	  }

	  // API UTILITIES

	  // Indent the given line. The how parameter can be "smart",
	  // "add"/null, "subtract", or "prev". When aggressive is false
	  // (typically set to true for forced single-line indents), empty
	  // lines are not indented, and places where the mode returns Pass
	  // are left alone.
	  function indentLine(cm, n, how, aggressive) {
	    var doc = cm.doc, state;
	    if (how == null) how = "add";
	    if (how == "smart") {
	      // Fall back to "prev" when the mode doesn't have an indentation
	      // method.
	      if (!doc.mode.indent) how = "prev";
	      else state = getStateBefore(cm, n);
	    }

	    var tabSize = cm.options.tabSize;
	    var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
	    if (line.stateAfter) line.stateAfter = null;
	    var curSpaceString = line.text.match(/^\s*/)[0], indentation;
	    if (!aggressive && !/\S/.test(line.text)) {
	      indentation = 0;
	      how = "not";
	    } else if (how == "smart") {
	      indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
	      if (indentation == Pass || indentation > 150) {
	        if (!aggressive) return;
	        how = "prev";
	      }
	    }
	    if (how == "prev") {
	      if (n > doc.first) indentation = countColumn(getLine(doc, n-1).text, null, tabSize);
	      else indentation = 0;
	    } else if (how == "add") {
	      indentation = curSpace + cm.options.indentUnit;
	    } else if (how == "subtract") {
	      indentation = curSpace - cm.options.indentUnit;
	    } else if (typeof how == "number") {
	      indentation = curSpace + how;
	    }
	    indentation = Math.max(0, indentation);

	    var indentString = "", pos = 0;
	    if (cm.options.indentWithTabs)
	      for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";}
	    if (pos < indentation) indentString += spaceStr(indentation - pos);

	    if (indentString != curSpaceString) {
	      replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
	      line.stateAfter = null;
	      return true;
	    } else {
	      // Ensure that, if the cursor was in the whitespace at the start
	      // of the line, it is moved to the end of that space.
	      for (var i = 0; i < doc.sel.ranges.length; i++) {
	        var range = doc.sel.ranges[i];
	        if (range.head.line == n && range.head.ch < curSpaceString.length) {
	          var pos = Pos(n, curSpaceString.length);
	          replaceOneSelection(doc, i, new Range(pos, pos));
	          break;
	        }
	      }
	    }
	  }

	  // Utility for applying a change to a line by handle or number,
	  // returning the number and optionally registering the line as
	  // changed.
	  function changeLine(doc, handle, changeType, op) {
	    var no = handle, line = handle;
	    if (typeof handle == "number") line = getLine(doc, clipLine(doc, handle));
	    else no = lineNo(handle);
	    if (no == null) return null;
	    if (op(line, no) && doc.cm) regLineChange(doc.cm, no, changeType);
	    return line;
	  }

	  // Helper for deleting text near the selection(s), used to implement
	  // backspace, delete, and similar functionality.
	  function deleteNearSelection(cm, compute) {
	    var ranges = cm.doc.sel.ranges, kill = [];
	    // Build up a set of ranges to kill first, merging overlapping
	    // ranges.
	    for (var i = 0; i < ranges.length; i++) {
	      var toKill = compute(ranges[i]);
	      while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
	        var replaced = kill.pop();
	        if (cmp(replaced.from, toKill.from) < 0) {
	          toKill.from = replaced.from;
	          break;
	        }
	      }
	      kill.push(toKill);
	    }
	    // Next, remove those actual ranges.
	    runInOp(cm, function() {
	      for (var i = kill.length - 1; i >= 0; i--)
	        replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete");
	      ensureCursorVisible(cm);
	    });
	  }

	  // Used for horizontal relative motion. Dir is -1 or 1 (left or
	  // right), unit can be "char", "column" (like char, but doesn't
	  // cross line boundaries), "word" (across next word), or "group" (to
	  // the start of next group of word or non-word-non-whitespace
	  // chars). The visually param controls whether, in right-to-left
	  // text, direction 1 means to move towards the next index in the
	  // string, or towards the character to the right of the current
	  // position. The resulting position will have a hitSide=true
	  // property if it reached the end of the document.
	  function findPosH(doc, pos, dir, unit, visually) {
	    var line = pos.line, ch = pos.ch, origDir = dir;
	    var lineObj = getLine(doc, line);
	    function findNextLine() {
	      var l = line + dir;
	      if (l < doc.first || l >= doc.first + doc.size) return false
	      line = l;
	      return lineObj = getLine(doc, l);
	    }
	    function moveOnce(boundToLine) {
	      var next = (visually ? moveVisually : moveLogically)(lineObj, ch, dir, true);
	      if (next == null) {
	        if (!boundToLine && findNextLine()) {
	          if (visually) ch = (dir < 0 ? lineRight : lineLeft)(lineObj);
	          else ch = dir < 0 ? lineObj.text.length : 0;
	        } else return false
	      } else ch = next;
	      return true;
	    }

	    if (unit == "char") {
	      moveOnce()
	    } else if (unit == "column") {
	      moveOnce(true)
	    } else if (unit == "word" || unit == "group") {
	      var sawType = null, group = unit == "group";
	      var helper = doc.cm && doc.cm.getHelper(pos, "wordChars");
	      for (var first = true;; first = false) {
	        if (dir < 0 && !moveOnce(!first)) break;
	        var cur = lineObj.text.charAt(ch) || "\n";
	        var type = isWordChar(cur, helper) ? "w"
	          : group && cur == "\n" ? "n"
	          : !group || /\s/.test(cur) ? null
	          : "p";
	        if (group && !first && !type) type = "s";
	        if (sawType && sawType != type) {
	          if (dir < 0) {dir = 1; moveOnce();}
	          break;
	        }

	        if (type) sawType = type;
	        if (dir > 0 && !moveOnce(!first)) break;
	      }
	    }
	    var result = skipAtomic(doc, Pos(line, ch), pos, origDir, true);
	    if (!cmp(pos, result)) result.hitSide = true;
	    return result;
	  }

	  // For relative vertical movement. Dir may be -1 or 1. Unit can be
	  // "page" or "line". The resulting position will have a hitSide=true
	  // property if it reached the end of the document.
	  function findPosV(cm, pos, dir, unit) {
	    var doc = cm.doc, x = pos.left, y;
	    if (unit == "page") {
	      var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
	      y = pos.top + dir * (pageSize - (dir < 0 ? 1.5 : .5) * textHeight(cm.display));
	    } else if (unit == "line") {
	      y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
	    }
	    for (;;) {
	      var target = coordsChar(cm, x, y);
	      if (!target.outside) break;
	      if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break; }
	      y += dir * 5;
	    }
	    return target;
	  }

	  // EDITOR METHODS

	  // The publicly visible API. Note that methodOp(f) means
	  // 'wrap f in an operation, performed on its `this` parameter'.

	  // This is not the complete set of editor methods. Most of the
	  // methods defined on the Doc type are also injected into
	  // CodeMirror.prototype, for backwards compatibility and
	  // convenience.

	  CodeMirror.prototype = {
	    constructor: CodeMirror,
	    focus: function(){window.focus(); this.display.input.focus();},

	    setOption: function(option, value) {
	      var options = this.options, old = options[option];
	      if (options[option] == value && option != "mode") return;
	      options[option] = value;
	      if (optionHandlers.hasOwnProperty(option))
	        operation(this, optionHandlers[option])(this, value, old);
	    },

	    getOption: function(option) {return this.options[option];},
	    getDoc: function() {return this.doc;},

	    addKeyMap: function(map, bottom) {
	      this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map));
	    },
	    removeKeyMap: function(map) {
	      var maps = this.state.keyMaps;
	      for (var i = 0; i < maps.length; ++i)
	        if (maps[i] == map || maps[i].name == map) {
	          maps.splice(i, 1);
	          return true;
	        }
	    },

	    addOverlay: methodOp(function(spec, options) {
	      var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
	      if (mode.startState) throw new Error("Overlays may not be stateful.");
	      this.state.overlays.push({mode: mode, modeSpec: spec, opaque: options && options.opaque});
	      this.state.modeGen++;
	      regChange(this);
	    }),
	    removeOverlay: methodOp(function(spec) {
	      var overlays = this.state.overlays;
	      for (var i = 0; i < overlays.length; ++i) {
	        var cur = overlays[i].modeSpec;
	        if (cur == spec || typeof spec == "string" && cur.name == spec) {
	          overlays.splice(i, 1);
	          this.state.modeGen++;
	          regChange(this);
	          return;
	        }
	      }
	    }),

	    indentLine: methodOp(function(n, dir, aggressive) {
	      if (typeof dir != "string" && typeof dir != "number") {
	        if (dir == null) dir = this.options.smartIndent ? "smart" : "prev";
	        else dir = dir ? "add" : "subtract";
	      }
	      if (isLine(this.doc, n)) indentLine(this, n, dir, aggressive);
	    }),
	    indentSelection: methodOp(function(how) {
	      var ranges = this.doc.sel.ranges, end = -1;
	      for (var i = 0; i < ranges.length; i++) {
	        var range = ranges[i];
	        if (!range.empty()) {
	          var from = range.from(), to = range.to();
	          var start = Math.max(end, from.line);
	          end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
	          for (var j = start; j < end; ++j)
	            indentLine(this, j, how);
	          var newRanges = this.doc.sel.ranges;
	          if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
	            replaceOneSelection(this.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll);
	        } else if (range.head.line > end) {
	          indentLine(this, range.head.line, how, true);
	          end = range.head.line;
	          if (i == this.doc.sel.primIndex) ensureCursorVisible(this);
	        }
	      }
	    }),

	    // Fetch the parser token for a given character. Useful for hacks
	    // that want to inspect the mode state (say, for completion).
	    getTokenAt: function(pos, precise) {
	      return takeToken(this, pos, precise);
	    },

	    getLineTokens: function(line, precise) {
	      return takeToken(this, Pos(line), precise, true);
	    },

	    getTokenTypeAt: function(pos) {
	      pos = clipPos(this.doc, pos);
	      var styles = getLineStyles(this, getLine(this.doc, pos.line));
	      var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
	      var type;
	      if (ch == 0) type = styles[2];
	      else for (;;) {
	        var mid = (before + after) >> 1;
	        if ((mid ? styles[mid * 2 - 1] : 0) >= ch) after = mid;
	        else if (styles[mid * 2 + 1] < ch) before = mid + 1;
	        else { type = styles[mid * 2 + 2]; break; }
	      }
	      var cut = type ? type.indexOf("cm-overlay ") : -1;
	      return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1);
	    },

	    getModeAt: function(pos) {
	      var mode = this.doc.mode;
	      if (!mode.innerMode) return mode;
	      return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode;
	    },

	    getHelper: function(pos, type) {
	      return this.getHelpers(pos, type)[0];
	    },

	    getHelpers: function(pos, type) {
	      var found = [];
	      if (!helpers.hasOwnProperty(type)) return found;
	      var help = helpers[type], mode = this.getModeAt(pos);
	      if (typeof mode[type] == "string") {
	        if (help[mode[type]]) found.push(help[mode[type]]);
	      } else if (mode[type]) {
	        for (var i = 0; i < mode[type].length; i++) {
	          var val = help[mode[type][i]];
	          if (val) found.push(val);
	        }
	      } else if (mode.helperType && help[mode.helperType]) {
	        found.push(help[mode.helperType]);
	      } else if (help[mode.name]) {
	        found.push(help[mode.name]);
	      }
	      for (var i = 0; i < help._global.length; i++) {
	        var cur = help._global[i];
	        if (cur.pred(mode, this) && indexOf(found, cur.val) == -1)
	          found.push(cur.val);
	      }
	      return found;
	    },

	    getStateAfter: function(line, precise) {
	      var doc = this.doc;
	      line = clipLine(doc, line == null ? doc.first + doc.size - 1: line);
	      return getStateBefore(this, line + 1, precise);
	    },

	    cursorCoords: function(start, mode) {
	      var pos, range = this.doc.sel.primary();
	      if (start == null) pos = range.head;
	      else if (typeof start == "object") pos = clipPos(this.doc, start);
	      else pos = start ? range.from() : range.to();
	      return cursorCoords(this, pos, mode || "page");
	    },

	    charCoords: function(pos, mode) {
	      return charCoords(this, clipPos(this.doc, pos), mode || "page");
	    },

	    coordsChar: function(coords, mode) {
	      coords = fromCoordSystem(this, coords, mode || "page");
	      return coordsChar(this, coords.left, coords.top);
	    },

	    lineAtHeight: function(height, mode) {
	      height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top;
	      return lineAtHeight(this.doc, height + this.display.viewOffset);
	    },
	    heightAtLine: function(line, mode) {
	      var end = false, lineObj;
	      if (typeof line == "number") {
	        var last = this.doc.first + this.doc.size - 1;
	        if (line < this.doc.first) line = this.doc.first;
	        else if (line > last) { line = last; end = true; }
	        lineObj = getLine(this.doc, line);
	      } else {
	        lineObj = line;
	      }
	      return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page").top +
	        (end ? this.doc.height - heightAtLine(lineObj) : 0);
	    },

	    defaultTextHeight: function() { return textHeight(this.display); },
	    defaultCharWidth: function() { return charWidth(this.display); },

	    setGutterMarker: methodOp(function(line, gutterID, value) {
	      return changeLine(this.doc, line, "gutter", function(line) {
	        var markers = line.gutterMarkers || (line.gutterMarkers = {});
	        markers[gutterID] = value;
	        if (!value && isEmpty(markers)) line.gutterMarkers = null;
	        return true;
	      });
	    }),

	    clearGutter: methodOp(function(gutterID) {
	      var cm = this, doc = cm.doc, i = doc.first;
	      doc.iter(function(line) {
	        if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
	          line.gutterMarkers[gutterID] = null;
	          regLineChange(cm, i, "gutter");
	          if (isEmpty(line.gutterMarkers)) line.gutterMarkers = null;
	        }
	        ++i;
	      });
	    }),

	    lineInfo: function(line) {
	      if (typeof line == "number") {
	        if (!isLine(this.doc, line)) return null;
	        var n = line;
	        line = getLine(this.doc, line);
	        if (!line) return null;
	      } else {
	        var n = lineNo(line);
	        if (n == null) return null;
	      }
	      return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
	              textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
	              widgets: line.widgets};
	    },

	    getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo};},

	    addWidget: function(pos, node, scroll, vert, horiz) {
	      var display = this.display;
	      pos = cursorCoords(this, clipPos(this.doc, pos));
	      var top = pos.bottom, left = pos.left;
	      node.style.position = "absolute";
	      node.setAttribute("cm-ignore-events", "true");
	      this.display.input.setUneditable(node);
	      display.sizer.appendChild(node);
	      if (vert == "over") {
	        top = pos.top;
	      } else if (vert == "above" || vert == "near") {
	        var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
	        hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
	        // Default to positioning above (if specified and possible); otherwise default to positioning below
	        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
	          top = pos.top - node.offsetHeight;
	        else if (pos.bottom + node.offsetHeight <= vspace)
	          top = pos.bottom;
	        if (left + node.offsetWidth > hspace)
	          left = hspace - node.offsetWidth;
	      }
	      node.style.top = top + "px";
	      node.style.left = node.style.right = "";
	      if (horiz == "right") {
	        left = display.sizer.clientWidth - node.offsetWidth;
	        node.style.right = "0px";
	      } else {
	        if (horiz == "left") left = 0;
	        else if (horiz == "middle") left = (display.sizer.clientWidth - node.offsetWidth) / 2;
	        node.style.left = left + "px";
	      }
	      if (scroll)
	        scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight);
	    },

	    triggerOnKeyDown: methodOp(onKeyDown),
	    triggerOnKeyPress: methodOp(onKeyPress),
	    triggerOnKeyUp: onKeyUp,

	    execCommand: function(cmd) {
	      if (commands.hasOwnProperty(cmd))
	        return commands[cmd].call(null, this);
	    },

	    triggerElectric: methodOp(function(text) { triggerElectric(this, text); }),

	    findPosH: function(from, amount, unit, visually) {
	      var dir = 1;
	      if (amount < 0) { dir = -1; amount = -amount; }
	      for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
	        cur = findPosH(this.doc, cur, dir, unit, visually);
	        if (cur.hitSide) break;
	      }
	      return cur;
	    },

	    moveH: methodOp(function(dir, unit) {
	      var cm = this;
	      cm.extendSelectionsBy(function(range) {
	        if (cm.display.shift || cm.doc.extend || range.empty())
	          return findPosH(cm.doc, range.head, dir, unit, cm.options.rtlMoveVisually);
	        else
	          return dir < 0 ? range.from() : range.to();
	      }, sel_move);
	    }),

	    deleteH: methodOp(function(dir, unit) {
	      var sel = this.doc.sel, doc = this.doc;
	      if (sel.somethingSelected())
	        doc.replaceSelection("", null, "+delete");
	      else
	        deleteNearSelection(this, function(range) {
	          var other = findPosH(doc, range.head, dir, unit, false);
	          return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other};
	        });
	    }),

	    findPosV: function(from, amount, unit, goalColumn) {
	      var dir = 1, x = goalColumn;
	      if (amount < 0) { dir = -1; amount = -amount; }
	      for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
	        var coords = cursorCoords(this, cur, "div");
	        if (x == null) x = coords.left;
	        else coords.left = x;
	        cur = findPosV(this, coords, dir, unit);
	        if (cur.hitSide) break;
	      }
	      return cur;
	    },

	    moveV: methodOp(function(dir, unit) {
	      var cm = this, doc = this.doc, goals = [];
	      var collapse = !cm.display.shift && !doc.extend && doc.sel.somethingSelected();
	      doc.extendSelectionsBy(function(range) {
	        if (collapse)
	          return dir < 0 ? range.from() : range.to();
	        var headPos = cursorCoords(cm, range.head, "div");
	        if (range.goalColumn != null) headPos.left = range.goalColumn;
	        goals.push(headPos.left);
	        var pos = findPosV(cm, headPos, dir, unit);
	        if (unit == "page" && range == doc.sel.primary())
	          addToScrollPos(cm, null, charCoords(cm, pos, "div").top - headPos.top);
	        return pos;
	      }, sel_move);
	      if (goals.length) for (var i = 0; i < doc.sel.ranges.length; i++)
	        doc.sel.ranges[i].goalColumn = goals[i];
	    }),

	    // Find the word at the given position (as returned by coordsChar).
	    findWordAt: function(pos) {
	      var doc = this.doc, line = getLine(doc, pos.line).text;
	      var start = pos.ch, end = pos.ch;
	      if (line) {
	        var helper = this.getHelper(pos, "wordChars");
	        if ((pos.xRel < 0 || end == line.length) && start) --start; else ++end;
	        var startChar = line.charAt(start);
	        var check = isWordChar(startChar, helper)
	          ? function(ch) { return isWordChar(ch, helper); }
	          : /\s/.test(startChar) ? function(ch) {return /\s/.test(ch);}
	          : function(ch) {return !/\s/.test(ch) && !isWordChar(ch);};
	        while (start > 0 && check(line.charAt(start - 1))) --start;
	        while (end < line.length && check(line.charAt(end))) ++end;
	      }
	      return new Range(Pos(pos.line, start), Pos(pos.line, end));
	    },

	    toggleOverwrite: function(value) {
	      if (value != null && value == this.state.overwrite) return;
	      if (this.state.overwrite = !this.state.overwrite)
	        addClass(this.display.cursorDiv, "CodeMirror-overwrite");
	      else
	        rmClass(this.display.cursorDiv, "CodeMirror-overwrite");

	      signal(this, "overwriteToggle", this, this.state.overwrite);
	    },
	    hasFocus: function() { return this.display.input.getField() == activeElt(); },
	    isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit); },

	    scrollTo: methodOp(function(x, y) {
	      if (x != null || y != null) resolveScrollToPos(this);
	      if (x != null) this.curOp.scrollLeft = x;
	      if (y != null) this.curOp.scrollTop = y;
	    }),
	    getScrollInfo: function() {
	      var scroller = this.display.scroller;
	      return {left: scroller.scrollLeft, top: scroller.scrollTop,
	              height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
	              width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
	              clientHeight: displayHeight(this), clientWidth: displayWidth(this)};
	    },

	    scrollIntoView: methodOp(function(range, margin) {
	      if (range == null) {
	        range = {from: this.doc.sel.primary().head, to: null};
	        if (margin == null) margin = this.options.cursorScrollMargin;
	      } else if (typeof range == "number") {
	        range = {from: Pos(range, 0), to: null};
	      } else if (range.from == null) {
	        range = {from: range, to: null};
	      }
	      if (!range.to) range.to = range.from;
	      range.margin = margin || 0;

	      if (range.from.line != null) {
	        resolveScrollToPos(this);
	        this.curOp.scrollToPos = range;
	      } else {
	        var sPos = calculateScrollPos(this, Math.min(range.from.left, range.to.left),
	                                      Math.min(range.from.top, range.to.top) - range.margin,
	                                      Math.max(range.from.right, range.to.right),
	                                      Math.max(range.from.bottom, range.to.bottom) + range.margin);
	        this.scrollTo(sPos.scrollLeft, sPos.scrollTop);
	      }
	    }),

	    setSize: methodOp(function(width, height) {
	      var cm = this;
	      function interpret(val) {
	        return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val;
	      }
	      if (width != null) cm.display.wrapper.style.width = interpret(width);
	      if (height != null) cm.display.wrapper.style.height = interpret(height);
	      if (cm.options.lineWrapping) clearLineMeasurementCache(this);
	      var lineNo = cm.display.viewFrom;
	      cm.doc.iter(lineNo, cm.display.viewTo, function(line) {
	        if (line.widgets) for (var i = 0; i < line.widgets.length; i++)
	          if (line.widgets[i].noHScroll) { regLineChange(cm, lineNo, "widget"); break; }
	        ++lineNo;
	      });
	      cm.curOp.forceUpdate = true;
	      signal(cm, "refresh", this);
	    }),

	    operation: function(f){return runInOp(this, f);},

	    refresh: methodOp(function() {
	      var oldHeight = this.display.cachedTextHeight;
	      regChange(this);
	      this.curOp.forceUpdate = true;
	      clearCaches(this);
	      this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop);
	      updateGutterSpace(this);
	      if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5)
	        estimateLineHeights(this);
	      signal(this, "refresh", this);
	    }),

	    swapDoc: methodOp(function(doc) {
	      var old = this.doc;
	      old.cm = null;
	      attachDoc(this, doc);
	      clearCaches(this);
	      this.display.input.reset();
	      this.scrollTo(doc.scrollLeft, doc.scrollTop);
	      this.curOp.forceScroll = true;
	      signalLater(this, "swapDoc", this, old);
	      return old;
	    }),

	    getInputField: function(){return this.display.input.getField();},
	    getWrapperElement: function(){return this.display.wrapper;},
	    getScrollerElement: function(){return this.display.scroller;},
	    getGutterElement: function(){return this.display.gutters;}
	  };
	  eventMixin(CodeMirror);

	  // OPTION DEFAULTS

	  // The default configuration options.
	  var defaults = CodeMirror.defaults = {};
	  // Functions to run when options are changed.
	  var optionHandlers = CodeMirror.optionHandlers = {};

	  function option(name, deflt, handle, notOnInit) {
	    CodeMirror.defaults[name] = deflt;
	    if (handle) optionHandlers[name] =
	      notOnInit ? function(cm, val, old) {if (old != Init) handle(cm, val, old);} : handle;
	  }

	  // Passed to option handlers when there is no old value.
	  var Init = CodeMirror.Init = {toString: function(){return "CodeMirror.Init";}};

	  // These two are, on init, called from the constructor because they
	  // have to be initialized before the editor can start at all.
	  option("value", "", function(cm, val) {
	    cm.setValue(val);
	  }, true);
	  option("mode", null, function(cm, val) {
	    cm.doc.modeOption = val;
	    loadMode(cm);
	  }, true);

	  option("indentUnit", 2, loadMode, true);
	  option("indentWithTabs", false);
	  option("smartIndent", true);
	  option("tabSize", 4, function(cm) {
	    resetModeState(cm);
	    clearCaches(cm);
	    regChange(cm);
	  }, true);
	  option("lineSeparator", null, function(cm, val) {
	    cm.doc.lineSep = val;
	    if (!val) return;
	    var newBreaks = [], lineNo = cm.doc.first;
	    cm.doc.iter(function(line) {
	      for (var pos = 0;;) {
	        var found = line.text.indexOf(val, pos);
	        if (found == -1) break;
	        pos = found + val.length;
	        newBreaks.push(Pos(lineNo, found));
	      }
	      lineNo++;
	    });
	    for (var i = newBreaks.length - 1; i >= 0; i--)
	      replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length))
	  });
	  option("specialChars", /[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function(cm, val, old) {
	    cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g");
	    if (old != CodeMirror.Init) cm.refresh();
	  });
	  option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function(cm) {cm.refresh();}, true);
	  option("electricChars", true);
	  option("inputStyle", mobile ? "contenteditable" : "textarea", function() {
	    throw new Error("inputStyle can not (yet) be changed in a running editor"); // FIXME
	  }, true);
	  option("rtlMoveVisually", !windows);
	  option("wholeLineUpdateBefore", true);

	  option("theme", "default", function(cm) {
	    themeChanged(cm);
	    guttersChanged(cm);
	  }, true);
	  option("keyMap", "default", function(cm, val, old) {
	    var next = getKeyMap(val);
	    var prev = old != CodeMirror.Init && getKeyMap(old);
	    if (prev && prev.detach) prev.detach(cm, next);
	    if (next.attach) next.attach(cm, prev || null);
	  });
	  option("extraKeys", null);

	  option("lineWrapping", false, wrappingChanged, true);
	  option("gutters", [], function(cm) {
	    setGuttersForLineNumbers(cm.options);
	    guttersChanged(cm);
	  }, true);
	  option("fixedGutter", true, function(cm, val) {
	    cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
	    cm.refresh();
	  }, true);
	  option("coverGutterNextToScrollbar", false, function(cm) {updateScrollbars(cm);}, true);
	  option("scrollbarStyle", "native", function(cm) {
	    initScrollbars(cm);
	    updateScrollbars(cm);
	    cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
	    cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
	  }, true);
	  option("lineNumbers", false, function(cm) {
	    setGuttersForLineNumbers(cm.options);
	    guttersChanged(cm);
	  }, true);
	  option("firstLineNumber", 1, guttersChanged, true);
	  option("lineNumberFormatter", function(integer) {return integer;}, guttersChanged, true);
	  option("showCursorWhenSelecting", false, updateSelection, true);

	  option("resetSelectionOnContextMenu", true);
	  option("lineWiseCopyCut", true);

	  option("readOnly", false, function(cm, val) {
	    if (val == "nocursor") {
	      onBlur(cm);
	      cm.display.input.blur();
	      cm.display.disabled = true;
	    } else {
	      cm.display.disabled = false;
	    }
	    cm.display.input.readOnlyChanged(val)
	  });
	  option("disableInput", false, function(cm, val) {if (!val) cm.display.input.reset();}, true);
	  option("dragDrop", true, dragDropChanged);
	  option("allowDropFileTypes", null);

	  option("cursorBlinkRate", 530);
	  option("cursorScrollMargin", 0);
	  option("cursorHeight", 1, updateSelection, true);
	  option("singleCursorHeightPerLine", true, updateSelection, true);
	  option("workTime", 100);
	  option("workDelay", 100);
	  option("flattenSpans", true, resetModeState, true);
	  option("addModeClass", false, resetModeState, true);
	  option("pollInterval", 100);
	  option("undoDepth", 200, function(cm, val){cm.doc.history.undoDepth = val;});
	  option("historyEventDelay", 1250);
	  option("viewportMargin", 10, function(cm){cm.refresh();}, true);
	  option("maxHighlightLength", 10000, resetModeState, true);
	  option("moveInputWithCursor", true, function(cm, val) {
	    if (!val) cm.display.input.resetPosition();
	  });

	  option("tabindex", null, function(cm, val) {
	    cm.display.input.getField().tabIndex = val || "";
	  });
	  option("autofocus", null);

	  // MODE DEFINITION AND QUERYING

	  // Known modes, by name and by MIME
	  var modes = CodeMirror.modes = {}, mimeModes = CodeMirror.mimeModes = {};

	  // Extra arguments are stored as the mode's dependencies, which is
	  // used by (legacy) mechanisms like loadmode.js to automatically
	  // load a mode. (Preferred mechanism is the require/define calls.)
	  CodeMirror.defineMode = function(name, mode) {
	    if (!CodeMirror.defaults.mode && name != "null") CodeMirror.defaults.mode = name;
	    if (arguments.length > 2)
	      mode.dependencies = Array.prototype.slice.call(arguments, 2);
	    modes[name] = mode;
	  };

	  CodeMirror.defineMIME = function(mime, spec) {
	    mimeModes[mime] = spec;
	  };

	  // Given a MIME type, a {name, ...options} config object, or a name
	  // string, return a mode config object.
	  CodeMirror.resolveMode = function(spec) {
	    if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
	      spec = mimeModes[spec];
	    } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
	      var found = mimeModes[spec.name];
	      if (typeof found == "string") found = {name: found};
	      spec = createObj(found, spec);
	      spec.name = found.name;
	    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
	      return CodeMirror.resolveMode("application/xml");
	    }
	    if (typeof spec == "string") return {name: spec};
	    else return spec || {name: "null"};
	  };

	  // Given a mode spec (anything that resolveMode accepts), find and
	  // initialize an actual mode object.
	  CodeMirror.getMode = function(options, spec) {
	    var spec = CodeMirror.resolveMode(spec);
	    var mfactory = modes[spec.name];
	    if (!mfactory) return CodeMirror.getMode(options, "text/plain");
	    var modeObj = mfactory(options, spec);
	    if (modeExtensions.hasOwnProperty(spec.name)) {
	      var exts = modeExtensions[spec.name];
	      for (var prop in exts) {
	        if (!exts.hasOwnProperty(prop)) continue;
	        if (modeObj.hasOwnProperty(prop)) modeObj["_" + prop] = modeObj[prop];
	        modeObj[prop] = exts[prop];
	      }
	    }
	    modeObj.name = spec.name;
	    if (spec.helperType) modeObj.helperType = spec.helperType;
	    if (spec.modeProps) for (var prop in spec.modeProps)
	      modeObj[prop] = spec.modeProps[prop];

	    return modeObj;
	  };

	  // Minimal default mode.
	  CodeMirror.defineMode("null", function() {
	    return {token: function(stream) {stream.skipToEnd();}};
	  });
	  CodeMirror.defineMIME("text/plain", "null");

	  // This can be used to attach properties to mode objects from
	  // outside the actual mode definition.
	  var modeExtensions = CodeMirror.modeExtensions = {};
	  CodeMirror.extendMode = function(mode, properties) {
	    var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
	    copyObj(properties, exts);
	  };

	  // EXTENSIONS

	  CodeMirror.defineExtension = function(name, func) {
	    CodeMirror.prototype[name] = func;
	  };
	  CodeMirror.defineDocExtension = function(name, func) {
	    Doc.prototype[name] = func;
	  };
	  CodeMirror.defineOption = option;

	  var initHooks = [];
	  CodeMirror.defineInitHook = function(f) {initHooks.push(f);};

	  var helpers = CodeMirror.helpers = {};
	  CodeMirror.registerHelper = function(type, name, value) {
	    if (!helpers.hasOwnProperty(type)) helpers[type] = CodeMirror[type] = {_global: []};
	    helpers[type][name] = value;
	  };
	  CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
	    CodeMirror.registerHelper(type, name, value);
	    helpers[type]._global.push({pred: predicate, val: value});
	  };

	  // MODE STATE HANDLING

	  // Utility functions for working with state. Exported because nested
	  // modes need to do this for their inner modes.

	  var copyState = CodeMirror.copyState = function(mode, state) {
	    if (state === true) return state;
	    if (mode.copyState) return mode.copyState(state);
	    var nstate = {};
	    for (var n in state) {
	      var val = state[n];
	      if (val instanceof Array) val = val.concat([]);
	      nstate[n] = val;
	    }
	    return nstate;
	  };

	  var startState = CodeMirror.startState = function(mode, a1, a2) {
	    return mode.startState ? mode.startState(a1, a2) : true;
	  };

	  // Given a mode and a state (for that mode), find the inner mode and
	  // state at the position that the state refers to.
	  CodeMirror.innerMode = function(mode, state) {
	    while (mode.innerMode) {
	      var info = mode.innerMode(state);
	      if (!info || info.mode == mode) break;
	      state = info.state;
	      mode = info.mode;
	    }
	    return info || {mode: mode, state: state};
	  };

	  // STANDARD COMMANDS

	  // Commands are parameter-less actions that can be performed on an
	  // editor, mostly used for keybindings.
	  var commands = CodeMirror.commands = {
	    selectAll: function(cm) {cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);},
	    singleSelection: function(cm) {
	      cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll);
	    },
	    killLine: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        if (range.empty()) {
	          var len = getLine(cm.doc, range.head.line).text.length;
	          if (range.head.ch == len && range.head.line < cm.lastLine())
	            return {from: range.head, to: Pos(range.head.line + 1, 0)};
	          else
	            return {from: range.head, to: Pos(range.head.line, len)};
	        } else {
	          return {from: range.from(), to: range.to()};
	        }
	      });
	    },
	    deleteLine: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        return {from: Pos(range.from().line, 0),
	                to: clipPos(cm.doc, Pos(range.to().line + 1, 0))};
	      });
	    },
	    delLineLeft: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        return {from: Pos(range.from().line, 0), to: range.from()};
	      });
	    },
	    delWrappedLineLeft: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        var leftPos = cm.coordsChar({left: 0, top: top}, "div");
	        return {from: leftPos, to: range.from()};
	      });
	    },
	    delWrappedLineRight: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
	        return {from: range.from(), to: rightPos };
	      });
	    },
	    undo: function(cm) {cm.undo();},
	    redo: function(cm) {cm.redo();},
	    undoSelection: function(cm) {cm.undoSelection();},
	    redoSelection: function(cm) {cm.redoSelection();},
	    goDocStart: function(cm) {cm.extendSelection(Pos(cm.firstLine(), 0));},
	    goDocEnd: function(cm) {cm.extendSelection(Pos(cm.lastLine()));},
	    goLineStart: function(cm) {
	      cm.extendSelectionsBy(function(range) { return lineStart(cm, range.head.line); },
	                            {origin: "+move", bias: 1});
	    },
	    goLineStartSmart: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        return lineStartSmart(cm, range.head);
	      }, {origin: "+move", bias: 1});
	    },
	    goLineEnd: function(cm) {
	      cm.extendSelectionsBy(function(range) { return lineEnd(cm, range.head.line); },
	                            {origin: "+move", bias: -1});
	    },
	    goLineRight: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
	      }, sel_move);
	    },
	    goLineLeft: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        return cm.coordsChar({left: 0, top: top}, "div");
	      }, sel_move);
	    },
	    goLineLeftSmart: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        var pos = cm.coordsChar({left: 0, top: top}, "div");
	        if (pos.ch < cm.getLine(pos.line).search(/\S/)) return lineStartSmart(cm, range.head);
	        return pos;
	      }, sel_move);
	    },
	    goLineUp: function(cm) {cm.moveV(-1, "line");},
	    goLineDown: function(cm) {cm.moveV(1, "line");},
	    goPageUp: function(cm) {cm.moveV(-1, "page");},
	    goPageDown: function(cm) {cm.moveV(1, "page");},
	    goCharLeft: function(cm) {cm.moveH(-1, "char");},
	    goCharRight: function(cm) {cm.moveH(1, "char");},
	    goColumnLeft: function(cm) {cm.moveH(-1, "column");},
	    goColumnRight: function(cm) {cm.moveH(1, "column");},
	    goWordLeft: function(cm) {cm.moveH(-1, "word");},
	    goGroupRight: function(cm) {cm.moveH(1, "group");},
	    goGroupLeft: function(cm) {cm.moveH(-1, "group");},
	    goWordRight: function(cm) {cm.moveH(1, "word");},
	    delCharBefore: function(cm) {cm.deleteH(-1, "char");},
	    delCharAfter: function(cm) {cm.deleteH(1, "char");},
	    delWordBefore: function(cm) {cm.deleteH(-1, "word");},
	    delWordAfter: function(cm) {cm.deleteH(1, "word");},
	    delGroupBefore: function(cm) {cm.deleteH(-1, "group");},
	    delGroupAfter: function(cm) {cm.deleteH(1, "group");},
	    indentAuto: function(cm) {cm.indentSelection("smart");},
	    indentMore: function(cm) {cm.indentSelection("add");},
	    indentLess: function(cm) {cm.indentSelection("subtract");},
	    insertTab: function(cm) {cm.replaceSelection("\t");},
	    insertSoftTab: function(cm) {
	      var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
	      for (var i = 0; i < ranges.length; i++) {
	        var pos = ranges[i].from();
	        var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
	        spaces.push(new Array(tabSize - col % tabSize + 1).join(" "));
	      }
	      cm.replaceSelections(spaces);
	    },
	    defaultTab: function(cm) {
	      if (cm.somethingSelected()) cm.indentSelection("add");
	      else cm.execCommand("insertTab");
	    },
	    transposeChars: function(cm) {
	      runInOp(cm, function() {
	        var ranges = cm.listSelections(), newSel = [];
	        for (var i = 0; i < ranges.length; i++) {
	          var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text;
	          if (line) {
	            if (cur.ch == line.length) cur = new Pos(cur.line, cur.ch - 1);
	            if (cur.ch > 0) {
	              cur = new Pos(cur.line, cur.ch + 1);
	              cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
	                              Pos(cur.line, cur.ch - 2), cur, "+transpose");
	            } else if (cur.line > cm.doc.first) {
	              var prev = getLine(cm.doc, cur.line - 1).text;
	              if (prev)
	                cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
	                                prev.charAt(prev.length - 1),
	                                Pos(cur.line - 1, prev.length - 1), Pos(cur.line, 1), "+transpose");
	            }
	          }
	          newSel.push(new Range(cur, cur));
	        }
	        cm.setSelections(newSel);
	      });
	    },
	    newlineAndIndent: function(cm) {
	      runInOp(cm, function() {
	        var len = cm.listSelections().length;
	        for (var i = 0; i < len; i++) {
	          var range = cm.listSelections()[i];
	          cm.replaceRange(cm.doc.lineSeparator(), range.anchor, range.head, "+input");
	          cm.indentLine(range.from().line + 1, null, true);
	        }
	        ensureCursorVisible(cm);
	      });
	    },
	    toggleOverwrite: function(cm) {cm.toggleOverwrite();}
	  };


	  // STANDARD KEYMAPS

	  var keyMap = CodeMirror.keyMap = {};

	  keyMap.basic = {
	    "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
	    "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
	    "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
	    "Tab": "defaultTab", "Shift-Tab": "indentAuto",
	    "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
	    "Esc": "singleSelection"
	  };
	  // Note that the save and find-related commands aren't defined by
	  // default. User code or addons can define them. Unknown commands
	  // are simply ignored.
	  keyMap.pcDefault = {
	    "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
	    "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
	    "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
	    "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
	    "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
	    "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
	    "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
	    fallthrough: "basic"
	  };
	  // Very basic readline/emacs-style bindings, which are standard on Mac.
	  keyMap.emacsy = {
	    "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
	    "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
	    "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
	    "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars"
	  };
	  keyMap.macDefault = {
	    "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
	    "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
	    "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
	    "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
	    "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
	    "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
	    "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
	    fallthrough: ["basic", "emacsy"]
	  };
	  keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;

	  // KEYMAP DISPATCH

	  function normalizeKeyName(name) {
	    var parts = name.split(/-(?!$)/), name = parts[parts.length - 1];
	    var alt, ctrl, shift, cmd;
	    for (var i = 0; i < parts.length - 1; i++) {
	      var mod = parts[i];
	      if (/^(cmd|meta|m)$/i.test(mod)) cmd = true;
	      else if (/^a(lt)?$/i.test(mod)) alt = true;
	      else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true;
	      else if (/^s(hift)$/i.test(mod)) shift = true;
	      else throw new Error("Unrecognized modifier name: " + mod);
	    }
	    if (alt) name = "Alt-" + name;
	    if (ctrl) name = "Ctrl-" + name;
	    if (cmd) name = "Cmd-" + name;
	    if (shift) name = "Shift-" + name;
	    return name;
	  }

	  // This is a kludge to keep keymaps mostly working as raw objects
	  // (backwards compatibility) while at the same time support features
	  // like normalization and multi-stroke key bindings. It compiles a
	  // new normalized keymap, and then updates the old object to reflect
	  // this.
	  CodeMirror.normalizeKeyMap = function(keymap) {
	    var copy = {};
	    for (var keyname in keymap) if (keymap.hasOwnProperty(keyname)) {
	      var value = keymap[keyname];
	      if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) continue;
	      if (value == "...") { delete keymap[keyname]; continue; }

	      var keys = map(keyname.split(" "), normalizeKeyName);
	      for (var i = 0; i < keys.length; i++) {
	        var val, name;
	        if (i == keys.length - 1) {
	          name = keys.join(" ");
	          val = value;
	        } else {
	          name = keys.slice(0, i + 1).join(" ");
	          val = "...";
	        }
	        var prev = copy[name];
	        if (!prev) copy[name] = val;
	        else if (prev != val) throw new Error("Inconsistent bindings for " + name);
	      }
	      delete keymap[keyname];
	    }
	    for (var prop in copy) keymap[prop] = copy[prop];
	    return keymap;
	  };

	  var lookupKey = CodeMirror.lookupKey = function(key, map, handle, context) {
	    map = getKeyMap(map);
	    var found = map.call ? map.call(key, context) : map[key];
	    if (found === false) return "nothing";
	    if (found === "...") return "multi";
	    if (found != null && handle(found)) return "handled";

	    if (map.fallthrough) {
	      if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
	        return lookupKey(key, map.fallthrough, handle, context);
	      for (var i = 0; i < map.fallthrough.length; i++) {
	        var result = lookupKey(key, map.fallthrough[i], handle, context);
	        if (result) return result;
	      }
	    }
	  };

	  // Modifier key presses don't count as 'real' key presses for the
	  // purpose of keymap fallthrough.
	  var isModifierKey = CodeMirror.isModifierKey = function(value) {
	    var name = typeof value == "string" ? value : keyNames[value.keyCode];
	    return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod";
	  };

	  // Look up the name of a key as indicated by an event object.
	  var keyName = CodeMirror.keyName = function(event, noShift) {
	    if (presto && event.keyCode == 34 && event["char"]) return false;
	    var base = keyNames[event.keyCode], name = base;
	    if (name == null || event.altGraphKey) return false;
	    if (event.altKey && base != "Alt") name = "Alt-" + name;
	    if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") name = "Ctrl-" + name;
	    if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Cmd") name = "Cmd-" + name;
	    if (!noShift && event.shiftKey && base != "Shift") name = "Shift-" + name;
	    return name;
	  };

	  function getKeyMap(val) {
	    return typeof val == "string" ? keyMap[val] : val;
	  }

	  // FROMTEXTAREA

	  CodeMirror.fromTextArea = function(textarea, options) {
	    options = options ? copyObj(options) : {};
	    options.value = textarea.value;
	    if (!options.tabindex && textarea.tabIndex)
	      options.tabindex = textarea.tabIndex;
	    if (!options.placeholder && textarea.placeholder)
	      options.placeholder = textarea.placeholder;
	    // Set autofocus to true if this textarea is focused, or if it has
	    // autofocus and no other element is focused.
	    if (options.autofocus == null) {
	      var hasFocus = activeElt();
	      options.autofocus = hasFocus == textarea ||
	        textarea.getAttribute("autofocus") != null && hasFocus == document.body;
	    }

	    function save() {textarea.value = cm.getValue();}
	    if (textarea.form) {
	      on(textarea.form, "submit", save);
	      // Deplorable hack to make the submit method do the right thing.
	      if (!options.leaveSubmitMethodAlone) {
	        var form = textarea.form, realSubmit = form.submit;
	        try {
	          var wrappedSubmit = form.submit = function() {
	            save();
	            form.submit = realSubmit;
	            form.submit();
	            form.submit = wrappedSubmit;
	          };
	        } catch(e) {}
	      }
	    }

	    options.finishInit = function(cm) {
	      cm.save = save;
	      cm.getTextArea = function() { return textarea; };
	      cm.toTextArea = function() {
	        cm.toTextArea = isNaN; // Prevent this from being ran twice
	        save();
	        textarea.parentNode.removeChild(cm.getWrapperElement());
	        textarea.style.display = "";
	        if (textarea.form) {
	          off(textarea.form, "submit", save);
	          if (typeof textarea.form.submit == "function")
	            textarea.form.submit = realSubmit;
	        }
	      };
	    };

	    textarea.style.display = "none";
	    var cm = CodeMirror(function(node) {
	      textarea.parentNode.insertBefore(node, textarea.nextSibling);
	    }, options);
	    return cm;
	  };

	  // STRING STREAM

	  // Fed to the mode parsers, provides helper functions to make
	  // parsers more succinct.

	  var StringStream = CodeMirror.StringStream = function(string, tabSize) {
	    this.pos = this.start = 0;
	    this.string = string;
	    this.tabSize = tabSize || 8;
	    this.lastColumnPos = this.lastColumnValue = 0;
	    this.lineStart = 0;
	  };

	  StringStream.prototype = {
	    eol: function() {return this.pos >= this.string.length;},
	    sol: function() {return this.pos == this.lineStart;},
	    peek: function() {return this.string.charAt(this.pos) || undefined;},
	    next: function() {
	      if (this.pos < this.string.length)
	        return this.string.charAt(this.pos++);
	    },
	    eat: function(match) {
	      var ch = this.string.charAt(this.pos);
	      if (typeof match == "string") var ok = ch == match;
	      else var ok = ch && (match.test ? match.test(ch) : match(ch));
	      if (ok) {++this.pos; return ch;}
	    },
	    eatWhile: function(match) {
	      var start = this.pos;
	      while (this.eat(match)){}
	      return this.pos > start;
	    },
	    eatSpace: function() {
	      var start = this.pos;
	      while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos;
	      return this.pos > start;
	    },
	    skipToEnd: function() {this.pos = this.string.length;},
	    skipTo: function(ch) {
	      var found = this.string.indexOf(ch, this.pos);
	      if (found > -1) {this.pos = found; return true;}
	    },
	    backUp: function(n) {this.pos -= n;},
	    column: function() {
	      if (this.lastColumnPos < this.start) {
	        this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
	        this.lastColumnPos = this.start;
	      }
	      return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
	    },
	    indentation: function() {
	      return countColumn(this.string, null, this.tabSize) -
	        (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
	    },
	    match: function(pattern, consume, caseInsensitive) {
	      if (typeof pattern == "string") {
	        var cased = function(str) {return caseInsensitive ? str.toLowerCase() : str;};
	        var substr = this.string.substr(this.pos, pattern.length);
	        if (cased(substr) == cased(pattern)) {
	          if (consume !== false) this.pos += pattern.length;
	          return true;
	        }
	      } else {
	        var match = this.string.slice(this.pos).match(pattern);
	        if (match && match.index > 0) return null;
	        if (match && consume !== false) this.pos += match[0].length;
	        return match;
	      }
	    },
	    current: function(){return this.string.slice(this.start, this.pos);},
	    hideFirstChars: function(n, inner) {
	      this.lineStart += n;
	      try { return inner(); }
	      finally { this.lineStart -= n; }
	    }
	  };

	  // TEXTMARKERS

	  // Created with markText and setBookmark methods. A TextMarker is a
	  // handle that can be used to clear or find a marked position in the
	  // document. Line objects hold arrays (markedSpans) containing
	  // {from, to, marker} object pointing to such marker objects, and
	  // indicating that such a marker is present on that line. Multiple
	  // lines may point to the same marker when it spans across lines.
	  // The spans will have null for their from/to properties when the
	  // marker continues beyond the start/end of the line. Markers have
	  // links back to the lines they currently touch.

	  var nextMarkerId = 0;

	  var TextMarker = CodeMirror.TextMarker = function(doc, type) {
	    this.lines = [];
	    this.type = type;
	    this.doc = doc;
	    this.id = ++nextMarkerId;
	  };
	  eventMixin(TextMarker);

	  // Clear the marker.
	  TextMarker.prototype.clear = function() {
	    if (this.explicitlyCleared) return;
	    var cm = this.doc.cm, withOp = cm && !cm.curOp;
	    if (withOp) startOperation(cm);
	    if (hasHandler(this, "clear")) {
	      var found = this.find();
	      if (found) signalLater(this, "clear", found.from, found.to);
	    }
	    var min = null, max = null;
	    for (var i = 0; i < this.lines.length; ++i) {
	      var line = this.lines[i];
	      var span = getMarkedSpanFor(line.markedSpans, this);
	      if (cm && !this.collapsed) regLineChange(cm, lineNo(line), "text");
	      else if (cm) {
	        if (span.to != null) max = lineNo(line);
	        if (span.from != null) min = lineNo(line);
	      }
	      line.markedSpans = removeMarkedSpan(line.markedSpans, span);
	      if (span.from == null && this.collapsed && !lineIsHidden(this.doc, line) && cm)
	        updateLineHeight(line, textHeight(cm.display));
	    }
	    if (cm && this.collapsed && !cm.options.lineWrapping) for (var i = 0; i < this.lines.length; ++i) {
	      var visual = visualLine(this.lines[i]), len = lineLength(visual);
	      if (len > cm.display.maxLineLength) {
	        cm.display.maxLine = visual;
	        cm.display.maxLineLength = len;
	        cm.display.maxLineChanged = true;
	      }
	    }

	    if (min != null && cm && this.collapsed) regChange(cm, min, max + 1);
	    this.lines.length = 0;
	    this.explicitlyCleared = true;
	    if (this.atomic && this.doc.cantEdit) {
	      this.doc.cantEdit = false;
	      if (cm) reCheckSelection(cm.doc);
	    }
	    if (cm) signalLater(cm, "markerCleared", cm, this);
	    if (withOp) endOperation(cm);
	    if (this.parent) this.parent.clear();
	  };

	  // Find the position of the marker in the document. Returns a {from,
	  // to} object by default. Side can be passed to get a specific side
	  // -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
	  // Pos objects returned contain a line object, rather than a line
	  // number (used to prevent looking up the same line twice).
	  TextMarker.prototype.find = function(side, lineObj) {
	    if (side == null && this.type == "bookmark") side = 1;
	    var from, to;
	    for (var i = 0; i < this.lines.length; ++i) {
	      var line = this.lines[i];
	      var span = getMarkedSpanFor(line.markedSpans, this);
	      if (span.from != null) {
	        from = Pos(lineObj ? line : lineNo(line), span.from);
	        if (side == -1) return from;
	      }
	      if (span.to != null) {
	        to = Pos(lineObj ? line : lineNo(line), span.to);
	        if (side == 1) return to;
	      }
	    }
	    return from && {from: from, to: to};
	  };

	  // Signals that the marker's widget changed, and surrounding layout
	  // should be recomputed.
	  TextMarker.prototype.changed = function() {
	    var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
	    if (!pos || !cm) return;
	    runInOp(cm, function() {
	      var line = pos.line, lineN = lineNo(pos.line);
	      var view = findViewForLine(cm, lineN);
	      if (view) {
	        clearLineMeasurementCacheFor(view);
	        cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
	      }
	      cm.curOp.updateMaxLine = true;
	      if (!lineIsHidden(widget.doc, line) && widget.height != null) {
	        var oldHeight = widget.height;
	        widget.height = null;
	        var dHeight = widgetHeight(widget) - oldHeight;
	        if (dHeight)
	          updateLineHeight(line, line.height + dHeight);
	      }
	    });
	  };

	  TextMarker.prototype.attachLine = function(line) {
	    if (!this.lines.length && this.doc.cm) {
	      var op = this.doc.cm.curOp;
	      if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
	        (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this);
	    }
	    this.lines.push(line);
	  };
	  TextMarker.prototype.detachLine = function(line) {
	    this.lines.splice(indexOf(this.lines, line), 1);
	    if (!this.lines.length && this.doc.cm) {
	      var op = this.doc.cm.curOp;
	      (op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
	    }
	  };

	  // Collapsed markers have unique ids, in order to be able to order
	  // them, which is needed for uniquely determining an outer marker
	  // when they overlap (they may nest, but not partially overlap).
	  var nextMarkerId = 0;

	  // Create a marker, wire it up to the right lines, and
	  function markText(doc, from, to, options, type) {
	    // Shared markers (across linked documents) are handled separately
	    // (markTextShared will call out to this again, once per
	    // document).
	    if (options && options.shared) return markTextShared(doc, from, to, options, type);
	    // Ensure we are in an operation.
	    if (doc.cm && !doc.cm.curOp) return operation(doc.cm, markText)(doc, from, to, options, type);

	    var marker = new TextMarker(doc, type), diff = cmp(from, to);
	    if (options) copyObj(options, marker, false);
	    // Don't connect empty markers unless clearWhenEmpty is false
	    if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
	      return marker;
	    if (marker.replacedWith) {
	      // Showing up as a widget implies collapsed (widget replaces text)
	      marker.collapsed = true;
	      marker.widgetNode = elt("span", [marker.replacedWith], "CodeMirror-widget");
	      if (!options.handleMouseEvents) marker.widgetNode.setAttribute("cm-ignore-events", "true");
	      if (options.insertLeft) marker.widgetNode.insertLeft = true;
	    }
	    if (marker.collapsed) {
	      if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
	          from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
	        throw new Error("Inserting collapsed marker partially overlapping an existing one");
	      sawCollapsedSpans = true;
	    }

	    if (marker.addToHistory)
	      addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN);

	    var curLine = from.line, cm = doc.cm, updateMaxLine;
	    doc.iter(curLine, to.line + 1, function(line) {
	      if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
	        updateMaxLine = true;
	      if (marker.collapsed && curLine != from.line) updateLineHeight(line, 0);
	      addMarkedSpan(line, new MarkedSpan(marker,
	                                         curLine == from.line ? from.ch : null,
	                                         curLine == to.line ? to.ch : null));
	      ++curLine;
	    });
	    // lineIsHidden depends on the presence of the spans, so needs a second pass
	    if (marker.collapsed) doc.iter(from.line, to.line + 1, function(line) {
	      if (lineIsHidden(doc, line)) updateLineHeight(line, 0);
	    });

	    if (marker.clearOnEnter) on(marker, "beforeCursorEnter", function() { marker.clear(); });

	    if (marker.readOnly) {
	      sawReadOnlySpans = true;
	      if (doc.history.done.length || doc.history.undone.length)
	        doc.clearHistory();
	    }
	    if (marker.collapsed) {
	      marker.id = ++nextMarkerId;
	      marker.atomic = true;
	    }
	    if (cm) {
	      // Sync editor state
	      if (updateMaxLine) cm.curOp.updateMaxLine = true;
	      if (marker.collapsed)
	        regChange(cm, from.line, to.line + 1);
	      else if (marker.className || marker.title || marker.startStyle || marker.endStyle || marker.css)
	        for (var i = from.line; i <= to.line; i++) regLineChange(cm, i, "text");
	      if (marker.atomic) reCheckSelection(cm.doc);
	      signalLater(cm, "markerAdded", cm, marker);
	    }
	    return marker;
	  }

	  // SHARED TEXTMARKERS

	  // A shared marker spans multiple linked documents. It is
	  // implemented as a meta-marker-object controlling multiple normal
	  // markers.
	  var SharedTextMarker = CodeMirror.SharedTextMarker = function(markers, primary) {
	    this.markers = markers;
	    this.primary = primary;
	    for (var i = 0; i < markers.length; ++i)
	      markers[i].parent = this;
	  };
	  eventMixin(SharedTextMarker);

	  SharedTextMarker.prototype.clear = function() {
	    if (this.explicitlyCleared) return;
	    this.explicitlyCleared = true;
	    for (var i = 0; i < this.markers.length; ++i)
	      this.markers[i].clear();
	    signalLater(this, "clear");
	  };
	  SharedTextMarker.prototype.find = function(side, lineObj) {
	    return this.primary.find(side, lineObj);
	  };

	  function markTextShared(doc, from, to, options, type) {
	    options = copyObj(options);
	    options.shared = false;
	    var markers = [markText(doc, from, to, options, type)], primary = markers[0];
	    var widget = options.widgetNode;
	    linkedDocs(doc, function(doc) {
	      if (widget) options.widgetNode = widget.cloneNode(true);
	      markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
	      for (var i = 0; i < doc.linked.length; ++i)
	        if (doc.linked[i].isParent) return;
	      primary = lst(markers);
	    });
	    return new SharedTextMarker(markers, primary);
	  }

	  function findSharedMarkers(doc) {
	    return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())),
	                         function(m) { return m.parent; });
	  }

	  function copySharedMarkers(doc, markers) {
	    for (var i = 0; i < markers.length; i++) {
	      var marker = markers[i], pos = marker.find();
	      var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
	      if (cmp(mFrom, mTo)) {
	        var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
	        marker.markers.push(subMark);
	        subMark.parent = marker;
	      }
	    }
	  }

	  function detachSharedMarkers(markers) {
	    for (var i = 0; i < markers.length; i++) {
	      var marker = markers[i], linked = [marker.primary.doc];;
	      linkedDocs(marker.primary.doc, function(d) { linked.push(d); });
	      for (var j = 0; j < marker.markers.length; j++) {
	        var subMarker = marker.markers[j];
	        if (indexOf(linked, subMarker.doc) == -1) {
	          subMarker.parent = null;
	          marker.markers.splice(j--, 1);
	        }
	      }
	    }
	  }

	  // TEXTMARKER SPANS

	  function MarkedSpan(marker, from, to) {
	    this.marker = marker;
	    this.from = from; this.to = to;
	  }

	  // Search an array of spans for a span matching the given marker.
	  function getMarkedSpanFor(spans, marker) {
	    if (spans) for (var i = 0; i < spans.length; ++i) {
	      var span = spans[i];
	      if (span.marker == marker) return span;
	    }
	  }
	  // Remove a span from an array, returning undefined if no spans are
	  // left (we don't store arrays for lines without spans).
	  function removeMarkedSpan(spans, span) {
	    for (var r, i = 0; i < spans.length; ++i)
	      if (spans[i] != span) (r || (r = [])).push(spans[i]);
	    return r;
	  }
	  // Add a span to a line.
	  function addMarkedSpan(line, span) {
	    line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
	    span.marker.attachLine(line);
	  }

	  // Used for the algorithm that adjusts markers for a change in the
	  // document. These functions cut an array of spans at a given
	  // character position, returning an array of remaining chunks (or
	  // undefined if nothing remains).
	  function markedSpansBefore(old, startCh, isInsert) {
	    if (old) for (var i = 0, nw; i < old.length; ++i) {
	      var span = old[i], marker = span.marker;
	      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
	      if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
	        var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);
	        (nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
	      }
	    }
	    return nw;
	  }
	  function markedSpansAfter(old, endCh, isInsert) {
	    if (old) for (var i = 0, nw; i < old.length; ++i) {
	      var span = old[i], marker = span.marker;
	      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
	      if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
	        var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);
	        (nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
	                                              span.to == null ? null : span.to - endCh));
	      }
	    }
	    return nw;
	  }

	  // Given a change object, compute the new set of marker spans that
	  // cover the line in which the change took place. Removes spans
	  // entirely within the change, reconnects spans belonging to the
	  // same marker that appear on both sides of the change, and cuts off
	  // spans partially within the change. Returns an array of span
	  // arrays with one element for each line in (after) the change.
	  function stretchSpansOverChange(doc, change) {
	    if (change.full) return null;
	    var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
	    var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
	    if (!oldFirst && !oldLast) return null;

	    var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
	    // Get the spans that 'stick out' on both sides
	    var first = markedSpansBefore(oldFirst, startCh, isInsert);
	    var last = markedSpansAfter(oldLast, endCh, isInsert);

	    // Next, merge those two ends
	    var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
	    if (first) {
	      // Fix up .to properties of first
	      for (var i = 0; i < first.length; ++i) {
	        var span = first[i];
	        if (span.to == null) {
	          var found = getMarkedSpanFor(last, span.marker);
	          if (!found) span.to = startCh;
	          else if (sameLine) span.to = found.to == null ? null : found.to + offset;
	        }
	      }
	    }
	    if (last) {
	      // Fix up .from in last (or move them into first in case of sameLine)
	      for (var i = 0; i < last.length; ++i) {
	        var span = last[i];
	        if (span.to != null) span.to += offset;
	        if (span.from == null) {
	          var found = getMarkedSpanFor(first, span.marker);
	          if (!found) {
	            span.from = offset;
	            if (sameLine) (first || (first = [])).push(span);
	          }
	        } else {
	          span.from += offset;
	          if (sameLine) (first || (first = [])).push(span);
	        }
	      }
	    }
	    // Make sure we didn't create any zero-length spans
	    if (first) first = clearEmptySpans(first);
	    if (last && last != first) last = clearEmptySpans(last);

	    var newMarkers = [first];
	    if (!sameLine) {
	      // Fill gap with whole-line-spans
	      var gap = change.text.length - 2, gapMarkers;
	      if (gap > 0 && first)
	        for (var i = 0; i < first.length; ++i)
	          if (first[i].to == null)
	            (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i].marker, null, null));
	      for (var i = 0; i < gap; ++i)
	        newMarkers.push(gapMarkers);
	      newMarkers.push(last);
	    }
	    return newMarkers;
	  }

	  // Remove spans that are empty and don't have a clearWhenEmpty
	  // option of false.
	  function clearEmptySpans(spans) {
	    for (var i = 0; i < spans.length; ++i) {
	      var span = spans[i];
	      if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
	        spans.splice(i--, 1);
	    }
	    if (!spans.length) return null;
	    return spans;
	  }

	  // Used for un/re-doing changes from the history. Combines the
	  // result of computing the existing spans with the set of spans that
	  // existed in the history (so that deleting around a span and then
	  // undoing brings back the span).
	  function mergeOldSpans(doc, change) {
	    var old = getOldSpans(doc, change);
	    var stretched = stretchSpansOverChange(doc, change);
	    if (!old) return stretched;
	    if (!stretched) return old;

	    for (var i = 0; i < old.length; ++i) {
	      var oldCur = old[i], stretchCur = stretched[i];
	      if (oldCur && stretchCur) {
	        spans: for (var j = 0; j < stretchCur.length; ++j) {
	          var span = stretchCur[j];
	          for (var k = 0; k < oldCur.length; ++k)
	            if (oldCur[k].marker == span.marker) continue spans;
	          oldCur.push(span);
	        }
	      } else if (stretchCur) {
	        old[i] = stretchCur;
	      }
	    }
	    return old;
	  }

	  // Used to 'clip' out readOnly ranges when making a change.
	  function removeReadOnlyRanges(doc, from, to) {
	    var markers = null;
	    doc.iter(from.line, to.line + 1, function(line) {
	      if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
	        var mark = line.markedSpans[i].marker;
	        if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
	          (markers || (markers = [])).push(mark);
	      }
	    });
	    if (!markers) return null;
	    var parts = [{from: from, to: to}];
	    for (var i = 0; i < markers.length; ++i) {
	      var mk = markers[i], m = mk.find(0);
	      for (var j = 0; j < parts.length; ++j) {
	        var p = parts[j];
	        if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) continue;
	        var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
	        if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
	          newParts.push({from: p.from, to: m.from});
	        if (dto > 0 || !mk.inclusiveRight && !dto)
	          newParts.push({from: m.to, to: p.to});
	        parts.splice.apply(parts, newParts);
	        j += newParts.length - 1;
	      }
	    }
	    return parts;
	  }

	  // Connect or disconnect spans from a line.
	  function detachMarkedSpans(line) {
	    var spans = line.markedSpans;
	    if (!spans) return;
	    for (var i = 0; i < spans.length; ++i)
	      spans[i].marker.detachLine(line);
	    line.markedSpans = null;
	  }
	  function attachMarkedSpans(line, spans) {
	    if (!spans) return;
	    for (var i = 0; i < spans.length; ++i)
	      spans[i].marker.attachLine(line);
	    line.markedSpans = spans;
	  }

	  // Helpers used when computing which overlapping collapsed span
	  // counts as the larger one.
	  function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0; }
	  function extraRight(marker) { return marker.inclusiveRight ? 1 : 0; }

	  // Returns a number indicating which of two overlapping collapsed
	  // spans is larger (and thus includes the other). Falls back to
	  // comparing ids when the spans cover exactly the same range.
	  function compareCollapsedMarkers(a, b) {
	    var lenDiff = a.lines.length - b.lines.length;
	    if (lenDiff != 0) return lenDiff;
	    var aPos = a.find(), bPos = b.find();
	    var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
	    if (fromCmp) return -fromCmp;
	    var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
	    if (toCmp) return toCmp;
	    return b.id - a.id;
	  }

	  // Find out whether a line ends or starts in a collapsed span. If
	  // so, return the marker for that span.
	  function collapsedSpanAtSide(line, start) {
	    var sps = sawCollapsedSpans && line.markedSpans, found;
	    if (sps) for (var sp, i = 0; i < sps.length; ++i) {
	      sp = sps[i];
	      if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
	          (!found || compareCollapsedMarkers(found, sp.marker) < 0))
	        found = sp.marker;
	    }
	    return found;
	  }
	  function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true); }
	  function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false); }

	  // Test whether there exists a collapsed span that partially
	  // overlaps (covers the start or end, but not both) of a new span.
	  // Such overlap is not allowed.
	  function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
	    var line = getLine(doc, lineNo);
	    var sps = sawCollapsedSpans && line.markedSpans;
	    if (sps) for (var i = 0; i < sps.length; ++i) {
	      var sp = sps[i];
	      if (!sp.marker.collapsed) continue;
	      var found = sp.marker.find(0);
	      var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
	      var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
	      if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) continue;
	      if (fromCmp <= 0 && (cmp(found.to, from) > 0 || (sp.marker.inclusiveRight && marker.inclusiveLeft)) ||
	          fromCmp >= 0 && (cmp(found.from, to) < 0 || (sp.marker.inclusiveLeft && marker.inclusiveRight)))
	        return true;
	    }
	  }

	  // A visual line is a line as drawn on the screen. Folding, for
	  // example, can cause multiple logical lines to appear on the same
	  // visual line. This finds the start of the visual line that the
	  // given line is part of (usually that is the line itself).
	  function visualLine(line) {
	    var merged;
	    while (merged = collapsedSpanAtStart(line))
	      line = merged.find(-1, true).line;
	    return line;
	  }

	  // Returns an array of logical lines that continue the visual line
	  // started by the argument, or undefined if there are no such lines.
	  function visualLineContinued(line) {
	    var merged, lines;
	    while (merged = collapsedSpanAtEnd(line)) {
	      line = merged.find(1, true).line;
	      (lines || (lines = [])).push(line);
	    }
	    return lines;
	  }

	  // Get the line number of the start of the visual line that the
	  // given line number is part of.
	  function visualLineNo(doc, lineN) {
	    var line = getLine(doc, lineN), vis = visualLine(line);
	    if (line == vis) return lineN;
	    return lineNo(vis);
	  }
	  // Get the line number of the start of the next visual line after
	  // the given line.
	  function visualLineEndNo(doc, lineN) {
	    if (lineN > doc.lastLine()) return lineN;
	    var line = getLine(doc, lineN), merged;
	    if (!lineIsHidden(doc, line)) return lineN;
	    while (merged = collapsedSpanAtEnd(line))
	      line = merged.find(1, true).line;
	    return lineNo(line) + 1;
	  }

	  // Compute whether a line is hidden. Lines count as hidden when they
	  // are part of a visual line that starts with another line, or when
	  // they are entirely covered by collapsed, non-widget span.
	  function lineIsHidden(doc, line) {
	    var sps = sawCollapsedSpans && line.markedSpans;
	    if (sps) for (var sp, i = 0; i < sps.length; ++i) {
	      sp = sps[i];
	      if (!sp.marker.collapsed) continue;
	      if (sp.from == null) return true;
	      if (sp.marker.widgetNode) continue;
	      if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
	        return true;
	    }
	  }
	  function lineIsHiddenInner(doc, line, span) {
	    if (span.to == null) {
	      var end = span.marker.find(1, true);
	      return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker));
	    }
	    if (span.marker.inclusiveRight && span.to == line.text.length)
	      return true;
	    for (var sp, i = 0; i < line.markedSpans.length; ++i) {
	      sp = line.markedSpans[i];
	      if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
	          (sp.to == null || sp.to != span.from) &&
	          (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
	          lineIsHiddenInner(doc, line, sp)) return true;
	    }
	  }

	  // LINE WIDGETS

	  // Line widgets are block elements displayed above or below a line.

	  var LineWidget = CodeMirror.LineWidget = function(doc, node, options) {
	    if (options) for (var opt in options) if (options.hasOwnProperty(opt))
	      this[opt] = options[opt];
	    this.doc = doc;
	    this.node = node;
	  };
	  eventMixin(LineWidget);

	  function adjustScrollWhenAboveVisible(cm, line, diff) {
	    if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
	      addToScrollPos(cm, null, diff);
	  }

	  LineWidget.prototype.clear = function() {
	    var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
	    if (no == null || !ws) return;
	    for (var i = 0; i < ws.length; ++i) if (ws[i] == this) ws.splice(i--, 1);
	    if (!ws.length) line.widgets = null;
	    var height = widgetHeight(this);
	    updateLineHeight(line, Math.max(0, line.height - height));
	    if (cm) runInOp(cm, function() {
	      adjustScrollWhenAboveVisible(cm, line, -height);
	      regLineChange(cm, no, "widget");
	    });
	  };
	  LineWidget.prototype.changed = function() {
	    var oldH = this.height, cm = this.doc.cm, line = this.line;
	    this.height = null;
	    var diff = widgetHeight(this) - oldH;
	    if (!diff) return;
	    updateLineHeight(line, line.height + diff);
	    if (cm) runInOp(cm, function() {
	      cm.curOp.forceUpdate = true;
	      adjustScrollWhenAboveVisible(cm, line, diff);
	    });
	  };

	  function widgetHeight(widget) {
	    if (widget.height != null) return widget.height;
	    var cm = widget.doc.cm;
	    if (!cm) return 0;
	    if (!contains(document.body, widget.node)) {
	      var parentStyle = "position: relative;";
	      if (widget.coverGutter)
	        parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;";
	      if (widget.noHScroll)
	        parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;";
	      removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
	    }
	    return widget.height = widget.node.parentNode.offsetHeight;
	  }

	  function addLineWidget(doc, handle, node, options) {
	    var widget = new LineWidget(doc, node, options);
	    var cm = doc.cm;
	    if (cm && widget.noHScroll) cm.display.alignWidgets = true;
	    changeLine(doc, handle, "widget", function(line) {
	      var widgets = line.widgets || (line.widgets = []);
	      if (widget.insertAt == null) widgets.push(widget);
	      else widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget);
	      widget.line = line;
	      if (cm && !lineIsHidden(doc, line)) {
	        var aboveVisible = heightAtLine(line) < doc.scrollTop;
	        updateLineHeight(line, line.height + widgetHeight(widget));
	        if (aboveVisible) addToScrollPos(cm, null, widget.height);
	        cm.curOp.forceUpdate = true;
	      }
	      return true;
	    });
	    return widget;
	  }

	  // LINE DATA STRUCTURE

	  // Line objects. These hold state related to a line, including
	  // highlighting info (the styles array).
	  var Line = CodeMirror.Line = function(text, markedSpans, estimateHeight) {
	    this.text = text;
	    attachMarkedSpans(this, markedSpans);
	    this.height = estimateHeight ? estimateHeight(this) : 1;
	  };
	  eventMixin(Line);
	  Line.prototype.lineNo = function() { return lineNo(this); };

	  // Change the content (text, markers) of a line. Automatically
	  // invalidates cached information and tries to re-estimate the
	  // line's height.
	  function updateLine(line, text, markedSpans, estimateHeight) {
	    line.text = text;
	    if (line.stateAfter) line.stateAfter = null;
	    if (line.styles) line.styles = null;
	    if (line.order != null) line.order = null;
	    detachMarkedSpans(line);
	    attachMarkedSpans(line, markedSpans);
	    var estHeight = estimateHeight ? estimateHeight(line) : 1;
	    if (estHeight != line.height) updateLineHeight(line, estHeight);
	  }

	  // Detach a line from the document tree and its markers.
	  function cleanUpLine(line) {
	    line.parent = null;
	    detachMarkedSpans(line);
	  }

	  function extractLineClasses(type, output) {
	    if (type) for (;;) {
	      var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
	      if (!lineClass) break;
	      type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
	      var prop = lineClass[1] ? "bgClass" : "textClass";
	      if (output[prop] == null)
	        output[prop] = lineClass[2];
	      else if (!(new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)")).test(output[prop]))
	        output[prop] += " " + lineClass[2];
	    }
	    return type;
	  }

	  function callBlankLine(mode, state) {
	    if (mode.blankLine) return mode.blankLine(state);
	    if (!mode.innerMode) return;
	    var inner = CodeMirror.innerMode(mode, state);
	    if (inner.mode.blankLine) return inner.mode.blankLine(inner.state);
	  }

	  function readToken(mode, stream, state, inner) {
	    for (var i = 0; i < 10; i++) {
	      if (inner) inner[0] = CodeMirror.innerMode(mode, state).mode;
	      var style = mode.token(stream, state);
	      if (stream.pos > stream.start) return style;
	    }
	    throw new Error("Mode " + mode.name + " failed to advance stream.");
	  }

	  // Utility for getTokenAt and getLineTokens
	  function takeToken(cm, pos, precise, asArray) {
	    function getObj(copy) {
	      return {start: stream.start, end: stream.pos,
	              string: stream.current(),
	              type: style || null,
	              state: copy ? copyState(doc.mode, state) : state};
	    }

	    var doc = cm.doc, mode = doc.mode, style;
	    pos = clipPos(doc, pos);
	    var line = getLine(doc, pos.line), state = getStateBefore(cm, pos.line, precise);
	    var stream = new StringStream(line.text, cm.options.tabSize), tokens;
	    if (asArray) tokens = [];
	    while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
	      stream.start = stream.pos;
	      style = readToken(mode, stream, state);
	      if (asArray) tokens.push(getObj(true));
	    }
	    return asArray ? tokens : getObj();
	  }

	  // Run the given mode's parser over a line, calling f for each token.
	  function runMode(cm, text, mode, state, f, lineClasses, forceToEnd) {
	    var flattenSpans = mode.flattenSpans;
	    if (flattenSpans == null) flattenSpans = cm.options.flattenSpans;
	    var curStart = 0, curStyle = null;
	    var stream = new StringStream(text, cm.options.tabSize), style;
	    var inner = cm.options.addModeClass && [null];
	    if (text == "") extractLineClasses(callBlankLine(mode, state), lineClasses);
	    while (!stream.eol()) {
	      if (stream.pos > cm.options.maxHighlightLength) {
	        flattenSpans = false;
	        if (forceToEnd) processLine(cm, text, state, stream.pos);
	        stream.pos = text.length;
	        style = null;
	      } else {
	        style = extractLineClasses(readToken(mode, stream, state, inner), lineClasses);
	      }
	      if (inner) {
	        var mName = inner[0].name;
	        if (mName) style = "m-" + (style ? mName + " " + style : mName);
	      }
	      if (!flattenSpans || curStyle != style) {
	        while (curStart < stream.start) {
	          curStart = Math.min(stream.start, curStart + 50000);
	          f(curStart, curStyle);
	        }
	        curStyle = style;
	      }
	      stream.start = stream.pos;
	    }
	    while (curStart < stream.pos) {
	      // Webkit seems to refuse to render text nodes longer than 57444 characters
	      var pos = Math.min(stream.pos, curStart + 50000);
	      f(pos, curStyle);
	      curStart = pos;
	    }
	  }

	  // Compute a style array (an array starting with a mode generation
	  // -- for invalidation -- followed by pairs of end positions and
	  // style strings), which is used to highlight the tokens on the
	  // line.
	  function highlightLine(cm, line, state, forceToEnd) {
	    // A styles array always starts with a number identifying the
	    // mode/overlays that it is based on (for easy invalidation).
	    var st = [cm.state.modeGen], lineClasses = {};
	    // Compute the base array of styles
	    runMode(cm, line.text, cm.doc.mode, state, function(end, style) {
	      st.push(end, style);
	    }, lineClasses, forceToEnd);

	    // Run overlays, adjust style array.
	    for (var o = 0; o < cm.state.overlays.length; ++o) {
	      var overlay = cm.state.overlays[o], i = 1, at = 0;
	      runMode(cm, line.text, overlay.mode, true, function(end, style) {
	        var start = i;
	        // Ensure there's a token end at the current position, and that i points at it
	        while (at < end) {
	          var i_end = st[i];
	          if (i_end > end)
	            st.splice(i, 1, end, st[i+1], i_end);
	          i += 2;
	          at = Math.min(end, i_end);
	        }
	        if (!style) return;
	        if (overlay.opaque) {
	          st.splice(start, i - start, end, "cm-overlay " + style);
	          i = start + 2;
	        } else {
	          for (; start < i; start += 2) {
	            var cur = st[start+1];
	            st[start+1] = (cur ? cur + " " : "") + "cm-overlay " + style;
	          }
	        }
	      }, lineClasses);
	    }

	    return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null};
	  }

	  function getLineStyles(cm, line, updateFrontier) {
	    if (!line.styles || line.styles[0] != cm.state.modeGen) {
	      var state = getStateBefore(cm, lineNo(line));
	      var result = highlightLine(cm, line, line.text.length > cm.options.maxHighlightLength ? copyState(cm.doc.mode, state) : state);
	      line.stateAfter = state;
	      line.styles = result.styles;
	      if (result.classes) line.styleClasses = result.classes;
	      else if (line.styleClasses) line.styleClasses = null;
	      if (updateFrontier === cm.doc.frontier) cm.doc.frontier++;
	    }
	    return line.styles;
	  }

	  // Lightweight form of highlight -- proceed over this line and
	  // update state, but don't save a style array. Used for lines that
	  // aren't currently visible.
	  function processLine(cm, text, state, startAt) {
	    var mode = cm.doc.mode;
	    var stream = new StringStream(text, cm.options.tabSize);
	    stream.start = stream.pos = startAt || 0;
	    if (text == "") callBlankLine(mode, state);
	    while (!stream.eol()) {
	      readToken(mode, stream, state);
	      stream.start = stream.pos;
	    }
	  }

	  // Convert a style as returned by a mode (either null, or a string
	  // containing one or more styles) to a CSS style. This is cached,
	  // and also looks for line-wide styles.
	  var styleToClassCache = {}, styleToClassCacheWithMode = {};
	  function interpretTokenStyle(style, options) {
	    if (!style || /^\s*$/.test(style)) return null;
	    var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
	    return cache[style] ||
	      (cache[style] = style.replace(/\S+/g, "cm-$&"));
	  }

	  // Render the DOM representation of the text of a line. Also builds
	  // up a 'line map', which points at the DOM nodes that represent
	  // specific stretches of text, and is used by the measuring code.
	  // The returned object contains the DOM node, this map, and
	  // information about line-wide styles that were set by the mode.
	  function buildLineContent(cm, lineView) {
	    // The padding-right forces the element to have a 'border', which
	    // is needed on Webkit to be able to get line-level bounding
	    // rectangles for it (in measureChar).
	    var content = elt("span", null, null, webkit ? "padding-right: .1px" : null);
	    var builder = {pre: elt("pre", [content], "CodeMirror-line"), content: content,
	                   col: 0, pos: 0, cm: cm,
	                   splitSpaces: (ie || webkit) && cm.getOption("lineWrapping")};
	    lineView.measure = {};

	    // Iterate over the logical lines that make up this visual line.
	    for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
	      var line = i ? lineView.rest[i - 1] : lineView.line, order;
	      builder.pos = 0;
	      builder.addToken = buildToken;
	      // Optionally wire in some hacks into the token-rendering
	      // algorithm, to deal with browser quirks.
	      if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line)))
	        builder.addToken = buildTokenBadBidi(builder.addToken, order);
	      builder.map = [];
	      var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
	      insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
	      if (line.styleClasses) {
	        if (line.styleClasses.bgClass)
	          builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "");
	        if (line.styleClasses.textClass)
	          builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || "");
	      }

	      // Ensure at least a single node is present, for measuring.
	      if (builder.map.length == 0)
	        builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure)));

	      // Store the map and a cache object for the current logical line
	      if (i == 0) {
	        lineView.measure.map = builder.map;
	        lineView.measure.cache = {};
	      } else {
	        (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map);
	        (lineView.measure.caches || (lineView.measure.caches = [])).push({});
	      }
	    }

	    // See issue #2901
	    if (webkit && /\bcm-tab\b/.test(builder.content.lastChild.className))
	      builder.content.className = "cm-tab-wrap-hack";

	    signal(cm, "renderLine", cm, lineView.line, builder.pre);
	    if (builder.pre.className)
	      builder.textClass = joinClasses(builder.pre.className, builder.textClass || "");

	    return builder;
	  }

	  function defaultSpecialCharPlaceholder(ch) {
	    var token = elt("span", "\u2022", "cm-invalidchar");
	    token.title = "\\u" + ch.charCodeAt(0).toString(16);
	    token.setAttribute("aria-label", token.title);
	    return token;
	  }

	  // Build up the DOM representation for a single token, and add it to
	  // the line map. Takes care to render special characters separately.
	  function buildToken(builder, text, style, startStyle, endStyle, title, css) {
	    if (!text) return;
	    var displayText = builder.splitSpaces ? text.replace(/ {3,}/g, splitSpaces) : text;
	    var special = builder.cm.state.specialChars, mustWrap = false;
	    if (!special.test(text)) {
	      builder.col += text.length;
	      var content = document.createTextNode(displayText);
	      builder.map.push(builder.pos, builder.pos + text.length, content);
	      if (ie && ie_version < 9) mustWrap = true;
	      builder.pos += text.length;
	    } else {
	      var content = document.createDocumentFragment(), pos = 0;
	      while (true) {
	        special.lastIndex = pos;
	        var m = special.exec(text);
	        var skipped = m ? m.index - pos : text.length - pos;
	        if (skipped) {
	          var txt = document.createTextNode(displayText.slice(pos, pos + skipped));
	          if (ie && ie_version < 9) content.appendChild(elt("span", [txt]));
	          else content.appendChild(txt);
	          builder.map.push(builder.pos, builder.pos + skipped, txt);
	          builder.col += skipped;
	          builder.pos += skipped;
	        }
	        if (!m) break;
	        pos += skipped + 1;
	        if (m[0] == "\t") {
	          var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
	          var txt = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
	          txt.setAttribute("role", "presentation");
	          txt.setAttribute("cm-text", "\t");
	          builder.col += tabWidth;
	        } else if (m[0] == "\r" || m[0] == "\n") {
	          var txt = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"));
	          txt.setAttribute("cm-text", m[0]);
	          builder.col += 1;
	        } else {
	          var txt = builder.cm.options.specialCharPlaceholder(m[0]);
	          txt.setAttribute("cm-text", m[0]);
	          if (ie && ie_version < 9) content.appendChild(elt("span", [txt]));
	          else content.appendChild(txt);
	          builder.col += 1;
	        }
	        builder.map.push(builder.pos, builder.pos + 1, txt);
	        builder.pos++;
	      }
	    }
	    if (style || startStyle || endStyle || mustWrap || css) {
	      var fullStyle = style || "";
	      if (startStyle) fullStyle += startStyle;
	      if (endStyle) fullStyle += endStyle;
	      var token = elt("span", [content], fullStyle, css);
	      if (title) token.title = title;
	      return builder.content.appendChild(token);
	    }
	    builder.content.appendChild(content);
	  }

	  function splitSpaces(old) {
	    var out = " ";
	    for (var i = 0; i < old.length - 2; ++i) out += i % 2 ? " " : "\u00a0";
	    out += " ";
	    return out;
	  }

	  // Work around nonsense dimensions being reported for stretches of
	  // right-to-left text.
	  function buildTokenBadBidi(inner, order) {
	    return function(builder, text, style, startStyle, endStyle, title, css) {
	      style = style ? style + " cm-force-border" : "cm-force-border";
	      var start = builder.pos, end = start + text.length;
	      for (;;) {
	        // Find the part that overlaps with the start of this text
	        for (var i = 0; i < order.length; i++) {
	          var part = order[i];
	          if (part.to > start && part.from <= start) break;
	        }
	        if (part.to >= end) return inner(builder, text, style, startStyle, endStyle, title, css);
	        inner(builder, text.slice(0, part.to - start), style, startStyle, null, title, css);
	        startStyle = null;
	        text = text.slice(part.to - start);
	        start = part.to;
	      }
	    };
	  }

	  function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
	    var widget = !ignoreWidget && marker.widgetNode;
	    if (widget) builder.map.push(builder.pos, builder.pos + size, widget);
	    if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
	      if (!widget)
	        widget = builder.content.appendChild(document.createElement("span"));
	      widget.setAttribute("cm-marker", marker.id);
	    }
	    if (widget) {
	      builder.cm.display.input.setUneditable(widget);
	      builder.content.appendChild(widget);
	    }
	    builder.pos += size;
	  }

	  // Outputs a number of spans to make up a line, taking highlighting
	  // and marked text into account.
	  function insertLineContent(line, builder, styles) {
	    var spans = line.markedSpans, allText = line.text, at = 0;
	    if (!spans) {
	      for (var i = 1; i < styles.length; i+=2)
	        builder.addToken(builder, allText.slice(at, at = styles[i]), interpretTokenStyle(styles[i+1], builder.cm.options));
	      return;
	    }

	    var len = allText.length, pos = 0, i = 1, text = "", style, css;
	    var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, title, collapsed;
	    for (;;) {
	      if (nextChange == pos) { // Update current marker set
	        spanStyle = spanEndStyle = spanStartStyle = title = css = "";
	        collapsed = null; nextChange = Infinity;
	        var foundBookmarks = [], endStyles
	        for (var j = 0; j < spans.length; ++j) {
	          var sp = spans[j], m = sp.marker;
	          if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
	            foundBookmarks.push(m);
	          } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
	            if (sp.to != null && sp.to != pos && nextChange > sp.to) {
	              nextChange = sp.to;
	              spanEndStyle = "";
	            }
	            if (m.className) spanStyle += " " + m.className;
	            if (m.css) css = (css ? css + ";" : "") + m.css;
	            if (m.startStyle && sp.from == pos) spanStartStyle += " " + m.startStyle;
	            if (m.endStyle && sp.to == nextChange) (endStyles || (endStyles = [])).push(m.endStyle, sp.to)
	            if (m.title && !title) title = m.title;
	            if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
	              collapsed = sp;
	          } else if (sp.from > pos && nextChange > sp.from) {
	            nextChange = sp.from;
	          }
	        }
	        if (endStyles) for (var j = 0; j < endStyles.length; j += 2)
	          if (endStyles[j + 1] == nextChange) spanEndStyle += " " + endStyles[j]

	        if (!collapsed || collapsed.from == pos) for (var j = 0; j < foundBookmarks.length; ++j)
	          buildCollapsedSpan(builder, 0, foundBookmarks[j]);
	        if (collapsed && (collapsed.from || 0) == pos) {
	          buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
	                             collapsed.marker, collapsed.from == null);
	          if (collapsed.to == null) return;
	          if (collapsed.to == pos) collapsed = false;
	        }
	      }
	      if (pos >= len) break;

	      var upto = Math.min(len, nextChange);
	      while (true) {
	        if (text) {
	          var end = pos + text.length;
	          if (!collapsed) {
	            var tokenText = end > upto ? text.slice(0, upto - pos) : text;
	            builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
	                             spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title, css);
	          }
	          if (end >= upto) {text = text.slice(upto - pos); pos = upto; break;}
	          pos = end;
	          spanStartStyle = "";
	        }
	        text = allText.slice(at, at = styles[i++]);
	        style = interpretTokenStyle(styles[i++], builder.cm.options);
	      }
	    }
	  }

	  // DOCUMENT DATA STRUCTURE

	  // By default, updates that start and end at the beginning of a line
	  // are treated specially, in order to make the association of line
	  // widgets and marker elements with the text behave more intuitive.
	  function isWholeLineUpdate(doc, change) {
	    return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
	      (!doc.cm || doc.cm.options.wholeLineUpdateBefore);
	  }

	  // Perform a change on the document data structure.
	  function updateDoc(doc, change, markedSpans, estimateHeight) {
	    function spansFor(n) {return markedSpans ? markedSpans[n] : null;}
	    function update(line, text, spans) {
	      updateLine(line, text, spans, estimateHeight);
	      signalLater(line, "change", line, change);
	    }
	    function linesFor(start, end) {
	      for (var i = start, result = []; i < end; ++i)
	        result.push(new Line(text[i], spansFor(i), estimateHeight));
	      return result;
	    }

	    var from = change.from, to = change.to, text = change.text;
	    var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
	    var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;

	    // Adjust the line structure
	    if (change.full) {
	      doc.insert(0, linesFor(0, text.length));
	      doc.remove(text.length, doc.size - text.length);
	    } else if (isWholeLineUpdate(doc, change)) {
	      // This is a whole-line replace. Treated specially to make
	      // sure line objects move the way they are supposed to.
	      var added = linesFor(0, text.length - 1);
	      update(lastLine, lastLine.text, lastSpans);
	      if (nlines) doc.remove(from.line, nlines);
	      if (added.length) doc.insert(from.line, added);
	    } else if (firstLine == lastLine) {
	      if (text.length == 1) {
	        update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
	      } else {
	        var added = linesFor(1, text.length - 1);
	        added.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight));
	        update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
	        doc.insert(from.line + 1, added);
	      }
	    } else if (text.length == 1) {
	      update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
	      doc.remove(from.line + 1, nlines);
	    } else {
	      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
	      update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
	      var added = linesFor(1, text.length - 1);
	      if (nlines > 1) doc.remove(from.line + 1, nlines - 1);
	      doc.insert(from.line + 1, added);
	    }

	    signalLater(doc, "change", doc, change);
	  }

	  // The document is represented as a BTree consisting of leaves, with
	  // chunk of lines in them, and branches, with up to ten leaves or
	  // other branch nodes below them. The top node is always a branch
	  // node, and is the document object itself (meaning it has
	  // additional methods and properties).
	  //
	  // All nodes have parent links. The tree is used both to go from
	  // line numbers to line objects, and to go from objects to numbers.
	  // It also indexes by height, and is used to convert between height
	  // and line object, and to find the total height of the document.
	  //
	  // See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

	  function LeafChunk(lines) {
	    this.lines = lines;
	    this.parent = null;
	    for (var i = 0, height = 0; i < lines.length; ++i) {
	      lines[i].parent = this;
	      height += lines[i].height;
	    }
	    this.height = height;
	  }

	  LeafChunk.prototype = {
	    chunkSize: function() { return this.lines.length; },
	    // Remove the n lines at offset 'at'.
	    removeInner: function(at, n) {
	      for (var i = at, e = at + n; i < e; ++i) {
	        var line = this.lines[i];
	        this.height -= line.height;
	        cleanUpLine(line);
	        signalLater(line, "delete");
	      }
	      this.lines.splice(at, n);
	    },
	    // Helper used to collapse a small branch into a single leaf.
	    collapse: function(lines) {
	      lines.push.apply(lines, this.lines);
	    },
	    // Insert the given array of lines at offset 'at', count them as
	    // having the given height.
	    insertInner: function(at, lines, height) {
	      this.height += height;
	      this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
	      for (var i = 0; i < lines.length; ++i) lines[i].parent = this;
	    },
	    // Used to iterate over a part of the tree.
	    iterN: function(at, n, op) {
	      for (var e = at + n; at < e; ++at)
	        if (op(this.lines[at])) return true;
	    }
	  };

	  function BranchChunk(children) {
	    this.children = children;
	    var size = 0, height = 0;
	    for (var i = 0; i < children.length; ++i) {
	      var ch = children[i];
	      size += ch.chunkSize(); height += ch.height;
	      ch.parent = this;
	    }
	    this.size = size;
	    this.height = height;
	    this.parent = null;
	  }

	  BranchChunk.prototype = {
	    chunkSize: function() { return this.size; },
	    removeInner: function(at, n) {
	      this.size -= n;
	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i], sz = child.chunkSize();
	        if (at < sz) {
	          var rm = Math.min(n, sz - at), oldHeight = child.height;
	          child.removeInner(at, rm);
	          this.height -= oldHeight - child.height;
	          if (sz == rm) { this.children.splice(i--, 1); child.parent = null; }
	          if ((n -= rm) == 0) break;
	          at = 0;
	        } else at -= sz;
	      }
	      // If the result is smaller than 25 lines, ensure that it is a
	      // single leaf node.
	      if (this.size - n < 25 &&
	          (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
	        var lines = [];
	        this.collapse(lines);
	        this.children = [new LeafChunk(lines)];
	        this.children[0].parent = this;
	      }
	    },
	    collapse: function(lines) {
	      for (var i = 0; i < this.children.length; ++i) this.children[i].collapse(lines);
	    },
	    insertInner: function(at, lines, height) {
	      this.size += lines.length;
	      this.height += height;
	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i], sz = child.chunkSize();
	        if (at <= sz) {
	          child.insertInner(at, lines, height);
	          if (child.lines && child.lines.length > 50) {
	            while (child.lines.length > 50) {
	              var spilled = child.lines.splice(child.lines.length - 25, 25);
	              var newleaf = new LeafChunk(spilled);
	              child.height -= newleaf.height;
	              this.children.splice(i + 1, 0, newleaf);
	              newleaf.parent = this;
	            }
	            this.maybeSpill();
	          }
	          break;
	        }
	        at -= sz;
	      }
	    },
	    // When a node has grown, check whether it should be split.
	    maybeSpill: function() {
	      if (this.children.length <= 10) return;
	      var me = this;
	      do {
	        var spilled = me.children.splice(me.children.length - 5, 5);
	        var sibling = new BranchChunk(spilled);
	        if (!me.parent) { // Become the parent node
	          var copy = new BranchChunk(me.children);
	          copy.parent = me;
	          me.children = [copy, sibling];
	          me = copy;
	        } else {
	          me.size -= sibling.size;
	          me.height -= sibling.height;
	          var myIndex = indexOf(me.parent.children, me);
	          me.parent.children.splice(myIndex + 1, 0, sibling);
	        }
	        sibling.parent = me.parent;
	      } while (me.children.length > 10);
	      me.parent.maybeSpill();
	    },
	    iterN: function(at, n, op) {
	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i], sz = child.chunkSize();
	        if (at < sz) {
	          var used = Math.min(n, sz - at);
	          if (child.iterN(at, used, op)) return true;
	          if ((n -= used) == 0) break;
	          at = 0;
	        } else at -= sz;
	      }
	    }
	  };

	  var nextDocId = 0;
	  var Doc = CodeMirror.Doc = function(text, mode, firstLine, lineSep) {
	    if (!(this instanceof Doc)) return new Doc(text, mode, firstLine, lineSep);
	    if (firstLine == null) firstLine = 0;

	    BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
	    this.first = firstLine;
	    this.scrollTop = this.scrollLeft = 0;
	    this.cantEdit = false;
	    this.cleanGeneration = 1;
	    this.frontier = firstLine;
	    var start = Pos(firstLine, 0);
	    this.sel = simpleSelection(start);
	    this.history = new History(null);
	    this.id = ++nextDocId;
	    this.modeOption = mode;
	    this.lineSep = lineSep;
	    this.extend = false;

	    if (typeof text == "string") text = this.splitLines(text);
	    updateDoc(this, {from: start, to: start, text: text});
	    setSelection(this, simpleSelection(start), sel_dontScroll);
	  };

	  Doc.prototype = createObj(BranchChunk.prototype, {
	    constructor: Doc,
	    // Iterate over the document. Supports two forms -- with only one
	    // argument, it calls that for each line in the document. With
	    // three, it iterates over the range given by the first two (with
	    // the second being non-inclusive).
	    iter: function(from, to, op) {
	      if (op) this.iterN(from - this.first, to - from, op);
	      else this.iterN(this.first, this.first + this.size, from);
	    },

	    // Non-public interface for adding and removing lines.
	    insert: function(at, lines) {
	      var height = 0;
	      for (var i = 0; i < lines.length; ++i) height += lines[i].height;
	      this.insertInner(at - this.first, lines, height);
	    },
	    remove: function(at, n) { this.removeInner(at - this.first, n); },

	    // From here, the methods are part of the public interface. Most
	    // are also available from CodeMirror (editor) instances.

	    getValue: function(lineSep) {
	      var lines = getLines(this, this.first, this.first + this.size);
	      if (lineSep === false) return lines;
	      return lines.join(lineSep || this.lineSeparator());
	    },
	    setValue: docMethodOp(function(code) {
	      var top = Pos(this.first, 0), last = this.first + this.size - 1;
	      makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
	                        text: this.splitLines(code), origin: "setValue", full: true}, true);
	      setSelection(this, simpleSelection(top));
	    }),
	    replaceRange: function(code, from, to, origin) {
	      from = clipPos(this, from);
	      to = to ? clipPos(this, to) : from;
	      replaceRange(this, code, from, to, origin);
	    },
	    getRange: function(from, to, lineSep) {
	      var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
	      if (lineSep === false) return lines;
	      return lines.join(lineSep || this.lineSeparator());
	    },

	    getLine: function(line) {var l = this.getLineHandle(line); return l && l.text;},

	    getLineHandle: function(line) {if (isLine(this, line)) return getLine(this, line);},
	    getLineNumber: function(line) {return lineNo(line);},

	    getLineHandleVisualStart: function(line) {
	      if (typeof line == "number") line = getLine(this, line);
	      return visualLine(line);
	    },

	    lineCount: function() {return this.size;},
	    firstLine: function() {return this.first;},
	    lastLine: function() {return this.first + this.size - 1;},

	    clipPos: function(pos) {return clipPos(this, pos);},

	    getCursor: function(start) {
	      var range = this.sel.primary(), pos;
	      if (start == null || start == "head") pos = range.head;
	      else if (start == "anchor") pos = range.anchor;
	      else if (start == "end" || start == "to" || start === false) pos = range.to();
	      else pos = range.from();
	      return pos;
	    },
	    listSelections: function() { return this.sel.ranges; },
	    somethingSelected: function() {return this.sel.somethingSelected();},

	    setCursor: docMethodOp(function(line, ch, options) {
	      setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
	    }),
	    setSelection: docMethodOp(function(anchor, head, options) {
	      setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
	    }),
	    extendSelection: docMethodOp(function(head, other, options) {
	      extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
	    }),
	    extendSelections: docMethodOp(function(heads, options) {
	      extendSelections(this, clipPosArray(this, heads), options);
	    }),
	    extendSelectionsBy: docMethodOp(function(f, options) {
	      var heads = map(this.sel.ranges, f);
	      extendSelections(this, clipPosArray(this, heads), options);
	    }),
	    setSelections: docMethodOp(function(ranges, primary, options) {
	      if (!ranges.length) return;
	      for (var i = 0, out = []; i < ranges.length; i++)
	        out[i] = new Range(clipPos(this, ranges[i].anchor),
	                           clipPos(this, ranges[i].head));
	      if (primary == null) primary = Math.min(ranges.length - 1, this.sel.primIndex);
	      setSelection(this, normalizeSelection(out, primary), options);
	    }),
	    addSelection: docMethodOp(function(anchor, head, options) {
	      var ranges = this.sel.ranges.slice(0);
	      ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
	      setSelection(this, normalizeSelection(ranges, ranges.length - 1), options);
	    }),

	    getSelection: function(lineSep) {
	      var ranges = this.sel.ranges, lines;
	      for (var i = 0; i < ranges.length; i++) {
	        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
	        lines = lines ? lines.concat(sel) : sel;
	      }
	      if (lineSep === false) return lines;
	      else return lines.join(lineSep || this.lineSeparator());
	    },
	    getSelections: function(lineSep) {
	      var parts = [], ranges = this.sel.ranges;
	      for (var i = 0; i < ranges.length; i++) {
	        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
	        if (lineSep !== false) sel = sel.join(lineSep || this.lineSeparator());
	        parts[i] = sel;
	      }
	      return parts;
	    },
	    replaceSelection: function(code, collapse, origin) {
	      var dup = [];
	      for (var i = 0; i < this.sel.ranges.length; i++)
	        dup[i] = code;
	      this.replaceSelections(dup, collapse, origin || "+input");
	    },
	    replaceSelections: docMethodOp(function(code, collapse, origin) {
	      var changes = [], sel = this.sel;
	      for (var i = 0; i < sel.ranges.length; i++) {
	        var range = sel.ranges[i];
	        changes[i] = {from: range.from(), to: range.to(), text: this.splitLines(code[i]), origin: origin};
	      }
	      var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
	      for (var i = changes.length - 1; i >= 0; i--)
	        makeChange(this, changes[i]);
	      if (newSel) setSelectionReplaceHistory(this, newSel);
	      else if (this.cm) ensureCursorVisible(this.cm);
	    }),
	    undo: docMethodOp(function() {makeChangeFromHistory(this, "undo");}),
	    redo: docMethodOp(function() {makeChangeFromHistory(this, "redo");}),
	    undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true);}),
	    redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true);}),

	    setExtending: function(val) {this.extend = val;},
	    getExtending: function() {return this.extend;},

	    historySize: function() {
	      var hist = this.history, done = 0, undone = 0;
	      for (var i = 0; i < hist.done.length; i++) if (!hist.done[i].ranges) ++done;
	      for (var i = 0; i < hist.undone.length; i++) if (!hist.undone[i].ranges) ++undone;
	      return {undo: done, redo: undone};
	    },
	    clearHistory: function() {this.history = new History(this.history.maxGeneration);},

	    markClean: function() {
	      this.cleanGeneration = this.changeGeneration(true);
	    },
	    changeGeneration: function(forceSplit) {
	      if (forceSplit)
	        this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null;
	      return this.history.generation;
	    },
	    isClean: function (gen) {
	      return this.history.generation == (gen || this.cleanGeneration);
	    },

	    getHistory: function() {
	      return {done: copyHistoryArray(this.history.done),
	              undone: copyHistoryArray(this.history.undone)};
	    },
	    setHistory: function(histData) {
	      var hist = this.history = new History(this.history.maxGeneration);
	      hist.done = copyHistoryArray(histData.done.slice(0), null, true);
	      hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
	    },

	    addLineClass: docMethodOp(function(handle, where, cls) {
	      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
	        var prop = where == "text" ? "textClass"
	                 : where == "background" ? "bgClass"
	                 : where == "gutter" ? "gutterClass" : "wrapClass";
	        if (!line[prop]) line[prop] = cls;
	        else if (classTest(cls).test(line[prop])) return false;
	        else line[prop] += " " + cls;
	        return true;
	      });
	    }),
	    removeLineClass: docMethodOp(function(handle, where, cls) {
	      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
	        var prop = where == "text" ? "textClass"
	                 : where == "background" ? "bgClass"
	                 : where == "gutter" ? "gutterClass" : "wrapClass";
	        var cur = line[prop];
	        if (!cur) return false;
	        else if (cls == null) line[prop] = null;
	        else {
	          var found = cur.match(classTest(cls));
	          if (!found) return false;
	          var end = found.index + found[0].length;
	          line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
	        }
	        return true;
	      });
	    }),

	    addLineWidget: docMethodOp(function(handle, node, options) {
	      return addLineWidget(this, handle, node, options);
	    }),
	    removeLineWidget: function(widget) { widget.clear(); },

	    markText: function(from, to, options) {
	      return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range");
	    },
	    setBookmark: function(pos, options) {
	      var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
	                      insertLeft: options && options.insertLeft,
	                      clearWhenEmpty: false, shared: options && options.shared,
	                      handleMouseEvents: options && options.handleMouseEvents};
	      pos = clipPos(this, pos);
	      return markText(this, pos, pos, realOpts, "bookmark");
	    },
	    findMarksAt: function(pos) {
	      pos = clipPos(this, pos);
	      var markers = [], spans = getLine(this, pos.line).markedSpans;
	      if (spans) for (var i = 0; i < spans.length; ++i) {
	        var span = spans[i];
	        if ((span.from == null || span.from <= pos.ch) &&
	            (span.to == null || span.to >= pos.ch))
	          markers.push(span.marker.parent || span.marker);
	      }
	      return markers;
	    },
	    findMarks: function(from, to, filter) {
	      from = clipPos(this, from); to = clipPos(this, to);
	      var found = [], lineNo = from.line;
	      this.iter(from.line, to.line + 1, function(line) {
	        var spans = line.markedSpans;
	        if (spans) for (var i = 0; i < spans.length; i++) {
	          var span = spans[i];
	          if (!(span.to != null && lineNo == from.line && from.ch >= span.to ||
	                span.from == null && lineNo != from.line ||
	                span.from != null && lineNo == to.line && span.from >= to.ch) &&
	              (!filter || filter(span.marker)))
	            found.push(span.marker.parent || span.marker);
	        }
	        ++lineNo;
	      });
	      return found;
	    },
	    getAllMarks: function() {
	      var markers = [];
	      this.iter(function(line) {
	        var sps = line.markedSpans;
	        if (sps) for (var i = 0; i < sps.length; ++i)
	          if (sps[i].from != null) markers.push(sps[i].marker);
	      });
	      return markers;
	    },

	    posFromIndex: function(off) {
	      var ch, lineNo = this.first, sepSize = this.lineSeparator().length;
	      this.iter(function(line) {
	        var sz = line.text.length + sepSize;
	        if (sz > off) { ch = off; return true; }
	        off -= sz;
	        ++lineNo;
	      });
	      return clipPos(this, Pos(lineNo, ch));
	    },
	    indexFromPos: function (coords) {
	      coords = clipPos(this, coords);
	      var index = coords.ch;
	      if (coords.line < this.first || coords.ch < 0) return 0;
	      var sepSize = this.lineSeparator().length;
	      this.iter(this.first, coords.line, function (line) {
	        index += line.text.length + sepSize;
	      });
	      return index;
	    },

	    copy: function(copyHistory) {
	      var doc = new Doc(getLines(this, this.first, this.first + this.size),
	                        this.modeOption, this.first, this.lineSep);
	      doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft;
	      doc.sel = this.sel;
	      doc.extend = false;
	      if (copyHistory) {
	        doc.history.undoDepth = this.history.undoDepth;
	        doc.setHistory(this.getHistory());
	      }
	      return doc;
	    },

	    linkedDoc: function(options) {
	      if (!options) options = {};
	      var from = this.first, to = this.first + this.size;
	      if (options.from != null && options.from > from) from = options.from;
	      if (options.to != null && options.to < to) to = options.to;
	      var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep);
	      if (options.sharedHist) copy.history = this.history;
	      (this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist});
	      copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}];
	      copySharedMarkers(copy, findSharedMarkers(this));
	      return copy;
	    },
	    unlinkDoc: function(other) {
	      if (other instanceof CodeMirror) other = other.doc;
	      if (this.linked) for (var i = 0; i < this.linked.length; ++i) {
	        var link = this.linked[i];
	        if (link.doc != other) continue;
	        this.linked.splice(i, 1);
	        other.unlinkDoc(this);
	        detachSharedMarkers(findSharedMarkers(this));
	        break;
	      }
	      // If the histories were shared, split them again
	      if (other.history == this.history) {
	        var splitIds = [other.id];
	        linkedDocs(other, function(doc) {splitIds.push(doc.id);}, true);
	        other.history = new History(null);
	        other.history.done = copyHistoryArray(this.history.done, splitIds);
	        other.history.undone = copyHistoryArray(this.history.undone, splitIds);
	      }
	    },
	    iterLinkedDocs: function(f) {linkedDocs(this, f);},

	    getMode: function() {return this.mode;},
	    getEditor: function() {return this.cm;},

	    splitLines: function(str) {
	      if (this.lineSep) return str.split(this.lineSep);
	      return splitLinesAuto(str);
	    },
	    lineSeparator: function() { return this.lineSep || "\n"; }
	  });

	  // Public alias.
	  Doc.prototype.eachLine = Doc.prototype.iter;

	  // Set up methods on CodeMirror's prototype to redirect to the editor's document.
	  var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");
	  for (var prop in Doc.prototype) if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
	    CodeMirror.prototype[prop] = (function(method) {
	      return function() {return method.apply(this.doc, arguments);};
	    })(Doc.prototype[prop]);

	  eventMixin(Doc);

	  // Call f for all linked documents.
	  function linkedDocs(doc, f, sharedHistOnly) {
	    function propagate(doc, skip, sharedHist) {
	      if (doc.linked) for (var i = 0; i < doc.linked.length; ++i) {
	        var rel = doc.linked[i];
	        if (rel.doc == skip) continue;
	        var shared = sharedHist && rel.sharedHist;
	        if (sharedHistOnly && !shared) continue;
	        f(rel.doc, shared);
	        propagate(rel.doc, doc, shared);
	      }
	    }
	    propagate(doc, null, true);
	  }

	  // Attach a document to an editor.
	  function attachDoc(cm, doc) {
	    if (doc.cm) throw new Error("This document is already in use.");
	    cm.doc = doc;
	    doc.cm = cm;
	    estimateLineHeights(cm);
	    loadMode(cm);
	    if (!cm.options.lineWrapping) findMaxLine(cm);
	    cm.options.mode = doc.modeOption;
	    regChange(cm);
	  }

	  // LINE UTILITIES

	  // Find the line object corresponding to the given line number.
	  function getLine(doc, n) {
	    n -= doc.first;
	    if (n < 0 || n >= doc.size) throw new Error("There is no line " + (n + doc.first) + " in the document.");
	    for (var chunk = doc; !chunk.lines;) {
	      for (var i = 0;; ++i) {
	        var child = chunk.children[i], sz = child.chunkSize();
	        if (n < sz) { chunk = child; break; }
	        n -= sz;
	      }
	    }
	    return chunk.lines[n];
	  }

	  // Get the part of a document between two positions, as an array of
	  // strings.
	  function getBetween(doc, start, end) {
	    var out = [], n = start.line;
	    doc.iter(start.line, end.line + 1, function(line) {
	      var text = line.text;
	      if (n == end.line) text = text.slice(0, end.ch);
	      if (n == start.line) text = text.slice(start.ch);
	      out.push(text);
	      ++n;
	    });
	    return out;
	  }
	  // Get the lines between from and to, as array of strings.
	  function getLines(doc, from, to) {
	    var out = [];
	    doc.iter(from, to, function(line) { out.push(line.text); });
	    return out;
	  }

	  // Update the height of a line, propagating the height change
	  // upwards to parent nodes.
	  function updateLineHeight(line, height) {
	    var diff = height - line.height;
	    if (diff) for (var n = line; n; n = n.parent) n.height += diff;
	  }

	  // Given a line object, find its line number by walking up through
	  // its parent links.
	  function lineNo(line) {
	    if (line.parent == null) return null;
	    var cur = line.parent, no = indexOf(cur.lines, line);
	    for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
	      for (var i = 0;; ++i) {
	        if (chunk.children[i] == cur) break;
	        no += chunk.children[i].chunkSize();
	      }
	    }
	    return no + cur.first;
	  }

	  // Find the line at the given vertical position, using the height
	  // information in the document tree.
	  function lineAtHeight(chunk, h) {
	    var n = chunk.first;
	    outer: do {
	      for (var i = 0; i < chunk.children.length; ++i) {
	        var child = chunk.children[i], ch = child.height;
	        if (h < ch) { chunk = child; continue outer; }
	        h -= ch;
	        n += child.chunkSize();
	      }
	      return n;
	    } while (!chunk.lines);
	    for (var i = 0; i < chunk.lines.length; ++i) {
	      var line = chunk.lines[i], lh = line.height;
	      if (h < lh) break;
	      h -= lh;
	    }
	    return n + i;
	  }


	  // Find the height above the given line.
	  function heightAtLine(lineObj) {
	    lineObj = visualLine(lineObj);

	    var h = 0, chunk = lineObj.parent;
	    for (var i = 0; i < chunk.lines.length; ++i) {
	      var line = chunk.lines[i];
	      if (line == lineObj) break;
	      else h += line.height;
	    }
	    for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
	      for (var i = 0; i < p.children.length; ++i) {
	        var cur = p.children[i];
	        if (cur == chunk) break;
	        else h += cur.height;
	      }
	    }
	    return h;
	  }

	  // Get the bidi ordering for the given line (and cache it). Returns
	  // false for lines that are fully left-to-right, and an array of
	  // BidiSpan objects otherwise.
	  function getOrder(line) {
	    var order = line.order;
	    if (order == null) order = line.order = bidiOrdering(line.text);
	    return order;
	  }

	  // HISTORY

	  function History(startGen) {
	    // Arrays of change events and selections. Doing something adds an
	    // event to done and clears undo. Undoing moves events from done
	    // to undone, redoing moves them in the other direction.
	    this.done = []; this.undone = [];
	    this.undoDepth = Infinity;
	    // Used to track when changes can be merged into a single undo
	    // event
	    this.lastModTime = this.lastSelTime = 0;
	    this.lastOp = this.lastSelOp = null;
	    this.lastOrigin = this.lastSelOrigin = null;
	    // Used by the isClean() method
	    this.generation = this.maxGeneration = startGen || 1;
	  }

	  // Create a history change event from an updateDoc-style change
	  // object.
	  function historyChangeFromChange(doc, change) {
	    var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)};
	    attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
	    linkedDocs(doc, function(doc) {attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);}, true);
	    return histChange;
	  }

	  // Pop all selection events off the end of a history array. Stop at
	  // a change event.
	  function clearSelectionEvents(array) {
	    while (array.length) {
	      var last = lst(array);
	      if (last.ranges) array.pop();
	      else break;
	    }
	  }

	  // Find the top change event in the history. Pop off selection
	  // events that are in the way.
	  function lastChangeEvent(hist, force) {
	    if (force) {
	      clearSelectionEvents(hist.done);
	      return lst(hist.done);
	    } else if (hist.done.length && !lst(hist.done).ranges) {
	      return lst(hist.done);
	    } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
	      hist.done.pop();
	      return lst(hist.done);
	    }
	  }

	  // Register a change in the history. Merges changes that are within
	  // a single operation, ore are close together with an origin that
	  // allows merging (starting with "+") into a single event.
	  function addChangeToHistory(doc, change, selAfter, opId) {
	    var hist = doc.history;
	    hist.undone.length = 0;
	    var time = +new Date, cur;

	    if ((hist.lastOp == opId ||
	         hist.lastOrigin == change.origin && change.origin &&
	         ((change.origin.charAt(0) == "+" && doc.cm && hist.lastModTime > time - doc.cm.options.historyEventDelay) ||
	          change.origin.charAt(0) == "*")) &&
	        (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
	      // Merge this change into the last event
	      var last = lst(cur.changes);
	      if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
	        // Optimized case for simple insertion -- don't want to add
	        // new changesets for every character typed
	        last.to = changeEnd(change);
	      } else {
	        // Add new sub-event
	        cur.changes.push(historyChangeFromChange(doc, change));
	      }
	    } else {
	      // Can not be merged, start a new event.
	      var before = lst(hist.done);
	      if (!before || !before.ranges)
	        pushSelectionToHistory(doc.sel, hist.done);
	      cur = {changes: [historyChangeFromChange(doc, change)],
	             generation: hist.generation};
	      hist.done.push(cur);
	      while (hist.done.length > hist.undoDepth) {
	        hist.done.shift();
	        if (!hist.done[0].ranges) hist.done.shift();
	      }
	    }
	    hist.done.push(selAfter);
	    hist.generation = ++hist.maxGeneration;
	    hist.lastModTime = hist.lastSelTime = time;
	    hist.lastOp = hist.lastSelOp = opId;
	    hist.lastOrigin = hist.lastSelOrigin = change.origin;

	    if (!last) signal(doc, "historyAdded");
	  }

	  function selectionEventCanBeMerged(doc, origin, prev, sel) {
	    var ch = origin.charAt(0);
	    return ch == "*" ||
	      ch == "+" &&
	      prev.ranges.length == sel.ranges.length &&
	      prev.somethingSelected() == sel.somethingSelected() &&
	      new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500);
	  }

	  // Called whenever the selection changes, sets the new selection as
	  // the pending selection in the history, and pushes the old pending
	  // selection into the 'done' array when it was significantly
	  // different (in number of selected ranges, emptiness, or time).
	  function addSelectionToHistory(doc, sel, opId, options) {
	    var hist = doc.history, origin = options && options.origin;

	    // A new event is started when the previous origin does not match
	    // the current, or the origins don't allow matching. Origins
	    // starting with * are always merged, those starting with + are
	    // merged when similar and close together in time.
	    if (opId == hist.lastSelOp ||
	        (origin && hist.lastSelOrigin == origin &&
	         (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
	          selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
	      hist.done[hist.done.length - 1] = sel;
	    else
	      pushSelectionToHistory(sel, hist.done);

	    hist.lastSelTime = +new Date;
	    hist.lastSelOrigin = origin;
	    hist.lastSelOp = opId;
	    if (options && options.clearRedo !== false)
	      clearSelectionEvents(hist.undone);
	  }

	  function pushSelectionToHistory(sel, dest) {
	    var top = lst(dest);
	    if (!(top && top.ranges && top.equals(sel)))
	      dest.push(sel);
	  }

	  // Used to store marked span information in the history.
	  function attachLocalSpans(doc, change, from, to) {
	    var existing = change["spans_" + doc.id], n = 0;
	    doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function(line) {
	      if (line.markedSpans)
	        (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans;
	      ++n;
	    });
	  }

	  // When un/re-doing restores text containing marked spans, those
	  // that have been explicitly cleared should not be restored.
	  function removeClearedSpans(spans) {
	    if (!spans) return null;
	    for (var i = 0, out; i < spans.length; ++i) {
	      if (spans[i].marker.explicitlyCleared) { if (!out) out = spans.slice(0, i); }
	      else if (out) out.push(spans[i]);
	    }
	    return !out ? spans : out.length ? out : null;
	  }

	  // Retrieve and filter the old marked spans stored in a change event.
	  function getOldSpans(doc, change) {
	    var found = change["spans_" + doc.id];
	    if (!found) return null;
	    for (var i = 0, nw = []; i < change.text.length; ++i)
	      nw.push(removeClearedSpans(found[i]));
	    return nw;
	  }

	  // Used both to provide a JSON-safe object in .getHistory, and, when
	  // detaching a document, to split the history in two
	  function copyHistoryArray(events, newGroup, instantiateSel) {
	    for (var i = 0, copy = []; i < events.length; ++i) {
	      var event = events[i];
	      if (event.ranges) {
	        copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
	        continue;
	      }
	      var changes = event.changes, newChanges = [];
	      copy.push({changes: newChanges});
	      for (var j = 0; j < changes.length; ++j) {
	        var change = changes[j], m;
	        newChanges.push({from: change.from, to: change.to, text: change.text});
	        if (newGroup) for (var prop in change) if (m = prop.match(/^spans_(\d+)$/)) {
	          if (indexOf(newGroup, Number(m[1])) > -1) {
	            lst(newChanges)[prop] = change[prop];
	            delete change[prop];
	          }
	        }
	      }
	    }
	    return copy;
	  }

	  // Rebasing/resetting history to deal with externally-sourced changes

	  function rebaseHistSelSingle(pos, from, to, diff) {
	    if (to < pos.line) {
	      pos.line += diff;
	    } else if (from < pos.line) {
	      pos.line = from;
	      pos.ch = 0;
	    }
	  }

	  // Tries to rebase an array of history events given a change in the
	  // document. If the change touches the same lines as the event, the
	  // event, and everything 'behind' it, is discarded. If the change is
	  // before the event, the event's positions are updated. Uses a
	  // copy-on-write scheme for the positions, to avoid having to
	  // reallocate them all on every rebase, but also avoid problems with
	  // shared position objects being unsafely updated.
	  function rebaseHistArray(array, from, to, diff) {
	    for (var i = 0; i < array.length; ++i) {
	      var sub = array[i], ok = true;
	      if (sub.ranges) {
	        if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true; }
	        for (var j = 0; j < sub.ranges.length; j++) {
	          rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
	          rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
	        }
	        continue;
	      }
	      for (var j = 0; j < sub.changes.length; ++j) {
	        var cur = sub.changes[j];
	        if (to < cur.from.line) {
	          cur.from = Pos(cur.from.line + diff, cur.from.ch);
	          cur.to = Pos(cur.to.line + diff, cur.to.ch);
	        } else if (from <= cur.to.line) {
	          ok = false;
	          break;
	        }
	      }
	      if (!ok) {
	        array.splice(0, i + 1);
	        i = 0;
	      }
	    }
	  }

	  function rebaseHist(hist, change) {
	    var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
	    rebaseHistArray(hist.done, from, to, diff);
	    rebaseHistArray(hist.undone, from, to, diff);
	  }

	  // EVENT UTILITIES

	  // Due to the fact that we still support jurassic IE versions, some
	  // compatibility wrappers are needed.

	  var e_preventDefault = CodeMirror.e_preventDefault = function(e) {
	    if (e.preventDefault) e.preventDefault();
	    else e.returnValue = false;
	  };
	  var e_stopPropagation = CodeMirror.e_stopPropagation = function(e) {
	    if (e.stopPropagation) e.stopPropagation();
	    else e.cancelBubble = true;
	  };
	  function e_defaultPrevented(e) {
	    return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false;
	  }
	  var e_stop = CodeMirror.e_stop = function(e) {e_preventDefault(e); e_stopPropagation(e);};

	  function e_target(e) {return e.target || e.srcElement;}
	  function e_button(e) {
	    var b = e.which;
	    if (b == null) {
	      if (e.button & 1) b = 1;
	      else if (e.button & 2) b = 3;
	      else if (e.button & 4) b = 2;
	    }
	    if (mac && e.ctrlKey && b == 1) b = 3;
	    return b;
	  }

	  // EVENT HANDLING

	  // Lightweight event framework. on/off also work on DOM nodes,
	  // registering native DOM handlers.

	  var on = CodeMirror.on = function(emitter, type, f) {
	    if (emitter.addEventListener)
	      emitter.addEventListener(type, f, false);
	    else if (emitter.attachEvent)
	      emitter.attachEvent("on" + type, f);
	    else {
	      var map = emitter._handlers || (emitter._handlers = {});
	      var arr = map[type] || (map[type] = []);
	      arr.push(f);
	    }
	  };

	  var noHandlers = []
	  function getHandlers(emitter, type, copy) {
	    var arr = emitter._handlers && emitter._handlers[type]
	    if (copy) return arr && arr.length > 0 ? arr.slice() : noHandlers
	    else return arr || noHandlers
	  }

	  var off = CodeMirror.off = function(emitter, type, f) {
	    if (emitter.removeEventListener)
	      emitter.removeEventListener(type, f, false);
	    else if (emitter.detachEvent)
	      emitter.detachEvent("on" + type, f);
	    else {
	      var handlers = getHandlers(emitter, type, false)
	      for (var i = 0; i < handlers.length; ++i)
	        if (handlers[i] == f) { handlers.splice(i, 1); break; }
	    }
	  };

	  var signal = CodeMirror.signal = function(emitter, type /*, values...*/) {
	    var handlers = getHandlers(emitter, type, true)
	    if (!handlers.length) return;
	    var args = Array.prototype.slice.call(arguments, 2);
	    for (var i = 0; i < handlers.length; ++i) handlers[i].apply(null, args);
	  };

	  var orphanDelayedCallbacks = null;

	  // Often, we want to signal events at a point where we are in the
	  // middle of some work, but don't want the handler to start calling
	  // other methods on the editor, which might be in an inconsistent
	  // state or simply not expect any other events to happen.
	  // signalLater looks whether there are any handlers, and schedules
	  // them to be executed when the last operation ends, or, if no
	  // operation is active, when a timeout fires.
	  function signalLater(emitter, type /*, values...*/) {
	    var arr = getHandlers(emitter, type, false)
	    if (!arr.length) return;
	    var args = Array.prototype.slice.call(arguments, 2), list;
	    if (operationGroup) {
	      list = operationGroup.delayedCallbacks;
	    } else if (orphanDelayedCallbacks) {
	      list = orphanDelayedCallbacks;
	    } else {
	      list = orphanDelayedCallbacks = [];
	      setTimeout(fireOrphanDelayed, 0);
	    }
	    function bnd(f) {return function(){f.apply(null, args);};};
	    for (var i = 0; i < arr.length; ++i)
	      list.push(bnd(arr[i]));
	  }

	  function fireOrphanDelayed() {
	    var delayed = orphanDelayedCallbacks;
	    orphanDelayedCallbacks = null;
	    for (var i = 0; i < delayed.length; ++i) delayed[i]();
	  }

	  // The DOM events that CodeMirror handles can be overridden by
	  // registering a (non-DOM) handler on the editor for the event name,
	  // and preventDefault-ing the event in that handler.
	  function signalDOMEvent(cm, e, override) {
	    if (typeof e == "string")
	      e = {type: e, preventDefault: function() { this.defaultPrevented = true; }};
	    signal(cm, override || e.type, cm, e);
	    return e_defaultPrevented(e) || e.codemirrorIgnore;
	  }

	  function signalCursorActivity(cm) {
	    var arr = cm._handlers && cm._handlers.cursorActivity;
	    if (!arr) return;
	    var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
	    for (var i = 0; i < arr.length; ++i) if (indexOf(set, arr[i]) == -1)
	      set.push(arr[i]);
	  }

	  function hasHandler(emitter, type) {
	    return getHandlers(emitter, type).length > 0
	  }

	  // Add on and off methods to a constructor's prototype, to make
	  // registering events on such objects more convenient.
	  function eventMixin(ctor) {
	    ctor.prototype.on = function(type, f) {on(this, type, f);};
	    ctor.prototype.off = function(type, f) {off(this, type, f);};
	  }

	  // MISC UTILITIES

	  // Number of pixels added to scroller and sizer to hide scrollbar
	  var scrollerGap = 30;

	  // Returned or thrown by various protocols to signal 'I'm not
	  // handling this'.
	  var Pass = CodeMirror.Pass = {toString: function(){return "CodeMirror.Pass";}};

	  // Reused option objects for setSelection & friends
	  var sel_dontScroll = {scroll: false}, sel_mouse = {origin: "*mouse"}, sel_move = {origin: "+move"};

	  function Delayed() {this.id = null;}
	  Delayed.prototype.set = function(ms, f) {
	    clearTimeout(this.id);
	    this.id = setTimeout(f, ms);
	  };

	  // Counts the column offset in a string, taking tabs into account.
	  // Used mostly to find indentation.
	  var countColumn = CodeMirror.countColumn = function(string, end, tabSize, startIndex, startValue) {
	    if (end == null) {
	      end = string.search(/[^\s\u00a0]/);
	      if (end == -1) end = string.length;
	    }
	    for (var i = startIndex || 0, n = startValue || 0;;) {
	      var nextTab = string.indexOf("\t", i);
	      if (nextTab < 0 || nextTab >= end)
	        return n + (end - i);
	      n += nextTab - i;
	      n += tabSize - (n % tabSize);
	      i = nextTab + 1;
	    }
	  };

	  // The inverse of countColumn -- find the offset that corresponds to
	  // a particular column.
	  var findColumn = CodeMirror.findColumn = function(string, goal, tabSize) {
	    for (var pos = 0, col = 0;;) {
	      var nextTab = string.indexOf("\t", pos);
	      if (nextTab == -1) nextTab = string.length;
	      var skipped = nextTab - pos;
	      if (nextTab == string.length || col + skipped >= goal)
	        return pos + Math.min(skipped, goal - col);
	      col += nextTab - pos;
	      col += tabSize - (col % tabSize);
	      pos = nextTab + 1;
	      if (col >= goal) return pos;
	    }
	  }

	  var spaceStrs = [""];
	  function spaceStr(n) {
	    while (spaceStrs.length <= n)
	      spaceStrs.push(lst(spaceStrs) + " ");
	    return spaceStrs[n];
	  }

	  function lst(arr) { return arr[arr.length-1]; }

	  var selectInput = function(node) { node.select(); };
	  if (ios) // Mobile Safari apparently has a bug where select() is broken.
	    selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length; };
	  else if (ie) // Suppress mysterious IE10 errors
	    selectInput = function(node) { try { node.select(); } catch(_e) {} };

	  function indexOf(array, elt) {
	    for (var i = 0; i < array.length; ++i)
	      if (array[i] == elt) return i;
	    return -1;
	  }
	  function map(array, f) {
	    var out = [];
	    for (var i = 0; i < array.length; i++) out[i] = f(array[i], i);
	    return out;
	  }

	  function nothing() {}

	  function createObj(base, props) {
	    var inst;
	    if (Object.create) {
	      inst = Object.create(base);
	    } else {
	      nothing.prototype = base;
	      inst = new nothing();
	    }
	    if (props) copyObj(props, inst);
	    return inst;
	  };

	  function copyObj(obj, target, overwrite) {
	    if (!target) target = {};
	    for (var prop in obj)
	      if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
	        target[prop] = obj[prop];
	    return target;
	  }

	  function bind(f) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    return function(){return f.apply(null, args);};
	  }

	  var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
	  var isWordCharBasic = CodeMirror.isWordChar = function(ch) {
	    return /\w/.test(ch) || ch > "\x80" &&
	      (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
	  };
	  function isWordChar(ch, helper) {
	    if (!helper) return isWordCharBasic(ch);
	    if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) return true;
	    return helper.test(ch);
	  }

	  function isEmpty(obj) {
	    for (var n in obj) if (obj.hasOwnProperty(n) && obj[n]) return false;
	    return true;
	  }

	  // Extending unicode characters. A series of a non-extending char +
	  // any number of extending chars is treated as a single unit as far
	  // as editing and measuring is concerned. This is not fully correct,
	  // since some scripts/fonts/browsers also treat other configurations
	  // of code points as a group.
	  var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
	  function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch); }

	  // DOM UTILITIES

	  function elt(tag, content, className, style) {
	    var e = document.createElement(tag);
	    if (className) e.className = className;
	    if (style) e.style.cssText = style;
	    if (typeof content == "string") e.appendChild(document.createTextNode(content));
	    else if (content) for (var i = 0; i < content.length; ++i) e.appendChild(content[i]);
	    return e;
	  }

	  var range;
	  if (document.createRange) range = function(node, start, end, endNode) {
	    var r = document.createRange();
	    r.setEnd(endNode || node, end);
	    r.setStart(node, start);
	    return r;
	  };
	  else range = function(node, start, end) {
	    var r = document.body.createTextRange();
	    try { r.moveToElementText(node.parentNode); }
	    catch(e) { return r; }
	    r.collapse(true);
	    r.moveEnd("character", end);
	    r.moveStart("character", start);
	    return r;
	  };

	  function removeChildren(e) {
	    for (var count = e.childNodes.length; count > 0; --count)
	      e.removeChild(e.firstChild);
	    return e;
	  }

	  function removeChildrenAndAdd(parent, e) {
	    return removeChildren(parent).appendChild(e);
	  }

	  var contains = CodeMirror.contains = function(parent, child) {
	    if (child.nodeType == 3) // Android browser always returns false when child is a textnode
	      child = child.parentNode;
	    if (parent.contains)
	      return parent.contains(child);
	    do {
	      if (child.nodeType == 11) child = child.host;
	      if (child == parent) return true;
	    } while (child = child.parentNode);
	  };

	  function activeElt() {
	    var activeElement = document.activeElement;
	    while (activeElement && activeElement.root && activeElement.root.activeElement)
	      activeElement = activeElement.root.activeElement;
	    return activeElement;
	  }
	  // Older versions of IE throws unspecified error when touching
	  // document.activeElement in some cases (during loading, in iframe)
	  if (ie && ie_version < 11) activeElt = function() {
	    try { return document.activeElement; }
	    catch(e) { return document.body; }
	  };

	  function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*"); }
	  var rmClass = CodeMirror.rmClass = function(node, cls) {
	    var current = node.className;
	    var match = classTest(cls).exec(current);
	    if (match) {
	      var after = current.slice(match.index + match[0].length);
	      node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
	    }
	  };
	  var addClass = CodeMirror.addClass = function(node, cls) {
	    var current = node.className;
	    if (!classTest(cls).test(current)) node.className += (current ? " " : "") + cls;
	  };
	  function joinClasses(a, b) {
	    var as = a.split(" ");
	    for (var i = 0; i < as.length; i++)
	      if (as[i] && !classTest(as[i]).test(b)) b += " " + as[i];
	    return b;
	  }

	  // WINDOW-WIDE EVENTS

	  // These must be handled carefully, because naively registering a
	  // handler for each editor will cause the editors to never be
	  // garbage collected.

	  function forEachCodeMirror(f) {
	    if (!document.body.getElementsByClassName) return;
	    var byClass = document.body.getElementsByClassName("CodeMirror");
	    for (var i = 0; i < byClass.length; i++) {
	      var cm = byClass[i].CodeMirror;
	      if (cm) f(cm);
	    }
	  }

	  var globalsRegistered = false;
	  function ensureGlobalHandlers() {
	    if (globalsRegistered) return;
	    registerGlobalHandlers();
	    globalsRegistered = true;
	  }
	  function registerGlobalHandlers() {
	    // When the window resizes, we need to refresh active editors.
	    var resizeTimer;
	    on(window, "resize", function() {
	      if (resizeTimer == null) resizeTimer = setTimeout(function() {
	        resizeTimer = null;
	        forEachCodeMirror(onResize);
	      }, 100);
	    });
	    // When the window loses focus, we want to show the editor as blurred
	    on(window, "blur", function() {
	      forEachCodeMirror(onBlur);
	    });
	  }

	  // FEATURE DETECTION

	  // Detect drag-and-drop
	  var dragAndDrop = function() {
	    // There is *some* kind of drag-and-drop support in IE6-8, but I
	    // couldn't get it to work yet.
	    if (ie && ie_version < 9) return false;
	    var div = elt('div');
	    return "draggable" in div || "dragDrop" in div;
	  }();

	  var zwspSupported;
	  function zeroWidthElement(measure) {
	    if (zwspSupported == null) {
	      var test = elt("span", "\u200b");
	      removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
	      if (measure.firstChild.offsetHeight != 0)
	        zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8);
	    }
	    var node = zwspSupported ? elt("span", "\u200b") :
	      elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
	    node.setAttribute("cm-text", "");
	    return node;
	  }

	  // Feature-detect IE's crummy client rect reporting for bidi text
	  var badBidiRects;
	  function hasBadBidiRects(measure) {
	    if (badBidiRects != null) return badBidiRects;
	    var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"));
	    var r0 = range(txt, 0, 1).getBoundingClientRect();
	    if (!r0 || r0.left == r0.right) return false; // Safari returns null in some cases (#2780)
	    var r1 = range(txt, 1, 2).getBoundingClientRect();
	    return badBidiRects = (r1.right - r0.right < 3);
	  }

	  // See if "".split is the broken IE version, if so, provide an
	  // alternative way to split lines.
	  var splitLinesAuto = CodeMirror.splitLines = "\n\nb".split(/\n/).length != 3 ? function(string) {
	    var pos = 0, result = [], l = string.length;
	    while (pos <= l) {
	      var nl = string.indexOf("\n", pos);
	      if (nl == -1) nl = string.length;
	      var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
	      var rt = line.indexOf("\r");
	      if (rt != -1) {
	        result.push(line.slice(0, rt));
	        pos += rt + 1;
	      } else {
	        result.push(line);
	        pos = nl + 1;
	      }
	    }
	    return result;
	  } : function(string){return string.split(/\r\n?|\n/);};

	  var hasSelection = window.getSelection ? function(te) {
	    try { return te.selectionStart != te.selectionEnd; }
	    catch(e) { return false; }
	  } : function(te) {
	    try {var range = te.ownerDocument.selection.createRange();}
	    catch(e) {}
	    if (!range || range.parentElement() != te) return false;
	    return range.compareEndPoints("StartToEnd", range) != 0;
	  };

	  var hasCopyEvent = (function() {
	    var e = elt("div");
	    if ("oncopy" in e) return true;
	    e.setAttribute("oncopy", "return;");
	    return typeof e.oncopy == "function";
	  })();

	  var badZoomedRects = null;
	  function hasBadZoomedRects(measure) {
	    if (badZoomedRects != null) return badZoomedRects;
	    var node = removeChildrenAndAdd(measure, elt("span", "x"));
	    var normal = node.getBoundingClientRect();
	    var fromRange = range(node, 0, 1).getBoundingClientRect();
	    return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1;
	  }

	  // KEY NAMES

	  var keyNames = CodeMirror.keyNames = {
	    3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
	    19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
	    36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
	    46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
	    106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 127: "Delete",
	    173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
	    221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
	    63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
	  };
	  (function() {
	    // Number keys
	    for (var i = 0; i < 10; i++) keyNames[i + 48] = keyNames[i + 96] = String(i);
	    // Alphabetic keys
	    for (var i = 65; i <= 90; i++) keyNames[i] = String.fromCharCode(i);
	    // Function keys
	    for (var i = 1; i <= 12; i++) keyNames[i + 111] = keyNames[i + 63235] = "F" + i;
	  })();

	  // BIDI HELPERS

	  function iterateBidiSections(order, from, to, f) {
	    if (!order) return f(from, to, "ltr");
	    var found = false;
	    for (var i = 0; i < order.length; ++i) {
	      var part = order[i];
	      if (part.from < to && part.to > from || from == to && part.to == from) {
	        f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr");
	        found = true;
	      }
	    }
	    if (!found) f(from, to, "ltr");
	  }

	  function bidiLeft(part) { return part.level % 2 ? part.to : part.from; }
	  function bidiRight(part) { return part.level % 2 ? part.from : part.to; }

	  function lineLeft(line) { var order = getOrder(line); return order ? bidiLeft(order[0]) : 0; }
	  function lineRight(line) {
	    var order = getOrder(line);
	    if (!order) return line.text.length;
	    return bidiRight(lst(order));
	  }

	  function lineStart(cm, lineN) {
	    var line = getLine(cm.doc, lineN);
	    var visual = visualLine(line);
	    if (visual != line) lineN = lineNo(visual);
	    var order = getOrder(visual);
	    var ch = !order ? 0 : order[0].level % 2 ? lineRight(visual) : lineLeft(visual);
	    return Pos(lineN, ch);
	  }
	  function lineEnd(cm, lineN) {
	    var merged, line = getLine(cm.doc, lineN);
	    while (merged = collapsedSpanAtEnd(line)) {
	      line = merged.find(1, true).line;
	      lineN = null;
	    }
	    var order = getOrder(line);
	    var ch = !order ? line.text.length : order[0].level % 2 ? lineLeft(line) : lineRight(line);
	    return Pos(lineN == null ? lineNo(line) : lineN, ch);
	  }
	  function lineStartSmart(cm, pos) {
	    var start = lineStart(cm, pos.line);
	    var line = getLine(cm.doc, start.line);
	    var order = getOrder(line);
	    if (!order || order[0].level == 0) {
	      var firstNonWS = Math.max(0, line.text.search(/\S/));
	      var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
	      return Pos(start.line, inWS ? 0 : firstNonWS);
	    }
	    return start;
	  }

	  function compareBidiLevel(order, a, b) {
	    var linedir = order[0].level;
	    if (a == linedir) return true;
	    if (b == linedir) return false;
	    return a < b;
	  }
	  var bidiOther;
	  function getBidiPartAt(order, pos) {
	    bidiOther = null;
	    for (var i = 0, found; i < order.length; ++i) {
	      var cur = order[i];
	      if (cur.from < pos && cur.to > pos) return i;
	      if ((cur.from == pos || cur.to == pos)) {
	        if (found == null) {
	          found = i;
	        } else if (compareBidiLevel(order, cur.level, order[found].level)) {
	          if (cur.from != cur.to) bidiOther = found;
	          return i;
	        } else {
	          if (cur.from != cur.to) bidiOther = i;
	          return found;
	        }
	      }
	    }
	    return found;
	  }

	  function moveInLine(line, pos, dir, byUnit) {
	    if (!byUnit) return pos + dir;
	    do pos += dir;
	    while (pos > 0 && isExtendingChar(line.text.charAt(pos)));
	    return pos;
	  }

	  // This is needed in order to move 'visually' through bi-directional
	  // text -- i.e., pressing left should make the cursor go left, even
	  // when in RTL text. The tricky part is the 'jumps', where RTL and
	  // LTR text touch each other. This often requires the cursor offset
	  // to move more than one unit, in order to visually move one unit.
	  function moveVisually(line, start, dir, byUnit) {
	    var bidi = getOrder(line);
	    if (!bidi) return moveLogically(line, start, dir, byUnit);
	    var pos = getBidiPartAt(bidi, start), part = bidi[pos];
	    var target = moveInLine(line, start, part.level % 2 ? -dir : dir, byUnit);

	    for (;;) {
	      if (target > part.from && target < part.to) return target;
	      if (target == part.from || target == part.to) {
	        if (getBidiPartAt(bidi, target) == pos) return target;
	        part = bidi[pos += dir];
	        return (dir > 0) == part.level % 2 ? part.to : part.from;
	      } else {
	        part = bidi[pos += dir];
	        if (!part) return null;
	        if ((dir > 0) == part.level % 2)
	          target = moveInLine(line, part.to, -1, byUnit);
	        else
	          target = moveInLine(line, part.from, 1, byUnit);
	      }
	    }
	  }

	  function moveLogically(line, start, dir, byUnit) {
	    var target = start + dir;
	    if (byUnit) while (target > 0 && isExtendingChar(line.text.charAt(target))) target += dir;
	    return target < 0 || target > line.text.length ? null : target;
	  }

	  // Bidirectional ordering algorithm
	  // See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
	  // that this (partially) implements.

	  // One-char codes used for character types:
	  // L (L):   Left-to-Right
	  // R (R):   Right-to-Left
	  // r (AL):  Right-to-Left Arabic
	  // 1 (EN):  European Number
	  // + (ES):  European Number Separator
	  // % (ET):  European Number Terminator
	  // n (AN):  Arabic Number
	  // , (CS):  Common Number Separator
	  // m (NSM): Non-Spacing Mark
	  // b (BN):  Boundary Neutral
	  // s (B):   Paragraph Separator
	  // t (S):   Segment Separator
	  // w (WS):  Whitespace
	  // N (ON):  Other Neutrals

	  // Returns null if characters are ordered as they appear
	  // (left-to-right), or an array of sections ({from, to, level}
	  // objects) in the order in which they occur visually.
	  var bidiOrdering = (function() {
	    // Character types for codepoints 0 to 0xff
	    var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
	    // Character types for codepoints 0x600 to 0x6ff
	    var arabicTypes = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm";
	    function charType(code) {
	      if (code <= 0xf7) return lowTypes.charAt(code);
	      else if (0x590 <= code && code <= 0x5f4) return "R";
	      else if (0x600 <= code && code <= 0x6ed) return arabicTypes.charAt(code - 0x600);
	      else if (0x6ee <= code && code <= 0x8ac) return "r";
	      else if (0x2000 <= code && code <= 0x200b) return "w";
	      else if (code == 0x200c) return "b";
	      else return "L";
	    }

	    var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
	    var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;
	    // Browsers seem to always treat the boundaries of block elements as being L.
	    var outerType = "L";

	    function BidiSpan(level, from, to) {
	      this.level = level;
	      this.from = from; this.to = to;
	    }

	    return function(str) {
	      if (!bidiRE.test(str)) return false;
	      var len = str.length, types = [];
	      for (var i = 0, type; i < len; ++i)
	        types.push(type = charType(str.charCodeAt(i)));

	      // W1. Examine each non-spacing mark (NSM) in the level run, and
	      // change the type of the NSM to the type of the previous
	      // character. If the NSM is at the start of the level run, it will
	      // get the type of sor.
	      for (var i = 0, prev = outerType; i < len; ++i) {
	        var type = types[i];
	        if (type == "m") types[i] = prev;
	        else prev = type;
	      }

	      // W2. Search backwards from each instance of a European number
	      // until the first strong type (R, L, AL, or sor) is found. If an
	      // AL is found, change the type of the European number to Arabic
	      // number.
	      // W3. Change all ALs to R.
	      for (var i = 0, cur = outerType; i < len; ++i) {
	        var type = types[i];
	        if (type == "1" && cur == "r") types[i] = "n";
	        else if (isStrong.test(type)) { cur = type; if (type == "r") types[i] = "R"; }
	      }

	      // W4. A single European separator between two European numbers
	      // changes to a European number. A single common separator between
	      // two numbers of the same type changes to that type.
	      for (var i = 1, prev = types[0]; i < len - 1; ++i) {
	        var type = types[i];
	        if (type == "+" && prev == "1" && types[i+1] == "1") types[i] = "1";
	        else if (type == "," && prev == types[i+1] &&
	                 (prev == "1" || prev == "n")) types[i] = prev;
	        prev = type;
	      }

	      // W5. A sequence of European terminators adjacent to European
	      // numbers changes to all European numbers.
	      // W6. Otherwise, separators and terminators change to Other
	      // Neutral.
	      for (var i = 0; i < len; ++i) {
	        var type = types[i];
	        if (type == ",") types[i] = "N";
	        else if (type == "%") {
	          for (var end = i + 1; end < len && types[end] == "%"; ++end) {}
	          var replace = (i && types[i-1] == "!") || (end < len && types[end] == "1") ? "1" : "N";
	          for (var j = i; j < end; ++j) types[j] = replace;
	          i = end - 1;
	        }
	      }

	      // W7. Search backwards from each instance of a European number
	      // until the first strong type (R, L, or sor) is found. If an L is
	      // found, then change the type of the European number to L.
	      for (var i = 0, cur = outerType; i < len; ++i) {
	        var type = types[i];
	        if (cur == "L" && type == "1") types[i] = "L";
	        else if (isStrong.test(type)) cur = type;
	      }

	      // N1. A sequence of neutrals takes the direction of the
	      // surrounding strong text if the text on both sides has the same
	      // direction. European and Arabic numbers act as if they were R in
	      // terms of their influence on neutrals. Start-of-level-run (sor)
	      // and end-of-level-run (eor) are used at level run boundaries.
	      // N2. Any remaining neutrals take the embedding direction.
	      for (var i = 0; i < len; ++i) {
	        if (isNeutral.test(types[i])) {
	          for (var end = i + 1; end < len && isNeutral.test(types[end]); ++end) {}
	          var before = (i ? types[i-1] : outerType) == "L";
	          var after = (end < len ? types[end] : outerType) == "L";
	          var replace = before || after ? "L" : "R";
	          for (var j = i; j < end; ++j) types[j] = replace;
	          i = end - 1;
	        }
	      }

	      // Here we depart from the documented algorithm, in order to avoid
	      // building up an actual levels array. Since there are only three
	      // levels (0, 1, 2) in an implementation that doesn't take
	      // explicit embedding into account, we can build up the order on
	      // the fly, without following the level-based algorithm.
	      var order = [], m;
	      for (var i = 0; i < len;) {
	        if (countsAsLeft.test(types[i])) {
	          var start = i;
	          for (++i; i < len && countsAsLeft.test(types[i]); ++i) {}
	          order.push(new BidiSpan(0, start, i));
	        } else {
	          var pos = i, at = order.length;
	          for (++i; i < len && types[i] != "L"; ++i) {}
	          for (var j = pos; j < i;) {
	            if (countsAsNum.test(types[j])) {
	              if (pos < j) order.splice(at, 0, new BidiSpan(1, pos, j));
	              var nstart = j;
	              for (++j; j < i && countsAsNum.test(types[j]); ++j) {}
	              order.splice(at, 0, new BidiSpan(2, nstart, j));
	              pos = j;
	            } else ++j;
	          }
	          if (pos < i) order.splice(at, 0, new BidiSpan(1, pos, i));
	        }
	      }
	      if (order[0].level == 1 && (m = str.match(/^\s+/))) {
	        order[0].from = m[0].length;
	        order.unshift(new BidiSpan(0, 0, m[0].length));
	      }
	      if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
	        lst(order).to -= m[0].length;
	        order.push(new BidiSpan(0, len - m[0].length, len));
	      }
	      if (order[0].level == 2)
	        order.unshift(new BidiSpan(1, order[0].to, order[0].to));
	      if (order[0].level != lst(order).level)
	        order.push(new BidiSpan(order[0].level, len, len));

	      return order;
	    };
	  })();

	  // THE END

	  CodeMirror.version = "5.14.2";

	  return CodeMirror;
	});


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(1);
	var util = __webpack_require__(7);
	var routeParser = function(path) {
	    console.info('route to be parsed: ' + path);
	    var uriParts = [];
	    var defaultUri = '/index';
	    var defaultHashPath = '';
	    var parts = path.split('#');
	    //var uriPath = parts.length==1 ? '' : (parts[0] || defaultUri);
	    var hash = parts.length==1 ? parts[0] : parts[1];
	    var hashParts = hash.split('?');
	    var hashPath = hashParts[0] || defaultHashPath;
	    var hashQuery = hashParts[1] || '';

	    var request = {};
	    request.route = hashPath;
	    request.expression = hashPath.indexOf('_')!=-1;
	    if(request.expression){
	        request.routeKey = hashPath.replace(/_(\w+)/g, '_');
	        request.paramList = hashPath.match(/_(\w+)/g);
	    }
	    else{
	        request.routeKey = hashPath;
	        request.paramList = [];
	    }

	    /*
	     * remove _ prefix
	     */
	    var pLen = request.paramList.length;
	    for(var i=0; i<pLen; i++ ){
	        request.paramList[i] = request.paramList[i].slice(request.paramList[i].indexOf('_')+1);
	    }

	    var hashQueryParams = {};
	    if (hashQuery) {
	        hashQuery.split('&').forEach(function(v) {
	            var c = v.split('=')
	            hashQueryParams[c[0]] = c[1] || '';
	        });
	    }
	    request.query = hashQueryParams;

	    var hashPathParts = hashPath.split('/');
	    request.module = hashPathParts[0] || '';
	    request.topic = hashPathParts[1] || '';
	    request.subModule = hashPathParts[2] || '';
	    request.subTopic = hashPathParts[3] || '';
	    uriParts.push( request );
	    //console.info('a request is parsed:');
	    //console.info(request);

	    return uriParts
	};
	var spa = function(options){
	    riot.observable(this);
	    this.history = [];
	    this.routeMap = {};
	    this.routeViewCache = {};
	    this.defaultHash = options && options.defaultHash || '';
	};
	var proto = {
	    init: function(){
	        var app = this;
	        riot.route.parser(routeParser);
	        riot.route(app._doRoute.bind(app));

	        this.on('before-view-route-to', app._doBeforeViewRouteTo.bind(app));
	        this.on('view-route-to', app._doViewRouteTo.bind(app));
	        this.on('view-route-back', app._doViewRouteBack.bind(app));
	        if(window.prdOrNot){
	            window.onload = function(){
	                app.trigger('init');
	            };
	        }else{
	            riot.compile(function(){
	                app.trigger('init');
	            });
	        }
	    },

	    route: function(route, handler){
	        var routeRule = {};
	        routeRule.route = route;
	        routeRule.handler = handler;
	        routeRule.expression = route.indexOf(':')!=-1;
	        if(routeRule.expression){
	            var paramNames = route.match(/_(:\w+)/g);
	            routeRule.routeKey = route.replace(/_(:\w+)/g, '_');

	            /*
	             * remove _: prefix
	             */
	            var pLen = paramNames.length;
	            for(var i=0; i<pLen; i++ ){
	                paramNames[i] = paramNames[i].slice(paramNames[i].indexOf('_:')+2);
	            }

	            routeRule.paramNames = paramNames;
	        }
	        else{
	            routeRule.paramNames = [];
	            routeRule.routeKey = route;
	        }

	        this.routeMap[routeRule.routeKey] = routeRule;
	        console.info('a route rule is added:');
	        console.info(routeRule);
	    },

	    routeView: function(route, view){
	        var router = this;
	        this.route(route, function(ctx){
	            var v = router.routeViewCache[view.name];
	            if(!v){
	                v = router.routeViewCache[view.name] = view;
	                v.setParent(router);
	                v.init(ctx);
	            }
	            v.context = ctx;
	            router.trigger('before-view-route-to', v);
	            v.route(ctx);
	        });
	    },

	    currentTrigger: function(){
	        var tag = this.currentView && this.currentView.tag;
	        if(tag){
	            tag.trigger.apply(tag, arguments);
	        }
	    },
	    _doBeforeViewRouteTo: function(view){
	        if(this.currentView==view && this.currentView.equalRoute(view)){
	            this.currentView && this.currentView.reenter();
	        }
	        else{
	            this.currentView && this.currentView.leave(this.currentView, view);
	            view.enter(this.currentView, view);
	        }
	    },
	    _doViewRouteTo: function(view){
	        this.currentView && this.currentView.show(false);
	        this.lastView = this.currentView;
	        this.currentView = view;
	        this.currentView && this.currentView.show(true);
	    },
	    _doViewRouteBack: function(view){
	        if(this.lastView && this.lastView.context){
	            riot.route(this.lastView.context.req.route);
	        }
	    },

	    _doRoute: function(request){
	        var app = this;
	        var ctx = {
	            app: app,
	            req: request
	        };

	        var routeRule = app.routeMap[request.routeKey];
	        if(routeRule){
	            var params = {};
	            if(routeRule.expression){
	                var len = routeRule.paramNames.length;
	                var name = '';
	                for(var i = 0; i<len; i++){
	                    name = routeRule.paramNames[i];
	                    params[name] = request.paramList[i] || null;
	                }
	            }
	            request.params = params;

	            var handler = routeRule.handler;
	            if(handler){
	                try{
	                    handler(ctx);
	                }
	                catch(e){
	                    console.error(e);
	                    console.error('500 on ' + request.route + ' :' + e.message);
	                    app.trigger('500', request, e);
	                }
	            }
	            else{
	                console.info('404 on ' + request.route);
	                app.trigger('404', request);
	            }
	        }
	        else{
	            console.info('404 on ' + request.route);
	            app.trigger('404', request);
	        }
	    },

	    emptyFn: function(){}
	};
	util.extend(spa.prototype, proto);

	module.exports = spa;


/***/ }
]);