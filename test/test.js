function* test(){
    console.log("***")
    yield test1.call(null, '1111');
}
function* test1(p){
    console.log(p)
}
require('co')(function*(){
    yield* test();
})