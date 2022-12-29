import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TimerDigit = styled.div`
    color: white;
    background-color: #484848;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0px 5px 10px #888888;
    background-image: linear-gradient(#787878, #484848);
`;

const TimerDigitCard = ({digit}) => {
    return <TimerDigit className="timer-digit">{digit}</TimerDigit>;
};

TimerDigitCard.propTypes = {
    digit: PropTypes.string.isRequired,
};

export default TimerDigitCard;
