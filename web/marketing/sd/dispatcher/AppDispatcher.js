/**
 * Action dispatcher
 */

class AppDispatcher {
    constructor() {
        this.actionFuns = [];
    }

    dispatch(action){
        this.actionFuns.map(func => {
            func(action)
        });
    }

    registry(func){
        if(typeof func !== 'function'){
            throw new Error('argument require a function')
        }
        this.actionFuns.push(func);
    }
}

export {AppDispatcher}