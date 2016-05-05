var test = "dd/_:name/_:id";
function toPattern(route){
    return route.replace(/_[a-zA-Z0-9:]+/g, "*");
}

console.log(toPattern(test));