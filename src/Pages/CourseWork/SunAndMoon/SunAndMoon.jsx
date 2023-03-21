import { useState } from 'react';
import styled from 'styled-components';

import sunSrc from './images/goodpicard.jpeg';
import moonSrc from './images/badpicard.webp';

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
            <h2>Resistence is futile.</h2>
            <body>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/N75XngwbZQY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </body>
            <div className="sunMoonImage">
                <img
                    src={imgSrc}
                    onMouseEnter={changeToMoon}
                    onMouseLeave={changeToSun}
                />
            </div>
            </SunAndMoonStyled>
        );
};

export default SunAndMoon;

// CSS: Styles
const SunAndMoonStyled = styled.div`
    .sunMoonImage {
        text-align: center;

        h2 {
            font-size: 50px;
            color: #2FDE52;
        }

        img {
            border: solid 20px #95090e;
            margin: 30px;
            padding: 20px;
            background-color: #da0a25;
    }
}
`;