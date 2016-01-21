# vmark
test
<div class="note_section" sectionId="{_id}">
        <div style="line-height: 48px;height:48px;border-bottom: 1px solid #ddd;margin-bottom: 20px">
            <img style="width:32px;height:32px" src="/public/images/111.jpeg"/>&nbsp&nbsp
            <label>包三哥</label> &nbsp&nbsp
            <span>{formatDate(new Date())}</span>
            <input onclick="{submitSectionNote}" type="button" class="send_btn weui_btn weui_btn_mini weui_btn_primary" if="{!section.parent || (section.parent && section.status === 'dr')}" value="提交"/>
        </div>
        <div class="noteItems">
            <div each="{section.mates}" noteId="{_id}">
                <div if="{txt}" class="">{txt}</div>
                <div if="{img}" class="">{img}</div>
                <div if="{voi}" class="">{voi}</div>
            </div>
        </div>
        <div class="featureArea" if="{section && !section.parentNote || (section && section.status === 'dr')}">
            <input onclick="{viewModel.toggleTxtVoiBtn.toggle}" class="toggleBtn_txt_voi" />
            <textarea if="{viewModel.toggleTxtVoiBtn.txt}" oninput="{noteEditInput}" placeholder="点击添加文字..." type="text" name="txtInput"></textarea>
            <input if="{viewModel.toggleTxtVoiBtn.voi}" class="recordBtn" type="button" value="按住  说话"/>
            <input if="{viewModel.input.editTxt}" onclick="{addItem}" class="send_btn weui_btn weui_btn_mini weui_btn_primary" type="button" value="发送"/>
            <input if="{viewModel.input.wait}" class="menuBtn"/>
        </div>
    </div>
    <style>
            .noteItems div{
                height: 32px;
                line-height: 32px;
            }
            .note_section{
                width: 80%;
                border: 1px solid #ddd;
                margin: 15px auto;
                background: white;
                padding: 10px;
            }
            .note_section .featureArea{
                margin-top: 10px;
                position: relative;
            }
            .note_section .featureArea .send_btn{
                display: block;
                float: right;
                height: 32px;
            }
            .note_section textarea{
                height: 32px;
                line-height: 32px;
                position: absolute;
                bottom: 2px;
                margin: 0px auto;
                left: 50px;
                display: block;
                width: -webkit-calc(100% - 100px);
                width: -moz-calc(100% - 100px);
                width: calc(100% - 100px);
                border: none;
                border-bottom: 1px solid #18c54b;
                font-size: 14px;
            }
            .recordBtn{
                position: absolute;
                bottom: 2px;
                margin: 0px auto;
                left: 50px;
                display: block;
                width: -webkit-calc(100% - 100px);
                width: -moz-calc(100% - 100px);
                width: calc(100% - 100px);
                border: 1px solid #b2b2b2;
                height: 32px;
                color: #888;
                line-height: 32px;
                background: none;
                border-radius: 3px;
                font-size: 14px;
            }
            .toggleBtn_txt_voi{
                width: 32px;
                height: 32px;
                border-radius: 50em;
                border: 1px solid #ddd;
            }
            .menuBtn{
                width: 32px;
                height: 32px;
                border-radius: 50em;
                border: 1px solid #ddd;
                display: block;
                float: right;
            }
        </style>
    <script>
        //private properties
        var self = this;
        var saveNoteInSection = domain.action('saveSectionNote');
        var updateNode = domain.action('updateNode');
        //private method
        var mixin = function(t, s){
            for(var p in s){
                t[p] = s[p]
            }
        };
        console.log("*****************");
        //instance properties
        self.section = this.opts.section;
        console.warn(this.opts)
        //instance method
        self.init = function(){
            self.txtInput.value = '';
            self.section = {
                mates: []
            }
        };
        self.formatDate = function(date){
            return new Date(date).toLocaleString();
        };
        self.viewModel = {
            toggleTxtVoiBtn: {
                txt: true,
                voi: false,
                toggle: function(){
                    var me = self.viewModel.toggleTxtVoiBtn;
                    me.txt = !me.txt;
                    me.voi = !me.voi;
                }
            },
            input: {
                wait: true,
                editTxt: false,
                doWait: function(){
                    this.wait = true;
                    this.editTxt = false;
                },
                doEdit: function(){
                    this.wait = false;
                    this.editTxt = true;
                }
            }
        };
        noteEditInput(e){
            var txtVal = e.currentTarget.value.trim();
            if(txtVal){
                self.viewModel.input.doEdit();
            }else{
                self.viewModel.input.doWait();
            }

        }
        addItem(e){
            if(self.txtInput.value.trim() === ''){
                return;
            }
            saveNoteInSection.newInvocation({
                txt: self.txtInput.value,
                parent: self.section.parent || '',
                pageNoteId: self.parent.pageNote._id
            }).onDone(function(data){
                mixin(self.section, data.sectionNote);
                self.section.mates.push(data.note);
                self.txtInput.value = '';
                self.viewModel.input.doWait();
                self.update();
            }).execute();
        }
        submitSectionNote(e){
            if(!self.section._id
                    || (self.section && self.section.mates && self.section.mates.length <=0)){
                return;
            }
            updateNode.newInvocation({
                status: 'pb',
                id: self.section._id
            }).onDone(function(data){
                mixin(self.section, data);
                self.parent.pageNote.mates.push(self.section);
                self.init();
                self.parent.viewModel.doView();
                self.parent.update();
            }).execute();
        }
    </script>










    <script type="riot/tag">

            <note-edit>
                <div if="{!hidden}">
                    <note-menu></note-menu>
                    <div class="wrapper">
                        <div>
                            <input class="title" onblur="{updatePageNote}" type="text" value="{pageNote.title}" placeholder="添加标题" name="titleInput"/>
                            <hr style="margin-bottom: 10px"/>
                        </div>
                        <div>
                            <img style="width:32px;height:32px" src="/public/images/111.jpeg"/>
                            <label>包三哥</label>
                            <span>{formatDate(new Date())}</span>
                        </div>
                        <div>
                            <!--<note-section each="{pageNote.mates}" section="{this}"></note-section>-->
                            <note-section section="{newSection}" if="{viewModel.EDIT}">{JSON.stringify(newSection)}</note-section>
                            <ul class="btn-group" onclick="{selectOperate}">
                                <li><a class="weui_btn weui_btn_mini weui_btn_primary">文字</a></li>
                                <li><a class="weui_btn weui_btn_mini weui_btn_primary">图片</a></li>
                                <li><a class="weui_btn weui_btn_mini weui_btn_primary">语音</a></li>
                                <li><a class="weui_btn weui_btn_mini weui_btn_primary">小视频</a></li>
                            </ul>
                        </div>
                        <div>
                            <span if="{pageNote.parentNote}">{pageNote.txt}</span>
                        </div>
                    </div>
                    <style scoped>
                        :focus{
                            outline: none;
                        }
                        .wrapper{
                            padding: 10px;
                        }
                        .title{
                            font-size: 16px;
                            display: inline-block;
                            height:30px;
                            line-height: 30px;
                            background: transparent;
                            border: none;
                        }
                        .note_items div{
                            height: 40px;
                            line-height: 40px;
                        }
                        body{
                            font-size: 14px;
                        }
                        .btn-group li{
                            float:left;
                            padding:10px;
                        }
                    </style>
                        "use strict";
                        //private properties
                        var self = nest.presentable(this);
                        var loadNote = domain.action('loadNote');
                        var updateNote = domain.action('updateNode');
                        //instance properties
                        self.newSection = {};
                        self.newSection.mates = [];
                        self.viewModel = {
                            'EDIT': false,
                            'VIEW': false,
                            doEdit: function(){
                                self.viewModel.EDIT = true;
                                self.viewModel.VIEW = false;
                            },
                            doView: function(){
                                self.viewModel.EDIT = false;
                                self.viewModel.VIEW = true;
                            }
                        };
                        //instance methods
                        self.formatDate = function(date){
                            return new Date(date).toLocaleString();
                        };
                        self.formatDateForMates = util.formatDateForComments;
                        self.pageNote = null;
                        self.init = function(){
                            self.pageNote = {
                                title: null,
                                comments: null,
                                crtOn: null,
                                _id: null
                            };
                            self.titleInput.value = '';
                            wx.onMenuShareTimeline({
                                title: '测试分享主题',
                                link: getLink(),
                                imgUrl: '',
                                success: function(){

                                },
                                cancel: function(){

                                }
                            });
                            function getLink(){
                            }
                        };
                        this.updatePageNote = function(e){
                            var title = e.currentTarget.value;
                            if(!title){
                                return;
                            }
                            updateNote.execute({
                                id: self.pageNote._id,
                                title: title
                            });
                        }
                        this.selectOperate = function(e){
                            if(e.target.nodeName === 'A'){
                                var liNode = e.target;
                                self.viewModel.doEdit();
                                self.update();
                            }
                        }
                        function onLoadNote(data){
                            if(data){
                                self.pageNote = data;
                            }
                            self.trigger('ready', false);
                            self.trigger('view-route-to');
                            self.update();
                        }
                        this.on('mount', function(){
                            loadNote.onDone(onLoadNote);
                        });
                        this.on('unmount', function(){
                            loadNote.offDone(onLoadNote);
                        });
                        this.on('open', function(options){
                            self.init();
                            try{
                                self.pageNote._id = window.location.pathname.match(/_(\w+)/g)[0].substr(1);
                            }catch(e){
                                alert('无效的链接');
                            }
                            console.info('tag pageNote new is opening');
                            loadNote.execute({
                                noteId: self.pageNote._id
                            });
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
                            //_refresh();
                        });
                </div>
            </note-edit>
            <note-menu>
                <div>头部</div>
                <style scoped>
                    div{
                        height: 30px;
                        line-height: 30px;
                        background: #989898;
                        text-align: center;
                        color: white;
                    }
                </style>
            </note-menu>
            <note-section>
                <div class="note_section" sectionId="{_id}">
                    <div style="line-height: 48px;height:48px;border-bottom: 1px solid #ddd;margin-bottom: 10px">
                        <img style="width:32px;height:32px" src="/public/images/111.jpeg"/>&nbsp&nbsp
                        <label>包三哥</label> &nbsp&nbsp
                        <span if="{section.parentNote && section.status != 'dr'}">{formatDate(new Date())}</span>
                        <input onclick="{submitSectionNote}" type="button" class="send_btn weui_btn weui_btn_mini weui_btn_primary" if="{!section.parentNote || (section.parentNote && section.status === 'dr')}" value="提交"/>
                    </div>
                    <div class="noteItems">
                        <div each="{section.mates}" noteId="{_id}">
                            <div if="{txt}" class="">{txt}</div>
                            <div if="{img}" class="">{img}</div>
                            <div if="{voi}" class="">{voi}</div>
                        </div>
                    </div>

                </div>
                <style scoped>
                    .noteItems div{
                        height: 32px;
                        line-height: 32px;
                    }
                    .note_section{
                        width: 80%;
                        border: 1px solid #ddd;
                        margin: 15px auto;
                        background: white;
                        padding: 10px;
                    }
                    .note_section .featureArea{
                        margin-top: 10px;
                        position: relative;
                    }
                    .note_section .featureArea .send_btn{
                        display: block;
                        float: right;
                        height: 32px;
                    }
                    .note_section textarea{
                        height: 32px;
                        line-height: 32px;
                        position: absolute;
                        bottom: 2px;
                        margin: 0px auto;
                        left: 50px;
                        display: block;
                        width: -webkit-calc(100% - 100px);
                        width: -moz-calc(100% - 100px);
                        width: calc(100% - 100px);
                        border: none;
                        border-bottom: 1px solid #18c54b;
                        font-size: 14px;
                    }
                    .recordBtn{
                        position: absolute;
                        bottom: 2px;
                        margin: 0px auto;
                        left: 50px;
                        display: block;
                        width: -webkit-calc(100% - 100px);
                        width: -moz-calc(100% - 100px);
                        width: calc(100% - 100px);
                        border: 1px solid #b2b2b2;
                        height: 32px;
                        color: #888;
                        line-height: 32px;
                        background: none;
                        border-radius: 3px;
                        font-size: 14px;
                    }
                    .toggleBtn_txt_voi{
                        width: 32px;
                        height: 32px;
                        border-radius: 50em;
                        border: 1px solid #ddd;
                    }
                    .menuBtn{
                        width: 32px;
                        height: 32px;
                        border-radius: 50em;
                        border: 1px solid #ddd;
                        display: block;
                        float: right;
                    }
                </style>
                    //private properties
                    console.log("*****************");
                    console.error(this.opts);
                    var self = this;
                    var saveNoteInSection = domain.action('saveSectionNote');
                    var updateNode = domain.action('updateNode');
                    //private methods
                    var mixin = function(t, s){
                        for(var p in s){
                            t[p] = s[p]
                        }
                    };
                    //instance properties
                    self.section = this.opts.section;
                    console.warn(this.opts)
                    //instance methods
                    self.init = function(){
                        self.txtInput.value = '';
                        self.section = {
                            mates: []
                        }
                    };
                    self.formatDate = util.formatDateForComments;
                    self.viewModel = {
                        toggleTxtVoiBtn: {
                            txt: true,
                            voi: false,
                            toggle: function(){
                                var me = self.viewModel.toggleTxtVoiBtn;
                                me.txt = !me.txt;
                                me.voi = !me.voi;
                            }
                        },
                        input: {
                            wait: true,
                            editTxt: false,
                            doWait: function(){
                                this.wait = true;
                                this.editTxt = false;
                            },
                            doEdit: function(){
                                this.wait = false;
                                this.editTxt = true;
                            }
                        }
                    };
                    this.noteEditInput = function(e){
                        var txtVal = e.currentTarget.value.trim();
                        if(txtVal){
                            self.viewModel.input.doEdit();
                        }else{
                            self.viewModel.input.doWait();
                        }

                    }
                    this.addItem = function(e){
                        if(self.txtInput.value.trim() === ''){
                            return;
                        }
                        saveNoteInSection.newInvocation({
                            txt: self.txtInput.value,
                            parentNote: self.section.parentNote || '',
                            pageNoteId: self.parent.pageNote._id
                        }).onDone(function(data){
                            mixin(self.section, data.sectionNote);
                            self.section.mates.push(data.note);
                            self.txtInput.value = '';
                            self.viewModel.input.doWait();
                            self.update();
                        }).execute();
                    }
                    this.submitSectionNote = function(e){
                        if(!self.section._id
                                || (self.section && self.section.mates && self.section.mates.length <=0)){
                            return;
                        }
                        updateNode.newInvocation({
                            status: 'pb',
                            id: self.section._id
                        }).onDone(function(data){
                            mixin(self.section, data);
                            self.parent.pageNote.mates.push(self.section);
                            self.init();
                            self.parent.viewModel.doView();
                            self.parent.update();
                        }).execute();
                    }
            </note-section>
            </script>