var assert = require('chai').assert;
var contextLoader = require('../../../../src/context');
var context = contextLoader.context;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});

describe('RecontentService', function(){
    describe('generate', function(){
        var form = {
            originalUrl: 'http://mp.weixin.qq.com/s?__biz=MzA5Mzc3NTUwNw==&mid=402872868&idx=4&sn=a203d59bba7615ceed3ab40be6dd17c8&3rd=MzA3MDU4NTYzMw==&scene=6#rd',
            adlink: 'NaziK'
        };

        it('Succeed to generate recontent', function(done){
            var service = context.services.recontentService;
            service.gen(form, function(err, recontent){
                console.error(err);
                console.info(recontent);
                //done();
                setTimeout(function(){
                    done();
                }, 3000);
            });
        });
    });

});