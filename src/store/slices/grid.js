import {createSlice} from '@reduxjs/toolkit'

const gridSlice = createSlice({
    name: 'gridInfo',
    initialState: {
        gridSize: [1, 1]
    },
    reducers: {
        gridSizeChanged(state, action) {
            const newGridSize = action.payload.gridSize;
            state['gridSize'] = newGridSize;
        }
    }
  })

export const {gridSizeChanged} = gridSlice.actions;
export default gridSlice.reducer;
