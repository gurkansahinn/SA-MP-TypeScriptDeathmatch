"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER_VERSION = exports.SERVER_NAME = void 0;
const samp_node_lib_1 = require("samp-node-lib");
module.exports.SendServerMessage = function (playerid, msg) {
    samp_node_lib_1.SendClientMessage(playerid, "rgba(255, 255, 255)", "SUNUCU: " + "{FFFFFF}" + msg);
};
module.exports.SendUsageMessage = function (playerid, msg) {
    samp_node_lib_1.SendClientMessage(playerid, "rgba(255, 255, 255)", "KULLANIM: " + "{FFFFFF}" + msg);
};
exports.SERVER_NAME = "Amper Deathmatch - TypeScript Test";
exports.SERVER_VERSION = "0.0";
//# sourceMappingURL=globals.js.map