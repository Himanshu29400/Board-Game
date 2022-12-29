/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';

const playersSlice = createSlice({
    name: 'playersInfo',
    initialState: {
        0: {
            name: 'Player A',
            color: 'red',
            score: 0,
            markedBorders: [],
            markedSquares: [],
        },
        1: {
            name: 'Player B',
            color: 'blue',
            score: 0,
            markedBorders: [],
            markedSquares: [],
        },
    },
    reducers: {
        nameChanged(state, action) {
            const playerId = action.payload.id;
            const newName = action.payload.name;
            state[playerId]['name'] = newName;
        },
        borderMarked(state, action) {
            const playerId = action.payload.id;
            const borderCoordinates = action.payload.borderCoordinates;
            state[playerId]['markedBorders'].push(borderCoordinates);
        },
        SquaresMarked(state, action) {
            const playerId = action.payload.id;
            const newScore = action.payload.score;
            const squaresCoordinates = action.payload.squaresCoordinates;
            state[playerId]['score'] = newScore;
            state[playerId]['markedSquares'].push(...squaresCoordinates);
        },
    },
});

export const {nameChanged, borderMarked, SquaresMarked} = playersSlice.actions;
export default playersSlice.reducer;
