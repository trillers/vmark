import {app} from '../js/app';

export var dispatcher = {
    dispatch: function(action){
        if(typeof action === 'function'){
            return action(done);
        }
        if(isPromise(action)){
            return action.then(done);
        }
        done();
        function done(res){
            app.trigger('action', res);
        }
    }
};