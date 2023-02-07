import styled from 'styled-components';
import { Outlet, NavLink } from 'react-router-dom';

/* Component ---------------------------*/
import Inset from '@/Common/PagesLayout/Inset';

const Component = () => {
    return (
        <ComponentStyled className='Component'>
            <Inset>
                <h1>Course Work</h1>
                <nav className='sublinks'>
                    <NavLink to="/course-work/">Essays</NavLink>
                    <NavLink to="/course-work/sun-and-moon">Sun and Moon</NavLink>
                </nav>
                <Outlet />
            </Inset>
        </ComponentStyled>
    );
}

export default Component;

const ComponentStyled = styled.main`

`;