import styled from 'styled-components';

/* Media Query -------------------*/
import { useMediaQuery, breakpoints } from '@/Common/useMediaQuery';

const Responsive = () => {

    const { isMediumAndUp } = useMediaQuery();

    return (
        <ResponsiveStyled className='Responsive'>
            <h2>Responsive Design</h2>

            <div className="boxes">
                { isMediumAndUp && <div className="box box1">1</div> }
                <div className="box box2">2</div>
                <div className="box box3">3</div>
            </div>
        </ResponsiveStyled>
    );
}

export default Responsive;

const ResponsiveStyled = styled.div`

    @media ${breakpoints.isMediumAndUp} {
    .boxes{
        display: flex;
        justify-content: center;
        }
    }
    .box{
            width:100%;
            height: 200px;
            margin: 10px;
            font-size: 50px;
            text-align: center;
            color: white;
            background-color: teal;
            line-height: 200px;

    }
    .box2 { border-radius: 40px; }
    .box3 { border-radius: 100px; }

    @media ${breakpoints.isMediumAndUp} {
        .box{ background-color: indigo;}
    }

    @media ${breakpoints.isLargeAndUp} {
        .box{ background-color: green;}
    }
`;