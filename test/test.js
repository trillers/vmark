"use strict";

var o ={
    '0': '111',
    '1': '2222'
}
console.log(typeof o)
console.log(Array.prototype.slice.apply(o));
function test(){
    console.log(typeof arguments);
    console.log(Array.prototype.slice.apply(arguments));
}
test('111', '2222')