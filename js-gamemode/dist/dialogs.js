"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const samp_node_lib_1 = require("samp-node-lib");
const globals_1 = require("./globals");
samp_node_lib_1.SampNode.registerEvent("DIALOG_TEST", "idds");
samp_node_lib_1.SampNode.on("DIALOG_TEST", (playerid, response, listitem, inputtext) => {
    globals_1.SendServerMessage(playerid, "test");
});
//# sourceMappingURL=dialogs.js.map