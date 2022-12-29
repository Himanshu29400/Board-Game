import './App.css';
import React from 'react';
import Header from './components/header';
import OverlayPanel from './components/OverlayPanel';
import styled from 'styled-components';
import Grid from './components/Grid';

const AppContainer = styled.div`
    display: flex;
`;

const PlayGround = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const GridContainer = styled.div`
    background-color: yellow;
    flex: 1;
`;

function App() {
    return (
        <AppContainer>
            <OverlayPanel />
            <PlayGround>
                <Header />
                <GridContainer>
                    <Grid />
                </GridContainer>
            </PlayGround>
        </AppContainer>
    );
}

export default App;
