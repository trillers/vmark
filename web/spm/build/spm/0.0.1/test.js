var distributors=[],recurPushDistributors=function(i){i.upLine&&("string"==typeof i.upLine?distributors.push(i.upLine):distributors.push(i.upLine._id),recurPushDistributors(i.upLine))};recurPushDistributors({user:"11323213",upLine:{_id:"xx",user:"111",upLine:"1121"}}),console.log(distributors);