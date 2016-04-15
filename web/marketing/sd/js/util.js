var util = {
    getMemberPrice: function(listPrice, type, rate){
        if(type === 'c'){
            return listPrice - rate;
        }else if(type === 'p'){
            var price = listPrice - listPrice*rate;
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
        var winh = $(window).height() + 'px';
        var changeDis = parseInt(winw,10) * 0.3;
        var html = '<div class="imgPreviewer" style="position:absolute;z-index:44444444;top:0px;left:0px;width:'+ winw +';height:'+ winh +';overflow: hidden;background-color:black">'+
            '<ul class="imgPreviewerUl" style="overflow:hidden;width:'+ (imglen*100) +'%;margin:0px;padding: 0px;transition:all 0.2s ease-out;">';

        for(i = 0; i<imglen; i++){
            imgWHRate = imgs[i].meta.split('|')[0]/imgs[i].meta.split('|')[1];
            imgHeight = (parseInt(winw,10)/imgWHRate);
            html+= '<li style="width:'+(100/imglen)+'%;height:'+winh+';float:left;line-height:'+ winh +'">'+
                '<img src="http://'+ imgs[i].url +'" style="width:100%;height:'+ imgHeight +'px"/>'+
                '</li>';
        }

        html+= '</ul>'+
            '<div style="background-color: rgba(0,0,0,0.4);width:100%;height:80px;line-height: 40px;color:white;position: absolute;bottom:0px;left: 0px;text-align: center"><div style="height:40px;width:100%;line-height: 40px">';

        for(i = 0; i<imglen; i++){
            html+='<span class="picPrevIndexSpan" id="picIndexSpan'+ i +'"></span>';
        }

        html+='</div><p style="text-align:left;text-indent:15px;">'+options.msg+'</p></div></div>';

        $container.append(html);

        renderIndexSpan(currentIndex);

        $container.css({
            height:winh,
            overflow:'hidden'
        });

        $('body').css({
            height:winh,
            overflow:'hidden',
            minHeight:winh
        });

        $ul = $('.imgPreviewerUl');
        document.querySelector('.imgPreviewerUl').addEventListener('touchstart', touchStart, false);
        document.querySelector('.imgPreviewerUl').addEventListener('touchmove', touchMove, false);
        document.querySelector('.imgPreviewerUl').addEventListener('touchend', touchEnd, false);
        document.querySelector('.imgPreviewer').addEventListener('click', removeSelf, false);
        function removeSelf(e){
            $('.imgPreviewerUl').parent().remove();
            $container.css({
                height:'auto',
                overflow:'auto'
            });
            $('body').css({
                height:'auto',
                overflow:'auto',
                minHeight:'auto'
            });
        }
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
                removeSelf();
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
            $(".picPrevIndexSpan").each(function(){
                $(this).removeClass('picIndexSpanSelected');
            });
            $("#picIndexSpan"+index).addClass('picIndexSpanSelected');
        }
    }
};
if(!window._){
    window._ = util;
}

module.exports = util;