import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import editIcon from '../assets/edit-icon.png';
import tickIcon from '../assets/tick-icon.png';
import {useSelector} from 'react-redux';
import {getPlayerName, getPlayerColor} from '../selectors/players';
import {getCurrentGameStatus} from '../selectors';
import {GAME_STATUS} from '../constants';

const NameContainer = styled.div`
    background-color: ${props => props.backgroundColor};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
    font-weight: bold;
    color: white;
`

const Image = styled.img`
    float: right;
    cursor: pointer;
`

const TextInput = styled.input`
    display: inline-block;
    font-size: 1em;
    font-weight: bold;
    width: 75%;
    text-align: center;
    color: white;
    background-color: transparent;
    border: none;
    outline: none;
`

const PlayerName = ({playerId}) => {
    const playerName = useSelector(state => getPlayerName(state, playerId));
    const playerColor = useSelector(state => getPlayerColor(state, playerId));
    const isPlayerNameEditable = useSelector(state => getCurrentGameStatus(state)===GAME_STATUS.NOT_STARTED);

    const [newPlayerName, setNewPlayerName] = useState('');
    const [isPlayerNameBeingEdited, setIsPlayerNameBeingEdited] = useState(false);

    const refContainer = useRef(null);

    const allowPlayerNameEdit = () => {
        setIsPlayerNameBeingEdited(true);
    }

    useEffect(() => {
        if(isPlayerNameBeingEdited){
            refContainer.current.focus();
        } else {
            refContainer.current = null;
        }
    }, [isPlayerNameBeingEdited]);

    const handleNameChange = (event) => {
        setNewPlayerName(event.target.value);
    }

    return (
        <NameContainer className='playername' backgroundColor={playerColor}>
            {isPlayerNameBeingEdited?
                <>
                    <TextInput
                        value={newPlayerName}
                        onChange={handleNameChange}
                        type='text'
                        id='new-player-name'
                        name='new-player-name'
                        placeholder={'type your name...'}
                        ref={refContainer}
                    />
                    <Image src={tickIcon} alt='Enter' className='tick-icon' />
                </>:
                <>
                    <span>{playerName}</span>
                    {isPlayerNameEditable && <Image src={editIcon} alt='Edit' className='edit-icon' onClick={allowPlayerNameEdit} />}
                </>
            }
        </NameContainer>
    )
}

PlayerName.propTypes = {
    playerId: PropTypes.number.isRequired,
}

export default PlayerName;
