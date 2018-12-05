import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import Root from './screens/Root';
import '../node_modules/animate.css/animate.min.css';
const history = createBrowserHistory();

render(
    <Router history={history}>
        <Root />
    </Router>,
    document.getElementById('root'));
