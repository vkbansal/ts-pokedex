import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Page from './Page';

const App = (
    <Router>
        <Switch>
            <Route path="/:page?" exact component={Page} />
        </Switch>
    </Router>
)

ReactDOM.render(App, document.getElementById('container'));
