import { DisableInteriorEnterExits, EnableStuntBonusForAll, ManualVehicleEngineAndLights, SampNode, SendRconCommand, SetGameModeText, ShowPlayerMarkers } from "samp-node-lib";
import { SERVER_NAME, SERVER_VERSION } from "./globals";

export declare const Dialog_Show: (playerid: number, dialog_name: string, type_id: number, header_text: string, inputtext: string, button1: string, button2: string) => number;

module.exports.Dialog_Show = (playerid: number, dialog_name: string, type_id: number, header_text: string, inputtext: string, button1: string, button2: string) => {
    SampNode.callPublic("JS_DialogShow", "issdssss", playerid, dialog_name, dialog_name, type_id, header_text, inputtext, button1, button2);
};

export declare const SetServerSettings: () => number;

module.exports.SetServerSettings = () => {
    SendRconCommand("hostname " + SERVER_NAME);
    SetGameModeText("ADM: " + SERVER_VERSION);

    DisableInteriorEnterExits();
    ManualVehicleEngineAndLights();
    EnableStuntBonusForAll(0);
    SampNode.callNative('Streamer_ToggleErrorCallback', ("b"), true);
    SampNode.callNative('Streamer_SetVisiableItems', "ii", 7, 1024);
    SampNode.callNative('Streamer_ToggleChunkStream', "b", true);
    console.log("Server settings applied.");
};