import { SendClientMessage } from "samp-node-lib";

export declare const SendServerMessage: (playerid: number, msg: string) => number;

module.exports.SendServerMessage = function (playerid: number, msg: string) {
    SendClientMessage(playerid, "rgba(255, 255, 255)", "SUNUCU: " + "{FFFFFF}" + msg);
};

export declare const SendUsageMessage: (playerid: number, msg: string) => number;

module.exports.SendUsageMessage = function (playerid: number, msg: string) {
    SendClientMessage(playerid, "rgba(255, 255, 255)", "KULLANIM: " + "{FFFFFF}" + msg);
};

export let SERVER_NAME = "Amper Deathmatch - TypeScript Test";
export let SERVER_VERSION = "0.0";