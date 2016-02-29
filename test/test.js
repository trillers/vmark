"use strict";

var [first, ...args] = [1, 2, 3];

test({sex: '222'}, (p)=>{
    console.log(p)
});
function test({name=222, sex}, test){
    test('111');
}