var RoleMsgDispatcher = require('./common/RoleMsgDispatcher');
var dispatcher = new RoleMsgDispatcher();

require('../../platform/main/handlers/PaHandler')(dispatcher);
require('../../platform/main/handlers/PoHandler')(dispatcher);
require('../../platform/tenant/handlers/TaHandler')(dispatcher);
require('../../platform/tenant/handlers/ToHandler')(dispatcher);


module.exports = dispatcher;