"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampPlayer = void 0;
const SampPlayerNativeFunctions_1 = require("./SampPlayerNativeFunctions");
const SampFunctions_1 = require("./SampFunctions");
const TextDraw_1 = require("./TextDraw");
const TextDraws_1 = require("./TextDraws");
class SampPlayer extends SampPlayerNativeFunctions_1.SampPlayerNativeFunctions {
    constructor(playerid) {
        super(playerid);
        this.state = {};
    }
    get vehicleId() {
        return this.GetPlayerVehicleID();
    }
    get position() {
        const p = this.GetPlayerPos();
        const { vehicleId } = this;
        const angle = vehicleId !== 0 ? SampFunctions_1.GetVehicleZAngle(vehicleId) : this.GetPlayerFacingAngle();
        return {
            x: p[0],
            y: p[1],
            z: p[2],
            angle,
            vehicleId
        };
    }
    get trailerId() {
        const { vehicleId } = this;
        return vehicleId !== 0 ? SampFunctions_1.GetVehicleTrailer(vehicleId) : 0;
    }
    get speed() {
        const { vehicleId } = this;
        const speed = vehicleId !== 0 ? SampFunctions_1.GetVehicleVelocity(vehicleId) : this.GetPlayerVelocity();
        return {
            x: speed[0],
            y: speed[1],
            z: speed[2]
        };
    }
    setState(newState) {
        this.state = Object.assign(Object.assign({}, this.state), newState);
    }
    TextDraw(config, name) {
        return new TextDraw_1.TextDraw(this.playerid, config, name);
    }
    TextDrawShow(name) {
        TextDraws_1.TextDraws.getAll(this.playerid).filter(td => td.name === name).forEach(td => td.show());
    }
    TextDrawHide(name) {
        TextDraws_1.TextDraws.getAll(this.playerid).filter(td => td.name === name).forEach(td => td.hide());
    }
    TextDrawDestory(name) {
        TextDraws_1.TextDraws.destroy(this.playerid, name);
    }
}
exports.SampPlayer = SampPlayer;
//# sourceMappingURL=SampPlayer.js.map