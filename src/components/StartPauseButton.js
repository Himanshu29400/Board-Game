import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {getCurrentGameStatus} from '../selectors';
import {GAME_STATUS} from '../constants';
import {gamePaused, gameStarted, gameResumed} from '../store/slices/game';

const Button = styled.div`
    text-align: center;
    padding: 0.2em;
    padding-top: 0.1em;
    font-weight: bold;
    color: black;
    background-color: #a9a9a9;
    transition: color 0.1s, background-color 0.1s;
    &:hover {
        color: white;
        background-color: #404040;
    }
    box-sizing: border-box;
    margin: 0.6em;
    cursor: pointer;
    box-shadow: 0px 10px 10px #d0d0d0;
`;

function StartPauseButton() {
    const currentGameStatus = useSelector(getCurrentGameStatus);
    const isGameGoingOn = currentGameStatus === GAME_STATUS.ONGOING;

    const dispatch = useDispatch();

    const handleButtonClick = () => {
        // eslint-disable-next-line default-case
        switch (currentGameStatus) {
            case GAME_STATUS.NOT_STARTED: {
                dispatch(gameStarted());
                break;
            }
            case GAME_STATUS.ONGOING: {
                dispatch(gamePaused());
                break;
            }
            case GAME_STATUS.PAUSED: {
                dispatch(gameResumed());
                break;
            }
        }
    };

    return (
        <Button onClick={handleButtonClick}>
            <span>{isGameGoingOn ? '||' : '▶'}</span>
        </Button>
    );
}

export default StartPauseButton;
