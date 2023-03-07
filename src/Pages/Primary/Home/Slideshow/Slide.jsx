import styled from 'styled-components';

const Slide = ({slide}) => {
    return (
        <SlideStyled className='Slide'>
            <img src={slide.image} alt={slide.title} />
            <div className="legend">{slide.title}</div>
        </SlideStyled>
    );
}

export default Slide;

const SlideStyled = styled.div`

`;