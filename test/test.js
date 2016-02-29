var arr = [1, 2, '11'];
var lastDate = (new Date()).getTime();
console.log(arr.some(i=>i===2))
console.warn((new Date()).getTime() - lastDate)

var lastDate2 = (new Date()).getTime();
console.log(arr.indexOf(2))
console.warn((new Date()).getTime() - lastDate2)