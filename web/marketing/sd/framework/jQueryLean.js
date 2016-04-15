import * as fetch from './fetchMonkeyPatch';
const _ = require('../js/util');

;(function(root, undefined){
    'use strict';

    let _jQuery = root.jQuery;
    if(_jQuery) {
        return _jQuery;
    }

    let domify = obj => {
        if(!obj){
            return;
        }
        let domApi = {

            append: function(str){
                var me = this;
                var div = document.createElement('div');
                div.innerHTML = str;
                while (div.children.length > 0) {
                    me.appendChild(div.children[0]);
                }
                return this;
            },

            css: function(opts){
                if(typeof opts === 'string'){
                    return this.style[opts];
                }
                for(var p in opts){
                    this.style[p] = opts[p];
                }
                return this;
            },

            parent: function(){
                return domify(this.parentNode);
            },

            next: function(){
                return domify(this.nextSbiling);
            },

            remove: function(){
                if(!this.parentNode){
                    return;
                }
                this.parentNode.removeChild(this);
            },

            addClass: function(cls){
                if (!this.hasClass(cls)) this.className += " " + cls;
            },

            removeClass: function(cls){
                if (this.hasClass(cls)) {
                    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
                    this.className = this.className.replace(reg, ' ');
                }
            },

            hasClass: function(cls){
                return this.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
            },

            outerWidth: function(){
                if(this.css && (this.css('marginLeft') || this.css('marginRight'))){
                    return this.offsetWidth + parseInt(this.css('marginLeft') || 0, 10) + parseInt(this.css('marginRight') || 0, 10)
                }
                return this.offsetWidth;
            },

            height: function(){
                return this.offsetHeight;
            }
        };
        if(Array.isArray(obj)){
            obj.each = obj.forEach;
            return obj.map(o=>_.mixin(o, domApi));
        }
        return _.mixin(obj, domApi);
    };

    let jQuery = selector => {
        if(typeof selector === 'object'){
            return domify(selector);
        }
        let nodes = document.querySelectorAll(selector);
        nodes = [].slice.apply(nodes);
        return nodes.length ===1 ? domify(nodes[0]) : domify(nodes);
    };


    jQuery = _.mixin(jQuery, fetch);

    root.$ = jQuery;

})(window);