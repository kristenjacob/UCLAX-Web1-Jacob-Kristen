import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

/* Components ---------------------------*/
import Header from './Header/Header.jsx';
import Footer from './Footer.jsx';

const PagesLayout = () => {
    return (
        <PagesLayoutStyled className='PagesLayout'>
            <Header />
            <Outlet />
            <Footer />
        </PagesLayoutStyled>
    );
}

export default PagesLayout;

const PagesLayoutStyled = styled.div`
    main {
        background-color: #000000;
        min-height: 600px;
        .Inset {
            padding: 50px 10px;
        }
    }
`;