import styled from 'styled-components';

/* Components ---------------------------*/
import SlideList from './SlideList';

const Slideshow = () => {
    return (
        <SlideshowStyled className='Slideshow'>
            <SlideList />
        </SlideshowStyled>
    );
}

export default Slideshow;

const SlideshowStyled = styled.div`

`;