import { TextDraw } from "./TextDraw";
export declare class TextDraws {
    static tds: any;
    static getAll(playerid: number): TextDraw[];
    static destroy(playerid: number, name: string): void;
    static destroyAll(playerid: number): void;
    static add(playerid: number, td: TextDraw): void;
    static onclick(playerid: number, textid: number): void;
}
