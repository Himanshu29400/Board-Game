import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PlayerName from './PlayerName';
import Score from './Score';

const ScorecardLayout = styled.div`
    margin: 20px;
`

const Scorecard = ({playerId})=>{
    return (
        <ScorecardLayout className='scorecard'>
            <PlayerName playerId={playerId} />
            <Score playerId={playerId} />
        </ScorecardLayout>
    )
};

Scorecard.propTypes = {
    playerId: PropTypes.number.isRequired,
}

export default Scorecard;
