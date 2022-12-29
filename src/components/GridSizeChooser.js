import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCurrentGridSize} from '../selectors/grid';
import {getCurrentGameStatus} from '../selectors';
import {GAME_STATUS, GRID_SIZES} from '../constants';
import styled, {css} from 'styled-components';
import {gridSizeChanged} from '../store/slices/grid';

const GridSizeChooserContainer = styled.div`
    text-align: center;
    padding: 0.2em;
    font-weight: bold;
    color: black;
    background-color: #a9a9a9;
    transition: color 0.1s, background-color 0.1s;
    ${(props) =>
        !props.hasGameStarted &&
        css`
            &:hover {
                color: white;
                background-color: #404040;
            }
        `}
    box-sizing: border-box;
    margin: 0.6em;
    box-shadow: 0px 10px 10px #d0d0d0;
`;

const Dropdown = styled.select`
    outline: none;
    background-color: #f0f0f0;
    ${(props) =>
        !props.hasGameStarted &&
        css`
            cursor: pointer;
        `}
`;

const GridSizeChooser = () => {
    const currentGridSize = useSelector(getCurrentGridSize);
    const currentGameStatus = useSelector(getCurrentGameStatus);
    const hasGameStarted = currentGameStatus !== GAME_STATUS.NOT_STARTED;

    const dispatch = useDispatch();

    const handleGridSizeChange = (event) => {
        dispatch(gridSizeChanged(event.target.value));
    };

    return (
        <GridSizeChooserContainer hasGameStarted={hasGameStarted}>
            <div>Grid size chooser</div>
            <Dropdown
                value={currentGridSize}
                onChange={handleGridSizeChange}
                disabled={hasGameStarted}
                hasGameStarted={hasGameStarted}
            >
                {GRID_SIZES.map((gridSize) => (
                    <option value={gridSize} key={gridSize}>
                        {gridSize.replace('x', ' x ')}
                    </option>
                ))}
            </Dropdown>
        </GridSizeChooserContainer>
    );
};

export default GridSizeChooser;
