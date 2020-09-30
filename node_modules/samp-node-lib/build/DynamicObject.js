"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicObject = void 0;
const SampFunctions_1 = require("./SampFunctions");
class DynamicObject {
    constructor(modelid, x, y, z, rotX, rotY, rotZ, closeDuration = 3, dd = 1000) {
        this.objectid = null;
        this.state = false;
        this.closed = null;
        this.opened = null;
        this.openDuration = null;
        this.closeDuration = null;
        this.closed = {
            x,
            y,
            z,
            rotX,
            rotY,
            rotZ
        };
        this.closeDuration = closeDuration;
        this.objectid = SampFunctions_1.CreateObject(modelid, x, y, z, rotX, rotY, rotZ, dd);
        return this;
    }
    setOpen(x, y, z, rotX, rotY, rotZ, openDuration = null) {
        this.opened = {
            x,
            y,
            z,
            rotX,
            rotY,
            rotZ
        };
        this.openDuration = openDuration === null ? (this.closeDuration || 3) : openDuration;
        return this;
    }
    open() {
        if (!this.state) {
            return this.move();
        }
        return false;
    }
    close() {
        if (this.state) {
            return this.move();
        }
        return false;
    }
    destroy() {
        if (this.objectid !== null) {
            SampFunctions_1.DestroyObject(this.objectid);
            this.objectid = null;
        }
    }
    move() {
        const target = this.state ? this.closed : this.opened;
        if (target === null || this.objectid === null) {
            return false;
        }
        const { x, y, z, rotX, rotY, rotZ } = target;
        SampFunctions_1.MoveObject(this.objectid, x, y, z, (this.state ? this.closeDuration : this.openDuration) || this.openDuration || this.closeDuration || 3, rotX, rotY, rotZ);
        this.state = !this.state;
        return true;
    }
}
exports.DynamicObject = DynamicObject;
//# sourceMappingURL=DynamicObject.js.map