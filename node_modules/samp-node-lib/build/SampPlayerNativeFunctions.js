"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampPlayerNativeFunctions = void 0;
const SampFunctions_1 = require("./SampFunctions");
class SampPlayerNativeFunctions {
    constructor(playerid) {
        this.playerid = playerid;
    }
    SendClientMessage(color, message) {
        return SampFunctions_1.SampFunctions.SendClientMessage(this.playerid, color, message);
    }
    SendPlayerMessageToPlayer(senderid, message) {
        return SampFunctions_1.SampFunctions.SendPlayerMessageToPlayer(this.playerid, senderid, message);
    }
    SendDeathMessageToPlayer(killer, killee, weapon) {
        return SampFunctions_1.SampFunctions.SendDeathMessageToPlayer(this.playerid, killer, killee, weapon);
    }
    GameTextForPlayer(string, time, style) {
        return SampFunctions_1.SampFunctions.GameTextForPlayer(this.playerid, string, time, style);
    }
    IsPlayerNPC() {
        return SampFunctions_1.SampFunctions.IsPlayerNPC(this.playerid);
    }
    IsPlayerAdmin() {
        return SampFunctions_1.SampFunctions.IsPlayerAdmin(this.playerid);
    }
    Kick() {
        return SampFunctions_1.SampFunctions.Kick(this.playerid);
    }
    Ban() {
        return SampFunctions_1.SampFunctions.Ban(this.playerid);
    }
    BanEx(reason) {
        return SampFunctions_1.SampFunctions.BanEx(this.playerid, reason);
    }
    GetPlayerNetworkStats(retstr_size) {
        return SampFunctions_1.SampFunctions.GetPlayerNetworkStats(this.playerid, retstr_size);
    }
    GetPlayerVersion(len) {
        return SampFunctions_1.SampFunctions.GetPlayerVersion(this.playerid, len);
    }
    NetStats_GetConnectedTime() {
        return SampFunctions_1.SampFunctions.NetStats_GetConnectedTime(this.playerid);
    }
    NetStats_MessagesReceived() {
        return SampFunctions_1.SampFunctions.NetStats_MessagesReceived(this.playerid);
    }
    NetStats_BytesReceived() {
        return SampFunctions_1.SampFunctions.NetStats_BytesReceived(this.playerid);
    }
    NetStats_MessagesSent() {
        return SampFunctions_1.SampFunctions.NetStats_MessagesSent(this.playerid);
    }
    NetStats_BytesSent() {
        return SampFunctions_1.SampFunctions.NetStats_BytesSent(this.playerid);
    }
    NetStats_MessagesRecvPerSecond() {
        return SampFunctions_1.SampFunctions.NetStats_MessagesRecvPerSecond(this.playerid);
    }
    NetStats_PacketLossPercent() {
        return SampFunctions_1.SampFunctions.NetStats_PacketLossPercent(this.playerid);
    }
    NetStats_ConnectionStatus() {
        return SampFunctions_1.SampFunctions.NetStats_ConnectionStatus(this.playerid);
    }
    NetStats_GetIpPort(ip_port_len) {
        return SampFunctions_1.SampFunctions.NetStats_GetIpPort(this.playerid, ip_port_len);
    }
    ShowMenuForPlayer(menuid) {
        return SampFunctions_1.SampFunctions.ShowMenuForPlayer(menuid, this.playerid);
    }
    HideMenuForPlayer(menuid) {
        return SampFunctions_1.SampFunctions.HideMenuForPlayer(menuid, this.playerid);
    }
    GetPlayerMenu() {
        return SampFunctions_1.SampFunctions.GetPlayerMenu(this.playerid);
    }
    TextDrawShowForPlayer(text) {
        return SampFunctions_1.SampFunctions.TextDrawShowForPlayer(this.playerid, text);
    }
    TextDrawHideForPlayer(text) {
        return SampFunctions_1.SampFunctions.TextDrawHideForPlayer(this.playerid, text);
    }
    GangZoneShowForPlayer(zone, color) {
        return SampFunctions_1.SampFunctions.GangZoneShowForPlayer(this.playerid, zone, color);
    }
    GangZoneHideForPlayer(zone) {
        return SampFunctions_1.SampFunctions.GangZoneHideForPlayer(this.playerid, zone);
    }
    GangZoneFlashForPlayer(zone, flashcolor) {
        return SampFunctions_1.SampFunctions.GangZoneFlashForPlayer(this.playerid, zone, flashcolor);
    }
    GangZoneStopFlashForPlayer(zone) {
        return SampFunctions_1.SampFunctions.GangZoneStopFlashForPlayer(this.playerid, zone);
    }
    Attach3DTextLabelToPlayer(id, OffsetX, OffsetY, OffsetZ) {
        return SampFunctions_1.SampFunctions.Attach3DTextLabelToPlayer(id, this.playerid, OffsetX, OffsetY, OffsetZ);
    }
    CreatePlayer3DTextLabel(text, color, X, Y, Z, DrawDistance, attachedplayer, attachedvehicle, testLOS) {
        return SampFunctions_1.SampFunctions.CreatePlayer3DTextLabel(this.playerid, text, color, X, Y, Z, DrawDistance, attachedplayer, attachedvehicle, testLOS);
    }
    DeletePlayer3DTextLabel(id) {
        return SampFunctions_1.SampFunctions.DeletePlayer3DTextLabel(this.playerid, id);
    }
    UpdatePlayer3DTextLabelText(id, color, text) {
        return SampFunctions_1.SampFunctions.UpdatePlayer3DTextLabelText(this.playerid, id, color, text);
    }
    ShowPlayerDialog(dialogid, style, caption, info, button1, button2) {
        return SampFunctions_1.SampFunctions.ShowPlayerDialog(this.playerid, dialogid, style, caption, info, button1, button2);
    }
    gpci(maxlen) {
        return SampFunctions_1.SampFunctions.gpci(this.playerid, maxlen);
    }
    AttachObjectToPlayer(objectid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ) {
        return SampFunctions_1.SampFunctions.AttachObjectToPlayer(objectid, this.playerid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ);
    }
    EditObject(objectid) {
        return SampFunctions_1.SampFunctions.EditObject(this.playerid, objectid);
    }
    EditPlayerObject(objectid) {
        return SampFunctions_1.SampFunctions.EditPlayerObject(this.playerid, objectid);
    }
    SelectObject() {
        return SampFunctions_1.SampFunctions.SelectObject(this.playerid);
    }
    CancelEdit() {
        return SampFunctions_1.SampFunctions.CancelEdit(this.playerid);
    }
    CreatePlayerObject(modelid, X, Y, Z, rX, rY, rZ, DrawDistance) {
        return SampFunctions_1.SampFunctions.CreatePlayerObject(this.playerid, modelid, X, Y, Z, rX, rY, rZ, DrawDistance);
    }
    AttachPlayerObjectToVehicle(objectid, vehicleid, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, RotZ) {
        return SampFunctions_1.SampFunctions.AttachPlayerObjectToVehicle(this.playerid, objectid, vehicleid, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, RotZ);
    }
    SetPlayerObjectPos(objectid, X, Y, Z) {
        return SampFunctions_1.SampFunctions.SetPlayerObjectPos(this.playerid, objectid, X, Y, Z);
    }
    GetPlayerObjectPos(objectid) {
        return SampFunctions_1.SampFunctions.GetPlayerObjectPos(this.playerid, objectid);
    }
    SetPlayerObjectRot(objectid, RotX, RotY, RotZ) {
        return SampFunctions_1.SampFunctions.SetPlayerObjectRot(this.playerid, objectid, RotX, RotY, RotZ);
    }
    GetPlayerObjectRot(objectid) {
        return SampFunctions_1.SampFunctions.GetPlayerObjectRot(this.playerid, objectid);
    }
    GetPlayerObjectModel(objectid) {
        return SampFunctions_1.SampFunctions.GetPlayerObjectModel(this.playerid, objectid);
    }
    SetPlayerObjectNoCameraCol(objectid) {
        return SampFunctions_1.SampFunctions.SetPlayerObjectNoCameraCol(this.playerid, objectid);
    }
    IsValidPlayerObject(objectid) {
        return SampFunctions_1.SampFunctions.IsValidPlayerObject(this.playerid, objectid);
    }
    DestroyPlayerObject(objectid) {
        return SampFunctions_1.SampFunctions.DestroyPlayerObject(this.playerid, objectid);
    }
    MovePlayerObject(objectid, X, Y, Z, Speed, RotX, RotY, RotZ) {
        return SampFunctions_1.SampFunctions.MovePlayerObject(this.playerid, objectid, X, Y, Z, Speed, RotX, RotY, RotZ);
    }
    StopPlayerObject(objectid) {
        return SampFunctions_1.SampFunctions.StopPlayerObject(this.playerid, objectid);
    }
    IsPlayerObjectMoving(objectid) {
        return SampFunctions_1.SampFunctions.IsPlayerObjectMoving(this.playerid, objectid);
    }
    SetPlayerObjectMaterial(objectid, materialindex, modelid, txdname, texturename, materialcolor) {
        return SampFunctions_1.SampFunctions.SetPlayerObjectMaterial(this.playerid, objectid, materialindex, modelid, txdname, texturename, materialcolor);
    }
    SetPlayerObjectMaterialText(objectid, text, materialindex, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment) {
        return SampFunctions_1.SampFunctions.SetPlayerObjectMaterialText(this.playerid, objectid, text, materialindex, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment);
    }
    SetSpawnInfo(team, skin, x, y, z, rotation, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo) {
        return SampFunctions_1.SampFunctions.SetSpawnInfo(this.playerid, team, skin, x, y, z, rotation, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo);
    }
    SpawnPlayer() {
        return SampFunctions_1.SampFunctions.SpawnPlayer(this.playerid);
    }
    SetPlayerPos(x, y, z) {
        return SampFunctions_1.SampFunctions.SetPlayerPos(this.playerid, x, y, z);
    }
    SetPlayerPosFindZ(x, y, z) {
        return SampFunctions_1.SampFunctions.SetPlayerPosFindZ(this.playerid, x, y, z);
    }
    GetPlayerPos() {
        return SampFunctions_1.SampFunctions.GetPlayerPos(this.playerid);
    }
    SetPlayerFacingAngle(ang) {
        return SampFunctions_1.SampFunctions.SetPlayerFacingAngle(this.playerid, ang);
    }
    GetPlayerFacingAngle() {
        return SampFunctions_1.SampFunctions.GetPlayerFacingAngle(this.playerid);
    }
    IsPlayerInRangeOfPoint(range, x, y, z) {
        return SampFunctions_1.SampFunctions.IsPlayerInRangeOfPoint(this.playerid, range, x, y, z);
    }
    GetPlayerDistanceFromPoint(X, Y, Z) {
        return SampFunctions_1.SampFunctions.GetPlayerDistanceFromPoint(this.playerid, X, Y, Z);
    }
    IsPlayerStreamedIn(forplayerid) {
        return SampFunctions_1.SampFunctions.IsPlayerStreamedIn(this.playerid, forplayerid);
    }
    SetPlayerInterior(interiorid) {
        return SampFunctions_1.SampFunctions.SetPlayerInterior(this.playerid, interiorid);
    }
    GetPlayerInterior() {
        return SampFunctions_1.SampFunctions.GetPlayerInterior(this.playerid);
    }
    SetPlayerHealth(health) {
        return SampFunctions_1.SampFunctions.SetPlayerHealth(this.playerid, health);
    }
    GetPlayerHealth() {
        return SampFunctions_1.SampFunctions.GetPlayerHealth(this.playerid);
    }
    SetPlayerArmour(armour) {
        return SampFunctions_1.SampFunctions.SetPlayerArmour(this.playerid, armour);
    }
    GetPlayerArmour() {
        return SampFunctions_1.SampFunctions.GetPlayerArmour(this.playerid);
    }
    SetPlayerAmmo(weaponslot, ammo) {
        return SampFunctions_1.SampFunctions.SetPlayerAmmo(this.playerid, weaponslot, ammo);
    }
    GetPlayerAmmo() {
        return SampFunctions_1.SampFunctions.GetPlayerAmmo(this.playerid);
    }
    GetPlayerWeaponState() {
        return SampFunctions_1.SampFunctions.GetPlayerWeaponState(this.playerid);
    }
    GetPlayerTargetPlayer() {
        return SampFunctions_1.SampFunctions.GetPlayerTargetPlayer(this.playerid);
    }
    GetPlayerTargetActor() {
        return SampFunctions_1.SampFunctions.GetPlayerTargetActor(this.playerid);
    }
    SetPlayerTeam(teamid) {
        return SampFunctions_1.SampFunctions.SetPlayerTeam(this.playerid, teamid);
    }
    GetPlayerTeam() {
        return SampFunctions_1.SampFunctions.GetPlayerTeam(this.playerid);
    }
    SetPlayerScore(score) {
        return SampFunctions_1.SampFunctions.SetPlayerScore(this.playerid, score);
    }
    GetPlayerScore() {
        return SampFunctions_1.SampFunctions.GetPlayerScore(this.playerid);
    }
    GetPlayerDrunkLevel() {
        return SampFunctions_1.SampFunctions.GetPlayerDrunkLevel(this.playerid);
    }
    SetPlayerDrunkLevel(level) {
        return SampFunctions_1.SampFunctions.SetPlayerDrunkLevel(this.playerid, level);
    }
    SetPlayerColor(color) {
        return SampFunctions_1.SampFunctions.SetPlayerColor(this.playerid, color);
    }
    GetPlayerColor() {
        return SampFunctions_1.SampFunctions.GetPlayerColor(this.playerid);
    }
    SetPlayerSkin(skinid) {
        return SampFunctions_1.SampFunctions.SetPlayerSkin(this.playerid, skinid);
    }
    GetPlayerSkin() {
        return SampFunctions_1.SampFunctions.GetPlayerSkin(this.playerid);
    }
    GivePlayerWeapon(weaponid, ammo) {
        return SampFunctions_1.SampFunctions.GivePlayerWeapon(this.playerid, weaponid, ammo);
    }
    ResetPlayerWeapons() {
        return SampFunctions_1.SampFunctions.ResetPlayerWeapons(this.playerid);
    }
    SetPlayerArmedWeapon(weaponid) {
        return SampFunctions_1.SampFunctions.SetPlayerArmedWeapon(this.playerid, weaponid);
    }
    GetPlayerWeaponData(slot) {
        return SampFunctions_1.SampFunctions.GetPlayerWeaponData(this.playerid, slot);
    }
    GivePlayerMoney(money) {
        return SampFunctions_1.SampFunctions.GivePlayerMoney(this.playerid, money);
    }
    ResetPlayerMoney() {
        return SampFunctions_1.SampFunctions.ResetPlayerMoney(this.playerid);
    }
    SetPlayerName(name) {
        return SampFunctions_1.SampFunctions.SetPlayerName(this.playerid, name);
    }
    GetPlayerMoney() {
        return SampFunctions_1.SampFunctions.GetPlayerMoney(this.playerid);
    }
    GetPlayerState() {
        return SampFunctions_1.SampFunctions.GetPlayerState(this.playerid);
    }
    GetPlayerIp(len) {
        return SampFunctions_1.SampFunctions.GetPlayerIp(this.playerid, len);
    }
    GetPlayerPing() {
        return SampFunctions_1.SampFunctions.GetPlayerPing(this.playerid);
    }
    GetPlayerWeapon() {
        return SampFunctions_1.SampFunctions.GetPlayerWeapon(this.playerid);
    }
    GetPlayerKeys() {
        return SampFunctions_1.SampFunctions.GetPlayerKeys(this.playerid);
    }
    GetPlayerName(len) {
        return SampFunctions_1.SampFunctions.GetPlayerName(this.playerid, len);
    }
    SetPlayerTime(hour, minute) {
        return SampFunctions_1.SampFunctions.SetPlayerTime(this.playerid, hour, minute);
    }
    GetPlayerTime() {
        return SampFunctions_1.SampFunctions.GetPlayerTime(this.playerid);
    }
    TogglePlayerClock(toggle) {
        return SampFunctions_1.SampFunctions.TogglePlayerClock(this.playerid, toggle);
    }
    SetPlayerWeather(weather) {
        return SampFunctions_1.SampFunctions.SetPlayerWeather(this.playerid, weather);
    }
    ForceClassSelection() {
        return SampFunctions_1.SampFunctions.ForceClassSelection(this.playerid);
    }
    SetPlayerWantedLevel(level) {
        return SampFunctions_1.SampFunctions.SetPlayerWantedLevel(this.playerid, level);
    }
    GetPlayerWantedLevel() {
        return SampFunctions_1.SampFunctions.GetPlayerWantedLevel(this.playerid);
    }
    SetPlayerFightingStyle(style) {
        return SampFunctions_1.SampFunctions.SetPlayerFightingStyle(this.playerid, style);
    }
    GetPlayerFightingStyle() {
        return SampFunctions_1.SampFunctions.GetPlayerFightingStyle(this.playerid);
    }
    SetPlayerVelocity(X, Y, Z) {
        return SampFunctions_1.SampFunctions.SetPlayerVelocity(this.playerid, X, Y, Z);
    }
    GetPlayerVelocity() {
        return SampFunctions_1.SampFunctions.GetPlayerVelocity(this.playerid);
    }
    PlayCrimeReportForPlayer(suspectid, crime) {
        return SampFunctions_1.SampFunctions.PlayCrimeReportForPlayer(this.playerid, suspectid, crime);
    }
    PlayAudioStreamForPlayer(url, posX, posY, posZ, distance, usepos) {
        return SampFunctions_1.SampFunctions.PlayAudioStreamForPlayer(this.playerid, url, posX, posY, posZ, distance, usepos);
    }
    StopAudioStreamForPlayer() {
        return SampFunctions_1.SampFunctions.StopAudioStreamForPlayer(this.playerid);
    }
    SetPlayerShopName(shopname) {
        return SampFunctions_1.SampFunctions.SetPlayerShopName(this.playerid, shopname);
    }
    SetPlayerSkillLevel(skill, level) {
        return SampFunctions_1.SampFunctions.SetPlayerSkillLevel(this.playerid, skill, level);
    }
    GetPlayerSurfingVehicleID() {
        return SampFunctions_1.SampFunctions.GetPlayerSurfingVehicleID(this.playerid);
    }
    GetPlayerSurfingObjectID() {
        return SampFunctions_1.SampFunctions.GetPlayerSurfingObjectID(this.playerid);
    }
    RemoveBuildingForPlayer(modelid, fX, fY, fZ, fRadius) {
        return SampFunctions_1.SampFunctions.RemoveBuildingForPlayer(this.playerid, modelid, fX, fY, fZ, fRadius);
    }
    GetPlayerLastShotVectors() {
        return SampFunctions_1.SampFunctions.GetPlayerLastShotVectors(this.playerid);
    }
    SetPlayerAttachedObject(index, modelid, bone, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, fRotZ, fScaleX, fScaleY, fScaleZ, materialcolor1, materialcolor2) {
        return SampFunctions_1.SampFunctions.SetPlayerAttachedObject(this.playerid, index, modelid, bone, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, fRotZ, fScaleX, fScaleY, fScaleZ, materialcolor1, materialcolor2);
    }
    RemovePlayerAttachedObject(index) {
        return SampFunctions_1.SampFunctions.RemovePlayerAttachedObject(this.playerid, index);
    }
    IsPlayerAttachedObjectSlotUsed(index) {
        return SampFunctions_1.SampFunctions.IsPlayerAttachedObjectSlotUsed(this.playerid, index);
    }
    EditAttachedObject(index) {
        return SampFunctions_1.SampFunctions.EditAttachedObject(this.playerid, index);
    }
    CreatePlayerTextDraw(x, y, text) {
        return SampFunctions_1.SampFunctions.CreatePlayerTextDraw(this.playerid, x, y, text);
    }
    PlayerTextDrawDestroy(text) {
        SampFunctions_1.SampFunctions.PlayerTextDrawDestroy(this.playerid, text);
    }
    PlayerTextDrawLetterSize(text, x, y) {
        return SampFunctions_1.SampFunctions.PlayerTextDrawLetterSize(this.playerid, text, x, y);
    }
    PlayerTextDrawTextSize(text, x, y) {
        return SampFunctions_1.SampFunctions.PlayerTextDrawTextSize(this.playerid, text, x, y);
    }
    PlayerTextDrawAlignment(text, alignment) {
        return SampFunctions_1.SampFunctions.PlayerTextDrawAlignment(this.playerid, text, alignment);
    }
    PlayerTextDrawColor(text, color) {
        return SampFunctions_1.SampFunctions.PlayerTextDrawColor(this.playerid, text, color);
    }
    PlayerTextDrawUseBox(text, use) {
        return SampFunctions_1.SampFunctions.PlayerTextDrawUseBox(this.playerid, text, use);
    }
    PlayerTextDrawBoxColor(text, color) {
        return SampFunctions_1.SampFunctions.PlayerTextDrawBoxColor(this.playerid, text, color);
    }
    PlayerTextDrawSetShadow(text, size) {
        return SampFunctions_1.SampFunctions.PlayerTextDrawSetShadow(this.playerid, text, size);
    }
    PlayerTextDrawSetOutline(text, size) {
        return SampFunctions_1.SampFunctions.PlayerTextDrawSetOutline(this.playerid, text, size);
    }
    PlayerTextDrawBackgroundColor(text, color) {
        return SampFunctions_1.SampFunctions.PlayerTextDrawBackgroundColor(this.playerid, text, color);
    }
    PlayerTextDrawFont(text, font) {
        return SampFunctions_1.SampFunctions.PlayerTextDrawFont(this.playerid, text, font);
    }
    PlayerTextDrawSetProportional(text, set) {
        return SampFunctions_1.SampFunctions.PlayerTextDrawSetProportional(this.playerid, text, set);
    }
    PlayerTextDrawSetSelectable(text, set) {
        return SampFunctions_1.SampFunctions.PlayerTextDrawSetSelectable(this.playerid, text, set);
    }
    PlayerTextDrawShow(text) {
        return SampFunctions_1.SampFunctions.PlayerTextDrawShow(this.playerid, text);
    }
    PlayerTextDrawHide(text) {
        return SampFunctions_1.SampFunctions.PlayerTextDrawHide(this.playerid, text);
    }
    PlayerTextDrawSetString(text, string) {
        return SampFunctions_1.SampFunctions.PlayerTextDrawSetString(this.playerid, text, string);
    }
    PlayerTextDrawSetPreviewModel(text, modelindex) {
        return SampFunctions_1.SampFunctions.PlayerTextDrawSetPreviewModel(this.playerid, text, modelindex);
    }
    PlayerTextDrawSetPreviewRot(text, fRotX, fRotY, fRotZ, fZoom) {
        return SampFunctions_1.SampFunctions.PlayerTextDrawSetPreviewRot(this.playerid, text, fRotX, fRotY, fRotZ, fZoom);
    }
    PlayerTextDrawSetPreviewVehCol(text, color1, color2) {
        return SampFunctions_1.SampFunctions.PlayerTextDrawSetPreviewVehCol(this.playerid, text, color1, color2);
    }
    SetPVarInt(varname, int_value) {
        return SampFunctions_1.SampFunctions.SetPVarInt(this.playerid, varname, int_value);
    }
    GetPVarInt(varname) {
        return SampFunctions_1.SampFunctions.GetPVarInt(this.playerid, varname);
    }
    SetPVarString(varname, string_value) {
        return SampFunctions_1.SampFunctions.SetPVarString(this.playerid, varname, string_value);
    }
    GetPVarString(varname, len) {
        return SampFunctions_1.SampFunctions.GetPVarString(this.playerid, varname, len);
    }
    SetPVarFloat(varname, float_value) {
        return SampFunctions_1.SampFunctions.SetPVarFloat(this.playerid, varname, float_value);
    }
    GetPVarFloat(varname) {
        return SampFunctions_1.SampFunctions.GetPVarFloat(this.playerid, varname);
    }
    DeletePVar(varname) {
        return SampFunctions_1.SampFunctions.DeletePVar(this.playerid, varname);
    }
    GetPVarsUpperIndex() {
        return SampFunctions_1.SampFunctions.GetPVarsUpperIndex(this.playerid);
    }
    GetPVarNameAtIndex(index, ret_len) {
        return SampFunctions_1.SampFunctions.GetPVarNameAtIndex(this.playerid, index, ret_len);
    }
    GetPVarType(varname) {
        return SampFunctions_1.SampFunctions.GetPVarType(this.playerid, varname);
    }
    SetPlayerChatBubble(text, color, drawdistance, expiretime) {
        return SampFunctions_1.SampFunctions.SetPlayerChatBubble(this.playerid, text, color, drawdistance, expiretime);
    }
    PutPlayerInVehicle(vehicleid, seatid) {
        return SampFunctions_1.SampFunctions.PutPlayerInVehicle(this.playerid, vehicleid, seatid);
    }
    GetPlayerVehicleID() {
        return SampFunctions_1.SampFunctions.GetPlayerVehicleID(this.playerid);
    }
    GetPlayerVehicleSeat() {
        return SampFunctions_1.SampFunctions.GetPlayerVehicleSeat(this.playerid);
    }
    RemovePlayerFromVehicle() {
        return SampFunctions_1.SampFunctions.RemovePlayerFromVehicle(this.playerid);
    }
    TogglePlayerControllable(toggle) {
        return SampFunctions_1.SampFunctions.TogglePlayerControllable(this.playerid, toggle);
    }
    PlayerPlaySound(soundid, x, y, z) {
        return SampFunctions_1.SampFunctions.PlayerPlaySound(this.playerid, soundid, x, y, z);
    }
    ApplyAnimation(animlib, animname, fDelta, loop, lockx, locky, freeze, time, forcesync) {
        return SampFunctions_1.SampFunctions.ApplyAnimation(this.playerid, animlib, animname, fDelta, loop, lockx, locky, freeze, time, forcesync);
    }
    ClearAnimations(forcesync) {
        return SampFunctions_1.SampFunctions.ClearAnimations(this.playerid, forcesync);
    }
    GetPlayerAnimationIndex() {
        return SampFunctions_1.SampFunctions.GetPlayerAnimationIndex(this.playerid);
    }
    GetPlayerSpecialAction() {
        return SampFunctions_1.SampFunctions.GetPlayerSpecialAction(this.playerid);
    }
    SetPlayerSpecialAction(actionid) {
        return SampFunctions_1.SampFunctions.SetPlayerSpecialAction(this.playerid, actionid);
    }
    DisableRemoteVehicleCollisions(disable) {
        return SampFunctions_1.SampFunctions.DisableRemoteVehicleCollisions(this.playerid, disable);
    }
    SetPlayerCheckpoint(x, y, z, size) {
        return SampFunctions_1.SampFunctions.SetPlayerCheckpoint(this.playerid, x, y, z, size);
    }
    DisablePlayerCheckpoint() {
        return SampFunctions_1.SampFunctions.DisablePlayerCheckpoint(this.playerid);
    }
    SetPlayerRaceCheckpoint(type, x, y, z, nextx, nexty, nextz, size) {
        return SampFunctions_1.SampFunctions.SetPlayerRaceCheckpoint(this.playerid, type, x, y, z, nextx, nexty, nextz, size);
    }
    DisablePlayerRaceCheckpoint() {
        return SampFunctions_1.SampFunctions.DisablePlayerRaceCheckpoint(this.playerid);
    }
    SetPlayerWorldBounds(x_max, x_min, y_max, y_min) {
        return SampFunctions_1.SampFunctions.SetPlayerWorldBounds(this.playerid, x_max, x_min, y_max, y_min);
    }
    SetPlayerMarkerForPlayer(showplayerid, color) {
        return SampFunctions_1.SampFunctions.SetPlayerMarkerForPlayer(this.playerid, showplayerid, color);
    }
    ShowPlayerNameTagForPlayer(showplayerid, show) {
        return SampFunctions_1.SampFunctions.ShowPlayerNameTagForPlayer(this.playerid, showplayerid, show);
    }
    SetPlayerMapIcon(iconid, x, y, z, markertype, color, style) {
        return SampFunctions_1.SampFunctions.SetPlayerMapIcon(this.playerid, iconid, x, y, z, markertype, color, style);
    }
    RemovePlayerMapIcon(iconid) {
        return SampFunctions_1.SampFunctions.RemovePlayerMapIcon(this.playerid, iconid);
    }
    AllowPlayerTeleport(allow) {
        return SampFunctions_1.SampFunctions.AllowPlayerTeleport(this.playerid, allow);
    }
    SetPlayerCameraPos(x, y, z) {
        return SampFunctions_1.SampFunctions.SetPlayerCameraPos(this.playerid, x, y, z);
    }
    SetPlayerCameraLookAt(x, y, z, cut) {
        return SampFunctions_1.SampFunctions.SetPlayerCameraLookAt(this.playerid, x, y, z, cut);
    }
    SetCameraBehindPlayer() {
        return SampFunctions_1.SampFunctions.SetCameraBehindPlayer(this.playerid);
    }
    GetPlayerCameraPos() {
        return SampFunctions_1.SampFunctions.GetPlayerCameraPos(this.playerid);
    }
    GetPlayerCameraFrontVector() {
        return SampFunctions_1.SampFunctions.GetPlayerCameraFrontVector(this.playerid);
    }
    GetPlayerCameraMode() {
        return SampFunctions_1.SampFunctions.GetPlayerCameraMode(this.playerid);
    }
    EnablePlayerCameraTarget(enable) {
        return SampFunctions_1.SampFunctions.EnablePlayerCameraTarget(this.playerid, enable);
    }
    GetPlayerCameraTargetObject() {
        return SampFunctions_1.SampFunctions.GetPlayerCameraTargetObject(this.playerid);
    }
    GetPlayerCameraTargetVehicle() {
        return SampFunctions_1.SampFunctions.GetPlayerCameraTargetVehicle(this.playerid);
    }
    GetPlayerCameraTargetPlayer() {
        return SampFunctions_1.SampFunctions.GetPlayerCameraTargetPlayer(this.playerid);
    }
    GetPlayerCameraTargetActor() {
        return SampFunctions_1.SampFunctions.GetPlayerCameraTargetActor(this.playerid);
    }
    GetPlayerCameraAspectRatio() {
        return SampFunctions_1.SampFunctions.GetPlayerCameraAspectRatio(this.playerid);
    }
    GetPlayerCameraZoom() {
        return SampFunctions_1.SampFunctions.GetPlayerCameraZoom(this.playerid);
    }
    AttachCameraToObject(objectid) {
        return SampFunctions_1.SampFunctions.AttachCameraToObject(this.playerid, objectid);
    }
    AttachCameraToPlayerObject(playerobjectid) {
        return SampFunctions_1.SampFunctions.AttachCameraToPlayerObject(this.playerid, playerobjectid);
    }
    InterpolateCameraPos(FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut) {
        return SampFunctions_1.SampFunctions.InterpolateCameraPos(this.playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut);
    }
    InterpolateCameraLookAt(FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut) {
        return SampFunctions_1.SampFunctions.InterpolateCameraLookAt(this.playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut);
    }
    IsPlayerConnected() {
        return SampFunctions_1.SampFunctions.IsPlayerConnected(this.playerid);
    }
    IsPlayerInVehicle(vehicleid) {
        return SampFunctions_1.SampFunctions.IsPlayerInVehicle(this.playerid, vehicleid);
    }
    IsPlayerInAnyVehicle() {
        return SampFunctions_1.SampFunctions.IsPlayerInAnyVehicle(this.playerid);
    }
    IsPlayerInCheckpoint() {
        return SampFunctions_1.SampFunctions.IsPlayerInCheckpoint(this.playerid);
    }
    IsPlayerInRaceCheckpoint() {
        return SampFunctions_1.SampFunctions.IsPlayerInRaceCheckpoint(this.playerid);
    }
    SetPlayerVirtualWorld(worldid) {
        return SampFunctions_1.SampFunctions.SetPlayerVirtualWorld(this.playerid, worldid);
    }
    GetPlayerVirtualWorld() {
        return SampFunctions_1.SampFunctions.GetPlayerVirtualWorld(this.playerid);
    }
    EnableStuntBonusForPlayer(enable) {
        return SampFunctions_1.SampFunctions.EnableStuntBonusForPlayer(this.playerid, enable);
    }
    TogglePlayerSpectating(toggle) {
        return SampFunctions_1.SampFunctions.TogglePlayerSpectating(this.playerid, toggle);
    }
    PlayerSpectatePlayer(targetplayerid, mode) {
        return SampFunctions_1.SampFunctions.PlayerSpectatePlayer(this.playerid, targetplayerid, mode);
    }
    PlayerSpectateVehicle(targetvehicleid, mode) {
        return SampFunctions_1.SampFunctions.PlayerSpectateVehicle(this.playerid, targetvehicleid, mode);
    }
    StartRecordingPlayerData(recordtype, recordname) {
        return SampFunctions_1.SampFunctions.StartRecordingPlayerData(this.playerid, recordtype, recordname);
    }
    StopRecordingPlayerData() {
        return SampFunctions_1.SampFunctions.StopRecordingPlayerData(this.playerid);
    }
    SelectTextDraw(hovercolor) {
        return SampFunctions_1.SampFunctions.SelectTextDraw(this.playerid, hovercolor);
    }
    CancelSelectTextDraw() {
        return SampFunctions_1.SampFunctions.CancelSelectTextDraw(this.playerid);
    }
    CreateExplosionForPlayer(X, Y, Z, type, Radius) {
        return SampFunctions_1.SampFunctions.CreateExplosionForPlayer(this.playerid, X, Y, Z, type, Radius);
    }
    SendClientCheck(type, memAddr, memOffset, byteCount) {
        return SampFunctions_1.SampFunctions.SendClientCheck(this.playerid, type, memAddr, memOffset, byteCount);
    }
    SetVehicleParamsForPlayer(vehicleid, objective, doorslocked) {
        return SampFunctions_1.SampFunctions.SetVehicleParamsForPlayer(vehicleid, this.playerid, objective, doorslocked);
    }
}
exports.SampPlayerNativeFunctions = SampPlayerNativeFunctions;
//# sourceMappingURL=SampPlayerNativeFunctions.js.map