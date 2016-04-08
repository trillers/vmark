var _ =require('underscore');
var doc={
    t: {
        t: '111'
    }
};
var test = _.range(2).reduce((acc, curr)=>{
    return acc.t;
}, doc);
console.log(test)