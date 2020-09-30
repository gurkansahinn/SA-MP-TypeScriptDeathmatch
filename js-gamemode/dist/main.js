"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const samp_node_lib_1 = require("samp-node-lib");
const functions_1 = require("./functions");
require("./mysql");
require("./dialogs");
const functions_2 = require("./functions");
samp_node_lib_1.OnGameModeInit(() => {
    functions_2.SetServerSettings();
});
samp_node_lib_1.OnPlayerConnect((player) => {
    functions_1.Dialog_Show(player.playerid, "DIALOG_TEST", samp_node_lib_1.DIALOG_STYLE.INPUT, "header", "input", "test", "test2");
});
samp_node_lib_1.OnPlayerDisconnect((player, reason) => {
    console.log(samp_node_lib_1.GetPVarInt(player.playerid, "test"));
});
//# sourceMappingURL=main.js.map