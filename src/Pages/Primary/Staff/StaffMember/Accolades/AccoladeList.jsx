import styled from 'styled-components';

/* Components ---------------------------*/
import Accolade from './Accolade';

const AccoladeList = ({member}) => {
    return (
        <AccoladeListStyled className='AccoladeList'>

            {
                member.accolades.map((accolade, idx) => {
                    return <Accolade key= { idx } accolade={ accolade } />
                })
            }


        </AccoladeListStyled>
    );
}

export default AccoladeList;

const AccoladeListStyled = styled.ul`
    padding-left: 20px;
    list-style-type: disc;

`;