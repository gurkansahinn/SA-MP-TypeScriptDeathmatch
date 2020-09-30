import { SampPlayerNativeFunctions } from "./SampPlayerNativeFunctions";
import { TextDraw, TextDrawConfig } from "./TextDraw";
export declare class SampPlayer extends SampPlayerNativeFunctions {
    state: any;

    constructor(playerid: number);

    get vehicleId(): number;
    get position(): {
        x: any;
        y: any;
        z: any;
        angle: number;
        vehicleId: number;
    };
    get trailerId(): number;
    get speed(): {
        x: any;
        y: any;
        z: any;
    };
    setState(newState: any): void;
    TextDraw(config: TextDrawConfig, name: string): TextDraw;
    TextDrawShow(name: string): void;
    TextDrawHide(name: string): void;
    TextDrawDestory(name: string): void;
}
