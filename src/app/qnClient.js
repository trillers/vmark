var Qn = require('./qn');
var Promise = require('bluebird');

var client = new Qn('Ulac7lEuDqiZ593owTOcQ0L8QieCC8D0tm6itYaU', 'PohkfZBuxkAxLiIk6lMR39IdbPy6jpPM27jtEL03', 'china', '7u2kxz.com2.z0.glb.qiniucdn.com');

module.exports = Promise.promisifyAll(client);