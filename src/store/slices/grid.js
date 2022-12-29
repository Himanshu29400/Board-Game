/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';
import {DEFAULT_GRID_SIZE} from '../../constants';

const gridSlice = createSlice({
    name: 'gridInfo',
    initialState: {
        gridSize: DEFAULT_GRID_SIZE,
    },
    reducers: {
        gridSizeChanged(state, action) {
            state['gridSize'] = action.payload;
        },
    },
});

export const {gridSizeChanged} = gridSlice.actions;
export default gridSlice.reducer;
