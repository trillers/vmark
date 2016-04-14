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
    }

}
if(!window._){
    window._ = util;
}

module.exports = util;