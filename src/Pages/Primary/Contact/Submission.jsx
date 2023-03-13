import styled from 'styled-components';

const Submission = ({submission}) => {
    return (
        <SubmissionStyled className='Submission'>
            { submission.name } :: { submission.email } :: { submission.message }
        </SubmissionStyled>
    );
}

export default Submission;

const SubmissionStyled = styled.div`
    outline: solid 1px #999;
    padding: 10px;
    margin: 10px 0px;

`;