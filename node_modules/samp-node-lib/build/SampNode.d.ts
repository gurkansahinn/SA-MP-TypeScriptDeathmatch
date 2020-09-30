export declare class SampNode {
    static on(eventName: string, func: (...args: Array<any>) => void): void;
    static addListener(eventName: string, func: (...args: Array<any>) => void): void;
    static addEventListener(eventName: string, func: (...args: Array<any>) => void): void;
    static removeListener(eventName: string, func: (...args: Array<any>) => void | Array<(...args: Array<any>) => void>): void;
    static removeEventListener(eventName: string, func: (...args: Array<any>) => void | Array<(...args: Array<any>) => void>): void;
    static registerEvent(eventName: string, paramTypes: string): boolean;
    static fire(eventName: string, ...args: Array<any>): void;
    static callPublic(publicName: string, paramTypes: string, ...args: Array<any>): any;
    static callPublicFloat(publicName: string, paramTypes: string, ...args: Array<any>): any;
    static logprint(str: string): any;
    static callNative(nativeName: string, paramTypes: string, ...args: Array<any>): any;
    static callNativeFloat(nativeName: string, paramTypes: string, ...args: Array<any>): any;
}
