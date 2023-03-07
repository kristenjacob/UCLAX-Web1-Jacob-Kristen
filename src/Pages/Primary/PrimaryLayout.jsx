import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

/* Component ---------------------------*/
import Inset from '@/Common/PagesLayout/Inset';

const PrimaryLayout = () => {
    return (
        <PrimaryLayoutStyled className='PrimaryLayout'>
                <Outlet />
        </PrimaryLayoutStyled>
        );
}

export default PrimaryLayout;

const PrimaryLayoutStyled = styled.main``;