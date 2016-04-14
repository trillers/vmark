import * as fetch from './fetchMonkeyPatch';

;(function(root, undefined){
    'use strict';

    let _jQuery = root.jQuery;
    if(_jQuery) {
        return _jQuery;
    }
    let jQuery = selector => {
        let nodes = document.querySelectorAll(selector);
        !Array.isArray(nodes) && (nodes = [].slice.apply(nodes));
        return nodes.length ===1 ? nodes[0] : nodes;
    };
    for( var p in fetch){
        jQuery[p] = fetch[p];
    }
    root.$ = jQuery;

})(window);