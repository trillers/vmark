var baseUrl = __app.settings.api.url;

export var loadPersonalInfoByUserId = (id, media) =>{
    return $.get(baseUrl + '/tenant/sd/membership/info?user=' + id + '&media=' + media)
        .then(res=> {
            return {
                name: 'loadPersonalInfoByUserId',
                res
            }
        })
        .catch(e=>{
            console.warn(e);
        })
};



