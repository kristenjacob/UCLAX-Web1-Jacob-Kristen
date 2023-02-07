import React from 'react';
import ReactDOM from 'react-dom/client';

/* React Router Dom ------------------*/
import { HashRouter } from 'react-router-dom';

/* Components -------------------*/
import App from './App';

/* Global CSS ---------------------------*/
import './Common/css/normalize.css';
import './Common/css/global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
        <App />
    </HashRouter>
);
