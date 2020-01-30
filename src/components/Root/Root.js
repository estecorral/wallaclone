import React from 'react';
import { Router } from 'react-router-dom';

import App from '../App';

const Root = ({history, ...props}) => (
    <Router history={history}>
        <App {...props}/>
    </Router>
);

export default Root;