"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampEvents = exports.OnScriptCash = exports.OnClientCheckResponse = exports.OnPlayerWeaponShot = exports.OnPlayerSelectObject = exports.OnPlayerClickPlayer = exports.OnPlayerFinishedDownloading = exports.OnVehicleSirenStateChange = exports.OnTrailerUpdate = exports.OnIncomingConnection = exports.OnPlayerClickPlayerTextDraw = exports.OnPlayerClickTextDraw = exports.OnPlayerClickMap = exports.OnPlayerGiveDamageActor = exports.OnPlayerGiveDamage = exports.OnPlayerTakeDamage = exports.OnDialogResponse = exports.OnActorStreamOut = exports.OnActorStreamIn = exports.OnVehicleStreamOut = exports.OnVehicleStreamIn = exports.OnPlayerStreamOut = exports.OnPlayerStreamIn = exports.OnPlayerUpdate = exports.OnRconLoginAttempt = exports.OnPlayerKeyStateChange = exports.OnPlayerInteriorChange = exports.OnPlayerExitedMenu = exports.OnPlayerSelectedMenuRow = exports.OnUnoccupiedVehicleUpdate = exports.OnVehicleDamageStatusUpdate = exports.OnVehicleRespray = exports.OnVehiclePaintjob = exports.OnEnterExitModShop = exports.OnVehicleMod = exports.OnPlayerPickUpPickup = exports.OnPlayerObjectMoved = exports.OnObjectMoved = exports.OnPlayerRequestSpawn = exports.OnRconCommand = exports.OnPlayerLeaveRaceCheckpoint = exports.OnPlayerEnterRaceCheckpoint = exports.OnPlayerLeaveCheckpoint = exports.OnPlayerEnterCheckpoint = exports.OnPlayerStateChange = exports.OnPlayerExitVehicle = exports.OnPlayerEnterVehicle = exports.OnPlayerRequestClass = exports.OnPlayerCommandText = exports.OnPlayerText = exports.OnVehicleDeath = exports.OnVehicleSpawn = exports.OnPlayerDeath = exports.OnPlayerSpawn = exports.OnPlayerDisconnect = exports.OnPlayerConnect = exports.OnFilterScriptExit = exports.OnFilterScriptInit = exports.OnGameModeExit = exports.OnGameModeInit = void 0;
const SampPlayers_1 = require("./SampPlayers");
exports.OnGameModeInit = (func) => {
    SampEvents.OnGameModeInit(func);
};
exports.OnGameModeExit = (func) => {
    SampEvents.OnGameModeExit(func);
};
exports.OnFilterScriptInit = (func) => {
    SampEvents.OnFilterScriptInit(func);
};
exports.OnFilterScriptExit = (func) => {
    SampEvents.OnFilterScriptExit(func);
};
exports.OnPlayerConnect = (func) => {
    SampEvents.OnPlayerConnect(func);
};
exports.OnPlayerDisconnect = (func) => {
    SampEvents.OnPlayerDisconnect(func);
};
exports.OnPlayerSpawn = (func) => {
    SampEvents.OnPlayerSpawn(func);
};
exports.OnPlayerDeath = (func) => {
    SampEvents.OnPlayerDeath(func);
};
exports.OnVehicleSpawn = (func) => {
    SampEvents.OnVehicleSpawn(func);
};
exports.OnVehicleDeath = (func) => {
    SampEvents.OnVehicleDeath(func);
};
exports.OnPlayerText = (func) => {
    SampEvents.OnPlayerText(func);
};
exports.OnPlayerCommandText = (func) => {
    SampEvents.OnPlayerCommandText(func);
};
exports.OnPlayerRequestClass = (func) => {
    SampEvents.OnPlayerRequestClass(func);
};
exports.OnPlayerEnterVehicle = (func) => {
    SampEvents.OnPlayerEnterVehicle(func);
};
exports.OnPlayerExitVehicle = (func) => {
    SampEvents.OnPlayerExitVehicle(func);
};
exports.OnPlayerStateChange = (func) => {
    SampEvents.OnPlayerStateChange(func);
};
exports.OnPlayerEnterCheckpoint = (func) => {
    SampEvents.OnPlayerEnterCheckpoint(func);
};
exports.OnPlayerLeaveCheckpoint = (func) => {
    SampEvents.OnPlayerLeaveCheckpoint(func);
};
exports.OnPlayerEnterRaceCheckpoint = (func) => {
    SampEvents.OnPlayerEnterRaceCheckpoint(func);
};
exports.OnPlayerLeaveRaceCheckpoint = (func) => {
    SampEvents.OnPlayerLeaveRaceCheckpoint(func);
};
exports.OnRconCommand = (func) => {
    SampEvents.OnRconCommand(func);
};
exports.OnPlayerRequestSpawn = (func) => {
    SampEvents.OnPlayerRequestSpawn(func);
};
exports.OnObjectMoved = (func) => {
    SampEvents.OnObjectMoved(func);
};
exports.OnPlayerObjectMoved = (func) => {
    SampEvents.OnPlayerObjectMoved(func);
};
exports.OnPlayerPickUpPickup = (func) => {
    SampEvents.OnPlayerPickUpPickup(func);
};
exports.OnVehicleMod = (func) => {
    SampEvents.OnVehicleMod(func);
};
exports.OnEnterExitModShop = (func) => {
    SampEvents.OnEnterExitModShop(func);
};
exports.OnVehiclePaintjob = (func) => {
    SampEvents.OnVehiclePaintjob(func);
};
exports.OnVehicleRespray = (func) => {
    SampEvents.OnVehicleRespray(func);
};
exports.OnVehicleDamageStatusUpdate = (func) => {
    SampEvents.OnVehicleDamageStatusUpdate(func);
};
exports.OnUnoccupiedVehicleUpdate = (func) => {
    SampEvents.OnUnoccupiedVehicleUpdate(func);
};
exports.OnPlayerSelectedMenuRow = (func) => {
    SampEvents.OnPlayerSelectedMenuRow(func);
};
exports.OnPlayerExitedMenu = (func) => {
    SampEvents.OnPlayerExitedMenu(func);
};
exports.OnPlayerInteriorChange = (func) => {
    SampEvents.OnPlayerInteriorChange(func);
};
exports.OnPlayerKeyStateChange = (func) => {
    SampEvents.OnPlayerKeyStateChange(func);
};
exports.OnRconLoginAttempt = (func) => {
    SampEvents.OnRconLoginAttempt(func);
};
exports.OnPlayerUpdate = (func) => {
    SampEvents.OnPlayerUpdate(func);
};
exports.OnPlayerStreamIn = (func) => {
    SampEvents.OnPlayerStreamIn(func);
};
exports.OnPlayerStreamOut = (func) => {
    SampEvents.OnPlayerStreamOut(func);
};
exports.OnVehicleStreamIn = (func) => {
    SampEvents.OnVehicleStreamIn(func);
};
exports.OnVehicleStreamOut = (func) => {
    SampEvents.OnVehicleStreamOut(func);
};
exports.OnActorStreamIn = (func) => {
    SampEvents.OnActorStreamIn(func);
};
exports.OnActorStreamOut = (func) => {
    SampEvents.OnActorStreamOut(func);
};
exports.OnDialogResponse = (func) => {
    SampEvents.OnDialogResponse(func);
};
exports.OnPlayerTakeDamage = (func) => {
    SampEvents.OnPlayerTakeDamage(func);
};
exports.OnPlayerGiveDamage = (func) => {
    SampEvents.OnPlayerGiveDamage(func);
};
exports.OnPlayerGiveDamageActor = (func) => {
    SampEvents.OnPlayerGiveDamageActor(func);
};
exports.OnPlayerClickMap = (func) => {
    SampEvents.OnPlayerClickMap(func);
};
exports.OnPlayerClickTextDraw = (func) => {
    SampEvents.OnPlayerClickTextDraw(func);
};
exports.OnPlayerClickPlayerTextDraw = (func) => {
    SampEvents.OnPlayerClickPlayerTextDraw(func);
};
exports.OnIncomingConnection = (func) => {
    SampEvents.OnIncomingConnection(func);
};
exports.OnTrailerUpdate = (func) => {
    SampEvents.OnTrailerUpdate(func);
};
exports.OnVehicleSirenStateChange = (func) => {
    SampEvents.OnVehicleSirenStateChange(func);
};
exports.OnPlayerFinishedDownloading = (func) => {
    SampEvents.OnPlayerFinishedDownloading(func);
};
exports.OnPlayerClickPlayer = (func) => {
    SampEvents.OnPlayerClickPlayer(func);
};
exports.OnPlayerSelectObject = (func) => {
    SampEvents.OnPlayerSelectObject(func);
};
exports.OnPlayerWeaponShot = (func) => {
    SampEvents.OnPlayerWeaponShot(func);
};
exports.OnClientCheckResponse = (func) => {
    SampEvents.OnClientCheckResponse(func);
};
exports.OnScriptCash = (func) => {
    SampEvents.OnScriptCash(func);
};
class SampEvents {
    static OnGameModeInit(func) {
        samp.on('OnGameModeInit', func);
    }
    static OnGameModeExit(func) {
        samp.on('OnGameModeExit', func);
    }
    static OnFilterScriptInit(func) {
        samp.on('OnFilterScriptInit', func);
    }
    static OnFilterScriptExit(func) {
        samp.on('OnFilterScriptExit', func);
    }
    static OnPlayerConnect(func) {
        samp.on('OnPlayerConnect', ((playerid) => func(SampPlayers_1.SampPlayers.getNewClass(playerid))));
    }
    static OnPlayerDisconnect(func) {
        samp.on('OnPlayerDisconnect', ((playerid, reason) => func(SampPlayers_1.SampPlayers.removeClass(playerid), reason)));
    }
    static OnPlayerSpawn(func) {
        samp.on('OnPlayerSpawn', ((playerid) => func(SampPlayers_1.SampPlayers.getClass(playerid))));
    }
    static OnPlayerDeath(func) {
        samp.on('OnPlayerDeath', ((playerid, killerid, reason) => func(SampPlayers_1.SampPlayers.getClass(playerid), SampPlayers_1.SampPlayers.getClass(killerid), reason)));
    }
    static OnVehicleSpawn(func) {
        samp.on('OnVehicleSpawn', func);
    }
    static OnVehicleDeath(func) {
        samp.on('OnVehicleDeath', ((vehicleid, playerid) => func(vehicleid, SampPlayers_1.SampPlayers.getClass(playerid))));
    }
    static OnPlayerText(func) {
        samp.on('OnPlayerText', ((playerid, text) => func(SampPlayers_1.SampPlayers.getClass(playerid), text)));
    }
    static OnPlayerCommandText(func) {
        samp.on('OnPlayerCommandText', ((playerid, cmdtext) => func(SampPlayers_1.SampPlayers.getClass(playerid), cmdtext)));
    }
    static OnPlayerRequestClass(func) {
        samp.on('OnPlayerRequestClass', ((playerid, classid) => func(SampPlayers_1.SampPlayers.getClass(playerid), classid)));
    }
    static OnPlayerEnterVehicle(func) {
        samp.on('OnPlayerEnterVehicle', ((playerid, vehicleid, ispassenger) => func(SampPlayers_1.SampPlayers.getClass(playerid), vehicleid, ispassenger)));
    }
    static OnPlayerExitVehicle(func) {
        samp.on('OnPlayerExitVehicle', ((playerid, vehicleid) => func(SampPlayers_1.SampPlayers.getClass(playerid), vehicleid)));
    }
    static OnPlayerStateChange(func) {
        samp.on('OnPlayerStateChange', ((playerid, newstate, oldstate) => func(SampPlayers_1.SampPlayers.getClass(playerid), newstate, oldstate)));
    }
    static OnPlayerEnterCheckpoint(func) {
        samp.on('OnPlayerEnterCheckpoint', ((playerid) => func(SampPlayers_1.SampPlayers.getClass(playerid))));
    }
    static OnPlayerLeaveCheckpoint(func) {
        samp.on('OnPlayerLeaveCheckpoint', ((playerid) => func(SampPlayers_1.SampPlayers.getClass(playerid))));
    }
    static OnPlayerEnterRaceCheckpoint(func) {
        samp.on('OnPlayerEnterRaceCheckpoint', ((playerid) => func(SampPlayers_1.SampPlayers.getClass(playerid))));
    }
    static OnPlayerLeaveRaceCheckpoint(func) {
        samp.on('OnPlayerLeaveRaceCheckpoint', ((playerid) => func(SampPlayers_1.SampPlayers.getClass(playerid))));
    }
    static OnRconCommand(func) {
        samp.on('OnRconCommand', func);
    }
    static OnPlayerRequestSpawn(func) {
        samp.on('OnPlayerRequestSpawn', ((playerid) => func(SampPlayers_1.SampPlayers.getClass(playerid))));
    }
    static OnObjectMoved(func) {
        samp.on('OnObjectMoved', func);
    }
    static OnPlayerObjectMoved(func) {
        samp.on('OnPlayerObjectMoved', ((playerid, objectid) => func(SampPlayers_1.SampPlayers.getClass(playerid), objectid)));
    }
    static OnPlayerPickUpPickup(func) {
        samp.on('OnPlayerPickUpPickup', ((playerid, pickupid) => func(SampPlayers_1.SampPlayers.getClass(playerid), pickupid)));
    }
    static OnVehicleMod(func) {
        samp.on('OnVehicleMod', ((playerid, vehicleid, componentid) => func(SampPlayers_1.SampPlayers.getClass(playerid), vehicleid, componentid)));
    }
    static OnEnterExitModShop(func) {
        samp.on('OnEnterExitModShop', ((playerid, enterexit, interiorid) => func(SampPlayers_1.SampPlayers.getClass(playerid), enterexit, interiorid)));
    }
    static OnVehiclePaintjob(func) {
        samp.on('OnVehiclePaintjob', ((playerid, vehicleid, paintjobid) => func(SampPlayers_1.SampPlayers.getClass(playerid), vehicleid, paintjobid)));
    }
    static OnVehicleRespray(func) {
        samp.on('OnVehicleRespray', ((playerid, vehicleid, color1, color2) => func(SampPlayers_1.SampPlayers.getClass(playerid), vehicleid, color1, color2)));
    }
    static OnVehicleDamageStatusUpdate(func) {
        samp.on('OnVehicleDamageStatusUpdate', ((vehicleid, playerid) => func(vehicleid, SampPlayers_1.SampPlayers.getClass(playerid))));
    }
    static OnUnoccupiedVehicleUpdate(func) {
        samp.on('OnUnoccupiedVehicleUpdate', ((vehicleid, playerid, passenger_seat, new_x, new_y, new_z, vel_x, vel_y, vel_z) => func(vehicleid, SampPlayers_1.SampPlayers.getClass(playerid), passenger_seat, new_x, new_y, new_z, vel_x, vel_y, vel_z)));
    }
    static OnPlayerSelectedMenuRow(func) {
        samp.on('OnPlayerSelectedMenuRow', ((playerid, row) => func(SampPlayers_1.SampPlayers.getClass(playerid), row)));
    }
    static OnPlayerExitedMenu(func) {
        samp.on('OnPlayerExitedMenu', ((playerid) => func(SampPlayers_1.SampPlayers.getClass(playerid))));
    }
    static OnPlayerInteriorChange(func) {
        samp.on('OnPlayerInteriorChange', ((playerid, newinteriorid, oldinteriorid) => func(SampPlayers_1.SampPlayers.getClass(playerid), newinteriorid, oldinteriorid)));
    }
    static OnPlayerKeyStateChange(func) {
        samp.on('OnPlayerKeyStateChange', ((playerid, newkeys, oldkeys) => func(SampPlayers_1.SampPlayers.getClass(playerid), newkeys, oldkeys)));
    }
    static OnRconLoginAttempt(func) {
        samp.on('OnRconLoginAttempt', func);
    }
    static OnPlayerUpdate(func) {
        samp.on('OnPlayerUpdate', ((playerid) => func(SampPlayers_1.SampPlayers.getClass(playerid))));
    }
    static OnPlayerStreamIn(func) {
        samp.on('OnPlayerStreamIn', ((playerid, forplayerid) => func(SampPlayers_1.SampPlayers.getClass(playerid), SampPlayers_1.SampPlayers.getClass(forplayerid))));
    }
    static OnPlayerStreamOut(func) {
        samp.on('OnPlayerStreamOut', ((playerid, forplayerid) => func(SampPlayers_1.SampPlayers.getClass(playerid), SampPlayers_1.SampPlayers.getClass(forplayerid))));
    }
    static OnVehicleStreamIn(func) {
        samp.on('OnVehicleStreamIn', ((vehicleid, forplayerid) => func(vehicleid, SampPlayers_1.SampPlayers.getClass(forplayerid))));
    }
    static OnVehicleStreamOut(func) {
        samp.on('OnVehicleStreamOut', ((vehicleid, forplayerid) => func(vehicleid, SampPlayers_1.SampPlayers.getClass(forplayerid))));
    }
    static OnActorStreamIn(func) {
        samp.on('OnActorStreamIn', ((actorid, forplayerid) => func(actorid, SampPlayers_1.SampPlayers.getClass(forplayerid))));
    }
    static OnActorStreamOut(func) {
        samp.on('OnActorStreamOut', ((actorid, forplayerid) => func(actorid, SampPlayers_1.SampPlayers.getClass(forplayerid))));
    }
    static OnDialogResponse(func) {
        samp.on('OnDialogResponse', ((playerid, dialogid, response, listitem, inputtext) => func(SampPlayers_1.SampPlayers.getClass(playerid), dialogid, response, listitem, inputtext)));
    }
    static OnPlayerTakeDamage(func) {
        samp.on('OnPlayerTakeDamage', ((playerid, issuerid, amount, weaponid, bodypart) => func(SampPlayers_1.SampPlayers.getClass(playerid), issuerid, amount, weaponid, bodypart)));
    }
    static OnPlayerGiveDamage(func) {
        samp.on('OnPlayerGiveDamage', ((playerid, damagedid, amount, weaponid, bodypart) => func(SampPlayers_1.SampPlayers.getClass(playerid), damagedid, amount, weaponid, bodypart)));
    }
    static OnPlayerGiveDamageActor(func) {
        samp.on('OnPlayerGiveDamageActor', ((playerid, damaged_actorid, amount, weaponid, bodypart) => func(SampPlayers_1.SampPlayers.getClass(playerid), damaged_actorid, amount, weaponid, bodypart)));
    }
    static OnPlayerClickMap(func) {
        samp.on('OnPlayerClickMap', ((playerid, fX, fY, fZ) => func(SampPlayers_1.SampPlayers.getClass(playerid), fX, fY, fZ)));
    }
    static OnPlayerClickTextDraw(func) {
        samp.on('OnPlayerClickTextDraw', ((playerid, clickedid) => func(SampPlayers_1.SampPlayers.getClass(playerid), clickedid)));
    }
    static OnPlayerClickPlayerTextDraw(func) {
        samp.on('OnPlayerClickPlayerTextDraw', ((playerid, playertextid) => func(SampPlayers_1.SampPlayers.getClass(playerid), playertextid)));
    }
    static OnIncomingConnection(func) {
        samp.on('OnIncomingConnection', ((playerid, ip_address, port) => func(SampPlayers_1.SampPlayers.getClass(playerid), ip_address, port)));
    }
    static OnTrailerUpdate(func) {
        samp.on('OnTrailerUpdate', ((playerid, vehicleid) => func(SampPlayers_1.SampPlayers.getClass(playerid), vehicleid)));
    }
    static OnVehicleSirenStateChange(func) {
        samp.on('OnVehicleSirenStateChange', ((playerid, vehicleid, newstate) => func(SampPlayers_1.SampPlayers.getClass(playerid), vehicleid, newstate)));
    }
    static OnPlayerFinishedDownloading(func) {
        samp.on('OnPlayerFinishedDownloading', ((playerid, virtualworld) => func(SampPlayers_1.SampPlayers.getClass(playerid), virtualworld)));
    }
    static OnPlayerClickPlayer(func) {
        samp.on('OnPlayerClickPlayer', ((playerid, clickedplayerid, source) => func(SampPlayers_1.SampPlayers.getClass(playerid), SampPlayers_1.SampPlayers.getClass(clickedplayerid), source)));
    }
    static OnPlayerSelectObject(func) {
        samp.on('OnPlayerSelectObject', ((playerid, type, objectid, modelid, fX, fY, fZ) => func(SampPlayers_1.SampPlayers.getClass(playerid), type, objectid, modelid, fX, fY, fZ)));
    }
    static OnPlayerWeaponShot(func) {
        samp.on('OnPlayerWeaponShot', ((playerid, weaponid, hittype, hitid, fX, fY, fZ) => func(SampPlayers_1.SampPlayers.getClass(playerid), weaponid, hittype, hitid, fX, fY, fZ)));
    }
    static OnClientCheckResponse(func) {
        samp.on('OnClientCheckResponse', ((playerid, actionid, memaddr, retndata) => func(SampPlayers_1.SampPlayers.getClass(playerid), actionid, memaddr, retndata)));
    }
    static OnScriptCash(func) {
        samp.on('OnScriptCash', ((playerid, amount, source) => func(SampPlayers_1.SampPlayers.getClass(playerid), amount, source)));
    }
}
exports.SampEvents = SampEvents;
//# sourceMappingURL=SampEvents.js.map