import {createSelector} from '@reduxjs/toolkit'

export const getGameInfo = (state) => state.game;

export const getCurrentGameStatus = createSelector(getGameInfo, (gameInfo) => gameInfo.status);
