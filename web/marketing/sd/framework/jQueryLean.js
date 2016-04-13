import * as fetch from './fetchMonkeyPatch';

;(function(window, undefined){
    'use strict';

    let _jQuery = window.jQuery;
    if(_jQuery) {
        return _jQuery;
    }
    let jQuery = selector => {
        let nodes = document.querySelectorAll(selector);
        !Array.isArray(nodes) && (nodes = [].slice.apply(nodes));
        return nodes.length ===1 ? nodes[0] : nodes;
    };
    //jQuery = Object.assign(jQuery, fetch);
    for( var p in fetch){
        jQuery[p] = fetch[p];
    }
    window.$ = jQuery;

})(window);