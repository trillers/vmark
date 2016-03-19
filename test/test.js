uploadImg(['1111', '22222', '2223444'])
function uploadImg(localIds){
    if(localIds.length){
        var localId = localIds.splice(0, 1);
        setTimeout(function(){
            console.log(localId)
            uploadImg(localIds);
        }, 100);
    }else{
        console.log("ok")
    }
}