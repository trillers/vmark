var baseUrl = __app.settings.api.url;

export var addBespeak = function(data){
    return function(done){
        return $.post(baseUrl + '/tenant/sd/bespeak', data)
            .success(res=>{
                done({
                    name: 'addBespeak',
                    res
                });
            })
            .error(e=>{
                console.warn(e)
            })
    }
};



