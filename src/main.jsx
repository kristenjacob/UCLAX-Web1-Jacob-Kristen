import React from 'react';
import ReactDOM from 'react-dom/client';

/* React Router Dom ------------------*/
import { HashRouter } from 'react-router-dom';

/* Media Queries-------------------*/
import { MediaQueryProvider } from '@/Common/useMediaQuery';

/* Components -------------------*/
import App from './App';

/* Global CSS ---------------------------*/
import './Common/css/normalize.css';
import './Common/css/global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
        <MediaQueryProvider>
            <App />
        </MediaQueryProvider>
    </HashRouter>
);
