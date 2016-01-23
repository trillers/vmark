var assert = require('chai').assert;
var contextLoader = require('../../../../../src/context');
var context = contextLoader.context;
var logger = context.logger;

before(function(done){
    contextLoader.check(function(){
        done();
    });
});

describe('TenantPrivilege', function(){
    describe('addPrivilege', function(){
        var tenantId = 'test01';
        it('Succeed to add privilege to tenant', function(done){
            var kv = context.kvs.tenantPrivilege;
            var privilege = 'recontent';
            kv.addPrivilege(tenantId, privilege, function(err, result){
                err && console.error(err);
                console.info(result);
                done();
            });
        });

        it('Succeed to add privilege to tenant 2', function(done){
            var kv = context.kvs.tenantPrivilege;
            var privilege = 'bot';
            kv.addPrivilege(tenantId, privilege, function(err, result){
                err && console.error(err);
                console.info(result);
                done();
            });
        });
    });

    describe('getAllPrivileges', function(){
        var tenantId = 'test01';
        it('Succeed to get all privileges', function(done){
            var kv = context.kvs.tenantPrivilege;
            kv.getAllPrivileges(tenantId, function(err, result){
                err && console.error(err);
                console.info(result);
                done();
            });
        });
    });

    describe('removePrivilege', function(){
        var tenantId = 'test01';
        it('Succeed to remove privilege for tenant', function(done){
            var kv = context.kvs.tenantPrivilege;
            var privilege = 'recontent';
            kv.removePrivilege(tenantId, privilege, function(err, result){
                err && console.error(err);
                console.info(result);
                done();
            });
        });

        it('Succeed to remove privilege for tenant 2', function(done){
            var kv = context.kvs.tenantPrivilege;
            var privilege = 'bot';
            kv.removePrivilege(tenantId, privilege, function(err, result){
                err && console.error(err);
                console.info(result);
                done();
            });
        });
    });
});