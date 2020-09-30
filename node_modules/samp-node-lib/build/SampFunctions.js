"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampFunctions = exports.IsValidVehicle = exports.GetVehicleVirtualWorld = exports.SetVehicleVirtualWorld = exports.GetVehicleModelInfo = exports.UpdateVehicleDamageStatus = exports.GetVehicleDamageStatus = exports.SetVehicleAngularVelocity = exports.SetVehicleVelocity = exports.GetVehicleVelocity = exports.RepairVehicle = exports.GetVehicleComponentType = exports.GetVehicleComponentInSlot = exports.GetVehicleModel = exports.SetVehicleNumberPlate = exports.GetVehicleTrailer = exports.IsTrailerAttachedToVehicle = exports.DetachTrailerFromVehicle = exports.AttachTrailerToVehicle = exports.GetVehicleHealth = exports.SetVehicleHealth = exports.ChangeVehiclePaintjob = exports.ChangeVehicleColor = exports.RemoveVehicleComponent = exports.AddVehicleComponent = exports.LinkVehicleToInterior = exports.SetVehicleToRespawn = exports.GetVehicleParamsCarWindows = exports.SetVehicleParamsCarWindows = exports.GetVehicleParamsCarDoors = exports.SetVehicleParamsCarDoors = exports.GetVehicleParamsSirenState = exports.GetVehicleParamsEx = exports.SetVehicleParamsEx = exports.ManualVehicleEngineAndLights = exports.SetVehicleParamsForPlayer = exports.SetVehicleZAngle = exports.GetVehicleDistanceFromPoint = exports.GetVehicleRotationQuat = exports.GetVehicleZAngle = exports.SetVehiclePos = exports.GetVehiclePos = exports.IsVehicleStreamedIn = exports.DestroyVehicle = exports.CreateVehicle = exports.db_debug_openresults = exports.db_debug_openfiles = exports.db_get_result_mem_handle = exports.db_get_mem_handle = exports.db_get_field_assoc_float = exports.db_get_field_assoc_int = exports.db_get_field_assoc = exports.db_get_field_float = exports.db_get_field_int = exports.db_get_field = exports.db_field_name = exports.db_num_fields = exports.db_next_row = exports.db_num_rows = exports.db_free_result = exports.db_query = exports.db_close = exports.db_open = exports.SendClientCheck = exports.CreateExplosionForPlayer = exports.CancelSelectTextDraw = exports.SelectTextDraw = exports.StopRecordingPlayerData = exports.StartRecordingPlayerData = exports.PlayerSpectateVehicle = exports.PlayerSpectatePlayer = exports.TogglePlayerSpectating = exports.EnableStuntBonusForAll = exports.EnableStuntBonusForPlayer = exports.GetPlayerVirtualWorld = exports.SetPlayerVirtualWorld = exports.IsPlayerInRaceCheckpoint = exports.IsPlayerInCheckpoint = exports.IsPlayerInAnyVehicle = exports.IsPlayerInVehicle = exports.IsPlayerConnected = exports.InterpolateCameraLookAt = exports.InterpolateCameraPos = exports.AttachCameraToPlayerObject = exports.AttachCameraToObject = exports.GetPlayerCameraZoom = exports.GetPlayerCameraAspectRatio = exports.GetPlayerCameraTargetActor = exports.GetPlayerCameraTargetPlayer = exports.GetPlayerCameraTargetVehicle = exports.GetPlayerCameraTargetObject = exports.EnablePlayerCameraTarget = exports.GetPlayerCameraMode = exports.GetPlayerCameraFrontVector = exports.GetPlayerCameraPos = exports.SetCameraBehindPlayer = exports.SetPlayerCameraLookAt = exports.SetPlayerCameraPos = exports.AllowPlayerTeleport = exports.RemovePlayerMapIcon = exports.SetPlayerMapIcon = exports.ShowPlayerNameTagForPlayer = exports.SetPlayerMarkerForPlayer = exports.SetPlayerWorldBounds = exports.DisablePlayerRaceCheckpoint = exports.SetPlayerRaceCheckpoint = exports.DisablePlayerCheckpoint = exports.SetPlayerCheckpoint = exports.DisableRemoteVehicleCollisions = exports.SetPlayerSpecialAction = exports.GetPlayerSpecialAction = exports.GetAnimationName = exports.GetPlayerAnimationIndex = exports.ClearAnimations = exports.ApplyAnimation = exports.PlayerPlaySound = exports.TogglePlayerControllable = exports.RemovePlayerFromVehicle = exports.GetPlayerVehicleSeat = exports.GetPlayerVehicleID = exports.PutPlayerInVehicle = exports.SetPlayerChatBubble = exports.GetPVarType = exports.GetPVarNameAtIndex = exports.GetPVarsUpperIndex = exports.DeletePVar = exports.GetPVarFloat = exports.SetPVarFloat = exports.GetPVarString = exports.SetPVarString = exports.GetPVarInt = exports.SetPVarInt = exports.PlayerTextDrawSetPreviewVehCol = exports.PlayerTextDrawSetPreviewRot = exports.PlayerTextDrawSetPreviewModel = exports.PlayerTextDrawSetString = exports.PlayerTextDrawHide = exports.PlayerTextDrawShow = exports.PlayerTextDrawSetSelectable = exports.PlayerTextDrawSetProportional = exports.PlayerTextDrawFont = exports.PlayerTextDrawBackgroundColor = exports.PlayerTextDrawSetOutline = exports.PlayerTextDrawSetShadow = exports.PlayerTextDrawBoxColor = exports.PlayerTextDrawUseBox = exports.PlayerTextDrawColor = exports.PlayerTextDrawAlignment = exports.PlayerTextDrawTextSize = exports.PlayerTextDrawLetterSize = exports.PlayerTextDrawDestroy = exports.CreatePlayerTextDraw = exports.EditAttachedObject = exports.IsPlayerAttachedObjectSlotUsed = exports.RemovePlayerAttachedObject = exports.SetPlayerAttachedObject = exports.GetPlayerLastShotVectors = exports.RemoveBuildingForPlayer = exports.GetPlayerSurfingObjectID = exports.GetPlayerSurfingVehicleID = exports.SetPlayerSkillLevel = exports.SetPlayerShopName = exports.StopAudioStreamForPlayer = exports.PlayAudioStreamForPlayer = exports.PlayCrimeReportForPlayer = exports.GetPlayerVelocity = exports.SetPlayerVelocity = exports.GetPlayerFightingStyle = exports.SetPlayerFightingStyle = exports.GetPlayerWantedLevel = exports.SetPlayerWantedLevel = exports.ForceClassSelection = exports.SetPlayerWeather = exports.TogglePlayerClock = exports.GetPlayerTime = exports.SetPlayerTime = exports.GetPlayerName = exports.GetPlayerKeys = exports.GetPlayerWeapon = exports.GetPlayerPing = exports.GetPlayerIp = exports.GetPlayerState = exports.GetPlayerMoney = exports.SetPlayerName = exports.ResetPlayerMoney = exports.GivePlayerMoney = exports.GetPlayerWeaponData = exports.SetPlayerArmedWeapon = exports.ResetPlayerWeapons = exports.GivePlayerWeapon = exports.GetPlayerSkin = exports.SetPlayerSkin = exports.GetPlayerColor = exports.SetPlayerColor = exports.SetPlayerDrunkLevel = exports.GetPlayerDrunkLevel = exports.GetPlayerScore = exports.SetPlayerScore = exports.GetPlayerTeam = exports.SetPlayerTeam = exports.GetPlayerTargetActor = exports.GetPlayerTargetPlayer = exports.GetPlayerWeaponState = exports.GetPlayerAmmo = exports.SetPlayerAmmo = exports.GetPlayerArmour = exports.SetPlayerArmour = exports.GetPlayerHealth = exports.SetPlayerHealth = exports.GetPlayerInterior = exports.SetPlayerInterior = exports.IsPlayerStreamedIn = exports.GetPlayerDistanceFromPoint = exports.IsPlayerInRangeOfPoint = exports.GetPlayerFacingAngle = exports.SetPlayerFacingAngle = exports.GetPlayerPos = exports.SetPlayerPosFindZ = exports.SetPlayerPos = exports.SpawnPlayer = exports.SetSpawnInfo = exports.SetObjectsDefaultCameraCol = exports.SetPlayerObjectMaterialText = exports.SetObjectMaterialText = exports.SetPlayerObjectMaterial = exports.SetObjectMaterial = exports.AttachPlayerObjectToPlayer = exports.IsPlayerObjectMoving = exports.StopPlayerObject = exports.MovePlayerObject = exports.DestroyPlayerObject = exports.IsValidPlayerObject = exports.SetPlayerObjectNoCameraCol = exports.GetPlayerObjectModel = exports.GetPlayerObjectRot = exports.SetPlayerObjectRot = exports.GetPlayerObjectPos = exports.SetPlayerObjectPos = exports.AttachPlayerObjectToVehicle = exports.CreatePlayerObject = exports.CancelEdit = exports.SelectObject = exports.EditPlayerObject = exports.EditObject = exports.IsObjectMoving = exports.StopObject = exports.MoveObject = exports.DestroyObject = exports.IsValidObject = exports.SetObjectNoCameraCol = exports.GetObjectModel = exports.GetObjectRot = exports.SetObjectRot = exports.GetObjectPos = exports.SetObjectPos = exports.AttachObjectToPlayer = exports.AttachObjectToObject = exports.AttachObjectToVehicle = exports.CreateObject = exports.HTTP = exports.IsValidActor = exports.IsActorInvulnerable = exports.SetActorInvulnerable = exports.GetActorHealth = exports.SetActorHealth = exports.GetActorFacingAngle = exports.SetActorFacingAngle = exports.GetActorPos = exports.SetActorPos = exports.ClearActorAnimations = exports.ApplyActorAnimation = exports.GetActorVirtualWorld = exports.SetActorVirtualWorld = exports.IsActorStreamedIn = exports.DestroyActor = exports.CreateActor = exports.gpci = exports.ShowPlayerDialog = exports.UpdatePlayer3DTextLabelText = exports.DeletePlayer3DTextLabel = exports.CreatePlayer3DTextLabel = exports.Update3DTextLabelText = exports.Attach3DTextLabelToVehicle = exports.Attach3DTextLabelToPlayer = exports.Delete3DTextLabel = exports.Create3DTextLabel = exports.GangZoneStopFlashForAll = exports.GangZoneStopFlashForPlayer = exports.GangZoneFlashForAll = exports.GangZoneFlashForPlayer = exports.GangZoneHideForAll = exports.GangZoneHideForPlayer = exports.GangZoneShowForAll = exports.GangZoneShowForPlayer = exports.GangZoneDestroy = exports.GangZoneCreate = exports.TextDrawSetPreviewVehCol = exports.TextDrawSetPreviewRot = exports.TextDrawSetPreviewModel = exports.TextDrawSetString = exports.TextDrawHideForAll = exports.TextDrawShowForAll = exports.TextDrawHideForPlayer = exports.TextDrawShowForPlayer = exports.TextDrawSetSelectable = exports.TextDrawSetProportional = exports.TextDrawFont = exports.TextDrawBackgroundColor = exports.TextDrawSetOutline = exports.TextDrawSetShadow = exports.TextDrawBoxColor = exports.TextDrawUseBox = exports.TextDrawColor = exports.TextDrawAlignment = exports.TextDrawTextSize = exports.TextDrawLetterSize = exports.TextDrawDestroy = exports.TextDrawCreate = exports.GetPlayerMenu = exports.DisableMenuRow = exports.DisableMenu = exports.IsValidMenu = exports.HideMenuForPlayer = exports.ShowMenuForPlayer = exports.SetMenuColumnHeader = exports.AddMenuItem = exports.DestroyMenu = exports.CreateMenu = exports.NetStats_GetIpPort = exports.NetStats_ConnectionStatus = exports.NetStats_PacketLossPercent = exports.NetStats_MessagesRecvPerSecond = exports.NetStats_BytesSent = exports.NetStats_MessagesSent = exports.NetStats_BytesReceived = exports.NetStats_MessagesReceived = exports.NetStats_GetConnectedTime = exports.GetServerTickRate = exports.GetConsoleVarAsBool = exports.GetConsoleVarAsInt = exports.GetConsoleVarAsString = exports.GetServerVarAsBool = exports.GetServerVarAsInt = exports.GetServerVarAsString = exports.UnBlockIpAddress = exports.BlockIpAddress = exports.GetPlayerVersion = exports.GetNetworkStats = exports.GetPlayerNetworkStats = exports.SendRconCommand = exports.BanEx = exports.Ban = exports.Kick = exports.IsPlayerAdmin = exports.IsPlayerNPC = exports.ConnectNPC = exports.LimitPlayerMarkerRadius = exports.LimitGlobalChatRadius = exports.DisableNameTagLOS = exports.SetNameTagDrawDistance = exports.DisableInteriorEnterExits = exports.UsePlayerPedAnims = exports.EnableZoneNames = exports.CreateExplosion = exports.SetDeathDropAmount = exports.AllowAdminTeleport = exports.SetGravity = exports.GetGravity = exports.SetWeather = exports.AllowInteriorWeapons = exports.EnableVehicleFriendlyFire = exports.EnableTirePopping = exports.GetWeaponName = exports.SetWorldTime = exports.GameModeExit = exports.ShowPlayerMarkers = exports.ShowNameTags = exports.DestroyPickup = exports.CreatePickup = exports.AddStaticPickup = exports.AddStaticVehicleEx = exports.AddStaticVehicle = exports.AddPlayerClassEx = exports.AddPlayerClass = exports.SetTeamCount = exports.SetGameModeText = exports.GetSVarType = exports.GetSVarNameAtIndex = exports.GetSVarsUpperIndex = exports.DeleteSVar = exports.GetSVarFloat = exports.SetSVarFloat = exports.GetSVarString = exports.SetSVarString = exports.GetSVarInt = exports.SetSVarInt = exports.SHA256_PassHash = exports.GetActorPoolSize = exports.GetVehiclePoolSize = exports.GetPlayerPoolSize = exports.atan2 = exports.atan = exports.acos = exports.asin = exports.VectorSize = exports.GetMaxPlayers = exports.GetTickCount = exports.KillTimer = exports.SetTimer = exports.GameTextForPlayer = exports.GameTextForAll = exports.SendDeathMessageToPlayer = exports.SendDeathMessage = exports.SendPlayerMessageToAll = exports.SendPlayerMessageToPlayer = exports.SendClientMessageToAll = exports.SendClientMessage = void 0;
const rgba_1 = require("./rgba");
exports.SendClientMessage = (playerid, color, message) => {
    return SampFunctions.SendClientMessage(playerid, color, message);
};
exports.SendClientMessageToAll = (color, message) => {
    return SampFunctions.SendClientMessageToAll(color, message);
};
exports.SendPlayerMessageToPlayer = (playerid, senderid, message) => {
    return SampFunctions.SendPlayerMessageToPlayer(playerid, senderid, message);
};
exports.SendPlayerMessageToAll = (senderid, message) => {
    return SampFunctions.SendPlayerMessageToAll(senderid, message);
};
exports.SendDeathMessage = (killer, killee, weapon) => {
    return SampFunctions.SendDeathMessage(killer, killee, weapon);
};
exports.SendDeathMessageToPlayer = (playerid, killer, killee, weapon) => {
    return SampFunctions.SendDeathMessageToPlayer(playerid, killer, killee, weapon);
};
exports.GameTextForAll = (string, time, style) => {
    return SampFunctions.GameTextForAll(string, time, style);
};
exports.GameTextForPlayer = (playerid, string, time, style) => {
    return SampFunctions.GameTextForPlayer(playerid, string, time, style);
};
exports.SetTimer = (funcname, interval, repeating) => {
    return SampFunctions.SetTimer(funcname, interval, repeating);
};
exports.KillTimer = (timerid) => {
    return SampFunctions.KillTimer(timerid);
};
exports.GetTickCount = () => {
    return SampFunctions.GetTickCount();
};
exports.GetMaxPlayers = () => {
    return SampFunctions.GetMaxPlayers();
};
exports.VectorSize = (x, y, z) => {
    return SampFunctions.VectorSize(x, y, z);
};
exports.asin = (value) => {
    return SampFunctions.asin(value);
};
exports.acos = (value) => {
    return SampFunctions.acos(value);
};
exports.atan = (value) => {
    return SampFunctions.atan(value);
};
exports.atan2 = (y, x) => {
    return SampFunctions.atan2(y, x);
};
exports.GetPlayerPoolSize = () => {
    return SampFunctions.GetPlayerPoolSize();
};
exports.GetVehiclePoolSize = () => {
    return SampFunctions.GetVehiclePoolSize();
};
exports.GetActorPoolSize = () => {
    return SampFunctions.GetActorPoolSize();
};
exports.SHA256_PassHash = (password, salt, ret_hash_len) => {
    return SampFunctions.SHA256_PassHash(password, salt, ret_hash_len);
};
exports.SetSVarInt = (varname, int_value) => {
    return SampFunctions.SetSVarInt(varname, int_value);
};
exports.GetSVarInt = (varname) => {
    return SampFunctions.GetSVarInt(varname);
};
exports.SetSVarString = (varname, string_value) => {
    return SampFunctions.SetSVarString(varname, string_value);
};
exports.GetSVarString = (varname, len) => {
    return SampFunctions.GetSVarString(varname, len);
};
exports.SetSVarFloat = (varname, float_value) => {
    return SampFunctions.SetSVarFloat(varname, float_value);
};
exports.GetSVarFloat = (varname) => {
    return SampFunctions.GetSVarFloat(varname);
};
exports.DeleteSVar = (varname) => {
    return SampFunctions.DeleteSVar(varname);
};
exports.GetSVarsUpperIndex = () => {
    return SampFunctions.GetSVarsUpperIndex();
};
exports.GetSVarNameAtIndex = (index, ret_len) => {
    return SampFunctions.GetSVarNameAtIndex(index, ret_len);
};
exports.GetSVarType = (varname) => {
    return SampFunctions.GetSVarType(varname);
};
exports.SetGameModeText = (string) => {
    return SampFunctions.SetGameModeText(string);
};
exports.SetTeamCount = (count) => {
    return SampFunctions.SetTeamCount(count);
};
exports.AddPlayerClass = (modelid, spawn_x, spawn_y, spawn_z, z_angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo) => {
    return SampFunctions.AddPlayerClass(modelid, spawn_x, spawn_y, spawn_z, z_angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo);
};
exports.AddPlayerClassEx = (teamid, modelid, spawn_x, spawn_y, spawn_z, z_angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo) => {
    return SampFunctions.AddPlayerClassEx(teamid, modelid, spawn_x, spawn_y, spawn_z, z_angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo);
};
exports.AddStaticVehicle = (modelid, spawn_x, spawn_y, spawn_z, z_angle, color1, color2) => {
    return SampFunctions.AddStaticVehicle(modelid, spawn_x, spawn_y, spawn_z, z_angle, color1, color2);
};
exports.AddStaticVehicleEx = (modelid, spawn_x, spawn_y, spawn_z, z_angle, color1, color2, respawn_delay, addsiren) => {
    return SampFunctions.AddStaticVehicleEx(modelid, spawn_x, spawn_y, spawn_z, z_angle, color1, color2, respawn_delay, addsiren);
};
exports.AddStaticPickup = (model, type, X, Y, Z, virtualworld) => {
    return SampFunctions.AddStaticPickup(model, type, X, Y, Z, virtualworld);
};
exports.CreatePickup = (model, type, X, Y, Z, virtualworld) => {
    return SampFunctions.CreatePickup(model, type, X, Y, Z, virtualworld);
};
exports.DestroyPickup = (pickup) => {
    return SampFunctions.DestroyPickup(pickup);
};
exports.ShowNameTags = (show) => {
    return SampFunctions.ShowNameTags(show);
};
exports.ShowPlayerMarkers = (mode) => {
    return SampFunctions.ShowPlayerMarkers(mode);
};
exports.GameModeExit = () => {
    return SampFunctions.GameModeExit();
};
exports.SetWorldTime = (hour) => {
    return SampFunctions.SetWorldTime(hour);
};
exports.GetWeaponName = (weaponid, len) => {
    return SampFunctions.GetWeaponName(weaponid, len);
};
exports.EnableTirePopping = (enable) => {
    return SampFunctions.EnableTirePopping(enable);
};
exports.EnableVehicleFriendlyFire = () => {
    return SampFunctions.EnableVehicleFriendlyFire();
};
exports.AllowInteriorWeapons = (allow) => {
    return SampFunctions.AllowInteriorWeapons(allow);
};
exports.SetWeather = (weatherid) => {
    return SampFunctions.SetWeather(weatherid);
};
exports.GetGravity = () => {
    return SampFunctions.GetGravity();
};
exports.SetGravity = (gravity) => {
    return SampFunctions.SetGravity(gravity);
};
exports.AllowAdminTeleport = (allow) => {
    return SampFunctions.AllowAdminTeleport(allow);
};
exports.SetDeathDropAmount = (amount) => {
    return SampFunctions.SetDeathDropAmount(amount);
};
exports.CreateExplosion = (X, Y, Z, type, Radius) => {
    return SampFunctions.CreateExplosion(X, Y, Z, type, Radius);
};
exports.EnableZoneNames = (enable) => {
    return SampFunctions.EnableZoneNames(enable);
};
exports.UsePlayerPedAnims = () => {
    return SampFunctions.UsePlayerPedAnims();
};
exports.DisableInteriorEnterExits = () => {
    return SampFunctions.DisableInteriorEnterExits();
};
exports.SetNameTagDrawDistance = (distance) => {
    return SampFunctions.SetNameTagDrawDistance(distance);
};
exports.DisableNameTagLOS = () => {
    return SampFunctions.DisableNameTagLOS();
};
exports.LimitGlobalChatRadius = (chat_radius) => {
    return SampFunctions.LimitGlobalChatRadius(chat_radius);
};
exports.LimitPlayerMarkerRadius = (marker_radius) => {
    return SampFunctions.LimitPlayerMarkerRadius(marker_radius);
};
exports.ConnectNPC = (name, script) => {
    return SampFunctions.ConnectNPC(name, script);
};
exports.IsPlayerNPC = (playerid) => {
    return SampFunctions.IsPlayerNPC(playerid);
};
exports.IsPlayerAdmin = (playerid) => {
    return SampFunctions.IsPlayerAdmin(playerid);
};
exports.Kick = (playerid) => {
    return SampFunctions.Kick(playerid);
};
exports.Ban = (playerid) => {
    return SampFunctions.Ban(playerid);
};
exports.BanEx = (playerid, reason) => {
    return SampFunctions.BanEx(playerid, reason);
};
exports.SendRconCommand = (command) => {
    return SampFunctions.SendRconCommand(command);
};
exports.GetPlayerNetworkStats = (playerid, retstr_size) => {
    return SampFunctions.GetPlayerNetworkStats(playerid, retstr_size);
};
exports.GetNetworkStats = (retstr_size) => {
    return SampFunctions.GetNetworkStats(retstr_size);
};
exports.GetPlayerVersion = (playerid, len) => {
    return SampFunctions.GetPlayerVersion(playerid, len);
};
exports.BlockIpAddress = (ip_address, timems) => {
    return SampFunctions.BlockIpAddress(ip_address, timems);
};
exports.UnBlockIpAddress = (ip_address) => {
    return SampFunctions.UnBlockIpAddress(ip_address);
};
exports.GetServerVarAsString = (varname, len) => {
    return SampFunctions.GetServerVarAsString(varname, len);
};
exports.GetServerVarAsInt = (varname) => {
    return SampFunctions.GetServerVarAsInt(varname);
};
exports.GetServerVarAsBool = (varname) => {
    return SampFunctions.GetServerVarAsBool(varname);
};
exports.GetConsoleVarAsString = (varname, len) => {
    return SampFunctions.GetConsoleVarAsString(varname, len);
};
exports.GetConsoleVarAsInt = (varname) => {
    return SampFunctions.GetConsoleVarAsInt(varname);
};
exports.GetConsoleVarAsBool = (varname) => {
    return SampFunctions.GetConsoleVarAsBool(varname);
};
exports.GetServerTickRate = () => {
    return SampFunctions.GetServerTickRate();
};
exports.NetStats_GetConnectedTime = (playerid) => {
    return SampFunctions.NetStats_GetConnectedTime(playerid);
};
exports.NetStats_MessagesReceived = (playerid) => {
    return SampFunctions.NetStats_MessagesReceived(playerid);
};
exports.NetStats_BytesReceived = (playerid) => {
    return SampFunctions.NetStats_BytesReceived(playerid);
};
exports.NetStats_MessagesSent = (playerid) => {
    return SampFunctions.NetStats_MessagesSent(playerid);
};
exports.NetStats_BytesSent = (playerid) => {
    return SampFunctions.NetStats_BytesSent(playerid);
};
exports.NetStats_MessagesRecvPerSecond = (playerid) => {
    return SampFunctions.NetStats_MessagesRecvPerSecond(playerid);
};
exports.NetStats_PacketLossPercent = (playerid) => {
    return SampFunctions.NetStats_PacketLossPercent(playerid);
};
exports.NetStats_ConnectionStatus = (playerid) => {
    return SampFunctions.NetStats_ConnectionStatus(playerid);
};
exports.NetStats_GetIpPort = (playerid, ip_port_len) => {
    return SampFunctions.NetStats_GetIpPort(playerid, ip_port_len);
};
exports.CreateMenu = (title, columns, x, y, col1width, col2width) => {
    return SampFunctions.CreateMenu(title, columns, x, y, col1width, col2width);
};
exports.DestroyMenu = (menuid) => {
    return SampFunctions.DestroyMenu(menuid);
};
exports.AddMenuItem = (menuid, column, menutext) => {
    return SampFunctions.AddMenuItem(menuid, column, menutext);
};
exports.SetMenuColumnHeader = (menuid, column, columnheader) => {
    return SampFunctions.SetMenuColumnHeader(menuid, column, columnheader);
};
exports.ShowMenuForPlayer = (menuid, playerid) => {
    return SampFunctions.ShowMenuForPlayer(menuid, playerid);
};
exports.HideMenuForPlayer = (menuid, playerid) => {
    return SampFunctions.HideMenuForPlayer(menuid, playerid);
};
exports.IsValidMenu = (menuid) => {
    return SampFunctions.IsValidMenu(menuid);
};
exports.DisableMenu = (menuid) => {
    return SampFunctions.DisableMenu(menuid);
};
exports.DisableMenuRow = (menuid, row) => {
    return SampFunctions.DisableMenuRow(menuid, row);
};
exports.GetPlayerMenu = (playerid) => {
    return SampFunctions.GetPlayerMenu(playerid);
};
exports.TextDrawCreate = (x, y, text) => {
    return SampFunctions.TextDrawCreate(x, y, text);
};
exports.TextDrawDestroy = (text) => {
    return SampFunctions.TextDrawDestroy(text);
};
exports.TextDrawLetterSize = (text, x, y) => {
    return SampFunctions.TextDrawLetterSize(text, x, y);
};
exports.TextDrawTextSize = (text, x, y) => {
    return SampFunctions.TextDrawTextSize(text, x, y);
};
exports.TextDrawAlignment = (text, alignment) => {
    return SampFunctions.TextDrawAlignment(text, alignment);
};
exports.TextDrawColor = (text, color) => {
    return SampFunctions.TextDrawColor(text, color);
};
exports.TextDrawUseBox = (text, use) => {
    return SampFunctions.TextDrawUseBox(text, use);
};
exports.TextDrawBoxColor = (text, color) => {
    return SampFunctions.TextDrawBoxColor(text, color);
};
exports.TextDrawSetShadow = (text, size) => {
    return SampFunctions.TextDrawSetShadow(text, size);
};
exports.TextDrawSetOutline = (text, size) => {
    return SampFunctions.TextDrawSetOutline(text, size);
};
exports.TextDrawBackgroundColor = (text, color) => {
    return SampFunctions.TextDrawBackgroundColor(text, color);
};
exports.TextDrawFont = (text, font) => {
    return SampFunctions.TextDrawFont(text, font);
};
exports.TextDrawSetProportional = (text, set) => {
    return SampFunctions.TextDrawSetProportional(text, set);
};
exports.TextDrawSetSelectable = (text, set) => {
    return SampFunctions.TextDrawSetSelectable(text, set);
};
exports.TextDrawShowForPlayer = (playerid, text) => {
    return SampFunctions.TextDrawShowForPlayer(playerid, text);
};
exports.TextDrawHideForPlayer = (playerid, text) => {
    return SampFunctions.TextDrawHideForPlayer(playerid, text);
};
exports.TextDrawShowForAll = (text) => {
    return SampFunctions.TextDrawShowForAll(text);
};
exports.TextDrawHideForAll = (text) => {
    return SampFunctions.TextDrawHideForAll(text);
};
exports.TextDrawSetString = (text, string) => {
    return SampFunctions.TextDrawSetString(text, string);
};
exports.TextDrawSetPreviewModel = (text, modelindex) => {
    return SampFunctions.TextDrawSetPreviewModel(text, modelindex);
};
exports.TextDrawSetPreviewRot = (text, fRotX, fRotY, fRotZ, fZoom) => {
    return SampFunctions.TextDrawSetPreviewRot(text, fRotX, fRotY, fRotZ, fZoom);
};
exports.TextDrawSetPreviewVehCol = (text, color1, color2) => {
    return SampFunctions.TextDrawSetPreviewVehCol(text, color1, color2);
};
exports.GangZoneCreate = (minx, miny, maxx, maxy) => {
    return SampFunctions.GangZoneCreate(minx, miny, maxx, maxy);
};
exports.GangZoneDestroy = (zone) => {
    return SampFunctions.GangZoneDestroy(zone);
};
exports.GangZoneShowForPlayer = (playerid, zone, color) => {
    return SampFunctions.GangZoneShowForPlayer(playerid, zone, color);
};
exports.GangZoneShowForAll = (zone, color) => {
    return SampFunctions.GangZoneShowForAll(zone, color);
};
exports.GangZoneHideForPlayer = (playerid, zone) => {
    return SampFunctions.GangZoneHideForPlayer(playerid, zone);
};
exports.GangZoneHideForAll = (zone) => {
    return SampFunctions.GangZoneHideForAll(zone);
};
exports.GangZoneFlashForPlayer = (playerid, zone, flashcolor) => {
    return SampFunctions.GangZoneFlashForPlayer(playerid, zone, flashcolor);
};
exports.GangZoneFlashForAll = (zone, flashcolor) => {
    return SampFunctions.GangZoneFlashForAll(zone, flashcolor);
};
exports.GangZoneStopFlashForPlayer = (playerid, zone) => {
    return SampFunctions.GangZoneStopFlashForPlayer(playerid, zone);
};
exports.GangZoneStopFlashForAll = (zone) => {
    return SampFunctions.GangZoneStopFlashForAll(zone);
};
exports.Create3DTextLabel = (text, color, X, Y, Z, DrawDistance, virtualworld, testLOS) => {
    return SampFunctions.Create3DTextLabel(text, color, X, Y, Z, DrawDistance, virtualworld, testLOS);
};
exports.Delete3DTextLabel = (id) => {
    return SampFunctions.Delete3DTextLabel(id);
};
exports.Attach3DTextLabelToPlayer = (id, playerid, OffsetX, OffsetY, OffsetZ) => {
    return SampFunctions.Attach3DTextLabelToPlayer(id, playerid, OffsetX, OffsetY, OffsetZ);
};
exports.Attach3DTextLabelToVehicle = (id, vehicleid, OffsetX, OffsetY, OffsetZ) => {
    return SampFunctions.Attach3DTextLabelToVehicle(id, vehicleid, OffsetX, OffsetY, OffsetZ);
};
exports.Update3DTextLabelText = (id, color, text) => {
    return SampFunctions.Update3DTextLabelText(id, color, text);
};
exports.CreatePlayer3DTextLabel = (playerid, text, color, X, Y, Z, DrawDistance, attachedplayer, attachedvehicle, testLOS) => {
    return SampFunctions.CreatePlayer3DTextLabel(playerid, text, color, X, Y, Z, DrawDistance, attachedplayer, attachedvehicle, testLOS);
};
exports.DeletePlayer3DTextLabel = (playerid, id) => {
    return SampFunctions.DeletePlayer3DTextLabel(playerid, id);
};
exports.UpdatePlayer3DTextLabelText = (playerid, id, color, text) => {
    return SampFunctions.UpdatePlayer3DTextLabelText(playerid, id, color, text);
};
exports.ShowPlayerDialog = (playerid, dialogid, style, caption, info, button1, button2) => {
    return SampFunctions.ShowPlayerDialog(playerid, dialogid, style, caption, info, button1, button2);
};
exports.gpci = (playerid, maxlen) => {
    return SampFunctions.gpci(playerid, maxlen);
};
exports.CreateActor = (modelid, X, Y, Z, Rotation) => {
    return SampFunctions.CreateActor(modelid, X, Y, Z, Rotation);
};
exports.DestroyActor = (actorid) => {
    return SampFunctions.DestroyActor(actorid);
};
exports.IsActorStreamedIn = (actorid, forplayerid) => {
    return SampFunctions.IsActorStreamedIn(actorid, forplayerid);
};
exports.SetActorVirtualWorld = (actorid, vworld) => {
    return SampFunctions.SetActorVirtualWorld(actorid, vworld);
};
exports.GetActorVirtualWorld = (actorid) => {
    return SampFunctions.GetActorVirtualWorld(actorid);
};
exports.ApplyActorAnimation = (actorid, animlib, animname, fDelta, loop, lockx, locky, freeze, time) => {
    return SampFunctions.ApplyActorAnimation(actorid, animlib, animname, fDelta, loop, lockx, locky, freeze, time);
};
exports.ClearActorAnimations = (actorid) => {
    return SampFunctions.ClearActorAnimations(actorid);
};
exports.SetActorPos = (actorid, X, Y, Z) => {
    return SampFunctions.SetActorPos(actorid, X, Y, Z);
};
exports.GetActorPos = (actorid) => {
    return SampFunctions.GetActorPos(actorid);
};
exports.SetActorFacingAngle = (actorid, ang) => {
    return SampFunctions.SetActorFacingAngle(actorid, ang);
};
exports.GetActorFacingAngle = (actorid) => {
    return SampFunctions.GetActorFacingAngle(actorid);
};
exports.SetActorHealth = (actorid, health) => {
    return SampFunctions.SetActorHealth(actorid, health);
};
exports.GetActorHealth = (actorid) => {
    return SampFunctions.GetActorHealth(actorid);
};
exports.SetActorInvulnerable = (actorid, invulnerable) => {
    return SampFunctions.SetActorInvulnerable(actorid, invulnerable);
};
exports.IsActorInvulnerable = (actorid) => {
    return SampFunctions.IsActorInvulnerable(actorid);
};
exports.IsValidActor = (actorid) => {
    return SampFunctions.IsValidActor(actorid);
};
exports.HTTP = (index, type, url, data, callback) => {
    return SampFunctions.HTTP(index, type, url, data, callback);
};
exports.CreateObject = (modelid, X, Y, Z, rX, rY, rZ, DrawDistance) => {
    return SampFunctions.CreateObject(modelid, X, Y, Z, rX, rY, rZ, DrawDistance);
};
exports.AttachObjectToVehicle = (objectid, vehicleid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ) => {
    return SampFunctions.AttachObjectToVehicle(objectid, vehicleid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ);
};
exports.AttachObjectToObject = (objectid, attachtoid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ, SyncRotation) => {
    return SampFunctions.AttachObjectToObject(objectid, attachtoid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ, SyncRotation);
};
exports.AttachObjectToPlayer = (objectid, playerid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ) => {
    return SampFunctions.AttachObjectToPlayer(objectid, playerid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ);
};
exports.SetObjectPos = (objectid, X, Y, Z) => {
    return SampFunctions.SetObjectPos(objectid, X, Y, Z);
};
exports.GetObjectPos = (objectid) => {
    return SampFunctions.GetObjectPos(objectid);
};
exports.SetObjectRot = (objectid, RotX, RotY, RotZ) => {
    return SampFunctions.SetObjectRot(objectid, RotX, RotY, RotZ);
};
exports.GetObjectRot = (objectid) => {
    return SampFunctions.GetObjectRot(objectid);
};
exports.GetObjectModel = (objectid) => {
    return SampFunctions.GetObjectModel(objectid);
};
exports.SetObjectNoCameraCol = (objectid) => {
    return SampFunctions.SetObjectNoCameraCol(objectid);
};
exports.IsValidObject = (objectid) => {
    return SampFunctions.IsValidObject(objectid);
};
exports.DestroyObject = (objectid) => {
    return SampFunctions.DestroyObject(objectid);
};
exports.MoveObject = (objectid, X, Y, Z, Speed, RotX, RotY, RotZ) => {
    return SampFunctions.MoveObject(objectid, X, Y, Z, Speed, RotX, RotY, RotZ);
};
exports.StopObject = (objectid) => {
    return SampFunctions.StopObject(objectid);
};
exports.IsObjectMoving = (objectid) => {
    return SampFunctions.IsObjectMoving(objectid);
};
exports.EditObject = (playerid, objectid) => {
    return SampFunctions.EditObject(playerid, objectid);
};
exports.EditPlayerObject = (playerid, objectid) => {
    return SampFunctions.EditPlayerObject(playerid, objectid);
};
exports.SelectObject = (playerid) => {
    return SampFunctions.SelectObject(playerid);
};
exports.CancelEdit = (playerid) => {
    return SampFunctions.CancelEdit(playerid);
};
exports.CreatePlayerObject = (playerid, modelid, X, Y, Z, rX, rY, rZ, DrawDistance) => {
    return SampFunctions.CreatePlayerObject(playerid, modelid, X, Y, Z, rX, rY, rZ, DrawDistance);
};
exports.AttachPlayerObjectToVehicle = (playerid, objectid, vehicleid, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, RotZ) => {
    return SampFunctions.AttachPlayerObjectToVehicle(playerid, objectid, vehicleid, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, RotZ);
};
exports.SetPlayerObjectPos = (playerid, objectid, X, Y, Z) => {
    return SampFunctions.SetPlayerObjectPos(playerid, objectid, X, Y, Z);
};
exports.GetPlayerObjectPos = (playerid, objectid) => {
    return SampFunctions.GetPlayerObjectPos(playerid, objectid);
};
exports.SetPlayerObjectRot = (playerid, objectid, RotX, RotY, RotZ) => {
    return SampFunctions.SetPlayerObjectRot(playerid, objectid, RotX, RotY, RotZ);
};
exports.GetPlayerObjectRot = (playerid, objectid) => {
    return SampFunctions.GetPlayerObjectRot(playerid, objectid);
};
exports.GetPlayerObjectModel = (playerid, objectid) => {
    return SampFunctions.GetPlayerObjectModel(playerid, objectid);
};
exports.SetPlayerObjectNoCameraCol = (playerid, objectid) => {
    return SampFunctions.SetPlayerObjectNoCameraCol(playerid, objectid);
};
exports.IsValidPlayerObject = (playerid, objectid) => {
    return SampFunctions.IsValidPlayerObject(playerid, objectid);
};
exports.DestroyPlayerObject = (playerid, objectid) => {
    return SampFunctions.DestroyPlayerObject(playerid, objectid);
};
exports.MovePlayerObject = (playerid, objectid, X, Y, Z, Speed, RotX, RotY, RotZ) => {
    return SampFunctions.MovePlayerObject(playerid, objectid, X, Y, Z, Speed, RotX, RotY, RotZ);
};
exports.StopPlayerObject = (playerid, objectid) => {
    return SampFunctions.StopPlayerObject(playerid, objectid);
};
exports.IsPlayerObjectMoving = (playerid, objectid) => {
    return SampFunctions.IsPlayerObjectMoving(playerid, objectid);
};
exports.AttachPlayerObjectToPlayer = (objectplayer, objectid, attachplayer, OffsetX, OffsetY, OffsetZ, rX, rY, rZ) => {
    return SampFunctions.AttachPlayerObjectToPlayer(objectplayer, objectid, attachplayer, OffsetX, OffsetY, OffsetZ, rX, rY, rZ);
};
exports.SetObjectMaterial = (objectid, materialindex, modelid, txdname, texturename, materialcolor) => {
    return SampFunctions.SetObjectMaterial(objectid, materialindex, modelid, txdname, texturename, materialcolor);
};
exports.SetPlayerObjectMaterial = (playerid, objectid, materialindex, modelid, txdname, texturename, materialcolor) => {
    return SampFunctions.SetPlayerObjectMaterial(playerid, objectid, materialindex, modelid, txdname, texturename, materialcolor);
};
exports.SetObjectMaterialText = (objectid, text, materialindex, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment) => {
    return SampFunctions.SetObjectMaterialText(objectid, text, materialindex, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment);
};
exports.SetPlayerObjectMaterialText = (playerid, objectid, text, materialindex, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment) => {
    return SampFunctions.SetPlayerObjectMaterialText(playerid, objectid, text, materialindex, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment);
};
exports.SetObjectsDefaultCameraCol = (disable) => {
    return SampFunctions.SetObjectsDefaultCameraCol(disable);
};
exports.SetSpawnInfo = (playerid, team, skin, x, y, z, rotation, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo) => {
    return SampFunctions.SetSpawnInfo(playerid, team, skin, x, y, z, rotation, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo);
};
exports.SpawnPlayer = (playerid) => {
    return SampFunctions.SpawnPlayer(playerid);
};
exports.SetPlayerPos = (playerid, x, y, z) => {
    return SampFunctions.SetPlayerPos(playerid, x, y, z);
};
exports.SetPlayerPosFindZ = (playerid, x, y, z) => {
    return SampFunctions.SetPlayerPosFindZ(playerid, x, y, z);
};
exports.GetPlayerPos = (playerid) => {
    return SampFunctions.GetPlayerPos(playerid);
};
exports.SetPlayerFacingAngle = (playerid, ang) => {
    return SampFunctions.SetPlayerFacingAngle(playerid, ang);
};
exports.GetPlayerFacingAngle = (playerid) => {
    return SampFunctions.GetPlayerFacingAngle(playerid);
};
exports.IsPlayerInRangeOfPoint = (playerid, range, x, y, z) => {
    return SampFunctions.IsPlayerInRangeOfPoint(playerid, range, x, y, z);
};
exports.GetPlayerDistanceFromPoint = (playerid, X, Y, Z) => {
    return SampFunctions.GetPlayerDistanceFromPoint(playerid, X, Y, Z);
};
exports.IsPlayerStreamedIn = (playerid, forplayerid) => {
    return SampFunctions.IsPlayerStreamedIn(playerid, forplayerid);
};
exports.SetPlayerInterior = (playerid, interiorid) => {
    return SampFunctions.SetPlayerInterior(playerid, interiorid);
};
exports.GetPlayerInterior = (playerid) => {
    return SampFunctions.GetPlayerInterior(playerid);
};
exports.SetPlayerHealth = (playerid, health) => {
    return SampFunctions.SetPlayerHealth(playerid, health);
};
exports.GetPlayerHealth = (playerid) => {
    return SampFunctions.GetPlayerHealth(playerid);
};
exports.SetPlayerArmour = (playerid, armour) => {
    return SampFunctions.SetPlayerArmour(playerid, armour);
};
exports.GetPlayerArmour = (playerid) => {
    return SampFunctions.GetPlayerArmour(playerid);
};
exports.SetPlayerAmmo = (playerid, weaponslot, ammo) => {
    return SampFunctions.SetPlayerAmmo(playerid, weaponslot, ammo);
};
exports.GetPlayerAmmo = (playerid) => {
    return SampFunctions.GetPlayerAmmo(playerid);
};
exports.GetPlayerWeaponState = (playerid) => {
    return SampFunctions.GetPlayerWeaponState(playerid);
};
exports.GetPlayerTargetPlayer = (playerid) => {
    return SampFunctions.GetPlayerTargetPlayer(playerid);
};
exports.GetPlayerTargetActor = (playerid) => {
    return SampFunctions.GetPlayerTargetActor(playerid);
};
exports.SetPlayerTeam = (playerid, teamid) => {
    return SampFunctions.SetPlayerTeam(playerid, teamid);
};
exports.GetPlayerTeam = (playerid) => {
    return SampFunctions.GetPlayerTeam(playerid);
};
exports.SetPlayerScore = (playerid, score) => {
    return SampFunctions.SetPlayerScore(playerid, score);
};
exports.GetPlayerScore = (playerid) => {
    return SampFunctions.GetPlayerScore(playerid);
};
exports.GetPlayerDrunkLevel = (playerid) => {
    return SampFunctions.GetPlayerDrunkLevel(playerid);
};
exports.SetPlayerDrunkLevel = (playerid, level) => {
    return SampFunctions.SetPlayerDrunkLevel(playerid, level);
};
exports.SetPlayerColor = (playerid, color) => {
    return SampFunctions.SetPlayerColor(playerid, color);
};
exports.GetPlayerColor = (playerid) => {
    return SampFunctions.GetPlayerColor(playerid);
};
exports.SetPlayerSkin = (playerid, skinid) => {
    return SampFunctions.SetPlayerSkin(playerid, skinid);
};
exports.GetPlayerSkin = (playerid) => {
    return SampFunctions.GetPlayerSkin(playerid);
};
exports.GivePlayerWeapon = (playerid, weaponid, ammo) => {
    return SampFunctions.GivePlayerWeapon(playerid, weaponid, ammo);
};
exports.ResetPlayerWeapons = (playerid) => {
    return SampFunctions.ResetPlayerWeapons(playerid);
};
exports.SetPlayerArmedWeapon = (playerid, weaponid) => {
    return SampFunctions.SetPlayerArmedWeapon(playerid, weaponid);
};
exports.GetPlayerWeaponData = (playerid, slot) => {
    return SampFunctions.GetPlayerWeaponData(playerid, slot);
};
exports.GivePlayerMoney = (playerid, money) => {
    return SampFunctions.GivePlayerMoney(playerid, money);
};
exports.ResetPlayerMoney = (playerid) => {
    return SampFunctions.ResetPlayerMoney(playerid);
};
exports.SetPlayerName = (playerid, name) => {
    return SampFunctions.SetPlayerName(playerid, name);
};
exports.GetPlayerMoney = (playerid) => {
    return SampFunctions.GetPlayerMoney(playerid);
};
exports.GetPlayerState = (playerid) => {
    return SampFunctions.GetPlayerState(playerid);
};
exports.GetPlayerIp = (playerid, len) => {
    return SampFunctions.GetPlayerIp(playerid, len);
};
exports.GetPlayerPing = (playerid) => {
    return SampFunctions.GetPlayerPing(playerid);
};
exports.GetPlayerWeapon = (playerid) => {
    return SampFunctions.GetPlayerWeapon(playerid);
};
exports.GetPlayerKeys = (playerid) => {
    return SampFunctions.GetPlayerKeys(playerid);
};
exports.GetPlayerName = (playerid, len) => {
    return SampFunctions.GetPlayerName(playerid, len);
};
exports.SetPlayerTime = (playerid, hour, minute) => {
    return SampFunctions.SetPlayerTime(playerid, hour, minute);
};
exports.GetPlayerTime = (playerid) => {
    return SampFunctions.GetPlayerTime(playerid);
};
exports.TogglePlayerClock = (playerid, toggle) => {
    return SampFunctions.TogglePlayerClock(playerid, toggle);
};
exports.SetPlayerWeather = (playerid, weather) => {
    return SampFunctions.SetPlayerWeather(playerid, weather);
};
exports.ForceClassSelection = (playerid) => {
    return SampFunctions.ForceClassSelection(playerid);
};
exports.SetPlayerWantedLevel = (playerid, level) => {
    return SampFunctions.SetPlayerWantedLevel(playerid, level);
};
exports.GetPlayerWantedLevel = (playerid) => {
    return SampFunctions.GetPlayerWantedLevel(playerid);
};
exports.SetPlayerFightingStyle = (playerid, style) => {
    return SampFunctions.SetPlayerFightingStyle(playerid, style);
};
exports.GetPlayerFightingStyle = (playerid) => {
    return SampFunctions.GetPlayerFightingStyle(playerid);
};
exports.SetPlayerVelocity = (playerid, X, Y, Z) => {
    return SampFunctions.SetPlayerVelocity(playerid, X, Y, Z);
};
exports.GetPlayerVelocity = (playerid) => {
    return SampFunctions.GetPlayerVelocity(playerid);
};
exports.PlayCrimeReportForPlayer = (playerid, suspectid, crime) => {
    return SampFunctions.PlayCrimeReportForPlayer(playerid, suspectid, crime);
};
exports.PlayAudioStreamForPlayer = (playerid, url, posX, posY, posZ, distance, usepos) => {
    return SampFunctions.PlayAudioStreamForPlayer(playerid, url, posX, posY, posZ, distance, usepos);
};
exports.StopAudioStreamForPlayer = (playerid) => {
    return SampFunctions.StopAudioStreamForPlayer(playerid);
};
exports.SetPlayerShopName = (playerid, shopname) => {
    return SampFunctions.SetPlayerShopName(playerid, shopname);
};
exports.SetPlayerSkillLevel = (playerid, skill, level) => {
    return SampFunctions.SetPlayerSkillLevel(playerid, skill, level);
};
exports.GetPlayerSurfingVehicleID = (playerid) => {
    return SampFunctions.GetPlayerSurfingVehicleID(playerid);
};
exports.GetPlayerSurfingObjectID = (playerid) => {
    return SampFunctions.GetPlayerSurfingObjectID(playerid);
};
exports.RemoveBuildingForPlayer = (playerid, modelid, fX, fY, fZ, fRadius) => {
    return SampFunctions.RemoveBuildingForPlayer(playerid, modelid, fX, fY, fZ, fRadius);
};
exports.GetPlayerLastShotVectors = (playerid) => {
    return SampFunctions.GetPlayerLastShotVectors(playerid);
};
exports.SetPlayerAttachedObject = (playerid, index, modelid, bone, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, fRotZ, fScaleX, fScaleY, fScaleZ, materialcolor1, materialcolor2) => {
    return SampFunctions.SetPlayerAttachedObject(playerid, index, modelid, bone, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, fRotZ, fScaleX, fScaleY, fScaleZ, materialcolor1, materialcolor2);
};
exports.RemovePlayerAttachedObject = (playerid, index) => {
    return SampFunctions.RemovePlayerAttachedObject(playerid, index);
};
exports.IsPlayerAttachedObjectSlotUsed = (playerid, index) => {
    return SampFunctions.IsPlayerAttachedObjectSlotUsed(playerid, index);
};
exports.EditAttachedObject = (playerid, index) => {
    return SampFunctions.EditAttachedObject(playerid, index);
};
exports.CreatePlayerTextDraw = (playerid, x, y, text) => {
    return SampFunctions.CreatePlayerTextDraw(playerid, x, y, text);
};
exports.PlayerTextDrawDestroy = (playerid, text) => {
    SampFunctions.PlayerTextDrawDestroy(playerid, text);
};
exports.PlayerTextDrawLetterSize = (playerid, text, x, y) => {
    return SampFunctions.PlayerTextDrawLetterSize(playerid, text, x, y);
};
exports.PlayerTextDrawTextSize = (playerid, text, x, y) => {
    return SampFunctions.PlayerTextDrawTextSize(playerid, text, x, y);
};
exports.PlayerTextDrawAlignment = (playerid, text, alignment) => {
    return SampFunctions.PlayerTextDrawAlignment(playerid, text, alignment);
};
exports.PlayerTextDrawColor = (playerid, text, color) => {
    return SampFunctions.PlayerTextDrawColor(playerid, text, color);
};
exports.PlayerTextDrawUseBox = (playerid, text, use) => {
    return SampFunctions.PlayerTextDrawUseBox(playerid, text, use);
};
exports.PlayerTextDrawBoxColor = (playerid, text, color) => {
    return SampFunctions.PlayerTextDrawBoxColor(playerid, text, color);
};
exports.PlayerTextDrawSetShadow = (playerid, text, size) => {
    return SampFunctions.PlayerTextDrawSetShadow(playerid, text, size);
};
exports.PlayerTextDrawSetOutline = (playerid, text, size) => {
    return SampFunctions.PlayerTextDrawSetOutline(playerid, text, size);
};
exports.PlayerTextDrawBackgroundColor = (playerid, text, color) => {
    return SampFunctions.PlayerTextDrawBackgroundColor(playerid, text, color);
};
exports.PlayerTextDrawFont = (playerid, text, font) => {
    return SampFunctions.PlayerTextDrawFont(playerid, text, font);
};
exports.PlayerTextDrawSetProportional = (playerid, text, set) => {
    return SampFunctions.PlayerTextDrawSetProportional(playerid, text, set);
};
exports.PlayerTextDrawSetSelectable = (playerid, text, set) => {
    return SampFunctions.PlayerTextDrawSetSelectable(playerid, text, set);
};
exports.PlayerTextDrawShow = (playerid, text) => {
    return SampFunctions.PlayerTextDrawShow(playerid, text);
};
exports.PlayerTextDrawHide = (playerid, text) => {
    return SampFunctions.PlayerTextDrawHide(playerid, text);
};
exports.PlayerTextDrawSetString = (playerid, text, string) => {
    return SampFunctions.PlayerTextDrawSetString(playerid, text, string);
};
exports.PlayerTextDrawSetPreviewModel = (playerid, text, modelindex) => {
    return SampFunctions.PlayerTextDrawSetPreviewModel(playerid, text, modelindex);
};
exports.PlayerTextDrawSetPreviewRot = (playerid, text, fRotX, fRotY, fRotZ, fZoom) => {
    return SampFunctions.PlayerTextDrawSetPreviewRot(playerid, text, fRotX, fRotY, fRotZ, fZoom);
};
exports.PlayerTextDrawSetPreviewVehCol = (playerid, text, color1, color2) => {
    return SampFunctions.PlayerTextDrawSetPreviewVehCol(playerid, text, color1, color2);
};
exports.SetPVarInt = (playerid, varname, int_value) => {
    return SampFunctions.SetPVarInt(playerid, varname, int_value);
};
exports.GetPVarInt = (playerid, varname) => {
    return SampFunctions.GetPVarInt(playerid, varname);
};
exports.SetPVarString = (playerid, varname, string_value) => {
    return SampFunctions.SetPVarString(playerid, varname, string_value);
};
exports.GetPVarString = (playerid, varname, len) => {
    return SampFunctions.GetPVarString(playerid, varname, len);
};
exports.SetPVarFloat = (playerid, varname, float_value) => {
    return SampFunctions.SetPVarFloat(playerid, varname, float_value);
};
exports.GetPVarFloat = (playerid, varname) => {
    return SampFunctions.GetPVarFloat(playerid, varname);
};
exports.DeletePVar = (playerid, varname) => {
    return SampFunctions.DeletePVar(playerid, varname);
};
exports.GetPVarsUpperIndex = (playerid) => {
    return SampFunctions.GetPVarsUpperIndex(playerid);
};
exports.GetPVarNameAtIndex = (playerid, index, ret_len) => {
    return SampFunctions.GetPVarNameAtIndex(playerid, index, ret_len);
};
exports.GetPVarType = (playerid, varname) => {
    return SampFunctions.GetPVarType(playerid, varname);
};
exports.SetPlayerChatBubble = (playerid, text, color, drawdistance, expiretime) => {
    return SampFunctions.SetPlayerChatBubble(playerid, text, color, drawdistance, expiretime);
};
exports.PutPlayerInVehicle = (playerid, vehicleid, seatid) => {
    return SampFunctions.PutPlayerInVehicle(playerid, vehicleid, seatid);
};
exports.GetPlayerVehicleID = (playerid) => {
    return SampFunctions.GetPlayerVehicleID(playerid);
};
exports.GetPlayerVehicleSeat = (playerid) => {
    return SampFunctions.GetPlayerVehicleSeat(playerid);
};
exports.RemovePlayerFromVehicle = (playerid) => {
    return SampFunctions.RemovePlayerFromVehicle(playerid);
};
exports.TogglePlayerControllable = (playerid, toggle) => {
    return SampFunctions.TogglePlayerControllable(playerid, toggle);
};
exports.PlayerPlaySound = (playerid, soundid, x, y, z) => {
    return SampFunctions.PlayerPlaySound(playerid, soundid, x, y, z);
};
exports.ApplyAnimation = (playerid, animlib, animname, fDelta, loop, lockx, locky, freeze, time, forcesync) => {
    return SampFunctions.ApplyAnimation(playerid, animlib, animname, fDelta, loop, lockx, locky, freeze, time, forcesync);
};
exports.ClearAnimations = (playerid, forcesync) => {
    return SampFunctions.ClearAnimations(playerid, forcesync);
};
exports.GetPlayerAnimationIndex = (playerid) => {
    return SampFunctions.GetPlayerAnimationIndex(playerid);
};
exports.GetAnimationName = (index, len1, len2) => {
    return SampFunctions.GetAnimationName(index, len1, len2);
};
exports.GetPlayerSpecialAction = (playerid) => {
    return SampFunctions.GetPlayerSpecialAction(playerid);
};
exports.SetPlayerSpecialAction = (playerid, actionid) => {
    return SampFunctions.SetPlayerSpecialAction(playerid, actionid);
};
exports.DisableRemoteVehicleCollisions = (playerid, disable) => {
    return SampFunctions.DisableRemoteVehicleCollisions(playerid, disable);
};
exports.SetPlayerCheckpoint = (playerid, x, y, z, size) => {
    return SampFunctions.SetPlayerCheckpoint(playerid, x, y, z, size);
};
exports.DisablePlayerCheckpoint = (playerid) => {
    return SampFunctions.DisablePlayerCheckpoint(playerid);
};
exports.SetPlayerRaceCheckpoint = (playerid, type, x, y, z, nextx, nexty, nextz, size) => {
    return SampFunctions.SetPlayerRaceCheckpoint(playerid, type, x, y, z, nextx, nexty, nextz, size);
};
exports.DisablePlayerRaceCheckpoint = (playerid) => {
    return SampFunctions.DisablePlayerRaceCheckpoint(playerid);
};
exports.SetPlayerWorldBounds = (playerid, x_max, x_min, y_max, y_min) => {
    return SampFunctions.SetPlayerWorldBounds(playerid, x_max, x_min, y_max, y_min);
};
exports.SetPlayerMarkerForPlayer = (playerid, showplayerid, color) => {
    return SampFunctions.SetPlayerMarkerForPlayer(playerid, showplayerid, color);
};
exports.ShowPlayerNameTagForPlayer = (playerid, showplayerid, show) => {
    return SampFunctions.ShowPlayerNameTagForPlayer(playerid, showplayerid, show);
};
exports.SetPlayerMapIcon = (playerid, iconid, x, y, z, markertype, color, style) => {
    return SampFunctions.SetPlayerMapIcon(playerid, iconid, x, y, z, markertype, color, style);
};
exports.RemovePlayerMapIcon = (playerid, iconid) => {
    return SampFunctions.RemovePlayerMapIcon(playerid, iconid);
};
exports.AllowPlayerTeleport = (playerid, allow) => {
    return SampFunctions.AllowPlayerTeleport(playerid, allow);
};
exports.SetPlayerCameraPos = (playerid, x, y, z) => {
    return SampFunctions.SetPlayerCameraPos(playerid, x, y, z);
};
exports.SetPlayerCameraLookAt = (playerid, x, y, z, cut) => {
    return SampFunctions.SetPlayerCameraLookAt(playerid, x, y, z, cut);
};
exports.SetCameraBehindPlayer = (playerid) => {
    return SampFunctions.SetCameraBehindPlayer(playerid);
};
exports.GetPlayerCameraPos = (playerid) => {
    return SampFunctions.GetPlayerCameraPos(playerid);
};
exports.GetPlayerCameraFrontVector = (playerid) => {
    return SampFunctions.GetPlayerCameraFrontVector(playerid);
};
exports.GetPlayerCameraMode = (playerid) => {
    return SampFunctions.GetPlayerCameraMode(playerid);
};
exports.EnablePlayerCameraTarget = (playerid, enable) => {
    return SampFunctions.EnablePlayerCameraTarget(playerid, enable);
};
exports.GetPlayerCameraTargetObject = (playerid) => {
    return SampFunctions.GetPlayerCameraTargetObject(playerid);
};
exports.GetPlayerCameraTargetVehicle = (playerid) => {
    return SampFunctions.GetPlayerCameraTargetVehicle(playerid);
};
exports.GetPlayerCameraTargetPlayer = (playerid) => {
    return SampFunctions.GetPlayerCameraTargetPlayer(playerid);
};
exports.GetPlayerCameraTargetActor = (playerid) => {
    return SampFunctions.GetPlayerCameraTargetActor(playerid);
};
exports.GetPlayerCameraAspectRatio = (playerid) => {
    return SampFunctions.GetPlayerCameraAspectRatio(playerid);
};
exports.GetPlayerCameraZoom = (playerid) => {
    return SampFunctions.GetPlayerCameraZoom(playerid);
};
exports.AttachCameraToObject = (playerid, objectid) => {
    return SampFunctions.AttachCameraToObject(playerid, objectid);
};
exports.AttachCameraToPlayerObject = (playerid, playerobjectid) => {
    return SampFunctions.AttachCameraToPlayerObject(playerid, playerobjectid);
};
exports.InterpolateCameraPos = (playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut) => {
    return SampFunctions.InterpolateCameraPos(playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut);
};
exports.InterpolateCameraLookAt = (playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut) => {
    return SampFunctions.InterpolateCameraLookAt(playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut);
};
exports.IsPlayerConnected = (playerid) => {
    return SampFunctions.IsPlayerConnected(playerid);
};
exports.IsPlayerInVehicle = (playerid, vehicleid) => {
    return SampFunctions.IsPlayerInVehicle(playerid, vehicleid);
};
exports.IsPlayerInAnyVehicle = (playerid) => {
    return SampFunctions.IsPlayerInAnyVehicle(playerid);
};
exports.IsPlayerInCheckpoint = (playerid) => {
    return SampFunctions.IsPlayerInCheckpoint(playerid);
};
exports.IsPlayerInRaceCheckpoint = (playerid) => {
    return SampFunctions.IsPlayerInRaceCheckpoint(playerid);
};
exports.SetPlayerVirtualWorld = (playerid, worldid) => {
    return SampFunctions.SetPlayerVirtualWorld(playerid, worldid);
};
exports.GetPlayerVirtualWorld = (playerid) => {
    return SampFunctions.GetPlayerVirtualWorld(playerid);
};
exports.EnableStuntBonusForPlayer = (playerid, enable) => {
    return SampFunctions.EnableStuntBonusForPlayer(playerid, enable);
};
exports.EnableStuntBonusForAll = (enable) => {
    return SampFunctions.EnableStuntBonusForAll(enable);
};
exports.TogglePlayerSpectating = (playerid, toggle) => {
    return SampFunctions.TogglePlayerSpectating(playerid, toggle);
};
exports.PlayerSpectatePlayer = (playerid, targetplayerid, mode) => {
    return SampFunctions.PlayerSpectatePlayer(playerid, targetplayerid, mode);
};
exports.PlayerSpectateVehicle = (playerid, targetvehicleid, mode) => {
    return SampFunctions.PlayerSpectateVehicle(playerid, targetvehicleid, mode);
};
exports.StartRecordingPlayerData = (playerid, recordtype, recordname) => {
    return SampFunctions.StartRecordingPlayerData(playerid, recordtype, recordname);
};
exports.StopRecordingPlayerData = (playerid) => {
    return SampFunctions.StopRecordingPlayerData(playerid);
};
exports.SelectTextDraw = (playerid, hovercolor) => {
    return SampFunctions.SelectTextDraw(playerid, hovercolor);
};
exports.CancelSelectTextDraw = (playerid) => {
    return SampFunctions.CancelSelectTextDraw(playerid);
};
exports.CreateExplosionForPlayer = (playerid, X, Y, Z, type, Radius) => {
    return SampFunctions.CreateExplosionForPlayer(playerid, X, Y, Z, type, Radius);
};
exports.SendClientCheck = (playerid, type, memAddr, memOffset, byteCount) => {
    return SampFunctions.SendClientCheck(playerid, type, memAddr, memOffset, byteCount);
};
exports.db_open = (name) => {
    return SampFunctions.db_open(name);
};
exports.db_close = (db) => {
    return SampFunctions.db_close(db);
};
exports.db_query = (db, query) => {
    return SampFunctions.db_query(db, query);
};
exports.db_free_result = (dbresult) => {
    return SampFunctions.db_free_result(dbresult);
};
exports.db_num_rows = (dbresult) => {
    return SampFunctions.db_num_rows(dbresult);
};
exports.db_next_row = (dbresult) => {
    return SampFunctions.db_next_row(dbresult);
};
exports.db_num_fields = (dbresult) => {
    return SampFunctions.db_num_fields(dbresult);
};
exports.db_field_name = (dbresult, field, maxlength) => {
    return SampFunctions.db_field_name(dbresult, field, maxlength);
};
exports.db_get_field = (dbresult, field, maxlength) => {
    return SampFunctions.db_get_field(dbresult, field, maxlength);
};
exports.db_get_field_int = (result, field) => {
    return SampFunctions.db_get_field_int(result, field);
};
exports.db_get_field_float = (result, field) => {
    return SampFunctions.db_get_field_float(result, field);
};
exports.db_get_field_assoc = (dbresult, field, maxlength) => {
    return SampFunctions.db_get_field_assoc(dbresult, field, maxlength);
};
exports.db_get_field_assoc_int = (result, field) => {
    return SampFunctions.db_get_field_assoc_int(result, field);
};
exports.db_get_field_assoc_float = (result, field) => {
    return SampFunctions.db_get_field_assoc_float(result, field);
};
exports.db_get_mem_handle = (db) => {
    return SampFunctions.db_get_mem_handle(db);
};
exports.db_get_result_mem_handle = (result) => {
    return SampFunctions.db_get_result_mem_handle(result);
};
exports.db_debug_openfiles = () => {
    return SampFunctions.db_debug_openfiles();
};
exports.db_debug_openresults = () => {
    return SampFunctions.db_debug_openresults();
};
exports.CreateVehicle = (vehicletype, x, y, z, rotation, color1, color2, respawn_delay, addsiren) => {
    return SampFunctions.CreateVehicle(vehicletype, x, y, z, rotation, color1, color2, respawn_delay, addsiren);
};
exports.DestroyVehicle = (vehicleid) => {
    return SampFunctions.DestroyVehicle(vehicleid);
};
exports.IsVehicleStreamedIn = (vehicleid, forplayerid) => {
    return SampFunctions.IsVehicleStreamedIn(vehicleid, forplayerid);
};
exports.GetVehiclePos = (vehicleid) => {
    return SampFunctions.GetVehiclePos(vehicleid);
};
exports.SetVehiclePos = (vehicleid, x, y, z) => {
    return SampFunctions.SetVehiclePos(vehicleid, x, y, z);
};
exports.GetVehicleZAngle = (vehicleid) => {
    return SampFunctions.GetVehicleZAngle(vehicleid);
};
exports.GetVehicleRotationQuat = (vehicleid) => {
    return SampFunctions.GetVehicleRotationQuat(vehicleid);
};
exports.GetVehicleDistanceFromPoint = (vehicleid, X, Y, Z) => {
    return SampFunctions.GetVehicleDistanceFromPoint(vehicleid, X, Y, Z);
};
exports.SetVehicleZAngle = (vehicleid, z_angle) => {
    return SampFunctions.SetVehicleZAngle(vehicleid, z_angle);
};
exports.SetVehicleParamsForPlayer = (vehicleid, playerid, objective, doorslocked) => {
    return SampFunctions.SetVehicleParamsForPlayer(vehicleid, playerid, objective, doorslocked);
};
exports.ManualVehicleEngineAndLights = () => {
    return SampFunctions.ManualVehicleEngineAndLights();
};
exports.SetVehicleParamsEx = (vehicleid, engine, lights, alarm, doors, bonnet, boot, objective) => {
    return SampFunctions.SetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
};
exports.GetVehicleParamsEx = (vehicleid) => {
    return SampFunctions.GetVehicleParamsEx(vehicleid);
};
exports.GetVehicleParamsSirenState = (vehicleid) => {
    return SampFunctions.GetVehicleParamsSirenState(vehicleid);
};
exports.SetVehicleParamsCarDoors = (vehicleid, driver, passenger, backleft, backright) => {
    return SampFunctions.SetVehicleParamsCarDoors(vehicleid, driver, passenger, backleft, backright);
};
exports.GetVehicleParamsCarDoors = (vehicleid) => {
    return SampFunctions.GetVehicleParamsCarDoors(vehicleid);
};
exports.SetVehicleParamsCarWindows = (vehicleid, driver, passenger, backleft, backright) => {
    return SampFunctions.SetVehicleParamsCarWindows(vehicleid, driver, passenger, backleft, backright);
};
exports.GetVehicleParamsCarWindows = (vehicleid) => {
    return SampFunctions.GetVehicleParamsCarWindows(vehicleid);
};
exports.SetVehicleToRespawn = (vehicleid) => {
    return SampFunctions.SetVehicleToRespawn(vehicleid);
};
exports.LinkVehicleToInterior = (vehicleid, interiorid) => {
    return SampFunctions.LinkVehicleToInterior(vehicleid, interiorid);
};
exports.AddVehicleComponent = (vehicleid, componentid) => {
    return SampFunctions.AddVehicleComponent(vehicleid, componentid);
};
exports.RemoveVehicleComponent = (vehicleid, componentid) => {
    return SampFunctions.RemoveVehicleComponent(vehicleid, componentid);
};
exports.ChangeVehicleColor = (vehicleid, color1, color2) => {
    return SampFunctions.ChangeVehicleColor(vehicleid, color1, color2);
};
exports.ChangeVehiclePaintjob = (vehicleid, paintjobid) => {
    return SampFunctions.ChangeVehiclePaintjob(vehicleid, paintjobid);
};
exports.SetVehicleHealth = (vehicleid, health) => {
    return SampFunctions.SetVehicleHealth(vehicleid, health);
};
exports.GetVehicleHealth = (vehicleid) => {
    return SampFunctions.GetVehicleHealth(vehicleid);
};
exports.AttachTrailerToVehicle = (trailerid, vehicleid) => {
    return SampFunctions.AttachTrailerToVehicle(trailerid, vehicleid);
};
exports.DetachTrailerFromVehicle = (vehicleid) => {
    return SampFunctions.DetachTrailerFromVehicle(vehicleid);
};
exports.IsTrailerAttachedToVehicle = (vehicleid) => {
    return SampFunctions.IsTrailerAttachedToVehicle(vehicleid);
};
exports.GetVehicleTrailer = (vehicleid) => {
    return SampFunctions.GetVehicleTrailer(vehicleid);
};
exports.SetVehicleNumberPlate = (vehicleid, numberplate) => {
    return SampFunctions.SetVehicleNumberPlate(vehicleid, numberplate);
};
exports.GetVehicleModel = (vehicleid) => {
    return SampFunctions.GetVehicleModel(vehicleid);
};
exports.GetVehicleComponentInSlot = (vehicleid, slot) => {
    return SampFunctions.GetVehicleComponentInSlot(vehicleid, slot);
};
exports.GetVehicleComponentType = (component) => {
    return SampFunctions.GetVehicleComponentType(component);
};
exports.RepairVehicle = (vehicleid) => {
    return SampFunctions.RepairVehicle(vehicleid);
};
exports.GetVehicleVelocity = (vehicleid) => {
    return SampFunctions.GetVehicleVelocity(vehicleid);
};
exports.SetVehicleVelocity = (vehicleid, X, Y, Z) => {
    return SampFunctions.SetVehicleVelocity(vehicleid, X, Y, Z);
};
exports.SetVehicleAngularVelocity = (vehicleid, X, Y, Z) => {
    return SampFunctions.SetVehicleAngularVelocity(vehicleid, X, Y, Z);
};
exports.GetVehicleDamageStatus = (vehicleid) => {
    return SampFunctions.GetVehicleDamageStatus(vehicleid);
};
exports.UpdateVehicleDamageStatus = (vehicleid, panels, doors, lights, tires) => {
    return SampFunctions.UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
};
exports.GetVehicleModelInfo = (vehiclemodel, infotype) => {
    return SampFunctions.GetVehicleModelInfo(vehiclemodel, infotype);
};
exports.SetVehicleVirtualWorld = (vehicleid, worldid) => {
    return SampFunctions.SetVehicleVirtualWorld(vehicleid, worldid);
};
exports.GetVehicleVirtualWorld = (vehicleid) => {
    return SampFunctions.GetVehicleVirtualWorld(vehicleid);
};
exports.IsValidVehicle = (vehicleid) => {
    return SampFunctions.IsValidVehicle(vehicleid);
};
class SampFunctions {
    static SendClientMessage(playerid, color, message) {
        return samp.callNative('SendClientMessage', 'iis', playerid, rgba_1.rgba(color), message);
    }
    static SendClientMessageToAll(color, message) {
        return samp.callNative('SendClientMessageToAll', 'is', rgba_1.rgba(color), message);
    }
    static SendPlayerMessageToPlayer(playerid, senderid, message) {
        return samp.callNative('SendPlayerMessageToPlayer', 'iis', playerid, senderid, message);
    }
    static SendPlayerMessageToAll(senderid, message) {
        return samp.callNative('SendPlayerMessageToAll', 'is', senderid, message);
    }
    static SendDeathMessage(killer, killee, weapon) {
        return samp.callNative('SendDeathMessage', 'iii', killer, killee, weapon);
    }
    static SendDeathMessageToPlayer(playerid, killer, killee, weapon) {
        return samp.callNative('SendDeathMessageToPlayer', 'iiii', playerid, killer, killee, weapon);
    }
    static GameTextForAll(string, time, style) {
        return samp.callNative('GameTextForAll', 'sii', string, time, style);
    }
    static GameTextForPlayer(playerid, string, time, style) {
        return samp.callNative('GameTextForPlayer', 'isii', playerid, string, time, style);
    }
    static SetTimer(funcname, interval, repeating) {
        return samp.callNative('SetTimer', 'sii', funcname, interval, repeating);
    }
    static KillTimer(timerid) {
        return samp.callNative('KillTimer', 'i', timerid);
    }
    static GetTickCount() {
        return samp.callNative('GetTickCount', '');
    }
    static GetMaxPlayers() {
        return samp.callNative('GetMaxPlayers', '');
    }
    static VectorSize(x, y, z) {
        return samp.callNativeFloat('VectorSize', 'fff', x, y, z);
    }
    static asin(value) {
        return samp.callNativeFloat('asin', 'f', value);
    }
    static acos(value) {
        return samp.callNativeFloat('acos', 'f', value);
    }
    static atan(value) {
        return samp.callNativeFloat('atan', 'f', value);
    }
    static atan2(y, x) {
        return samp.callNativeFloat('atan2', 'ff', y, x);
    }
    static GetPlayerPoolSize() {
        return samp.callNative('GetPlayerPoolSize', '');
    }
    static GetVehiclePoolSize() {
        return samp.callNative('GetVehiclePoolSize', '');
    }
    static GetActorPoolSize() {
        return samp.callNative('GetActorPoolSize', '');
    }
    static SHA256_PassHash(password, salt, ret_hash_len) {
        return samp.callNative('SHA256_PassHash', 'ssSi', password, salt, ret_hash_len);
    }
    static SetSVarInt(varname, int_value) {
        return samp.callNative('SetSVarInt', 'si', varname, int_value);
    }
    static GetSVarInt(varname) {
        return samp.callNative('GetSVarInt', 's', varname);
    }
    static SetSVarString(varname, string_value) {
        return samp.callNative('SetSVarString', 'ss', varname, string_value);
    }
    static GetSVarString(varname, len) {
        return samp.callNative('GetSVarString', 'sSi', varname, len);
    }
    static SetSVarFloat(varname, float_value) {
        return samp.callNative('SetSVarFloat', 'sf', varname, float_value);
    }
    static GetSVarFloat(varname) {
        return samp.callNativeFloat('GetSVarFloat', 's', varname);
    }
    static DeleteSVar(varname) {
        return samp.callNative('DeleteSVar', 's', varname);
    }
    static GetSVarsUpperIndex() {
        return samp.callNative('GetSVarsUpperIndex', '');
    }
    static GetSVarNameAtIndex(index, ret_len) {
        return samp.callNative('GetSVarNameAtIndex', 'iSi', index, ret_len);
    }
    static GetSVarType(varname) {
        return samp.callNative('GetSVarType', 's', varname);
    }
    static SetGameModeText(string) {
        return samp.callNative('SetGameModeText', 's', string);
    }
    static SetTeamCount(count) {
        return samp.callNative('SetTeamCount', 'i', count);
    }
    static AddPlayerClass(modelid, spawn_x, spawn_y, spawn_z, z_angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo) {
        return samp.callNative('AddPlayerClass', 'iffffiiiiii', modelid, spawn_x, spawn_y, spawn_z, z_angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo);
    }
    static AddPlayerClassEx(teamid, modelid, spawn_x, spawn_y, spawn_z, z_angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo) {
        return samp.callNative('AddPlayerClassEx', 'iiffffiiiiii', teamid, modelid, spawn_x, spawn_y, spawn_z, z_angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo);
    }
    static AddStaticVehicle(modelid, spawn_x, spawn_y, spawn_z, z_angle, color1, color2) {
        return samp.callNative('AddStaticVehicle', 'iffffii', modelid, spawn_x, spawn_y, spawn_z, z_angle, color1, color2);
    }
    static AddStaticVehicleEx(modelid, spawn_x, spawn_y, spawn_z, z_angle, color1, color2, respawn_delay, addsiren) {
        return samp.callNative('AddStaticVehicleEx', 'iffffiiii', modelid, spawn_x, spawn_y, spawn_z, z_angle, color1, color2, respawn_delay, addsiren);
    }
    static AddStaticPickup(model, type, X, Y, Z, virtualworld) {
        return samp.callNative('AddStaticPickup', 'iifffi', model, type, X, Y, Z, virtualworld);
    }
    static CreatePickup(model, type, X, Y, Z, virtualworld) {
        return samp.callNative('CreatePickup', 'iifffi', model, type, X, Y, Z, virtualworld);
    }
    static DestroyPickup(pickup) {
        return samp.callNative('DestroyPickup', 'i', pickup);
    }
    static ShowNameTags(show) {
        return samp.callNative('ShowNameTags', 'i', show);
    }
    static ShowPlayerMarkers(mode) {
        return samp.callNative('ShowPlayerMarkers', 'i', mode);
    }
    static GameModeExit() {
        return samp.callNative('GameModeExit', '');
    }
    static SetWorldTime(hour) {
        return samp.callNative('SetWorldTime', 'i', hour);
    }
    static GetWeaponName(weaponid, len) {
        return samp.callNative('GetWeaponName', 'iSi', weaponid, len);
    }
    static EnableTirePopping(enable) {
        return samp.callNative('EnableTirePopping', 'i', enable);
    }
    static EnableVehicleFriendlyFire() {
        return samp.callNative('EnableVehicleFriendlyFire', '');
    }
    static AllowInteriorWeapons(allow) {
        return samp.callNative('AllowInteriorWeapons', 'i', allow);
    }
    static SetWeather(weatherid) {
        return samp.callNative('SetWeather', 'i', weatherid);
    }
    static GetGravity() {
        return samp.callNativeFloat('GetGravity', '');
    }
    static SetGravity(gravity) {
        return samp.callNative('SetGravity', 'f', gravity);
    }
    static AllowAdminTeleport(allow) {
        return samp.callNative('AllowAdminTeleport', 'i', allow);
    }
    static SetDeathDropAmount(amount) {
        return samp.callNative('SetDeathDropAmount', 'i', amount);
    }
    static CreateExplosion(X, Y, Z, type, Radius) {
        return samp.callNative('CreateExplosion', 'fffif', X, Y, Z, type, Radius);
    }
    static EnableZoneNames(enable) {
        return samp.callNative('EnableZoneNames', 'i', enable);
    }
    static UsePlayerPedAnims() {
        return samp.callNative('UsePlayerPedAnims', '');
    }
    static DisableInteriorEnterExits() {
        return samp.callNative('DisableInteriorEnterExits', '');
    }
    static SetNameTagDrawDistance(distance) {
        return samp.callNative('SetNameTagDrawDistance', 'f', distance);
    }
    static DisableNameTagLOS() {
        return samp.callNative('DisableNameTagLOS', '');
    }
    static LimitGlobalChatRadius(chat_radius) {
        return samp.callNative('LimitGlobalChatRadius', 'f', chat_radius);
    }
    static LimitPlayerMarkerRadius(marker_radius) {
        return samp.callNative('LimitPlayerMarkerRadius', 'f', marker_radius);
    }
    static ConnectNPC(name, script) {
        return samp.callNative('ConnectNPC', 'ss', name, script);
    }
    static IsPlayerNPC(playerid) {
        return samp.callNative('IsPlayerNPC', 'i', playerid);
    }
    static IsPlayerAdmin(playerid) {
        return samp.callNative('IsPlayerAdmin', 'i', playerid);
    }
    static Kick(playerid) {
        return samp.callNative('Kick', 'i', playerid);
    }
    static Ban(playerid) {
        return samp.callNative('Ban', 'i', playerid);
    }
    static BanEx(playerid, reason) {
        return samp.callNative('BanEx', 'is', playerid, reason);
    }
    static SendRconCommand(command) {
        return samp.callNative('SendRconCommand', 's', command);
    }
    static GetPlayerNetworkStats(playerid, retstr_size) {
        return samp.callNative('GetPlayerNetworkStats', 'iSi', playerid, retstr_size);
    }
    static GetNetworkStats(retstr_size) {
        return samp.callNative('GetNetworkStats', 'Si', retstr_size);
    }
    static GetPlayerVersion(playerid, len) {
        return samp.callNative('GetPlayerVersion', 'iSi', playerid, len);
    }
    static BlockIpAddress(ip_address, timems) {
        return samp.callNative('BlockIpAddress', 'si', ip_address, timems);
    }
    static UnBlockIpAddress(ip_address) {
        return samp.callNative('UnBlockIpAddress', 's', ip_address);
    }
    static GetServerVarAsString(varname, len) {
        return samp.callNative('GetServerVarAsString', 'sSi', varname, len);
    }
    static GetServerVarAsInt(varname) {
        return samp.callNative('GetServerVarAsInt', 's', varname);
    }
    static GetServerVarAsBool(varname) {
        return samp.callNative('GetServerVarAsBool', 's', varname);
    }
    static GetConsoleVarAsString(varname, len) {
        return samp.callNative('GetConsoleVarAsString', 'sSi', varname, len);
    }
    static GetConsoleVarAsInt(varname) {
        return samp.callNative('GetConsoleVarAsInt', 's', varname);
    }
    static GetConsoleVarAsBool(varname) {
        return samp.callNative('GetConsoleVarAsBool', 's', varname);
    }
    static GetServerTickRate() {
        return samp.callNative('GetServerTickRate', '');
    }
    static NetStats_GetConnectedTime(playerid) {
        return samp.callNative('NetStats_GetConnectedTime', 'i', playerid);
    }
    static NetStats_MessagesReceived(playerid) {
        return samp.callNative('NetStats_MessagesReceived', 'i', playerid);
    }
    static NetStats_BytesReceived(playerid) {
        return samp.callNative('NetStats_BytesReceived', 'i', playerid);
    }
    static NetStats_MessagesSent(playerid) {
        return samp.callNative('NetStats_MessagesSent', 'i', playerid);
    }
    static NetStats_BytesSent(playerid) {
        return samp.callNative('NetStats_BytesSent', 'i', playerid);
    }
    static NetStats_MessagesRecvPerSecond(playerid) {
        return samp.callNative('NetStats_MessagesRecvPerSecond', 'i', playerid);
    }
    static NetStats_PacketLossPercent(playerid) {
        return samp.callNativeFloat('NetStats_PacketLossPercent', 'i', playerid);
    }
    static NetStats_ConnectionStatus(playerid) {
        return samp.callNative('NetStats_ConnectionStatus', 'i', playerid);
    }
    static NetStats_GetIpPort(playerid, ip_port_len) {
        return samp.callNative('NetStats_GetIpPort', 'iSi', playerid, ip_port_len);
    }
    static CreateMenu(title, columns, x, y, col1width, col2width) {
        return samp.callNative('CreateMenu', 'siffff', title, columns, x, y, col1width, col2width);
    }
    static DestroyMenu(menuid) {
        return samp.callNative('DestroyMenu', 'i', menuid);
    }
    static AddMenuItem(menuid, column, menutext) {
        return samp.callNative('AddMenuItem', 'iis', menuid, column, menutext);
    }
    static SetMenuColumnHeader(menuid, column, columnheader) {
        return samp.callNative('SetMenuColumnHeader', 'iis', menuid, column, columnheader);
    }
    static ShowMenuForPlayer(menuid, playerid) {
        return samp.callNative('ShowMenuForPlayer', 'ii', menuid, playerid);
    }
    static HideMenuForPlayer(menuid, playerid) {
        return samp.callNative('HideMenuForPlayer', 'ii', menuid, playerid);
    }
    static IsValidMenu(menuid) {
        return samp.callNative('IsValidMenu', 'i', menuid);
    }
    static DisableMenu(menuid) {
        return samp.callNative('DisableMenu', 'i', menuid);
    }
    static DisableMenuRow(menuid, row) {
        return samp.callNative('DisableMenuRow', 'ii', menuid, row);
    }
    static GetPlayerMenu(playerid) {
        return samp.callNative('GetPlayerMenu', 'i', playerid);
    }
    static TextDrawCreate(x, y, text) {
        return samp.callNative('TextDrawCreate', 'ffs', x, y, text);
    }
    static TextDrawDestroy(text) {
        return samp.callNative('TextDrawDestroy', 'i', text);
    }
    static TextDrawLetterSize(text, x, y) {
        return samp.callNative('TextDrawLetterSize', 'iff', text, x, y);
    }
    static TextDrawTextSize(text, x, y) {
        return samp.callNative('TextDrawTextSize', 'iff', text, x, y);
    }
    static TextDrawAlignment(text, alignment) {
        return samp.callNative('TextDrawAlignment', 'ii', text, alignment);
    }
    static TextDrawColor(text, color) {
        return samp.callNative('TextDrawColor', 'ii', text, rgba_1.rgba(color));
    }
    static TextDrawUseBox(text, use) {
        return samp.callNative('TextDrawUseBox', 'ii', text, use);
    }
    static TextDrawBoxColor(text, color) {
        return samp.callNative('TextDrawBoxColor', 'ii', text, rgba_1.rgba(color));
    }
    static TextDrawSetShadow(text, size) {
        return samp.callNative('TextDrawSetShadow', 'ii', text, size);
    }
    static TextDrawSetOutline(text, size) {
        return samp.callNative('TextDrawSetOutline', 'ii', text, size);
    }
    static TextDrawBackgroundColor(text, color) {
        return samp.callNative('TextDrawBackgroundColor', 'ii', text, rgba_1.rgba(color));
    }
    static TextDrawFont(text, font) {
        return samp.callNative('TextDrawFont', 'ii', text, font);
    }
    static TextDrawSetProportional(text, set) {
        return samp.callNative('TextDrawSetProportional', 'ii', text, set);
    }
    static TextDrawSetSelectable(text, set) {
        return samp.callNative('TextDrawSetSelectable', 'ii', text, set);
    }
    static TextDrawShowForPlayer(playerid, text) {
        return samp.callNative('TextDrawShowForPlayer', 'ii', playerid, text);
    }
    static TextDrawHideForPlayer(playerid, text) {
        return samp.callNative('TextDrawHideForPlayer', 'ii', playerid, text);
    }
    static TextDrawShowForAll(text) {
        return samp.callNative('TextDrawShowForAll', 'i', text);
    }
    static TextDrawHideForAll(text) {
        return samp.callNative('TextDrawHideForAll', 'i', text);
    }
    static TextDrawSetString(text, string) {
        return samp.callNative('TextDrawSetString', 'is', text, string);
    }
    static TextDrawSetPreviewModel(text, modelindex) {
        return samp.callNative('TextDrawSetPreviewModel', 'ii', text, modelindex);
    }
    static TextDrawSetPreviewRot(text, fRotX, fRotY, fRotZ, fZoom) {
        return samp.callNative('TextDrawSetPreviewRot', 'iffff', text, fRotX, fRotY, fRotZ, fZoom);
    }
    static TextDrawSetPreviewVehCol(text, color1, color2) {
        return samp.callNative('TextDrawSetPreviewVehCol', 'iii', text, color1, color2);
    }
    static GangZoneCreate(minx, miny, maxx, maxy) {
        return samp.callNative('GangZoneCreate', 'ffff', minx, miny, maxx, maxy);
    }
    static GangZoneDestroy(zone) {
        return samp.callNative('GangZoneDestroy', 'i', zone);
    }
    static GangZoneShowForPlayer(playerid, zone, color) {
        return samp.callNative('GangZoneShowForPlayer', 'iii', playerid, zone, rgba_1.rgba(color));
    }
    static GangZoneShowForAll(zone, color) {
        return samp.callNative('GangZoneShowForAll', 'ii', zone, rgba_1.rgba(color));
    }
    static GangZoneHideForPlayer(playerid, zone) {
        return samp.callNative('GangZoneHideForPlayer', 'ii', playerid, zone);
    }
    static GangZoneHideForAll(zone) {
        return samp.callNative('GangZoneHideForAll', 'i', zone);
    }
    static GangZoneFlashForPlayer(playerid, zone, flashcolor) {
        return samp.callNative('GangZoneFlashForPlayer', 'iii', playerid, zone, rgba_1.rgba(flashcolor));
    }
    static GangZoneFlashForAll(zone, flashcolor) {
        return samp.callNative('GangZoneFlashForAll', 'ii', zone, rgba_1.rgba(flashcolor));
    }
    static GangZoneStopFlashForPlayer(playerid, zone) {
        return samp.callNative('GangZoneStopFlashForPlayer', 'ii', playerid, zone);
    }
    static GangZoneStopFlashForAll(zone) {
        return samp.callNative('GangZoneStopFlashForAll', 'i', zone);
    }
    static Create3DTextLabel(text, color, X, Y, Z, DrawDistance, virtualworld, testLOS) {
        return samp.callNative('Create3DTextLabel', 'siffffii', text, rgba_1.rgba(color), X, Y, Z, DrawDistance, virtualworld, testLOS);
    }
    static Delete3DTextLabel(id) {
        return samp.callNative('Delete3DTextLabel', 'i', id);
    }
    static Attach3DTextLabelToPlayer(id, playerid, OffsetX, OffsetY, OffsetZ) {
        return samp.callNative('Attach3DTextLabelToPlayer', 'iifff', id, playerid, OffsetX, OffsetY, OffsetZ);
    }
    static Attach3DTextLabelToVehicle(id, vehicleid, OffsetX, OffsetY, OffsetZ) {
        return samp.callNative('Attach3DTextLabelToVehicle', 'iifff', id, vehicleid, OffsetX, OffsetY, OffsetZ);
    }
    static Update3DTextLabelText(id, color, text) {
        return samp.callNative('Update3DTextLabelText', 'iis', id, rgba_1.rgba(color), text);
    }
    static CreatePlayer3DTextLabel(playerid, text, color, X, Y, Z, DrawDistance, attachedplayer, attachedvehicle, testLOS) {
        return samp.callNative('CreatePlayer3DTextLabel', 'isiffffiii', playerid, text, rgba_1.rgba(color), X, Y, Z, DrawDistance, attachedplayer, attachedvehicle, testLOS);
    }
    static DeletePlayer3DTextLabel(playerid, id) {
        return samp.callNative('DeletePlayer3DTextLabel', 'ii', playerid, id);
    }
    static UpdatePlayer3DTextLabelText(playerid, id, color, text) {
        return samp.callNative('UpdatePlayer3DTextLabelText', 'iiis', playerid, id, rgba_1.rgba(color), text);
    }
    static ShowPlayerDialog(playerid, dialogid, style, caption, info, button1, button2) {
        return samp.callNative('ShowPlayerDialog', 'iiissss', playerid, dialogid, style, caption, info, button1, button2);
    }
    static gpci(playerid, maxlen) {
        return samp.callNative('gpci', 'iSi', playerid, maxlen);
    }
    static CreateActor(modelid, X, Y, Z, Rotation) {
        return samp.callNative('CreateActor', 'iffff', modelid, X, Y, Z, Rotation);
    }
    static DestroyActor(actorid) {
        return samp.callNative('DestroyActor', 'i', actorid);
    }
    static IsActorStreamedIn(actorid, forplayerid) {
        return samp.callNative('IsActorStreamedIn', 'ii', actorid, forplayerid);
    }
    static SetActorVirtualWorld(actorid, vworld) {
        return samp.callNative('SetActorVirtualWorld', 'ii', actorid, vworld);
    }
    static GetActorVirtualWorld(actorid) {
        return samp.callNative('GetActorVirtualWorld', 'i', actorid);
    }
    static ApplyActorAnimation(actorid, animlib, animname, fDelta, loop, lockx, locky, freeze, time) {
        return samp.callNative('ApplyActorAnimation', 'issfiiiii', actorid, animlib, animname, fDelta, loop, lockx, locky, freeze, time);
    }
    static ClearActorAnimations(actorid) {
        return samp.callNative('ClearActorAnimations', 'i', actorid);
    }
    static SetActorPos(actorid, X, Y, Z) {
        return samp.callNative('SetActorPos', 'ifff', actorid, X, Y, Z);
    }
    static GetActorPos(actorid) {
        return samp.callNative('GetActorPos', 'iFFF', actorid);
    }
    static SetActorFacingAngle(actorid, ang) {
        return samp.callNative('SetActorFacingAngle', 'if', actorid, ang);
    }
    static GetActorFacingAngle(actorid) {
        return samp.callNative('GetActorFacingAngle', 'iF', actorid);
    }
    static SetActorHealth(actorid, health) {
        return samp.callNative('SetActorHealth', 'if', actorid, health);
    }
    static GetActorHealth(actorid) {
        return samp.callNative('GetActorHealth', 'iF', actorid);
    }
    static SetActorInvulnerable(actorid, invulnerable) {
        return samp.callNative('SetActorInvulnerable', 'ii', actorid, invulnerable);
    }
    static IsActorInvulnerable(actorid) {
        return samp.callNative('IsActorInvulnerable', 'i', actorid);
    }
    static IsValidActor(actorid) {
        return samp.callNative('IsValidActor', 'i', actorid);
    }
    static HTTP(index, type, url, data, callback) {
        return samp.callNative('HTTP', 'iisss', index, type, url, data, callback);
    }
    static CreateObject(modelid, X, Y, Z, rX, rY, rZ, DrawDistance) {
        return samp.callNative('CreateObject', 'ifffffff', modelid, X, Y, Z, rX, rY, rZ, DrawDistance);
    }
    static AttachObjectToVehicle(objectid, vehicleid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ) {
        return samp.callNative('AttachObjectToVehicle', 'iiffffff', objectid, vehicleid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ);
    }
    static AttachObjectToObject(objectid, attachtoid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ, SyncRotation) {
        return samp.callNative('AttachObjectToObject', 'iiffffffi', objectid, attachtoid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ, SyncRotation);
    }
    static AttachObjectToPlayer(objectid, playerid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ) {
        return samp.callNative('AttachObjectToPlayer', 'iiffffff', objectid, playerid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ);
    }
    static SetObjectPos(objectid, X, Y, Z) {
        return samp.callNative('SetObjectPos', 'ifff', objectid, X, Y, Z);
    }
    static GetObjectPos(objectid) {
        return samp.callNative('GetObjectPos', 'iFFF', objectid);
    }
    static SetObjectRot(objectid, RotX, RotY, RotZ) {
        return samp.callNative('SetObjectRot', 'ifff', objectid, RotX, RotY, RotZ);
    }
    static GetObjectRot(objectid) {
        return samp.callNative('GetObjectRot', 'iFFF', objectid);
    }
    static GetObjectModel(objectid) {
        return samp.callNative('GetObjectModel', 'i', objectid);
    }
    static SetObjectNoCameraCol(objectid) {
        return samp.callNative('SetObjectNoCameraCol', 'i', objectid);
    }
    static IsValidObject(objectid) {
        return samp.callNative('IsValidObject', 'i', objectid);
    }
    static DestroyObject(objectid) {
        return samp.callNative('DestroyObject', 'i', objectid);
    }
    static MoveObject(objectid, X, Y, Z, Speed, RotX, RotY, RotZ) {
        return samp.callNative('MoveObject', 'ifffffff', objectid, X, Y, Z, Speed, RotX, RotY, RotZ);
    }
    static StopObject(objectid) {
        return samp.callNative('StopObject', 'i', objectid);
    }
    static IsObjectMoving(objectid) {
        return samp.callNative('IsObjectMoving', 'i', objectid);
    }
    static EditObject(playerid, objectid) {
        return samp.callNative('EditObject', 'ii', playerid, objectid);
    }
    static EditPlayerObject(playerid, objectid) {
        return samp.callNative('EditPlayerObject', 'ii', playerid, objectid);
    }
    static SelectObject(playerid) {
        return samp.callNative('SelectObject', 'i', playerid);
    }
    static CancelEdit(playerid) {
        return samp.callNative('CancelEdit', 'i', playerid);
    }
    static CreatePlayerObject(playerid, modelid, X, Y, Z, rX, rY, rZ, DrawDistance) {
        return samp.callNative('CreatePlayerObject', 'iifffffff', playerid, modelid, X, Y, Z, rX, rY, rZ, DrawDistance);
    }
    static AttachPlayerObjectToVehicle(playerid, objectid, vehicleid, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, RotZ) {
        return samp.callNative('AttachPlayerObjectToVehicle', 'iiiffffff', playerid, objectid, vehicleid, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, RotZ);
    }
    static SetPlayerObjectPos(playerid, objectid, X, Y, Z) {
        return samp.callNative('SetPlayerObjectPos', 'iifff', playerid, objectid, X, Y, Z);
    }
    static GetPlayerObjectPos(playerid, objectid) {
        return samp.callNative('GetPlayerObjectPos', 'iiFFF', playerid, objectid);
    }
    static SetPlayerObjectRot(playerid, objectid, RotX, RotY, RotZ) {
        return samp.callNative('SetPlayerObjectRot', 'iifff', playerid, objectid, RotX, RotY, RotZ);
    }
    static GetPlayerObjectRot(playerid, objectid) {
        return samp.callNative('GetPlayerObjectRot', 'iiFFF', playerid, objectid);
    }
    static GetPlayerObjectModel(playerid, objectid) {
        return samp.callNative('GetPlayerObjectModel', 'ii', playerid, objectid);
    }
    static SetPlayerObjectNoCameraCol(playerid, objectid) {
        return samp.callNative('SetPlayerObjectNoCameraCol', 'ii', playerid, objectid);
    }
    static IsValidPlayerObject(playerid, objectid) {
        return samp.callNative('IsValidPlayerObject', 'ii', playerid, objectid);
    }
    static DestroyPlayerObject(playerid, objectid) {
        return samp.callNative('DestroyPlayerObject', 'ii', playerid, objectid);
    }
    static MovePlayerObject(playerid, objectid, X, Y, Z, Speed, RotX, RotY, RotZ) {
        return samp.callNative('MovePlayerObject', 'iifffffff', playerid, objectid, X, Y, Z, Speed, RotX, RotY, RotZ);
    }
    static StopPlayerObject(playerid, objectid) {
        return samp.callNative('StopPlayerObject', 'ii', playerid, objectid);
    }
    static IsPlayerObjectMoving(playerid, objectid) {
        return samp.callNative('IsPlayerObjectMoving', 'ii', playerid, objectid);
    }
    static AttachPlayerObjectToPlayer(objectplayer, objectid, attachplayer, OffsetX, OffsetY, OffsetZ, rX, rY, rZ) {
        return samp.callNative('AttachPlayerObjectToPlayer', 'iiiffffff', objectplayer, objectid, attachplayer, OffsetX, OffsetY, OffsetZ, rX, rY, rZ);
    }
    static SetObjectMaterial(objectid, materialindex, modelid, txdname, texturename, materialcolor) {
        return samp.callNative('SetObjectMaterial', 'iiissi', objectid, materialindex, modelid, txdname, texturename, rgba_1.rgba(materialcolor));
    }
    static SetPlayerObjectMaterial(playerid, objectid, materialindex, modelid, txdname, texturename, materialcolor) {
        return samp.callNative('SetPlayerObjectMaterial', 'iiiissi', playerid, objectid, materialindex, modelid, txdname, texturename, rgba_1.rgba(materialcolor));
    }
    static SetObjectMaterialText(objectid, text, materialindex, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment) {
        return samp.callNative('SetObjectMaterialText', 'isiisiiiii', objectid, text, materialindex, materialsize, fontface, fontsize, bold, rgba_1.rgba(fontcolor), rgba_1.rgba(backcolor), textalignment);
    }
    static SetPlayerObjectMaterialText(playerid, objectid, text, materialindex, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment) {
        return samp.callNative('SetPlayerObjectMaterialText', 'iisiisiiiii', playerid, objectid, text, materialindex, materialsize, fontface, fontsize, bold, rgba_1.rgba(fontcolor), rgba_1.rgba(backcolor), textalignment);
    }
    static SetObjectsDefaultCameraCol(disable) {
        return samp.callNative('SetObjectsDefaultCameraCol', 'i', disable);
    }
    static SetSpawnInfo(playerid, team, skin, x, y, z, rotation, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo) {
        return samp.callNative('SetSpawnInfo', 'iiiffffiiiiii', playerid, team, skin, x, y, z, rotation, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo);
    }
    static SpawnPlayer(playerid) {
        return samp.callNative('SpawnPlayer', 'i', playerid);
    }
    static SetPlayerPos(playerid, x, y, z) {
        return samp.callNative('SetPlayerPos', 'ifff', playerid, x, y, z);
    }
    static SetPlayerPosFindZ(playerid, x, y, z) {
        return samp.callNative('SetPlayerPosFindZ', 'ifff', playerid, x, y, z);
    }
    static GetPlayerPos(playerid) {
        return samp.callNative('GetPlayerPos', 'iFFF', playerid);
    }
    static SetPlayerFacingAngle(playerid, ang) {
        return samp.callNative('SetPlayerFacingAngle', 'if', playerid, ang);
    }
    static GetPlayerFacingAngle(playerid) {
        return samp.callNative('GetPlayerFacingAngle', 'iF', playerid);
    }
    static IsPlayerInRangeOfPoint(playerid, range, x, y, z) {
        return samp.callNative('IsPlayerInRangeOfPoint', 'iffff', playerid, range, x, y, z);
    }
    static GetPlayerDistanceFromPoint(playerid, X, Y, Z) {
        return samp.callNativeFloat('GetPlayerDistanceFromPoint', 'ifff', playerid, X, Y, Z);
    }
    static IsPlayerStreamedIn(playerid, forplayerid) {
        return samp.callNative('IsPlayerStreamedIn', 'ii', playerid, forplayerid);
    }
    static SetPlayerInterior(playerid, interiorid) {
        return samp.callNative('SetPlayerInterior', 'ii', playerid, interiorid);
    }
    static GetPlayerInterior(playerid) {
        return samp.callNative('GetPlayerInterior', 'i', playerid);
    }
    static SetPlayerHealth(playerid, health) {
        return samp.callNative('SetPlayerHealth', 'if', playerid, health);
    }
    static GetPlayerHealth(playerid) {
        return samp.callNative('GetPlayerHealth', 'iF', playerid);
    }
    static SetPlayerArmour(playerid, armour) {
        return samp.callNative('SetPlayerArmour', 'if', playerid, armour);
    }
    static GetPlayerArmour(playerid) {
        return samp.callNative('GetPlayerArmour', 'iF', playerid);
    }
    static SetPlayerAmmo(playerid, weaponslot, ammo) {
        return samp.callNative('SetPlayerAmmo', 'iii', playerid, weaponslot, ammo);
    }
    static GetPlayerAmmo(playerid) {
        return samp.callNative('GetPlayerAmmo', 'i', playerid);
    }
    static GetPlayerWeaponState(playerid) {
        return samp.callNative('GetPlayerWeaponState', 'i', playerid);
    }
    static GetPlayerTargetPlayer(playerid) {
        return samp.callNative('GetPlayerTargetPlayer', 'i', playerid);
    }
    static GetPlayerTargetActor(playerid) {
        return samp.callNative('GetPlayerTargetActor', 'i', playerid);
    }
    static SetPlayerTeam(playerid, teamid) {
        return samp.callNative('SetPlayerTeam', 'ii', playerid, teamid);
    }
    static GetPlayerTeam(playerid) {
        return samp.callNative('GetPlayerTeam', 'i', playerid);
    }
    static SetPlayerScore(playerid, score) {
        return samp.callNative('SetPlayerScore', 'ii', playerid, score);
    }
    static GetPlayerScore(playerid) {
        return samp.callNative('GetPlayerScore', 'i', playerid);
    }
    static GetPlayerDrunkLevel(playerid) {
        return samp.callNative('GetPlayerDrunkLevel', 'i', playerid);
    }
    static SetPlayerDrunkLevel(playerid, level) {
        return samp.callNative('SetPlayerDrunkLevel', 'ii', playerid, level);
    }
    static SetPlayerColor(playerid, color) {
        return samp.callNative('SetPlayerColor', 'ii', playerid, rgba_1.rgba(color));
    }
    static GetPlayerColor(playerid) {
        return samp.callNative('GetPlayerColor', 'i', playerid);
    }
    static SetPlayerSkin(playerid, skinid) {
        return samp.callNative('SetPlayerSkin', 'ii', playerid, skinid);
    }
    static GetPlayerSkin(playerid) {
        return samp.callNative('GetPlayerSkin', 'i', playerid);
    }
    static GivePlayerWeapon(playerid, weaponid, ammo) {
        return samp.callNative('GivePlayerWeapon', 'iii', playerid, weaponid, ammo);
    }
    static ResetPlayerWeapons(playerid) {
        return samp.callNative('ResetPlayerWeapons', 'i', playerid);
    }
    static SetPlayerArmedWeapon(playerid, weaponid) {
        return samp.callNative('SetPlayerArmedWeapon', 'ii', playerid, weaponid);
    }
    static GetPlayerWeaponData(playerid, slot) {
        return samp.callNative('GetPlayerWeaponData', 'iiII', playerid, slot);
    }
    static GivePlayerMoney(playerid, money) {
        return samp.callNative('GivePlayerMoney', 'ii', playerid, money);
    }
    static ResetPlayerMoney(playerid) {
        return samp.callNative('ResetPlayerMoney', 'i', playerid);
    }
    static SetPlayerName(playerid, name) {
        return samp.callNative('SetPlayerName', 'is', playerid, name);
    }
    static GetPlayerMoney(playerid) {
        return samp.callNative('GetPlayerMoney', 'i', playerid);
    }
    static GetPlayerState(playerid) {
        return samp.callNative('GetPlayerState', 'i', playerid);
    }
    static GetPlayerIp(playerid, len) {
        return samp.callNative('GetPlayerIp', 'iSi', playerid, len);
    }
    static GetPlayerPing(playerid) {
        return samp.callNative('GetPlayerPing', 'i', playerid);
    }
    static GetPlayerWeapon(playerid) {
        return samp.callNative('GetPlayerWeapon', 'i', playerid);
    }
    static GetPlayerKeys(playerid) {
        return samp.callNative('GetPlayerKeys', 'iIII', playerid);
    }
    static GetPlayerName(playerid, len) {
        return samp.callNative('GetPlayerName', 'iSi', playerid, len);
    }
    static SetPlayerTime(playerid, hour, minute) {
        return samp.callNative('SetPlayerTime', 'iii', playerid, hour, minute);
    }
    static GetPlayerTime(playerid) {
        return samp.callNative('GetPlayerTime', 'iII', playerid);
    }
    static TogglePlayerClock(playerid, toggle) {
        return samp.callNative('TogglePlayerClock', 'ii', playerid, toggle);
    }
    static SetPlayerWeather(playerid, weather) {
        return samp.callNative('SetPlayerWeather', 'ii', playerid, weather);
    }
    static ForceClassSelection(playerid) {
        return samp.callNative('ForceClassSelection', 'i', playerid);
    }
    static SetPlayerWantedLevel(playerid, level) {
        return samp.callNative('SetPlayerWantedLevel', 'ii', playerid, level);
    }
    static GetPlayerWantedLevel(playerid) {
        return samp.callNative('GetPlayerWantedLevel', 'i', playerid);
    }
    static SetPlayerFightingStyle(playerid, style) {
        return samp.callNative('SetPlayerFightingStyle', 'ii', playerid, style);
    }
    static GetPlayerFightingStyle(playerid) {
        return samp.callNative('GetPlayerFightingStyle', 'i', playerid);
    }
    static SetPlayerVelocity(playerid, X, Y, Z) {
        return samp.callNative('SetPlayerVelocity', 'ifff', playerid, X, Y, Z);
    }
    static GetPlayerVelocity(playerid) {
        return samp.callNative('GetPlayerVelocity', 'iFFF', playerid);
    }
    static PlayCrimeReportForPlayer(playerid, suspectid, crime) {
        return samp.callNative('PlayCrimeReportForPlayer', 'iii', playerid, suspectid, crime);
    }
    static PlayAudioStreamForPlayer(playerid, url, posX, posY, posZ, distance, usepos) {
        return samp.callNative('PlayAudioStreamForPlayer', 'isffffi', playerid, url, posX, posY, posZ, distance, usepos);
    }
    static StopAudioStreamForPlayer(playerid) {
        return samp.callNative('StopAudioStreamForPlayer', 'i', playerid);
    }
    static SetPlayerShopName(playerid, shopname) {
        return samp.callNative('SetPlayerShopName', 'is', playerid, shopname);
    }
    static SetPlayerSkillLevel(playerid, skill, level) {
        return samp.callNative('SetPlayerSkillLevel', 'iii', playerid, skill, level);
    }
    static GetPlayerSurfingVehicleID(playerid) {
        return samp.callNative('GetPlayerSurfingVehicleID', 'i', playerid);
    }
    static GetPlayerSurfingObjectID(playerid) {
        return samp.callNative('GetPlayerSurfingObjectID', 'i', playerid);
    }
    static RemoveBuildingForPlayer(playerid, modelid, fX, fY, fZ, fRadius) {
        return samp.callNative('RemoveBuildingForPlayer', 'iiffff', playerid, modelid, fX, fY, fZ, fRadius);
    }
    static GetPlayerLastShotVectors(playerid) {
        return samp.callNative('GetPlayerLastShotVectors', 'iFFFFFF', playerid);
    }
    static SetPlayerAttachedObject(playerid, index, modelid, bone, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, fRotZ, fScaleX, fScaleY, fScaleZ, materialcolor1, materialcolor2) {
        return samp.callNative('SetPlayerAttachedObject', 'iiiifffffffffii', playerid, index, modelid, bone, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, fRotZ, fScaleX, fScaleY, fScaleZ, materialcolor1, materialcolor2);
    }
    static RemovePlayerAttachedObject(playerid, index) {
        return samp.callNative('RemovePlayerAttachedObject', 'ii', playerid, index);
    }
    static IsPlayerAttachedObjectSlotUsed(playerid, index) {
        return samp.callNative('IsPlayerAttachedObjectSlotUsed', 'ii', playerid, index);
    }
    static EditAttachedObject(playerid, index) {
        return samp.callNative('EditAttachedObject', 'ii', playerid, index);
    }
    static CreatePlayerTextDraw(playerid, x, y, text) {
        return samp.callNative('CreatePlayerTextDraw', 'iffs', playerid, x, y, text);
    }
    static PlayerTextDrawDestroy(playerid, text) {
        samp.callNative('PlayerTextDrawDestroy', 'ii', playerid, text);
    }
    static PlayerTextDrawLetterSize(playerid, text, x, y) {
        return samp.callNative('PlayerTextDrawLetterSize', 'iiff', playerid, text, x, y);
    }
    static PlayerTextDrawTextSize(playerid, text, x, y) {
        return samp.callNative('PlayerTextDrawTextSize', 'iiff', playerid, text, x, y);
    }
    static PlayerTextDrawAlignment(playerid, text, alignment) {
        return samp.callNative('PlayerTextDrawAlignment', 'iii', playerid, text, alignment);
    }
    static PlayerTextDrawColor(playerid, text, color) {
        return samp.callNative('PlayerTextDrawColor', 'iii', playerid, text, rgba_1.rgba(color));
    }
    static PlayerTextDrawUseBox(playerid, text, use) {
        return samp.callNative('PlayerTextDrawUseBox', 'iii', playerid, text, use);
    }
    static PlayerTextDrawBoxColor(playerid, text, color) {
        return samp.callNative('PlayerTextDrawBoxColor', 'iii', playerid, text, rgba_1.rgba(color));
    }
    static PlayerTextDrawSetShadow(playerid, text, size) {
        return samp.callNative('PlayerTextDrawSetShadow', 'iii', playerid, text, size);
    }
    static PlayerTextDrawSetOutline(playerid, text, size) {
        return samp.callNative('PlayerTextDrawSetOutline', 'iii', playerid, text, size);
    }
    static PlayerTextDrawBackgroundColor(playerid, text, color) {
        return samp.callNative('PlayerTextDrawBackgroundColor', 'iii', playerid, text, rgba_1.rgba(color));
    }
    static PlayerTextDrawFont(playerid, text, font) {
        return samp.callNative('PlayerTextDrawFont', 'iii', playerid, text, font);
    }
    static PlayerTextDrawSetProportional(playerid, text, set) {
        return samp.callNative('PlayerTextDrawSetProportional', 'iii', playerid, text, set);
    }
    static PlayerTextDrawSetSelectable(playerid, text, set) {
        return samp.callNative('PlayerTextDrawSetSelectable', 'iii', playerid, text, set);
    }
    static PlayerTextDrawShow(playerid, text) {
        return samp.callNative('PlayerTextDrawShow', 'ii', playerid, text);
    }
    static PlayerTextDrawHide(playerid, text) {
        return samp.callNative('PlayerTextDrawHide', 'ii', playerid, text);
    }
    static PlayerTextDrawSetString(playerid, text, string) {
        return samp.callNative('PlayerTextDrawSetString', 'iis', playerid, text, string);
    }
    static PlayerTextDrawSetPreviewModel(playerid, text, modelindex) {
        return samp.callNative('PlayerTextDrawSetPreviewModel', 'iii', playerid, text, modelindex);
    }
    static PlayerTextDrawSetPreviewRot(playerid, text, fRotX, fRotY, fRotZ, fZoom) {
        return samp.callNative('PlayerTextDrawSetPreviewRot', 'iiffff', playerid, text, fRotX, fRotY, fRotZ, fZoom);
    }
    static PlayerTextDrawSetPreviewVehCol(playerid, text, color1, color2) {
        return samp.callNative('PlayerTextDrawSetPreviewVehCol', 'iiii', playerid, text, color1, color2);
    }
    static SetPVarInt(playerid, varname, int_value) {
        return samp.callNative('SetPVarInt', 'isi', playerid, varname, int_value);
    }
    static GetPVarInt(playerid, varname) {
        return samp.callNative('GetPVarInt', 'is', playerid, varname);
    }
    static SetPVarString(playerid, varname, string_value) {
        return samp.callNative('SetPVarString', 'iss', playerid, varname, string_value);
    }
    static GetPVarString(playerid, varname, len) {
        return samp.callNative('GetPVarString', 'isSi', playerid, varname, len);
    }
    static SetPVarFloat(playerid, varname, float_value) {
        return samp.callNative('SetPVarFloat', 'isf', playerid, varname, float_value);
    }
    static GetPVarFloat(playerid, varname) {
        return samp.callNativeFloat('GetPVarFloat', 'is', playerid, varname);
    }
    static DeletePVar(playerid, varname) {
        return samp.callNative('DeletePVar', 'is', playerid, varname);
    }
    static GetPVarsUpperIndex(playerid) {
        return samp.callNative('GetPVarsUpperIndex', 'i', playerid);
    }
    static GetPVarNameAtIndex(playerid, index, ret_len) {
        return samp.callNative('GetPVarNameAtIndex', 'iiSi', playerid, index, ret_len);
    }
    static GetPVarType(playerid, varname) {
        return samp.callNative('GetPVarType', 'is', playerid, varname);
    }
    static SetPlayerChatBubble(playerid, text, color, drawdistance, expiretime) {
        return samp.callNative('SetPlayerChatBubble', 'isifi', playerid, text, rgba_1.rgba(color), drawdistance, expiretime);
    }
    static PutPlayerInVehicle(playerid, vehicleid, seatid) {
        return samp.callNative('PutPlayerInVehicle', 'iii', playerid, vehicleid, seatid);
    }
    static GetPlayerVehicleID(playerid) {
        return samp.callNative('GetPlayerVehicleID', 'i', playerid);
    }
    static GetPlayerVehicleSeat(playerid) {
        return samp.callNative('GetPlayerVehicleSeat', 'i', playerid);
    }
    static RemovePlayerFromVehicle(playerid) {
        return samp.callNative('RemovePlayerFromVehicle', 'i', playerid);
    }
    static TogglePlayerControllable(playerid, toggle) {
        return samp.callNative('TogglePlayerControllable', 'ii', playerid, toggle);
    }
    static PlayerPlaySound(playerid, soundid, x, y, z) {
        return samp.callNative('PlayerPlaySound', 'iifff', playerid, soundid, x, y, z);
    }
    static ApplyAnimation(playerid, animlib, animname, fDelta, loop, lockx, locky, freeze, time, forcesync) {
        return samp.callNative('ApplyAnimation', 'issfiiiiii', playerid, animlib, animname, fDelta, loop, lockx, locky, freeze, time, forcesync);
    }
    static ClearAnimations(playerid, forcesync) {
        return samp.callNative('ClearAnimations', 'ii', playerid, forcesync);
    }
    static GetPlayerAnimationIndex(playerid) {
        return samp.callNative('GetPlayerAnimationIndex', 'i', playerid);
    }
    static GetAnimationName(index, len1, len2) {
        return samp.callNative('GetAnimationName', 'iSiSi', index, len1, len2);
    }
    static GetPlayerSpecialAction(playerid) {
        return samp.callNative('GetPlayerSpecialAction', 'i', playerid);
    }
    static SetPlayerSpecialAction(playerid, actionid) {
        return samp.callNative('SetPlayerSpecialAction', 'ii', playerid, actionid);
    }
    static DisableRemoteVehicleCollisions(playerid, disable) {
        return samp.callNative('DisableRemoteVehicleCollisions', 'ii', playerid, disable);
    }
    static SetPlayerCheckpoint(playerid, x, y, z, size) {
        return samp.callNative('SetPlayerCheckpoint', 'iffff', playerid, x, y, z, size);
    }
    static DisablePlayerCheckpoint(playerid) {
        return samp.callNative('DisablePlayerCheckpoint', 'i', playerid);
    }
    static SetPlayerRaceCheckpoint(playerid, type, x, y, z, nextx, nexty, nextz, size) {
        return samp.callNative('SetPlayerRaceCheckpoint', 'iifffffff', playerid, type, x, y, z, nextx, nexty, nextz, size);
    }
    static DisablePlayerRaceCheckpoint(playerid) {
        return samp.callNative('DisablePlayerRaceCheckpoint', 'i', playerid);
    }
    static SetPlayerWorldBounds(playerid, x_max, x_min, y_max, y_min) {
        return samp.callNative('SetPlayerWorldBounds', 'iffff', playerid, x_max, x_min, y_max, y_min);
    }
    static SetPlayerMarkerForPlayer(playerid, showplayerid, color) {
        return samp.callNative('SetPlayerMarkerForPlayer', 'iii', playerid, showplayerid, rgba_1.rgba(color));
    }
    static ShowPlayerNameTagForPlayer(playerid, showplayerid, show) {
        return samp.callNative('ShowPlayerNameTagForPlayer', 'iii', playerid, showplayerid, show);
    }
    static SetPlayerMapIcon(playerid, iconid, x, y, z, markertype, color, style) {
        return samp.callNative('SetPlayerMapIcon', 'iifffiii', playerid, iconid, x, y, z, markertype, rgba_1.rgba(color), style);
    }
    static RemovePlayerMapIcon(playerid, iconid) {
        return samp.callNative('RemovePlayerMapIcon', 'ii', playerid, iconid);
    }
    static AllowPlayerTeleport(playerid, allow) {
        return samp.callNative('AllowPlayerTeleport', 'ii', playerid, allow);
    }
    static SetPlayerCameraPos(playerid, x, y, z) {
        return samp.callNative('SetPlayerCameraPos', 'ifff', playerid, x, y, z);
    }
    static SetPlayerCameraLookAt(playerid, x, y, z, cut) {
        return samp.callNative('SetPlayerCameraLookAt', 'ifffi', playerid, x, y, z, cut);
    }
    static SetCameraBehindPlayer(playerid) {
        return samp.callNative('SetCameraBehindPlayer', 'i', playerid);
    }
    static GetPlayerCameraPos(playerid) {
        return samp.callNative('GetPlayerCameraPos', 'iFFF', playerid);
    }
    static GetPlayerCameraFrontVector(playerid) {
        return samp.callNative('GetPlayerCameraFrontVector', 'iFFF', playerid);
    }
    static GetPlayerCameraMode(playerid) {
        return samp.callNative('GetPlayerCameraMode', 'i', playerid);
    }
    static EnablePlayerCameraTarget(playerid, enable) {
        return samp.callNative('EnablePlayerCameraTarget', 'ii', playerid, enable);
    }
    static GetPlayerCameraTargetObject(playerid) {
        return samp.callNative('GetPlayerCameraTargetObject', 'i', playerid);
    }
    static GetPlayerCameraTargetVehicle(playerid) {
        return samp.callNative('GetPlayerCameraTargetVehicle', 'i', playerid);
    }
    static GetPlayerCameraTargetPlayer(playerid) {
        return samp.callNative('GetPlayerCameraTargetPlayer', 'i', playerid);
    }
    static GetPlayerCameraTargetActor(playerid) {
        return samp.callNative('GetPlayerCameraTargetActor', 'i', playerid);
    }
    static GetPlayerCameraAspectRatio(playerid) {
        return samp.callNativeFloat('GetPlayerCameraAspectRatio', 'i', playerid);
    }
    static GetPlayerCameraZoom(playerid) {
        return samp.callNativeFloat('GetPlayerCameraZoom', 'i', playerid);
    }
    static AttachCameraToObject(playerid, objectid) {
        return samp.callNative('AttachCameraToObject', 'ii', playerid, objectid);
    }
    static AttachCameraToPlayerObject(playerid, playerobjectid) {
        return samp.callNative('AttachCameraToPlayerObject', 'ii', playerid, playerobjectid);
    }
    static InterpolateCameraPos(playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut) {
        return samp.callNative('InterpolateCameraPos', 'iffffffii', playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut);
    }
    static InterpolateCameraLookAt(playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut) {
        return samp.callNative('InterpolateCameraLookAt', 'iffffffii', playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut);
    }
    static IsPlayerConnected(playerid) {
        return samp.callNative('IsPlayerConnected', 'i', playerid);
    }
    static IsPlayerInVehicle(playerid, vehicleid) {
        return samp.callNative('IsPlayerInVehicle', 'ii', playerid, vehicleid);
    }
    static IsPlayerInAnyVehicle(playerid) {
        return samp.callNative('IsPlayerInAnyVehicle', 'i', playerid);
    }
    static IsPlayerInCheckpoint(playerid) {
        return samp.callNative('IsPlayerInCheckpoint', 'i', playerid);
    }
    static IsPlayerInRaceCheckpoint(playerid) {
        return samp.callNative('IsPlayerInRaceCheckpoint', 'i', playerid);
    }
    static SetPlayerVirtualWorld(playerid, worldid) {
        return samp.callNative('SetPlayerVirtualWorld', 'ii', playerid, worldid);
    }
    static GetPlayerVirtualWorld(playerid) {
        return samp.callNative('GetPlayerVirtualWorld', 'i', playerid);
    }
    static EnableStuntBonusForPlayer(playerid, enable) {
        return samp.callNative('EnableStuntBonusForPlayer', 'ii', playerid, enable);
    }
    static EnableStuntBonusForAll(enable) {
        return samp.callNative('EnableStuntBonusForAll', 'i', enable);
    }
    static TogglePlayerSpectating(playerid, toggle) {
        return samp.callNative('TogglePlayerSpectating', 'ii', playerid, toggle);
    }
    static PlayerSpectatePlayer(playerid, targetplayerid, mode) {
        return samp.callNative('PlayerSpectatePlayer', 'iii', playerid, targetplayerid, mode);
    }
    static PlayerSpectateVehicle(playerid, targetvehicleid, mode) {
        return samp.callNative('PlayerSpectateVehicle', 'iii', playerid, targetvehicleid, mode);
    }
    static StartRecordingPlayerData(playerid, recordtype, recordname) {
        return samp.callNative('StartRecordingPlayerData', 'iis', playerid, recordtype, recordname);
    }
    static StopRecordingPlayerData(playerid) {
        return samp.callNative('StopRecordingPlayerData', 'i', playerid);
    }
    static SelectTextDraw(playerid, hovercolor) {
        return samp.callNative('SelectTextDraw', 'ii', playerid, rgba_1.rgba(hovercolor));
    }
    static CancelSelectTextDraw(playerid) {
        return samp.callNative('CancelSelectTextDraw', 'i', playerid);
    }
    static CreateExplosionForPlayer(playerid, X, Y, Z, type, Radius) {
        return samp.callNative('CreateExplosionForPlayer', 'ifffif', playerid, X, Y, Z, type, Radius);
    }
    static SendClientCheck(playerid, type, memAddr, memOffset, byteCount) {
        return samp.callNative('SendClientCheck', 'iiiii', playerid, type, memAddr, memOffset, byteCount);
    }
    static db_open(name) {
        return samp.callNative('db_open', 's', name);
    }
    static db_close(db) {
        return samp.callNative('db_close', 'i', db);
    }
    static db_query(db, query) {
        return samp.callNative('db_query', 'is', db, query);
    }
    static db_free_result(dbresult) {
        return samp.callNative('db_free_result', 'i', dbresult);
    }
    static db_num_rows(dbresult) {
        return samp.callNative('db_num_rows', 'i', dbresult);
    }
    static db_next_row(dbresult) {
        return samp.callNative('db_next_row', 'i', dbresult);
    }
    static db_num_fields(dbresult) {
        return samp.callNative('db_num_fields', 'i', dbresult);
    }
    static db_field_name(dbresult, field, maxlength) {
        return samp.callNative('db_field_name', 'iiSi', dbresult, field, maxlength);
    }
    static db_get_field(dbresult, field, maxlength) {
        return samp.callNative('db_get_field', 'iiSi', dbresult, field, maxlength);
    }
    static db_get_field_int(result, field) {
        return samp.callNative('db_get_field_int', 'ii', result, field);
    }
    static db_get_field_float(result, field) {
        return samp.callNativeFloat('db_get_field_float', 'ii', result, field);
    }
    static db_get_field_assoc(dbresult, field, maxlength) {
        return samp.callNative('db_get_field_assoc', 'isSi', dbresult, field, maxlength);
    }
    static db_get_field_assoc_int(result, field) {
        return samp.callNative('db_get_field_assoc_int', 'is', result, field);
    }
    static db_get_field_assoc_float(result, field) {
        return samp.callNativeFloat('db_get_field_assoc_float', 'is', result, field);
    }
    static db_get_mem_handle(db) {
        return samp.callNative('db_get_mem_handle', 'i', db);
    }
    static db_get_result_mem_handle(result) {
        return samp.callNative('db_get_result_mem_handle', 'i', result);
    }
    static db_debug_openfiles() {
        return samp.callNative('db_debug_openfiles', '');
    }
    static db_debug_openresults() {
        return samp.callNative('db_debug_openresults', '');
    }
    static CreateVehicle(vehicletype, x, y, z, rotation, color1, color2, respawn_delay, addsiren) {
        return samp.callNative('CreateVehicle', 'iffffiiii', vehicletype, x, y, z, rotation, color1, color2, respawn_delay, addsiren);
    }
    static DestroyVehicle(vehicleid) {
        return samp.callNative('DestroyVehicle', 'i', vehicleid);
    }
    static IsVehicleStreamedIn(vehicleid, forplayerid) {
        return samp.callNative('IsVehicleStreamedIn', 'ii', vehicleid, forplayerid);
    }
    static GetVehiclePos(vehicleid) {
        const values = samp.callNative('GetVehiclePos', 'iFFF', vehicleid);
        if (values.length < 3) {
            throw "VehicleID " + vehicleid + " not found";
        }
        return {
            x: values[0],
            y: values[1],
            z: values[2]
        };
    }
    static SetVehiclePos(vehicleid, x, y, z) {
        return samp.callNative('SetVehiclePos', 'ifff', vehicleid, x, y, z);
    }
    static GetVehicleZAngle(vehicleid) {
        return samp.callNative('GetVehicleZAngle', 'iF', vehicleid);
    }
    static GetVehicleRotationQuat(vehicleid) {
        return samp.callNative('GetVehicleRotationQuat', 'iFFFF', vehicleid);
    }
    static GetVehicleDistanceFromPoint(vehicleid, X, Y, Z) {
        return samp.callNativeFloat('GetVehicleDistanceFromPoint', 'ifff', vehicleid, X, Y, Z);
    }
    static SetVehicleZAngle(vehicleid, z_angle) {
        return samp.callNative('SetVehicleZAngle', 'if', vehicleid, z_angle);
    }
    static SetVehicleParamsForPlayer(vehicleid, playerid, objective, doorslocked) {
        return samp.callNative('SetVehicleParamsForPlayer', 'iiii', vehicleid, playerid, objective, doorslocked);
    }
    static ManualVehicleEngineAndLights() {
        return samp.callNative('ManualVehicleEngineAndLights', '');
    }
    static SetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective) {
        return samp.callNative('SetVehicleParamsEx', 'iiiiiiii', vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
    }
    static GetVehicleParamsEx(vehicleid) {
        return samp.callNative('GetVehicleParamsEx', 'iIIIIIII', vehicleid);
    }
    static GetVehicleParamsSirenState(vehicleid) {
        return samp.callNative('GetVehicleParamsSirenState', 'i', vehicleid);
    }
    static SetVehicleParamsCarDoors(vehicleid, driver, passenger, backleft, backright) {
        return samp.callNative('SetVehicleParamsCarDoors', 'iiiii', vehicleid, driver, passenger, backleft, backright);
    }
    static GetVehicleParamsCarDoors(vehicleid) {
        const values = samp.callNative('GetVehicleParamsCarDoors', 'iIIII', vehicleid);
        return {
            driver: values[0],
            passenger: values[1],
            backleft: values[2],
            backright: values[3]
        };
    }
    static SetVehicleParamsCarWindows(vehicleid, driver, passenger, backleft, backright) {
        return samp.callNative('SetVehicleParamsCarWindows', 'iiiii', vehicleid, driver, passenger, backleft, backright);
    }
    static GetVehicleParamsCarWindows(vehicleid) {
        const values = samp.callNative('GetVehicleParamsCarWindows', 'iIIII', vehicleid);
        return {
            driver: values[0],
            passenger: values[1],
            backleft: values[2],
            backright: values[3]
        };
    }
    static SetVehicleToRespawn(vehicleid) {
        return samp.callNative('SetVehicleToRespawn', 'i', vehicleid);
    }
    static LinkVehicleToInterior(vehicleid, interiorid) {
        return samp.callNative('LinkVehicleToInterior', 'ii', vehicleid, interiorid);
    }
    static AddVehicleComponent(vehicleid, componentid) {
        return samp.callNative('AddVehicleComponent', 'ii', vehicleid, componentid);
    }
    static RemoveVehicleComponent(vehicleid, componentid) {
        return samp.callNative('RemoveVehicleComponent', 'ii', vehicleid, componentid);
    }
    static ChangeVehicleColor(vehicleid, color1, color2) {
        return samp.callNative('ChangeVehicleColor', 'iii', vehicleid, color1, color2);
    }
    static ChangeVehiclePaintjob(vehicleid, paintjobid) {
        return samp.callNative('ChangeVehiclePaintjob', 'ii', vehicleid, paintjobid);
    }
    static SetVehicleHealth(vehicleid, health) {
        return samp.callNative('SetVehicleHealth', 'if', vehicleid, health);
    }
    static GetVehicleHealth(vehicleid) {
        return samp.callNative('GetVehicleHealth', 'iF', vehicleid);
    }
    static AttachTrailerToVehicle(trailerid, vehicleid) {
        return samp.callNative('AttachTrailerToVehicle', 'ii', trailerid, vehicleid);
    }
    static DetachTrailerFromVehicle(vehicleid) {
        return samp.callNative('DetachTrailerFromVehicle', 'i', vehicleid);
    }
    static IsTrailerAttachedToVehicle(vehicleid) {
        return samp.callNative('IsTrailerAttachedToVehicle', 'i', vehicleid);
    }
    static GetVehicleTrailer(vehicleid) {
        return samp.callNative('GetVehicleTrailer', 'i', vehicleid);
    }
    static SetVehicleNumberPlate(vehicleid, numberplate) {
        return samp.callNative('SetVehicleNumberPlate', 'is', vehicleid, numberplate);
    }
    static GetVehicleModel(vehicleid) {
        return samp.callNative('GetVehicleModel', 'i', vehicleid);
    }
    static GetVehicleComponentInSlot(vehicleid, slot) {
        return samp.callNative('GetVehicleComponentInSlot', 'ii', vehicleid, slot);
    }
    static GetVehicleComponentType(component) {
        return samp.callNative('GetVehicleComponentType', 'i', component);
    }
    static RepairVehicle(vehicleid) {
        return samp.callNative('RepairVehicle', 'i', vehicleid);
    }
    static GetVehicleVelocity(vehicleid) {
        return samp.callNative('GetVehicleVelocity', 'iFFF', vehicleid);
    }
    static SetVehicleVelocity(vehicleid, X, Y, Z) {
        return samp.callNative('SetVehicleVelocity', 'ifff', vehicleid, X, Y, Z);
    }
    static SetVehicleAngularVelocity(vehicleid, X, Y, Z) {
        return samp.callNative('SetVehicleAngularVelocity', 'ifff', vehicleid, X, Y, Z);
    }
    static GetVehicleDamageStatus(vehicleid) {
        const values = samp.callNative('GetVehicleDamageStatus', 'iIIII', vehicleid);
        if (values.length < 4) {
            throw "VehicleID " + vehicleid + " not found";
        }
        return {
            panels: values[0],
            doors: values[1],
            lights: values[2],
            tires: values[3]
        };
    }
    static UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires) {
        return samp.callNative('UpdateVehicleDamageStatus', 'iiiii', vehicleid, panels, doors, lights, tires);
    }
    static GetVehicleModelInfo(vehiclemodel, infotype) {
        const values = samp.callNative('GetVehicleModelInfo', 'iiFFF', vehiclemodel, infotype);
        if (values.length < 3) {
            throw "ModelID " + vehiclemodel + " not found";
        }
        return {
            x: values[0],
            y: values[1],
            z: values[2]
        };
    }
    static SetVehicleVirtualWorld(vehicleid, worldid) {
        return samp.callNative('SetVehicleVirtualWorld', 'ii', vehicleid, worldid);
    }
    static GetVehicleVirtualWorld(vehicleid) {
        return samp.callNative('GetVehicleVirtualWorld', 'i', vehicleid);
    }
    static IsValidVehicle(vehicleid) {
        return samp.callNative('IsValidVehicle', 'i', vehicleid);
    }
}
exports.SampFunctions = SampFunctions;
//# sourceMappingURL=SampFunctions.js.map