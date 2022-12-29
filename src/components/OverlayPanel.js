import React, {useState} from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import leftArrowIcon from '../assets/left-arrow-icon.png';
import rightArrowIcon from '../assets/right-arrow-icon.png';

const OverlayPanelContainer = styled.div`
    display: flex;
    height: 100vh;
`;

const MenuToggler = styled.div`
    display: flex;
    font-weight: bold;
    align-items: center;
    background-color: #a9a9a9;
    color: black;
    cursor: pointer;
`;
const OpenCloseArrowIcon = styled.img`
    width: 100%;
`;

function OverlayPanel() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <OverlayPanelContainer>
            {isMenuOpen && <Menu />}
            <MenuToggler
                className="menu-toggler"
                onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                }}
            >
                <OpenCloseArrowIcon src={isMenuOpen ? leftArrowIcon : rightArrowIcon} alt="Close" className="" />
            </MenuToggler>
        </OverlayPanelContainer>
    );
}

export default OverlayPanel;
