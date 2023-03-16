import styled from 'styled-components';

/* Components ---------------------------*/
import Inset from './Inset.jsx';
import SiteLogo from './SiteLogo/SiteLogo.jsx';

const Footer = () => {
    return (
        <FooterStyled className='Footer'>
            <Inset>
                <div className="logo">
                    <SiteLogo />
                </div>
                <h2>
                    The Next Generation :: Space: The Final Frontier
                </h2>
                <div className="copyright">
                    Winter Quarter 2023. UCLAx.<br></br>
                    Kristen Jacob
                </div>
            </Inset>
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
    color: #000000;

    padding: 20px 0px;

    text-align: center;

    .logo {
        display: flex;
        justify-content: center;
        .SiteLogo {
            margin-bottom: 10px;
            width: 150px;
        }
    }

    h2 {
        color: #449af5;
        margin: 5px 0px;
        font-size: 14px;
    }

    .copyright {
        font-size: 14px;
        color: #449af5;
    }

`;