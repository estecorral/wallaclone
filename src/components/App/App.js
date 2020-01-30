import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from '../Register';

const App = () => (
        <Switch>
            <Route path="/register" exact component={Register} />
        </Switch>
);

export default App;