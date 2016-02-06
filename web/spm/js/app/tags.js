module.exports=function(){riot.tag("boss-active-note",'<div if="{!hidden}"> <div class="container"> <div class="col-md-10 col-xs-10 col-sm-10 col-md-offset-1"> <div class="jumbotron" style="height: auto;padding-top: 1em; padding-left: 2em;padding-right: 4em;"> <div class="panel " style="min-height: 38em"> <ul class="nav nav-tabs"> <li role="presentation" class="active"><a href="javascript:void(0)">已激活</a></li> <li role="presentation"><a href="#deleted">已删除</a></li> </ul> <ul class="ul_list" style="margin-bottom: 5em; padding-left: 0em; margin-top: 1em"> <li> <strong class="col-md-3">笔记名称</strong> <strong class="col-md-2">创建人</strong> <strong class="col-md-2"> 状态</strong> <strong class="col-md-3">创建时间</strong> <strong class="col-md-2"> 操作</strong> </li> <li style="padding-top: 10px"> <hr width="100%"> </li> <boss-note-item each="{items}" curritem="{this}"></boss-note-item> </ul> <pagination current_page="{ current_page }" page_count="{ page_count }"></pagination> </div> </div> </div> </div> </div>',"boss-active-note .ul_list{list-style-type: none ; text-align: center}",function(t){this.app=this.opts.app;var e=nest.presentable(this),n=domain.action("findNotes"),o=domain.action("deleteNote");e.current_page=8,e.page_count=10;var i=function(t){e.update({items:t})},s=function(t){var e={status:"active",page:{size:10,no:1}};n.execute(e)};this.on("mount",function(){console.info("tag boss-active-note is mounted"),n.onDone(i),o.onDone(s)}),this.on("unmount",function(){console.info("tag boss-active-note  is unmounted"),n.offDone(i),o.offDone(s)}),this.on("open",function(t){console.info("tag boss-active-note  is opening"),e.trigger("view-route-to");var o={status:"active",page:{size:10,no:1}};n.execute(o)}),this.on("leave",function(){e.mask=!0,e.update()}),this.on("reenter",function(){e.mask=!1,e.update()}),this.on("refresh",function(){console.info("tag boss-active-note index is refreshing")}),this.on("pageChange",function(t){var e={status:"active",page:{size:10,no:t}};n.execute(e)}),e.deleteNote=function(t){o.execute(t)}});
riot.tag("boss-deleted-note",'<div if="{!hidden}"> <div class="container"> <div class="col-md-10 col-xs-10 col-sm-10 col-md-offset-1"> <div class="jumbotron" style="height: auto;padding-top: 1em; padding-left: 2em;padding-right: 4em;"> <div class="panel " style="min-height: 38em"> <ul class="nav nav-tabs"> <li role="presentation"><a href="#active">已激活</a></li> <li role="presentation" class="active"><a href="javascript:void(0)">已删除</a></li> </ul> <ul class="ul_list" style="margin-bottom: 5em; padding-left: 0em; margin-top: 1em"> <li> <strong class="col-md-3">笔记名称</strong> <strong class="col-md-2">创建人</strong> <strong class="col-md-2"> 状态</strong> <strong class="col-md-3">创建时间</strong> <strong class="col-md-2"> 操作</strong> </li> <li style="padding-top: 10px"> <hr width="100%"> </li> <boss-note-item each="{items}" curritem="{this}"></boss-note-item> </ul> <nav> <ul class="pagination pagination-lg"> <li> <a href="#" aria-label="Previous"> <span aria-hidden="true">&laquo;</span> </a> </li> <li><a href="#">1</a></li> <li><a href="#">2</a></li> <li><a href="#">3</a></li> <li><a href="#">4</a></li> <li><a href="#">5</a></li> <li> <a href="#" aria-label="Next"> <span aria-hidden="true">&raquo;</span> </a> </li> </ul> </nav> </div> </div> </div> </div> </div>',"boss-deleted-note .ul_list{list-style-type: none ; text-align: center}",function(e){this.app=this.opts.app;var t=nest.presentable(this),i=domain.action("findNotes"),n=function(e){t.update({items:e})};this.on("mount",function(){console.info("tag boss-deleted-note  is mounted"),i.onDone(n)}),this.on("unmount",function(){console.info("tag boss-deleted-note  is unmounted"),i.offDone(n)}),this.on("open",function(e){console.info("tag boss-deleted-note is opening"),t.trigger("view-route-to");var n={status:"delete",page:{size:10,no:1}};i.execute(n)}),this.on("leave",function(){t.mask=!0,t.update()}),this.on("reenter",function(){t.mask=!1,t.update()}),this.on("refresh",function(){console.info("tag boss-deleted-note index is refreshing")})});
riot.tag("boss-note-item",'<li style="width: 100%"> <span class="col-md-3"> {title || \'匿名\'}</span> <span class="col-md-2"> {initiator.nickname || \'匿名\'}</span> <span class="col-md-2"> {state}</span> <span class="col-md-3"> {date}</span> <span class="col-md-2"> <a onclick="{deleteOrActive}" style="text-decoration: none; cursor: pointer; padding-right: 4px;" >{actionName}</a> </span> </li> <br> <br>',function(t){var e=this,a=e.opts.curritem,n=new Date(a.crtOn),s=n.getFullYear(),i=n.getMonth()+1,l=n.getDate();e.date=s+"-"+i+"-"+l,"a"===a.lFlg?(e.state="已激活",e.actionName="删除笔记"):"d"===a.lFlg&&(e.state="已删除",e.actionName="激活笔记"),this.deleteOrActive=function(t){t.preventUpdate=!0,e.parent.parent.reset_id=a._id,"a"===a.lFlg?e.parent.parent.deleteNote(a._id):"d"===a.lFlg&&e.parent.parent.activeUser()}.bind(this)});
riot.tag("boss-top-menu",'<nav class="navbar navbar-default navbar-inverse" role="navigation"> <div class="collapse navbar-collapse"> <a class="navbar-brand" style="font-size: 2em;color: white">记易后台</a> <ul class="nav navbar-nav" style="width: 85%"> <li class="navbtn"><a route="active" class="active" style="font-size: 1.5em; cursor: pointer" onclick="{active}">笔记管理</a></li> <li style="float: right; margin-left:5em"><a href="#" style="font-size: 1.4em" onclick="{logout}">退出</a></li> </ul> </div> </nav>',"boss-top-menu .navbtn{padding-left: 3em} boss-top-menu .active{color: #ffffff !important;}",function(t){this.logout=function(t){$.get("/logout",function(t){window.location.href="/login"})}.bind(this),this.active=function(t){t.preventUpdate=!0,$(".navbtn a").removeClass("active"),$(t.currentTarget).addClass("active"),riot.route($(t.currentTarget).attr("route"))}.bind(this)});
riot.tag("note-comment",'<div class="comment-panel"> <div class="comment-bar"> <div class="btn pull-right"> <div onclick="{addComment}" class="send-btn {active: viewModel.input.withText}">发送</div> </div> <div class="text-area"> <input oninput="{noteEditInput}" id="commentTxtInput" placeholder="点击输入评论" value=""> </div> <div style="clear: both"></div> </div> </div>',function(t){var e=this,i=domain.action("saveComment");e.viewModel={input:{wait:!0,editTxt:!1,withText:!1,doWait:function(){this.wait=!0,this.editTxt=!1},doEdit:function(){this.wait=!1,this.editTxt=!0}}},e.parent.on("commentMode",function(){document.querySelector("#commentTxtInput").focus()}),e.quitComment=function(t){e.parent.trigger("quitComment")},e.addComment=function(t){""!==e.commentTxtInput.value.trim()&&(e.viewModel.input.withText=!1,i.newInvocation({note:e.parent.currComment._id,interaction:{initiator:e.parent.user._id,content:e.commentTxtInput.value.trim()}}).onDone(function(t){e.commentTxtInput.value="",e.viewModel.input.doWait(),e.parent.trigger("noteComment",t.comment)}).execute())},e.noteEditInput=function(t){var i=t.currentTarget.value.trim();e.viewModel.input.withText=!!i,i?e.viewModel.input.doEdit():e.viewModel.input.doWait()}});
riot.tag("note-confirm",'<div class="weui_dialog_confirm" id="dialog1" if="{show}"> <div class="weui_mask"></div> <div class="weui_dialog"> <div class="weui_dialog_hd"><strong class="weui_dialog_title">{text}</strong></div> <div class="weui_dialog_ft"> <a onclick="{cancel}" class="weui_btn_dialog default">取消</a> <a onclick="{confirm}" class="weui_btn_dialog primary">确定</a> </div> </div> </div>',function(i){var a=this;a.show=!1,a.currTag=null,a.text="是否删除评论",a.on("popUp",function(i){i.text&&(a.text=i.text),a.show=!0,a.update()}),a.confirm=function(i){a.trigger("confirm"),a.show=!1},a.cancel=function(i){a.trigger("cancel"),a.show=!1}});
riot.tag("note-input",'<div id="mask"> <div id="stop-record-tip"> <span>松开手结束录音</span> </div> </div> <div class="input-panel"> <div class="input-bar"> <div class="btn pull-left"> <img if="{viewModel.toggleTxtVoiBtn.voi}" onclick="{viewModel.toggleTxtVoiBtn.toggle}" src="/public/images/input_keyboard.png"> <img if="{viewModel.toggleTxtVoiBtn.txt}" onclick="{viewModel.toggleTxtVoiBtn.toggle}" src="/public/images/input_voice.png"> </div> <div class="btn pull-right"> <img src="/public/images/input_add.png" onclick="{toggleSubMenu}" if="{viewModel.input.wait}"> <div onclick="{addTxt}" class="send-btn" if="{viewModel.input.editTxt}">发送</div> </div> <div if="{viewModel.toggleTxtVoiBtn.txt}" class="text-area"> <div> <input oninput="{noteEditInput}" id="editTxtInput" placeholder="点击输入文字" value=""> </div> </div> <div if="{viewModel.toggleTxtVoiBtn.voi}" class="voice-area" ontouchstart="{voiceAreaTouchStart}" ontouchend="{voiceAreaTouchEnd}"> <input type="button" value="按住 说话"> </div> </div> <div if="{viewModel.subMenu.showState}" class="input-more"> <ul> <li onclick="{addImgs}"> <div class="more-item"> <img src="/public/images/input_image.png"> </div> </li> <li> <div class="more-item inactive"> <img src="/public/images/input_short_video.png"> </div> </li> </ul> </div> </div>',"note-input #mask{ position: fixed; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5);; left: 0; top: 0; z-index: 1000; display: none; } note-input #stop-record-tip{ margin: 0 auto; width: 120px; margin-top: 250px; color: white; }",function(e){var t=this,o=domain.action("saveNotesInSection"),i=domain.action("saveNoteInSection");t.viewModel={toggleTxtVoiBtn:{txt:!0,voi:!1,toggle:function(){var e=t.viewModel.toggleTxtVoiBtn;e.txt=!e.txt,e.voi=!e.voi}},subMenu:{showState:!1,toggle:function(){var e=t.viewModel.subMenu;e.showState=!e.showState},show:function(){var e=t.viewModel.subMenu;e.showState=!0},hide:function(){var e=t.viewModel.subMenu;e.showState=!1}},input:{wait:!0,editTxt:!1,doWait:function(){this.wait=!0,this.editTxt=!1},doEdit:function(){this.wait=!1,this.editTxt=!0}}},t.addTxt=function(e){""!==t.editTxtInput.value.trim()&&i.newInvocation({type:"txt",content:t.editTxtInput.value.trim(),parentNote:t.parent.currNote._id||"",pageNoteId:t.parent.pageNote._id}).onDone(function(e){util.mixin(t.parent.currNote,e.sectionNote),t.parent.currNote.mates.push(e.note),t.editTxtInput.value="",t.viewModel.input.doWait(),t.parent.trigger("noteSave",e.note)}).execute()},t.addImgs=function(e){wx.chooseImage({count:9,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var i=e.localIds.map(function(e){return{type:"img",url:e,parentNote:t.parent.currNote._id||"",pageNoteId:t.parent.pageNote._id}});o.newInvocation({notes:i}).onDone(function(e){e?(t.parent.currNote.mates||(t.parent.currNote.mates=[]),e.parentNote&&util.mixin(t.parent.currNote,e.parentNote),t.parent.currNote.mates=t.parent.currNote.mates.concat(e.mates),t.parent.trigger("noteSave",e)):alert("error occur.")}).execute()}})},t.noteEditInput=function(e){var o=e.currentTarget.value.trim();o?t.viewModel.input.doEdit():t.viewModel.input.doWait()},t.toggleSubMenu=function(e){t.viewModel.subMenu.toggle()},t.parent.on("editMode",function(){document.querySelector("#editTxtInput").focus()});var n,c,r,a={},d=!1;wx.ready(function(){console.log("ready"),wx.onVoiceRecordEnd({complete:function(e){console.error("end"),r=(new Date).getTime(),$("#stop-record").hide(),$("#play-record").show(),$("#confirm-sub-voice").show();var t=e.localId;a.localId=t}}),wx.onVoicePlayEnd({success:function(e){e.localId}})}),t.voiceAreaTouchStart=function(e){console.error("startRecord"),c=(new Date).getTime(),n=setTimeout(function(){$("#mask").show(),wx.startRecord()},300)},t.voiceAreaTouchEnd=function(e){console.error("touchend"),r=(new Date).getTime(),300>r-c?(r=0,c=0,clearTimeout(n)):wx.stopRecord({success:function(e){console.log(e),$("#mask").hide();var o=e.localId,n=((r-c)/1e3).toFixed(0);c=0,r=0;var a={type:"voi",url:o,seconds:n,parentNote:t.parent.currNote._id||"",pageNoteId:t.parent.pageNote._id};i.newInvocation(a).onDone(function(e){e?(util.mixin(t.parent.currNote,e.sectionNote),t.parent.currNote.mates.push(e.note),t.parent.trigger("noteSave",e.note)):alert("error occur.")}).execute()}})},t.stopRecord=function(e){d=!0,r=(new Date).getTime(),wx.stopRecord({success:function(e){console.log(e),$("#stop-record").hide(),$("#play-record").show(),$("#confirm-sub-voice").show();var t=e.localId;a.localId=t}})},t.playRecord=function(e){wx.playVoice({localId:a.localId}),$("#play-record").hide(),$("#pause-record").show()},t.pauseRecord=function(e){wx.pauseVoice({localId:a.localId}),$("#pause-record").hide(),$("#play-record").show()},t.confirmSubVoice=function(e){$(".record_detail_area").hide();var o=((r-c)/1e3).toFixed(0);c=0,r=0,$(".js_progress").css({width:"0%"}),$(".voice-seconds-container").css({"padding-left":"0%"}),$("#voice-seconds").text(0),d=!1,$("#stop-record").show(),$("#play-record").hide(),$("#confirm-sub-voice").hide(),$("#pause-record").hide();var n={type:"voi",url:a.localId,seconds:o,parentNote:t.parent.currNote._id||"",pageNoteId:t.parent.pageNote._id};wx.pauseVoice({localId:a.localId}),i.newInvocation(n).onDone(function(e){e?(util.mixin(t.parent.currNote,e.sectionNote),t.parent.currNote.mates.push(e.note),t.parent.trigger("noteSave",e.note)):alert("error occur.")}).execute()}});
riot.tag("note-menu","<div>头部</div>","note-menu div{ height: 30px; line-height: 30px; background: #989898; text-align: center; color: white; }",function(e){});
riot.tag("note-page",'<div class="page" if="{!hidden}"> <div class="title"> <input class="input" if="{pageNote.initiator != user._id}" readonly type="text" value="{pageNote.title}" name="titleInput"> <input class="input" if="{pageNote.initiator === user._id}" onblur="{updatePageNote}" type="text" value="{pageNote.title}" placeholder="添加标题" name="titleInput"> <div if="{false}" class="reference"> <img class="user-icon" riot-src="{user.headimgurl}"> <label class="user-icon"> {user.nickname}</label> <span> 创建于{formatDate(new Date())}</span> </div> <div class="line"></div> </div> <div> <note-section name="{item._id}" id="{item._id}" each="{item, i in pageNote.mates}" if="{parent.sectionShowOrNot(item)}" section="{item}"></note-section> <note-section name="11" if="{pageNoteMode.status.edit && (currNote === newSection)}" section="{newSection}" new="true"></note-section> </div> <div if="{pageNoteMode.status.view}" class="add-section-bar"> <div class="add-section"> <div onclick="{selectOperate}"><img src="/public/images/add.png"></div> </div> </div> <div> <img src=""> </div> <div> <span if="{pageNote.parentNote}">{pageNote.txt}</span> </div> <div style="clear: both"></div> <div class="mask" if="{pageNoteMode.status.comment}" ontouchstart="{quitCommentWithClickMask(currComment)}" riot-style="height: {window.innerHeight + \'px\'}"></div> </div> <note-confirm></note-confirm> <note-input if="{Object.keys(currNote).length && pageNoteMode.status.edit}"></note-input> <note-comment if="{currComment}"></note-comment>  <div style="position:absolute;top:0;left:0;width:0;height:0;"> <audio id="voiceMsgPlayer" class="voicePlayer"></audio> </div> ',"note-page .mask{ width: 100%; position: fixed; top: 0px; left: 0px; z-index: 2; } note-page :focus{ outline: none; } note-page .title-input1{ font-size: 16px; display: inline-block; height:30px; line-height: 30px; background: transparent; border: none; } note-page .note_items div{ height: 40px; line-height: 40px; } note-page body{ font-size: 14px; } note-page .btn-group{ list-style-type: none; } note-page .btn-group li{ float:left; padding:10px; }",function(e){"use strict";var t=this,o=this.opts.id,n=window.location.href,i=domain.action("loadNote"),a=domain.action("updateNote"),s=domain.action("shareAction"),u=function(e){e.error?alert(e.error.message):util.mixin(t.pageNote,e)},r=function(e){if(e&&(t.pageNote=e,t.pageNote.mates&&t.pageNote.mates.length)){var o=t.pageNote.mates.filter(function(e){return"dr"===e.status?e:void 0});o&&o.length&&(t.pageNote.mates=util.arr.rest(t.pageNote.mates,o),t.newSection=o[0],t.selectNote(t.newSection))}t.hidden=!1;var n=document.body.querySelector("body >div");n.removeChild(n.querySelector("#welcomeWrapper")),t.update()};t.hidden=!0,t.pageNote=null,t.newSection={},t.newSection.mates=[],t.currNote={},t.currComment=null,t.user=__page.user,t.user.headimgurl=t.user.headimgurl||"/public/images/def-avatar.png",t.formatDate=function(e){return new Date(e).toLocaleString()},t.formatDateForMates=util.formatDateForComments,t.pageNoteMode={status:{view:!0,edit:!1,comment:!1},position:{start:0,end:0},doView:function(e){t.pageNoteMode.status.view=!0,t.pageNoteMode.status.edit=!1,t.pageNoteMode.status.comment=!1,t.currNote=null,t.currComment=null,t.newSection={},t.newSection.mates=[],e._id&&setTimeout(function(){window.scrollTo(0,t.pageNoteMode.position.start)},1)},doEdit:function(e){t.pageNoteMode.position.start=window.scrollY,t.pageNoteMode.status.edit=!0,t.pageNoteMode.status.view=!1,t.pageNoteMode.status.comment=!1,t.currComment=null,t.selectNote(e),t.trigger("editMode")},doComment:function(e){t.pageNoteMode.position.start=window.scrollY,t.pageNoteMode.status.view=!1,t.pageNoteMode.status.edit=!1,t.pageNoteMode.status.comment=!0,t.currComment=e,t.currNote=null,t.update(),window.scrollTo(0,document.body.scrollHeight),t.trigger("commentMode")}},t.init=function(){t.pageNote={title:null,comments:null,crtOn:null,_id:null},t.titleInput.value="",wx.onMenuShareTimeline({title:t.pageNote.title||__app.resources.app.title,link:n,imgUrl:__page.baseUrl+"/public/images/logo_share_48x48.jpg",success:function(){s.execute({id:t.pageNote._id})},cancel:function(){}}),wx.onMenuShareAppMessage({title:t.pageNote.title||__app.resources.app.title,desc:"",link:n,imgUrl:__page.baseUrl+"/public/images/logo_share_48x48.jpg",success:function(){s.execute({id:t.pageNote._id})},cancel:function(){}})},t.on("mount",function(){console.warn(t.tags)}),t.sectionShowOrNot=function(e){if(t.pageNoteMode.status.view&&"dr"!=e.status)return!0;if(t.pageNoteMode.status.edit&&"dr"!=e.status){if(t.currNote._id===e._id)return!0}else if(t.pageNoteMode.status.comment&&"dr"!=e.status&&t.currComment._id===e._id)return!0;return!1},t.quitCommentWithClickMask=function(e){return function(o){o.preventDefault(),t.pageNoteMode.doView(e),t.update()}},t.on("cancel",function(e){t.pageNoteMode.doView(e),t.currNote=null,t.update()}),t.on("quitComment",function(){t.pageNoteMode.doView(t.currComment),t.currComment=null,t.update()}),t.on("comment",function(e){t.pageNoteMode.doComment(e)}),t.on("noteComment",function(e){t.currComment.comments.push(e),t.pageNoteMode.doView(t.currComment),t.update()}),t.updatePageNote=function(e){var o=e.currentTarget.value;t.pageNote.initiator==t.user._id&&o&&a.execute({id:t.pageNote._id,title:o})},t.selectNote=function(e,o){t.currNote=e,t.currComment=null,t.update()},t.isAnonymous=function(){return!t.user||!t.user.status||t.user.status===__app.enums.UserStatus.names.Anonymous},t.isVerified=function(){return t.user&&t.user.status&&t.user.status===__app.enums.UserStatus.names.Verified},t.selectOperate=function(e){t.isAnonymous()&&t.goToAuthorize(),t.pageNoteMode.doEdit(t.newSection)},t.on("editSectionNote",function(e){t.pageNoteMode.doEdit(e)}),t.on("noteSubmit",function(e){t.pageNoteMode.doView(e),t.update()}),t.on("noteSave",function(e){t.update(),window.scrollTo(0,document.body.scrollHeight)}),t.on("active",function(e){t.selectNote(e.section,e)}),t.on("mount",function(){console.info("tag pageNote new is opening"),i.onDone(r),a.onDone(u),t.init(),t.pageNote._id=o,i.execute({noteId:t.pageNote._id})}),t.on("unmount",function(){i.offDone(r),a.offDone(u)});var c,d=!1,l=!1,p="";wx.ready(function(){wx.onVoicePlayEnd({success:function(e){console.error("voice play end"),l=!1}})}),t.on("playVoice",function(e,t,o){console.info("start play voice"),"dr"===t?l&&p===e?(wx.stopVoice({localId:e}),l=!1):(wx.playVoice({localId:e}),p=e,l=!0):($("#voiceMsgPlayer").attr("src",e),p.indexOf("weixin")>=0&&(wx.stopVoice({localId:p}),l=!1),clearTimeout(c),c=setTimeout(function(){d=!1},1e3*o),d&&p===e?d=!1:(document.getElementById("voiceMsgPlayer").play(),d=!0,p=e))}),t.goToAuthorize=function(e){var t="/auth/authorize?";t+="route=get_user_info&returnUrl="+location.href,location.href=t}});
riot.tag("note-section",'<div class="page-action-bar" if="{isShowSaveAndCancelButton()}"> <div onclick="{submitSectionNote}" if="{isOnEdit() && (initiator._id === parent.user._id)}" class="save pull-right">保存</div> <div onclick="{cancelSectionNote}" if="{isOnEdit() && (initiator._id === parent.user._id)}" class="cancel pull-right">取消</div> </div> <a href="#{section._id}"></a> <div class="page" if="{!hidden}"> <div class="section" sectionid="{_id}"> <div class="panel"> <div class="top-padding"></div> <div class="author" > <div style="display: inline; float: left;"> <img class="user-icon" riot-src="{initiator.headimgurl}"> </div> <div style="display: inline; float: left; padding-left: 10px;"> <label class="user-nickname"> {initiator.nickname}</label> </div> <div style="display: inline; float: left; padding-left: 10px;"> <span if="{section.parentNote && section.status != \'dr\'}">{formatDate(new Date(section.crtOn))}</span> </div> </div>     <div class="noteItems"> <div each="{section.mates}" noteid="{_id}" style="margin-top: 2px" onclick="{parent.deleteNote}"> <div if="{type===\'txt\'}" class="note-text">{content}</div> <div if="{type===\'img\'}" class="note_img"><img style="width: 100%" riot-src="{url}"></div>  <div if="{type===\'voi\'}" class="note-voice" style="float:left"> <div riot-style="width: {seconds * 3 + 30}px" class="voice-bubble left" onclick="{parent.playVoice}" > <img src="/public/images/voice_3.png"> </div><span class="seconds">{seconds}"</span> </div> <div style="clear: both;"></div> </div> </div> <div class="bottom"> <table style="width:100%;" cellpadding="0" cellspacing="0"> <tr> <td style="width:45%;"> </td> <td style="width:10%;"> <div class="img-btn left" onclick="{editSectionNote}" if="{!isOnEdit() && (initiator._id === parent.user._id)}"> <img src="/public/images/edit.png"> </div> </td> <td style="width:45%;"> <div class="right"> <div id="interactBlock" if="{!isNew}" class="left" style="display: inline-block; height: 24px;"> <div onclick="{like}" class="img-btn left"> <img riot-src="{isLiked()? \'/public/images/liked.png\': \'/public/images/like.png\'}"> </div> <div onclick="{comment}" class="img-btn left" style="display: inline-block; "> <img src="/public/images/comment.png"> </div> </div> </div> </td> </tr> </table> </div> </div> <div class="interact" if="{!isNew}"> <div class="likes" > <ul> <li each="{section.likes}"> <div><img class="user-icon" riot-src="{initiator.headimgurl || \'/public/images/def-avatar.png\'}"></div> </li> </ul> </div> <div class="comments"> <ul> <li each="{section.comments}" onclick="{parent.deleteComment}"> <table style="width:100%;" cellpadding="0" cellspacing="0"> <tr> <td style="width: 24px;"> <div> <img class="user-icon" riot-src="{initiator.headimgurl || \'/public/images/def-avatar.png\'}"> </div> </td> <td> <div> <span>{content}</span> </div> </td> <td style="width: 60px;"> <div> <span style="font-size: 12px; float:right">{parent.formatDate(new Date(crtOn))}</span> </div> </td> </tr> </table> </li> </ul> </div> </div> <div class="bottom-padding"></div> </div> </div>',"note-section label{ font-size: 14px; } note-section .interact_box{ line-height: 40px; border-top: 1px solid #ddd; } note-section .interact_box .comments img{ width: 32px; height: 32px; border: none; border-radius: 50em; vertical-align: middle; } note-section .noteItems div{ line-height: 31px; } note-section .noteItems div .note_img{ width:100%; } note-section .note_section{ width: 94%; border: 1px solid #ddd; margin: 15px auto; background: white; padding: 10px; padding-bottom: 0px; font-size: 14px; } note-section .note_section .featureArea{ margin-top: 10px; position: relative; } note-section .note_section .featureArea .send_btn{ display: block; float: right; height: 32px; } note-section .note_section textarea{ height: 32px; line-height: 32px; position: absolute; bottom: 2px; margin: 0px auto; left: 50px; display: block; width: -webkit-calc(100% - 100px); width: -moz-calc(100% - 100px); width: calc(100% - 100px); border: none; border-bottom: 1px solid #18c54b; font-size: 14px; } note-section .voice{ margin-left: 10px; float: left; background-color: #ffffff; border-radius: 7px; border: 1px solid #c4c4c4; } note-section .seconds{ float: left; font-size: 12px; margin-left: 5px; } note-section .playIcon{ background: url('/web/images/wx-icon.png') 0 -2428px; background-size: 150px 2489px; width: 16px; height: 16px; vertical-align: middle; display: inline-block; }",function(i){var t=this,e=(domain.action("saveNoteInSection"),domain.action("updateNote"),domain.action("deleteNotes")),n=domain.action("publishNote"),o=(domain.action("saveNotesInSection"),domain.action("uploadImage")),s=domain.action("uploadVoice"),c=domain.action("likeNote"),a=domain.action("unlikeNote"),d=domain.action("deleteComment");t.section=this.opts.section,t.isNew=!!this.opts["new"],t.parent=t.isNew?t.parent:t.parent.parent,t.confirmComponent=t.parent.tags["note-confirm"],t.initiator=t.section.initiator||t.parent.user,t.initiator.headimgurl=t.initiator.headimgurl||"/public/images/def-avatar.png",t.isOnEdit=function(){return t.isNew?!t.section.parentNote||t.section.parentNote&&"dr"===t.section.status:t.parent.currNote===t.section},t.viewModel={toggleTxtVoiBtn:{txt:!0,voi:!1,toggle:function(){var i=t.viewModel.toggleTxtVoiBtn;i.txt=!i.txt,i.voi=!i.voi}},input:{wait:!0,editTxt:!1,doWait:function(){this.wait=!0,this.editTxt=!1},doEdit:function(){this.wait=!1,this.editTxt=!0}}},t.init=function(){t.isNew&&(t.section={mates:[]})},t.formatDate=util.formatDateForComments,t.on("update",function(){t.section=t.opts.section}),t.isShowSaveAndCancelButton=function(){return t.isOnEdit()&&t.initiator._id===t.parent.user._id},t.editSectionNote=function(i){t.init(),t.parent.trigger("editSectionNote",t.section)},t.deleteNote=function(i){return t.isOnEdit()&&t.initiator._id===t.parent.user._id?void t.confirm({text:"是否删除该行"},function(){e.newInvocation({notes:[i.item._id]}).onDone(function(e){e.success?(t.section.mates.forEach(function(e,n){e._id===i.item._id&&t.section.mates.splice(n,1)}),t.update()):alert(e.error)}).execute()}):!1},t.confirm=function(i,e){function n(){s(),e()}function o(){s()}function s(){t.confirmComponent.off("confirm",n),t.confirmComponent.off("cancel",o)}t.confirmComponent.one("confirm",n),t.confirmComponent.one("cancel",o),t.confirmComponent.trigger("popUp",i)},t.deleteComment=function(i){var e=i.item.initiator;return e._id!=t.parent.user._id?!1:void t.confirm({text:"是否删除评论"},function(){d.newInvocation({id:i.item._id}).onDone(function(e){e.success?t.section.comments.forEach(function(e,n){e._id==i.item._id&&t.section.comments.splice(n,1),t.update()}):alert("delete comments failed.")}).execute()})},t.cancelSectionNote=function(i){t.init(),t.parent.trigger("cancel",t.section)},t.submitSectionNote=function(i){function e(){n.newInvocation(t.section).onDone(function(i){try{util.mixin(t.section,i),t.isNew&&t.parent.pageNote.mates.push(t.section),t.parent.trigger("noteSubmit",t.section),t.init()}catch(e){alert(JSON.stringify(e))}}).execute()}if(t.section._id&&!(t.section&&t.section.mates&&t.section.mates.length<=0)){if(t.section.mates.length<=0)return t.init(),void t.parent.trigger("noteSubmit",t.section);var c=0;t.section.mates.forEach(function(i){i.status&&"dr"!==i.status?++c===t.section.mates.length&&e():"img"===i.type&&i.url?wx.uploadImage({localId:i.url,isShowProgressTips:0,success:function(n){o.newInvocation({media_id:n.serverId}).onDone(function(n){i.url=n.url,++c===t.section.mates.length&&e()}).execute()}}):"voi"===i.type&&i.url?wx.uploadVoice({localId:i.url,isShowProgressTips:0,success:function(n){s.newInvocation({media_id:n.serverId}).onDone(function(n){i.url=n.url,++c===t.section.mates.length&&e()}).execute()}}):++c===t.section.mates.length&&e()})}},t.comment=function(i){return t.parent.isAnonymous()?t.parent.goToAuthorize():void t.parent.trigger("comment",t.section)},t.isLiked=function(){var i=!1;return!t.section.likes||t.section.likes.length<=0?i:(t.section.likes.forEach(function(e){e.initiator._id===t.parent.user._id&&(i=e)}),i)},t.like=function(i){if(t.parent.isAnonymous())return t.parent.goToAuthorize();var e=t.isLiked();e?a.newInvocation({interaction:e._id,note:t.section._id}).onDone(function(i){i.success?(t.section.likes=t.section.likes.filter(function(i){return i.initiator._id!=t.parent.user._id}),t.update()):alert("failed to unlike item")}).execute():c.newInvocation({interaction:{initiator:t.parent.user._id},note:t.section._id}).onDone(function(i){i&&i.like?(t.section.likes.push(i.like),t.update()):alert("failed to like item")}).execute()},t.playVoice=function(i){var e=i.item;t.parent.trigger("playVoice",e.url,e.status)}});
riot.tag("pagination",'<div> <nav> <ul class="pagination pagination-lg"> <li><a href="javascript: void(0)" page="1" onclick="{changePage}">&lt;&lt;</a></li> <li><a href="javascript: void(0)" page="{opts.current_page - 1}" onclick="{changePage}">&lt;</a></li> <li each="{val in pages}" class="{parent.getClass(val)}"><a href="javascript: void(0)" page="{val}" onclick="{parent.changePage}">{val}</a></li> <li><a href="javascript: void(0)" page="{opts.current_page + 1}" onclick="{changePage}">&gt;</a></li> <li><a href="javascript: void(0)" page="{opts.page_count}" onclick="{changePage}">&gt;&gt;</a></li> </ul> </nav> </div>',function(a){var e=a.current_page,i=(a.page_count,this);4>e?this.pages=[1,2,3,4,5]:this.pages=[e-2,e-1,e,e+1,e+2],this.changePage=function(a){i.parent.trigger("pageChange",$(a.currentTarget).attr("page"))},this.getClass=function(a){return a==e?"active":""}});}