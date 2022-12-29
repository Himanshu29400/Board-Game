/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';
import {GAME_STATUS} from '../../constants';

const gameSlice = createSlice({
    name: 'gameInfo',
    initialState: {
        status: GAME_STATUS.NOT_STARTED,
        turn: undefined,
        timeLeft: 0,
    },
    reducers: {
        gameStarted(state) {
            state['status'] = GAME_STATUS.ONGOING;
            state['turn'] = 0;
        },
        gamePaused(state) {
            state['status'] = GAME_STATUS.PAUSED;
        },
        gameResumed(state) {
            state['status'] = GAME_STATUS.ONGOING;
        },
        gameFinished(state) {
            state['status'] = GAME_STATUS.FINISHED;
            state['turn'] = undefined;
        },
        timeLeftChanged(state, action) {
            state['timeLeft'] = action.payload.timeLeft;
        },
    },
});

export const {gameStarted, gamePaused, gameResumed, gameFinished, turnChanged} = gameSlice.actions;
export default gameSlice.reducer;
