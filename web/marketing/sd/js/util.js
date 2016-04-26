var util = {
    getMemberPrice: function(listPrice, type, rate){
        if(type === 'c'){
            return listPrice - rate;
        }else if(type === 'p'){
            var price = listPrice - listPrice*rate/100;
            return Math.ceil(price);
        }else{
            throw new Error('error discount type');
        }
    },
    imgPreviewer: function($container, imgs, options){
        var me = this;
        var i, len, $ul, imgWHRate, imgHeight, startPosX = 0,startPosY = 0, oldPosX = 0, oldPosY = 0, newPosX = 0, newPosY = 0, timer;
        var currentIndex = options.currentIndex || 0, currentMargin = 0;
        var imglen = imgs.length;
        var winw = $container.outerWidth() + 'px';
        var winh = $container.height() + 'px';
        var changeDis = parseInt(winw,10) * 0.3;
        var html = '<div class="imgPreviewer" style="position:absolute;z-index:1;top:0px;left:0px;width:'+ winw +';height:'+ winh +';overflow: hidden;background-color:black">'+
            '<ul class="imgPreviewerUl" style="overflow:hidden;width:'+ (imglen*100) +'%;margin:0px;padding: 0px;transition:all 0.2s ease-out;">';

        for(i = 0; i<imglen; i++){
            imgWHRate = imgs[i].meta.split('|')[0]/imgs[i].meta.split('|')[1];
            imgHeight = (parseInt(winw,10)/imgWHRate);
            html+= '<li style="width:'+(100/imglen)+'%;height:'+winh+';float:left;line-height:'+ winh +'">'+
                '<img src=' + imgs[i].url + ' style="width:100%;height:'+ imgHeight +'px"/>'+
                '</li>';
        }

        html+= '</ul>'+
            '<div style="width:100%;height:40px;line-height: 40px;color:white;position: absolute;bottom:0px;left: 0px;text-align: right"><div style="height:40px;width:100%;line-height: 40px;position: relative;right: 10px;">';

        for(i = 0; i<imglen; i++){
            html+='<span class="picPrevIndexSpan" id="picIndexSpan'+ i +'"></span>';
        }

        $container.append(html);

        renderIndexSpan(currentIndex);

        $container.css({
            height:winh,
            overflow:'hidden'
        });

        $ul = $('.imgPreviewerUl');
        document.querySelector('.imgPreviewerUl').addEventListener('touchstart', touchStart, false);
        document.querySelector('.imgPreviewerUl').addEventListener('touchmove', touchMove, false);
        document.querySelector('.imgPreviewerUl').addEventListener('touchend', touchEnd, false);
        function touchStart(e){
            e.preventDefault();
            e || (e = window.event);
            currentMargin = parseInt($ul.css('marginLeft'),10);
            timer = (new Date()).getTime();
            startPosX = e.touches[0].pageX;
            startPosY = e.touches[0].pageY;
            oldPosX = e.touches[0].pageX;
            oldPosY = e.touches[0].pageY;
        }
        function touchMove(e){
            e.preventDefault();
            var moveevent = e || window.event;
            newPosX = moveevent.touches[0].pageX;
            newPosY = moveevent.touches[0].pageY;
            if(newPosX > oldPosX && currentIndex === 0 || newPosX < oldPosX && currentIndex === (imglen-1)){
                return;
            }
            if(newPosX < oldPosX){
                $ul.css({
                    'marginLeft': currentMargin - Math.abs(newPosX-startPosX)+'px'
                });
            }else{
                $ul.css({
                    'marginLeft': currentMargin + Math.abs(newPosX-startPosX)+'px'
                });
            }
            oldPosX = newPosX;
        }
        function touchEnd(e){
            var endTime = (new Date()).getTime() - timer, distanceX = newPosX - startPosX, distanceY = newPosY - startPosY, swipeLeft = ((newPosX - startPosX) <0);
            if(( endTime < 100 && newPosX === 0 && newPosY === 0 ) || ( endTime < 100 ) && (Math.abs(distanceX) < 5 && Math.abs(distanceY < 5))){
                return;
            }
            if(Math.abs(distanceX) >= changeDis && swipeLeft){
                if(currentIndex === (imglen-1)){
                    $ul.css({
                        'marginLeft':'-'+((currentIndex)*parseInt(winw, 10))+'px'
                    });
                    return;
                }
                currentIndex++;
                $ul.css({
                    'marginLeft':'-'+((currentIndex)*parseInt(winw, 10))+'px'
                })
            }else if(Math.abs(distanceX) >= changeDis && !swipeLeft){
                if(currentIndex === 0){
                    $ul.css({
                        'marginLeft':'0px'
                    });
                    return;
                }
                currentIndex--;
                $ul.css({
                    'marginLeft':'-'+((currentIndex)*parseInt(winw, 10))+'px'
                })
            }else{
                $ul.css({
                    'marginLeft':'-'+((currentIndex)*parseInt(winw, 10))+'px'
                });
            }
            renderIndexSpan(currentIndex);
            newPosX = 0; newPosY = 0;
        }
        function renderIndexSpan(index){
            if($(".picPrevIndexSpan").length){
                $(".picPrevIndexSpan").forEach(function(o){
                    $(o).removeClass('picIndexSpanSelected');
                });
            }
            $("#picIndexSpan"+index).addClass('picIndexSpanSelected');
        }

    },
    assign: function(...args){
        let cloneSingleValue = (t, s)=> {
            let o = {};
            for(var ps in s){
                o[ps] = s[ps]
            }
            for(var pt in t){
                o[pt] = t[pt]
            }
            return o;
        };
        return args.reduceRight((acc, curr)=>{
            if(acc) return cloneSingleValue(curr, acc);
        }, {});
    },
    mixin: function(...args){
        let cloneSingleValue = (t, s)=> {
            for(var p in s){
                t[p] = s[p];
            }
            return t;
        };
        return args.reduceRight((acc, curr)=>{
            if(acc) return cloneSingleValue(curr, acc);
        }, {});
    },
    nextTick: (function () {
        var canSetImmediate = typeof window !== 'undefined'
            && window.setImmediate;
        var canPost = typeof window !== 'undefined'
            && window.postMessage && window.addEventListener;

        if (canSetImmediate) {
            return function (f) { return window.setImmediate(f) };
        }

        if (canPost) {
            var queue = [];
            window.addEventListener('message', function (ev) {
                var source = ev.source;
                if ((source === window || source === null) && ev.data === 'process-tick') {
                    ev.stopPropagation();
                    if (queue.length > 0) {
                        var fn = queue.shift();
                        fn();
                    }
                }
            }, true);

            return function nextTick(fn) {
                queue.push(fn);
                window.postMessage('process-tick', '*');
            };
        }

        return function nextTick(fn) {
            setTimeout(fn, 0);
        };
    })()
};
if(!window._){
    window._ = util;
}

module.exports = util;