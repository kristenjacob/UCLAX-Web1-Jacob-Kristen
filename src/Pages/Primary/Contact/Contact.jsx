import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

/* Components ---------------------------*/
import Inset from '@/Common/PagesLayout/Inset';
import Form from './Form';
import SubmissionList from './SubmissionList';

const Contact = () => {

    const [submissions, submissionsUpdate] = useState([]);

    const getSubmissions = async () => {
        const { data } = await axios.get("http://localhost:4059/submissions");
        submissionsUpdate(data);
    }

    // When component mounts
    useEffect(() => {
        getSubmissions();
    }, []);

    return (
        <ContactStyled className="Contact">
            <Inset>
                <h1>Trasmit Message</h1>
                <Form getSubmissions={ getSubmissions } />
                <SubmissionList submissions={ submissions } />
            </Inset>
        </ContactStyled>
    );
};

export default Contact;

const ContactStyled = styled.div``;
