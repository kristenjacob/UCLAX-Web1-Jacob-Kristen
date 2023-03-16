import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
} from '@fortawesome/free-solid-svg-icons'

const Hamburger = ({toggleMenu}) => {
    return (
        <HamburgerStyled className='Hamburger' onClick={ toggleMenu }>
            <FontAwesomeIcon icon={ faBars} />
        </HamburgerStyled>
    );
}

export default Hamburger;

const HamburgerStyled = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;

    font-size: 30px;
    color: #449af5;

    cursor: pointer;
`;