import styled from 'styled-components';

import Submission from './Submission';

const SubmissionList = ({ submissions }) => {
    return (
        <SubmissionListStyled className='SubmissionList'>
            {
                submissions.map((submission) => {
                    return <Submission key={ submission.id } submission={ submission } />;
                })
            }
        </SubmissionListStyled>
    );
}

export default SubmissionList;

const SubmissionListStyled = styled.div`
    margin: 20px 0px;
`;