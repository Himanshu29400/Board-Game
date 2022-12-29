import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import PlayerName from './PlayerName';
import Score from './Score';
import {getCurrentTurnPlayerId} from '../selectors';
import {useSelector} from 'react-redux';
import {getPlayerColor} from '../selectors/players';

const ScorecardLayout = styled.div`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    ${(props) =>
        props.isMyTurn &&
        css`
            outline: 2px solid ${props.color};
            outline-offset: 3px;
        `}
    ${(props) =>
        !props.isMyTurn &&
        css`
            box-shadow: 0px 10px 18px #888888;
        `}
    margin: 20px;
`;

const Scorecard = ({playerId}) => {
    const currentTurnPlayerId = useSelector(getCurrentTurnPlayerId);
    const isMyTurn = currentTurnPlayerId === playerId;

    const playerColor = useSelector((state) => getPlayerColor(state, playerId));

    return (
        <ScorecardLayout className="scorecard" isMyTurn={isMyTurn} color={playerColor}>
            <PlayerName playerId={playerId} />
            <Score playerId={playerId} />
        </ScorecardLayout>
    );
};

Scorecard.propTypes = {
    playerId: PropTypes.number.isRequired,
};

export default Scorecard;
