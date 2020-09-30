"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayers = void 0;
const SampFunctions_1 = require("./SampFunctions");
const SampPlayers_1 = require("./SampPlayers");
function getPlayers(id = -1) {

    if (id == -1) {
        const maxPlayers = SampFunctions_1.GetMaxPlayers();
        const res = [];
        for (let i = 0; i <= maxPlayers; i++) {
            if (SampFunctions_1.IsPlayerConnected(i)) {
                res.push(SampPlayers_1.SampPlayers.getClass(i));
            }
        }
        return res;
    }
    else {
        return SampPlayers_1.SampPlayers.getClass(id);
    }
}
exports.getPlayers = getPlayers;
//# sourceMappingURL=getPlayers.js.map