"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllVehicle = void 0;
const SampFunctions_1 = require("./SampFunctions");
function getAllVehicle() {
    let vehicles = [];
    for (let i = 1; i <= 2000; i++) {
        if (SampFunctions_1.IsValidVehicle(i)) {
            vehicles.push(i);
        }
    }
    return vehicles;
}
exports.getAllVehicle = getAllVehicle;
//# sourceMappingURL=getAllVehicle.js.map