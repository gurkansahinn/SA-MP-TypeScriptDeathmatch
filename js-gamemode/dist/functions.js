"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const samp_node_lib_1 = require("samp-node-lib");
const globals_1 = require("./globals");
module.exports.Dialog_Show = (playerid, dialog_name, type_id, header_text, inputtext, button1, button2) => {
    samp_node_lib_1.SampNode.callPublic("JS_DialogShow", "issdssss", playerid, dialog_name, dialog_name, type_id, header_text, inputtext, button1, button2);
};
module.exports.SetServerSettings = () => {
    samp_node_lib_1.SendRconCommand("hostname " + globals_1.SERVER_NAME);
    samp_node_lib_1.SetGameModeText("ADM: " + globals_1.SERVER_VERSION);
    samp_node_lib_1.DisableInteriorEnterExits();
    samp_node_lib_1.ManualVehicleEngineAndLights();
    samp_node_lib_1.EnableStuntBonusForAll(0);
    samp_node_lib_1.SampNode.callNative('Streamer_ToggleErrorCallback', ("b"), true);
    samp_node_lib_1.SampNode.callNative('Streamer_SetVisiableItems', "ii", 7, 1024);
    samp_node_lib_1.SampNode.callNative('Streamer_ToggleChunkStream', "b", true);
    console.log("Server settings applied.");
};
//# sourceMappingURL=functions.js.map