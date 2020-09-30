"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampNode = void 0;
class SampNode {
    static on(eventName, func) {
        samp.on(eventName, func);
    }
    static addListener(eventName, func) {
        samp.addListener(eventName, func);
    }
    static addEventListener(eventName, func) {
        samp.addEventListener(eventName, func);
    }
    static removeListener(eventName, func) {
        samp.removeListener(eventName, func);
    }
    static removeEventListener(eventName, func) {
        samp.removeEventListener(eventName, func);
    }
    static registerEvent(eventName, paramTypes) {
        return samp.registerEvent(eventName, paramTypes);
    }
    static fire(eventName, ...args) {
        samp.fire(eventName, ...args);
    }
    static callPublic(publicName, paramTypes, ...args) {
        return samp.callPublic(publicName, paramTypes, ...args);
    }
    static callPublicFloat(publicName, paramTypes, ...args) {
        return samp.callPublicFloat(publicName, paramTypes, ...args);
    }
    static logprint(str) {
        return samp.logprint(str);
    }
    static callNative(nativeName, paramTypes, ...args) {
        return samp.callNative(nativeName, paramTypes, ...args);
    }
    static callNativeFloat(nativeName, paramTypes, ...args) {
        return samp.callNativeFloat(nativeName, paramTypes, ...args);
    }
}
exports.SampNode = SampNode;
//# sourceMappingURL=SampNode.js.map