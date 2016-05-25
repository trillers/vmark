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

	var Spa = __webpack_require__(25);
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

	app.routeView('tenants/edit/_:id', nest.viewable({
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

	app.routeView('tenants/_:id', nest.viewable({
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
	  riot.route(hash);
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

	module.exports=function(){riot.tag('alert', '<div class="alert-container" if="{opts.validators.length}"> <div style="width: 300px; margin: 0px auto;" class="alert {alert-warning: !opts.validator.success, alert-success: opts.validator.success} alert-dismissible fade in" role="alert"> <button onclick="{onCancel}" type="button" class="close" aria-label="Close"><span aria-hidden="true">×</span></button> <p each="{validator in opts.validators}"><strong>{validator.field && (\'【\' + validator.field + \'】\')}</strong> {validator.desc}</p> </div> </div>', 'alert .alert-container{ top: 60px; width: 100%; }', function(opts) {
	        var self = this;
	        this.onCancel = function(e){
	            self.opts.clear();
	            self.update();
	        };
	    
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
	            return targetRoute === currentRoute;
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

	domain.action('loadWechatSiteSettings').onExecute(function(id){
	    apiFactory.get('/tenant/wechatsite/settings/load?id=' + id).drive(this).send();
	});

	domain.action('saveWechatSiteSettings').onExecute(function(data){
	    apiFactory.post('/tenant/wechatsite/settings/save').drive(this).send(data);
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

	domain.action('findPoints').onExecute(function(data){
	    var querystring = Object.keys(data.filter).map(function(k){
	        return k + "=" + data.filter[k]
	    }).join("&");
	    apiFactory.get('/tenant/sd/points?' + querystring).drive(this).send();
	});

	domain.action('consumePoints').onExecute(function(data){
	    apiFactory.post('/tenant/sd/points/consume').drive(this).send(data);
	});

	domain.action('pointsRecords').onExecute(function(data){
	    apiFactory.post('/tenant/sd/points/records').drive(this).send(data);
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