var baseUrl = __app.settings.api.url;

export var addBespeak = function(data){
    return function(done){
        return $.post(baseUrl + '/tenant/sd/bespeak', data)
            .then(res=>{
                done({
                    name: 'addBespeak',
                    res
                });
            })
    }
};



