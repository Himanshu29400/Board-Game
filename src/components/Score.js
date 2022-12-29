import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {getPlayerScore} from '../selectors/players';
import {useSelector} from 'react-redux';

const ScoreContainer = styled.div`
    background-color: black;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    text-align: center;
    font-weight: bold;
    color: white;
`;

const Score = ({playerId}) => {
    const playerScore = useSelector((state) => getPlayerScore(state, playerId));

    return <ScoreContainer className="score">{playerScore}</ScoreContainer>;
};

Score.propTypes = {
    playerId: PropTypes.number.isRequired,
};

export default Score;
