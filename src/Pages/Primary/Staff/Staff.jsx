import styled from 'styled-components';

/* Components ---------------------------*/
import StaffList from './StaffList';

const Staff = () => {
    return (
        <StaffStyled className='Staff'>
            <h1>Staff</h1>
            <StaffList />
        </StaffStyled>
    );
}

export default Staff;

const StaffStyled = styled.div`

`;
