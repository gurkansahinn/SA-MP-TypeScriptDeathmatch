"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextDraw = void 0;
const SampFunctions_1 = require("./SampFunctions");
const TextDraws_1 = require("./TextDraws");
class TextDraw {
    constructor(playerid, config, name) {
        this.config = {};
        this._callback = [];
        this.playerid = playerid;
        this.config = config;
        this._name = name;
        this._textid = SampFunctions_1.SampFunctions.CreatePlayerTextDraw(playerid, config.x || 0, config.y || 0, config.text || '');
        this.setState(config);
        TextDraws_1.TextDraws.add(playerid, this);
        return this;
    }
    get textid() {
        return this._textid;
    }
    get name() {
        return this._name;
    }
    get callback() {
        return this._callback;
    }
    onClick(callBack) {
        this._callback.push(callBack);
        if (this.config.setSelectable !== 1 && this._textid !== null) {
            this.config.setSelectable = 1;
            SampFunctions_1.SampFunctions.PlayerTextDrawSetSelectable(this.playerid, this._textid, 1);
        }
        return this;
    }
    show() {
        if (this._textid === null) {
            return this;
        }
        SampFunctions_1.SampFunctions.PlayerTextDrawShow(this.playerid, this._textid);
        return this;
    }
    hide() {
        if (this._textid === null) {
            return this;
        }
        SampFunctions_1.SampFunctions.PlayerTextDrawHide(this.playerid, this._textid);
        return this;
    }
    setText(value) {
        if (this._textid === null) {
            return this;
        }
        SampFunctions_1.SampFunctions.PlayerTextDrawSetString(this.playerid, this._textid, value);
        return this;
    }
    destroy() {
        if (this._textid === null) {
            return this;
        }
        SampFunctions_1.SampFunctions.PlayerTextDrawDestroy(this.playerid, this._textid);
        this._textid = null;
    }
    setState(config) {
        if (this._textid === null) {
            return this;
        }
        this.config = Object.assign(Object.assign({}, this.config), config);
        if (config.text !== undefined) {
            SampFunctions_1.SampFunctions.PlayerTextDrawSetString(this.playerid, this._textid, config.text);
        }
        if (config.letterSize !== undefined) {
            SampFunctions_1.SampFunctions.PlayerTextDrawLetterSize(this.playerid, this._textid, config.letterSize.x, config.letterSize.y);
        }
        if (config.textSize !== undefined) {
            SampFunctions_1.SampFunctions.PlayerTextDrawTextSize(this.playerid, this._textid, config.textSize.x, config.textSize.y);
        }
        if (config.align !== undefined) {
            SampFunctions_1.SampFunctions.PlayerTextDrawAlignment(this.playerid, this._textid, config.align);
        }
        if (config.color !== undefined) {
            SampFunctions_1.SampFunctions.PlayerTextDrawColor(this.playerid, this._textid, config.color);
        }
        if (config.useBox !== undefined) {
            SampFunctions_1.SampFunctions.PlayerTextDrawUseBox(this.playerid, this._textid, config.useBox);
        }
        if (config.boxColor !== undefined) {
            SampFunctions_1.SampFunctions.PlayerTextDrawBoxColor(this.playerid, this._textid, config.boxColor);
        }
        if (config.shadowSize !== undefined) {
            SampFunctions_1.SampFunctions.PlayerTextDrawSetShadow(this.playerid, this._textid, config.shadowSize);
        }
        if (config.outlineSize !== undefined) {
            SampFunctions_1.SampFunctions.PlayerTextDrawSetOutline(this.playerid, this._textid, config.outlineSize);
        }
        if (config.backgroundColor !== undefined) {
            SampFunctions_1.SampFunctions.PlayerTextDrawBackgroundColor(this.playerid, this._textid, config.backgroundColor);
        }
        if (config.font !== undefined) {
            SampFunctions_1.SampFunctions.PlayerTextDrawFont(this.playerid, this._textid, config.font);
        }
        if (config.setProportional !== undefined) {
            SampFunctions_1.SampFunctions.PlayerTextDrawSetProportional(this.playerid, this._textid, config.setProportional);
        }
        if (config.setSelectable !== undefined) {
            SampFunctions_1.SampFunctions.PlayerTextDrawSetSelectable(this.playerid, this._textid, config.setSelectable);
        }
        if (config.previewRot !== undefined) {
            SampFunctions_1.SampFunctions.PlayerTextDrawSetPreviewRot(this.playerid, this._textid, config.previewRot.fRotX, config.previewRot.fRotY, config.previewRot.fRotZ, config.previewRot.fZoom);
        }
        if (config.vehicleColor !== undefined) {
            SampFunctions_1.SampFunctions.PlayerTextDrawSetPreviewVehCol(this.playerid, this._textid, config.vehicleColor.color1, config.vehicleColor.color2);
        }
        if (config.previewModel !== undefined) {
            SampFunctions_1.SampFunctions.PlayerTextDrawSetPreviewModel(this.playerid, this._textid, config.previewModel);
        }
        return this;
    }
}
exports.TextDraw = TextDraw;
//# sourceMappingURL=TextDraw.js.map