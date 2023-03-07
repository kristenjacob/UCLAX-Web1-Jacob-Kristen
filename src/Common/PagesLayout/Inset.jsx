import styled from 'styled-components';

const Inset = ({ children }) => {
    return <InsetStyled className="Inset">{children}</InsetStyled>;
};

export default Inset;

const InsetStyled = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 0px 10px;

`;
