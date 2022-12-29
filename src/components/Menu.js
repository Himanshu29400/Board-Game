import React from 'react';
import styled from 'styled-components';
import InstructionsButton from './InstructionsButton';
import StartPauseButton from './StartPauseButton';
import GridSizeChooser from './GridSizeChooser';

const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #f0f0f0;
`;

function Menu() {
    return (
        <MenuContainer className="menu-container">
            <InstructionsButton />
            <StartPauseButton />
            <GridSizeChooser />
        </MenuContainer>
    );
}

export default Menu;
