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
    assign: function(){
        var objs = [].slice.apply(arguments);
        return objs.reduceRight(function(prev, curr){
            return util.mixin(curr, prev);
        }, undefined)
    },
    mixin: function(t, s){
        for(var p in s){
            t[p] = s[p]
        }
        return t;
    },
    extend: function(target, source){
        for(var p in source){
            target[p] = source[p];
        }
        return target;
    },
    htmlParser: {
        parse: function(str){
            return str.replace(/<br>/g,'\n');
        },
        unparse: function(str){
            return str.replace(/\\n/g,'<br>');
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