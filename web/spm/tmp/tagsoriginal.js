riot.tag("note-comment",'<div class="feature_area"> <div> <div class="txt_area"> <input oninput="{noteEditInput}" name="txtInput" placeholder="点击输入文字" value=""> </div> <div class="toggle_menu"> <div onclick="{addComment}" class="send_btn" if="{viewModel.input.editTxt}">发送</div> </div> </div> <div style="clear: both"></div> </div>',"note-comment .feature_area{ height: 48px; background: white; width: 100%; overflow: hidden; } note-comment .feature_area >div{ overflow: hidden; margin-top: 8px; } note-comment .feature_area >div >div{ height: 32px; float:left; } note-comment .feature_area .toggle_txt_voi{ width:15%; } note-comment .feature_area .txt_area{ width: 70%; } note-comment .feature_area .voi_area{ width: 70%; } note-comment .feature_area .voi_area input{ width: 100%; height: 32px; box-sizing: border-box; border: 1px solid #ccc; font-size: 16px; border-radius: 5px; text-align: center; color: #ccc; } note-comment .feature_area .txt_area input{ width: 100%; height: 32px; box-sizing: border-box; border: none; border-bottom: 1px solid #ccc; font-size: 16px; } note-comment .feature_area .toggle_menu{ width: 15%; } note-comment .feature_area .send_btn{ margin: 0px auto; width: 60px; height: 32px; line-height: 32px; border: 1px solid #ccc; box-sizing:border-box; border-radius: 5px; background: #18c54b; border: none; text-align: center; color: white; } note-comment .feature_area .toggle_btn{ margin: 0px auto; width: 32px; height: 32px; border-radius: 50em; border: 1px solid #ccc; box-sizing:border-box; }",function(t){var e=this,i=domain.action("saveComment");e.viewModel={input:{wait:!0,editTxt:!1,doWait:function(){this.wait=!0,this.editTxt=!1},doEdit:function(){this.wait=!1,this.editTxt=!0}}},e.addComment=function(t){""!==e.txtInput.value.trim()&&i.newInvocation({note:e.parent.currComment._id,interaction:{initiator:e.parent.user._id,content:e.txtInput.value.trim()}}).onDone(function(t){e.txtInput.value="",e.viewModel.input.doWait(),e.parent.trigger("noteComment",t.comment)}).execute()},e.noteEditInput=function(t){var i=t.currentTarget.value.trim();i?e.viewModel.input.doEdit():e.viewModel.input.doWait()}});
riot.tag("note-edit",'<div if="{!hidden}"> <note-menu></note-menu> <div class="wrapper"> <div> <input class="title" onblur="{updatePageNote}" type="text" value="{pageNote.title}" placeholder="添加标题" name="titleInput"> <hr style="margin-bottom: 10px"> </div> <div> <img style="width:32px;height:32px" riot-src="{user.headimgurl}"> <label>{user.nickname}</label> <span>{formatDate(new Date())}</span> </div> <div> <button onclick="{goToAuthorize}">去授权</button> </div> <div> <note-section each="{item in pageNote.mates}" section="{item}"></note-section> <note-section if="{currNote === newSection}" section="{newSection}" new="true"></note-section> </div> <ul class="btn-group" onclick="{selectOperate}"> <li><a class="weui_btn weui_btn_mini weui_btn_primary">文字</a></li> <li><a class="weui_btn weui_btn_mini weui_btn_primary">图片</a></li> <li><a class="weui_btn weui_btn_mini weui_btn_primary">语音</a></li> <li><a class="weui_btn weui_btn_mini weui_btn_primary">小视频</a></li> </ul> <div> <span if="{pageNote.parentNote}">{pageNote.txt}</span> </div> <div style="clear: both"></div> </div> <note-footer if="{Object.keys(currNote).length}"></note-footer> <note-comment if="{currComment}"></note-comment> </div>',"note-edit :focus{ outline: none; } note-edit .wrapper{ padding: 10px; } note-edit .title{ font-size: 16px; display: inline-block; height:30px; line-height: 30px; background: transparent; border: none; } note-edit .note_items div{ height: 40px; line-height: 40px; } note-edit body{ font-size: 14px; } note-edit .btn-group{ list-style-type: none; } note-edit .btn-group li{ float:left; padding:10px; }",function(e){"use strict";var t=nest.presentable(this),n=window.location.href,o=domain.action("loadNote"),i=domain.action("updateNote"),a=function(e){e.error?alert(e.error.message):util.mixin(t.pageNote,e)},r=function(e){if(e&&(t.pageNote=e,t.pageNote.mates&&t.pageNote.mates.length)){var n=t.pageNote.mates.filter(function(e){return"dr"===e.status?e:void 0});n&&n.length&&(t.pageNote.mates=util.arr.rest(t.pageNote.mates,n),t.newSection=n[0],t.selectNote(t.newSection))}t.trigger("ready",!1),t.trigger("view-route-to"),t.update()};t.pageNote=null,t.newSection={},t.newSection.mates=[],t.currNote={},t.currComment=null,t.user=__page.user,t.user.headimgurl=t.user.headimgurl||"/public/images/def-avatar.png",t.formatDate=function(e){return new Date(e).toLocaleString()},t.formatDateForMates=util.formatDateForComments,t.init=function(){t.pageNote={title:null,comments:null,crtOn:null,_id:null},t.titleInput.value="",wx.onMenuShareTimeline({title:t.pageNote.title||"记易",link:n,imgUrl:__page.baseUrl+"/public/images/share.jpeg",success:function(){},cancel:function(){}}),wx.onMenuShareAppMessage({title:t.pageNote.title||"记易",desc:"",link:n,imgUrl:"",success:function(){},cancel:function(){}})},t.on("cancel",function(e){t.currNote=null,t.update()}),t.on("comment",function(e){t.currComment=e,t.currNote=null,t.update()}),t.on("noteComment",function(e){t.currComment.comments.push(e),t.update()}),t.updatePageNote=function(e){var n=e.currentTarget.value;n&&i.execute({id:t.pageNote._id,title:n})},t.selectNote=function(e,n){t.currNote=e,t.currComment=null,t.update()},t.selectOperate=function(e){if("A"===e.target.nodeName){e.target;t.selectNote(t.newSection)}},t.on("noteSubmit",function(){t.currNote=null,t.newSection={},t.newSection.mates=[],t.update()}),t.on("noteSave",function(){t.update()}),t.on("active",function(e){t.selectNote(e.section,e)}),t.on("mount",function(){o.onDone(r),i.onDone(a)}),t.on("unmount",function(){o.offDone(r),i.onDone(a)}),t.on("open",function(e){t.init();try{t.pageNote._id=window.location.pathname.match(/_(\w+)/g)[0].substr(1)}catch(n){alert("无效的链接")}console.info("tag pageNote new is opening"),o.execute({noteId:t.pageNote._id})}),t.on("leave",function(){t.mask=!0,t.update()}),t.on("reenter",function(){t.mask=!1,t.update()}),t.on("refresh",function(){console.info("tag group index is refreshing")}),this.goToAuthorize=function(e){var t="/auth/authorize?";t+="route=get_user_info&returnUrl="+location.href,location.href=t}.bind(this)});
riot.tag("note-footer",'<div class="record_detail_area"> <div class="record-el-container"> <div class="record_progress_bar"> <div class="record_progress_inner_bar js_progress" style="width: 0%;"></div> </div> <div class="voice-seconds-container" style="color: white"> <span id="voice-seconds">0</span>" </div> <div class="recording-gif voi_area-el"> <img src="/public/images/111.jpeg" style="width: 30px; height: 60px" alt=""> </div> <div class="voice-func-btn voi_area-el"> <div id="stop-record" onclick="{stopRecord}"></div> <div id="play-record" onclick="{playRecord}"></div> <div id="pause-record" onclick="{pauseRecord}"></div> </div> <div class="voice-confirm-area voi_area-el"> <div id="confirm-sub-voice" class="weui_icon_success_no_circle" onclick="{confirmSubVoice}"></div> </div> </div> </div> <div class="feature_area"> <div> <div class="toggle_txt_voi"> <div onclick="{viewModel.toggleTxtVoiBtn.toggle}" class="toggle_btn"></div> </div> <div if="{viewModel.toggleTxtVoiBtn.txt}" class="txt_area"> <input oninput="{noteEditInput}" name="txtInput" placeholder="点击输入文字" value=""> </div> <div if="{viewModel.toggleTxtVoiBtn.voi}" class="voi_area" ontouchstart="{voiceAreaTouchStart}" ontouchend="{voiceAreaTouchEnd}"> <input type="button" value="长按录音"> </div> <div class="toggle_menu"> <div onclick="{toggleSubMenu}" class="toggle_btn menu_btn" if="{viewModel.input.wait}">菜单</div> <div onclick="{addTxt}" class="send_btn" if="{viewModel.input.editTxt}">发送</div> </div> </div> <div style="clear: both"></div> </div> <div if="{viewModel.subMenu.showState}" class="scale_area"> <ul> <li class="img_btn" onclick="{addImgs}">图片</li> <li class="video_btn">视频</li> </ul> </div>',"note-footer .record_progress_bar { margin-top: 10px; background-color: #EBEBEB; height: 3px; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; } note-footer .record_progress_inner_bar { width: 0; height: 100%; background-color: #09BB07; } note-footer .record_detail_area{ -webkit-user-select: none; display: none; position: absolute; float: left; bottom: 0px; width: 100%; height: 140px; background-color: rgba(51, 51, 51, 0.5); z-index: 999; } note-footer .scale_area{ height: 96px; border-top: 1px solid #ccc; background: white; } note-footer .scale_area ul{ width: 80%; list-style-type: none; margin: 0px auto; padding: 0px; margin-top: 28px; overflow: hidden; } note-footer .scale_area ul li{ float: left; margin-left: 10%; width: 40px; height: 40px; border: 1px solid #ccc; } note-footer .scale_area ul li:first-child{ float: left; margin-left: 0px; } note-footer .scale_area .img_btn{ } note-footer .feature_area{ height: 48px; background: white; width: 100%; overflow: hidden; } note-footer .feature_area >div{ overflow: hidden; margin-top: 8px; } note-footer .feature_area >div >div{ height: 32px; float:left; } note-footer .feature_area .toggle_txt_voi{ width:15%; } note-footer .feature_area .txt_area{ width: 70%; } note-footer .feature_area .voi_area{ width: 70%; } note-footer .feature_area .voi_area input{ width: 100%; height: 32px; box-sizing: border-box; border: 1px solid #ccc; font-size: 16px; border-radius: 5px; text-align: center; color: #ccc; } note-footer .feature_area .txt_area input{ width: 100%; height: 32px; box-sizing: border-box; border: none; border-bottom: 1px solid #ccc; font-size: 16px; } note-footer .feature_area .toggle_menu{ width: 15%; } note-footer .feature_area .send_btn{ margin: 0px auto; width: 60px; height: 32px; line-height: 32px; border: 1px solid #ccc; box-sizing:border-box; border-radius: 5px; background: #18c54b; border: none; text-align: center; color: white; } note-footer .feature_area .toggle_btn{ margin: 0px auto; width: 32px; height: 32px; border-radius: 50em; border: 1px solid #ccc; box-sizing:border-box; } note-footer .feature_area .scale_area{ height: 48px; } note-footer .voi_area-el{ margin-top: 5px; float: left; margin-left: 40px; } note-footer .record-el-container{ width: 80%; margin: 0 auto; } note-footer #stop-record{ background: url(/web/images/stop-active.png); width: 72px; height: 72px; background-color: white; border-radius: 40px; } note-footer #play-record{ display: none; background: url(/web/images/start-active.png); width: 72px; height: 72px; background-color: white; border-radius: 40px; } note-footer #pause-record{ display: none; background: url(/web/images/start-active.png); width: 72px; height: 72px; background-color: white; border-radius: 40px; } note-footer #confirm-sub-voice{ display: none; } note-footer #confirm-sub-voice::before{ font-size: 45px; }",function(e){var o=this,t=domain.action("saveNotesInSection"),i=domain.action("saveNoteInSection");o.viewModel={toggleTxtVoiBtn:{txt:!0,voi:!1,toggle:function(){var e=o.viewModel.toggleTxtVoiBtn;e.txt=!e.txt,e.voi=!e.voi}},subMenu:{showState:!1,toggle:function(){var e=o.viewModel.subMenu;e.showState=!e.showState},show:function(){var e=o.viewModel.subMenu;e.showState=!0},hide:function(){var e=o.viewModel.subMenu;e.showState=!1}},input:{wait:!0,editTxt:!1,doWait:function(){this.wait=!0,this.editTxt=!1},doEdit:function(){this.wait=!1,this.editTxt=!0}}},o.addTxt=function(e){""!==o.txtInput.value.trim()&&i.newInvocation({type:"txt",content:o.txtInput.value.trim(),parentNote:o.parent.currNote._id||"",pageNoteId:o.parent.pageNote._id}).onDone(function(e){util.mixin(o.parent.currNote,e.sectionNote),o.parent.currNote.mates.push(e.note),o.txtInput.value="",o.viewModel.input.doWait(),o.parent.trigger("noteSave",e.note)}).execute()},o.addImgs=function(e){wx.chooseImage({count:9,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var i=e.localIds.map(function(e){return{type:"img",url:e,parentNote:o.parent.currNote._id||"",pageNoteId:o.parent.pageNote._id}});t.newInvocation({notes:i}).onDone(function(e){e?(o.parent.currNote.mates||(o.parent.currNote.mates=[]),e.parentNote&&util.mixin(o.parent.currNote,e.parentNote),o.parent.currNote.mates=o.parent.currNote.mates.concat(e.mates),o.parent.trigger("noteSave",e)):alert("error occur.")}).execute()}})},o.noteEditInput=function(e){var t=e.currentTarget.value.trim();t?o.viewModel.input.doEdit():o.viewModel.input.doWait()},o.toggleSubMenu=function(e){o.viewModel.subMenu.toggle()};var r,a,n,c={},d=!1;wx.ready(function(){console.log("ready"),wx.onVoiceRecordEnd({complete:function(e){console.error("end"),n=(new Date).getTime(),$("#stop-record").hide(),$("#play-record").show(),$("#confirm-sub-voice").show();var o=e.localId;c.localId=o}}),wx.onVoicePlayEnd({success:function(e){e.localId}})}),o.voiceAreaTouchStart=function(e){console.error("startRecord"),a=(new Date).getTime(),r=setTimeout(function(){function e(){t.css({width:o+"%"}),i.css({"padding-left":o+"%"}),$("#voice-seconds").text(r.toFixed(0)),o+=.05,r+=.03,100>o?d||setTimeout(e,30):(t.css({width:"100%"}),i.css({"padding-left":"100%"}),$("#voice-seconds").text(60))}wx.startRecord(),$(".record_detail_area").show();var o=0,t=$(".js_progress"),i=$(".voice-seconds-container"),r=0;e()},300)},o.voiceAreaTouchEnd=function(e){console.error("touchend"),n=(new Date).getTime(),300>n-a&&(n=0,a=0,clearTimeout(r))},o.stopRecord=function(e){d=!0,n=(new Date).getTime(),wx.stopRecord({success:function(e){console.log(e),$("#stop-record").hide(),$("#play-record").show(),$("#confirm-sub-voice").show();var o=e.localId;c.localId=o}})},o.playRecord=function(e){wx.playVoice({localId:c.localId}),$("#play-record").hide(),$("#pause-record").show()},o.pauseRecord=function(e){wx.pauseVoice({localId:c.localId}),$("#pause-record").hide(),$("#play-record").show()},o.confirmSubVoice=function(e){$(".record_detail_area").hide();var t=((n-a)/1e3).toFixed(0);a=0,n=0,$(".js_progress").css({width:"0%"}),$(".voice-seconds-container").css({"padding-left":"0%"}),$("#voice-seconds").text(0),d=!1,$("#stop-record").show(),$("#play-record").hide(),$("#confirm-sub-voice").hide(),$("#pause-record").hide();var r={type:"voi",url:c.localId,seconds:t,parentNote:o.parent.currNote._id||"",pageNoteId:o.parent.pageNote._id};wx.pauseVoice({localId:c.localId}),i.newInvocation(r).onDone(function(e){e?(util.mixin(o.parent.currNote,e.sectionNote),o.parent.currNote.mates.push(e.note),o.parent.trigger("noteSave",e.note)):alert("error occur.")}).execute()}});
riot.tag("note-menu","<div>头部</div>","note-menu div{ height: 30px; line-height: 30px; background: #989898; text-align: center; color: white; }",function(e){});
riot.tag("note-new",'<div if="{!hidden}"> <note-menu></note-menu> <div> <input type="text" placeholder="添加标题" name="titleInput"> </div> <div> <img > <label>包三哥</label> <span>{formatDate(new Date())}</span> </div> <div> <input type="text" value="" name="txtInput"> <ul>    </ul> </div> <note-footer cmds="{footerCmds}"></note-footer> </div>',".headimg_size_m{ width: 48px; height: 48px; }",function(t){function e(t){return console.error(t),t?riot.route("note/_"+t._id):void alert("failed to save note")}var n=nest.presentable(this),i=domain.action("saveNote");n.formatDate=function(t){var e=new Date(t).toLocaleString();return e.replace(/\//g,"-")},n.note=null,n.state={EDIT:!1,VIEW:!1},n.save=function(){return n.titleInput.value&&n.txtInput.value?void i.execute({txt:n.txtInput.value,title:n.titleInput.value}):void alert("请输入标题和文字")},n.cancel=function(){n.init()},n.footerCmds=[{name:"保存",method:n.save},{name:"取消",method:n.cancel}],n.init=function(){function t(){}n.note={title:null,comments:null,crtOn:null,_id:null},n.txtInput.value="",n.titleInput.value="",wx.onMenuShareTimeline({title:"测试分享主题",link:t(),imgUrl:"",success:function(){},cancel:function(){}})},this.on("mount",function(){i.onDone(e)}),this.on("unmount",function(){i.offDone(e)}),this.on("open",function(t){n.init(),n.note._id=t._id,console.info("tag note new is opening"),n.trigger("ready",!1),n.trigger("view-route-to"),n.update()}),this.on("leave",function(){n.mask=!0,n.update()}),this.on("reenter",function(){n.mask=!1,n.update()}),this.on("refresh",function(){console.info("tag group index is refreshing")})});
riot.tag("note-section",'<div class="note_section" sectionid="{_id}"> <div style="line-height: 48px;height:48px;border-bottom: 1px solid #ddd;margin-bottom: 10px"> <img style="width:32px;height:32px" riot-src="{initiator.headimgurl}">&nbsp&nbsp <label>{initiator.nickname}</label> &nbsp <span style="font-size: 12px;color:#888" if="{section.parentNote && section.status != \'dr\'}">{formatDate(new Date(section.crtOn))}</span> <input onclick="{submitSectionNote}" if="{isOnEdit()}" value="提交" type="button" class="send_btn weui_btn weui_btn_mini weui_btn_primary"> <input onclick="{cancelSectionNote}" if="{isOnEdit()}" value="取消" type="button" class="send_btn weui_btn weui_btn_mini weui_btn_primary"> <input onclick="{clearTrash}" if="{isOnEdit() && trash.length>0}" value="删除" type="button" class="send_btn weui_btn weui_btn_mini weui_btn_warn"/> <input onclick="{editSectionNote}" if="{!isOnEdit() && (initiator._id === parent.user._id)}" value="编辑" type="button" class="weui_btn weui_btn_mini weui_btn_primary"> </div> <div class="noteItems"> <div each="{section.mates}" noteid="{_id}" style="margin-top: 2px"> <div if="{parent.isOnEdit()}" style="float: left"> <b class="{weui_icon_cancel : parent.inTrash(_id), weui_icon_circle: !parent.inTrash(_id)}" onclick="{parent.pushToTrash}"></b> </div> <div if="{type===\'txt\'}" class="note_txt">{content}</div> <div if="{type===\'img\'}" class="note_img"><img style="width: 100%" riot-src="{url}"></div> <div if="{type===\'voi\'}" class="note_voi" style="float:left"><div riot-style="width: {seconds * 3 + 30}px" class="voice" onclick="{parent.playVoice}"><i class="playIcon"></i></div><span class="seconds">{seconds}"</span></div> <div style="clear: both;"></div> </div> </div> <div style="position:absolute;top:0;left:0;width:0;height:0;"> <audio id="voiceMsgPlayer" class="voicePlayer"></audio> </div> <div class="interact_box" if="{!isNew}"> <input onclick="{like}" value="赞" type="button" class="weui_btn weui_btn_mini weui_btn_primary"> <label>{section.likes.length || 0}</label> <input onclick="{comment}" value="评" type="button" class="weui_btn weui_btn_mini weui_btn_primary"> <label>{section.comments.length || 0}</label> <div class="comments" if="{parent.currComment._id === section._id}"> <ul> <li each="{section.comments}"> <img riot-src="{initiator.headimgurl}"> <span>{content}</span> <span style="font-size: 12px; float:right">{parent.formatDate(new Date(crtOn))}</span> </li> </ul> </div> </div> </div>',"note-section label{ font-size: 14px; } note-section .interact_box{ line-height: 40px; border-top: 1px solid #ddd; } note-section .interact_box .comments img{ width: 32px; height: 32px; border: none; border-radius: 50em; vertical-align: middle; } note-section .interact_box .comments span{ margin-left: 8px; font-size: 14px; color: #888; } note-section .interact_box .comments ul{ margin: 0px; padding: 0px; list-style-type: none; } note-section .interact_box .comments ul li{ height: 48px; line-height: 48px; border-bottom: 1px solid #eee; } note-section .interact_box .comments ul li:last-child{ border-bottom: none; } note-section .noteItems div{ line-height: 31px; } note-section .noteItems div .note_img{ width:100%; } note-section .note_section{ width: 94%; border: 1px solid #ddd; margin: 15px auto; background: white; padding: 10px; padding-bottom: 0px; font-size: 14px; } note-section .note_section .featureArea{ margin-top: 10px; position: relative; } note-section .note_section .featureArea .send_btn{ display: block; float: right; height: 32px; } note-section .note_section textarea{ height: 32px; line-height: 32px; position: absolute; bottom: 2px; margin: 0px auto; left: 50px; display: block; width: -webkit-calc(100% - 100px); width: -moz-calc(100% - 100px); width: calc(100% - 100px); border: none; border-bottom: 1px solid #18c54b; font-size: 14px; } note-section .voice{ float: left; background-color: #04BE02; border-radius: 7px; } note-section .seconds{ float: left; font-size: 12px; margin-left: 5px; } note-section .playIcon{ background: url('/web/images/wx-icon.png') 0 -2428px; background-size: 150px 2489px; width: 23px; height: 23px; vertical-align: middle; display: inline-block; }",function(t){var e=this,i=(domain.action("saveNoteInSection"),domain.action("updateNote"),domain.action("deleteNotes")),n=domain.action("publishNote"),o=(domain.action("saveNotesInSection"),domain.action("uploadImage")),s=domain.action("uploadVoice"),a=domain.action("likeNote"),c=domain.action("unlikeNote");e.section=this.opts.section,e.isNew=!!this.opts["new"],e.parent=e.isNew?e.parent:e.parent.parent,e.initiator=e.section.initiator||e.parent.user,e.initiator.headimgurl=e.initiator.headimgurl||"/public/images/def-avatar.png",e.isOnEdit=function(){return e.isNew?!e.section.parentNote||e.section.parentNote&&"dr"===e.section.status:e.parent.currNote===e.section},e.trash=[],e.inTrash=function(t){return function i(e){return e[0]._id===t?!0:e.slice(1).length>0?i(e.slice(1)):!1}(e.trash)},e.viewModel={toggleTxtVoiBtn:{txt:!0,voi:!1,toggle:function(){var t=e.viewModel.toggleTxtVoiBtn;t.txt=!t.txt,t.voi=!t.voi}},input:{wait:!0,editTxt:!1,doWait:function(){this.wait=!0,this.editTxt=!1},doEdit:function(){this.wait=!1,this.editTxt=!0}}},e.init=function(){e.isNew&&(e.section={mates:[]}),e.trash=[]},e.formatDate=util.formatDateForComments,e.on("update",function(){e.section=e.opts.section}),e.pushToTrash=function(t){return e.trash.length<=0?void e.trash.push(t.item):void e.trash.forEach(function(i,n){i._id===t.item._id?e.trash.splice(n,1):n===e.trash.length-1&&e.trash.push(t.item)})},e.editSectionNote=function(t){e.init(),e.parent.selectNote(e.section)},e.clearTrash=function(){var t=e.trash.map(function(t){return t._id});i.newInvocation({notes:t}).onDone(function(t){t.success?(e.section.mates=e.section.mates.filter(function(t){for(var i=0,n=e.trash.length;n>i;i++)if(e.trash[i]._id===t._id)return!1;return!0}),e.trash=[],e.update()):alert(t.error)}).execute()},e.cancelSectionNote=function(t){e.init(),e.parent.trigger("cancel",e.section)},e.submitSectionNote=function(t){function a(){if(e.section.mates=e.section.mates.filter(function(t){for(var i=0,n=e.trash.length;n>i;i++)if(e.trash[i]._id===t._id)return!1;return!0}),e.section.mates.length<=0)return e.init(),void e.parent.trigger("noteSubmit",e.section);var t=0;e.section.mates.forEach(function(i){i.status&&"dr"!==i.status?++t===e.section.mates.length&&c():"img"===i.type&&i.url?wx.uploadImage({localId:i.url,isShowProgressTips:0,success:function(n){o.newInvocation({media_id:n.serverId}).onDone(function(n){i.url=n.url,++t===e.section.mates.length&&c()}).execute()}}):"voi"===i.type&&i.url?wx.uploadVoice({localId:i.url,isShowProgressTips:0,success:function(n){s.newInvocation({media_id:n.serverId}).onDone(function(n){i.url=n.url,++t===e.section.mates.length&&c()}).execute()}}):++t===e.section.mates.length&&c()})}function c(){n.newInvocation(e.section).onDone(function(t){try{util.mixin(e.section,t),e.isNew&&e.parent.pageNote.mates.push(e.section),e.init(),e.parent.trigger("noteSubmit",e.section)}catch(i){alert(JSON.stringify(i))}}).execute()}if(e.section._id&&!(e.section&&e.section.mates&&e.section.mates.length<=0))if(e.trash.length>0){var r=e.trash.map(function(t){return t._id});i.newInvocation({notes:r}).onDone(function(t){t.success?a():alert(t.error)}).execute()}else a()},e.comment=function(t){e.parent.trigger("comment",e.section)},e.like=function(t){var i=null;e.section.likes.length>0&&e.section.likes.forEach(function(t){t.initiator._id===e.parent.user._id&&(i=t)}),i?c.newInvocation({interaction:i._id,note:e.section._id}).onDone(function(t){t.success?(e.section.likes=e.section.likes.filter(function(t){return t.initiator._id!=e.parent.user._id}),e.update()):alert("failed to unlike item")}).execute():a.newInvocation({interaction:{initiator:e.parent.user._id},note:e.section._id}).onDone(function(t){t&&t.like?(e.section.likes.push(t.like),e.update()):alert("failed to like item")}).execute()};var r,l=!1,d="";e.playVoice=function(t){var e=t.item;"dr"===e.status?wx.playVoice({localId:e.url}):($("#voiceMsgPlayer").attr("src",e.url),clearTimeout(r),r=setTimeout(function(){l=!1},1e3*parseInt(e.seconds)),l&&d===e.url?l=!1:(document.getElementById("voiceMsgPlayer").play(),l=!0,d=e.url))}});