import {createSelector} from '@reduxjs/toolkit';

export const getAllPlayersInfo = (state) => state.players;

export const getPlayerInfo = createSelector(
    getAllPlayersInfo,
    (state, playerId) => playerId,
    (playersInfo, playerId) => playersInfo[playerId],
);

export const getPlayerName = createSelector(getPlayerInfo, (playerInfo) => playerInfo.name);
export const getPlayerColor = createSelector(getPlayerInfo, (playerInfo) => playerInfo.color);
export const getPlayerScore = createSelector(getPlayerInfo, (playerInfo) => playerInfo.score);
