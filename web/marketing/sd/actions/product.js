'use strict'
//import {appDispatcher} from '../dispatcher';

let productActions = {};

productActions.loadProduct = (id) => {
    return $.get(__app.settings.api.url + '/tenant/sd/course/_' + id)
        .then(res=>{
            return {
                name: 'loadProduct',
                res
            };
        })
        .catch(e=>{
            console.warn(e)
        })
};
export {productActions};