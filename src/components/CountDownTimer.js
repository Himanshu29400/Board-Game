import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {getTimeLeft} from '../selectors';
import TimerDigitCard from './TimerDigitCard';
import timerClockIcon from '../assets/timer-clock.png';

const TimerContainer = styled.div`
    display: flex;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const CountDownTimer = () => {
    const timeLeft = useSelector(getTimeLeft);

    const firstDigit = timeLeft.toString().length >= 2 ? timeLeft.toString()[0] : '0';
    const secondDigit = timeLeft.toString()[timeLeft.toString().length - 1];

    return (
        <TimerContainer className="timer-container">
            <img src={timerClockIcon} alt="Timer Clock" className="timer-clock-icon" />
            <div className="timer-digits-separator" />
            <div className="timer-digits-separator" />
            <TimerDigitCard digit={firstDigit} />
            <div className="timer-digits-separator" />
            <TimerDigitCard digit={secondDigit} />
        </TimerContainer>
    );
};

export default CountDownTimer;
