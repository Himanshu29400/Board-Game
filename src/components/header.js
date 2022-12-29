import React from 'react';
import styled from 'styled-components';
import Scorecard from './Scorecard';
import CountDownTimer from './CountDownTimer';

const HeaderLayout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = () => {
    return (
        <HeaderLayout>
            <Scorecard playerId={0} />
            <CountDownTimer />
            <Scorecard playerId={1} />
        </HeaderLayout>
    );
};

export default Header;
