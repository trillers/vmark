var util = {
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
        var d_minutes,d_hours,d_days;
        var timeNow = parseInt(new Date().getTime()/1000);
        var time = parseInt(date.getTime()/1000);
        var d;
        d = timeNow - time;
        d_days = parseInt(d/86400);
        d_hours = parseInt(d/3600);
        d_minutes = parseInt(d/60);
        if(d_days>2 && d_days<=4){
            return d_days+"天前";
        }
        else if(d_days<=2 && d_days>0){
            return '昨天';
        }else if(d_days<=0){
            return '今天';
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