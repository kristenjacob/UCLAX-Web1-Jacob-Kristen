import { useState } from 'react';
import styled from 'styled-components';

import sunSrc from './images/sun.png';
import moonSrc from './images/moon.png';

const SunAndMoon = () => {


    //JavaScript

    const [imgSrc, imgSrcUpdate] = useState(sunSrc);

    const changeToMoon = () => {
        // console.log("Moon");
        imgSrcUpdate(moonSrc);
    }

    const changeToSun = () => {
        // console.log("Sun");
        imgSrcUpdate(sunSrc);
    }

    // HTML
    return (
        <SunAndMoonStyled>
            <h2>Sun And Moon</h2>
            <img src={imgSrc} onMouseEnter={changeToMoon} onMouseLeave={changeToSun}/>
            </SunAndMoonStyled>
        );
};

export default SunAndMoon;

// CSS: Styles
const SunAndMoonStyled = styled.div`
    text-align: center;

    h2 {
        font-size: 50px;
        color: teal;
    }

    img {
        border: solid 20px teal;
        margin: 30px;
        padding: 20px;
        background-color: #073e3e;
    }
`;