import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
    text-align: center;
    padding: 0.2em;
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

function InstructionsButton() {
    return <Button>?</Button>;
}

export default InstructionsButton;
