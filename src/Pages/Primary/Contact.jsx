import styled from 'styled-components';

/* Components --------------*/
import Inset from '@/Common/PagesLayout/Inset';

const Contact = () => {
    return (
        <ContactStyled className='Contact'>
            <Inset>
                <h1>Contact</h1>
            </Inset>
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div``;
