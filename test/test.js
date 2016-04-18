var distributors = [];
var recurPushDistributors = function(distributor){
    if(!distributor.upLine){
        return;
    }
    if(typeof distributor.upLine === 'string'){
        distributors.push(distributor.upLine);
    }else{
        distributors.push(distributor.upLine._id);
    }
    recurPushDistributors(distributor.upLine);
};
recurPushDistributors({user: '11323213', upLine: {_id: 'xx', user: '111', upLine: '1121'}});
console.log(distributors)