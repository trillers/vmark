var RoleMsgDispatcher = require('./common/RoleMsgDispatcher');
var dispatcher = new RoleMsgDispatcher();

require('../../platform/main/handlers/PaHandler')(dispatcher);
require('../../platform/main/handlers/PoHandler')(dispatcher);
require('../../tenant/main/handlers/TaHandler')(dispatcher);

module.exports = dispatcher;