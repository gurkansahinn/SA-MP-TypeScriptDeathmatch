"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextDraws = void 0;
samp.on('OnPlayerClickPlayerTextDraw', (playerid, playertextid) => {
    TextDraws.onclick(playerid, playertextid);
});
samp.on('OnPlayerDisconnect', (playerid) => {
    TextDraws.destroyAll(playerid);
});
class TextDraws {
    static getAll(playerid) {
        return this.tds[`id${playerid}`] || [];
    }
    static destroy(playerid, name) {
        const tds = (this.tds[`id${playerid}`] || []);
        tds.filter(td => td.name === name).forEach(td => td.destroy());
        const newValue = tds.filter(td => td.name !== name);
        if (newValue.length > 0) {
            this.tds[`id${playerid}`] = newValue;
        }
        else if (this.tds[`id${playerid}`] !== undefined) {
            delete this.tds[`id${playerid}`];
        }
    }
    static destroyAll(playerid) {
        (this.tds[`id${playerid}`] || []).forEach((td) => {
            td.destroy();
        });
        delete this.tds[`id${playerid}`];
    }
    static add(playerid, td) {
        if (this.tds[`id${playerid}`] === undefined) {
            this.tds[`id${playerid}`] = [];
        }
        this.tds[`id${playerid}`].push(td);
    }
    static onclick(playerid, textid) {
        (this.tds[`id${playerid}`] || []).forEach((td) => {
            if (td.textid === textid) {
                td.callback.forEach(c => c(playerid));
            }
        });
    }
}
exports.TextDraws = TextDraws;
TextDraws.tds = {};
//# sourceMappingURL=TextDraws.js.map