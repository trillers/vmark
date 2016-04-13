function test(){
    console.log(arguments)
    console.log([].slice.apply(arguments))
}
test(1, 2, [1, 2])