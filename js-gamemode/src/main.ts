import { DIALOG_STYLE, getPlayers, OnGameModeInit, OnPlayerConnect, SampNode, SendClientMessage, SampPlayer, OnPlayerDisconnect, SetPVarInt, GetPVarInt } from "samp-node-lib";
import { Dialog_Show } from './functions';

import "./mysql";
import "./dialogs";
import { SetServerSettings } from "./functions";

OnGameModeInit(() => {
    SetServerSettings();
});

OnPlayerConnect((player) => {

    Dialog_Show(player.playerid, "DIALOG_TEST", DIALOG_STYLE.INPUT, "header", "input", "test", "test2");
});

OnPlayerDisconnect((player, reason) => {
    console.log(GetPVarInt(player.playerid, "test"));
});