"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampPlayers = void 0;
const SampPlayer_1 = require("./SampPlayer");
class SampPlayers {
    static getNewClass(playerid) {
        SampPlayers.ids[`id${playerid}`] = new SampPlayer_1.SampPlayer(playerid);
        return SampPlayers.ids[`id${playerid}`];
    }
    static getClass(playerid) {
        if (SampPlayers.ids[`id${playerid}`] === undefined) {
            SampPlayers.ids[`id${playerid}`] = new SampPlayer_1.SampPlayer(playerid);
        }
        return SampPlayers.ids[`id${playerid}`];
    }
    static removeClass(playerid) {
        if (SampPlayers.ids[`id${playerid}`] !== undefined) {
            const playerClass = SampPlayers.ids[`id${playerid}`];
            delete SampPlayers.ids[`id${playerid}`];
            return playerClass;
        }
        return new SampPlayer_1.SampPlayer(playerid);
    }
}
exports.SampPlayers = SampPlayers;
SampPlayers.ids = {};
//# sourceMappingURL=SampPlayers.js.map