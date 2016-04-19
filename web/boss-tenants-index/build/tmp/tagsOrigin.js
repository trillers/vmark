riot.tag('alert', '<div class="alert-container" if="{opts.validators.length}"> <div style="width: 300px; margin: 0px auto;" class="alert {alert-warning: !opts.validator.success, alert-success: opts.validator.success} alert-dismissible fade in" role="alert"> <button onclick="{onCancel}" type="button" class="close" aria-label="Close"><span aria-hidden="true">×</span></button> <p each="{validator in opts.validators}"><strong>{validator.field && (\'【\' + validator.field + \'】\')}</strong> {validator.desc}</p> </div> </div>', 'alert .alert-container{ top: 60px; width: 100%; }', function(opts) {
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