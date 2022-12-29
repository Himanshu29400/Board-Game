import {createSelector} from '@reduxjs/toolkit';

export const getGridInfo = (state) => state.grid;

export const getCurrentGridSize = createSelector(getGridInfo, (gridInfo) => gridInfo.gridSize);
