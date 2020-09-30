import { SampNode, SendClientMessage } from "samp-node-lib";
import { SendServerMessage } from "./globals";

SampNode.registerEvent("DIALOG_TEST", "idds");
SampNode.on("DIALOG_TEST", (playerid, response, listitem, inputtext) => {
    SendServerMessage(playerid, "test");
});