import {app} from '../js/app';

export var router = {

    routeConfig: function(routes){
        routes.forEach(route=>{
            if(route.defaultRoute){
                app.defaultRoute = route;
            }
            app.registerRoute(route, this);
        })
    }
};