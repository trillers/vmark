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