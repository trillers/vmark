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