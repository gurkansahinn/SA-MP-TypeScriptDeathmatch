export declare class DynamicObject {
    private objectid;
    private state;
    private closed;
    private opened;
    private openDuration;
    private closeDuration;
    constructor(modelid: number, x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number, closeDuration?: number, dd?: number);
    setOpen(x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number, openDuration?: number | null): this;
    open(): boolean;
    close(): boolean;
    destroy(): void;
    private move;
}
