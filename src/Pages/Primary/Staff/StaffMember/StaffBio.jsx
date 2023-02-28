import styled from 'styled-components';

/* Components ---------------------------*/
import AccoladeList from './Accolades/AccoladeList';

const StaffBio = ({member}) => {
    return (
        <StaffBioStyled className='StaffBio'>
            <div className="year"><b>Year Starter:</b>{member.yearStarted}</div>
            <AccoladeList member={ member }/>
        </StaffBioStyled>
    );
}

export default StaffBio;

const StaffBioStyled = styled.div`
    padding: 20px;
    font-size: 14px;

`;