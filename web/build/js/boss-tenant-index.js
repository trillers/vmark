webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * SPA definition which is the single entry of our mobile site
	 */
	var riot = __webpack_require__(1);
	window.riot = riot;
	console.log(riot);
	__webpack_require__(2)();
	console.log("*************");
	setTimeout(function(){
	    console.log(riot.mount('boss-tenant'))
	}, 3000)

	var agent = __webpack_require__(3).init();
	var util = __webpack_require__(7);

	var Spa = __webpack_require__(24);
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
	riot.tag('boss-tenant-power-add', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <alert validators="{validators}" clear="{clear}"></alert> <div class="col-md-10 col-md-offset-1"> <div class="jumbotron" style="height: auto; padding: 25px;"> <div id="addForm" class="panel" style="margin-top: 1em;"> <div style="padding-left: 20px; padding-bottom: 20px; padding-top: 15px"><a href="#power/list" style="font-size: 15px; text-decoration: none;">返回活动列表</a></div> <ul class="ul" style="text-align: left; padding-left: 2em"> <li><span>助力活动设置</span></li> <li> <span>活动公众号: </span> <select id="selectMedia" > <option each="{wechatMedias}" value="{originalId}" __selected="{patent.activity.wechatId = originalId}">{name}</option> </select> </li> <li id="type_select"><span>类型: </span> <label><input id="type_rp" name="activity_type" type="radio" value="rp" __checked="{activity.type === \'rp\'}">红包</label> <label><input id="type_po" name="activity_type" type="radio" value="po" __checked="{activity.type === \'po\'}">积分</label> </li> <li><span>启动图片助力: </span><input name="withPic" type="checkbox" __checked="{activity.withPic === \'true\'}" onclick="{toggleWithPic}"></li> <li id="poster" if="{activity.withPic === \'true\'}" style="clear: both; min-height: 26px;"><span style="float: left">海报背景图片: </span><input if="{!activity.posterBgImg}" id="posterBgImg" type="file" accept="image/bmp, image/jpg, image/jpeg, image/gif, image/png" onchange="{uploadPosterBgImg}" style="width: 60px;"> <div if="{activity.posterBgImg}" class="posterBgImgCon"><i onclick="{deletePosterBgImg}" class="glyphicon glyphicon-remove"></i><img riot-src="{activity.posterBgImg}" alt=""></div> </li> <li><span>活动名称: </span><input name="activityName" type="text" value="{activity.name}"></li> <li class="bgImg" style="min-height: 26px"><span style="float: left">背景图片(3张): </span><input if="{activity.bgImg.length != 3}" id="bgImg" type="file" multiple="multiple" accept="image/bmp, image/jpg, image/jpeg, image/gif, image/png" onchange="{uploadBgImg}" style="width: 60px;"> <div if="{activity.bgImg.length >= 1}" class="bgImgCon"><i onclick="{deleteBgImg}" class="glyphicon glyphicon-remove"></i><img riot-src="{activity.bgImg[0]}" alt=""></div> <div if="{activity.bgImg.length >= 2}" class="bgImgCon"><i onclick="{deleteBgImg}" class="glyphicon glyphicon-remove"></i><img riot-src="{activity.bgImg[1]}" alt=""></div> <div if="{activity.bgImg.length >= 3}" class="bgImgCon"><i onclick="{deleteBgImg}" class="glyphicon glyphicon-remove"></i><img riot-src="{activity.bgImg[2]}" alt=""></div> </li> <li style="clear: both; min-height: 26px"><span style="float: left">分享卡片图片: </span><input if="{!activity.shareImg}" id="shareImg" type="file" accept="image/bmp, image/jpg, image/jpeg, image/gif, image/png" onchange="{uploadShareImg}" style="width: 60px;"> <div if="{activity.shareImg}" class="shareImgCon"><i onclick="{deleteShareImg}" class="glyphicon glyphicon-remove"></i><img riot-src="{activity.shareImg}" alt=""></div> </li> <li style="clear: both"><span>活动时间: </span><input id="startTime" type="date" value="{formatDate(activity.startTime)}"><span> 至 </span><input id="endTime" type="date" value="{formatDate(activity.endTime)}"> </li> <li><span>活动介绍: </span><div id="desc"></div></li> <li><span>活动规则: </span><div id="rule"></div></li> <li><span>分享标题自定义: </span><input class="form-control" type="text" name="shareTitle" value="{activity.shareTitle}"></li> <li><span>分享描述自定义: </span><input class="form-control" type="text" name="shareDesc" value="{activity.shareTitle}"></li> <li><span>基础奖励: </span><input id="base_power" type="text" value="{activity.base_power}"></li> <li><span>好友助力单次奖励: </span><input name="friend_help_min_power" type="text" value="{activity.friend_help_min_power}"><span> 至 </span><input name="friend_help_max_power" type="text" value="{activity.friend_help_max_power}"></li> <li><span>好友助力上限人数: </span><input name="friend_help_count_limit" type="text" value="{activity.friend_help_count_limit}"></li> <li style="text-align: center; margin-top: 1em"><input class="btn btn-success" type="button" onclick="{submit}" value="提交"></li> </ul> </div> </div> </div> </div> </div>', 'boss-tenant-power-add .ul {list-style-type: none; text-align: center; padding: 0} boss-tenant-power-add .ul li {margin-bottom: 20px;} boss-tenant-power-add .bgImg #bgImg {float: left; margin-left: 10px;} boss-tenant-power-add .bgImg .bgImgCon {margin-left: 10px; display: -webkit-inline-box; position: relative; border: solid 1px #E8E7E7;} boss-tenant-power-add .bgImgCon i{color: #EC3131; position: absolute; left: 58px; top: 2px; cursor: pointer;} boss-tenant-power-add .bgImgCon div{margin-left: 20px; float: left;} boss-tenant-power-add .bgImgCon img {width: 75px; height: 75px;} boss-tenant-power-add .shareImgCon img {width: 75px; height: 75px;} boss-tenant-power-add #shareImg{float: left; margin-left: 10px;} boss-tenant-power-add .shareImgCon i{color: #EC3131;position: absolute;left: 58px;top: 2px;cursor: pointer;} boss-tenant-power-add .shareImgCon{margin-left: 10px; display: -webkit-inline-box;position: relative; border: solid 1px #E8E7E7;} boss-tenant-power-add .posterBgImgCon img {width: 75px; height: 75px;} boss-tenant-power-add #posterBgImg{float: left; margin-left: 10px;} boss-tenant-power-add .posterBgImgCon i{color: #EC3131;position: absolute;left: 58px;top: 2px;cursor: pointer;} boss-tenant-power-add .posterBgImgCon{margin-left: 10px; display: -webkit-inline-box;position: relative; border: solid 1px #E8E7E7;}', function(opts) {
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
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '分享描述不能为空!'
	                });
	                legal = false;
	            }
	            if(!data.shareTitle){
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '分享标题不能为空!'
	                });
	                legal = false;
	            }
	            if(data.withPic && !data.posterBgImg){
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '必须上传海报背景图片!'
	                });
	                legal = false;
	            }

	            if(!data.shareImg){
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '必须设置分享卡片图片!'
	                });
	                legal = false;
	            }

	            if(!data.bgImg || data.bgImg.length < 1){
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
	            if(!data.base_power || !/^[0-9]+$/.test(data.base_power)) {
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '基础奖励必填且必须为数字!'
	                });
	                legal = false;
	            }
	            if(!data.friend_help_count_limit || !/^[0-9]+$/.test(data.friend_help_count_limit)) {
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '好友助力上限必填且必须为数字!'
	                });
	                legal = false;
	            }
	            if(!data.friend_help_max_power || !/^[0-9]+$/.test(data.friend_help_max_power)) {
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '单次助力最大值必填且必须为数字!'
	                });
	                legal = false;
	            }
	            if(!data.friend_help_min_power || !/^[0-9]+$/.test(data.friend_help_min_power)) {
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
	            self.activity.base_power = self.base_power.value;
	            self.activity.friend_help_count_limit = self.friend_help_count_limit.value;
	            self.activity.startTime = self.startTime.value;
	            self.activity.endTime = self.endTime.value;
	            self.activity.friend_help_min_power = self.friend_help_min_power.value;
	            self.activity.friend_help_max_power = self.friend_help_max_power.value;
	            self.activity.wechatId = self.selectMedia.value;
	            self.activity.rule = $('#rule').summernote('code');
	            self.activity.desc = $('#desc').summernote('code');
	            var allowSubmit = self.verify(self.activity);
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
	    
	});
	riot.tag('boss-tenant-power-edit', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <alert validators="{validators}" clear="{clear}"></alert> <div class="col-md-10 col-md-offset-1"> <div class="jumbotron" style="height: auto; padding: 25px;"> <div id="addForm" class="panel" style="margin-top: 1em;"> <div style="padding-left: 20px; padding-bottom: 20px; padding-top: 15px"><a href="#power/list" style="font-size: 15px; text-decoration: none;">返回活动列表</a></div> <ul class="ul" style="text-align: left; padding-left: 2em"> <li><span>助力活动设置</span></li> <li> <span>活动公众号: </span> <select id="selectMedia" > <option each="{wechatMedias}" value="{originalId}" __selected="{parent.activity.wechatId === originalId}">{name}</option> </select> </li> <li id="type_select"><span>类型: </span> <label><input id="type_rp" name="activity_type" type="radio" value="rp" __checked="{activity.type === \'rp\'}">红包</label> <label><input id="type_po" name="activity_type" type="radio" value="po" __checked="{activity.type === \'po\'}">积分</label> </li> <li><span>启动图片助力: </span><input name="withPic" type="checkbox" __checked="{activity.withPic === \'true\'}" onclick="{toggleWithPic}"></li> <li id="poster" if="{activity.withPic === \'true\'}" style="clear: both; min-height: 26px;"><span style="float: left">海报背景图片: </span><input if="{!activity.posterBgImg}" id="posterBgImg" type="file" accept="image/bmp, image/jpg, image/jpeg, image/gif, image/png" onchange="{uploadPosterBgImg}" style="width: 60px;"> <div if="{activity.posterBgImg}" class="posterBgImgCon"><i onclick="{deletePosterBgImg}" class="glyphicon glyphicon-remove"></i><img riot-src="{activity.posterBgImg}" alt=""></div> </li> <li><span>活动名称: </span><input name="activityName" type="text" value="{activity.name}"></li> <li class="bgImg" style="min-height: 26px"><span style="float: left">背景图片(3张): </span><input if="{activity.bgImg.length != 3}" id="bgImg" type="file" multiple="multiple" accept="image/bmp, image/jpg, image/jpeg, image/gif, image/png" onchange="{uploadBgImg}" style="width: 60px;"> <div if="{activity.bgImg.length >= 1}" class="bgImgCon"><i onclick="{deleteBgImg}" class="glyphicon glyphicon-remove"></i><img riot-src="{activity.bgImg[0]}" alt=""></div> <div if="{activity.bgImg.length >= 2}" class="bgImgCon"><i onclick="{deleteBgImg}" class="glyphicon glyphicon-remove"></i><img riot-src="{activity.bgImg[1]}" alt=""></div> <div if="{activity.bgImg.length >= 3}" class="bgImgCon"><i onclick="{deleteBgImg}" class="glyphicon glyphicon-remove"></i><img riot-src="{activity.bgImg[2]}" alt=""></div> </li> <li style="clear: both; min-height: 26px"><span style="float: left">分享卡片图片: </span><input if="{!activity.shareImg}" id="shareImg" type="file" accept="image/bmp, image/jpg, image/jpeg, image/gif, image/png" onchange="{uploadShareImg}" style="width: 60px;"> <div if="{activity.shareImg}" class="shareImgCon"><i onclick="{deleteShareImg}" class="glyphicon glyphicon-remove"></i><img riot-src="{activity.shareImg}" alt=""></div> </li> <li style="clear: both"><span>活动时间: </span><input id="startTime" type="date" value="{formatDate(activity.startTime)}"><span> 至 </span><input id="endTime" type="date" value="{formatDate(activity.endTime)}"> </li> <li><span>活动介绍: </span><div id="desc"></div></li> <li><span>活动规则: </span><div id="rule"></div></li> <li><span>分享标题自定义: </span><input class="form-control" type="text" name="shareTitle" value="{activity.shareTitle}"></li> <li><span>分享描述自定义: </span><input class="form-control" type="text" name="shareDesc" value="{activity.shareTitle}"></li> <li><span>基础奖励: </span><input id="base_power" type="text" value="{activity.base_power}"></li> <li><span>好友助力单次奖励: </span><input name="friend_help_min_power" type="text" value="{activity.friend_help_min_power}"><span> 至 </span><input name="friend_help_max_power" type="text" value="{activity.friend_help_max_power}"></li> <li><span>好友助力上限人数: </span><input name="friend_help_count_limit" type="text" value="{activity.friend_help_count_limit}"></li> <li style="text-align: center; margin-top: 1em"><input class="btn btn-success" type="button" onclick="{submit}" value="提交"></li> </ul> </div> </div> </div> </div> </div>', 'boss-tenant-power-edit .ul {list-style-type: none; text-align: center; padding: 0} boss-tenant-power-edit .ul li {margin-bottom: 20px;} boss-tenant-power-edit .bgImg #bgImg {float: left; margin-left: 10px;} boss-tenant-power-edit .bgImg .bgImgCon {margin-left: 10px; display: -webkit-inline-box; position: relative; border: solid 1px #E8E7E7;} boss-tenant-power-edit .bgImgCon i{color: #EC3131; position: absolute; left: 58px; top: 2px; cursor: pointer;} boss-tenant-power-edit .bgImgCon div{margin-left: 20px; float: left;} boss-tenant-power-edit .bgImgCon img {width: 75px; height: 75px;} boss-tenant-power-edit .shareImgCon img {width: 75px; height: 75px;} boss-tenant-power-edit #shareImg{float: left; margin-left: 10px;} boss-tenant-power-edit .shareImgCon i{color: #EC3131;position: absolute;left: 58px;top: 2px;cursor: pointer;} boss-tenant-power-edit .shareImgCon{margin-left: 10px; display: -webkit-inline-box;position: relative; border: solid 1px #E8E7E7;} boss-tenant-power-edit .posterBgImgCon img {width: 75px; height: 75px;} boss-tenant-power-edit #posterBgImg{float: left; margin-left: 10px;} boss-tenant-power-edit .posterBgImgCon i{color: #EC3131;position: absolute;left: 58px;top: 2px;cursor: pointer;} boss-tenant-power-edit .posterBgImgCon{margin-left: 10px; display: -webkit-inline-box;position: relative; border: solid 1px #E8E7E7;}', function(opts) {
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
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '分享描述不能为空!'
	                });
	                legal = false;
	            }
	            if(!data.shareTitle){
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '分享标题不能为空!'
	                });
	                legal = false;
	            }
	            if(data.withPic && !data.posterBgImg){
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '必须上传海报背景图片!'
	                });
	                legal = false;
	            }

	            if(!data.shareImg){
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '必须设置分享卡片图片!'
	                });
	                legal = false;
	            }

	            if(!data.bgImg || data.bgImg.length < 1){
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
	            if(!data.base_power || !/^[0-9]+$/.test(data.base_power)) {
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '基础奖励必填且必须为数字!'
	                });
	                legal = false;
	            }
	            if(!data.friend_help_count_limit || !/^[0-9]+$/.test(data.friend_help_count_limit)) {
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '好友助力上限必填且必须为数字!'
	                });
	                legal = false;
	            }
	            if(!data.friend_help_max_power || !/^[0-9]+$/.test(data.friend_help_max_power)) {
	                self.validators.push({
	                    success: false,
	                    field: '提示',
	                    desc: '单次助力最大值必填且必须为数字!'
	                });
	                legal = false;
	            }
	            if(!data.friend_help_min_power || !/^[0-9]+$/.test(data.friend_help_min_power)) {
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
	            self.activity.base_power = self.base_power.value;
	            self.activity.friend_help_count_limit = self.friend_help_count_limit.value;
	            self.activity.startTime = self.startTime.value;
	            self.activity.endTime = self.endTime.value;
	            self.activity.friend_help_min_power = self.friend_help_min_power.value;
	            self.activity.friend_help_max_power = self.friend_help_max_power.value;
	            self.activity.wechatId = self.selectMedia.value;
	            self.activity.rule = $('#rule').summernote('code');
	            self.activity.desc = $('#desc').summernote('code');
	            var allowSubmit = self.verify(self.activity);
	            if(allowSubmit){
	                updatePowerActivity.newInvocation(self.activity).onDone(function(data){
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
	    
	});
	riot.tag('boss-tenant-power-list', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <div class="col-md-10 col-md-offset-1"> <div class="jumbotron" style="height: auto; padding: 25px;"> <div id="powerList" class="panel" style="margin-top: 1em; padding: 0; min-height: 30em"> <div style="padding-left: 20px; padding-top: 10px;"><a id="add" href="#power/add" style="font-size: 15px; text-decoration: none; cursor: pointer">新增</a> </div> <ul class="ul" id="list"> <li> <strong class="col-md-2">活动名称</strong> <strong class="col-md-2">开始时间</strong> <strong class="col-md-2">结束时间</strong> <strong class="col-md-2">类型</strong> <strong class="col-md-2">海报二维码</strong> <strong class="col-md-2">操作</strong> </li> <li> <hr width="100%"> </li> <li class="actItem" each="{activityArr}"> <strong class="col-md-2"><a href="#power/edit/_{_id}">{name}</a></strong> <strong class="col-md-2">{_.date.format(new Date(startTime), \'yyyy-MM-dd\')}</strong> <strong class="col-md-2">{_.date.format(new Date(endTime), \'yyyy-MM-dd\')}</strong> <strong class="col-md-2">{__app.enums.PowerType.values[type]}</strong> <strong class="col-md-2 actionCon"> <a class="fa fa-qrcode fa-lg" data-toggle="modal" data-target="#showImg" onclick="{parent.showImg}"></a> </strong> <strong class="col-md-2 actionCon"><a href="{ __app.settings.app.url + \'/marketing/tenant/power/\' + wechatId + \'/activity?id=\' + _id }" target="_blank">查看</a><a href="{__app.settings.api.url + \'/marketing/tenant/power/exportParticipants?id=\' + _id }" target="_blank" >导出</a></strong> </li> </ul> </div> </div> </div> </div> </div>', 'boss-tenant-power-list .ul {list-style-type: none; text-align: center; padding: 0} boss-tenant-power-list .ul li {margin-bottom: 20px;} boss-tenant-power-list .actItem {height: 17px; overflow: hidden; margin-top: 2px;} boss-tenant-power-list li strong{ padding: 0 !important; margin: 0 !important; } boss-tenant-power-list .actionCon a{ margin-left: 10px; cursor: pointer; }', function(opts) {
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
	riot.tag('boss-tenant-sd-bespeaks', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <div class="row"> <div class="col-md-3 col-lg-3"> <boss-tenant-sd-left path="sd/bespeaks"></boss-tenant-sd-left> </div> <div class="col-md-9 col-lg-9"> <div class="row" style="text-align: center"> <h4>预约管理</h4> </div>                 <div class="row" style="margin-top: 10px"> <table class="table table-striped"> <thead> <tr> <th>客户昵称</th> <th>预约产品</th> <th>日期</th> <th>电话</th> <th>成单</th> </tr> </thead> <tbody> <tr each="{bespeaks}"> <td> <a href="#sd/bespeaks/_{_id}"> {user.nickname} </a> </td> <td> { product.name } </td> <td> {_.date.format(new Date(crtOn), \'yyyy-MM-dd hh点mm分\')} </td> <td> { telephone } </td> <td> <input onclick="{parent.onOrderCreate}" data-toggle="modal" data-target="#orderModal" type="button" class="btn btn-default" value="成单"> <input onclick="{parent.onOrderGiveUp}" data-toggle="modal" data-target="#modal" type="button" class="btn btn-default" value="弃单"> </td> </tr> </tbody> </table> </div> </div> </div> <div id="orderModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title">生成订单</h4> </div> <div class="modal-body"> <form class="form-horizontal"> <div class="form-group"> <label class="col-sm-2 control-label">媒体价</label> <div class="col-sm-10"> <span>{currBespeak.product.listPrice}</span> </div> </div> <div class="form-group"> <label for="finalPrice" class="col-sm-2 control-label">成交价</label> <div class="col-sm-10"> <input class="form-control" oninput="{onInput}" id="finalPrice" type="number" name="finalPrice"> </div> </div> </form> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">取消</button> <button __disabled="{finalPrice.value.trim() === \'\' || parseInt(finalPrice.value.trim(), 10)<0 || parseInt(finalPrice.value.trim(), 10) > currBespeak.product.listPrice}" onclick="{onSubmitOrder}" data-dismiss="modal" type="button" class="btn btn-primary">确认</button> </div> </div> </div> </div> </div>', function(opts) {
	        "use strict";
	        var self = nest.presentable(this);
	        var findBespeaksAction = domain.action('findBespeaks');
	        var createOrderAction = domain.action('createOrder');
	        var updateBespeakByIdAction = domain.action('updateBespeakById');

	        self.bespeaks = [];
	        self.currBespeak = {};
	        self.filter = {
	            tenant: __page.tenantId
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
	            let catalogName = self.catalogNameInput.value.trim();
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
	            let inputs =[].slice.apply(document.querySelectorAll('input[name="CourseCheckBox"]'));
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
	            let catalogName = self.catalogNameInput.value.trim();
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
	            let courseName = self.courseNameInput.value.trim();
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
	            let listPrice = self.courseMediaPriceInput.value.trim();
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
	riot.tag('boss-tenant-sd-courses-detail', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <div class="row"> <div class="col-md-3 col-lg-3"> <boss-tenant-sd-left path="sd/courses"></boss-tenant-sd-left> </div> <div class="col-md-9 col-lg-9"> <div> <div class="row" style="text-align: center"> <a href="#sd/courses" style="position: absolute; left: 0px; top: 10px">返回课程列表</a> <h4>{course.name}</h4> </div> <alert validators="{validators.raw()}" clear="{clear}"></alert> <div class="row"> <ul class="nav nav-tabs"> <li role="presentation" class="{active: currNav === 0}"><a onclick="{onChangeTab(0)}">课程</a></li> <li role="presentation" class="{active: currNav === 1}"><a onclick="{onChangeTab(1)}">分销</a></li> </ul> </div> <div class="row" if="{currNav === 0}"> <div class="panel panel-default"> <div class="panel-body"> <div> <table class="table table-narrow"> <tr> <td>课程名称</td> <td>{course.name}</td> </tr> <tr> <td>推广语</td> <td>{course.slogan}</td> </tr> <tr> <td>媒体价 ( :元 )</td> <td>{course.listPrice}</td> </tr> <tr> <td>上/下架状态</td> <td>{__app.enums.LiveStatus.values[course.liveStatus]}</td> </tr> <tr> <td>上/下架时间</td> <td>{course.actionTime && _.date.format(new Date(course.actionTime), \'yyyy-MM-dd hh点mm分\') || \'空\'}</td> </tr> <tr> <td>备注</td> <td>{course.desc}</td> </tr> <tr> <td><strong>焦点图</strong></td> <td colspan="2"> <ul class="banners-container"> <li each="{banner, i in course.banners}"> <img riot-src="{banner && (__app.settings.api.url + \'/file?media_id=\' + banner)}"> </li> </ul> </td> </tr> </table> <div class="row text-center"> <div class="col-md-12 col-lg-12"> <a href="#sd/courses/edit/details/_{course._id}" class="btn btn-primary">编辑课程详情</a> </div> </div> <div class="row text-center" style="margin-top: 20px; margin-bottom: 20px"> <div class="col-md-12 col-lg-12"> <a href="#sd/courses/edit/_{course._id}" class="btn btn-default">修改</a> <input if="{course.liveStatus === __app.enums.LiveStatus.names.Idle}" onclick="{onGoLive}" data-toggle="modal" data-target="#modal" value="上架" type="button" class="btn btn-default"> <input if="{course.liveStatus === __app.enums.LiveStatus.names.GoLive}" onclick="{onSunset}" data-toggle="modal" data-target="#modal" value="下架" type="button" class="btn btn-default"> <input onclick="{onDelete}" data-toggle="modal" data-target="#modal" value="删除" type="button" class="btn btn-default"> </div> </div> </div> </div> </div> </div> <div class="row" if="{currNav === 1}"> <div class="panel panel-default"> <div class="panel-body"> <td class="text-left"> <table class="my-table table table-narrow"> <tr> <td><strong>会员折扣</strong></td> <td>单位课程优惠</td> <td> <span>{__app.enums.CommissionType.names.Cash === course.memberDiscountsType && \'金额\' || \'百分比\'}</span> <span>{ course.memberDiscountsValue }</span> </td> </tr> <tr> <td><strong>直接分销商-直接推荐人</strong></td> <td>单位课程佣金</td> <td> <span>{__app.enums.CommissionType.names.Cash === course.upLine1CommissionType && \'金额\' || \'百分比\'}</span> <span>{ course.upLine1CommissionValue }</span> </td> </tr> <tr> <td><strong>间接分销商-间接推荐人</strong></td> <td>单位课程佣金</td> <td> <span>{__app.enums.CommissionType.names.Cash === course.upLine2CommissionType && \'金额\' || \'百分比\'}</span> <span>{ course.upLine2CommissionValue }</span> </td> </tr> <tr> <td><strong>第三级分销商-间接推荐人的推荐人</strong></td> <td>单位课程佣金</td> <td> <span>{__app.enums.CommissionType.names.Cash === course.upLine3CommissionType && \'金额\' || \'百分比\'}</span> <span>{ course.upLine3CommissionValue }</span> </td> </tr> <tr> <td colspan="3" style="text-align: center">注： 如果佣金按百分比计算，佣金基数以实际消费者实付金额为准（即线下实际核销金额）</td> </tr> <tr> <td><strong>分销海报背景</strong></td> <td colspan="2"><img style="width: 200px" riot-src="{course.poster &&__app.settings.api.url + \'/file?media_id=\' + course.poster}"></td> </tr> </table> </div> </div> </div>  </div> </div> </div> </div> </div>', 'boss-tenant-sd-courses-detail .form-horizontal .control-label{ text-align: left !important; } boss-tenant-sd-courses-detail .vcenter { vertical-align: middle; } boss-tenant-sd-courses-detail .table-narrow tr td{ border: none !important; width: 30% !important; } boss-tenant-sd-courses-detail .my-table{ width: 100%; } boss-tenant-sd-courses-detail .my-table td{ width: 33.33333%; } boss-tenant-sd-courses-detail .panel-default { border-top: none; border-color: #ddd; }', function(opts) {
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
	                console.log($('#richEditor'));
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
	            }, 3000);
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
	                    $('#richEditor').summernote('insertImage', url);
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
	            let courseName = self.courseNameInput.value.trim();
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
	            let listPrice = self.courseMediaPriceInput.value.trim();
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
	riot.tag('boss-tenant-sd-splitbill', '<div if="{!hidden}" class="container" style="margin-top: 0px"> <div class="row"> <div class="col-md-3 col-lg-3"> <boss-tenant-sd-left path="sd/splitbill"></boss-tenant-sd-left> </div> <div class="col-md-9 col-lg-9"> <div class="row" style="text-align: center"> <h4>分账管理</h4> </div>                 <div class="row" style="margin-top: 10px"> <span if="{!distributors.length}"> <strong>尚没有未结款项.</strong> </span> <table if="{distributors.length}" class="table table-striped"> <thead> <tr> <th>分销商</th> <th>所属公众号</th> <th>手机号</th> <th>待结款</th> <th>结款</th> </tr> </thead> <tbody> <tr each="{distributors}"> <td> <a data-toggle="modal" data-target="#ordersInDistributors" onclick="{parent.onClickDistributor}">{ user.nickname }</a> </td> <td> { media.name } </td> <td> { telephone } </td> <td> { accountBalance || \'顶级\' } </td> <td> <input onclick="{parent.onCheckout}" data-toggle="modal" data-target="#modal" type="button" class="btn btn-default" value="结款"> </td> </tr> </tbody> </table> <div> <input onclick="{prevPage}" type="button" class="btn btn-default" value="上一页"> <span>当前页: </span> <span>{filter.no}</span>, <span>共( {totalPage} )页: </span> <input onclick="{nextPage}" type="button" class="btn btn-default" value="下一页"> <input name="pageTo" type="number" value=""> <input onclick="{jumpToPage}" type="button" class="btn btn-default" value="跳转"> </div> </div> <div id="ordersInDistributors" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"> <div class="modal-dialog modal-lg"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title">相关订单</h4> </div> <div class="modal-body"> <table class="table table-striped"> <thead> <tr> <th>客户</th> <th>产品</th> <th>成交价</th> <th>所获分成</th> </tr> </thead> <tbody> <tr each="{orders}"> <td> { bespeak.user.nickname } </td> <td> { bespeak.product.name } </td> <td> { finalPrice } </td> <td> { commission } </td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div> </div>', function(opts) {
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
	riot.tag('tenant', '<div class="container" if="{!hidden}"> <div class="row"> <div class="col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" style="position: relative;text-align: center"> <a href="#tenants" style="position: absolute; left: 0px; top: 20px;">返回机构列表</a> <h3>{tenant.name}</h3> </div> </div> <div class="row" style="margin-top: 30px"> <div class="col-md-4 col-md-offset-3 col-lg-4 col-lg-offset-3"> <div class="row panel-container"> <div class="col-md-6">名称</div> <div class="col-md-6">{tenant.name}</div> <div class="col-md-6">类型</div> <div class="col-md-6">{__app.enums.PartyType.values[tenant.type]}</div> <div class="col-md-6">状态</div> <div class="col-md-6">{ __app.enums.LifeFlag.values[tenant.lFlg]}</div> <div class="col-md-6">创建时间</div> <div class="col-md-6">{_.date.format(new Date(tenant.crtOn), \'yyyy-MM-dd hh点mm分\')}</div> <div class="col-md-6">备注</div> <div class="col-md-6">{tenant.desc}</div> </div> </div> </div> <div class="row" style="margin-top: 30px"> <div class="col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4" style="text-align: center"> <a href="#tenants/edit/_{tenant._id}" class="btn btn-default">修改</a> <input if="{tenant.lFlg != \'a\'}" onclick="{unlockTenant}" class="btn btn-default" data-toggle="modal" data-target="#modal" type="button" value="激活"> <input if="{tenant.lFlg != \'i\'}" onclick="{lockTenant}" class="btn btn-default" data-toggle="modal" data-target="#modal" type="button" value="锁定"> <input if="{tenant.lFlg != \'d\'}" onclick="{delTenant}" class="btn btn-default" data-toggle="modal" data-target="#modal" type="button" value="删除"> </div> </div> <div class="row" style="margin-top: 30px"> <div class="col-md-12 col-lg-12" style="text-align: center"> <a class="btn btn-primary" type="button" href="/boss/tenant/_{tenant._id}">机构管理</a> </div> </div> </div>', '.panel-container >div{ height: 40px; line-height: 40px; }', function(opts) {
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
	                let ts = res.tenants;
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
	$ = jquery;
	__webpack_require__(10);
	//require('./jssdk');
	//console.log(wx);
	domain = __webpack_require__(11);

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

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.1.3
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-03-02T03:38Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//

	var arr = [];

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		// Use the correct document accordingly with window argument (sandbox)
		document = window.document,

		version = "2.1.3",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function( callback, args ) {
			return jQuery.each( this, callback, args );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map(this, function( elem, i ) {
				return callback.call( elem, i, elem );
			}));
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor(null);
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type(obj) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
		},

		isPlainObject: function( obj ) {
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			if ( obj.constructor &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}

			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call(obj) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {
				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf("use strict") === 1 ) {
					script = document.createElement("script");
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {
				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval
					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		// args is for internal usage only
		each: function( obj, callback, args ) {
			var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike( obj );

			if ( args ) {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				}

			// A special, fast, case for the most common use of each
			} else {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArraylike( Object(arr) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var value,
				i = 0,
				length = elems.length,
				isArray = isArraylike( elems ),
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	});

	function isArraylike( obj ) {
		var length = obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.nodeType === 1 && length ) {
			return true;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace( "w", "w#" ),

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + characterEncoding + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + characterEncoding + ")" ),
			"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
			"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}

		context = context || document;
		results = results || [];
		nodeType = context.nodeType;

		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		if ( !seed && documentIsHTML ) {

			// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
				// Speed-up: Sizzle("#ID")
				if ( (m = match[1]) ) {
					if ( nodeType === 9 ) {
						elem = context.getElementById( m );
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document (jQuery #6963)
						if ( elem && elem.parentNode ) {
							// Handle the case where IE, Opera, and Webkit return items
							// by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}
					} else {
						// Context is not a document
						if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
							contains( context, elem ) && elem.id === m ) {
							results.push( elem );
							return results;
						}
					}

				// Speed-up: Sizzle("TAG")
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Speed-up: Sizzle(".CLASS")
				} else if ( (m = match[3]) && support.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// QSA path
			if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
				nid = old = expando;
				newContext = context;
				newSelector = nodeType !== 1 && selector;

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					groups = tokenize( selector );

					if ( (old = context.getAttribute("id")) ) {
						nid = old.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", nid );
					}
					nid = "[id='" + nid + "'] ";

					i = groups.length;
					while ( i-- ) {
						groups[i] = nid + toSelector( groups[i] );
					}
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
					newSelector = groups.join(",");
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch(qsaError) {
					} finally {
						if ( !old ) {
							context.removeAttribute("id");
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = attrs.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// If no document and documentElement is available, return
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Set our document
		document = doc;
		docElem = doc.documentElement;
		parent = doc.defaultView;

		// Support: IE>8
		// If iframe document is assigned to "document" variable and if iframe has been reloaded,
		// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
		// IE6-8 do not support the defaultView property so parent will be undefined
		if ( parent && parent !== parent.top ) {
			// IE11 does not have attachEvent, so all must suffer
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Support tests
		---------------------------------------------------------------------- */
		documentIsHTML = !isXML( doc );

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( doc.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					return m && m.parentNode ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\f]' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = doc.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully does not implement inclusive descendent
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === doc ? -1 :
					b === doc ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return doc;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, outerCache, node, diff, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[ expando ] || (parent[ expando ] = {});
								cache = outerCache[ type ] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										outerCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							// Use previously-cached element index if available
							} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
								diff = cache[1];

							// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
										// Cache the index of each encountered element
										if ( useCache ) {
											(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
							if ( (oldCache = outerCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								outerCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context !== document && context;
				}

				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// Apply set filters to unmatched elements
				matchedCount += i;
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is no seed and only one group
		if ( match.length === 1 ) {

			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			});

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			});

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
		});
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	};

	jQuery.fn.extend({
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter(function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				}) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow(this, selector || [], false) );
		},
		not: function( selector ) {
			return this.pushStack( winnow(this, selector || [], true) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	});


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && (match[1] || !context) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[1] ) {
						context = context instanceof jQuery ? context[0] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[2] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {
							// Inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || rootjQuery ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof rootjQuery.ready !== "undefined" ?
					rootjQuery.ready( selector ) :
					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.extend({
		dir: function( elem, dir, until ) {
			var matched = [],
				truncate = until !== undefined;

			while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
				if ( elem.nodeType === 1 ) {
					if ( truncate && jQuery( elem ).is( until ) ) {
						break;
					}
					matched.push( elem );
				}
			}
			return matched;
		},

		sibling: function( n, elem ) {
			var matched = [];

			for ( ; n; n = n.nextSibling ) {
				if ( n.nodeType === 1 && n !== elem ) {
					matched.push( n );
				}
			}

			return matched;
		}
	});

	jQuery.fn.extend({
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter(function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[i] ) ) {
						return true;
					}
				}
			});
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
					// Always skip document fragments
					if ( cur.nodeType < 11 && (pos ?
						pos.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector(cur, selectors)) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.unique(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});

	function sibling( cur, dir ) {
		while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each({
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return jQuery.dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return jQuery.dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return jQuery.dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return jQuery.sibling( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.unique( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	});
	var rnotwhite = (/\S+/g);



	// String to Object options format cache
	var optionsCache = {};

	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions( options ) {
		var object = optionsCache[ options ] = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		});
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			( optionsCache[ options ] || createOptions( options ) ) :
			jQuery.extend( {}, options );

		var // Last fire value (for non-forgettable lists)
			memory,
			// Flag to know if list was already fired
			fired,
			// Flag to know if list is currently firing
			firing,
			// First callback to fire (used internally by add and fireWith)
			firingStart,
			// End of the loop when firing
			firingLength,
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
			// Actual callback list
			list = [],
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
			// Fire callbacks
			fire = function( data ) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for ( ; list && firingIndex < firingLength; firingIndex++ ) {
					if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if ( list ) {
					if ( stack ) {
						if ( stack.length ) {
							fire( stack.shift() );
						}
					} else if ( memory ) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
						// First, we save the current length
						var start = list.length;
						(function add( args ) {
							jQuery.each( args, function( _, arg ) {
								var type = jQuery.type( arg );
								if ( type === "function" ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && type !== "string" ) {
									// Inspect recursively
									add( arg );
								}
							});
						})( arguments );
						// Do we need to add the callbacks to the
						// current firing batch?
						if ( firing ) {
							firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
						} else if ( memory ) {
							firingStart = start;
							fire( memory );
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function() {
					if ( list ) {
						jQuery.each( arguments, function( _, arg ) {
							var index;
							while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
								list.splice( index, 1 );
								// Handle firing indexes
								if ( firing ) {
									if ( index <= firingLength ) {
										firingLength--;
									}
									if ( index <= firingIndex ) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
				},
				// Remove all callbacks from the list
				empty: function() {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function() {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function() {
					return !list;
				},
				// Lock the list in its current state
				lock: function() {
					stack = undefined;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function() {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( list && ( !fired || stack ) ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						if ( firing ) {
							stack.push( args );
						} else {
							fire( args );
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend({

		Deferred: function( func ) {
			var tuples = [
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks("memory") ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred(function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[1] ](function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.done( newDefer.resolve )
											.fail( newDefer.reject )
											.progress( newDefer.notify );
									} else {
										newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[1] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(function() {
						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[0] ] = function() {
					deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[0] + "With" ] = list.fireWith;
			});

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject )
							.progress( updateFunc( i, progressContexts, progressValues ) );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	});


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend({
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	});

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// We once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if ( document.readyState === "complete" ) {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed, false );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed, false );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[0], key ) : emptyGet;
	};


	/**
	 * Determines whether an object can have data
	 */
	jQuery.acceptData = function( owner ) {
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};


	function Data() {
		// Support: Android<4,
		// Old WebKit does not have Object.preventExtensions/freeze method,
		// return new empty object instead with no [[set]] accessor
		Object.defineProperty( this.cache = {}, 0, {
			get: function() {
				return {};
			}
		});

		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;
	Data.accepts = jQuery.acceptData;

	Data.prototype = {
		key: function( owner ) {
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return the key for a frozen object.
			if ( !Data.accepts( owner ) ) {
				return 0;
			}

			var descriptor = {},
				// Check if the owner object already has a cache key
				unlock = owner[ this.expando ];

			// If not, create one
			if ( !unlock ) {
				unlock = Data.uid++;

				// Secure it in a non-enumerable, non-writable property
				try {
					descriptor[ this.expando ] = { value: unlock };
					Object.defineProperties( owner, descriptor );

				// Support: Android<4
				// Fallback to a less secure definition
				} catch ( e ) {
					descriptor[ this.expando ] = unlock;
					jQuery.extend( owner, descriptor );
				}
			}

			// Ensure the cache object
			if ( !this.cache[ unlock ] ) {
				this.cache[ unlock ] = {};
			}

			return unlock;
		},
		set: function( owner, data, value ) {
			var prop,
				// There may be an unlock assigned to this node,
				// if there is no entry for this "owner", create one inline
				// and set the unlock as though an owner entry had always existed
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {
				// Fresh assignments by object are shallow copied
				if ( jQuery.isEmptyObject( cache ) ) {
					jQuery.extend( this.cache[ unlock ], data );
				// Otherwise, copy the properties one-by-one to the cache object
				} else {
					for ( prop in data ) {
						cache[ prop ] = data[ prop ];
					}
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			// Either a valid cache is found, or will be created.
			// New caches will be created and the unlock returned,
			// allowing direct access to the newly created
			// empty data object. A valid owner object must be provided.
			var cache = this.cache[ this.key( owner ) ];

			return key === undefined ?
				cache : cache[ key ];
		},
		access: function( owner, key, value ) {
			var stored;
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					((key && typeof key === "string") && value === undefined) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase(key) );
			}

			// [*]When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];

			if ( key === undefined ) {
				this.cache[ unlock ] = {};

			} else {
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );
					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;
				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}
		},
		hasData: function( owner ) {
			return !jQuery.isEmptyObject(
				this.cache[ owner[ this.expando ] ] || {}
			);
		},
		discard: function( owner ) {
			if ( owner[ this.expando ] ) {
				delete this.cache[ owner[ this.expando ] ];
			}
		}
	};
	var data_priv = new Data();

	var data_user = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch( e ) {}

				// Make sure we set the data so it isn't changed later
				data_user.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend({
		hasData: function( elem ) {
			return data_user.hasData( elem ) || data_priv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return data_user.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			data_user.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to data_priv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return data_priv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			data_priv.remove( elem, name );
		}
	});

	jQuery.fn.extend({
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = data_user.get( elem );

					if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice(5) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						data_priv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each(function() {
					data_user.set( this, key );
				});
			}

			return access( this, function( value ) {
				var data,
					camelKey = jQuery.camelCase( key );

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
					// Attempt to get data from the cache
					// with the key as-is
					data = data_user.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to get data from the cache
					// with the key camelized
					data = data_user.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each(function() {
					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = data_user.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					data_user.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf("-") !== -1 && data !== undefined ) {
						data_user.set( this, key, value );
					}
				});
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each(function() {
				data_user.remove( this, key );
			});
		}
	});


	jQuery.extend({
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = data_priv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = data_priv.access( elem, type, jQuery.makeArray(data) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return data_priv.get( elem, key ) || data_priv.access( elem, key, {
				empty: jQuery.Callbacks("once memory").add(function() {
					data_priv.remove( elem, [ type + "queue", key ] );
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[0], type );
			}

			return data === undefined ?
				this :
				this.each(function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[0] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				});
		},
		dequeue: function( type ) {
			return this.each(function() {
				jQuery.dequeue( this, type );
			});
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = data_priv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	});
	var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
		};

	var rcheckableType = (/^(?:checkbox|radio)$/i);



	(function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	})();
	var strundefined = typeof undefined;



	support.focusinBubbles = "onfocusin" in window;


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !(events = elemData.events) ) {
				events = elemData.events = {};
			}
			if ( !(eventHandle = elemData.handle) ) {
				eventHandle = elemData.handle = function( e ) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join(".")
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !(handlers = events[ type ]) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.hasData( elem ) && data_priv.get( elem );

			if ( !elemData || !(events = elemData.events) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;
				data_priv.remove( elem, "events" );
			}
		},

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf(".") >= 0 ) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === (elem.ownerDocument || document) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
					jQuery.acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
								.apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( (event.result = ret) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.disabled !== true || event.type !== "click" ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) >= 0 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		simulate: function( type, elem, event, bubble ) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true,
					originalEvent: {}
				}
			);
			if ( bubble ) {
				jQuery.event.trigger( e, null, elem );
			} else {
				jQuery.event.dispatch.call( elem, e );
			}
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	};

	jQuery.Event = function( src, props ) {
		// Allow instantiation without the 'new' keyword
		if ( !(this instanceof jQuery.Event) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && e.preventDefault ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && e.stopPropagation ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && e.stopImmediatePropagation ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// Support: Chrome 15+
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	});

	// Support: Firefox, Chrome, Safari
	// Create "bubbling" focus and blur events
	if ( !support.focusinBubbles ) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
					jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
				};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						data_priv.remove( doc, fix );

					} else {
						data_priv.access( doc, fix, attaches );
					}
				}
			};
		});
	}

	jQuery.fn.extend({

		on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
			var origFn, type;

			// Types can be a map of types/handlers
			if ( typeof types === "object" ) {
				// ( types-Object, selector, data )
				if ( typeof selector !== "string" ) {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for ( type in types ) {
					this.on( type, selector, data, types[ type ], one );
				}
				return this;
			}

			if ( data == null && fn == null ) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if ( fn == null ) {
				if ( typeof selector === "string" ) {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if ( fn === false ) {
				fn = returnFalse;
			} else if ( !fn ) {
				return this;
			}

			if ( one === 1 ) {
				origFn = fn;
				fn = function( event ) {
					// Can use an empty set, since event contains the info
					jQuery().off( event );
					return origFn.apply( this, arguments );
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
			}
			return this.each( function() {
				jQuery.event.add( this, types, fn, data, selector );
			});
		},
		one: function( types, selector, data, fn ) {
			return this.on( types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each(function() {
				jQuery.event.remove( this, types, fn, selector );
			});
		},

		trigger: function( type, data ) {
			return this.each(function() {
				jQuery.event.trigger( type, data, this );
			});
		},
		triggerHandler: function( type, data ) {
			var elem = this[0];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	});


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rhtml = /<|&#?\w+;/,
		rnoInnerhtml = /<(?:script|style|link)/i,
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

		// We have to close these tags to support XHTML (#13200)
		wrapMap = {

			// Support: IE9
			option: [ 1, "<select multiple='multiple'>", "</select>" ],

			thead: [ 1, "<table>", "</table>" ],
			col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
			tr: [ 2, "<table><tbody>", "</tbody></table>" ],
			td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

			_default: [ 0, "", "" ]
		};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	// Support: 1.x compatibility
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute("type");
		}

		return elem;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			data_priv.set(
				elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
			);
		}
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( data_priv.hasData( src ) ) {
			pdataOld = data_priv.access( src );
			pdataCur = data_priv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( data_user.hasData( src ) ) {
			udataOld = data_user.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			data_user.set( dest, udataCur );
		}
	}

	function getAll( context, tag ) {
		var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
				context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	jQuery.extend({
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		buildFragment: function( elems, context, scripts, selection ) {
			var elem, tmp, tag, wrap, contains, j,
				fragment = context.createDocumentFragment(),
				nodes = [],
				i = 0,
				l = elems.length;

			for ( ; i < l; i++ ) {
				elem = elems[ i ];

				if ( elem || elem === 0 ) {

					// Add nodes directly
					if ( jQuery.type( elem ) === "object" ) {
						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

					// Convert non-html into a text node
					} else if ( !rhtml.test( elem ) ) {
						nodes.push( context.createTextNode( elem ) );

					// Convert html into DOM nodes
					} else {
						tmp = tmp || fragment.appendChild( context.createElement("div") );

						// Deserialize a standard representation
						tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
						wrap = wrapMap[ tag ] || wrapMap._default;
						tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

						// Descend through wrappers to the right content
						j = wrap[ 0 ];
						while ( j-- ) {
							tmp = tmp.lastChild;
						}

						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, tmp.childNodes );

						// Remember the top-level container
						tmp = fragment.firstChild;

						// Ensure the created nodes are orphaned (#12392)
						tmp.textContent = "";
					}
				}
			}

			// Remove wrapper from fragment
			fragment.textContent = "";

			i = 0;
			while ( (elem = nodes[ i++ ]) ) {

				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
					continue;
				}

				contains = jQuery.contains( elem.ownerDocument, elem );

				// Append to fragment
				tmp = getAll( fragment.appendChild( elem ), "script" );

				// Preserve script evaluation history
				if ( contains ) {
					setGlobalEval( tmp );
				}

				// Capture executables
				if ( scripts ) {
					j = 0;
					while ( (elem = tmp[ j++ ]) ) {
						if ( rscriptType.test( elem.type || "" ) ) {
							scripts.push( elem );
						}
					}
				}
			}

			return fragment;
		},

		cleanData: function( elems ) {
			var data, elem, type, key,
				special = jQuery.event.special,
				i = 0;

			for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
				if ( jQuery.acceptData( elem ) ) {
					key = elem[ data_priv.expando ];

					if ( key && (data = data_priv.cache[ key ]) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
						if ( data_priv.cache[ key ] ) {
							// Discard any remaining `private` data
							delete data_priv.cache[ key ];
						}
					}
				}
				// Discard any remaining `user` data
				delete data_user.cache[ elem[ data_user.expando ] ];
			}
		}
	});

	jQuery.fn.extend({
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each(function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					});
			}, null, value, arguments.length );
		},

		append: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			});
		},

		prepend: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			});
		},

		before: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			});
		},

		after: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			});
		},

		remove: function( selector, keepData /* Internal Use Only */ ) {
			var elem,
				elems = selector ? jQuery.filter( selector, this ) : this,
				i = 0;

			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}

				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}

			return this;
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; (elem = this[i]) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			});
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = value.replace( rxhtmlTag, "<$1></$2>" );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var arg = arguments[ 0 ];

			// Make the changes, replacing each context element with the new content
			this.domManip( arguments, function( elem ) {
				arg = this.parentNode;

				jQuery.cleanData( getAll( this ) );

				if ( arg ) {
					arg.replaceChild( elem, this );
				}
			});

			// Force removal if there was no new content (e.g., from empty arguments)
			return arg && (arg.length || arg.nodeType) ? this : this.remove();
		},

		detach: function( selector ) {
			return this.remove( selector, true );
		},

		domManip: function( args, callback ) {

			// Flatten any nested arrays
			args = concat.apply( [], args );

			var fragment, first, scripts, hasScripts, node, doc,
				i = 0,
				l = this.length,
				set = this,
				iNoClone = l - 1,
				value = args[ 0 ],
				isFunction = jQuery.isFunction( value );

			// We can't cloneNode fragments that contain checked, in WebKit
			if ( isFunction ||
					( l > 1 && typeof value === "string" &&
						!support.checkClone && rchecked.test( value ) ) ) {
				return this.each(function( index ) {
					var self = set.eq( index );
					if ( isFunction ) {
						args[ 0 ] = value.call( this, index, self.html() );
					}
					self.domManip( args, callback );
				});
			}

			if ( l ) {
				fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
				first = fragment.firstChild;

				if ( fragment.childNodes.length === 1 ) {
					fragment = first;
				}

				if ( first ) {
					scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
					hasScripts = scripts.length;

					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for ( ; i < l; i++ ) {
						node = fragment;

						if ( i !== iNoClone ) {
							node = jQuery.clone( node, true, true );

							// Keep references to cloned scripts for later restoration
							if ( hasScripts ) {
								// Support: QtWebKit
								// jQuery.merge because push.apply(_, arraylike) throws
								jQuery.merge( scripts, getAll( node, "script" ) );
							}
						}

						callback.call( this[ i ], node, i );
					}

					if ( hasScripts ) {
						doc = scripts[ scripts.length - 1 ].ownerDocument;

						// Reenable scripts
						jQuery.map( scripts, restoreScript );

						// Evaluate executable scripts on first document insertion
						for ( i = 0; i < hasScripts; i++ ) {
							node = scripts[ i ];
							if ( rscriptType.test( node.type || "" ) &&
								!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

								if ( node.src ) {
									// Optional AJAX dependency, but won't run scripts if not present
									if ( jQuery._evalUrl ) {
										jQuery._evalUrl( node.src );
									}
								} else {
									jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
								}
							}
						}
					}
				}
			}

			return this;
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	});


	var iframe,
		elemdisplay = {};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var style,
			elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			// getDefaultComputedStyle might be reliably used only on attached element
			display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

				// Use of this method is a temporary fix (more like optimization) until something better comes along,
				// since it was removed from specification and supported only in FF
				style.display : jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = (/^margin/);

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			if ( elem.ownerDocument.defaultView.opener ) {
				return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
			}

			return window.getComputedStyle( elem, null );
		};



	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
		}

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// Support: iOS < 6
			// A tribute to the "awesome hack by Dean Edwards"
			// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?
			// Support: IE
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply( this, arguments );
			}
		};
	}


	(function() {
		var pixelPositionVal, boxSizingReliableVal,
			docElem = document.documentElement,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
			"position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computePixelPositionAndBoxSizingReliable() {
			div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
				"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
				"border:1px;padding:1px;width:4px;position:absolute";
			div.innerHTML = "";
			docElem.appendChild( container );

			var divStyle = window.getComputedStyle( div, null );
			pixelPositionVal = divStyle.top !== "1%";
			boxSizingReliableVal = divStyle.width === "4px";

			docElem.removeChild( container );
		}

		// Support: node.js jsdom
		// Don't assume that getComputedStyle is a property of the global object
		if ( window.getComputedStyle ) {
			jQuery.extend( support, {
				pixelPosition: function() {

					// This test is executed only once but we still do memoizing
					// since we can use the boxSizingReliable pre-computing.
					// No need to check if the test was already performed, though.
					computePixelPositionAndBoxSizingReliable();
					return pixelPositionVal;
				},
				boxSizingReliable: function() {
					if ( boxSizingReliableVal == null ) {
						computePixelPositionAndBoxSizingReliable();
					}
					return boxSizingReliableVal;
				},
				reliableMarginRight: function() {

					// Support: Android 2.3
					// Check if div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container. (#3333)
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// This support function is only executed once so no memoizing is needed.
					var ret,
						marginDiv = div.appendChild( document.createElement( "div" ) );

					// Reset CSS: box-sizing; display; margin; border; padding
					marginDiv.style.cssText = div.style.cssText =
						// Support: Firefox<29, Android 2.3
						// Vendor-prefix box-sizing
						"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
						"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
					marginDiv.style.marginRight = marginDiv.style.width = "0";
					div.style.width = "1px";
					docElem.appendChild( container );

					ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

					docElem.removeChild( container );
					div.removeChild( marginDiv );

					return ret;
				}
			});
		}
	})();


	// A method for quickly swapping in/out CSS properties to get correct calculations.
	jQuery.swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var
		// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
		rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( style, name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in style ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
			origName = name,
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in style ) {
				return name;
			}
		}

		return origName;
	}

	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test(val) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = data_priv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend({

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && (ret = rrelNum.exec( value )) ) {
					value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number, add 'px' to the (except for certain CSS properties)
				if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
					value += "px";
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
					style[ name ] = value;
				}

			} else {
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
			}
			return val;
		}
	});

	jQuery.each([ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
						jQuery.swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						}) :
						getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	});

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return jQuery.swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each(function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			});
		}
	});


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				if ( tween.elem[ tween.prop ] != null &&
					(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		}
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
		rrun = /queueHooks$/,
		animationPrefilters = [ defaultPrefilter ],
		tweeners = {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value ),
					target = tween.cur(),
					parts = rfxnum.exec( value ),
					unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

					// Starting value computation is required for potential unit mismatches
					start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
						rfxnum.exec( jQuery.css( tween.elem, prop ) ),
					scale = 1,
					maxIterations = 20;

				if ( start && start[ 3 ] !== unit ) {
					// Trust units reported by jQuery.css
					unit = unit || start[ 3 ];

					// Make sure we update the tween properties later on
					parts = parts || [];

					// Iteratively approximate from a nonzero starting point
					start = +target || 1;

					do {
						// If previous iteration zeroed out, double until we get *something*.
						// Use string for doubling so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );

					// Update scale, tolerating zero or NaN from tween.cur(),
					// break the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}

				// Update tween properties
				if ( parts ) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[ 1 ] ?
						start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
						+parts[ 2 ];
				}

				return tween;
			} ]
		};

	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function() {
			fxNow = undefined;
		});
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( (tween = collection[ index ].call( animation, prop, value )) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = data_priv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function() {
				// Ensure the complete handler is called before this completes
				anim.always(function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				});
			});
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = data_priv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done(function() {
					jQuery( elem ).hide();
				});
			}
			anim.done(function() {
				var prop;

				data_priv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			});
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = animationPrefilters.length,
			deferred = jQuery.Deferred().always( function() {
				// Don't match elem in the :animated selector
				delete tick.elem;
			}),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ]);

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, { specialEasing: {} }, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			}),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			})
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.split(" ");
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				tweeners[ prop ] = tweeners[ prop ] || [];
				tweeners[ prop ].unshift( callback );
			}
		},

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				animationPrefilters.unshift( callback );
			} else {
				animationPrefilters.push( callback );
			}
		}
	});

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || data_priv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each(function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = data_priv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			});
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each(function() {
				var index,
					data = data_priv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		clearInterval( timerId );
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	};


	(function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();


	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend({
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each(function() {
				jQuery.removeAttr( this, name );
			});
		}
	});

	jQuery.extend({
		attr: function( elem, name, value ) {
			var hooks, ret,
				nType = elem.nodeType;

			// don't get/set attributes on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === strundefined ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}

			if ( value !== undefined ) {

				if ( value === null ) {
					jQuery.removeAttr( elem, name );

				} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
					return ret;

				} else {
					elem.setAttribute( name, value + "" );
					return value;
				}

			} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				ret = jQuery.find.attr( elem, name );

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ?
					undefined :
					ret;
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( (name = attrNames[i++]) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	});




	var rfocusable = /^(?:input|select|textarea|button)$/i;

	jQuery.fn.extend({
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each(function() {
				delete this[ jQuery.propFix[ name ] || name ];
			});
		}
	});

	jQuery.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},

		prop: function( elem, name, value ) {
			var ret, hooks, notxml,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

			if ( notxml ) {
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
					ret :
					( elem[ name ] = value );

			} else {
				return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
					ret :
					elem[ name ];
			}
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {
					return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
						elem.tabIndex :
						-1;
				}
			}
		}
	});

	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}

	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	});




	var rclass = /[\t\r\n\f]/g;

	jQuery.fn.extend({
		addClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = typeof value === "string" && value,
				i = 0,
				len = this.length;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).addClass( value.call( this, j, this.className ) );
				});
			}

			if ( proceed ) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = ( value || "" ).match( rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						" "
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = arguments.length === 0 || typeof value === "string" && value,
				i = 0,
				len = this.length;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).removeClass( value.call( this, j, this.className ) );
				});
			}
			if ( proceed ) {
				classes = ( value || "" ).match( rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						""
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = value ? jQuery.trim( cur ) : "";
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( i ) {
					jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
				});
			}

			return this.each(function() {
				if ( type === "string" ) {
					// Toggle individual class names
					var className,
						i = 0,
						self = jQuery( this ),
						classNames = value.match( rnotwhite ) || [];

					while ( (className = classNames[ i++ ]) ) {
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( type === strundefined || type === "boolean" ) {
					if ( this.className ) {
						// store className if set
						data_priv.set( this, "__className__", this.className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
				}
			});
		},

		hasClass: function( selector ) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for ( ; i < l; i++ ) {
				if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
					return true;
				}
			}

			return false;
		}
	});




	var rreturn = /\r/g;

	jQuery.fn.extend({
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[0];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?
						// Handle most common string cases
						ret.replace(rreturn, "") :
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each(function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						jQuery.trim( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE6-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});




	// Return jQuery for attributes-only inclusion


	jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	});

	jQuery.fn.extend({
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		},

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
		}
	});


	var nonce = jQuery.now();

	var rquery = (/\?/);



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			tmp = new DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Document location
		ajaxLocation = window.location.href,

		// Segment location into parts
		ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {
				// For each dataType in the dataTypeExpression
				while ( (dataType = dataTypes[i++]) ) {
					// Prepend if requested
					if ( dataType[0] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

					// Otherwise append
					} else {
						(structure[ dataType ] = structure[ dataType ] || []).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			});
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,
				// URL without anti-cache param
				cacheURL,
				// Response headers
				responseHeadersString,
				responseHeaders,
				// timeout handle
				timeoutTimer,
				// Cross-domain detection vars
				parts,
				// To know if global events are to be dispatched
				fireGlobals,
				// Loop variable
				i,
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
				// Callbacks context
				callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
				// The jqXHR state
				state = 0,
				// Default abort message
				strAbort = "canceled",
				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( (match = rheaders.exec( responseHeadersString )) ) {
									responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
				.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
					s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = setTimeout(function() {
						jqXHR.abort("timeout");
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	});

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	};


	jQuery.fn.extend({
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapAll( html.call(this, i) );
				});
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map(function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				}).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapInner( html.call(this, i) );
				});
			}

			return this.each(function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			});
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each(function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
			});
		},

		unwrap: function() {
			return this.parent().each(function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			}).end();
		}
	});


	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
	};
	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
					// Treat each array item as a scalar.
					add( prefix, v );

				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
				}
			});

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {
			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});

		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map(function() {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			})
			.filter(function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			})
			.map(function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						}) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			}).get();
		}
	});


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest();
		} catch( e ) {}
	};

	var xhrId = 0,
		xhrCallbacks = {},
		xhrSuccessStatus = {
			// file protocol always yields status code 0, assume 200
			0: 200,
			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	// Support: IE9
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if ( window.attachEvent ) {
		window.attachEvent( "onunload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]();
			}
		});
	}

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport(function( options ) {
		var callback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					xhr.open( options.type, options.url, options.async, options.username, options.password );

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								delete xhrCallbacks[ id ];
								callback = xhr.onload = xhr.onerror = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
									complete(
										// file: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
										// Support: IE9
										// Accessing binary-data responseText throws an exception
										// (#11426)
										typeof xhr.responseText === "string" ? {
											text: xhr.responseText
										} : undefined,
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					xhr.onerror = callback("error");

					// Create the abort callback
					callback = xhrCallbacks[ id ] = callback("abort");

					try {
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});




	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	});

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery("<script>").prop({
						async: true,
						charset: s.scriptCharset,
						src: s.url
					}).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function() {
				// Restore preexisting value
				window[ callbackName ] = overwritten;

				// Save back as free
				if ( s[ callbackName ] ) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});




	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf(" ");

		if ( off >= 0 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax({
				url: url,

				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			}).complete( callback && function( jqXHR, status ) {
				self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
			});
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	});




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};




	var docElem = window.document.documentElement;

	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {
				options = options.call( elem, i, curOffset );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend({
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each(function( i ) {
						jQuery.offset.setOffset( this, options, i );
					});
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			// Support: BlackBerry 5, iOS 3 (original iPhone)
			// If we don't have gBCR, just use 0,0 rather than error
			if ( typeof elem.getBoundingClientRect !== strundefined ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		offsetParent: function() {
			return this.map(function() {
				var offsetParent = this.offsetParent || docElem;

				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || docElem;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : window.pageXOffset,
						top ? val : window.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	});

	// Support: Safari<7+, Chrome<37+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	});


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		});
	});


	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	//if ( typeof define === "function" && define.amd ) {
	//	define( "jquery", [], function() {
	//		return jQuery;
	//	});
	//}
		if ("function" === "function" && __webpack_require__(5).cmd) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
				module.exports = jQuery;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}



	var
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( typeof noGlobal === strundefined ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;

	}));


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
	var welcomediv = document.getElementById('welcome_pag');
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
	            console.log();
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
	        this.on('init', function(){
	            //var hash = window.location.hash;
	            //hash || (hash = app.defaultHash)
	            //riot.route(hash);
	        });

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