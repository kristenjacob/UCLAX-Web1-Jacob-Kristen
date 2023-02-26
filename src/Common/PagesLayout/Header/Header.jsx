import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Media Query -------------------*/
import { useMediaQuery } from '@/Common/useMediaQuery';

/* Components ---------------------------*/
import MediumLarge from './MediumLarge';
import Small from './Small';

const Header = () => {

    const { isMediumAndUp } = useMediaQuery();

    return (
        <HeaderStyled className="Header">
            {isMediumAndUp ? <MediumLarge /> : <Small />}
        </HeaderStyled>
    );
};

export default Header;

const HeaderStyled = styled.header`

`;