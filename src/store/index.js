import {configureStore} from '@reduxjs/toolkit';
import gameReducer from './slices/game';
import gridReducer from './slices/grid';
import playersReducer from './slices/players';

export default configureStore({
    reducer: {
        game: gameReducer,
        grid: gridReducer,
        players: playersReducer,
    },
});
