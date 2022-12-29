import {createSelector} from '@reduxjs/toolkit';

export const getGameInfo = (state) => state.game;

export const getCurrentGameStatus = createSelector(getGameInfo, (gameInfo) => gameInfo.status);
export const getTimeLeft = createSelector(getGameInfo, (gameInfo) => gameInfo.timeLeft);
export const getCurrentTurnPlayerId = createSelector(getGameInfo, (gameInfo) => gameInfo.turn);
