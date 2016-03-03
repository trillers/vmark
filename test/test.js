function test(){
    var x=3;
    function test1(){
        x = x+1
    }
    function getx(){
        return x;
    }
    return {
        test1: test1,
        getx: getx
    }
}

function test2(test){
    test()
}
var s = test();
console.log(s.getx());
s.test1();
console.log(s.getx());