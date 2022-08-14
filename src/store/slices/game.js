import {createSlice} from '@reduxjs/toolkit'
import {GAME_STATUS} from '../../constants';

const gameSlice = createSlice({
    name: 'gameInfo',
    initialState: {
        status: GAME_STATUS.NOT_STARTED,
        turn: undefined,
    },
    reducers: {
        gameStarted(state, action) {
            state['status'] = GAME_STATUS.ONGOING;
            state['turn'] = 0;
        },
        gamePaused(state, action) {
            state['status'] = GAME_STATUS.PAUSED;
        },
        gameFinished(state, action) {
            state['status'] = GAME_STATUS.FINISHED;
            state['turn'] = undefined;
        }
    }
})

export const {turnChanged} = gameSlice.actions;
export default gameSlice.reducer;
