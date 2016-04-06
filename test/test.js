function* test(){
    console.log("***")
    yield test1.call(null, '1111');
}
require('../src/app/util').isGenerator(test);