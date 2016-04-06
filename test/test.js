function* test(){
    console.log("***")
    var re = yield test1();
    return re;
}
console.log(test.constructor.name);