import styled from 'styled-components';

/* Data ---------------------------*/
import { staffData } from './staffData';

/* Components ---------------------------*/
import StaffMember from './StaffMember/StaffMember';

const StaffList = () => {
    return (
        <StaffListStyled className='StaffList'>
            {
                staffData.map((member) => {
                    return <StaffMember key={ member.id } member={ member }/>
                })
            }
        </StaffListStyled>
    );
}

export default StaffList;

const StaffListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
`;