import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/login';
import Register from './pages/register';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
        </Switch>
    );
}
