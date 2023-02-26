import styled from 'styled-components';
import { Outlet, NavLink } from 'react-router-dom';

/* Component ---------------------------*/
import Inset from '@/Common/PagesLayout/Inset';

const CourseWorkLayout = () => {
    return (
        <CourseWorkLayoutStyled className='Component'>
            <Inset>
                <h1>Course Work</h1>
                <nav className='sublinks'>
                    <NavLink to="/course-work" end>Essays</NavLink>
                    <NavLink to="/course-work/sun-and-moon">Sun and Moon</NavLink>
                    <NavLink to="/course-work/responsive">Responsive</NavLink>
                </nav>
                <Outlet />
            </Inset>
        </CourseWorkLayoutStyled>
    );
}

export default CourseWorkLayout;

const CourseWorkLayoutStyled = styled.main`

`;