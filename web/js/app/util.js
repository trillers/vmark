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
                fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
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
    }
};
if(!window._){
    window._ = util;
}

module.exports = util;