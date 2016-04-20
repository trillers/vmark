var baseUrl = __app.settings.api.url;

export var addBespeak = data => {
    return $.post(baseUrl + '/tenant/sd/bespeak', data)
        .then(res=> {
            return {
                name: 'addBespeak',
                res
            };
        })
        .catch(e=> {
            console.warn(e)
        });
};



