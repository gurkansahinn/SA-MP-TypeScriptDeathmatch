import { TEXTDRAW_ALIGN } from "./SampEnum";
export interface TextDrawConfig {
    x?: number;
    y?: number;
    text?: string;
    letterSize?: {
        x: number;
        y: number;
    };
    textSize?: {
        x: number;
        y: number;
    };
    align?: TEXTDRAW_ALIGN;
    color?: string;
    useBox?: 0 | 1;
    boxColor?: string;
    shadowSize?: number;
    outlineSize?: number;
    backgroundColor?: string;
    font?: 0 | 1 | 2 | 3 | 4 | 5;
    setProportional?: 0 | 1;
    setSelectable?: 0 | 1;
    previewRot?: {
        fRotX: number;
        fRotY: number;
        fRotZ: number;
        fZoom: number;
    };
    vehicleColor?: {
        color1: number;
        color2: number;
    };
    previewModel?: number;
}
export declare class TextDraw {
    private playerid;
    private config;
    constructor(playerid: number, config: TextDrawConfig, name: string);
    private _textid;
    get textid(): number | null;
    private _name;
    get name(): string;
    private _callback;
    get callback(): ((playerid: number) => void)[];
    onClick(callBack: (playerid: number) => void): this;
    show(): this;
    hide(): this;
    setText(value: string): this;
    destroy(): this | undefined;
    setState(config: TextDrawConfig): this;
}
