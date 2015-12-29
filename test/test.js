var test = {
    name: {
        id: 123
    },
    sex: '123'
}
for(var prop in test){
    if(prop === 'name'){
        console.log(test[prop])
        delete test[prop]['id']
    }
}
console.log(test)