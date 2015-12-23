var wsConns = require('../../../app/wsConns');
var context = require('../../../context/context');
var securityService = context.services.securityService;
var authResults = securityService.authResults;

module.exports = function* (openid, sceneId){
    var conn = wsConns[sceneId];
    if(conn){
        var result = {};
        var auth = yield securityService.authenticateAsync(openid);
        context.logger.debug(auth);
        if(!auth){
            result.auth = 'failed';
            result.msg = '登陆失败';
            conn.write(JSON.stringify(result));
            return '[系统]: 登陆后台系统失败！';
        }
        else if(auth.result != authResults.OK && auth.result != authResults.NO_BOUND_BOT){
            result.auth = 'failed';
            result.msg = '登陆失败';
            conn.write(JSON.stringify(result));
            return '[系统]: 登陆后台系统失败！';
        }
        result.auth = 'success';
        result.msg = '登陆成功';
        result.openid = auth.user.openid;
        conn.write(JSON.stringify(result));
        return '[系统]: 登陆后台系统成功！';
    }else{
        return '[系统]: 登陆后台系统失败！';
    }
}
